"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { EDITORIAL_IMAGES } from "@/lib/images";

interface CommunityChannel {
  id: string;
  platform: string;
  handle: string;
  href: string;
  description: string;
}

const CHANNELS: CommunityChannel[] = [
  {
    id: "discord",
    platform: "Discord Community",
    handle: "discord.gg/nacosnile",
    href: "https://discord.gg",
    description:
      "Our 24/7 digital campus for engineering discussions, study sprints, voice lounges, and collaborative peer code reviews.",
  },
  {
    id: "whatsapp",
    platform: "WhatsApp Cohorts",
    handle: "chat.whatsapp.com/nacosnile",
    href: "https://whatsapp.com",
    description:
      "Departmental cohort channels, immediate academic broadcasts, executive announcements, and peer support.",
  },
  {
    id: "github",
    platform: "GitHub Organization",
    handle: "github.com/nacos-nile",
    href: "https://github.com/nacos-nile",
    description:
      "Official open-source repositories, collaborative tools, hackathon projects, and student contributions.",
  },
  {
    id: "telegram",
    platform: "Telegram Archive",
    handle: "t.me/nacosnile",
    href: "https://telegram.org",
    description:
      "Curated engineering books, lecture slides, past examinations, and technical research libraries.",
  },
  {
    id: "linkedin",
    platform: "LinkedIn Network",
    handle: "linkedin.com/company/nacos-nile",
    href: "https://linkedin.com",
    description:
      "Professional alumni network, career placements, student spotlights, and industry advisory partnerships.",
  },
  {
    id: "twitter",
    platform: "X / Twitter",
    handle: "@nacos_nile",
    href: "https://x.com",
    description:
      "Public dispatches, live event coverage, hackathon demos, and Nile computing student achievements.",
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
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
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
      className="relative w-full py-24 sm:py-32 md:py-40 bg-[#111111] text-[#F7F7F5] border-t border-white/10 overflow-hidden"
    >
      {/* Editorial Headline & Overview with Hero Image Visual - No Section Labels */}
      <Container size="default" className="pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] text-white py-1">
              JOIN THE
              <br />
              <span className="text-[#3b82f6]">COMMUNITY.</span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-neutral-300 font-sans max-w-lg">
              NACOS Nile connects students across all six computing concentrations. Find hackathon teammates, share code, access shared resources, and grow alongside fellow builders.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-2xl">
              <Image
                src={EDITORIAL_IMAGES.community}
                alt="NACOS Nile student computing community meetup"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-center grayscale contrast-110 brightness-95 hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>

      {/* Channels Directory */}
      <Container size="default" className="pt-16 sm:pt-20">
        <div className="border-t border-white/10">
          {CHANNELS.map((channel) => (
            <div
              key={channel.id}
              className="community-row group relative border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <Link
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN"
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-7 sm:py-8 px-2 sm:px-4 gap-4 sm:gap-6 transition-all duration-300"
              >
                {/* Channel Identity */}
                <div className="min-w-[260px]">
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight leading-none text-white group-hover:text-white transition-colors duration-300">
                    {channel.platform}
                  </h3>
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-neutral-400 group-hover:text-[#60a5fa] block pt-1.5 transition-colors">
                    {channel.handle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 max-w-lg leading-relaxed font-sans">
                  {channel.description}
                </p>

                {/* Action Arrow */}
                <div className="shrink-0 pt-2 sm:pt-0">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-neutral-300 group-hover:border-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300 text-sm">
                    ↗
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
