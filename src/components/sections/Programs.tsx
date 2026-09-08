"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { EDITORIAL_IMAGES } from "@/lib/images";

interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string[];
  image: string;
}

const PROGRAMS: ProgramItem[] = [
  {
    id: "hackathons",
    title: "Hackathons & Build Sprints",
    subtitle: "Collaborative Engineering",
    description:
      "48-hour development sprints where Nile computing students design, architect, and demo working software prototypes to solve real-world industry challenges.",
    focus: ["Rapid Prototyping", "Full-Stack Systems", "Product Strategy"],
    image: EDITORIAL_IMAGES.programs.codeGenesis,
  },
  {
    id: "bootcamps",
    title: "Technical Bootcamps",
    subtitle: "Hands-On Skill Acquisition",
    description:
      "Intensive multi-week masterclasses covering distributed systems, web architectures, cybersecurity operations, and cloud pipelines led by senior peers.",
    focus: ["Software Architecture", "Cloud Platforms", "Cyber Defense"],
    image: EDITORIAL_IMAGES.programs.accelerator,
  },
  {
    id: "mentorship",
    title: "Industry Mentorship",
    subtitle: "Practitioner Guidance",
    description:
      "Direct technical advisory pairings connecting aspiring students with established Nile computing alumni and engineering leaders at top technology companies.",
    focus: ["Career Advisory", "System Architecture", "Code Review"],
    image: EDITORIAL_IMAGES.programs.mentorship,
  },
  {
    id: "techweek",
    title: "Nile Tech Week",
    subtitle: "Annual Flagship Gathering",
    description:
      "Our premier annual symposium bringing together student innovators, researchers, and tech leaders for keynotes, project exhibitions, and technical discussions.",
    focus: ["Keynote Presentations", "Exhibitions", "Networking"],
    image: EDITORIAL_IMAGES.programs.techWeek,
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
    <section id="programs" className="relative w-full bg-[#F7F7F5] text-neutral-900 border-t border-neutral-900/10">
      {/* Intro Header Section */}
      <div className="py-24 sm:py-32 border-b border-neutral-900/10">
        <Container size="default">
          <div className="flex items-center justify-between border-b border-neutral-900/10 pb-6">
            <SectionLabel label="Programs & Initiatives" showLine className="text-neutral-500" />
            <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#274193] font-semibold">
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
                className="font-heading text-[clamp(3.2rem,7.5vw,9rem)] leading-[0.84] tracking-tight uppercase text-neutral-950 select-none"
              >
                WE DON&apos;T
                <br />
                JUST LEARN.
                <br />
                <span className="text-[#274193]">WE BUILD.</span>
              </motion.h2>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm leading-relaxed text-neutral-600 max-w-sm font-sans"
              >
                NACOS Nile bridges classroom curricula and real-world engineering through hackathons, technical bootcamps, and direct practitioner mentorship.
              </motion.p>
            </div>
          </div>
        </Container>
      </div>

      {/* DESKTOP: Sticky Storytelling Canvas (Visible on lg+) */}
      <div
        ref={scrollTrackRef}
        className="hidden lg:block relative h-[320vh] w-full bg-[#F7F7F5]"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 md:py-16 overflow-hidden">
          {/* Main Storytelling Stage */}
          <Container size="default" className="my-auto py-8">
            <div className="grid grid-cols-12 gap-8 xl:gap-14 items-center">
              {/* Column 1: Index List */}
              <div className="col-span-4 space-y-4">
                <div className="flex flex-col space-y-3 border-l-2 border-neutral-300 pl-4">
                  {PROGRAMS.map((item, idx) => {
                    const isSelected = activeIndex === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleIndexClick(idx)}
                        data-cursor="EXPLORE"
                        className={`text-left text-sm font-mono uppercase tracking-[0.14em] py-2 transition-all duration-300 flex items-center justify-between focus-visible:outline-none ${
                          isSelected
                            ? "text-[#274193] font-bold translate-x-1"
                            : "text-neutral-400 hover:text-neutral-900"
                        }`}
                      >
                        <span>{item.title}</span>
                        {isSelected && <span className="text-xs text-[#274193]">●</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Progress Indicator */}
                <div className="pt-4 max-w-xs">
                  <div className="h-[2px] w-full bg-neutral-200 overflow-hidden">
                    <motion.div
                      className="h-full bg-[#274193]"
                      animate={{
                        width: `${((activeIndex + 1) / PROGRAMS.length) * 100}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>

              {/* Column 2: Narrative Presentation */}
              <div className="col-span-4 pr-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProgram.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#274193] font-semibold">
                      {activeProgram.subtitle}
                    </div>

                    <h3 className="font-heading text-5xl xl:text-6xl uppercase tracking-tight leading-[0.9] text-neutral-950 select-none">
                      {activeProgram.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-neutral-600 font-sans">
                      {activeProgram.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeProgram.focus.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-neutral-300 bg-white text-neutral-700 rounded-[2px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Column 3: Editorial Photography */}
              <div className="col-span-4 flex justify-end">
                <div
                  data-cursor="VIEW"
                  className="relative aspect-[4/5] w-full max-w-sm xl:max-w-md overflow-hidden rounded-[2px] bg-neutral-200 border border-neutral-900/10 shadow-xl"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProgram.id}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={activeProgram.image}
                        alt={activeProgram.title}
                        fill
                        sizes="(max-width: 1400px) 35vw, 400px"
                        priority
                        className="object-cover object-center grayscale contrast-110 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
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
                className="border-b border-neutral-900/10 pb-12 space-y-5"
              >
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#274193] font-semibold">
                  {item.subtitle}
                </div>

                <h3 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight leading-[0.88] text-neutral-950">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-600 font-sans">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.focus.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-neutral-300 bg-white text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-[2px] bg-neutral-200 border border-neutral-900/10 mt-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="object-cover grayscale contrast-110"
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
