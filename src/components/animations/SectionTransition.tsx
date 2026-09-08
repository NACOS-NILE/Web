"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SectionTransitionProps {
  type?: "dark-to-light" | "light-to-dark" | "kinetic-type";
}

export function SectionTransition({ type = "light-to-dark" }: SectionTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (type === "dark-to-light" && panelRef.current) {
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
      } else if (type === "light-to-dark" && panelRef.current) {
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
      } else if (type === "kinetic-type" && textRef.current) {
        gsap.fromTo(
          textRef.current,
          { x: "15%" },
          {
            x: "-25%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
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
        className="relative h-20 sm:h-28 w-full overflow-hidden pointer-events-none bg-[#111111]"
      >
        <div
          ref={panelRef}
          className="absolute inset-0 bg-[#F7F7F5]"
        />
      </div>
    );
  }

  if (type === "light-to-dark") {
    return (
      <div
        ref={containerRef}
        aria-hidden="true"
        className="relative h-20 sm:h-28 w-full overflow-hidden pointer-events-none bg-[#F7F7F5]"
      >
        <div
          ref={panelRef}
          className="absolute inset-0 bg-[#111111]"
        />
      </div>
    );
  }

  // kinetic-type (e.g. between Community and Final CTA)
  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative h-28 sm:h-36 w-full overflow-hidden pointer-events-none bg-[#111111] flex items-center border-t border-white/10"
    >
      <div
        ref={textRef}
        className="whitespace-nowrap font-heading text-6xl sm:text-8xl md:text-9xl uppercase tracking-widest text-neutral-800/40 select-none"
      >
        BUILD • COLLABORATE • LEAD • ADVANCE • SOLVE •
      </div>
    </div>
  );
}
