"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, MapPin, ExternalLink } from "lucide-react";
import { COMMUNITY_CHANNELS } from "@/data/nacosData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#03060e] border-t border-white/[0.08] text-slate-400 text-xs relative overflow-hidden">
      {/* Visual Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#75b947] to-[#3b82f6]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3.5 mb-4 group">
              <div className="p-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#75b947]/40 transition-colors">
                <Image
                  src="/logo.svg"
                  alt="NACOS Nile Logo"
                  width={40}
                  height={20}
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight">
                  NACOS <span className="text-[#3b82f6]">NILE</span>
                </span>
                <span className="text-[10px] font-mono text-[#75b947]">
                  NILE UNIVERSITY OF NIGERIA
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-300 font-normal leading-relaxed max-w-sm mb-6">
              Nigeria Association of Computing Students, Nile University of Nigeria Chapter. Empowering the next generation of engineers, researchers, and tech founders.
            </p>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono flex items-start gap-2 max-w-sm">
              <MapPin className="w-3.5 h-3.5 text-[#75b947] flex-shrink-0 mt-0.5" />
              <span>
                Plot 681, Cadastral Zone C-OO, Research & Institution Area, Jabi Airport Bypass, Abuja, FCT
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-1">
              {"// Navigation"}
            </span>
            <a href="#about" className="hover:text-white transition-colors">
              About NACOS Nile
            </a>
            <a href="#disciplines" className="hover:text-white transition-colors">
              6 Computing Disciplines
            </a>
            <a href="#pillars" className="hover:text-white transition-colors">
              Learn • Build • Grow Triad
            </a>
            <a href="#initiatives" className="hover:text-white transition-colors">
              Flagship Initiatives
            </a>
            <a href="#leadership" className="hover:text-white transition-colors">
              Executive Council 2026
            </a>
            <a href="#events" className="hover:text-white transition-colors">
              Events & Competitions
            </a>
            <a href="#community" className="hover:text-white transition-colors">
              Community Channels
            </a>
          </div>

          {/* Connect & Social Channels */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-1">
              {"// Community Channels"}
            </span>
            <div className="grid grid-cols-2 gap-2">
              {COMMUNITY_CHANNELS.map((ch) => (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] text-slate-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span className="font-mono text-[11px]">{ch.name}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono">
              <span>Motto:</span>
              <span className="text-[#75b947] font-semibold">LEARN • BUILD • GROW</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© {new Date().getFullYear()} NACOS Nile University Chapter. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              NACOS Nile Website Competition Submission
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-white/[0.04] hover:bg-[#75b947] text-slate-300 hover:text-[#060b19] transition-all focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
