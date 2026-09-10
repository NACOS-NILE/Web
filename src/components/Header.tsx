"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#091024]/85 border-b border-white/10 backdrop-blur-lg">
      <nav className="max-w-[1180px] w-[calc(100%-40px)] mx-auto min-h-[82px] flex items-center justify-between">
        <Link href="#top" className="inline-flex items-center gap-3 text-white">
          <Image
            src="/logo.svg"
            alt="NACOS Nile logo"
            width={70}
            height={70}
            className="w-[70px] h-[70px] object-contain"
            priority
          />
          <span className="grid leading-none">
            <strong className="font-bold text-[1.03rem] tracking-wider font-sans">NACOS</strong>
            <span className="mt-1 text-[0.55rem] tracking-[0.2em] opacity-70">NILE CHAPTER</span>
          </span>
        </Link>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-11 h-11 p-2 border-0 bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="h-0.5 w-full bg-white rounded-sm"></span>
          <span className="h-0.5 w-full bg-white rounded-sm"></span>
          <span className="h-0.5 w-full bg-white rounded-sm"></span>
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-[82px] md:top-0 left-0 right-0 bg-[#070e1f] md:bg-transparent p-6 md:p-0 items-start md:items-center gap-6 text-white/80 text-sm`}
        >
          <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="#disciplines" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">
            Disciplines
          </Link>
          <Link href="#programs" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">
            Programs
          </Link>
          <Link href="#excos" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">
            Excos
          </Link>
          <Link href="#community" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">
            Community
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">
            Contact
          </Link>
          
          <Link
            href="#community"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-white bg-[#274193] border border-white/10 shadow-[0_10px_28px_rgba(39,65,147,0.35)] hover:-translate-y-0.5 hover:bg-[#3150ac] transition-all"
          >
            Join Community <span>↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}