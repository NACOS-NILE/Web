import React from "react";
import ExcoCard, { ExcoCardProps } from "./ExcoCard";

export interface ExcoMember extends ExcoCardProps {}

const EXCO_MEMBERS: ExcoMember[] = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    quote: "Passionate about building active student communities.",
    imageSrc: "/excos-pics/president.jpg",
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    quote: "Advocating for student welfare and academic excellence.",
    imageSrc: "/excos-pics/vp.jpg",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    quote: "Keeping the engines running smoothly.",
    imageSrc: "/excos-pics/sg.jpg",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    quote: "Making the important financial decisions.",
    imageSrc: "/excos-pics/fc.jpg",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    quote: "Applying creativity to communication.",
    imageSrc: "/excos-pics/pro.jpg",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    quote: "Driving technical growth and leading coding workshops for Nile computing students.",
    imageSrc: "/excos-pics/dtd.jpg",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    quote: "Managing the day-to-day operations of NACOS Nile.",
    imageSrc: "/excos-pics/provost.jpg",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    quote: "Prioritizing social activities and events.",
    imageSrc: "/excos-pics/socials.jpg",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    quote: "Your well-being is my priority.",
    imageSrc: "/excos-pics/welfare.jpg",
  },
];

export default function ExcoGrid() {
  return (
    <section id="excos" className="relative py-20 sm:py-28 bg-nacos-dark-alt px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Structured Dot Pattern & Noise Texture (No Soft Blobs) */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nacos-blue/15 border border-nacos-accent/25 text-nacos-accent-light text-xs font-mono font-medium mb-4">
            // 03. executive_council
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-normal text-white mb-6">
            Executive Council Leadership
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Elected student officers representing the NACOS Nile Chapter across the Department of Computer Science for the 2025/2026 academic session at Nile University of Nigeria.
          </p>
        </div>

        {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXCO_MEMBERS.map((member) => (
            <ExcoCard
              key={member.name}
              name={member.name}
              role={member.role}
              quote={member.quote}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
