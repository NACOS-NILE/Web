import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface FooterLink {
  name: string;
  href: string;
}

const QUICK_LINKS: FooterLink[] = [
  { name: "About", href: "#about" },
  { name: "Disciplines", href: "#disciplines" },
  { name: "Events", href: "#events" },
  { name: "Excos", href: "#excos" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
];

const DISCIPLINES: string[] = [
  "Computer Science",
  "Software Engineering",
  "Cyber Security",
  "Information Technology",
  "Information Systems",
  "Data Science",
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-nacos-dark-alt text-gray-400 border-t border-white/10 pt-16 pb-12 overflow-hidden scroll-mt-20">
      {/* Structured Dot Pattern & Organic Noise Texture (No Soft Blobs) */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group w-fit">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/logo.svg"
                  alt="NACOS Nile Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-xl tracking-tight text-white group-hover:text-nacos-accent-light transition-colors">
                NACOS Nile
              </span>
            </Link>

            <p className="text-nacos-accent-light font-medium text-sm">
              Learn &bull; Build &bull; Grow
            </p>

            <p className="text-sm text-gray-400 leading-relaxed font-normal">
              Official chapter of the Nigeria Association of Computing Students at Nile University of Nigeria, fostering computing excellence and technological innovation.
            </p>
          </div>

          {/* Column 2: Address & Campus */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-medium text-sm tracking-wide uppercase">
              Location &amp; Campus
            </h3>
            <div className="text-sm text-gray-400 space-y-2 leading-relaxed font-normal">
              <p className="text-white font-medium">Nile University of Nigeria</p>
              <p>Abuja, FCT, Nigeria</p>
              <p className="pt-2 text-xs text-gray-500 font-normal">
                Faculty of Natural &amp; Applied Sciences &bull; Department of Computer Science
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-medium text-sm tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-normal">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-nacos-accent-light transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-nacos-accent text-xs">&rsaquo;</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Disciplines */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-medium text-sm tracking-wide uppercase">
              Disciplines
            </h3>
            <ul className="space-y-2.5 text-sm font-normal">
              {DISCIPLINES.map((item) => (
                <li key={item} className="text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left font-normal">
            &copy; {new Date().getFullYear()} NACOS Nile. All rights reserved.
          </p>

          <p className="text-center sm:text-right bg-nacos-blue/15 border border-nacos-accent/25 px-3 py-1.5 rounded-full text-nacos-accent-light font-medium">
            Built for the NACOS Nile Website Competition
          </p>
        </div>
      </div>
    </footer>
  );
}
