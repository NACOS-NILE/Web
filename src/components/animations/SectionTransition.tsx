"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SectionTransitionProps {
  type?: "dark-to-light" | "light-to-dark" | "black-curtain" | "blue-glow";
}

export function SectionTransition({ type = "light-to-dark" }: SectionTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current || !panelRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (type === "dark-to-light") {
        gsap.fromTo(
          panelRef.current,
          { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%",
              end: "bottom 30%",
              scrub: 0.8,
            },
          }
        );
      } else if (type === "light-to-dark" || type === "black-curtain") {
        gsap.fromTo(
          panelRef.current,
          { scaleY: 0, transformOrigin: "bottom" },
          {
            scaleY: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              end: "center 50%",
              scrub: 0.6,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion, type]);

  if (type === "dark-to-light") {
    return (
      <div
        ref={containerRef}
        aria-hidden="true"
        className="relative h-16 sm:h-24 w-full overflow-hidden pointer-events-none bg-[#0d1733]"
      >
        <div
          ref={panelRef}
          className="absolute inset-0 bg-[#F7F7F5] transition-all"
        />
      </div>
    );
  }

  if (type === "light-to-dark") {
    return (
      <div
        ref={containerRef}
        aria-hidden="true"
        className="relative h-16 sm:h-24 w-full overflow-hidden pointer-events-none bg-[#F7F7F5]"
      >
        <div
          ref={panelRef}
          className="absolute inset-0 bg-[#111111] transition-all"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative h-12 sm:h-20 w-full overflow-hidden pointer-events-none bg-[#0d1733]"
    >
      <div
        ref={panelRef}
        className="absolute inset-0 bg-[#111111] transition-all"
      />
    </div>
  );
}
