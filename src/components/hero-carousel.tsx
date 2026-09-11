"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photos = [
  "workshop-1.webp",
  "faculty.webp",
  "dinner-4.webp",
  "100-level-orientation.webp",
  "dinner-3.webp",
  "stem-con.webp",
  "dinner-2.webp",
  "csw-speakers.webp",
  "6th-inaugural-lecture.webp",
  "Collective-Lab.webp",
];

// The ribbon advances one full loop every 70s over a path roughly one
// viewport plus overscan wide (~25-40px/s), so 256px of lookahead starts a
// card ~6-10s before it reaches the clipped backdrop: early enough to fetch
// on slow networks, small enough that far-offscreen cards stay deferred.
const LOOKAHEAD_PX = 256;
// Vertical tolerance for the hero band itself; cards only travel horizontally.
const EDGE_PX = 64;
// The animation moves cards without firing scroll/resize, so re-probe
// geometry on a timer until every card has loaded once. Ten rect reads at
// ~1.3Hz is negligible, and everything disconnects once the ribbon is fully
// loaded (or on unmount).
const CHECK_MS = 750;

// Static no-JS fallback: a still strip of plain lazy images. Browsers with
// scripting enabled parse <noscript> as inert text, so hydrated clients make
// zero requests for this markup.
const fallbackStrip =
  `<div style="position:absolute;left:0;right:0;bottom:24px;display:flex;gap:12px;justify-content:center;overflow:hidden;padding:0 24px">` +
  photos
    .map(
      (file) =>
        `<img src="/gallery/${file}" alt="" loading="lazy" decoding="async" width="220" height="165" style="width:144px;aspect-ratio:4/3;object-fit:cover;border-radius:20px;corner-shape:squircle" />`,
    )
    .join("") +
  `</div>`;

export function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const checkRef = useRef(() => {});
  // Every card renders as an empty fixed-aspect placeholder until its real
  // image is mounted, so gating never shifts layout. Starts all-false on
  // both server and client to avoid hydration mismatch; the mount effect
  // below promotes actually-visible cards immediately. Loaded cards stay
  // loaded for subsequent loops.
  const [loaded, setLoaded] = useState(() => photos.map(() => false));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      // Wrap outside the clipped backdrop so the loop has no visible seam.
      const cardWidth = track.firstElementChild?.clientWidth ?? 220;
      const span = Math.max(width + 480, (cardWidth + 28) * photos.length);
      const start = (width - span) / 2;
      const middleY = height * 0.72;
      const edgeY = middleY - height * 0.55 * (span / (width + 480)) ** 2;
      track.style.setProperty(
        "--carousel-path",
        `path("M ${start} ${edgeY} Q ${width / 2} ${2 * middleY - edgeY} ${width - start} ${edgeY}")`,
      );
      track.dataset.ready = "true";
      // The path (and therefore every card's on-screen position) changed.
      checkRef.current();
    });
    observer.observe(track);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Native loading="lazy" alone is unreliable here: all ten cards share one
    // layout origin and are distributed by an animated offset-path, so the
    // browser's near-viewport heuristics can treat offscreen cards as near.
    // Instead, probe painted geometry directly: getBoundingClientRect reflects
    // the offset-path position, letting us load each card only when it is
    // actually inside (or about to enter) the clipped backdrop and viewport.
    const clip = track.closest(".adaptive-hero-backdrop") ?? track.parentElement;
    const seen = new Set<number>();
    let heroNear = false;
    let timer: number | undefined;
    let disposed = false;

    const teardown = () => {
      if (timer !== undefined) {
        window.clearInterval(timer);
        timer = undefined;
      }
      heroObserver.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      document.removeEventListener("visibilitychange", onVisibility);
    };

    const check = () => {
      if (disposed || seen.size >= photos.length || !heroNear) return;
      // The path is installed asynchronously by the ResizeObserver above;
      // until then every card shares one unsplatted origin, so any rect
      // probe would falsely read all ten as co-located. Skip sampling
      // entirely until then — that observer re-invokes this check the
      // moment the path lands.
      if (track.dataset.ready !== "true") return;
      const clipRect = clip?.getBoundingClientRect();
      const found: number[] = [];
      cardRefs.current.forEach((card, index) => {
        if (!card || seen.has(index)) return;
        const rect = card.getBoundingClientRect();
        const nearClip =
          !clipRect ||
          (rect.right > clipRect.left - LOOKAHEAD_PX &&
            rect.left < clipRect.right + LOOKAHEAD_PX &&
            rect.bottom > clipRect.top - EDGE_PX &&
            rect.top < clipRect.bottom + EDGE_PX);
        // Scrolling the whole hero offscreen must not trigger loads.
        const nearView =
          rect.right > -LOOKAHEAD_PX &&
          rect.left < window.innerWidth + LOOKAHEAD_PX &&
          rect.bottom > -EDGE_PX &&
          rect.top < window.innerHeight + EDGE_PX;
        if (nearClip && nearView) {
          seen.add(index);
          found.push(index);
        }
      });
      if (found.length > 0) {
        setLoaded((prev) => {
          let changed = false;
          const next = prev.slice();
          for (const index of found) {
            if (!next[index]) {
              next[index] = true;
              changed = true;
            }
          }
          return changed ? next : prev;
        });
      }
      if (seen.size >= photos.length) teardown();
    };

    const onVisibility = () => {
      if (!document.hidden) check();
    };

    // The whole ribbon is pointless while scrolled away; gate everything on
    // the track itself being near the viewport (static element, so a plain
    // IntersectionObserver is reliable here).
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroNear = entry?.isIntersecting ?? false;
        if (heroNear) check();
      },
      { rootMargin: `${LOOKAHEAD_PX}px 0px` },
    );

    checkRef.current = check;
    heroObserver.observe(track);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    document.addEventListener("visibilitychange", onVisibility);
    timer = window.setInterval(check, CHECK_MS);

    // Seed hero proximity synchronously so the path callback's re-check can
    // load immediately without waiting for the IntersectionObserver round
    // trip. Do not sample card rects here: the ResizeObserver installs the
    // path asynchronously, so offsets are not applied yet; check() no-ops
    // until then and the observer re-runs it once they are. Frozen
    // reduced-motion cards simply probe at their resting positions.
    const trackRect = track.getBoundingClientRect();
    heroNear =
      trackRect.bottom > -LOOKAHEAD_PX &&
      trackRect.top < window.innerHeight + LOOKAHEAD_PX;
    check();

    return () => {
      disposed = true;
      checkRef.current = () => {};
      teardown();
    };
  }, []);

  return (
    <>
      <div ref={trackRef} className="hero-carousel" aria-hidden="true">
        {photos.map((file, index) => (
          <div
            key={file}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className="hero-carousel-photo"
            style={{ animationDelay: `${-index * 7}s` }}
          >
            {/* Keep a repaintable image source instead of a one-shot canvas.
                Each card mounts only once it is inside (or about to enter)
                the clipped hero, so the full ribbon loads progressively on
                approach instead of all 10 images firing eagerly. Rendered
                images use eager loading because mounting already implies
                proximity; the gate above replaces native lazy thresholds. */}
            {loaded[index] ? (
              <Image
                src={`/gallery/${file}`}
                alt=""
                width={640}
                height={480}
                sizes="(max-width: 960px) 144px, (max-width: 1467px) 15vw, 220px"
                loading="eager"
              />
            ) : null}
          </div>
        ))}
      </div>
      <noscript dangerouslySetInnerHTML={{ __html: fallbackStrip }} />
    </>
  );
}
