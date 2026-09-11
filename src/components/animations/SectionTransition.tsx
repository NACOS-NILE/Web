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
        // Continuous smooth infinite horizontal marquee carousel
        const tween = gsap.to(textRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 26,
          ease: "none",
        });

        // Dynamic scroll reaction: accelerate carousel when user scrolls
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const velocity = Math.abs(self.getVelocity());
            if (velocity > 40) {
              gsap.to(tween, {
                timeScale: Math.min(1 + velocity / 200, 3.5),
                duration: 0.25,
                overwrite: "auto",
                onComplete: () => {
                  gsap.to(tween, { timeScale: 1, duration: 1, ease: "power1.out" });
                },
              });
            }
          },
        });
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

  // kinetic-type strip between Community and Final CTA
  // Continuous smooth infinite horizontal marquee carousel
  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative h-44 sm:h-56 md:h-64 w-full overflow-hidden pointer-events-none bg-[#111111] flex items-center border-t border-white/10 select-none"
    >
      <div
        ref={textRef}
        className="flex whitespace-nowrap font-heading text-6xl sm:text-8xl md:text-9xl uppercase tracking-widest text-neutral-500/80 will-change-transform"
      >
        <span className="shrink-0 px-2">
          COLLABORATE &nbsp;·&nbsp; BUILD &nbsp;·&nbsp; LEARN &nbsp;·&nbsp; COLLABORATE &nbsp;·&nbsp; BUILD &nbsp;·&nbsp; LEARN &nbsp;·&nbsp;
        </span>
        <span className="shrink-0 px-2" aria-hidden="true">
          COLLABORATE &nbsp;·&nbsp; BUILD &nbsp;·&nbsp; LEARN &nbsp;·&nbsp; COLLABORATE &nbsp;·&nbsp; BUILD &nbsp;·&nbsp; LEARN &nbsp;·&nbsp;
        </span>
      </div>
    </div>
  );
}
