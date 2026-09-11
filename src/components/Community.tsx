"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

interface CommunityPlatform {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
}

const PLATFORMS: CommunityPlatform[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    href: "https://wa.me/2348135575887",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/nacosnileuni?stkn=eHRmZ3FyNWhzdmd1",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "tiktok",
    name: "TikTok",
    href: "https://www.tiktok.com/@nacosnileuni?_r=1&_t=ZS-99cZbwa9m7g",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.36 1.54-1.39 2.54-.05 1.17.55 2.33 1.5 3.01.94.67 2.21.82 3.3.4 1.11-.41 1.94-1.43 2.15-2.58.07-.46.06-.93.06-1.39.01-4.66 0-9.32.01-13.98z"/>
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/posts/?feedView=all",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "email",
    name: "Email Us",
    href: "mailto:nacosnile@gmail.com",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: "discord",
    name: "Discord",
    href: "https://discord.gg",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="relative py-16 sm:py-24 bg-nacos-dark px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
            Connect With NACOS Nile
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Join our official student community channels for announcements, code collaboration, and chapter updates.
          </p>
        </ScrollReveal>

        {/* 6 Social Channels Row with Drawer Reveal Hover Animation */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {PLATFORMS.map((platform) => (
            <a
              key={platform.id}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-nacos-accent/20 hover:border-nacos-accent/50 transition-all duration-300 ease-out flex flex-col items-center justify-center overflow-hidden p-3"
              aria-label={`Join NACOS Nile on ${platform.name}`}
            >
              {/* Outline Icon - Scales down and lifts up on hover */}
              <div className="transform transition-all duration-300 ease-out scale-100 translate-y-0 group-hover:scale-75 group-hover:-translate-y-2.5 text-gray-300 group-hover:text-nacos-accent-light flex items-center justify-center">
                {platform.icon}
              </div>

              {/* Platform Name Drawer - Slides up from below on hover */}
              <span className="absolute bottom-2 text-[11px] sm:text-xs font-medium text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none text-center px-1">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
