"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  X,
  CheckCircle2,
  Code,
} from "lucide-react";

interface GroundProject {
  id: string;
  tag: string;
  title: string;
  location: string;
  category: string;
  cadence: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  technologies: string[];
  deliverables: string[];
  isFullWidth?: boolean;
}

const PROJECTS: GroundProject[] = [
  {
    id: "tech-week",
    tag: "01 / Annual Flagship",
    title: "Nile Tech Week & 72-Hour Hackathon",
    location: "Nile Innovation Complex & Auditorium Hall A",
    category: "Campus Hackathon & Exhibition",
    cadence: "Annual • Rain Semester",
    description:
      "The premier collegiate engineering summit in Abuja. 72 hours of uninterrupted product building, robotics exhibitions, and ₦1,000,000+ in prize pools judged by leading African tech founders and faculty mentors.",
    image: "/gallery/stem-con.jpg",
    isFullWidth: true,
    stats: [
      { label: "Prize Pool", value: "₦1,000,000+" },
      { label: "Participants", value: "500+ Students" },
      { label: "Build Window", value: "72 Hours" },
      { label: "Finalists Demo", value: "18 Teams" },
    ],
    technologies: ["Next.js", "Python AI", "Rust / Embedded", "Solidity", "Tailwind CSS"],
    deliverables: [
      "Live MVP deployment to production domain within 72 hours",
      "Keynote addresses from leading engineering executives",
      "Direct technical recruitment and seed venture pitch rounds",
    ],
  },
  {
    id: "campus-portal",
    tag: "02 / Student Engineering",
    title: "Autonomous Student Degree & Course Auditor",
    location: "Computing Software Engineering Lab 3",
    category: "Full-Stack Software System",
    cadence: "Active Production",
    description:
      "High-reliability graduation audit engine designed by Nile SE students, enabling automated prerequisite validation, degree progress tracking, and predictive CGPA simulations for all computing departments.",
    image: "/gallery/collective-lab.jpg",
    stats: [
      { label: "Latency", value: "<85ms" },
      { label: "Coverage", value: "6 Computing Majors" },
    ],
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    deliverables: [
      "Real-time transcript prerequisite dependency graph parsing",
      "Deterministic CGPA forecasting with historical course curves",
      "Exportable degree completion clearance checklists",
    ],
  },
  {
    id: "cyber-range",
    tag: "03 / Live Threat Simulation",
    title: "SOC Defense Drills & Capture-The-Flag Arena",
    location: "Cyber Security Operations Lab (SOC)",
    category: "Offensive & Defensive Security",
    cadence: "Bi-Weekly Exercises",
    description:
      "Hardened laboratory range simulating multi-vector packet injection, zero-day mitigation, ransomware containment, and live network forensics under adversarial conditions.",
    image: "/gallery/csw-speakers.jpeg",
    stats: [
      { label: "Attack Vectors", value: "40+ Scenarios" },
      { label: "Team Drills", value: "Red vs Blue" },
    ],
    technologies: ["Wireshark", "Ghidra", "Kali Linux", "Snort IDS", "Burp Suite Pro"],
    deliverables: [
      "Real-time packet inspection and malware disassembly drills",
      "Zero-trust privilege escalation prevention benchmarks",
      "Incident response post-mortem forensics reports",
    ],
  },
  {
    id: "ai-symposium",
    tag: "04 / Applied Research",
    title: "Collegiate AI & Data Science Symposium",
    location: "Auditorium Assembly Complex",
    category: "Neural Architectures & Machine Learning",
    cadence: "Annual Academic Track",
    description:
      "Peer-reviewed academic assembly showcasing localized deep learning architectures, transformer optimizations, and computer vision models applied to African industry challenges.",
    image: "/gallery/workshop-1--2.jpg",
    stats: [
      { label: "Accepted Papers", value: "14 Studies" },
      { label: "Faculty Mentors", value: "8 Professors" },
    ],
    technologies: ["PyTorch", "Hugging Face", "CUDA", "Pandas", "Scikit-Learn"],
    deliverables: [
      "Student paper publications on localized NLP and vision transformers",
      "Open-source dataset releases for Nigerian agricultural monitoring",
      "Panel reviews by visiting data engineering researchers",
    ],
  },
  {
    id: "code-labs",
    tag: "05 / Peer Mentorship",
    title: "Weekly Peer Code Labs & Academic Circles",
    location: "Block B Academic Lecture Halls",
    category: "Tutorials & Core Fundamentals",
    cadence: "Weekly • Saturdays",
    description:
      "Student-facilitated deep dives into Data Structures, Algorithm Optimization, Operating System Kernels, and Assembly languages to bolster academic performance across all levels.",
    image: "/gallery/100-level-orientation.jpg",
    stats: [
      { label: "Weekly Attendance", value: "120+ Students" },
      { label: "Covered Modules", value: "16 Courses" },
    ],
    technologies: ["C++", "Java", "Python", "Linux CLI", "Git / GitHub"],
    deliverables: [
      "Hands-on live problem solving for past exam blueprints",
      "Peer code reviews and algorithmic complexity analysis",
      "Structured 1-on-1 mentorship for 100L and 200L freshmen",
    ],
  },
];

export default function OnTheGroundSection() {
  const [selectedProject, setSelectedProject] = useState<GroundProject | null>(null);

  return (
    <section id="on-the-ground" className="relative bg-[#070913] text-[#f4f2ee] py-28 px-4 md:px-12 select-none border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        {/* Field Realizations Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#60a5fa] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#60a5fa]" />
                02 / On The Ground
              </span>
              <span className="h-px w-12 bg-white/20" />
            </div>
            <h2 className="font-rector text-[38px] sm:text-[54px] md:text-[68px] font-normal uppercase tracking-tight leading-[0.95] text-[#f4f2ee]">
              Realizations &amp;<br />
              <span className="text-[#60a5fa] italic">
                Field Projects
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[15px] font-light text-white/70 leading-relaxed">
              Explore authentic initiatives, deployed software, security testbeds, and academic assemblies engineered by computing students on campus at Nile University of Nigeria.
            </p>
          </div>
        </div>

        {/* Project Realizations Grid (Full-Width Hero Card + 2-Column Cards) */}
        <div className="space-y-8">
          {PROJECTS.map((project) => {
            if (project.isFullWidth) {
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative cut-corner bg-[#0d1021] border border-white/10 hover:border-[#60a5fa]/50 transition-all duration-500 overflow-hidden shadow-2xl cursor-pointer"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Visual Media with Real Nile Photo (Full Authentic Color) */}
                    <div className="lg:col-span-7 relative min-h-[200px] sm:min-h-[360px] lg:min-h-[440px] overflow-hidden bg-[#070913]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                      {/* Location Chip */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                        <div className="cut-corner-sm inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-[#070913]/90 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono text-[#f4f2ee] uppercase tracking-wider">
                          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#60a5fa]" />
                          <span>{project.location}</span>
                        </div>
                      </div>

                      {/* Mobile Tap Indicator */}
                      <div className="sm:hidden absolute top-3 right-3 z-10">
                        <div className="cut-corner-sm inline-flex items-center gap-1 px-2.5 py-1 bg-[#070913]/90 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#60a5fa] uppercase tracking-wider">
                          <span>Inspect</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    {/* Content Panel */}
                    <div className="lg:col-span-5 p-4 sm:p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-2 sm:mb-4 pb-2 sm:pb-3 border-b border-white/10">
                          <span className="text-[10px] sm:text-[11px] font-mono text-[#60a5fa] tracking-[0.2em] uppercase font-semibold">
                            {project.tag}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-mono text-white/60 tracking-wider uppercase">
                            {project.cadence}
                          </span>
                        </div>

                        <h3 className="font-rector text-[22px] sm:text-[32px] lg:text-[36px] font-normal uppercase text-[#f4f2ee] mb-1 sm:mb-3 leading-tight group-hover:text-[#60a5fa] transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-[11px] sm:text-[13px] font-mono text-white/70 mb-3 sm:mb-6">
                          {"// "}{project.category}
                        </p>

                        {/* Description (Hidden on mobile) */}
                        <p className="hidden sm:block text-[14px] sm:text-[15px] font-light text-white/80 leading-relaxed mb-8">
                          {project.description}
                        </p>

                        {/* Metric Highlights */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 pb-4 sm:pb-8 border-b border-white/10">
                          {project.stats.slice(0, 2).map((st, i) => (
                            <div key={i}>
                              <div className="text-[16px] sm:text-[20px] font-black text-[#f4f2ee]">
                                {st.value}
                              </div>
                              <div className="text-[10px] sm:text-[11px] font-mono uppercase text-white/60">
                                {st.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Desktop Action */}
                      <div className="hidden sm:flex pt-6 items-center justify-between">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="cut-corner inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#60a5fa] hover:bg-white text-[#070913] font-bold text-[12px] font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg whitespace-nowrap"
                        >
                          <span>Explore Project</span>
                          <ArrowUpRight className="w-4 h-4 shrink-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}

          {/* 2-Column Grid for Subsequent Realizations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {PROJECTS.filter((p) => !p.isFullWidth).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cut-corner bg-[#0d1021] border border-white/10 hover:border-[#60a5fa]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl cursor-pointer"
              >
                <div>
                  {/* Real Photo Thumbnail (Full Authentic Color) */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070913]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                    {/* Location Tag */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                      <div className="cut-corner-sm inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#070913]/90 backdrop-blur-md border border-white/15 text-[9px] sm:text-[10px] font-mono text-[#f4f2ee] uppercase tracking-wider">
                        <MapPin className="w-3 h-3 text-[#60a5fa]" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
                      <span className="text-[9px] sm:text-[10px] font-mono text-white/70 px-2 sm:px-2.5 py-0.5 sm:py-1 cut-corner-sm bg-[#070913]/90 backdrop-blur-md border border-white/15 uppercase">
                        {project.cadence}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div className="text-[10px] sm:text-[11px] font-mono text-[#60a5fa] tracking-widest uppercase">
                        {project.tag}
                      </div>
                      <div className="sm:hidden flex items-center gap-1 text-[#60a5fa] text-[10px] font-mono uppercase tracking-wider">
                        <span>Details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>

                    <h3 className="font-rector text-[20px] sm:text-[26px] lg:text-[28px] font-normal uppercase text-[#f4f2ee] mb-1 sm:mb-2 leading-tight group-hover:text-[#60a5fa] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[11px] sm:text-[12px] font-mono text-white/70 mb-2 sm:mb-4">
                      {"// "}{project.category}
                    </p>

                    {/* Description (Hidden on mobile) */}
                    <p className="hidden sm:block text-[14px] font-light text-white/80 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 sm:p-6 lg:p-8 pt-0 flex items-center justify-between border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-3">
                    {project.stats.map((st, i) => (
                      <div key={i} className="text-[11px] sm:text-[12px] font-mono text-white/70">
                        <span className="font-bold text-[#f4f2ee]">{st.value}</span> {st.label}
                      </div>
                    ))}
                  </div>

                  <div className="hidden sm:inline-flex">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="cut-corner-sm inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-[#60a5fa] hover:text-[#070913] text-[#f4f2ee] font-bold text-[11px] font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0d1021] border border-white/10 cut-corner p-4 sm:p-8 lg:p-10 shadow-2xl max-h-[85dvh] sm:max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 cut-corner-sm bg-white/5 hover:bg-[#60a5fa] text-white/70 hover:text-[#070913] transition-colors cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 pr-10">
                <span className="text-[10px] sm:text-[12px] font-mono font-bold text-[#60a5fa] px-2 py-0.5 sm:px-2.5 sm:py-1 cut-corner-sm bg-[#60a5fa]/10 border border-[#60a5fa]/20">
                  {selectedProject.tag}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/80 uppercase">
                  {selectedProject.cadence}
                </span>
              </div>

              <h3 className="font-rector text-[22px] sm:text-[32px] md:text-[36px] font-normal text-[#f4f2ee] mb-1 sm:mb-2 uppercase pr-8">
                {selectedProject.title}
              </h3>
              <p className="text-[12px] sm:text-[13px] font-mono text-[#60a5fa] flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-6">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">{selectedProject.location}</span>
              </p>

              <p className="text-[13px] sm:text-[15px] font-light text-white/80 leading-relaxed mb-4 sm:mb-8">
                {selectedProject.description}
              </p>

              {/* Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-3.5 sm:p-5 cut-corner-sm bg-white/[0.02] border border-white/5 mb-4 sm:mb-8">
                {selectedProject.stats.map((st, i) => (
                  <div key={i}>
                    <div className="text-[16px] sm:text-[20px] font-black text-[#f4f2ee]">
                      {st.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase text-white/50">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deliverables & Technologies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8">
                <div className="p-3.5 sm:p-5 cut-corner-sm bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#60a5fa] mb-2.5 sm:mb-3 flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#60a5fa]" />
                    <span>Key Deliverables</span>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedProject.deliverables.map((item, i) => (
                      <li key={i} className="text-[12px] sm:text-[13px] text-white/80 flex items-start gap-2">
                        <span className="text-[#60a5fa] font-mono">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 sm:p-5 cut-corner-sm bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#60a5fa] mb-2.5 sm:mb-3 flex items-center gap-2 font-bold">
                    <Code className="w-3.5 h-3.5" />
                    <span>Tech Stack &amp; Tooling</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 cut-corner-sm bg-white/5 text-[#ded9d7] border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Action & External Link */}
              <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3">
                <a
                  href="https://github.com/NACOS-NILE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2.5 cut-corner-sm bg-white/10 hover:bg-[#60a5fa] hover:text-[#070913] text-white font-bold text-[11px] sm:text-[12px] font-mono uppercase transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap text-center"
                >
                  <span>Explore Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 sm:px-6 py-2.5 cut-corner-sm bg-[#60a5fa] text-[#070913] font-bold text-[11px] sm:text-[12px] font-mono uppercase hover:bg-white transition-colors cursor-pointer whitespace-nowrap text-center"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
