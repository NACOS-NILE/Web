"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Hammer,
  TrendingUp,
  Sparkles,
  Check,
  ArrowRight,
  GitBranch,
  GitCommit,
  Cpu,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Pillars() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      step: "01",
      title: "LEARN",
      subtitle: "Master the Foundational & Emerging Technologies",
      accent: "#60a5fa",
      accentBg: "rgba(96, 165, 250, 0.15)",
      tagline: "Theory meets rigorous laboratory practice.",
      description:
        "We believe that real engineering intuition begins with deep foundational mastery. From data structures and operating systems to transformer models and distributed consensus, NACOS Nile curates high-density learning tracks that demystify complex computing paradigms.",
      actionPoints: [
        "Weekly hands-on coding labs led by student directors",
        "Curated roadmaps for Web3, Cloud, AI, and Cybersecurity",
        "Exam review clinics & academic past-question deconstructions",
      ],
      badge: "Intellectual Rigor",
      icon: BookOpen,
    },
    {
      step: "02",
      title: "BUILD",
      subtitle: "Ship Production Software That Solves Real Problems",
      accent: "#75b947",
      accentBg: "rgba(117, 185, 71, 0.15)",
      tagline: "Code is not real until it runs in production.",
      description:
        "Tutorials are only step one. At Nile, NACOS members collaborate in agile squads, write pull requests, deploy to the cloud, and build tools used by fellow students and real-world clients. We champion open-source contributions and active hackathon participation.",
      actionPoints: [
        "Annual Nile Hackathon & 48-Hour Product Sprints",
        "Campus utility development (portals, bots, student tooling)",
        "Collaborative GitHub repositories with peer code reviews",
      ],
      badge: "Engineering Craft",
      icon: Hammer,
    },
    {
      step: "03",
      title: "GROW",
      subtitle: "Evolve into Industry-Ready Leaders and Innovators",
      accent: "#c084fc",
      accentBg: "rgba(192, 132, 252, 0.15)",
      tagline: "From classroom builder to global technologist.",
      description:
        "Technical skill combined with communication, teamwork, and leadership creates unstoppable creators. Through alumni mentorship, executive career talks, and internship pipelines, our members graduate ready to thrive at top tech companies worldwide.",
      actionPoints: [
        "Direct fireside chats with Nigerian & international tech founders",
        "Resume optimizations, portfolio audits & technical interview prep",
        "Dues-waiver competitions & leadership executive development",
      ],
      badge: "Career Velocity",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="pillars" className="py-24 sm:py-32 relative bg-[#060b19] overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#274193]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#75b947]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Signature Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#75b947] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE CHAPTER TRIAD PHILOSOPHY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase mb-6">
            LEARN • BUILD • GROW
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            The guiding ethos of NACOS Nile. An interconnected cycle that turns curious freshmen into world-class engineers, founders, and community leaders.
          </p>
        </div>

        {/* Interactive Pillar Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isActive = activePillar === index;
            return (
              <button
                key={pillar.title}
                onClick={() => setActivePillar(index)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 focus:outline-none relative overflow-hidden ${
                  isActive
                    ? "bg-[#0b1429] border-white/[0.2] shadow-2xl scale-[1.01]"
                    : "bg-[#060b19]/60 border-white/[0.06] hover:border-white/[0.12] hover:bg-[#0b1429]/40"
                }`}
              >
                {isActive && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: pillar.accent }}
                  />
                )}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: pillar.accentBg,
                      color: pillar.accent,
                    }}
                  >
                    PHASE {pillar.step}
                  </span>
                  <Icon className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-mono truncate">
                  {pillar.badge}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Full Art-Directed Display */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b1429] border border-white/[0.1] shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: pillars[activePillar].accent }}
                />
                <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                  {pillars[activePillar].tagline}
                </span>
              </div>

              <h4 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                {pillars[activePillar].subtitle}
              </h4>

              <p className="text-base text-slate-300 leading-relaxed mb-8">
                {pillars[activePillar].description}
              </p>

              {/* Action Checkpoints */}
              <div className="space-y-3">
                {pillars[activePillar].actionPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div
                      className="p-1 rounded-md mt-0.5"
                      style={{ backgroundColor: pillars[activePillar].accentBg }}
                    >
                      <Check
                        className="w-3.5 h-3.5"
                        style={{ color: pillars[activePillar].accent }}
                      />
                    </div>
                    <span className="text-sm text-slate-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Graphic & Architecture Composition */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#060b19] border border-white/[0.08] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${pillars[activePillar].accent} 0%, transparent 70%)`,
                }}
              />

              {/* Panel Top Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono">
                <span className="text-slate-400">FRAMEWORK // {pillars[activePillar].step}</span>
                <span
                  className="font-bold px-2 py-0.5 rounded text-[10px]"
                  style={{
                    backgroundColor: pillars[activePillar].accentBg,
                    color: pillars[activePillar].accent,
                  }}
                >
                  {pillars[activePillar].title} ENGINE
                </span>
              </div>

              {/* Dynamic Visualization based on Active Pillar */}
              {activePillar === 0 && (
                /* LEARN: Curriculum & Systems Matrix */
                <div className="space-y-3 my-2 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center justify-between text-[#3b82f6] text-[11px] mb-1">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Cpu className="w-3.5 h-3.5" />
                        PHASE 1: FOUNDATION
                      </span>
                      <span>CSC 201 • FNAS</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Algorithms, memory layouts, computational asymptotic complexity.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center justify-between text-[#38bdf8] text-[11px] mb-1">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Cpu className="w-3.5 h-3.5" />
                        PHASE 2: CONCURRENCY
                      </span>
                      <span>SEN 304 • LAB</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Distributed consensus, IPC channels, and asynchronous event loops.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-[#3b82f6]/30 flex items-center justify-between text-[11px]">
                    <span className="text-white font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6]" />
                      Weekly DTD Peer Reviews
                    </span>
                    <span className="text-[#3b82f6]">100L–400L</span>
                  </div>
                </div>
              )}

              {activePillar === 1 && (
                /* BUILD: Agile Nile Squads & Git Pipeline */
                <div className="space-y-3 my-2 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#03060e] border border-white/[0.08] font-mono text-[11px]">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <GitBranch className="w-3 h-3 text-[#75b947]" />
                      <span className="text-slate-300">git checkout -b feature/nile-hub</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#75b947]">
                      <GitCommit className="w-3 h-3" />
                      <span>commit: 48h hackathon prototype v1.0</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-slate-300">Automated Testing & Lint</span>
                    <span className="text-[#75b947] font-bold">✓ 0 LINT ERRORS</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-[#75b947]/40 flex items-center justify-between text-[11px]">
                    <span className="text-white font-semibold">Production Deployment</span>
                    <span className="text-[#75b947] font-bold">● LIVE ON NILE EDGE</span>
                  </div>
                </div>
              )}

              {activePillar === 2 && (
                /* GROW: 4-Year Student Milestone Trajectory */
                <div className="space-y-2.5 my-2 font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-[#c084fc] font-bold">100L: FRESHMAN</span>
                    <span className="text-slate-300">Zero-to-One Python & Web Labs</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-[#c084fc] font-bold">200L: BUILDER</span>
                    <span className="text-slate-300">Nile Hackathon Team Sprint</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-[#e879f9] font-bold">300L: LEAD</span>
                    <span className="text-slate-300">Executive Council & Mentorship</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-[#c084fc]/40 flex items-center justify-between text-[11px]">
                    <span className="text-white font-bold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#c084fc]" />
                      400L: ALUMNI
                    </span>
                    <span className="text-[#c084fc] font-semibold">Global Tech Placement</span>
                  </div>
                </div>
              )}

              {/* Panel Bottom Bar */}
              <div className="pt-4 mt-2 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Chapter Standard</span>
                <a
                  href="#community"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>Join this track</span>
                  <ArrowRight className="w-3 h-3 text-[#75b947]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
