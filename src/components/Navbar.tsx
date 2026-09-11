"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Menu, X, ArrowUpRight, Sparkles, Search } from "lucide-react";

const CommandPalette = dynamic(() => import("@/components/CommandPalette"), {
  ssr: false,
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global keyboard shortcut for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Disciplines", href: "#disciplines" },
    { label: "Pillars", href: "#pillars" },
    { label: "Initiatives", href: "#initiatives" },
    { label: "Leadership", href: "#leadership" },
    { label: "Events", href: "#events" },
    { label: "Gala", href: "#gala" },
    { label: "FAQ", href: "#faq" },
    { label: "Community", href: "#community" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#060b19]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Chapter Stamp */}
            <a
              href="#"
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#75b947] rounded-lg p-1"
            >
              <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#75b947]/40 transition-colors">
                <Image
                  src="/logo.svg"
                  alt="NACOS Nile Chapter Logo"
                  width={42}
                  height={22}
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold tracking-tight text-white group-hover:text-[#75b947] transition-colors">
                    NACOS <span className="text-[#3b82f6]">NILE</span>
                  </span>
                  <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-[#75b947]/15 text-[#75b947] border border-[#75b947]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#75b947] animate-pulse" />
                    EST. NILE UNIV
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono tracking-wider">
                  LEARN • BUILD • GROW
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: Command Palette Trigger & Join CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={() => setPaletteOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] transition-colors focus:outline-none"
                title="Search or press Ctrl+K"
                aria-label="Open search command palette"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px] text-slate-400">Search</span>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-white/[0.08] rounded text-slate-300">
                  ⌘K
                </kbd>
              </button>

              <a
                href="#community"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#274193] hover:bg-[#1d3375] border border-white/10 hover:border-[#75b947]/40 shadow-lg shadow-[#274193]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Join Community</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#75b947] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger & Search Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setPaletteOpen(true)}
                className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-300"
                aria-label="Open search"
              >
                <Search className="w-4 h-4" />
              </button>
              <a
                href="#community"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#274193] text-white flex items-center gap-1"
              >
                <span>Join</span>
                <ArrowUpRight className="w-3 h-3 text-[#75b947]" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#75b947]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Global Command Palette Dialog */}
      {paletteOpen && (
        <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#060b19]/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 justify-between animate-fadeIn">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#75b947]">
                {"// Navigation Index"}
              </span>
              <span className="text-xs font-mono text-slate-400">9 Excos • 6 Disciplines</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-semibold text-slate-200 hover:text-[#75b947] py-2 border-b border-white/[0.04] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-slate-500">→</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/[0.08]">
            <a
              href="#community"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#274193] text-white font-semibold text-sm shadow-xl shadow-[#274193]/30 border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-[#75b947]" />
              <span>Join NACOS Nile Community</span>
            </a>
            <p className="text-[11px] text-center text-slate-400 font-mono">
              Nigeria Association of Computing Students • Nile University of Nigeria, Abuja
            </p>
          </div>
        </div>
      )}
    </>
  );
}
