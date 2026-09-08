"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

interface EventItem {
  id: string;
  day: string;
  month: string;
  type: string;
  time: string;
  location: string;
  title: string;
  description: string;
  registerUrl: string;
}

const EVENTS: EventItem[] = [
  {
    id: "systems-design",
    day: "10",
    month: "Oct",
    type: "Workshop",
    time: "4:00 PM WAT",
    location: "LT 3, Nile University",
    title: "Intro to Systems Design",
    description:
      "A hands-on session on designing scalable software systems — from requirements gathering to architectural diagrams.",
    registerUrl: "#join",
  },
  {
    id: "big-tech",
    day: "24",
    month: "Oct",
    type: "Talk",
    time: "5:00 PM WAT",
    location: "Auditorium, Nile University",
    title: "From Classroom to Big Tech",
    description:
      "An alumni fireside chat on landing international internships, building portfolios, and thriving in global tech companies.",
    registerUrl: "#join",
  },
  {
    id: "hackathon-week",
    day: "07",
    month: "Nov",
    type: "Hackathon",
    time: "9:00 AM WAT",
    location: "Innovation Hub, Nile University",
    title: "NACOS Annual Hackathon Sprints",
    description:
      "48-hour team hackathon prototype challenge building impactful AI and cloud software solutions for local problems.",
    registerUrl: "#join",
  },
  {
    id: "algo-prep",
    day: "18",
    month: "Dec",
    type: "Revision",
    time: "3:00 PM WAT",
    location: "CS Lab 2, Nile University",
    title: "Data Structures & Midterm Review",
    description:
      "Peer-led review circle solving complex algorithmic problems and preparing students for departmental examinations.",
    registerUrl: "#join",
  },
];

export default function Initiatives() {
  return (
    <section
      id="events"
      className="relative py-20 sm:py-28 bg-nacos-dark-alt px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Events &amp; Workshops
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Join hands-on coding sessions, alumni career talks, and flagship hackathons hosted at Nile University campus.
          </p>
        </ScrollReveal>

        {/* Events Cards List */}
        <div className="space-y-6">
          {EVENTS.map((event, idx) => (
            <ScrollReveal key={event.id} delay={idx * 100}>
              <div className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-nacos-accent/40 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
                {/* Left: Date Badge + Meta Info */}
                <div className="flex items-center gap-5 shrink-0">
                  {/* Date Block */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-nacos-accent to-nacos-accent-light text-nacos-dark flex flex-col items-center justify-center font-bold shadow-lg shrink-0">
                    <span className="text-xl sm:text-2xl leading-none">{event.day}</span>
                    <span className="text-xs sm:text-sm uppercase tracking-wider mt-0.5">{event.month}</span>
                  </div>

                  {/* Meta Pills (Type, Time, Location) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-nacos-accent-light bg-nacos-blue/20 border border-nacos-accent/30 px-2.5 py-0.5 rounded-full">
                        {event.type}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{event.time}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
                      <span>📍</span> {event.location}
                    </p>
                  </div>
                </div>

                {/* Center: Title & Description */}
                <div className="flex-1 md:px-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-nacos-accent-light transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {event.description}
                  </p>
                </div>

                {/* Right: Register CTA Button linking to #join */}
                <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0">
                  <a
                    href={event.registerUrl}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-nacos-accent text-white hover:text-nacos-dark font-semibold text-sm border border-white/10 hover:border-nacos-accent transition-all duration-200 shadow-md group-hover:scale-105 active:scale-95"
                  >
                    <span>Register</span>
                    <span className="text-base font-bold">↗</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
