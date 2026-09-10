"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Events", href: "#events" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-17 w-full max-w-7xl items-center justify-between px-5 sm:h-18 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#274193] focus:ring-offset-2" aria-label="NACOS Nile home">
          <Image
            src="/logo.svg"
            alt="NACOS Nile logo"
            width={44}
            height={44}
            className="h-9 w-9 sm:h-10 sm:w-10"
            priority
          />
          <div className="leading-none">
            <p className="text-sm font-extrabold tracking-[0.08em] text-[#0d1733]">NACOS</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#274193]">Nile Chapter</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#274193] focus:outline-none focus:ring-2 focus:ring-[#274193] focus:ring-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#community"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#274193] px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(39,65,147,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20357c] focus:outline-none focus:ring-2 focus:ring-[#274193]/30"
          >
            Join Community
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-[#aebce2] focus:outline-none focus:ring-2 focus:ring-[#274193] focus:ring-offset-2 lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full rounded-full bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-slate-200/80 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#community"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-[#274193] px-5 text-sm font-semibold text-white"
            >
              Join Community
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
