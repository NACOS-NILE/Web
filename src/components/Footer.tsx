"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Discover",
      links: [
        { label: "Computing Disciplines", href: "#disciplines" },
        { label: "On The Ground", href: "#on-the-ground" },
        { label: "Signature Initiatives", href: "#initiatives" },
        { label: "Executive Council", href: "#excos" },
        { label: "Student Community", href: "#community" },
      ],
    },
    {
      title: "Chapter",
      links: [
        { label: "About NACOS Nile", href: "#disciplines" },
        { label: "Nile Tech Week", href: "#initiatives" },
        { label: "Student Code of Conduct", href: "#faq" },
        { label: "Department Portal", href: "https://nileuniversity.edu.ng", external: true },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Academic Vault", href: "#faq" },
        { label: "Course Blueprints", href: "#disciplines" },
        { label: "Tutorial Circles", href: "#initiatives" },
        { label: "Frequently Asked Questions", href: "#faq" },
      ],
    },
    {
      title: "Social & Hub",
      links: [
        { label: "Discord Community", href: "https://discord.gg/nacos-nile", external: true },
        { label: "WhatsApp Student Group", href: "https://chat.whatsapp.com/invite/nacos-nile", external: true },
        { label: "GitHub Organization", href: "https://github.com/NACOS-NILE", external: true },
        { label: "LinkedIn Chapter", href: "https://www.linkedin.com/company/nacos-nile", external: true },
        { label: "Twitter / X", href: "https://x.com/NACOSNile", external: true },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#05070e] text-[#f4f2ee] select-none pt-20 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Multi-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 group mb-4">
                <div className="w-10 h-10 rounded-full bg-[#0d1021] border border-white/20 flex items-center justify-center p-1 group-hover:border-[#60a5fa] transition-colors overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="NACOS Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-black uppercase tracking-tight text-[#f4f2ee]">
                    NACOS Nile
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#60a5fa] uppercase">
                    Learn • Build • Grow
                  </span>
                </div>
              </Link>
              <p className="text-[13px] font-light text-white/60 leading-relaxed max-w-xs mb-6">
                The premier collegiate computing society uniting Computer Science, Software Engineering, Cyber Security, IT, IS, and Data Science students at Nile University of Nigeria.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-white/70 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#10b981]" />
              <span>Session 2025/2026 Active</span>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#60a5fa] font-bold mb-5">
                {section.title}
              </div>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1.5 text-[14px] font-light text-white/70 hover:text-white transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                      {link.external && (
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Massive Full-Bleed Logo & Typography Banner */}
        <div className="py-16 border-b border-white/10 flex flex-col items-center justify-center text-center">
          <Link
            href="/"
            className="group block w-full hover:opacity-90 transition-opacity"
          >
            <div className="font-rector text-[12vw] sm:text-[13vw] md:text-[14vw] font-normal tracking-[-0.04em] uppercase leading-none text-[#f4f2ee] group-hover:text-[#60a5fa] transition-all duration-500 select-none">
              NACOS NILE
            </div>
          </Link>
        </div>

        {/* Statutory Chapter Notices & Nile University Address */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[12px] font-mono text-white/40 leading-relaxed">
          <div className="space-y-1">
            <p>• Official Student Chapter of Nigeria Computer Society (NCS) &amp; NACOS National.</p>
            <p>• Department of Computer Science &amp; Information Technology, Nile University of Nigeria.</p>
            <p>• Plot 681, Cadastral Zone C-OO, Research &amp; Institution Area, Jabi, Abuja, FCT, Nigeria.</p>
          </div>

          <div className="flex flex-col md:items-end gap-1">
            <div className="text-white/60">
              © {new Date().getFullYear()} NACOS Nile Chapter. All rights reserved.
            </div>
            <div className="text-[11px] text-[#60a5fa]/80">
              Built for Creative Engineering &amp; Student Excellence.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
