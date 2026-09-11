"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Cpu,
  ShieldCheck,
  Server,
  Database,
  BarChart3,
  ArrowUpRight,
  Sparkles,
  X,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

interface Discipline {
  id: string;
  index: string;
  name: string;
  code: string;
  themeColor: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  keyTopics: string[];
  careerPaths: string[];
  certifications: string[];
  image: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: "csc",
    index: "01",
    name: "Computer Science",
    code: "CSC",
    themeColor: "#274193",
    tagline: "Algorithms, Artificial Intelligence & Computation Theory",
    description:
      "Deep-dive into algorithmic complexity, compiler design, artificial neural architectures, and computational logic powering modern computing systems worldwide.",
    icon: Code,
    keyTopics: [
      "Data Structures & Algorithm Optimization",
      "Artificial Intelligence & Machine Learning",
      "Operating Systems & Compiler Principles",
      "Discrete Mathematics & Theory of Computation",
    ],
    careerPaths: [
      "AI/ML Research Scientist",
      "Core Systems Engineer",
      "Algorithm Engineer",
      "Full-Stack Architect",
    ],
    certifications: ["AWS Certified Developer", "TensorFlow Developer", "Google Cloud ML Engineer"],
    image: "/gallery/workshop-1.jpg",
  },
  {
    id: "sen",
    index: "02",
    name: "Software Engineering",
    code: "SEN",
    themeColor: "#60a5fa",
    tagline: "Software Architecture, Microservices & Scalable Systems",
    description:
      "Master modern software craftsmanship, end-to-end design patterns, automated CI/CD pipelines, and high-throughput cloud applications built for scale.",
    icon: Cpu,
    keyTopics: [
      "Enterprise Software Architecture",
      "Microservices & Distributed Systems",
      "Test-Driven Development & QA Automation",
      "Cloud-Native Systems & DevOps Pipelines",
    ],
    careerPaths: [
      "Senior Software Engineer",
      "Cloud Solutions Architect",
      "Engineering Lead",
      "DevOps / SRE Specialist",
    ],
    certifications: ["CKA (Kubernetes Administrator)", "AWS DevOps Professional", "Meta Full-Stack"],
    image: "/gallery/workshop-3.png",
  },
  {
    id: "cyb",
    index: "03",
    name: "Cyber Security",
    code: "CYB",
    themeColor: "#10b981",
    tagline: "Offensive Ops, Defensive Hardening & Forensics",
    description:
      "Protect critical digital infrastructure against nation-state vectors, execute penetration testing, conduct digital forensics, and design zero-trust architectures.",
    icon: ShieldCheck,
    keyTopics: [
      "Network Penetration Testing & Ethical Hacking",
      "Digital Forensics & Incident Response",
      "Applied Cryptography & Zero-Trust Protocol",
      "Malware Reverse Engineering & SOC Ops",
    ],
    careerPaths: [
      "SOC Security Analyst",
      "Penetration Tester / Red Teamer",
      "Information Security Officer",
      "Cyber Threat Intelligence Specialist",
    ],
    certifications: ["CompTIA Security+", "CEH (Certified Ethical Hacker)", "OSCP / CISSP"],
    image: "/gallery/csw-attendees.jpeg",
  },
  {
    id: "ift",
    index: "04",
    name: "Information Technology",
    code: "IFT",
    themeColor: "#3b82f6",
    tagline: "Cloud Infrastructure, Networking & Virtualization",
    description:
      "Design, manage, and scale complex enterprise IT systems, virtual server farms, enterprise routing networks, and hybrid cloud orchestration.",
    icon: Server,
    keyTopics: [
      "Enterprise Cloud & Hybrid Virtualization",
      "Routing, Switching & Software Defined Networks",
      "IT Service Management & Disaster Recovery",
      "Cyber-Physical System Administration",
    ],
    careerPaths: [
      "Cloud Infrastructure Engineer",
      "Network Operations Lead",
      "Enterprise IT Consultant",
      "Datacenter Administrator",
    ],
    certifications: ["Cisco CCNA/CCNP", "AWS Solutions Architect", "CompTIA Network+"],
    image: "/gallery/lab.jpeg",
  },
  {
    id: "ifs",
    index: "05",
    name: "Information Systems",
    code: "IFS",
    themeColor: "#f59e0b",
    tagline: "Enterprise Systems, Business Logic & Data Governance",
    description:
      "Bridge executive strategy and high-impact technology. Lead ERP implementations, business intelligence workflows, and data governance frameworks.",
    icon: Database,
    keyTopics: [
      "ERP / CRM Enterprise System Architecture",
      "Business Intelligence & Data Warehousing",
      "IT Governance, Audit & Compliance",
      "Product Management & Digital Transformation",
    ],
    careerPaths: [
      "IT Business Analyst",
      "ERP Technical Consultant",
      "Information Systems Manager",
      "Digital Product Strategist",
    ],
    certifications: ["PMI-PMP", "ITIL 4 Managing Professional", "CISA / TOGAF"],
    image: "/gallery/library-computing-section.jpg",
  },
  {
    id: "dat",
    index: "06",
    name: "Data Science",
    code: "DAT",
    themeColor: "#ec4899",
    tagline: "Big Data, Statistical Modeling & Deep Neural Networks",
    description:
      "Extract predictive intelligence from high-volume streaming data, engineer automated ETL pipelines, and deploy generative AI solutions for production.",
    icon: BarChart3,
    keyTopics: [
      "Statistical Inference & Predictive Modeling",
      "Big Data Distributed Pipelines (Spark/Hadoop)",
      "Deep Learning, NLP & Computer Vision",
      "Data Storytelling & Executive Visualizations",
    ],
    careerPaths: [
      "Data Scientist / ML Engineer",
      "Big Data Infrastructure Engineer",
      "Quantitative Analyst",
      "AI Product Specialist",
    ],
    certifications: ["IBM Data Science Professional", "Azure Data Scientist", "Databricks ML"],
    image: "/gallery/stem-con.jpg",
  },
];

export default function DisciplinesSection() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [activeStackIndex, setActiveStackIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportCenter = scrollY + window.innerHeight * 0.35;

      let currentIdx = 0;
      for (let i = 0; i < DISCIPLINES.length; i++) {
        const el = document.getElementById(`discipline-${DISCIPLINES[i].id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (viewportCenter >= top) {
            currentIdx = i;
          }
        }
      }
      setActiveStackIndex(currentIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="disciplines" className="relative bg-[#070913] text-[#f4f2ee] py-28 px-4 md:px-12 select-none border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        {/* Disciplines Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#60a5fa] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#60a5fa]" />
                01 / Academic Accompaniment
              </span>
              <span className="h-px w-12 bg-white/20" />
            </div>
            <h2 className="font-rector text-[38px] sm:text-[54px] md:text-[68px] font-normal uppercase tracking-tight leading-[0.95] text-[#f4f2ee]">
              Our Computing<br />
              <span className="text-[#60a5fa] italic">
                Disciplines
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[15px] font-light text-white/70 leading-relaxed">
              We accompany over 2,500 students through rigorous curriculum guidance, project mentoring, and industry-aligned technical bootcamps across 6 core computing departments.
            </p>
          </div>
        </div>


        {/* Stacking Cards & Pinned Department Matrix Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start relative">
          {/* Stacking Cards List (Left Column) */}
          <div className="flex-1 w-full flex flex-col space-y-6">
            {DISCIPLINES.map((discipline, idx) => {
              const Icon = discipline.icon;
              return (
                <div
                  key={discipline.id}
                  id={`discipline-${discipline.id}`}
                  onMouseEnter={() => setActiveStackIndex(idx)}
                  onClick={() => setSelectedDiscipline(discipline)}
                  className="group relative cut-corner bg-[#0d1021] hover:bg-[#0f1326] transition-all duration-500 overflow-hidden p-4 sm:p-8 lg:p-10 shadow-2xl cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center">
                    {/* Text & Information */}
                    <div className="md:col-span-8 flex flex-col justify-between order-2 md:order-1">
                      <div>
                        {/* Index Number & Department Code */}
                        <div className="flex items-center justify-between md:justify-start gap-4 mb-2 sm:mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-[12px] sm:text-[14px] font-mono font-bold text-[#60a5fa] px-2 py-0.5 sm:px-2.5 sm:py-1 cut-corner-sm bg-[#60a5fa]/10">
                              {discipline.index}
                            </span>
                            <span className="text-[10px] sm:text-[12px] font-mono tracking-widest uppercase text-white/50">
                              DEPARTMENT OF {discipline.code}
                            </span>
                          </div>

                          {/* Mobile Tap Arrow Indicator */}
                          <div className="sm:hidden flex items-center gap-1 text-[#60a5fa] text-[10px] font-mono uppercase tracking-wider">
                            <span>Curriculum</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-rector text-[22px] sm:text-[32px] md:text-[36px] font-normal text-[#f4f2ee] mb-1 sm:mb-2 tracking-tight group-hover:text-[#60a5fa] transition-colors uppercase">
                          {discipline.name}
                        </h3>

                        {/* Tagline */}
                        <p className="text-[11px] sm:text-[13px] font-mono text-[#60a5fa] mb-2 sm:mb-4">
                          {"// "}{discipline.tagline}
                        </p>

                        {/* Description (Hidden on mobile for clean compact presentation) */}
                        <p className="hidden sm:block text-[14px] sm:text-[15px] font-light text-white/80 leading-relaxed mb-6">
                          {discipline.description}
                        </p>
                      </div>

                      {/* Desktop Action Button */}
                      <div className="hidden sm:flex pt-4 items-center gap-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDiscipline(discipline);
                          }}
                          className="cut-corner inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-[#60a5fa] hover:text-[#070913] text-[#f4f2ee] font-bold text-[12px] font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap"
                        >
                          <span>Explore Curriculum</span>
                          <ArrowUpRight className="w-4 h-4 shrink-0" />
                        </button>
                      </div>
                    </div>

                    {/* Image / Visual Container */}
                    <div className="md:col-span-4 relative aspect-[16/9] md:aspect-[4/3] cut-corner-sm overflow-hidden bg-[#070913] order-1 md:order-2">
                      <Image
                        src={discipline.image}
                        alt={discipline.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                      <div className="absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 cut-corner-sm bg-[#070913]/90 backdrop-blur-md flex items-center justify-center text-[#60a5fa]">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extremely Simplified Architectural Department Matrix (Stays Strictly Sticky Pinned During Scroll) */}
          <aside
            className="hidden lg:block lg:w-[260px] shrink-0 sticky top-32 self-start select-none"
            style={{ position: "sticky", top: "128px", alignSelf: "flex-start" }}
          >
            <div className="border-l border-white/15 pl-5 py-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#60a5fa] font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                DEPARTMENTS
              </div>

              {/* 6 Minimalist Typographic Rows */}
              <nav className="flex flex-col space-y-2.5">
                {DISCIPLINES.map((d, i) => {
                  const isActive = activeStackIndex === i;
                  return (
                    <button
                      key={d.id}
                      onClick={() => {
                        setActiveStackIndex(i);
                        const el = document.getElementById(`discipline-${d.id}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className={`group text-left transition-all duration-300 flex items-center gap-3 cursor-pointer py-1.5 px-2 rounded-sm ${
                        isActive
                          ? "text-[#f4f2ee] bg-white/[0.04]"
                          : "text-white/40 hover:text-white/80 hover:bg-white/[0.02]"
                      }`}
                    >
                      {/* Active Indicator Tick */}
                      <span
                        className={`h-px transition-all duration-300 ${
                          isActive
                            ? "w-5 bg-[#60a5fa]"
                            : "w-2 bg-white/20 group-hover:w-3.5 group-hover:bg-white/40"
                        }`}
                      />

                      {/* Department Code & Index */}
                      <span
                        className={`text-[12px] font-mono tracking-wider transition-colors ${
                          isActive ? "font-bold text-[#60a5fa]" : ""
                        }`}
                      >
                        {d.code}
                      </span>

                      {/* Discipline Name */}
                      <span
                        className={`text-[12px] truncate transition-colors ${
                          isActive ? "font-medium text-[#f4f2ee]" : "font-light"
                        }`}
                      >
                        {d.name}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 pt-3 border-t border-white/10 text-[10px] font-mono text-white/30 tracking-wider">
                0{activeStackIndex + 1} / 06 // ACTIVE
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Interactive Blueprint Modal */}
      <AnimatePresence>
        {selectedDiscipline && (
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
                onClick={() => setSelectedDiscipline(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 cut-corner-sm bg-white/5 hover:bg-[#60a5fa] text-white/70 hover:text-[#070913] transition-colors cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 pr-10">
                <span className="text-[10px] sm:text-[12px] font-mono font-bold text-[#60a5fa] px-2 py-0.5 sm:px-2.5 sm:py-1 cut-corner-sm bg-[#60a5fa]/10 border border-[#60a5fa]/20">
                  {selectedDiscipline.index} {" // "} {selectedDiscipline.code}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/60 uppercase">
                  Curriculum Blueprint
                </span>
              </div>

              <h3 className="font-rector text-[22px] sm:text-[32px] md:text-[36px] font-normal text-[#f4f2ee] mb-1 sm:mb-2 uppercase pr-8">
                {selectedDiscipline.name}
              </h3>
              <p className="text-[12px] sm:text-[14px] font-mono text-[#60a5fa] mb-3 sm:mb-6">
                {"// "}{selectedDiscipline.tagline}
              </p>

              <p className="text-[13px] sm:text-[15px] font-light text-white/80 leading-relaxed mb-4 sm:mb-8">
                {selectedDiscipline.description}
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8">
                <div className="p-3.5 sm:p-5 cut-corner-sm bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#60a5fa] mb-2.5 sm:mb-3 flex items-center gap-2 font-bold">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Key Course Topics</span>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedDiscipline.keyTopics.map((topic, i) => (
                      <li key={i} className="text-[12px] sm:text-[13px] text-white/80 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#60a5fa] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 sm:p-5 cut-corner-sm bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#60a5fa] mb-2.5 sm:mb-3 flex items-center gap-2 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Industry Career Paths</span>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedDiscipline.careerPaths.map((career, i) => (
                      <li key={i} className="text-[12px] sm:text-[13px] text-white/80 flex items-start gap-2">
                        <span className="text-[#60a5fa] font-mono">•</span>
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Certifications */}
              <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase text-white/40">Certifications:</span>
                  {selectedDiscipline.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 cut-corner-sm bg-white/5 text-[#ded9d7] border border-white/10"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-2 sm:pt-0">
                  <a
                    href="https://chat.whatsapp.com/invite/nacos-nile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-5 py-2.5 cut-corner-sm bg-white/10 hover:bg-[#60a5fa] hover:text-[#070913] text-white font-bold text-[11px] sm:text-[12px] font-mono uppercase transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap text-center"
                  >
                    <span>Join {selectedDiscipline.code} Group</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>

                  <button
                    onClick={() => setSelectedDiscipline(null)}
                    className="px-4 sm:px-5 py-2.5 cut-corner-sm bg-white/5 hover:bg-white/10 text-white/70 font-mono text-[11px] sm:text-[12px] uppercase transition-colors cursor-pointer text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
