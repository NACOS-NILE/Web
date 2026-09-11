"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { EDITORIAL_IMAGES } from "@/lib/images";

interface ProgramItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

// All six initiatives as required
const PROGRAMS: ProgramItem[] = [
  {
    id: "tech-bootcamps",
    number: "01",
    title: "Tech Bootcamps",
    description:
      "Intensive multi-week engineering masterclasses covering systems design, cloud architectures, cybersecurity operations, and full-stack software development.",
    image: EDITORIAL_IMAGES.programs.techBootcamps,
  },
  {
    id: "coding-workshops",
    number: "02",
    title: "Coding Workshops",
    description:
      "Hands-on engineering sessions focused on real-world problem-solving, covering languages, frameworks, data structures, and software design fundamentals.",
    image: EDITORIAL_IMAGES.programs.codingWorkshops,
  },
  {
    id: "hackathons",
    number: "03",
    title: "Hackathons / Tech Week",
    description:
      "48-hour development sprints and our premier annual gathering where Nile computing students design, architect, and demo working prototypes solving real-world problems.",
    image: EDITORIAL_IMAGES.programs.hackathons,
  },
  {
    id: "mentorship",
    number: "04",
    title: "Industry Mentorship",
    description:
      "Direct technical pairings connecting students with established Nile computing alumni and engineering practitioners across the global tech sector.",
    image: EDITORIAL_IMAGES.programs.mentorship,
  },
  {
    id: "career-talks",
    number: "05",
    title: "Career Talks",
    description:
      "Direct exchanges analyzing internship recruitment, portfolio presentation, technical interviews, and navigating the software industry as an African developer.",
    image: EDITORIAL_IMAGES.programs.careerTalks,
  },
  {
    id: "academic-tutorials",
    number: "06",
    title: "Academic Tutorials",
    description:
      "Peer-led study sessions and course reviews bridging academic curricula with practical application — from first-year foundations to advanced algorithms.",
    image: EDITORIAL_IMAGES.programs.academicTutorials,
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
      // Each program gets an equal portion of the scroll track
      // Use thresholds (midpoints) to determine which item is active
      ScrollTrigger.create({
        trigger: scrollTrackRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          // Progress mapped across PROGRAMS.length slots
          // Use (progress * length) floored, clamped to valid range
          const segmentSize = 1 / PROGRAMS.length;
          // Add half segment offset so we switch at midpoint of each segment
          const rawIndex = Math.floor((self.progress + segmentSize * 0.5) * PROGRAMS.length);
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
      // Scroll to the start of the segment for that index
      const segmentSize = rect.height / PROGRAMS.length;
      const targetScroll = scrollTop + index * segmentSize;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="relative w-full bg-[#F7F7F5] text-neutral-900 border-t border-neutral-900/10">
      {/* Intro Header — No Section Labels */}
      <div className="py-20 sm:py-28 border-b border-neutral-900/10">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 min-w-0">
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-[clamp(2.75rem,5.2vw,5.75rem)] 2xl:text-[6.25rem] leading-[0.95] tracking-tight uppercase text-neutral-950 select-none py-1"
              >
                WE DON&apos;T
                <br />
                JUST LEARN.
                <br />
                <span className="text-[#274193]">WE BUILD.</span>
              </motion.h2>
            </div>

            <div className="lg:col-span-4 min-w-0 flex flex-col justify-end">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm leading-relaxed text-neutral-600 max-w-sm font-sans"
              >
                NACOS Nile bridges classroom curricula and real-world engineering through six active programs.
              </motion.p>
            </div>
          </div>
        </Container>
      </div>

      {/* DESKTOP: Sticky Storytelling Canvas — 6 programs, each gets enough scroll space */}
      {/* height = 100vh (sticky viewport) + 6 × 100vh scroll space = 700vh total */}
      <div
        ref={scrollTrackRef}
        className="hidden lg:block relative w-full bg-[#F7F7F5]"
        style={{ height: "700vh" }}
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <Container size="default" className="py-8">
            <div className="grid grid-cols-12 gap-8 xl:gap-14 items-center">
              {/* Column 1: Program Selector List */}
              <div className="col-span-4">
                <div className="flex flex-col border-l-2 border-neutral-300 pl-5 space-y-1">
                  {PROGRAMS.map((item, idx) => {
                    const isSelected = activeIndex === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleIndexClick(idx)}
                        data-cursor="pointer"
                        className={`text-left py-3 cursor-pointer transition-all duration-300 flex items-center gap-3 focus-visible:outline-none group ${
                          isSelected
                            ? "text-neutral-950"
                            : "text-neutral-400 hover:text-neutral-700"
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] tracking-widest shrink-0 transition-colors duration-300 ${
                            isSelected ? "text-[#274193]" : "text-neutral-400"
                          }`}
                        >
                          {item.number}
                        </span>
                        <span
                          className={`text-sm font-mono uppercase tracking-[0.12em] transition-all duration-300 ${
                            isSelected ? "font-bold translate-x-1" : ""
                          }`}
                        >
                          {item.title}
                        </span>
                        {isSelected && (
                          <span className="ml-auto text-xs text-[#274193] shrink-0">●</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 pl-5">
                  <div className="h-[2px] w-full max-w-[180px] bg-neutral-200 overflow-hidden rounded-full">
                    <motion.div
                      className="h-full bg-[#274193] rounded-full"
                      animate={{
                        width: `${((activeIndex + 1) / PROGRAMS.length) * 100}%`,
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <div className="mt-2 pl-0 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                    {activeIndex + 1} / {PROGRAMS.length}
                  </div>
                </div>
              </div>

              {/* Column 2: Narrative Content */}
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
                    <div className="font-mono text-[11px] uppercase tracking-widest text-[#274193] font-semibold">
                      {activeProgram.number}
                    </div>
                    <h3 className="font-heading text-4xl xl:text-5xl uppercase tracking-tight leading-[0.9] text-neutral-950 select-none break-words">
                      {activeProgram.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600 font-sans">
                      {activeProgram.description}
                    </p>
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
                      className="absolute inset-0 h-full w-full"
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

      {/* MOBILE: Vertical stacked layout — all 6 visible, no sticky */}
      <div className="lg:hidden py-14">
        <Container size="default">
          <div className="space-y-12">
            {PROGRAMS.map((item) => (
              <div
                key={item.id}
                className="border-b border-neutral-900/10 pb-10 space-y-4"
              >
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#274193] font-semibold">
                  {item.number}
                </div>
                <h3 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight leading-[0.9] text-neutral-950">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 font-sans">
                  {item.description}
                </p>
                <div className="relative aspect-[4/3] w-full max-w-[260px] sm:max-w-xs mx-auto overflow-hidden rounded-[2px] bg-neutral-200 border border-neutral-900/10 mt-3">
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
