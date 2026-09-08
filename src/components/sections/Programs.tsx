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
    id: "bootcamps",
    number: "01",
    titleLine1: "TECH",
    titleLine2: "BOOTCAMPS",
    subtitle: "Immersive Technical Acceleration",
    description:
      "Intensive sprint-based workshops that transition computing students from theoretical foundations to shipping production-ready software architectures.",
    focus: ["Applied Systems", "Web Architecture", "Software Craft"],
    image: "/excos-pics/dtd.jpg",
    caption: "DIR. TRAINING & DEVELOPMENT // DTD",
  },
  {
    id: "workshops",
    number: "02",
    titleLine1: "CODING",
    titleLine2: "WORKSHOPS",
    subtitle: "Hands-on Software Laboratories",
    description:
      "Collaborative coding clinics centered on debugging, system profiling, version control workflows, and the practical disciplines of modern engineering teams.",
    focus: ["Code Profiling", "Testing Rigor", "Dev Workflows"],
    image: "/excos-pics/sg.jpg",
    caption: "SECRETARIAT & OPERATIONS // SG",
  },
  {
    id: "hackathons",
    number: "03",
    titleLine1: "HACKATHONS",
    titleLine2: "/ TECH WEEK",
    subtitle: "Flagship Innovation Arena",
    description:
      "High-tempo competitive development environments where interdisciplinary teams design, architect, and demo functioning prototypes within 48-hour sprints.",
    focus: ["Rapid Prototyping", "Team Building", "Demo Days"],
    image: "/excos-pics/president.jpg",
    caption: "EXECUTIVE COUNCIL // PRESIDENT",
  },
  {
    id: "mentorship",
    number: "04",
    titleLine1: "INDUSTRY",
    titleLine2: "MENTORSHIP",
    subtitle: "Direct Practitioner Exchange",
    description:
      "One-on-one and small-pod advisory pipelines pairing Nile undergraduates with senior engineers, founders, and research practitioners in the global tech ecosystem.",
    focus: ["Career Advisory", "Code Reviews", "Technical Mentorship"],
    image: "/excos-pics/vp.jpg",
    caption: "EXECUTIVE STEWARDSHIP // VP",
  },
  {
    id: "careers",
    number: "05",
    titleLine1: "CAREER",
    titleLine2: "TALKS",
    subtitle: "Professional Strategy & Insight",
    description:
      "Unvarnished sessions analyzing internship recruitment, portfolio construction, technical interviews, open-source strategy, and the economic landscape of tech.",
    focus: ["Portfolio Curation", "Interview Prep", "Market Navigation"],
    image: "/excos-pics/pro.jpg",
    caption: "PUBLIC RELATIONS // PRO",
  },
  {
    id: "tutorials",
    number: "06",
    titleLine1: "ACADEMIC",
    titleLine2: "TUTORIALS",
    subtitle: "Peer-Led Algorithmic Support",
    description:
      "Structured student-to-student knowledge transfer deconstructing difficult departmental courses, discrete mathematics, and algorithmic theory.",
    focus: ["Data Structures", "Course Mastery", "Peer Learning"],
    image: "/excos-pics/welfare.jpg",
    caption: "STUDENT WELFARE // WELFARE",
  },
];

export function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Desktop Scroll-Driven Storytelling sync via GSAP ScrollTrigger
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
    <section id="programs" className="relative w-full border-t border-neutral-900/10">
      {/* Intro Header Section */}
      <div className="py-24 sm:py-32 border-b border-neutral-900/10">
        <Container size="default">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/10 pb-6">
            <SectionLabel number="03" label="Programs / Initiatives" showLine />
            <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400">
              Folio // Initiatives • 2026
            </div>
          </div>

          <div className="pt-16 sm:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-[clamp(3.5rem,8.6vw,10.2rem)] leading-[0.84] tracking-tight uppercase text-neutral-950 select-none"
              >
                WE DON&apos;T
                <br />
                JUST LEARN.
                <br />
                WE BUILD.
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
                NACOS Nile bridges classroom curricula and real-world engineering through hackathons, technical bootcamps, peer tutorials, and direct practitioner mentorship.
              </motion.p>
            </div>
          </div>
        </Container>
      </div>

      {/* DESKTOP: Sticky Storytelling Canvas (Visible on lg+) */}
      <div
        ref={scrollTrackRef}
        className="hidden lg:block relative h-[360vh] w-full bg-[#F7F7F5]"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 md:py-16 overflow-hidden">
          {/* Top Canvas Bar */}
          <Container size="default">
            <div className="flex items-center justify-between border-b border-neutral-900/10 pb-4 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-500">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-950 animate-pulse" />
                <span>SCROLL STORYTELLING // ACTIVE INITIATIVE</span>
              </div>
              <div>
                <span>INDEX 0{activeIndex + 1} / 06</span>
              </div>
            </div>
          </Container>

          {/* Main Storytelling 3-Column Stage */}
          <Container size="default" className="my-auto py-8">
            <div className="grid grid-cols-12 gap-8 xl:gap-12 items-center">
              {/* Column 1: Persistent Interactive Index */}
              <div className="col-span-3 space-y-3">
                <div className="text-meta mb-4">Program Catalog</div>
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
                            ? "text-neutral-950 font-bold translate-x-1"
                            : "text-neutral-400 hover:text-neutral-700"
                        }`}
                      >
                        <span>{item.number}</span>
                        <span className="truncate">
                          {item.titleLine1} {item.titleLine2}
                        </span>
                        {isSelected && <span className="text-[10px]">→</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Progress bar */}
                <div className="pt-6">
                  <div className="h-[2px] w-full bg-neutral-900/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-neutral-950"
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
                    <div className="text-[11px] font-mono uppercase tracking-[0.24em] text-neutral-400">
                      {activeProgram.subtitle}
                    </div>

                    <h3 className="font-heading text-6xl xl:text-7xl 2xl:text-8xl uppercase tracking-tight leading-[0.84] text-neutral-950 select-none">
                      <div>{activeProgram.titleLine1}</div>
                      <div>{activeProgram.titleLine2}</div>
                    </h3>

                    <p className="text-sm xl:text-base leading-relaxed text-neutral-600 font-sans max-w-md">
                      {activeProgram.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeProgram.focus.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-neutral-900/15 rounded-[2px] text-neutral-700"
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
                  className="relative aspect-[3/4] w-full max-w-sm xl:max-w-md overflow-hidden bg-neutral-200/40"
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

                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/90 font-mono">
                        <span>INITIATIVE // {activeProgram.number}</span>
                        <span>NACOS NILE</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Container>

          {/* Bottom Canvas Meta Footer */}
          <Container size="default">
            <div className="flex items-center justify-between border-t border-neutral-900/10 pt-4 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400">
              <span>CONTINUOUS SCROLLING ADVANCES INITIATIVE</span>
              <span>NILE COMPUTING COMMUNITY</span>
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
                className="border-b border-neutral-900/10 pb-12 space-y-6"
              >
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                  <span>INITIATIVE {item.number}</span>
                  <span>{item.subtitle}</span>
                </div>

                <h3 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight leading-[0.88] text-neutral-950">
                  {item.titleLine1} {item.titleLine2}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-600 font-sans">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.focus.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-neutral-900/15 text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden bg-neutral-200/40">
                  <Image
                    src={item.image}
                    alt={item.titleLine1}
                    fill
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="object-cover object-top grayscale contrast-110"
                  />
                  <div className="absolute bottom-2 left-2 right-2 text-[9px] font-mono uppercase tracking-widest text-white bg-black/60 px-2 py-1">
                    {item.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
