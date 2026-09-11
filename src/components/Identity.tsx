"use client";

import React, { useState } from "react";
import {
  Code,
  Shield,
  Server,
  Layers,
  BarChart3,
  Terminal,
  Sparkles,
  BookOpen,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Building2,
} from "lucide-react";
import { COMPUTING_DISCIPLINES, Discipline } from "@/data/nacosData";

export default function Identity() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>(
    COMPUTING_DISCIPLINES[0]
  );

  const getDisciplineIcon = (code: string) => {
    switch (code) {
      case "CSC":
        return <Terminal className="w-5 h-5 text-[#75b947]" />;
      case "SEN":
        return <Code className="w-5 h-5 text-[#3b82f6]" />;
      case "CYB":
        return <Shield className="w-5 h-5 text-[#ef4444]" />;
      case "ITE":
        return <Server className="w-5 h-5 text-[#10b981]" />;
      case "IFS":
        return <Layers className="w-5 h-5 text-[#eab308]" />;
      case "DSC":
        return <BarChart3 className="w-5 h-5 text-[#8b5cf6]" />;
      default:
        return <Code className="w-5 h-5 text-[#75b947]" />;
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#060b19] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#75b947] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#75b947]" />
              <span>Identity & Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              More than an association. <br />
              <span className="text-slate-400 font-light">A community of builders shaping what comes next.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              At <strong className="text-white">Nile University of Nigeria</strong>, NACOS represents the vanguard of modern computing education. We bridge academic theory with real engineering grit, open-source creation, and peer leadership.
            </p>
          </div>
        </div>

        {/* Magazine Feature Grid: Chapter Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-[#0b1429]/70 border border-white/[0.08] hover:border-[#75b947]/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[#75b947] px-2.5 py-1 rounded bg-[#75b947]/10 border border-[#75b947]/20">
                  {"// 01 ARCHITECTURE"}
                </span>
                <Sparkles className="w-5 h-5 text-slate-500 group-hover:text-[#75b947] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Academic Excellence</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Backing student progress across 100L through 400L with peer tutorials, exam review sessions, and laboratory mentorship led by top-ranking departmental scholars.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-400">
              Coverage: All 6 Computing Departments
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0b1429]/70 border border-white/[0.08] hover:border-[#3b82f6]/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[#3b82f6] px-2.5 py-1 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/20">
                  {"// 02 CULTURE"}
                </span>
                <Code className="w-5 h-5 text-slate-500 group-hover:text-[#3b82f6] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hands-on Software Craft</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe you only understand systems by building them. From weekend hack sprints to full-scale web platforms, our members write production-grade code.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-400">
              Philosophy: Production over Proof of Concept
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0b1429]/70 border border-white/[0.08] hover:border-[#75b947]/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[#75b947] px-2.5 py-1 rounded bg-[#75b947]/10 border border-[#75b947]/20">
                  {"// 03 FUTURE"}
                </span>
                <Briefcase className="w-5 h-5 text-slate-500 group-hover:text-[#75b947] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Career Pipelines</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Direct connections with Nile alumni and technology executives across Nigeria and abroad, opening doors to high-impact internships, fellowships, and tech jobs.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-400">
              Outcome: Industry Readiness from Day 1
            </div>
          </div>
        </div>

        {/* 6 Computing Disciplines Showcase Section */}
        <div id="disciplines" className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/[0.08] gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#3b82f6]">
                {"// Academic Matrix"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                The 6 Nile Computing Disciplines
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-400">
              Select a discipline to inspect syllabus focus & tech stacks
            </p>
          </div>

          {/* Discipline Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {COMPUTING_DISCIPLINES.map((disc) => {
              const isSelected = selectedDiscipline.id === disc.id;
              return (
                <button
                  key={disc.id}
                  onClick={() => setSelectedDiscipline(disc)}
                  className={`p-4 rounded-xl border text-left transition-all focus:outline-none flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#274193] border-[#75b947]/50 shadow-lg shadow-[#274193]/30 scale-[1.02]"
                      : "bg-[#0b1429]/60 border-white/[0.08] hover:border-white/[0.2] hover:bg-[#0b1429]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-white" : "text-[#75b947]"
                      }`}
                    >
                      {disc.code}
                    </span>
                    {getDisciplineIcon(disc.code)}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate">
                    {disc.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Discipline Interactive Detail Canvas */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1429] border border-white/[0.1] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#274193]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-[#75b947]/15 text-[#75b947] border border-[#75b947]/30">
                    DEPT: {selectedDiscipline.code}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Nile FNAS Computing Curriculum
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {selectedDiscipline.name}
                </h4>
                <p className="text-sm font-mono text-[#3b82f6] mb-4">
                  {selectedDiscipline.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {selectedDiscipline.description}
                </p>

                {/* Popular Tech Stacks */}
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                    Primary Tools & Frameworks
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedDiscipline.popularTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-5">
                {/* Foundational Courses Panel */}
                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs font-mono text-[#75b947] mb-3">
                    <span className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>Foundational Coursework</span>
                    </span>
                    <span className="text-[10px] text-slate-400">Nile Syllabus</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedDiscipline.coreCourses.map((course) => (
                      <div
                        key={course.code}
                        className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex flex-col"
                      >
                        <span className="text-[11px] font-mono font-bold text-[#75b947]">
                          {course.code}
                        </span>
                        <span className="text-[11px] text-slate-300 line-clamp-1 mt-0.5" title={course.title}>
                          {course.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Core Pillars */}
                  <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#75b947] mb-3">
                      <BookOpen className="w-4 h-4" />
                      <span>Curricular Pillars</span>
                    </div>
                    <ul className="space-y-2">
                      {selectedDiscipline.corePillars.map((pillar) => (
                        <li key={pillar} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#75b947] flex-shrink-0" />
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Pathways */}
                  <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#3b82f6] mb-3">
                      <Briefcase className="w-4 h-4" />
                      <span>Career Horizons</span>
                    </div>
                    <ul className="space-y-2">
                      {selectedDiscipline.careerPaths.map((career) => (
                        <li key={career} className="flex items-center gap-2 text-xs text-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Lab Facility Ribbon */}
                <div className="p-3 rounded-xl bg-[#060b19] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Building2 className="w-4 h-4 text-[#75b947]" />
                    <span className="text-slate-400">Campus Facility:</span>
                    <span className="text-white font-medium">{selectedDiscipline.labFacility}</span>
                  </div>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#75b947]/10 text-[#75b947] text-[10px]">
                    FNAS ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
