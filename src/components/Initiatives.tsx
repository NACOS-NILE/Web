"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

interface InitiativeCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
}

const INITIATIVES: InitiativeCard[] = [
  {
    id: "leadership",
    tag: "Leadership",
    title: "Leadership",
    description:
      "Leave a lasting impact as an active student volunteer or elected executive leader.",
    accentColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "bootcamps",
    tag: "Workshops",
    title: "Technical Workshops",
    description:
      "Hands-on coding labs: Web Dev, Mobile Apps, Python, AI, Cloud, and Ethical Hacking.",
    accentColor: "text-nacos-accent-light bg-nacos-blue/30 border-nacos-accent/30",
    icon: (
      <svg className="w-5 h-5 text-nacos-accent-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "hackathons",
    tag: "Hackathons",
    title: "Hackathons",
    description:
      "Get updated on upcoming 48-hour hackathons, innovation challenges & tech week contests.",
    accentColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 22h16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    id: "socials",
    tag: "Social Events",
    title: "Social Events",
    description:
      "Have fun in uni through our active social events, gaming tournaments, and sporting events.",
    accentColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Initiatives() {
  return (
    <section
      id="events"
      className="relative py-12 sm:py-16 bg-nacos-dark-alt px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-white mb-2 font-display">
            Why be an Active NACOSite?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal max-w-xl mx-auto">
            We provide the complete ecosystem you need to grow from a computing student into an industry professional.
          </p>
        </ScrollReveal>

        {/* 4 Compact Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INITIATIVES.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 80}>
              <div className="group relative p-5 rounded-xl bg-[#111927]/90 hover:bg-[#162338] border border-white/10 hover:border-nacos-accent/40 transition-all duration-300 flex flex-col justify-between h-full shadow-lg hover:-translate-y-0.5">
                <div>
                  {/* Top Icon Badge */}
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform ${item.accentColor}`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-nacos-accent-light transition-colors leading-snug font-display">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-300/90 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
