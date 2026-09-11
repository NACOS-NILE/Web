"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";

/**
 * Next.js re-mounts `template.tsx` on every navigation (unlike layout.tsx),
 * so this fires on every route change and gives / → /featured → /gallery a
 * soft crossfade instead of an instant hard swap.
 *
 * Opacity-only, deliberately no `y`/transform: the Navbar inside `children`
 * is `position: sticky`, and animating a transform on this wrapper would
 * make it the sticky element's containing block for the animation's
 * duration, causing a visible jump. Opacity doesn't have that side effect.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!wrapperRef.current) return;
    if (prefersReducedMotion()) return;

    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out", clearProps: "opacity" }
    );
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
