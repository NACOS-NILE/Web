"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedLink } from "../ui/AnimatedLink";
import { EDITORIAL_IMAGES } from "@/lib/images";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (line1Ref.current && line2Ref.current && line3Ref.current) {
        gsap.to(line1Ref.current, {
          x: -24,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(line2Ref.current, {
          x: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(line3Ref.current, {
          x: -16,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 md:py-44 bg-[#F7F7F5] text-neutral-900 border-t border-neutral-900/10 overflow-hidden"
    >
      {/* Top Section Meta Row */}
      <Container size="default">
        <div className="flex items-center justify-between border-b border-neutral-900/10 pb-6">
          <SectionLabel label="About NACOS" showLine className="text-neutral-500" />
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#274193] font-semibold">
            Nile Chapter
          </span>
        </div>
      </Container>

      {/* Massive Editorial Statement with Brand Accent */}
      <Container size="default" className="pt-16 sm:pt-24 md:pt-28 pb-16 sm:pb-24">
        <div ref={headlineRef} className="select-none">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="font-heading text-[clamp(3.2rem,7.5vw,9rem)] leading-[0.84] tracking-tight uppercase text-neutral-950"
          >
            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.div
                ref={line1Ref}
                initial={shouldReduceMotion ? { y: 0 } : { y: "115%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block will-change-transform"
              >
                MORE THAN
              </motion.div>
            </div>

            {/* Line 2 (Asymmetrically Offset in Brand Accent Blue) */}
            <div className="overflow-hidden pl-4 sm:pl-16 md:pl-28 lg:pl-36">
              <motion.div
                ref={line2Ref}
                initial={shouldReduceMotion ? { y: 0 } : { y: "115%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[#274193] will-change-transform"
              >
                A STUDENT
              </motion.div>
            </div>

            {/* Line 3 */}
            <div className="overflow-hidden">
              <motion.div
                ref={line3Ref}
                initial={shouldReduceMotion ? { y: 0 } : { y: "115%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block will-change-transform"
              >
                ASSOCIATION.
              </motion.div>
            </div>
          </motion.h2>
        </div>
      </Container>

      {/* Asymmetrical Narrative & Photography Composition */}
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left / Narrative Block */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 max-w-xl"
            >
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-neutral-900 font-normal">
                NACOS Nile is the unifying digital nerve-center for Nile University&apos;s computing minds. We operate at the intersection of student ambition and industry rigor.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-sans">
                Fostering software craft, collaborative engineering, cybersecurity defense, and technological research. Not just an association, but an active collective of builders shaping the future of African computing. From first-year algorithmic foundations to competitive hackathons, our community exists to turn academic curiosity into production-ready capability.
              </p>

              <div className="pt-4">
                <AnimatedLink
                  href="#disciplines"
                  arrow
                  cursorLabel="EXPLORE"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[#274193] hover:text-black"
                >
                  Explore Academic Disciplines
                </AnimatedLink>
              </div>
            </motion.div>

            {/* Typography-Driven Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 sm:mt-20 pt-8 border-t border-neutral-900/10 grid grid-cols-2 sm:grid-cols-4 gap-8"
            >
              <div>
                <div className="font-heading text-4xl sm:text-5xl text-neutral-950 leading-none mb-1">
                  06
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                  Disciplines
                </div>
              </div>

              <div>
                <div className="font-heading text-4xl sm:text-5xl text-neutral-950 leading-none mb-1">
                  09
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                  Executive Excos
                </div>
              </div>

              <div>
                <div className="font-heading text-4xl sm:text-5xl text-[#274193] leading-none mb-1">
                  NUN
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                  Nile University
                </div>
              </div>

              <div>
                <div className="font-heading text-4xl sm:text-5xl text-neutral-950 leading-none mb-1">
                  ABJ
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                  Abuja, Nigeria
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right / Offset Editorial Artwork */}
          <div className="lg:col-span-5 flex flex-col items-end">
            <div
              ref={imageRef}
              className="relative w-full max-w-md lg:max-w-sm xl:max-w-md will-change-transform"
            >
              <motion.div
                data-cursor="VIEW"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { clipPath: "inset(100% 0 0 0)", opacity: 0 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { clipPath: "inset(0% 0 0 0)", opacity: 1 }
                }
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-neutral-200 border border-neutral-900/10 shadow-lg"
              >
                <Image
                  src={EDITORIAL_IMAGES.about}
                  alt="Nile University students collaborating on computing and software projects"
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 30vw"
                  className="object-cover object-center grayscale contrast-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
