"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Users,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const navItems = [
    {
      num: "01",
      name: "About & Disciplines",
      href: "#disciplines",
      desc: "Our 6 computing majors, mission, and curriculum blueprints",
      icon: BookOpen,
      tag: "6 Disciplines",
    },
    {
      num: "02",
      name: "On The Ground",
      href: "#on-the-ground",
      desc: "Campus initiatives, student software, CTF range & symposium",
      icon: Sparkles,
      tag: "Field Realizations",
    },
    {
      num: "03",
      name: "Signature Programs",
      href: "#initiatives",
      desc: "Nile Tech Week, Hackathons, bootcamps & tutorial circles",
      icon: Sparkles,
      tag: "Annual Programs",
    },
    {
      num: "04",
      name: "Executive Council",
      href: "#excos",
      desc: "Meet the 9 elected student officers steering the chapter",
      icon: Users,
      tag: "9 Officers",
    },
    {
      num: "05",
      name: "Vault & FAQ",
      href: "#faq",
      desc: "Frequently asked questions, past papers & blueprints",
      icon: HelpCircle,
      tag: "Academic Hub",
    },
    {
      num: "06",
      name: "Community Hub",
      href: "#community",
      desc: "Connect on Discord, WhatsApp, Telegram, GitHub & LinkedIn",
      icon: MessageSquare,
      tag: "Student Network",
    },
  ];

  return (
    <>
      {/* Fixed Architectural Top Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-[#070913]/95 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Official Emblem & Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group cursor-pointer select-none"
          >
            <div className="relative w-11 h-11 rounded-full bg-[#0d1021] border border-white/15 flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#60a5fa] overflow-hidden">
              <Image
                src="/logo.png"
                alt="NACOS Nile Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] md:text-[15px] font-bold tracking-tight text-[#f4f2ee] uppercase group-hover:text-[#60a5fa] transition-colors">
                NACOS Nile
              </span>
              <span className="text-[10px] md:text-[11px] font-mono tracking-widest text-white/50 uppercase">
                Chapter
              </span>
            </div>
          </Link>

          {/* Center: Full Chapter Title */}
          <div className="hidden md:flex items-center pl-6 border-l border-white/15">
            <span className="text-[11px] font-mono tracking-[0.12em] text-white/70 uppercase">
              Nigeria Association of Computing Students // Nile University Chapter
            </span>
          </div>

          {/* Right: Architectural Menu Toggle Button */}
          <div className="flex items-center gap-4">
            <Link
              href="#community"
              className="cut-corner-sm hidden sm:inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#60a5fa] hover:text-[#070913] hover:bg-[#60a5fa] px-4 py-2 border border-[#60a5fa]/40 transition-all"
            >
              <span>Join Hub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open Navigation Menu"
              className="cut-corner-sm group flex items-center gap-3 px-4 py-2 bg-white/[0.04] border border-white/15 hover:border-[#60a5fa]/50 hover:bg-[#60a5fa]/10 transition-all cursor-pointer"
            >
              <span className="text-[12px] font-mono tracking-widest uppercase text-[#f4f2ee] group-hover:text-[#60a5fa] transition-colors">
                Menu
              </span>
              <div className="flex flex-col gap-1.5 w-5 justify-center">
                <span className="w-full h-[1.5px] bg-[#f4f2ee] group-hover:bg-[#60a5fa] transition-all origin-right" />
                <span className="w-3/4 h-[1.5px] bg-[#60a5fa] group-hover:w-full transition-all" />
                <span className="w-full h-[1.5px] bg-[#f4f2ee] group-hover:bg-[#60a5fa] transition-all origin-right" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Zero-Scroll Menu Overlay (Fitted Exactly in 100dvh) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] h-[100dvh] max-h-[100dvh] bg-[#070913]/98 backdrop-blur-2xl flex flex-col justify-between overflow-hidden select-none"
          >
            {/* Compact Overlay Header */}
            <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 py-3.5 sm:py-4 flex items-center justify-between border-b border-white/10 shrink-0">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-[#0d1021] border border-white/20 flex items-center justify-center p-1 overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="NACOS Logo"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] sm:text-[14px] font-bold text-[#f4f2ee] uppercase leading-tight">
                    NACOS Nile
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-[#60a5fa] uppercase">
                    Nile University Chapter
                  </span>
                </div>
              </Link>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Navigation Menu"
                className="cut-corner-sm group flex items-center gap-2.5 px-3.5 py-1.5 bg-white/[0.04] border border-white/10 hover:border-[#60a5fa]/60 hover:bg-[#60a5fa]/10 transition-all cursor-pointer"
              >
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#f4f2ee] group-hover:text-[#60a5fa] transition-colors">
                  Close
                </span>
                <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                  <span className="absolute w-3.5 h-[1.5px] bg-[#f4f2ee] rotate-45 group-hover:bg-[#60a5fa] transition-colors" />
                  <span className="absolute w-3.5 h-[1.5px] bg-[#f4f2ee] -rotate-45 group-hover:bg-[#60a5fa] transition-colors" />
                </div>
              </button>
            </div>

            {/* Menu Body - Responsive Zero-Scroll Core */}
            <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 py-2 sm:py-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center flex-1 min-h-0 overflow-hidden">
              {/* Left Column: 5 Main Nav Items */}
              <div className="lg:col-span-8 flex flex-col justify-center space-y-1.5 sm:space-y-2 md:space-y-3">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline justify-between py-1.5 sm:py-2 md:py-3 border-b border-white/[0.06] hover:border-[#60a5fa]/40 transition-colors"
                    >
                      <div className="flex items-baseline gap-3 sm:gap-6 md:gap-8">
                        <span className="text-[11px] sm:text-[12px] md:text-[13px] font-mono text-[#60a5fa]/70 group-hover:text-[#60a5fa] transition-colors">
                          {item.num}
                        </span>
                        <span className="text-[19px] xs:text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-black tracking-tight text-[#f4f2ee] group-hover:text-[#60a5fa] group-hover:translate-x-2 transition-all duration-200">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline-block text-[10px] md:text-[11px] font-mono uppercase text-white/40 group-hover:text-white/80 transition-colors">
                          {item.tag}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#60a5fa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Direct Portals Tape (Visible on smaller screens in single view) */}
                <div className="lg:hidden pt-3 flex items-center gap-2 flex-wrap">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#60a5fa] shrink-0">
                    Quick Jump:
                  </span>
                  <Link
                    href="#disciplines"
                    onClick={() => setIsOpen(false)}
                    className="text-[10px] font-mono px-2.5 py-1 cut-corner-sm bg-white/5 hover:bg-[#60a5fa] hover:text-[#070913] text-[#f4f2ee] border border-white/10 transition-colors"
                  >
                    6 Disciplines
                  </Link>
                  <Link
                    href="#on-the-ground"
                    onClick={() => setIsOpen(false)}
                    className="text-[10px] font-mono px-2.5 py-1 cut-corner-sm bg-white/5 hover:bg-[#60a5fa] hover:text-[#070913] text-[#f4f2ee] border border-white/10 transition-colors"
                  >
                    On The Ground
                  </Link>
                  <Link
                    href="#community"
                    onClick={() => setIsOpen(false)}
                    className="text-[10px] font-mono px-2.5 py-1 cut-corner-sm bg-[#60a5fa]/15 hover:bg-[#60a5fa] text-[#60a5fa] hover:text-[#070913] border border-[#60a5fa]/30 transition-colors"
                  >
                    Community
                  </Link>
                </div>
              </div>

              {/* Right Column: Chapter Spotlight Card (Desktop only, so mobile never scrolls) */}
              <div className="hidden lg:flex lg:col-span-4 flex-col justify-between bg-white/[0.02] border border-white/10 cut-corner p-6 max-h-[380px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#60a5fa] font-semibold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#60a5fa]" />
                    <span>NACOS Nile Chapter</span>
                  </div>
                  <h3 className="font-rector text-[20px] font-normal text-[#f4f2ee] mb-2 leading-snug">
                    Nigeria Association of Computing Students
                  </h3>
                  <p className="text-[12px] text-white/60 leading-relaxed font-light mb-4">
                    Empowering over 2,500 computing students across Computer Science, Software Engineering, Cybersecurity, IT, IS, and Data Science.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-white/40">
                    Direct Portals
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="#disciplines"
                      onClick={() => setIsOpen(false)}
                      className="text-[11px] font-mono px-3 py-1 cut-corner-sm bg-white/5 hover:bg-[#60a5fa]/20 text-[#f4f2ee] hover:text-[#60a5fa] border border-white/10 transition-colors"
                    >
                      6 Disciplines
                    </Link>
                    <Link
                      href="#on-the-ground"
                      onClick={() => setIsOpen(false)}
                      className="text-[11px] font-mono px-3 py-1 cut-corner-sm bg-white/5 hover:bg-[#60a5fa]/20 text-[#f4f2ee] hover:text-[#60a5fa] border border-white/10 transition-colors"
                    >
                      On The Ground
                    </Link>
                    <Link
                      href="#excos"
                      onClick={() => setIsOpen(false)}
                      className="text-[11px] font-mono px-3 py-1 cut-corner-sm bg-white/5 hover:bg-[#60a5fa]/20 text-[#f4f2ee] hover:text-[#60a5fa] border border-white/10 transition-colors"
                    >
                      Officer Profiles
                    </Link>
                    <Link
                      href="#community"
                      onClick={() => setIsOpen(false)}
                      className="text-[11px] font-mono px-3 py-1 cut-corner-sm bg-[#60a5fa]/10 hover:bg-[#60a5fa]/20 text-[#60a5fa] border border-[#60a5fa]/30 transition-colors"
                    >
                      Join Hub
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Ultra-Compact Overlay Footer */}
            <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 py-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40 shrink-0">
              <span className="truncate">
                Nile University of Nigeria • FCT Abuja
              </span>
              <span className="text-[#60a5fa]/80 font-bold shrink-0 ml-2">
                Learn • Build • Grow
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
