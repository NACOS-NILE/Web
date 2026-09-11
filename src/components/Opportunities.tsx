"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

interface PathwayStep {
  id: string;
  step: string;
  stage: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PATHWAY_STEPS: PathwayStep[] = [
  {
    id: "mentorship",
    step: "01",
    stage: "Onboarding & Guidance",
    title: "1-on-1 Mentorship",
    description:
      "Get paired with senior students and alumni who guide your academic choices, course revision, and software direction.",
    icon: (
      <svg className="w-5 h-5 text-nacos-accent-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "open-source",
    step: "02",
    stage: "Skill & Project Mastery",
    title: "Open Source Projects",
    description:
      "Contribute to chapter-led open source software and build a high-caliber GitHub portfolio that speaks for itself.",
    icon: (
      <svg className="w-5 h-5 text-nacos-accent-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m18 16 4-4-4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 8-4 4 4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    id: "competitions",
    step: "03",
    stage: "Challenge & Validation",
    title: "Hackathons & Contests",
    description:
      "Represent Nile University in national hackathons, coding contests, and annual NACOS Week technical challenges.",
    icon: (
      <svg className="w-5 h-5 text-nacos-accent-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
    id: "internships",
    step: "04",
    stage: "Industry Placement",
    title: "Internships & Careers",
    description:
      "Connect directly with partner tech companies offering internship pipelines built specifically for NACOS members.",
    icon: (
      <svg className="w-5 h-5 text-nacos-accent-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="14" x="2" y="6" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function Opportunities() {
  return (
    <section id="opportunities" className="relative py-12 sm:py-16 bg-nacos-dark px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden scroll-mt-20">
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nacos-accent/10 border border-nacos-accent/30 text-nacos-accent-light text-[11px] font-semibold uppercase tracking-wider mb-2.5">
            Student Journey &amp; Growth Pathway
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-white mb-2 font-display">
            Opportunities &amp; Pathways
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
            A step-by-step roadmap from freshman orientation to industry career placement.
          </p>
        </ScrollReveal>

        {/* Pathway Timeline Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PATHWAY_STEPS.map((step, idx) => (
            <ScrollReveal key={step.id} delay={idx * 100}>
              <div className="group relative p-4 sm:p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-nacos-accent/40 transition-all duration-300 flex flex-col justify-between h-full shadow-lg">
                <div>
                  {/* Top Bar: Step Number + Stage Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-nacos-blue/30 border border-nacos-accent/30 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-xl font-bold font-mono text-nacos-accent/40 group-hover:text-nacos-accent-light transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Stage Label */}
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-nacos-accent-light/80 mb-1">
                    {step.stage}
                  </p>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-nacos-accent-light transition-colors leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-300/90 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Progress Step Arrow indicator */}
                <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 group-hover:text-nacos-accent-light transition-colors">
                  <span>Step {step.step} of 04</span>
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
