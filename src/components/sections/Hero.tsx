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
      className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 pb-10 md:pb-14 bg-[#0d1733] text-[#F7F7F5] overflow-hidden transition-colors duration-500"
    >
      {/* Top Meta Bar */}
      <Container size="default">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between border-b border-white/10 pb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            <span className="font-semibold text-white tracking-widest">NACOS Nile Chapter</span>
            <span className="hidden sm:inline text-neutral-600">/</span>
            <span className="hidden sm:inline text-neutral-400">Nile University of Nigeria</span>
          </div>

          <div className="font-mono text-[10px] sm:text-[11px] text-neutral-400">
            <span>Abuja, Nigeria</span>
          </div>
        </motion.div>
      </Container>

      {/* Main Hero Canvas */}
      <Container size="default" className="my-auto py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left Column: Headline & Actions */}
          <div className="lg:col-span-8 flex flex-col justify-between z-10">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 sm:mb-6 flex items-center gap-2.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#60a5fa]">
                Computing & Engineering Community
              </span>
            </motion.div>

            {/* Giant Manuka Headline */}
            <div ref={headlineRef}>
              <motion.h1
                variants={titleContainerVariants}
                initial="hidden"
                animate="visible"
                className="font-heading text-[clamp(4.2rem,11.5vw,12.5rem)] leading-[0.82] tracking-tight uppercase text-white select-none"
              >
                <div className="overflow-hidden">
                  <motion.div variants={titleLineVariants} className="block">
                    WE BUILD
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div variants={titleLineVariants} className="block text-[#F7F7F5]">
                    TOGETHER.
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

                {/* Secondary CTA: Scroll Anchor */}
                <Link
                  href="#about"
                  data-cursor="pointer"
                  className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-300 hover:text-white py-1"
                >
                  <span>Explore NACOS</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-y-0.5 text-[#60a5fa]"
                  >
                    ↓
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Authentic Editorial Tech Workspace Image */}
          <div className="lg:col-span-4 lg:pl-4 xl:pl-8 flex flex-col justify-end">
            <div ref={imageContainerRef} className="relative w-full max-w-md mx-auto lg:max-w-none">
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
                className="group relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10"
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
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0d1733]/70 via-transparent to-transparent opacity-80" />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
