"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Disciplines", href: "#disciplines" },
  { name: "Initiatives", href: "#initiatives" },
  { name: "Leadership", href: "#leadership" },
  { name: "Community", href: "#community" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060b18]/90 backdrop-blur-md border-b border-blue-900/30 py-3 shadow-xl shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0d1733] border border-blue-500/30 p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-400">
              <Image
                src="/logo.svg"
                alt="NACOS Nile Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-white text-base sm:text-lg">
                  NACOS
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#274193] text-blue-100 border border-blue-400/30">
                  NILE
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide hidden sm:block">
                Nigeria Association of Computing Students
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-blue-900/20"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://portal.nileuniversity.edu.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-300 hover:text-blue-300 transition-colors px-3 py-1.5"
            >
              Nile Portal ↗
            </a>
            <a
              href="#community"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#274193] to-blue-600 hover:from-blue-700 hover:to-blue-500 text-white shadow-lg shadow-blue-900/40 hover:shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Join Community
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-blue-900/30 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1128]/95 backdrop-blur-xl border-b border-blue-900/40 px-5 pt-3 pb-6 transition-all duration-300">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:bg-blue-900/30 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-blue-900/40 flex flex-col gap-3">
              <a
                href="https://portal.nileuniversity.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm font-medium text-slate-300 hover:text-blue-300 py-1"
              >
                Nile Student Portal ↗
              </a>
              <a
                href="#community"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#274193] to-blue-600 text-white shadow-lg shadow-blue-950/60"
              >
                Join Community
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
