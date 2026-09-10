"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "../layout/Container";
import { EDITORIAL_IMAGES } from "@/lib/images";

interface DisciplineData {
  id: string;
  name: string;
  description: string;
  focus: string;
  image: string;
}

const DISCIPLINES: DisciplineData[] = [
  {
    id: "cs",
    name: "Computer Science",
    description:
      "Algorithmic foundations, computation theory, and the core mathematical mechanics underpinning modern software systems.",
    focus: "Algorithms • Complexity Theory • System Architectures",
    image: EDITORIAL_IMAGES.disciplines.computerScience,
  },
  {
    id: "se",
    name: "Software Engineering",
    description:
      "Large-scale distributed systems, architectural design patterns, testing rigor, and the end-to-end craft of production software.",
    focus: "Distributed Systems • Design Patterns • Full-Stack Craft",
    image: EDITORIAL_IMAGES.disciplines.softwareEngineering,
  },
  {
    id: "cs-sec",
    name: "Cyber Security",
    description:
      "Network defense, applied cryptography, defensive operations, vulnerability analysis, and digital infrastructure resilience.",
    focus: "Cryptography • Threat Modeling • Defensive Operations",
    image: EDITORIAL_IMAGES.disciplines.cyberSecurity,
  },
  {
    id: "it",
    name: "Information Technology",
    description:
      "Cloud infrastructure, automated DevOps pipelines, systems administration, and enterprise communication networks.",
    focus: "Cloud Architecture • DevOps • Network Operations",
    image: EDITORIAL_IMAGES.disciplines.informationTechnology,
  },
  {
    id: "is",
    name: "Information Systems",
    description:
      "Enterprise software integration, organizational data architectures, digital governance, and strategic technology leadership.",
    focus: "Enterprise Systems • Data Governance • Digital Strategy",
    image: EDITORIAL_IMAGES.disciplines.informationSystems,
  },
  {
    id: "ds",
    name: "Data Science",
    description:
      "Statistical inference, machine learning algorithms, high-volume data pipelines, and computational intelligence.",
    focus: "Machine Learning • Statistical Inference • Big Data",
    image: EDITORIAL_IMAGES.disciplines.dataScience,
  },
];

export function Disciplines() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const activeDiscipline = DISCIPLINES[activeIndex];

  // Scroll listener to update active discipline as user scrolls through the list on desktop
  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleScroll = () => {
      if (window.innerWidth < 1024) return; // Desktop only

      const viewportCenter = window.innerHeight * 0.48;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldReduceMotion]);

  const toggleMobile = (index: number) => {
    setMobileExpandedIndex(mobileExpandedIndex === index ? null : index);
    setActiveIndex(index);
  };

  return (
    <section
      id="disciplines"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 md:py-40 bg-[#111111] text-[#F7F7F5] border-t border-white/10"
    >
      {/* Section Header Statement — No Section Labels */}
      <Container size="default" className="pt-4 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(3.2rem,8.2vw,9.5rem)] leading-[0.92] tracking-tight uppercase text-white select-none"
            >
              SIX WAYS
              <br />
              TO THINK
              <br />
              IN COMPUTING<span className="text-[#3b82f6]">.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm leading-relaxed text-neutral-400 max-w-sm font-sans"
            >
              Six core concentrations — from theoretical computation and systems architecture to cyber defense and computational intelligence.
            </motion.p>
          </div>
        </div>
      </Container>

      {/* Main Interactive Index Canvas with True Stationary Sticky Image Panel */}
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Left Column: The Large Scrolling Discipline List */}
          <div className="lg:col-span-7 xl:col-span-7 border-t border-white/10">
            {DISCIPLINES.map((item, index) => {
              const isActive = activeIndex === index;
              const isMobileOpen = mobileExpandedIndex === index;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`border-b border-white/10 transition-colors duration-300 ${
                    isActive ? "bg-white/[0.03]" : ""
                  }`}
                >
                  {/* Desktop Trigger / Row Item */}
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => toggleMobile(index)}
                    data-cursor="VIEW"
                    aria-expanded={isMobileOpen}
                    className="group w-full py-10 sm:py-12 lg:py-14 text-left flex items-baseline justify-between gap-4 transition-all duration-300 focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#3b82f6] scale-125"
                            : "bg-neutral-700 group-hover:bg-neutral-500"
                        }`}
                      />

                      <span
                        className={`font-heading text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase tracking-tight leading-[0.9] transition-all duration-300 will-change-transform ${
                          isActive
                            ? "text-white translate-x-2"
                            : "text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-1"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`font-mono text-sm transition-all duration-300 ${
                        isActive
                          ? "text-[#60a5fa] translate-x-1 font-bold opacity-100"
                          : "text-neutral-600 opacity-0 group-hover:opacity-100"
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
                        <p className="text-sm leading-relaxed text-neutral-300 font-sans">
                          {item.description}
                        </p>

                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#60a5fa]">
                          {item.focus}
                        </div>

                        {/* Mobile Inline Artwork */}
                        <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 mt-3">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 90vw, 350px"
                            className="object-cover grayscale contrast-110"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: TRUE STATIONARY STICKY Image Panel */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 sticky top-28 self-start">
            <div className="space-y-4">
              {/* Sticky Image — 3:4 aspect fits in viewport */}
              <div
                data-cursor="VIEW"
                className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDiscipline.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute inset-0 h-full w-full"
                  >
                    <Image
                      src={activeDiscipline.image}
                      alt={activeDiscipline.name}
                      fill
                      sizes="(max-width: 1200px) 45vw, 500px"
                      priority
                      className="object-cover object-center grayscale contrast-110 brightness-95 transition-all duration-700 hover:scale-105 hover:grayscale-0 hover:brightness-100"
                    />

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description only — no extra focus labels */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeDiscipline.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-sm leading-relaxed text-neutral-300 font-sans border-t border-white/10 pt-3"
                >
                  {activeDiscipline.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
