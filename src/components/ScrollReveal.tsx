"use client";

import { useEffect } from "react";

/**
 * Drives every `.reveal` element from a single IntersectionObserver rather
 * than one per component, and unobserves each element once shown.
 *
 * Three layers of safety, because these elements start at opacity 0 and
 * must never be able to get stuck there:
 *   1. Anything already within (or near) the viewport at mount is shown
 *      synchronously, without waiting for an observer callback.
 *   2. Reduced-motion users skip the animation entirely.
 *   3. A failsafe timer reveals anything still hidden, so a missed or
 *      delayed observer callback can never leave content invisible.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (nodes.length === 0) return;

    const show = (el: Element) => el.setAttribute("data-shown", "true");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(show);
      return;
    }

    // 1. Reveal whatever is already on screen, before any observer runs.
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const pending: HTMLElement[] = [];
    for (const node of nodes) {
      const rect = node.getBoundingClientRect();
      if (rect.top < vh * 0.92 && rect.bottom > 0) show(node);
      else pending.push(node);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    pending.forEach((n) => io.observe(n));

    // 3. Failsafe: nothing stays hidden longer than this, whatever happens.
    const failsafe = window.setTimeout(() => nodes.forEach(show), 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
