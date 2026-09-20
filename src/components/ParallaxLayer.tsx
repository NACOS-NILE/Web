"use client";

import { useCallback, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ParallaxLayerProps = {
  children?: ReactNode;
  className?: string;
  /** Fraction of its own height the layer drifts over the section's scroll. */
  speed?: number;
};

/**
 * A decorative layer that drifts as its section scrolls past, so the colour
 * washes sit behind the content instead of moving locked to it. Give sibling
 * layers different speeds and they read as separate depths.
 *
 * Always `aria-hidden` — these carry no meaning. Intended for absolutely
 * positioned children of a clipped container, so the drift never exposes an
 * edge.
 */
export default function ParallaxLayer({ children, className = "", speed = 0.18 }: ParallaxLayerProps) {
  const attach = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(node, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            // The layer itself moves, so drive it from the section around it.
            trigger: node.parentElement ?? node,
            start: "top bottom",
            end: "bottom top",
            // A little scrub lag keeps the drift from feeling glued to the wheel.
            scrub: 0.6,
          },
        });
      });

      return () => mm.revert();
    },
    [speed],
  );

  return (
    <div ref={attach} aria-hidden="true" className={className}>
      {children}
    </div>
  );
}
