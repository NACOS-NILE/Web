"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
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

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

    const ctx = gsap.context(() => {
      // Horizontal subtle parallax only on desktop/tablet to prevent mobile transform collisions
      if (isDesktop && line1Ref.current && line2Ref.current && line3Ref.current) {
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
          y: isDesktop ? -40 : -15,
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
      className="relative w-full py-12 sm:py-16 md:py-24 bg-[#F7F7F5] text-neutral-900 border-t border-neutral-900/10 overflow-hidden"
    >
      <Container size="default" className="pt-2 sm:pt-4">
        {/* Editorial Statement */}
        <div ref={headlineRef} className="select-none mb-10 sm:mb-14 md:mb-20">
          <h2 className="font-heading text-[clamp(2.15rem,6.2vw,5.5rem)] 2xl:text-[6.25rem] leading-[1.02] tracking-tight uppercase text-neutral-950">
            {/* Line 1 */}
            <div className="block pb-1">
              <div ref={line1Ref} className="block will-change-transform">
                MORE THAN
              </div>
            </div>

            {/* Line 2 (Asymmetrically Offset in Brand Accent Blue) */}
            <div className="block pl-3 sm:pl-16 md:pl-28 lg:pl-36 pb-1">
              <div ref={line2Ref} className="block text-[#274193] will-change-transform">
                A STUDENT
              </div>
            </div>

            {/* Line 3 */}
            <div className="block pb-1">
              <div ref={line3Ref} className="block will-change-transform">
                ASSOCIATION<span className="text-[#274193]">.</span>
              </div>
            </div>
          </h2>
        </div>

        {/* Asymmetrical Narrative & Photography Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left / Narrative Block */}
          <div className="md:col-span-7 min-w-0 flex flex-col justify-between pt-1 sm:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 max-w-xl"
            >
              <p className="text-base sm:text-xl md:text-2xl leading-relaxed text-neutral-900 font-normal">
                NACOS Nile is the unifying digital nerve-center for Nile University&apos;s computing minds. We operate at the intersection of student ambition and industry rigor.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-sans">
                Fostering software craft, collaborative engineering, cybersecurity defense, and technological research. Not just an association, but an active collective of builders shaping the future of African computing. From first-year algorithmic foundations to competitive hackathons, our community exists to turn academic curiosity into production-ready capability.
              </p>

              <div className="pt-2 sm:pt-4">
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
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 sm:mt-16 md:mt-20 pt-8 border-t border-neutral-900/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
            >
              <div>
                <div className="font-heading text-3xl sm:text-5xl text-neutral-950 leading-none mb-1">
                  06
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                  Disciplines
                </div>
              </div>

              <div>
                <div className="font-heading text-3xl sm:text-5xl text-neutral-950 leading-none mb-1">
                  09
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                  Executive Excos
                </div>
              </div>

              <div>
                <div className="font-heading text-3xl sm:text-5xl text-[#274193] leading-none mb-1">
                  NUN
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                  Nile University
                </div>
              </div>

              <div>
                <div className="font-heading text-3xl sm:text-5xl text-neutral-950 leading-none mb-1">
                  ABJ
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                  Abuja, Nigeria
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right / Offset Editorial Artwork */}
          <div className="md:col-span-5 min-w-0 flex flex-col items-center md:items-end mt-8 sm:mt-10 md:mt-0">
            <div
              ref={imageRef}
              className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-none mx-auto md:mx-0 will-change-transform"
            >
              <motion.div
                data-cursor="VIEW"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-neutral-200 border border-neutral-900/10 shadow-lg"
              >
                <Image
                  src={EDITORIAL_IMAGES.about}
                  alt="Nile University students collaborating on computing and software projects"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 40vw"
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
