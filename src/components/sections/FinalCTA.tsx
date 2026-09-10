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
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { scale: 0.96, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }

      if (ctaContainerRef.current) {
        gsap.fromTo(
          ctaContainerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaContainerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Stagger the headline lines in
      const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(Boolean);
      lines.forEach((line, i) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { y: "80%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.1,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      id="cta"
      ref={sectionRef}
      aria-label="Final Call to Action — Join NACOS Nile"
      className="relative w-full bg-[#111111] text-[#F7F7F5] py-28 sm:py-36 md:py-48 overflow-hidden border-t border-white/10"
    >
      {/* Subtle Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.025] select-none"
      >
        <span className="font-heading text-[40vw] tracking-tighter leading-none text-white uppercase">
          NILE
        </span>
      </div>

      {/* Main Closing Statement — BLACK + WHITE + BLUE ACCENT (no green, no image mask) */}
      <Container size="full" className="px-4 sm:px-8 md:px-12 lg:px-16 py-8">
        <div ref={headlineRef} className="flex flex-col items-center justify-center text-center select-none py-2">
          <h2 className="font-heading text-[clamp(4.5rem,14vw,13rem)] uppercase tracking-tight leading-[0.88]">
            {/* Line 1: Grey */}
            <div className="overflow-visible pb-2">
              <div ref={line1Ref} className="block text-neutral-500 will-change-transform">
                COME
              </div>
            </div>

            {/* Line 2: Grey */}
            <div className="overflow-visible pb-2">
              <div ref={line2Ref} className="block text-neutral-500 will-change-transform">
                BUILD
              </div>
            </div>

            {/* Line 3: White — main emphasis */}
            <div className="overflow-visible pb-2">
              <div ref={line3Ref} className="block text-white will-change-transform">
                WITH US<span className="text-[#3b82f6]">.</span>
              </div>
            </div>
          </h2>
        </div>
      </Container>

      {/* Primary Action Button & Supporting Statement */}
      <Container size="default">
        <div
          ref={ctaContainerRef}
          className="flex flex-col items-center justify-center text-center gap-8 sm:gap-10 pt-4 pb-8"
        >
          {/* Subtle accent line */}
          <div className="w-16 h-[2px] bg-[#274193]" aria-hidden="true" />

          <p className="max-w-lg text-sm sm:text-base leading-relaxed text-neutral-400 font-sans">
            Every software system, every security protocol, and every technical breakthrough begins with a community that dares to build.
          </p>

          <MagneticElement strength={0.32}>
            <Link
              href="#community"
              data-cursor="OPEN"
              className="group inline-flex items-center gap-4 rounded-[2px] bg-[#274193] px-8 sm:px-12 py-4 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:bg-[#3453b3] shadow-2xl shadow-[#274193]/30"
            >
              <span>JOIN THE COMMUNITY</span>
              <span
                aria-hidden="true"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#274193] text-xs font-bold transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </MagneticElement>
        </div>
      </Container>
    </section>
  );
}
