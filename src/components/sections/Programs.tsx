"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";

interface ProgramItem {
  id: string;
  number: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  description: string;
  focus: string[];
  image: string;
  caption: string;
}

const PROGRAMS: ProgramItem[] = [
  {
    id: "hackathons",
    number: "01",
    titleLine1: "HACKATHONS &",
    titleLine2: "BUILD SPRINTS",
    subtitle: "High-Intensity Engineering",
    description:
      "48-hour collaborative development sprints where Nile computing students design, architect, and demo working software prototypes to solve real-world industry and community challenges.",
    focus: ["Rapid Prototyping", "Full-Stack Systems", "Product Strategy"],
    image: "/excos-pics/president.jpg",
    caption: "FLAGSHIP SPRINT // ARENA",
  },
  {
    id: "bootcamps",
    number: "02",
    titleLine1: "TECHNICAL",
    titleLine2: "BOOTCAMPS",
    subtitle: "Hands-On Skill Acquisition",
    description:
      "Intensive multi-week masterclasses covering distributed systems, web architectures, cybersecurity operations, cloud pipelines, and AI engineering led by senior peers and industry guests.",
    focus: ["Software Architecture", "Cloud Platforms", "Cyber Defense"],
    image: "/excos-pics/dtd.jpg",
    caption: "LABORATORY // DEV LAB",
  },
  {
    id: "mentorship",
    number: "03",
    titleLine1: "INDUSTRY",
    titleLine2: "MENTORSHIP",
    subtitle: "Alumni & Practitioner Pods",
    description:
      "Direct technical advisory pairings connecting aspiring students with established Nile computing alumni and senior engineering leaders at top global technology companies.",
    focus: ["Career Advisory", "System Architecture", "Code Review"],
    image: "/excos-pics/vp.jpg",
    caption: "NETWORK // MENTOR PODS",
  },
  {
    id: "tutorials",
    number: "04",
    titleLine1: "ACADEMIC",
    titleLine2: "TUTORIALS",
    subtitle: "Peer-Led Rigor & Foundations",
    description:
      "Weekly peer-facilitated academic clinics demystifying complex data structures, discrete algorithms, computational theory, and mathematics across all six undergraduate departments.",
    focus: ["Data Structures", "Algorithms", "Core Theory"],
    image: "/excos-pics/sg.jpg",
    caption: "FOUNDATIONS // STUDY PODS",
  },
];

export function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !scrollTrackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: scrollTrackRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const rawIndex = Math.floor(self.progress * PROGRAMS.length);
          const clampedIndex = Math.min(Math.max(rawIndex, 0), PROGRAMS.length - 1);
          setActiveIndex(clampedIndex);
        },
      });
    }, scrollTrackRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const activeProgram = PROGRAMS[activeIndex];

  const handleIndexClick = (index: number) => {
    setActiveIndex(index);
    if (scrollTrackRef.current) {
      const rect = scrollTrackRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top;
      const targetScroll = scrollTop + (index / PROGRAMS.length) * rect.height;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="relative w-full bg-[#0d1733] text-[#F7F7F5] border-t border-white/10">
      {/* Intro Header Section */}
      <div className="py-24 sm:py-32 border-b border-white/10">
        <Container size="default">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <SectionLabel label="Key Initiatives" showLine className="text-neutral-400" />
            <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#60a5fa]">
              Flagship Programs
            </div>
          </div>

          <div className="pt-16 sm:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-[clamp(3.2rem,7.5vw,9rem)] leading-[0.84] tracking-tight uppercase text-white select-none"
              >
                WE DON&apos;T
                <br />
                JUST LEARN.
                <br />
                <span className="text-[#3b82f6]">WE BUILD.</span>
              </motion.h2>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm leading-relaxed text-neutral-300 max-w-sm font-sans"
              >
                NACOS Nile bridges classroom curricula and real-world engineering through hackathons, technical bootcamps, peer tutorials, and direct practitioner mentorship.
              </motion.p>
            </div>
          </div>
        </Container>
      </div>

      {/* DESKTOP: Sticky Storytelling Canvas (Visible on lg+) */}
      <div
        ref={scrollTrackRef}
        className="hidden lg:block relative h-[360vh] w-full bg-[#0d1733]"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 md:py-16 overflow-hidden">
          {/* Top Canvas Bar */}
          <Container size="default">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
                <span className="text-[#93c5fd]">ACTIVE INITIATIVE</span>
              </div>
              <div className="text-[#60a5fa]">
                <span>INITIATIVE 0{activeIndex + 1} / 0{PROGRAMS.length}</span>
              </div>
            </div>
          </Container>

          {/* Main Storytelling 3-Column Stage */}
          <Container size="default" className="my-auto py-8">
            <div className="grid grid-cols-12 gap-8 xl:gap-12 items-center">
              {/* Column 1: Persistent Interactive Index */}
              <div className="col-span-3 space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#60a5fa] mb-4">Program Catalog</div>
                <div className="flex flex-col space-y-2">
                  {PROGRAMS.map((item, idx) => {
                    const isSelected = activeIndex === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleIndexClick(idx)}
                        data-cursor="EXPLORE"
                        className={`text-left text-xs font-mono uppercase tracking-[0.16em] py-1.5 transition-all duration-300 flex items-center gap-3 focus-visible:outline-none ${
                          isSelected
                            ? "text-white font-bold translate-x-1"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        <span className={isSelected ? "text-[#60a5fa]" : "text-neutral-500"}>{item.number}</span>
                        <span className="truncate">
                          {item.titleLine1} {item.titleLine2}
                        </span>
                        {isSelected && <span className="text-[10px] text-[#60a5fa]">→</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Progress bar with brand blue accent */}
                <div className="pt-6">
                  <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-[#3b82f6]"
                      animate={{
                        width: `${((activeIndex + 1) / PROGRAMS.length) * 100}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>

              {/* Column 2: Large Title & Narrative Presentation */}
              <div className="col-span-5 pr-4 xl:pr-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProgram.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#60a5fa] font-medium">
                      {activeProgram.subtitle}
                    </div>

                    <h3 className="font-heading text-6xl xl:text-7xl 2xl:text-8xl uppercase tracking-tight leading-[0.84] text-white select-none">
                      <div>{activeProgram.titleLine1}</div>
                      <div>{activeProgram.titleLine2}</div>
                    </h3>

                    <p className="text-sm xl:text-base leading-relaxed text-neutral-300 font-sans max-w-md">
                      {activeProgram.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeProgram.focus.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-[#3b82f6]/30 bg-[#274193]/20 text-[#93c5fd] rounded-[2px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Column 3: Large Editorial Portrait Imagery */}
              <div className="col-span-4 flex justify-end">
                <div
                  data-cursor="VIEW"
                  className="relative aspect-[3/4] w-full max-w-sm xl:max-w-md overflow-hidden bg-white/5 border border-white/10"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProgram.id}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={activeProgram.image}
                        alt={activeProgram.titleLine1}
                        fill
                        sizes="(max-width: 1400px) 35vw, 400px"
                        priority
                        className="object-cover object-top grayscale contrast-110 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                      />

                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0d1733]/60 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Container>

          {/* Bottom Canvas Meta Footer */}
          <Container size="default">
            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400">
              <span>CONTINUOUS SCROLLING ADVANCES INITIATIVE</span>
              <span className="text-[#60a5fa]">NILE COMPUTING COMMUNITY</span>
            </div>
          </Container>
        </div>
      </div>

      {/* MOBILE: Vertical Progressive Journey (Visible on < lg) */}
      <div className="lg:hidden py-16">
        <Container size="default">
          <div className="space-y-16">
            {PROGRAMS.map((item) => (
              <div
                key={item.id}
                className="border-b border-white/10 pb-12 space-y-6"
              >
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#60a5fa]">
                  <span>INITIATIVE {item.number}</span>
                  <span>{item.subtitle}</span>
                </div>

                <h3 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight leading-[0.88] text-white">
                  {item.titleLine1} {item.titleLine2}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-300 font-sans">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.focus.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-[#3b82f6]/30 bg-[#274193]/20 text-[#93c5fd]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden bg-white/5 border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.titleLine1}
                    fill
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="object-cover object-top grayscale contrast-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
