"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#disciplines", label: "Disciplines" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#excos", label: "Executives" },
  { href: "#community", label: "Community" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 border-b border-white/[.06]">
      <div className="mx-auto w-[min(100%-2.5rem,1240px)]">
        <nav className="flex h-[72px] items-center gap-8">
          <Link
            href="#top"
            className="flex flex-none items-center gap-[.7rem] text-ink no-underline"
            aria-label="NACOS Nile home"
          >
            <Image src="/brand/nile-crest.svg" alt="" width={26} height={32} className="h-8 w-auto" />
            <span className="h-[22px] w-px bg-white/20" aria-hidden="true" />
            <Image src="/brand/nacos-seal-mint-96.webp" alt="" width={30} height={30} />
            <span className="text-[.82rem] font-semibold leading-[1.15] tracking-[.02em]">
              NACOS
              <span className="block text-[.62rem] font-medium uppercase tracking-[.16em] text-muted">
                Nile Chapter
              </span>
            </span>
          </Link>

          <ul className="font-mono ml-auto hidden gap-[1.9rem] text-[.72rem] uppercase tracking-[.1em] text-muted md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative inline-block py-[.4rem] text-inherit no-underline transition-colors duration-200 [transition-timing-function:var(--ease)] hover:text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-signal after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#community"
            className="font-mono hidden shrink-0 whitespace-nowrap rounded-[2px] bg-signal px-[1.05rem] py-[.62rem] text-[.72rem] font-semibold uppercase tracking-[.08em] text-[#07240A] no-underline shadow-[0_0_0_0_rgba(117,185,71,.5)] transition-[box-shadow,transform] duration-300 [transition-timing-function:var(--ease)] hover:-translate-y-px hover:shadow-[0_0_0_4px_rgba(117,185,71,.18)] md:inline-block"
          >
            Join community
          </a>

          <button
            type="button"
            className="ml-auto flex items-center justify-center rounded-[2px] border border-white/[.18] p-[.45rem] text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
            </svg>
          </button>
        </nav>
      </div>

      {open && (
        <div id="mobile-menu" className="font-mono border-t border-white/[.06] bg-surface md:hidden">
          <ul className="mx-auto flex w-[min(100%-2.5rem,1240px)] flex-col py-2 text-[.85rem] uppercase tracking-[.08em] text-muted">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-white/[.06] last:border-0">
                <a href={l.href} className="block py-3 text-inherit no-underline" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a href="#community" className="text-signal no-underline" onClick={() => setOpen(false)}>
                Join community →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
