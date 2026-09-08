"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { MagneticElement } from "../animations/MagneticElement";

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const line3Ref = useRef<HTMLHeadingElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle horizontal parallax drift on the three gigantic typography lines
      if (line1Ref.current && line2Ref.current && line3Ref.current) {
        gsap.fromTo(
          line1Ref.current,
          { x: -30 },
          {
            x: 25,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );

        gsap.fromTo(
          line2Ref.current,
          { x: 30 },
          {
            x: -25,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );

        gsap.fromTo(
          line3Ref.current,
          { x: -20 },
          {
            x: 20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      // Entrance animation for the CTA block
      if (ctaContainerRef.current) {
        gsap.fromTo(
          ctaContainerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaContainerRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      id="cta"
      ref={sectionRef}
      aria-label="Final Call to Action — Join NACOS Nile"
      className="relative w-full bg-[#0A0A0A] text-[#F7F7F5] py-28 sm:py-36 md:py-48 overflow-hidden"
    >
      {/* Editorial Watermark / Chapter Stamp in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none"
      >
        <span className="font-heading text-[45vw] tracking-tighter leading-none text-white uppercase">
          NILE
        </span>
      </div>

      {/* TOP EDITORIAL METADATA BAR */}
      <Container size="default">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-8 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F7F7F5] animate-pulse" />
            <span className="text-white font-medium">NACOS NILE</span>
            <span className="text-neutral-600">/</span>
            <span>CHAPTER PORTAL</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline">NILE UNIVERSITY OF NIGERIA</span>
            <span className="hidden md:inline text-neutral-600">•</span>
            <span>ABUJA, FCT</span>
          </div>
        </div>
      </Container>

      {/* MAIN STATEMENT: GIGANTIC EDITORIAL POSTER TYPOGRAPHY */}
      <Container size="full" className="px-4 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-[1600px] overflow-hidden">
            {/* Line 1: COME */}
            <div className="overflow-hidden py-1">
              <h2
                ref={line1Ref}
                className="font-heading text-[20vw] sm:text-[18vw] md:text-[17vw] lg:text-[16vw] xl:text-[15.5vw] font-bold uppercase tracking-[-0.04em] leading-[0.8] text-[#F7F7F5] will-change-transform"
              >
                COME
              </h2>
            </div>

            {/* Line 2: BUILD */}
            <div className="overflow-hidden py-1">
              <h2
                ref={line2Ref}
                className="font-heading text-[20vw] sm:text-[18vw] md:text-[17vw] lg:text-[16vw] xl:text-[15.5vw] font-bold uppercase tracking-[-0.04em] leading-[0.8] text-[#F7F7F5] will-change-transform"
              >
                BUILD
              </h2>
            </div>

            {/* Line 3: WITH US. */}
            <div className="overflow-hidden py-1">
              <h2
                ref={line3Ref}
                className="font-heading text-[20vw] sm:text-[18vw] md:text-[17vw] lg:text-[16vw] xl:text-[15.5vw] font-bold uppercase tracking-[-0.04em] leading-[0.8] text-neutral-400 will-change-transform"
              >
                WITH US<span className="text-[#F7F7F5]">.</span>
              </h2>
            </div>
          </div>
        </div>
      </Container>

      {/* PRIMARY ACTION & LUXURY REFINED INTERACTION */}
      <Container size="default">
        <div
          ref={ctaContainerRef}
          className="flex flex-col items-center justify-center text-center gap-10 sm:gap-14 pt-4 pb-16 border-b border-white/10"
        >
          {/* Subtitle / Closing Thesis Statement */}
          <p className="max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400 font-sans font-light">
            Every software system, every security protocol, and every breakthrough begins with a community that dares to build. Your seat is waiting.
          </p>

          {/* Primary Action Button */}
          <div className="pt-2">
            <MagneticElement strength={0.32}>
              <Link
                href="#community"
                data-cursor="OPEN"
                className="group relative inline-flex items-center gap-4 sm:gap-6 rounded-[2px] bg-[#F7F7F5] px-8 sm:px-12 py-5 sm:py-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-[#0A0A0A] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-2xl focus-visible:outline-white"
              >
                <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1">
                  JOIN THE COMMUNITY
                </span>

                <span
                  aria-hidden="true"
                  className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#0A0A0A] text-[#F7F7F5] text-xs font-bold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:bg-[#111111]"
                >
                  →
                </span>
              </Link>
            </MagneticElement>
          </div>
        </div>
      </Container>

      {/* SECONDARY EDITORIAL METADATA & CHAPTER SIGN-OFF */}
      <Container size="default" className="pt-12 sm:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500">
          <div className="space-y-1.5">
            <div className="text-neutral-400 font-semibold">CHAPTER</div>
            <div>NACOS NILE UNIVERSITY</div>
            <div>ABUJA, FCT, NIGERIA</div>
          </div>

          <div className="space-y-1.5">
            <div className="text-neutral-400 font-semibold">REPRESENTATION</div>
            <div>COMPUTING STUDENTS</div>
            <div>FACULTY OF NATURAL SCIENCES</div>
          </div>

          <div className="space-y-1.5">
            <div className="text-neutral-400 font-semibold">DISCIPLINES</div>
            <div>CS • SE • CYBER • IT • IS • DS</div>
            <div>UNDERGRADUATE &amp; POSTGRAD</div>
          </div>

          <div className="space-y-1.5 sm:text-right">
            <div className="text-neutral-400 font-semibold">SESSION</div>
            <div>ACADEMIC YEAR 2025 / 2026</div>
            <div className="text-neutral-300">SEE YOU INSIDE ↗</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
