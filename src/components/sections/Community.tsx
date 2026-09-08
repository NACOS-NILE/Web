"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { MagneticElement } from "../animations/MagneticElement";

interface CommunityChannel {
  id: string;
  number: string;
  platform: string;
  handle: string;
  href: string;
  description: string;
  category: string;
  badge: string;
}

const CHANNELS: CommunityChannel[] = [
  {
    id: "discord",
    number: "01",
    platform: "Discord Community",
    handle: "discord.gg/nacosnile",
    href: "https://discord.gg",
    description:
      "Our 24/7 digital campus. Real-time engineering discussions, study sprints, voice lounges, and live code reviews.",
    category: "Primary Virtual Arena",
    badge: "Active Sprints",
  },
  {
    id: "whatsapp",
    number: "02",
    platform: "WhatsApp Cohorts",
    handle: "chat.whatsapp.com/nacosnile",
    href: "https://whatsapp.com",
    description:
      "Departmental cohort channels, immediate academic broadcasts, executive announcements, and quick peer problem-solving.",
    category: "Announcements & Groups",
    badge: "Official Broadcast",
  },
  {
    id: "github",
    number: "03",
    platform: "GitHub Organization",
    handle: "github.com/nacos-nile",
    href: "https://github.com/nacos-nile",
    description:
      "Official open-source repositories, collaborative tools, hackathon projects, and community contributions.",
    category: "Code & Open Source",
    badge: "Repositories",
  },
  {
    id: "telegram",
    number: "04",
    platform: "Telegram Archive",
    handle: "t.me/nacosnile",
    href: "https://telegram.org",
    description:
      "Curated engineering books, academic slides, past question archives, and technical research libraries.",
    category: "Resource Library",
    badge: "Academic Archive",
  },
  {
    id: "linkedin",
    number: "05",
    platform: "LinkedIn Network",
    handle: "linkedin.com/company/nacos-nile",
    href: "https://linkedin.com",
    description:
      "Professional alumni network, career placements, student spotlights, and industry advisory partnerships.",
    category: "Alumni & Industry",
    badge: "Career Hub",
  },
  {
    id: "twitter",
    number: "06",
    platform: "X / Twitter",
    handle: "@nacos_nile",
    href: "https://x.com",
    description:
      "Public dispatches, live event coverage, hackathon demos, and Nile computing student achievements.",
    category: "Public Broadcast",
    badge: "Dispatches",
  },
];

export function Community() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".community-row");
      gsap.fromTo(
        rows,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      id="community"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 md:py-40 border-t border-neutral-900/10 bg-[#F7F7F5] overflow-hidden"
    >
      {/* Top Meta Bar */}
      <Container size="default">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/10 pb-6">
          <SectionLabel number="06" label="Community Network" showLine />
          <div className="flex items-center gap-6 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500">
            <span>6 DEPARTMENTS</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">1 COLLECTIVE</span>
          </div>
        </div>
      </Container>

      {/* Editorial Headline & Overview */}
      <Container size="default" className="pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] text-neutral-950">
              WHERE BUILDERS
              <br />
              <span className="text-neutral-400">CONVERGE &amp; GROW.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 pt-2 lg:pt-4">
            <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-sans">
              NACOS Nile bridges classroom theory with real-world engineering. Join our active communication circles to find hackathon teammates, ask technical questions, access study archives, and stay informed on all department activities.
            </p>

            <div className="flex items-center gap-4 text-neutral-500 font-mono text-[11px] uppercase tracking-[0.16em]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-950 animate-pulse" />
              <span>Direct access across all platforms</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Channels Editorial Directory */}
      <Container size="default" className="pt-16 sm:pt-24">
        <div className="border-t border-neutral-900/10">
          {CHANNELS.map((channel) => (
            <div
              key={channel.id}
              className="community-row group relative border-b border-neutral-900/10 transition-colors duration-400 hover:bg-neutral-950 hover:text-[#F7F7F5]"
            >
              <Link
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN"
                className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-8 sm:py-10 px-2 sm:px-4 gap-6 transition-all duration-300"
              >
                {/* Channel Identity */}
                <div className="flex items-baseline gap-6 sm:gap-10 min-w-[280px]">
                  <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-400 transition-colors duration-300">
                    {channel.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight leading-none text-neutral-950 group-hover:text-[#F7F7F5] transition-colors duration-300">
                      {channel.platform}
                    </h3>
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-neutral-400 group-hover:text-neutral-400 block pt-1.5">
                      {channel.handle}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 max-w-lg leading-relaxed">
                  {channel.description}
                </p>

                {/* Metadata Badge & Action Arrow */}
                <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end pt-2 lg:pt-0">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 border border-neutral-900/15 group-hover:border-white/20 text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">
                    {channel.badge}
                  </span>

                  <MagneticElement strength={0.3}>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900/20 group-hover:border-white group-hover:bg-white group-hover:text-neutral-950 transition-all duration-400 text-sm">
                      ↗
                    </span>
                  </MagneticElement>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
