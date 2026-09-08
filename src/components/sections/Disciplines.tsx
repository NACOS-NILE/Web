"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";

interface DisciplineData {
  id: string;
  number: string;
  name: string;
  description: string;
  focus: string;
  image: string;
  caption: string;
}

const DISCIPLINES: DisciplineData[] = [
  {
    id: "cs",
    number: "01",
    name: "Computer Science",
    description:
      "Algorithmic foundations, computation theory, and the core mathematical mechanics underpinning modern software systems.",
    focus: "Algorithms • Complexity Theory • System Architectures",
    image: "/excos-pics/dtd.jpg",
    caption: "COMPUTATIONAL THEORY // DTD",
  },
  {
    id: "se",
    number: "02",
    name: "Software Engineering",
    description:
      "Large-scale distributed systems, architectural design patterns, testing rigor, and the end-to-end craft of production software.",
    focus: "Distributed Systems • Design Patterns • Full-Stack Craft",
    image: "/excos-pics/sg.jpg",
    caption: "SYSTEM ARCHITECTURE // SG",
  },
  {
    id: "cs-sec",
    number: "03",
    name: "Cyber Security",
    description:
      "Network defense, applied cryptography, defensive operations, vulnerability analysis, and digital infrastructure resilience.",
    focus: "Cryptography • Threat Modeling • Defensive Ops",
    image: "/excos-pics/provost.jpg",
    caption: "DEFENSIVE OPERATIONS // PROVOST",
  },
  {
    id: "it",
    number: "04",
    name: "Information Technology",
    description:
      "Cloud infrastructure, automated DevOps pipelines, systems administration, and enterprise communication networks.",
    focus: "Cloud Architecture • DevOps • Network Operations",
    image: "/excos-pics/fc.jpg",
    caption: "INFRASTRUCTURE & OPS // FC",
  },
  {
    id: "is",
    number: "05",
    name: "Information Systems",
    description:
      "Enterprise software integration, organizational data architectures, digital governance, and strategic technology leadership.",
    focus: "Enterprise Strategy • Data Governance • Workflows",
    image: "/excos-pics/pro.jpg",
    caption: "STRATEGY & GOVERNANCE // PRO",
  },
  {
    id: "ds",
    number: "06",
    name: "Data Science",
    description:
      "Statistical inference, machine learning algorithms, high-volume data pipelines, and computational intelligence.",
    focus: "Machine Learning • Statistical Inference • Analytics",
    image: "/excos-pics/socials.jpg",
    caption: "COMPUTATIONAL INTELLIGENCE // SOCIALS",
  },
];

export function Disciplines() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeDiscipline = DISCIPLINES[activeIndex];

  // GSAP ScrollTrigger for section choreography and pinned/parallax preview
  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Gentle parallax drift on the right preview column
      if (previewRef.current) {
        gsap.to(previewRef.current, {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const toggleMobile = (index: number) => {
    setMobileExpandedIndex(mobileExpandedIndex === index ? null : index);
    setActiveIndex(index);
  };

  return (
    <section
      id="disciplines"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 md:py-44 border-t border-neutral-900/10 overflow-hidden"
    >
      {/* Top Section Meta Row */}
      <Container size="default">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/10 pb-6">
          <SectionLabel number="02" label="Disciplines / Index" showLine />
          <div className="flex items-center gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400">
            <span className="hidden sm:inline">NUN Department of Computing</span>
            <span>06 Disciplines</span>
          </div>
        </div>
      </Container>

      {/* Section Header Statement */}
      <Container size="default" className="pt-16 sm:pt-24 md:pt-28 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(3.2rem,8.2vw,9.5rem)] leading-[0.84] tracking-tight uppercase text-neutral-950 select-none"
            >
              SIX WAYS
              <br />
              TO THINK
              <br />
              IN COMPUTING.
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm leading-relaxed text-neutral-600 max-w-sm"
            >
              The Nile computing community spans six core concentrations — from theoretical computation and systems architecture to cyber defense and computational intelligence.
            </motion.p>
          </div>
        </div>
      </Container>

      {/* Main Interactive Index Canvas */}
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Left Column: The Large Editorial List */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="border-t border-neutral-900/10">
              {DISCIPLINES.map((item, index) => {
                const isActive = activeIndex === index;
                const isMobileOpen = mobileExpandedIndex === index;

                return (
                  <div
                    key={item.id}
                    className="border-b border-neutral-900/10 transition-colors duration-400"
                  >
                    {/* Desktop Trigger / Row Item */}
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => toggleMobile(index)}
                      data-cursor="VIEW"
                      aria-expanded={isMobileOpen}
                      className="group w-full py-7 sm:py-9 text-left flex items-baseline justify-between gap-4 transition-all duration-300 focus-visible:outline-none"
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8 min-w-0">
                        <span
                          className={`font-mono text-xs sm:text-sm tracking-widest transition-colors duration-300 ${
                            isActive
                              ? "text-neutral-950 font-semibold"
                              : "text-neutral-400 group-hover:text-neutral-700"
                          }`}
                        >
                          {item.number}
                        </span>

                        <span
                          className={`font-heading text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase tracking-tight leading-[0.88] transition-all duration-400 will-change-transform ${
                            isActive
                              ? "text-neutral-950 translate-x-1 sm:translate-x-2"
                              : "text-neutral-400 group-hover:text-neutral-700"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>

                      {/* Micro Interaction Arrow / Indicator */}
                      <span
                        aria-hidden="true"
                        className={`font-mono text-xs transition-transform duration-300 ${
                          isActive
                            ? "text-neutral-950 translate-x-1"
                            : "text-neutral-300 opacity-0 group-hover:opacity-100"
                        } ${isMobileOpen ? "rotate-90" : ""}`}
                      >
                        →
                      </span>
                    </button>

                    {/* Mobile Expanded Drawer (Tap-to-expand) */}
                    <AnimatePresence>
                      {isMobileOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="lg:hidden overflow-hidden pb-8 space-y-4"
                        >
                          <p className="text-sm leading-relaxed text-neutral-600 font-sans">
                            {item.description}
                          </p>

                          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                            {item.focus}
                          </div>

                          {/* Mobile Inline Artwork */}
                          <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden bg-neutral-200/40 mt-3">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="(max-width: 768px) 80vw, 300px"
                              className="object-cover grayscale contrast-110"
                            />
                            <div className="absolute bottom-2 left-2 right-2 text-[9px] font-mono uppercase tracking-widest text-white bg-black/60 px-2 py-1">
                              {item.caption}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Micro Instruction Note */}
            <div className="pt-6 hidden lg:flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-mono">
              <span>[HOVER OR FOCUS A DISCIPLINE TO REVEAL FOLIO]</span>
              <span>INDEX 01—06</span>
            </div>
          </div>

          {/* Right Column: Desktop Sticky/Floating Editorial Artwork & Description */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32">
            <div ref={previewRef} className="space-y-6">
              {/* Dynamic Image Container */}
              <div
                data-cursor="VIEW"
                className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200/40 will-change-transform"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDiscipline.id}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={activeDiscipline.image}
                      alt={activeDiscipline.name}
                      fill
                      sizes="(max-width: 1200px) 40vw, 30vw"
                      priority
                      className="object-cover object-top grayscale contrast-110 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                    />

                    {/* Subtle bottom vignette */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* On-image Micro Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/90 font-mono">
                      <span>FOLIO // {activeDiscipline.number}</span>
                      <span>NACOS NILE</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic Metadata & Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDiscipline.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3 pt-2 border-t border-neutral-900/10"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                    <span>{activeDiscipline.caption}</span>
                    <span>NUN &apos;26</span>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-600 font-sans">
                    {activeDiscipline.description}
                  </p>

                  <div className="text-[11px] font-mono text-neutral-900 tracking-wider">
                    {activeDiscipline.focus}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
