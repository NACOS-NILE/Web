"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Programs", href: "#programs" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-nacos flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group" aria-label="NACOS Nile Home">
          <Image
            src="/logo.svg"
            alt="NACOS Nile Logo"
            width={36}
            height={36}
            className="w-9 h-9"
            priority
          />
          <span
            className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-nacos-900" : "text-white"
            }`}
          >
            NACOS<span className="text-nacos-500 ml-0.5">Nile</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-nacos-500 ${
                scrolled ? "text-gray-700" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#community" className="btn-primary text-xs px-5 py-2.5">
            Join Community
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-sm transition-colors ${
            scrolled ? "text-nacos-900" : "text-white"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-nacos-900 z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/90 text-2xl font-semibold py-3 border-b border-white/10 transition-colors hover:text-nacos-400"
                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-8">
            <a
              href="#community"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-center"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}