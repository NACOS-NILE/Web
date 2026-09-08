"use client";

import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { AnimatedLink } from "../ui/AnimatedLink";
import { MagneticElement } from "../animations/MagneticElement";

interface FooterNavLink {
  number: string;
  label: string;
  href: string;
}

const NAV_LINKS: FooterNavLink[] = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Disciplines", href: "#disciplines" },
  { number: "03", label: "Programs", href: "#programs" },
  { number: "04", label: "Events", href: "#events" },
  { number: "05", label: "Excos", href: "#excos" },
  { number: "06", label: "Community", href: "#community" },
];

const COMMUNITY_LINKS = [
  { label: "Discord", href: "https://discord.gg" },
  { label: "WhatsApp", href: "https://whatsapp.com" },
  { label: "Telegram", href: "https://telegram.org" },
  { label: "GitHub", href: "https://github.com/nacos-nile" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full bg-[#050505] text-[#F7F7F5] border-t border-white/10 pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      <Container size="default">
        {/* Primary Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-8 pb-16 sm:pb-24 border-b border-white/10">
          {/* LEFT / LARGE AREA: NACOS NILE Wordmark & Charter */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500 block mb-3">
                CHAPTER PUBLICATION // CLOSING FRAME
              </span>
              <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.82] text-white">
                NACOS
                <br />
                NILE<span className="text-neutral-500">.</span>
              </h2>
            </div>

            <div className="space-y-1.5 pt-2 max-w-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-300 font-medium">
                Nigeria Association of Computing Students
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                Nile University of Nigeria • Chapter 2026
              </p>
            </div>

            {/* Compact Secondary CTA */}
            <div className="pt-4">
              <MagneticElement strength={0.22}>
                <Link
                  href="#community"
                  data-cursor="OPEN"
                  className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-5 py-2.5 rounded-[2px] font-mono text-[11px] uppercase tracking-[0.2em] text-[#F7F7F5] transition-all duration-400 hover:border-white hover:bg-white hover:text-black focus-visible:outline-white"
                >
                  <span>Join NACOS</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </MagneticElement>
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500 pb-2 border-b border-white/10">
              Index / Navigation
            </h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2.5 font-mono text-xs uppercase tracking-[0.16em]">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="flex items-center gap-3">
                    <span className="text-neutral-600 text-[10px]">
                      {link.number}
                    </span>
                    <AnimatedLink
                      href={link.href}
                      cursorLabel="OPEN"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </AnimatedLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* RIGHT-CENTER: Community & Social Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500 pb-2 border-b border-white/10">
              Network / Channels
            </h3>
            <ul className="space-y-2.5 font-mono text-xs uppercase tracking-[0.16em]">
              {COMMUNITY_LINKS.map((social) => (
                <li key={social.label}>
                  <AnimatedLink
                    href={social.href}
                    external
                    arrow
                    cursorLabel="OPEN"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {social.label}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Location & Secretariat */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500 pb-2 border-b border-white/10">
              Chapter Location
            </h3>
            <address className="not-italic space-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400 leading-relaxed">
              <div className="text-neutral-200 font-medium">NACOS Nile Chapter</div>
              <div>Nile University of Nigeria</div>
              <div>Plot 681, Cadastral Zone C-OO</div>
              <div>Research &amp; Institution Area</div>
              <div className="text-neutral-300">Abuja, FCT, Nigeria</div>
            </address>

            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                data-cursor="OPEN"
                aria-label="Scroll back to top of page"
                className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500 hover:text-white transition-colors"
              >
                <span>BACK TO TOP</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:-translate-y-1"
                >
                  ↑
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM: Restrained Micro Metadata & Creator Credit */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© 2026 NACOS NILE</span>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <span>NILE UNIVERSITY OF NIGERIA</span>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <span>COMPUTING COMMUNITY</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <span>WEBSITE BY NACOS NILE BUILDERS</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
