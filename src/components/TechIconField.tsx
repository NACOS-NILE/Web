"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion, scheduleScrollTriggerRefresh, hasContentVisibilityAncestor } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";
import { TechIconGlyph, type TechIconType } from "./TechIconGlyph";

export interface TechIconSpec {
  id: string;
  type: TechIconType;
  side: "left" | "right";
  inset: number; // % from that side's edge of the wrapping container
  top: number; // % down the wrapping container
  size: number; // px
  rotate: number; // deg, static
  driftPercent: number; // yPercent range of the scroll drift (+/-)
  mouseFactor: number; // multiplier on the shared mouse-parallax offset
}

// Fixed 3-left/3-right geometry reused by every section — only the icon
// *types* change per caller (buildTechIcons), so each header reads as a
// different cluster of glyphs without re-tuning position/size/drift/mouse
// six times per section.
const GEOMETRY: Omit<TechIconSpec, "id" | "type">[] = [
  { side: "left", inset: 2, top: 8, size: 30, rotate: -8, driftPercent: 14, mouseFactor: 0.7 },
  { side: "left", inset: 0, top: 45, size: 36, rotate: 5, driftPercent: -18, mouseFactor: 1.15 },
  { side: "left", inset: 4, top: 82, size: 26, rotate: 4, driftPercent: 10, mouseFactor: 0.5 },
  { side: "right", inset: 1, top: 6, size: 32, rotate: 7, driftPercent: -12, mouseFactor: 0.9 },
  { side: "right", inset: 3.5, top: 46, size: 26, rotate: -5, driftPercent: 16, mouseFactor: 0.55 },
  { side: "right", inset: 0, top: 84, size: 34, rotate: -3, driftPercent: -10, mouseFactor: 1.05 },
];

/** Six icon types (3 for the left cluster, 3 for the right) mapped onto the shared geometry above. */
export function buildTechIcons(types: [TechIconType, TechIconType, TechIconType, TechIconType, TechIconType, TechIconType]): TechIconSpec[] {
  return GEOMETRY.map((g, i) => ({ ...g, id: `${types[i]}-${i}`, type: types[i] }));
}

/**
 * Ambient tech-icon field flanking a section header — code/terminal/
 * git-branch/cpu/database/cloud glyphs drifting at their own scroll rate
 * (scrub-tied to the wrapping container this field is rendered inside).
 *
 * Usage: wrap the header block in a `relative` div, render this as that
 * div's FIRST child (it reads `parentElement` as the scroll trigger and
 * drift container), then the header content after it with `relative z-10`
 * so it stays above this field's `z-0`.
 *
 * `xl:` and up only by default — below that a centered max-w-3xl/4xl header
 * leaves too narrow a gutter in a max-w-7xl section to fit icons without
 * crowding the text.
 */
export function TechIconField({
  icons,
  colorClassName = "text-[#274193]",
  minBreakpoint = "xl",
}: {
  icons: TechIconSpec[];
  colorClassName?: string;
  minBreakpoint?: "lg" | "xl";
}) {
  const layerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    const layer = layerRef.current;
    const container = layer?.parentElement;
    if (!layer || !container) return;
    if (prefersReducedMotion()) return;

    let cleanupMouse = () => {};

    const ctx = gsap.context(() => {
      // Scroll drift owns each icon's `yPercent` (a % of the icon's own
      // size — the "never quite settle" range below); mouse parallax below
      // owns plain px `x`/`y` on the same elements. Different named gsap
      // properties compose into one transform automatically, so the two
      // don't fight even though they're driven by separate effects.
      icons.forEach((spec, i) => {
        const el = iconRefs.current[i];
        if (!el) return;
        gsap.set(el, { rotation: spec.rotate });
        gsap.fromTo(
          el,
          { yPercent: -spec.driftPercent },
          {
            yPercent: spec.driftPercent,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              // Every header this field is used in sits under a
              // content-visibility:auto ancestor (see page.tsx), which
              // skips laying this subtree out while it's off-screen —
              // including *after* it scrolls back out the top, not just
              // before it arrives. Without invalidateOnRefresh + the
              // corrective refresh below, a refresh landing while the
              // header is (skipped and) reporting a collapsed size can
              // snap this tween to a wildly wrong yPercent for a frame —
              // that's the "flash" as a section's header leaves the screen.
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Mouse-follow drift — desktop/trackpad only, scoped to the nearest
      // <section> so it tracks "am I hovering this section", not just the
      // (often much smaller) header block the field is anchored in.
      const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      if (!isFinePointer) return;

      const hoverTarget = container.closest("section") ?? container;
      const MAX_X = 16;
      const MAX_Y = 10;

      const mouseTargets = icons
        .map((spec, i) => {
          const el = iconRefs.current[i];
          return el ? { spec, el } : null;
        })
        .filter((v): v is { spec: TechIconSpec; el: HTMLDivElement } => v !== null);

      const handleMouseMove = (e: MouseEvent) => {
        const rect = hoverTarget.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        mouseTargets.forEach(({ spec, el }) => {
          gsap.to(el, {
            x: nx * MAX_X * spec.mouseFactor,
            y: ny * MAX_Y * spec.mouseFactor,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };
      const handleMouseLeave = () => {
        mouseTargets.forEach(({ el }) => {
          gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "power3.out", overwrite: "auto" });
        });
      };

      hoverTarget.addEventListener("mousemove", handleMouseMove as EventListener, { passive: true });
      hoverTarget.addEventListener("mouseleave", handleMouseLeave);
      cleanupMouse = () => {
        hoverTarget.removeEventListener("mousemove", handleMouseMove as EventListener);
        hoverTarget.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Re-measure whenever this field crosses either edge of a generous
    // viewport margin — covers both "about to become relevant" (content-
    // visibility about to un-skip it) and "just left" (about to skip again)
    // so the drift tween's cached start/end stay honest in both directions
    // instead of only being corrected once, on the way in.
    // Only worth watching/refreshing if something up the tree can actually
    // hand this a collapsed measurement (see hasContentVisibilityAncestor) —
    // otherwise this is a global ScrollTrigger.refresh() on every scroll
    // pass, fixing a bug that isn't there.
    const revealObserver = hasContentVisibilityAncestor(container)
      ? new IntersectionObserver(() => scheduleScrollTriggerRefresh(), { rootMargin: "800px 0px" })
      : null;
    revealObserver?.observe(container);

    return () => {
      revealObserver?.disconnect();
      cleanupMouse();
      ctx.revert();
    };
  }, [icons]);

  const hiddenClass = minBreakpoint === "lg" ? "hidden lg:block" : "hidden xl:block";

  return (
    <div ref={layerRef} className={`${hiddenClass} absolute inset-0 z-0 pointer-events-none`} aria-hidden="true">
      {icons.map((icon, i) => (
        <div
          key={icon.id}
          ref={(el) => {
            iconRefs.current[i] = el;
          }}
          className={`absolute ${colorClassName} will-change-transform`}
          style={{
            [icon.side]: `${icon.inset}%`,
            top: `${icon.top}%`,
            width: icon.size,
            height: icon.size,
            opacity: 0.16,
          }}
        >
          <TechIconGlyph type={icon.type} />
        </div>
      ))}
    </div>
  );
}
