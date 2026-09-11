"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

interface Pillar {
  id: string;
  title: string;
  badgeIcon: React.ReactNode;
  description: string;
  bullets: string[];
}

const PILLARS: Pillar[] = [
  {
    id: "learn",
    title: "Learn",
    description:
      "Workshops, study groups and peer-led sessions that take you from fundamentals to fluency — algorithms, systems, and the craft of clean code.",
    bullets: [
      "Weekly technical deep-dives",
      "DSA & interview prep circles",
      "Peer mentorship & study groups",
    ],
    badgeIcon: (
      <svg className="w-5 h-5 text-nacos-accent-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    id: "build",
    title: "Build",
    description:
      "Hackathons, project sprints and open-source collaborations where ideas become working software. Ship something you're proud of.",
    bullets: [
      "Seasonal hackathons & challenges",
      "Team project build sprints",
      "Open source contributions",
    ],
    badgeIcon: (
      <svg className="w-5 h-5 text-nacos-accent-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.9 6.9a2.12 2.12 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: "grow",
    title: "Grow",
    description:
      "Career talks, industry connections and leadership opportunities that turn members into professionals and leaders in tech.",
    bullets: [
      "Industry mentorship matching",
      "Career & internship prep",
      "Chapter leadership roles",
    ],
    badgeIcon: (
      <svg className="w-5 h-5 text-nacos-accent-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M23 6l-9.5 9.5-5-5L1 18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 6h6v6" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-20 sm:py-28 bg-nacos-dark px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            How We Empower Students
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Three foundational pillars driving academic excellence, technical mastery, and career readiness at Nile University.
          </p>
        </ScrollReveal>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {PILLARS.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={idx * 150}>
              <div className="group relative h-full pt-10 pb-8 px-6 sm:px-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-nacos-accent/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
                {/* Overlapping Top Badge Icon */}
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-xl bg-nacos-dark border border-nacos-accent/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-nacos-accent transition-all duration-300">
                  {pillar.badgeIcon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-nacos-accent-light transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-normal mb-8">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullets List with Gold Arrows */}
                <ul className="space-y-3 pt-6 border-t border-white/10 text-sm">
                  {pillar.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-gray-200">
                      <span className="text-nacos-accent-light font-bold text-xs shrink-0">↗</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
