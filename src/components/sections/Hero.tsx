"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { MagneticElement } from "../animations/MagneticElement";
import { EDITORIAL_IMAGES } from "@/lib/images";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax and scroll transitions
  useEffect(() => {
    if (shouldReduceMotion || !heroRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          y: -50,
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      if (imageContainerRef.current) {
        gsap.to(imageContainerRef.current, {
          y: -70,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const titleContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const titleLineVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.05,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 pb-10 md:pb-14 bg-[#111111] text-[#F7F7F5] overflow-hidden transition-colors duration-500"
    >
      {/* Top Meta Bar - Minimal & Clean */}
      <Container size="default">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between border-b border-white/10 pb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6] shrink-0" />
            <span className="font-semibold text-white tracking-widest">NACOS Nile Chapter</span>
          </div>

          <div className="hidden sm:block font-mono text-[10px] sm:text-[11px] text-neutral-400 shrink-0 ml-4">
            <span>Nile University of Nigeria</span>
          </div>
        </motion.div>
      </Container>

      {/* Main Hero Canvas */}
      <Container size="default" className="my-auto py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left Column: Headline & Actions */}
          <div className="lg:col-span-8 min-w-0 flex flex-col justify-between z-10">
            {/* Giant Manuka Headline */}
            <div ref={headlineRef}>
              <motion.h1
                variants={titleContainerVariants}
                initial="hidden"
                animate="visible"
                className="font-heading text-[clamp(3.5rem,6.8vw,7.5rem)] 2xl:text-[8.5rem] leading-[0.92] tracking-tight uppercase text-white select-none"
              >
                {/* Each line uses pb-2 overflow-visible to prevent clip of descenders / animation */}
                <div className="overflow-visible pb-2">
                  <motion.div variants={titleLineVariants} className="block">
                    WE BUILD
                  </motion.div>
                </div>
                <div className="overflow-visible pb-2">
                  <motion.div variants={titleLineVariants} className="block text-[#F7F7F5]">
                    TOGETHER<span className="text-[#3b82f6]">.</span>
                  </motion.div>
                </div>
              </motion.h1>
            </div>

            {/* Supporting Statement & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start"
            >
              <p className="sm:col-span-7 text-sm sm:text-base leading-relaxed text-neutral-300 font-sans max-w-md">
                Where Nile&apos;s computing minds connect, build, and lead. An independent student community advancing software engineering, cybersecurity, research, and technical leadership.
              </p>

              <div className="sm:col-span-5 flex flex-wrap sm:flex-col gap-4 sm:items-end justify-start">
                {/* Primary CTA with Magnetic Pull */}
                <MagneticElement strength={0.25}>
                  <Link
                    href="#community"
                    data-cursor="OPEN"
                    className="group inline-flex items-center gap-3 rounded-[2px] bg-[#274193] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#3453b3] shadow-md shadow-[#274193]/20"
                  >
                    <span>Join Community</span>
                    <span
                      aria-hidden="true"
                      className="inline-block text-[#93c5fd] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </MagneticElement>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Authentic Editorial Tech Workspace Image */}
          <div className="lg:col-span-4 min-w-0 lg:pl-4 xl:pl-8 flex flex-col justify-end">
            <div ref={imageContainerRef} className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-none mx-auto">
              <motion.div
                data-cursor="VIEW"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { clipPath: "inset(100% 0 0 0)", opacity: 0 }
                }
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { clipPath: "inset(0% 0 0 0)", opacity: 1 }
                }
                transition={{
                  duration: 1.25,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative aspect-[3/4] sm:aspect-[4/5] max-h-[380px] sm:max-h-[500px] 2xl:max-h-[560px] w-full overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 mx-auto"
              >
                <Image
                  src={EDITORIAL_IMAGES.hero}
                  alt="Students and developers building modern computing solutions at Nile University"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 35vw, 30vw"
                  className="object-cover object-center grayscale contrast-110 brightness-90 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                />

                {/* Subtle dark vignette */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-80" />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
