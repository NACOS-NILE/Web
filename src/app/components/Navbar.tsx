"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main navigation"
          className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d1733]/90 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5"
        >
          {/* Logo and Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#60a5fa]"
            aria-label="NACOS Nile home"
            onClick={closeMenu}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5">
              <Image
                src="/logo.svg"
                alt="NACOS Nile logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <div className="hidden leading-tight sm:block">
              <span className="block text-sm font-bold tracking-wide text-white">
                NACOS NILE
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-blue-300">
                Nile University Chapter
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#community"
              className="inline-flex items-center gap-2 rounded-xl bg-[#274193] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-all hover:bg-[#3152b3] hover:shadow-blue-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] active:scale-[0.98]"
            >
              Join Community
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.5 10h11M11 5.5l4.5 4.5-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] lg:hidden"
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="relative flex h-5 w-5 flex-col justify-center gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          {/* Mobile Navigation */}
          <div
            id="mobile-navigation"
            className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#0d1733]/95 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 lg:hidden ${
              isMenuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#community"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center rounded-xl bg-[#274193] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3152b3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa]"
              >
                Join Community
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}