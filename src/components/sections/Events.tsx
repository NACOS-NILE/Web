"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { MagneticElement } from "../animations/MagneticElement";

interface EventItemData {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  description: string;
  image: string;
  caption: string;
}

const FEATURED_EVENT = {
  number: "01",
  tag: "FEATURED ARENA",
  titleLine1: "HACKATHON",
  titleLine2: "/ TECH WEEK",
  category: "Flagship Campus Competition",
  status: "UPCOMING // 2026",
  description:
    "An intensive 48-hour collaborative development arena where Nile computing students design, architect, and demo working software prototypes to solve real-world challenges.",
  image: "/excos-pics/president.jpg",
  caption: "FLAGSHIP // TECH WEEK ARENA",
};

const EVENTS_INDEX: EventItemData[] = [
  {
    id: "workshops",
    number: "02",
    title: "Coding Clinics & Workshops",
    category: "Technical Lab",
    status: "DATE TBA",
    description:
      "Hands-on engineering laboratories centered on debugging, system profiling, version control, and production software standards.",
    image: "/excos-pics/sg.jpg",
    caption: "LABORATORY SESSIONS // SG",
  },
  {
    id: "mentorship",
    number: "03",
    title: "Industry Mentorship Exchange",
    category: "Practitioner Pods",
    status: "TBA",
    description:
      "Direct technical advisory dialogues pairing student builders with practicing engineers and alumni across the global tech ecosystem.",
    image: "/excos-pics/vp.jpg",
    caption: "EXECUTIVE STEWARDSHIP // VP",
  },
  {
    id: "careers",
    number: "04",
    title: "Tech Career & Internship Talks",
    category: "Career Strategy",
    status: "TBA",
    description:
      "Unvarnished sessions analyzing internship recruitment, portfolio presentation, algorithmic interviews, and navigating the tech industry.",
    image: "/excos-pics/pro.jpg",
    caption: "PUBLIC RELATIONS // PRO",
  },
  {
    id: "tutorials",
    number: "05",
    title: "Academic Tutorials & Study Circles",
    category: "Peer Learning",
    status: "RECURRING // TBA",
    description:
      "Peer-driven collaborative pods breaking down core computing courses, discrete structures, and fundamental algorithms.",
    image: "/excos-pics/welfare.jpg",
    caption: "STUDENT SUPPORT // WELFARE",
  },
  {
    id: "bootcamp",
    number: "06",
    title: "Tech Bootcamp Immersion",
    category: "Intensive Sprint",
    status: "UPCOMING",
    description:
      "Accelerated multi-week sprint tracks transforming foundational understanding into practical full-stack and systems capability.",
    image: "/excos-pics/provost.jpg",
    caption: "DEPARTMENTAL OPERATIONS // PROVOST",
  },
];

export function Events() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const previewBoxRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeEvent = EVENTS_INDEX[activeEventIndex];

  // GSAP ScrollTrigger for subtle section parallax
  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (previewBoxRef.current) {
        gsap.to(previewBoxRef.current, {
          y: 35,
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

  const toggleMobileEvent = (id: string, index: number) => {
    setMobileExpandedId(mobileExpandedId === id ? null : id);
    setActiveEventIndex(index);
  };

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 md:py-44 border-t border-neutral-900/10 overflow-hidden"
    >
      {/* Top Section Meta Row */}
      <Container size="default">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/10 pb-6">
          <SectionLabel number="04" label="Events / Calendar" showLine />
          <div className="flex items-center gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400">
            <span>Calendar Folio // 2026</span>
            <span>All Dates Subject to Academic Session</span>
          </div>
        </div>
      </Container>

      {/* Main Section Headline */}
      <Container size="default" className="pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(3.5rem,8.6vw,10.2rem)] leading-[0.84] tracking-tight uppercase text-neutral-950 select-none"
            >
              SOMETHING
              <br />
              IS ALWAYS
              <br />
              HAPPENING.
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
              From 48-hour hackathon sprints to peer study pods, the NACOS Nile calendar delivers experiences that challenge and connect our computing community.
            </motion.p>
          </div>
        </div>
      </Container>

      {/* FEATURED EVENT: Asymmetrical Hero Block */}
      <Container size="default" className="mb-20 sm:mb-28">
        <div className="border border-neutral-900/15 p-6 sm:p-10 md:p-12 lg:p-14 bg-white/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Featured Info */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                <span className="px-2 py-0.5 bg-neutral-900 text-[#F7F7F5] rounded-[2px] font-bold">
                  {FEATURED_EVENT.tag}
                </span>
                <span>{FEATURED_EVENT.status}</span>
              </div>

              <h3 className="font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl uppercase tracking-tight leading-[0.84] text-neutral-950">
                <div>{FEATURED_EVENT.titleLine1}</div>
                <div>{FEATURED_EVENT.titleLine2}</div>
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-sans max-w-lg">
                {FEATURED_EVENT.description}
              </p>

              <div className="pt-2">
                <MagneticElement strength={0.2}>
                  <Link
                    href="#events"
                    data-cursor="OPEN"
                    className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] border border-neutral-900 bg-neutral-900 px-6 py-3.5 text-[#F7F7F5] transition-all hover:bg-neutral-800"
                  >
                    <span>Event Details</span>
                    <span>→</span>
                  </Link>
                </MagneticElement>
              </div>
            </div>

            {/* Right: Featured Artwork */}
            <div className="lg:col-span-5 flex justify-end">
              <div
                data-cursor="VIEW"
                className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full max-w-md overflow-hidden bg-neutral-200/40"
              >
                <Image
                  src={FEATURED_EVENT.image}
                  alt="NACOS Tech Week"
                  fill
                  sizes="(max-width: 1200px) 90vw, 450px"
                  priority
                  className="object-cover object-top grayscale contrast-110 transition-transform duration-700 hover:scale-105 hover:grayscale-0"
                />

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/90 font-mono">
                  <span>{FEATURED_EVENT.caption}</span>
                  <span>NACOS NILE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* EDITORIAL EVENT INDEX LIST */}
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Left Column: Events Vertical Index */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="border-t border-neutral-900/10">
              {EVENTS_INDEX.map((event, idx) => {
                const isActive = activeEventIndex === idx;
                const isMobileOpen = mobileExpandedId === event.id;

                return (
                  <div
                    key={event.id}
                    className="border-b border-neutral-900/10 transition-colors duration-400"
                  >
                    {/* Event Row Button */}
                    <button
                      type="button"
                      onMouseEnter={() => setActiveEventIndex(idx)}
                      onFocus={() => setActiveEventIndex(idx)}
                      onClick={() => toggleMobileEvent(event.id, idx)}
                      data-cursor="VIEW"
                      aria-expanded={isMobileOpen}
                      className="group w-full py-6 sm:py-8 text-left flex items-center justify-between gap-4 transition-all duration-300 focus-visible:outline-none"
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8 min-w-0">
                        <span
                          className={`font-mono text-xs sm:text-sm tracking-widest transition-colors duration-300 ${
                            isActive
                              ? "text-neutral-950 font-bold"
                              : "text-neutral-400 group-hover:text-neutral-700"
                          }`}
                        >
                          {event.number}
                        </span>

                        <span
                          className={`font-heading text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl uppercase tracking-tight leading-[0.88] transition-all duration-300 will-change-transform ${
                            isActive
                              ? "text-neutral-950 translate-x-1 sm:translate-x-2"
                              : "text-neutral-400 group-hover:text-neutral-700"
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
                          className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border rounded-[2px] transition-colors ${
                            isActive
                              ? "border-neutral-950 text-neutral-950 bg-neutral-900/5 font-semibold"
                              : "border-neutral-900/10 text-neutral-400"
                          }`}
                        >
                          {event.status}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`hidden sm:inline-block font-mono text-xs transition-transform duration-300 ${
                            isActive
                              ? "text-neutral-950 translate-x-1"
                              : "text-neutral-300 opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          ↗
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
                          <p className="text-sm leading-relaxed text-neutral-600 font-sans">
                            {event.description}
                          </p>

                          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                            CATEGORY // {event.category}
                          </div>

                          <div className="relative aspect-[16/10] w-full max-w-sm overflow-hidden bg-neutral-200/40">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              sizes="(max-width: 768px) 90vw, 350px"
                              className="object-cover grayscale contrast-110"
                            />
                            <div className="absolute bottom-2 left-2 right-2 text-[9px] font-mono uppercase tracking-widest text-white bg-black/60 px-2 py-1">
                              {event.caption}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Micro instruction footer */}
            <div className="pt-6 hidden lg:flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-mono">
              <span>[HOVER OR FOCUS AN EVENT TO PREVIEW ARCHIVE]</span>
              <span>INDEX 02—06</span>
            </div>
          </div>

          {/* Right Column: Desktop Interactive Preview */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32">
            <div ref={previewBoxRef} className="space-y-6">
              {/* Dynamic Image Canvas */}
              <div
                data-cursor="VIEW"
                className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200/40 will-change-transform"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEvent.id}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={activeEvent.image}
                      alt={activeEvent.title}
                      fill
                      sizes="(max-width: 1200px) 40vw, 30vw"
                      priority
                      className="object-cover object-top grayscale contrast-110 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                    />

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/90 font-mono">
                      <span>FOLIO // {activeEvent.number}</span>
                      <span>{activeEvent.status}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic Info Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEvent.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3 pt-2 border-t border-neutral-900/10"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                    <span>{activeEvent.category}</span>
                    <span>{activeEvent.status}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-600 font-sans">
                    {activeEvent.description}
                  </p>

                  <div className="pt-1">
                    <Link
                      href="#events"
                      data-cursor="OPEN"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-950 transition-colors hover:text-neutral-500"
                    >
                      <span>Event Dispatch</span>
                      <span>↗</span>
                    </Link>
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
