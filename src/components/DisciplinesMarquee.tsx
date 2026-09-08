"use client";

import { useEffect, useRef } from "react";

const RESUME_DELAY_MS = 2000;

export function DisciplinesMarquee({
  items,
  speed = 28,
}: {
  items: string[];
  /** Auto-scroll speed in pixels per second (mobile only). */
  speed?: number;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (reduceMotion || !isMobile) return;

    let rafId: number;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        track.scrollLeft += (speed * dt) / 1000;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const pause = () => {
      pausedRef.current = true;
      clearTimeout(resumeTimeoutRef.current);
    };
    const scheduleResume = () => {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        pausedRef.current = false;
      }, RESUME_DELAY_MS);
    };

    track.addEventListener("pointerdown", pause);
    track.addEventListener("pointerup", scheduleResume);
    track.addEventListener("pointercancel", scheduleResume);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", scheduleResume, { passive: true });
    track.addEventListener("wheel", scheduleResume, { passive: true });
    track.addEventListener("scroll", scheduleResume, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resumeTimeoutRef.current);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("pointerup", scheduleResume);
      track.removeEventListener("pointercancel", scheduleResume);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", scheduleResume);
      track.removeEventListener("wheel", scheduleResume);
      track.removeEventListener("scroll", scheduleResume);
    };
  }, [speed]);

  const pillClass =
    "shrink-0 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium whitespace-nowrap text-white/75 sm:text-sm";

  return (
    <ul
      ref={trackRef}
      className="scrollbar-hide flex w-full max-w-full flex-nowrap gap-2 overflow-x-auto pt-4 pb-1 sm:justify-center"
      aria-label="Disciplines"
    >
      {items.map((name) => (
        <li key={name} className={pillClass}>
          {name}
        </li>
      ))}
      {/* Decorative duplicate: gives the mobile auto-scroll loop a seamless second lap. */}
      {items.map((name) => (
        <li key={`dup-${name}`} aria-hidden="true" className={`${pillClass} sm:hidden`}>
          {name}
        </li>
      ))}
    </ul>
  );
}
