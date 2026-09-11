"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../layout/Container";
import { MagneticElement } from "../animations/MagneticElement";
import { EDITORIAL_IMAGES } from "@/lib/images";

interface EventItemData {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  image: string;
}

const FEATURED_EVENT = {
  tag: "FLAGSHIP EVENT",
  titleLine1: "NILE HACKATHON",
  titleLine2: "& TECH SYMPOSIUM",
  category: "Annual Competition",
  status: "UPCOMING",
  description:
    "An intensive 48-hour collaborative engineering arena where Nile computing students design, architect, and demo working software prototypes to solve real-world industrial problems.",
  image: EDITORIAL_IMAGES.events.hackathon,
};

const EVENTS_INDEX: EventItemData[] = [
  {
    id: "workshops",
    title: "Cloud & DevOps Immersion",
    category: "Technical Workshop",
    status: "DATE TBA",
    description:
      "Hands-on engineering laboratories centered on containerization, CI/CD automated pipelines, cloud infrastructure, and production software standards.",
    image: EDITORIAL_IMAGES.events.devopsWorkshop,
  },
  {
    id: "mentorship",
    title: "Open Source Code Sprint",
    category: "Community Sprint",
    status: "TBA",
    description:
      "Collaborative sprint sessions contributing to high-impact open source tools, libraries, and frameworks under senior peer mentorship.",
    image: EDITORIAL_IMAGES.events.openSourceSprint,
  },
  {
    id: "careers",
    title: "Tech Career Fair & Talks",
    category: "Industry Keynote",
    status: "TBA",
    description:
      "Direct exchanges analyzing internship recruitment, portfolio presentation, technical interviews, and navigating the global software industry.",
    image: EDITORIAL_IMAGES.events.careerFair,
  },
  {
    id: "women-tech",
    title: "Women in Computing Summit",
    category: "Special Initiative",
    status: "UPCOMING",
    description:
      "Spotlighting women engineers, researchers, and tech founders with panel sessions, keynotes, and dedicated technical workshops.",
    image: EDITORIAL_IMAGES.events.womenInTech,
  },
  {
    id: "ai-symposium",
    title: "AI & Data Science Roundtable",
    category: "Research Colloquium",
    status: "UPCOMING",
    description:
      "Deep dives into modern machine learning architectures, practical generative models, data pipelines, and computational intelligence.",
    image: EDITORIAL_IMAGES.events.aiSymposium,
  },
];

export function Events() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const activeEvent = EVENTS_INDEX[activeEventIndex];

  const toggleMobileEvent = (id: string, index: number) => {
    setMobileExpandedId(mobileExpandedId === id ? null : id);
    setActiveEventIndex(index);
  };

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 md:py-40 bg-[#111111] text-[#F7F7F5] border-t border-white/10"
    >
      {/* Main Section Headline - No Section Labels */}
      <Container size="default" className="pt-4 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 min-w-0">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(2.75rem,5.2vw,5.75rem)] 2xl:text-[6.25rem] leading-[0.95] tracking-tight uppercase text-white select-none"
            >
              SOMETHING
              <br />
              IS ALWAYS
              <br />
              HAPPENING<span className="text-[#3b82f6]">.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 min-w-0 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm leading-relaxed text-neutral-400 max-w-sm font-sans"
            >
              From 48-hour hackathon sprints to peer study pods, the NACOS Nile calendar delivers experiences that challenge and connect our computing community.
            </motion.p>
          </div>
        </div>
      </Container>

      {/* FEATURED EVENT: High-Contrast Hero Block */}
      <Container size="default" className="mb-20 sm:mb-28">
        <div className="border border-white/10 p-6 sm:p-10 md:p-12 lg:p-14 bg-white/[0.03] rounded-[2px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Featured Info */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                <span className="px-2.5 py-1 bg-[#274193] text-white rounded-[2px] font-semibold">
                  {FEATURED_EVENT.tag}
                </span>
                <span className="text-[#60a5fa] font-medium">{FEATURED_EVENT.status}</span>
              </div>

              <h3 className="font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl uppercase tracking-tight leading-[0.88] text-white">
                <div>{FEATURED_EVENT.titleLine1}</div>
                <div>{FEATURED_EVENT.titleLine2}</div>
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-300 font-sans max-w-lg">
                {FEATURED_EVENT.description}
              </p>

              <div className="pt-2">
                <MagneticElement strength={0.2}>
                  <Link
                    href="#community"
                    data-cursor="OPEN"
                    className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] rounded-[2px] bg-[#274193] px-6 py-3.5 text-white transition-all hover:bg-[#3453b3] shadow-md shadow-[#274193]/20"
                  >
                    <span>Event Details</span>
                    <span className="text-[#93c5fd]">→</span>
                  </Link>
                </MagneticElement>
              </div>
            </div>

            {/* Right: Featured Artwork */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div
                data-cursor="VIEW"
                className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full max-w-[260px] sm:max-w-md mx-auto lg:mx-0 overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10"
              >
                <Image
                  src={FEATURED_EVENT.image}
                  alt="NACOS Nile Hackathon"
                  fill
                  sizes="(max-width: 1200px) 90vw, 450px"
                  priority
                  className="object-cover object-center grayscale contrast-110 brightness-95 transition-transform duration-700 hover:scale-105 hover:grayscale-0 hover:brightness-100"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* EDITORIAL EVENT INDEX LIST */}
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Left Column: Events Vertical Index */}
          <div className="lg:col-span-7 xl:col-span-8 border-t border-white/10">
            {EVENTS_INDEX.map((event, idx) => {
              const isActive = activeEventIndex === idx;
              const isMobileOpen = mobileExpandedId === event.id;

              return (
                <div
                  key={event.id}
                  className={`border-b border-white/10 transition-colors duration-300 ${
                    isActive ? "bg-white/[0.03]" : ""
                  }`}
                >
                  {/* Event Row Button */}
                  <button
                    type="button"
                    onMouseEnter={() => setActiveEventIndex(idx)}
                    onFocus={() => setActiveEventIndex(idx)}
                    onClick={() => toggleMobileEvent(event.id, idx)}
                    data-cursor="VIEW"
                    aria-expanded={isMobileOpen}
                    className="group w-full py-7 sm:py-9 text-left flex items-center justify-between gap-4 cursor-pointer transition-all duration-300 focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          isActive ? "bg-[#3b82f6] scale-125" : "bg-neutral-700 group-hover:bg-neutral-500"
                        }`}
                      />

                      <span
                        className={`font-heading text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl uppercase tracking-tight leading-[0.9] transition-all duration-300 will-change-transform ${
                          isActive
                            ? "text-white translate-x-1 sm:translate-x-2"
                            : "text-neutral-500 group-hover:text-neutral-300"
                        }`}
                      >
                        {event.title}
                      </span>
                    </div>

                    {/* Right Tag: Category + Status */}
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-right">
                      <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                        {event.category}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 border rounded-[2px] transition-colors ${
                          isActive
                            ? "border-[#3b82f6] text-[#93c5fd] bg-[#274193]/20 font-semibold"
                            : "border-white/10 text-neutral-400"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                  </button>

                  {/* Mobile Tap Reveal Drawer */}
                  <AnimatePresence>
                    {isMobileOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden overflow-hidden pb-6 space-y-4"
                      >
                        <p className="text-sm leading-relaxed text-neutral-300 font-sans">
                          {event.description}
                        </p>

                        <div className="relative aspect-[16/10] w-full max-w-[260px] sm:max-w-xs mx-auto overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10">
                          <Image
                            src={event.image}
                            alt={event.title}
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

          {/* Right Column: Desktop Interactive Preview Panel */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4 sticky top-28 self-start">
            <div className="space-y-4">
              {/* Dynamic Image Canvas */}
              <div
                data-cursor="VIEW"
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEvent.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full"
                  >
                    <Image
                      src={activeEvent.image}
                      alt={activeEvent.title}
                      fill
                      sizes="(max-width: 1200px) 40vw, 30vw"
                      priority
                      className="object-cover object-center grayscale contrast-110 brightness-95 transition-all duration-700 hover:grayscale-0 hover:scale-105 hover:brightness-100"
                    />

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic Description — no extra labels */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeEvent.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-sm leading-relaxed text-neutral-300 font-sans border-t border-white/10 pt-3"
                >
                  {activeEvent.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
