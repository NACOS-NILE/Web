"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Quote } from "lucide-react";

interface Exco {
  id: string;
  name: string;
  role: string;
  officeGroup: string;
  dept: string;
  image: string;
  quote: string;
  bio: string;
}

const EXCOS: Exco[] = [
  {
    id: "president",
    name: "Zikora Fortune Nwafor",
    role: "President",
    officeGroup: "Executive Leadership",
    dept: "Software Engineering",
    image: "/excos-pics/president.jpg",
    quote:
      "Passionate about building active student communities, driving technical excellence, and providing Nile computing students with global industry opportunities.",
    bio: "Chief executive officer steering the overall vision, institutional partnerships, and student governance of the NACOS Nile University Chapter.",
  },
  {
    id: "vp",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    officeGroup: "Executive Leadership",
    dept: "Computer Science",
    image: "/excos-pics/vp.jpg",
    quote:
      "Advocating for student welfare, curriculum enhancement, and academic excellence across all six computing disciplines.",
    bio: "Assisting executive administration, heading cross-departmental coordination, and ensuring academic tutorial support for all students.",
  },
  {
    id: "sg",
    name: "Sheila Jato",
    role: "Secretary General",
    officeGroup: "Secretariat & Operations",
    dept: "Cyber Security",
    image: "/excos-pics/sg.jpg",
    quote:
      "Keeping the engines running smoothly with precision documentation, institutional record-keeping, and operational clarity.",
    bio: "Managing the official secretariat, internal communications, chapter resolutions, and administrative coordination.",
  },
  {
    id: "fc",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    officeGroup: "Finance & Treasury",
    dept: "Information Systems",
    image: "/excos-pics/fc.jpg",
    quote:
      "Making the important financial decisions, upholding fiscal accountability, and funding high-impact student technical programs.",
    bio: "Overseeing chapter finances, annual budget allocations for Nile Tech Week, and sponsorship disbursement.",
  },
  {
    id: "pro",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    officeGroup: "Media & Outreach",
    dept: "Information Technology",
    image: "/excos-pics/pro.jpg",
    quote:
      "Applying creativity to communication, amplifying chapter achievements, and bridging the gap between students and the tech ecosystem.",
    bio: "Directing public communications, social media strategy, press releases, and creative media campaigns for NACOS Nile.",
  },
  {
    id: "dtd",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development (DTD)",
    officeGroup: "Technical & Workshops",
    dept: "Software Engineering",
    image: "/excos-pics/dtd.jpg",
    quote:
      "Driving technical growth, mentoring developers, and leading hands-on coding bootcamps for Nile computing students.",
    bio: "Leading hackathons, software bootcamps, code laboratories, and technical mentorship circles across campus.",
  },
  {
    id: "provost",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    officeGroup: "Operations & Governance",
    dept: "Computer Science",
    image: "/excos-pics/provost.jpg",
    quote:
      "Managing the day-to-day operations and maintaining order and decorum during official NACOS Nile assemblies.",
    bio: "Ensuring adherence to the chapter constitution, overseeing logistical preparations for major events, and presiding over assemblies.",
  },
  {
    id: "socials",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    officeGroup: "Student Life & Events",
    dept: "Data Science",
    image: "/excos-pics/socials.jpg",
    quote:
      "Prioritizing social engagement, networking mixers, and memorable student experiences alongside academic excellence.",
    bio: "Organizing social galas, gaming tournaments, department game nights, and community bonding activities.",
  },
  {
    id: "welfare",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    officeGroup: "Student Welfare",
    dept: "Cyber Security",
    image: "/excos-pics/welfare.jpg",
    quote:
      "Your well-being is my priority. Ensuring every computing student finds a supportive and inclusive environment.",
    bio: "Advocating for student health, academic assistance, peer support initiatives, and mental wellness across the department.",
  },
];

export default function ExcosSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExco = () => {
    setCurrentIndex((prev) => (prev + 1) % EXCOS.length);
  };

  const prevExco = () => {
    setCurrentIndex((prev) => (prev - 1 + EXCOS.length) % EXCOS.length);
  };

  const activeExco = EXCOS[currentIndex];
  const progressPercent = ((currentIndex + 1) / EXCOS.length) * 100;

  return (
    <section id="excos" className="relative bg-[#070913] text-[#f4f2ee] py-28 px-4 md:px-12 select-none border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Leadership Display Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#c1b3ff]/40" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#c1b3ff] font-semibold">
              03 / Chapter Leadership
            </span>
            <span className="h-px w-8 bg-[#c1b3ff]/40" />
          </div>
          <h2 className="font-rector text-[38px] sm:text-[52px] md:text-[64px] font-normal uppercase tracking-tight leading-[0.95] text-[#f4f2ee] mb-4">
            A Council of<br />
            <span className="text-[#c1b3ff] italic">
              Student Allies
            </span>
          </h2>
          <p className="text-[15px] font-light text-white/70 leading-relaxed">
            Our elected executive officers are student leaders in software, security, data, and academic advocacy who steer NACOS Nile and champion student success.
          </p>
        </div>

        {/* Executive Testimonial Card Component (Cut-Corner Architecture) */}
        <div className="relative max-w-5xl mx-auto cut-corner bg-[#0d1021] border border-white/10 p-5 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
          
          {/* Mobile / Tablet Compact Layout */}
          <div className="lg:hidden flex flex-col gap-4">
            {/* Top Controls: Progress & Arrow Buttons */}
            <div className="flex items-center justify-between gap-4 pb-3.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="cut-corner-sm text-[10px] font-mono text-[#c1b3ff] px-2 py-1 bg-white/5 border border-white/10">
                  0{currentIndex + 1} / 0{EXCOS.length}
                </span>
                <span className="text-[11px] font-mono text-white/50 uppercase truncate max-w-[150px]">
                  {activeExco.officeGroup}
                </span>
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevExco}
                  aria-label="Previous Executive"
                  className="cut-corner-sm group w-9 h-9 bg-white/5 hover:bg-[#c1b3ff] text-white hover:text-[#070913] border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextExco}
                  aria-label="Next Executive"
                  className="cut-corner-sm group w-9 h-9 bg-white/5 hover:bg-[#c1b3ff] text-white hover:text-[#070913] border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Officer Horizontal Header: Compact Photo + Name + Role */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExco.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3.5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="relative w-20 h-24 sm:w-28 sm:h-32 cut-corner-sm overflow-hidden border border-white/15 bg-[#070913] shrink-0 shadow-lg">
                    <Image
                      src={activeExco.image}
                      alt={activeExco.name}
                      fill
                      sizes="120px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono tracking-wider text-[#c1b3ff] uppercase block mb-1">
                      {activeExco.dept}
                    </span>
                    <h3 className="font-rector text-lg sm:text-2xl font-normal uppercase text-[#f4f2ee] tracking-tight leading-tight">
                      {activeExco.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#c1b3ff] font-bold mt-1">
                      {activeExco.role}
                    </p>
                  </div>
                </div>

                {/* Quote Block */}
                <div className="pt-3 border-t border-white/10">
                  <p className="font-rector text-[13px] sm:text-base font-normal text-[#f4f2ee] leading-snug italic">
                    &ldquo;{activeExco.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Compact Progress Bar at Bottom */}
            <div className="h-[2px] bg-white/10 overflow-hidden w-full mt-1">
              <motion.div
                className="h-full bg-[#c1b3ff]"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Desktop Luxury Presentation */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left: Officer Portrait with Chamfered Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full cut-corner-sm overflow-hidden border border-white/10 bg-[#070913] shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExco.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeExco.image}
                      alt={activeExco.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Office Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="cut-corner-sm text-[11px] font-mono tracking-widest text-[#c1b3ff] uppercase px-3 py-1.5 bg-[#070913]/90 backdrop-blur-md border border-white/15">
                    {activeExco.dept}
                  </span>
                  <span className="cut-corner-sm text-[11px] font-mono text-white/80 px-2.5 py-1.5 bg-[#070913]/90 backdrop-blur-md border border-white/15">
                    0{currentIndex + 1} / 0{EXCOS.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Content & Controls */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              {/* Top Controls: Progress Bar & Arrow Buttons */}
              <div className="flex items-center justify-between gap-6 pb-6 border-b border-white/10 mb-8">
                {/* Progress Bar */}
                <div className="flex-1 h-[3px] bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-[#c1b3ff]"
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </div>

                {/* Navigation Buttons (Left & Right) */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevExco}
                    aria-label="Previous Executive"
                    className="cut-corner-sm group w-11 h-11 bg-white/5 hover:bg-[#c1b3ff] text-white hover:text-[#070913] border border-white/15 flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    onClick={nextExco}
                    aria-label="Next Executive"
                    className="cut-corner-sm group w-11 h-11 bg-white/5 hover:bg-[#c1b3ff] text-white hover:text-[#070913] border border-white/15 flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>

              {/* Dynamic Officer Quote & Bio */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExco.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-8 h-8 text-[#c1b3ff]/40 mb-2" />
                    <p className="font-rector text-[20px] sm:text-[24px] md:text-[26px] font-normal text-[#f4f2ee] leading-snug">
                      &ldquo;{activeExco.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bio Description */}
                  <p className="text-[14px] sm:text-[15px] font-light text-white/70 leading-relaxed">
                    {activeExco.bio}
                  </p>

                  {/* Officer Details */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-rector text-[22px] sm:text-[26px] font-normal uppercase text-[#f4f2ee]">
                        {activeExco.name}
                      </h3>
                      <p className="text-[13px] font-mono text-[#c1b3ff] font-bold">
                        {activeExco.role}
                      </p>
                    </div>

                    <span className="text-[12px] font-mono uppercase text-white/60">
                      {activeExco.officeGroup}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Fast Switcher Thumbnails Grid (Hidden on mobile < sm) */}
        <div className="hidden sm:grid sm:grid-cols-9 gap-3 mt-10 max-w-5xl mx-auto">
          {EXCOS.map((exco, idx) => (
            <button
              key={exco.id}
              onClick={() => setCurrentIndex(idx)}
              className={`group relative aspect-square rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "border-[#c1b3ff] ring-2 ring-[#c1b3ff]/40 scale-105"
                  : "border-white/10 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={exco.image}
                alt={exco.name}
                fill
                sizes="100px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-1 left-1 right-1 text-[9px] font-mono text-center truncate text-white bg-black/80 rounded px-1">
                {exco.role.split(" ")[0]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
