"use client";

import { useCallback, type ElementType, type ReactNode } from "react";
import gsap from "gsap";

export type RevealVariant = "rise" | "scale" | "slide-left" | "slide-right";

/**
 * One entry per motion. Easing carries as much character as the distance does,
 * so each variant gets its own: text settles, cards overshoot a little, rows
 * glide in without a bounce.
 */
const MOTION: Record<RevealVariant, { from: gsap.TweenVars; duration: number; ease: string }> = {
  rise: { from: { y: 28 }, duration: 0.85, ease: "power3.out" },
  scale: { from: { scale: 0.9 }, duration: 0.7, ease: "back.out(1.2)" },
  "slide-left": { from: { x: -48 }, duration: 0.75, ease: "power2.out" },
  "slide-right": { from: { x: 48 }, duration: 0.75, ease: "power2.out" },
};

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, for lists of sibling cards. */
  delay?: number;
  /** Which motion to play. Sections use different ones so the page varies. */
  variant?: RevealVariant;
  className?: string;
  as?: ElementType;
};

/**
 * Eases content in the first time it scrolls into view.
 *
 * Content is always present in the DOM, so it stays crawlable. Only the hidden
 * opacity lives in globals.css — each variant supplies its own starting
 * transform — so the page never flashes its finished layout before this runs,
 * and a reader with no JavaScript still gets the `<noscript>` override in
 * layout.tsx.
 */
export default function Reveal({
  children,
  delay = 0,
  variant = "rise",
  className = "",
  as,
}: RevealProps) {
  // Typed as an intrinsic div so `ref`/`className` stay type-checked while
  // still rendering whichever semantic tag the caller asked for.
  const Tag = (as ?? "div") as unknown as "div";

  // A callback ref (rather than an effect) so the animation is wired up the
  // moment the node exists, and torn down via the returned cleanup.
  const attach = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;

      const { from, duration, ease } = MOTION[variant];
      const play = () =>
        gsap.fromTo(
          node,
          { opacity: 0, ...from },
          { opacity: 1, x: 0, y: 0, scale: 1, duration, ease, delay: delay / 1000 },
        );

      // gsap.matchMedia keeps the reduced-motion branch declarative, and
      // reverts cleanly if the reader changes the preference mid-visit.
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The boot failsafe un-hides everything if the bundle takes too long to
        // arrive. If that already fired, animating from opacity 0 would blink
        // text the reader can already see, so just leave it alone.
        if (!document.documentElement.classList.contains("anim-armed")) {
          gsap.set(node, { opacity: 1, x: 0, y: 0, scale: 1 });
          return;
        }

        // IntersectionObserver rather than ScrollTrigger: the browser
        // recomputes intersections as the page reflows, whereas ScrollTrigger
        // caches start positions at init. Six of the exec portraits load
        // lazily, and on a phone's single column they add thousands of pixels
        // of height afterwards — enough to leave every cached trigger below
        // them pointing at the wrong place, so those sections would never
        // reveal at all.
        if (typeof IntersectionObserver === "undefined") {
          gsap.set(node, { opacity: 1, x: 0, y: 0, scale: 1 });
          return;
        }

        const io = new IntersectionObserver(
          (entries) => {
            if (!entries.some((entry) => entry.isIntersecting)) return;
            io.disconnect();
            play();
          },
          // A small bottom inset so content starts moving just before it is
          // fully on screen; a tiny threshold so tall blocks still qualify.
          { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
        );

        io.observe(node);
        return () => io.disconnect();
      });

      // Nothing to animate — just clear the resting state.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(node, { opacity: 1, x: 0, y: 0, scale: 1 });
      });

      return () => mm.revert();
    },
    [delay, variant],
  );

  return (
    // `min-w-0` matters when a Reveal is a grid or flex item, which is most of
    // them. Those default to `min-width: auto` and so refuse to shrink below
    // their content's min-content width — and `truncate` sets `white-space:
    // nowrap`, which makes that the *untruncated* string. At 320px that pushed
    // the community cards to 371px in a 280px track and gave the whole page a
    // horizontal scrollbar. It is a no-op everywhere else.
    <Tag ref={attach} className={`reveal min-w-0 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
