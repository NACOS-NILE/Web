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
    id: "instagram",
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    href: "#",
    icon: (
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="relative py-12 sm:py-16 bg-nacos-dark px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Minimal Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-medium tracking-wide text-white/90">
            Connect With NACOS Nile
          </h2>
        </ScrollReveal>

        {/* Compact Horizontal Row of ~90x90px Icon-Only Cards with Drawer Reveal Hover */}
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


