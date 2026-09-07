"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { name: "About", href: "#about" },
  { name: "Disciplines", href: "#disciplines" },
  { name: "Initiatives", href: "#initiatives" },
  { name: "Excos", href: "#excos" },
  { name: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0d1733]/80 px-5 py-3 backdrop-blur-xl sm:px-6">
        
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="NACOS Nile logo"
            width={42}
            height={42}
            className="h-10 w-10"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-wide text-white">
              NACOS NILE
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300">
              Nile University Chapter
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#community"
          className="hidden rounded-xl bg-[#274193] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 md:block"
        >
          Join Community
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-[#0d1733]/95 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#community"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[#274193] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Join Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
