import React from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#0d1733] px-6 pb-12 pt-16 md:px-12">
      <div className="mx-auto mb-12 grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
        {/* Chapter information */}
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="NACOS Nile Chapter"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>

            <div>
              <p className="font-bold leading-none text-white">NACOS</p>
              <p className="mt-1 text-xs text-white/50">Nile University Chapter</p>
            </div>
          </div>

          <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/60">
            Nigeria Association of Computing Students (NACOS) — Nile University
            Chapter. Empowering computing minds, sparking innovation, and
            fostering technical excellence.
          </p>

          <div className="flex items-start gap-2 text-sm text-white/60">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#60a5fa]" />
            <span>
              Nile University of Nigeria, Plot 681, Cadastral Zone C-OO,
              Research &amp; Institution Area, Jabi, Abuja, FCT.
            </span>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>

          <ul className="space-y-2.5 text-sm text-white/55">
            <li>
              <a href="#about" className="transition-colors hover:text-[#60a5fa]">
                About Us
              </a>
            </li>
            <li>
              <a href="#disciplines" className="transition-colors hover:text-[#60a5fa]">
                Disciplines
              </a>
            </li>
            <li>
              <a href="#events" className="transition-colors hover:text-[#60a5fa]">
                Events &amp; Programs
              </a>
            </li>
            <li>
              <a href="#excos" className="transition-colors hover:text-[#60a5fa]">
                Executive Council
              </a>
            </li>
            <li>
              <a href="#community" className="transition-colors hover:text-[#60a5fa]">
                Community Channels
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Community
          </h4>

          <p className="mb-4 text-xs leading-relaxed text-white/45">
            An official chapter under the Department of Computer Science &amp;
            Information Technology, Nile University of Nigeria.
          </p>

          <a
            href="#community"
            className="inline-flex items-center gap-1 text-xs font-medium text-[#60a5fa] transition-colors hover:text-white"
          >
            Join the community
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} NACOS Nile University Chapter. All rights reserved.</p>

        {/* <p className="flex items-center gap-1">
          Designed &amp; Built with
          <span className="text-[#60a5fa]">⚡</span>
          by NACOS Nile Dev Team
        </p> */}
      </div>
    </footer>
  );
}