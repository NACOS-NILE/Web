"use client";

import { useEffect, RefObject } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Magnetic-button effect: while the pointer is within `padding` px of the
 * element's box, the element eases toward the cursor (scaled by `strength`).
 * Snaps back to rest on pointer leave. Fine-pointer + no-reduced-motion only
 * — touch devices and reduced-motion users get a perfectly normal button.
 */
export function useMagnetic<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { strength = 0.35, padding = 24 }: { strength?: number; padding?: number } = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (prefersReducedMotion()) return;

    const setX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const setY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const reach = Math.max(rect.width, rect.height) / 2 + padding;
      const dist = Math.hypot(dx, dy);

      if (dist < reach) {
        setX(dx * strength);
        setY(dy * strength);
      } else {
        setX(0);
        setY(0);
      }
    };

    const handleLeave = () => {
      setX(0);
      setY(0);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    el.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
      gsap.set(el, { clearProps: "x,y" });
    };
  }, [ref, strength, padding]);
}
