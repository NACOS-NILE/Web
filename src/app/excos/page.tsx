"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

interface ExcoMemberData {
  name: string;
  role: string;
  category: "presidency" | "directorate";
  quote: string;
  imageSrc: string;
  imageStyle?: React.CSSProperties;
  linkedinUrl?: string;
}

const ALL_EXCO_MEMBERS: ExcoMemberData[] = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    category: "presidency",
    quote: "Passionate about building active student communities.",
    imageSrc: "/excos-pics/president.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 20%" },
    linkedinUrl: "https://www.linkedin.com/in/zikora-nwafor-/",
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    category: "presidency",
    quote: "Advocating for student welfare and academic excellence.",
    imageSrc: "/excos-pics/vp.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 15%" },
    linkedinUrl: "https://www.linkedin.com/in/abdullah-ali-ahmad-8278082a0/",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    category: "presidency",
    quote: "Keeping the engines running smoothly.",
    imageSrc: "/excos-pics/sg.jpg",
    imageStyle: {
      objectFit: "cover",
      objectPosition: "38% center",
      transform: "scale(1.15)",
    },
    linkedinUrl: "https://www.linkedin.com/in/sheila-jato-a83991352/",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    category: "directorate",
    quote: "Making the important financial decisions.",
    imageSrc: "/excos-pics/fc.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 25%" },
    linkedinUrl: "https://www.linkedin.com/in/amira-ibrahim-jibril-4a7326341/",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    category: "directorate",
    quote: "Applying creativity to communication.",
    imageSrc: "/excos-pics/pro.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 15%" },
    linkedinUrl: "https://www.linkedin.com/in/elvis-eshiebor-028422239/",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    category: "directorate",
    quote: "Driving technical growth and leading coding workshops for Nile computing students.",
    imageSrc: "/excos-pics/dtd.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 15%" },
    linkedinUrl: "https://www.linkedin.com/in/kamsi-ivoke/",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    category: "directorate",
    quote: "Managing the day-to-day operations of NACOS Nile.",
    imageSrc: "/excos-pics/provost.jpg",
    imageStyle: {
      objectFit: "cover",
      transform: "rotate(90deg) scale(1.35)",
    },
    linkedinUrl: "https://www.linkedin.com/in/zubaida-abdulazeez-king-257a2b31b/",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    category: "directorate",
    quote: "Prioritizing social activities and events.",
    imageSrc: "/excos-pics/socials.jpg",
    imageStyle: {
      objectFit: "cover",
      transform: "rotate(-90deg) scale(1.35)",
    },
    linkedinUrl: "https://www.linkedin.com/in/ahmed-saidat-17455030b/",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    category: "directorate",
    quote: "Your well-being is my priority.",
    imageSrc: "/excos-pics/welfare.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 20%" },
    linkedinUrl: "https://www.linkedin.com/in/danielle-ekunwe-726325335/",
  },
];

function ExcoDirectoryCard({ member }: { member: ExcoMemberData }) {
  return (
    <div className="group relative h-full p-4.5 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-nacos-accent/40 transition-all duration-200 flex flex-col justify-between shadow-md">
      <div className="flex items-start gap-3.5 sm:gap-4">
        {/* Photo Avatar Box */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-white/15 bg-white/5 shadow-inner">
          <Image
            src={member.imageSrc}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 64px, 80px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            style={member.imageStyle}
          />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-sm sm:text-base font-semibold text-white tracking-tight truncate group-hover:text-nacos-accent-light transition-colors"
            title={member.name}
          >
            {member.name}
          </h3>
          <p className="text-xs font-medium text-nacos-accent-light mt-0.5 truncate">
            {member.role}
          </p>
          <p className="text-xs text-gray-300 italic line-clamp-2 mt-1.5 leading-relaxed">
            &ldquo;{member.quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Uniform Footer Alignment */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] font-medium text-gray-400">
          {member.category === "presidency" ? "Presidency Officer" : "Executive Directorate"}
        </span>
        {member.linkedinUrl ? (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Connect with ${member.name} on LinkedIn`}
            aria-label={`Connect with ${member.name} on LinkedIn`}
            className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white transition-all duration-200 hover:scale-105 shadow-xs shrink-0"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
        ) : (
          <div className="w-7 h-7" />
        )}
      </div>
    </div>
  );
}

export default function ExcosPage() {
  const presidencyMembers = ALL_EXCO_MEMBERS.filter((m) => m.category === "presidency");
  const directorateMembers = ALL_EXCO_MEMBERS.filter((m) => m.category === "directorate");

  return (
    <main className="min-h-screen bg-nacos-dark text-white selection:bg-nacos-accent selection:text-white">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-28 sm:pt-36 pb-10 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none aria-hidden:true">
          <div className="absolute inset-0 bg-dot-pattern opacity-30" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <ScrollReveal>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Executive Council
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Elected student leadership of NACOS Nile Chapter (2025/2026 session).
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors"
            >
              <span>&larr; Back to Home</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Exco Directory Body */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
        {/* Section 1: The Presidency */}
        <div>
          <ScrollReveal>
            <div className="mb-5 pb-2 border-b border-white/10">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white font-display">
                The Presidency
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {presidencyMembers.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 80} className="h-full">
                <ExcoDirectoryCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Section 2: The Directorate */}
        <div>
          <ScrollReveal>
            <div className="mb-5 pb-2 border-b border-white/10">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white font-display">
                The Directorate
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {directorateMembers.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 80} className="h-full">
                <ExcoDirectoryCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

