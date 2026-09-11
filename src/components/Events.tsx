"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Clock3,
} from "lucide-react";
import { events } from "@/data/exco";

export default function Events() {
  const [selected, setSelected] = useState(0);
  const activeEvent = events[selected];

  const getDateParts = (dateString: string) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return {
        day: "--",
        month: "TBD",
        weekday: "Coming soon",
      };
    }

    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleDateString("en-US", {
        month: "short",
      }),
      weekday: date.toLocaleDateString("en-US", {
        weekday: "long",
      }),
    };
  };

  return (
    <section
      id="events"
      className="bg-[#f3f4f1] py-24 text-navy lg:py-10"
    >
      <div className="container-edge mx-auto max-w-content">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-royal">
              Events
            </span>

            <h2 className="mt-5 text-balance font-display text-4xl leading-[1.05] tracking-[-0.03em] lg:text-6xl">
              See what&rsquo;s happening.
            </h2>
          </div>

          <p className="max-w-sm text-[14px] leading-relaxed text-navy/50 lg:pb-1">
            Workshops, conversations, competitions and experiences
            that bring the NACOS community together.
          </p>
        </motion.div>

        {/* EVENT EXPERIENCE */}
        <div className="mt-10 grid overflow-hidden rounded-2xl border border-navy/10 lg:h-[620px] lg:grid-cols-[1.15fr_0.85fr]">

          {/* FEATURED EVENT */}
          <div className="relative min-h-[500px] overflow-hidden bg-navy lg:min-h-0">

            {/* Background image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={
                    activeEvent.image ||
                    "/Images/Events/hackathon.webp"
                  }
                  alt={activeEvent.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Technical grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
              <svg
                className="h-full w-full"
                viewBox="0 0 800 700"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="event-grid"
                    width="50"
                    height="50"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 50 0 L 0 0 0 50"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.7"
                    />
                  </pattern>
                </defs>

                <rect
                  width="800"
                  height="700"
                  fill="url(#event-grid)"
                />
              </svg>
            </div>

            {/* Top information */}
            <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-7 py-7 lg:px-8 lg:py-7">
              <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-white/60">
                <CalendarDays size={14} />
                Featured event
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/40">
                {selected + 1} / {events.length}
              </span>
            </div>

            {/* Main event information */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-7 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                >
                  {/* Title */}
                  <h3 className="mt-0 max-w-2xl font-display text-3xl leading-[1.05] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                    {activeEvent.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-white/60 sm:text-[14px]">
                    {activeEvent.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.08em] text-white/45">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={13} />
                      {activeEvent.date}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <MapPin size={13} />
                      Nile University
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <Clock3 size={13} />
                      Details coming soon
                    </span>
                  </div>

                  {/* CTA */}
                  <a
                    href="#community"
                    className="group mt-6 inline-flex items-center gap-3 text-[12px] font-medium text-white"
                  >
                    <span className="border-b border-white/30 pb-1 transition-colors duration-300 group-hover:border-[#69bf51]">
                      Join to stay updated
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#69bf51] group-hover:bg-[#69bf51] group-hover:text-navy">
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </span>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Date status */}
            <div className="absolute bottom-7 right-8 z-20 flex items-center gap-2 lg:bottom-8 lg:right-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69bf51]" />

              <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-[9px]">
                {activeEvent.date}
              </span>
            </div>

            {/* Progress indicator */}
            <motion.div
              className="absolute bottom-0 left-0 z-20 h-1 bg-[#69bf51]"
              animate={{
                width: `${((selected + 1) / events.length) * 100}%`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />
          </div>

          {/* EVENT LIST */}
          <div className="border-t border-navy/10 bg-[#e9ebe7] lg:border-l lg:border-t-0">

            {/* List header */}
            <div className="border-b border-navy/10 px-7 py-6 lg:px-8 lg:py-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-navy/35">
                    Calendar
                  </p>

                  <h4 className="mt-1 font-display text-2xl">
                    Upcoming events
                  </h4>
                </div>

                <CalendarDays
                  size={22}
                  strokeWidth={1.3}
                  className="text-royal"
                />
              </div>
            </div>

            {/* Event buttons */}
            <div>
              {events.map((event, index) => {
                const eventDate = getDateParts(event.date);
                const isActive = index === selected;

                return (
                  <motion.button
                    key={event.title}
                    onClick={() => setSelected(index)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className={`group relative flex w-full items-center gap-4 border-b border-navy/10 px-6 py-5 text-left transition-colors duration-300 sm:gap-5 sm:px-7 sm:py-5 lg:px-8 ${
                      isActive
                        ? "bg-white"
                        : "hover:bg-white/70"
                    }`}
                  >
                    {/* Active indicator */}
                    <motion.div
                      animate={{
                        scaleY: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      className="absolute left-0 top-0 h-full w-1 origin-center bg-royal"
                    />

                    {/* Date box */}
                    <div
                      className={`flex h-[54px] w-[54px] shrink-0 flex-col items-center justify-center rounded-lg border transition-all duration-300 sm:h-[58px] sm:w-[58px] ${
                        isActive
                          ? "border-royal bg-royal text-white"
                          : "border-navy/10 bg-[#f3f4f1] text-navy group-hover:border-royal/40"
                      }`}
                    >
                      <span className="text-[8px] font-semibold uppercase tracking-[0.1em] opacity-60">
                        {eventDate.month}
                      </span>

                      <span className="mt-0.5 font-display text-lg leading-none sm:text-xl">
                        {eventDate.day}
                      </span>
                    </div>

                    {/* Event information */}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`font-display text-[15px] leading-tight transition-colors sm:text-lg ${
                          isActive
                            ? "text-navy"
                            : "text-navy/70 group-hover:text-navy"
                        }`}
                      >
                        {event.title}
                      </p>

                      <p className="mt-1 line-clamp-1 text-[11px] leading-relaxed text-navy/40">
                        {event.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={16}
                      className={`hidden shrink-0 transition-all duration-300 sm:block ${
                        isActive
                          ? "translate-x-0 text-royal opacity-100"
                          : "-translate-x-2 text-navy/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-7 py-5 lg:px-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-navy/30">
                NACOS Nile
              </span>

              <span className="text-[10px] uppercase tracking-[0.1em] text-navy/30">
                Stay involved
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}