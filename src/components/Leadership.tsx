"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Shield, ArrowUpRight, Mail } from "lucide-react";
import { EXCO_PROFILES, Executive } from "@/data/nacosData";

export default function Leadership() {
  const [filter, setFilter] = useState<string>("All");
  const [activeModalExco, setActiveModalExco] = useState<Executive | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalExco(null);
      }
    };
    if (activeModalExco) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalExco]);

  const categories = [
    { label: "All Excos (9)", value: "All" },
    { label: "Executive", value: "Executive" },
    { label: "Technical", value: "Technical" },
    { label: "Operations & Welfare", value: "Operations & Welfare" },
  ];

  const president = EXCO_PROFILES.find((e) => e.id === "president") || EXCO_PROFILES[0];
  const otherExcos = EXCO_PROFILES.filter((e) => e.id !== "president");

  const filteredExcos =
    filter === "All"
      ? otherExcos
      : otherExcos.filter((e) => e.category === filter);

  return (
    <section id="leadership" className="py-24 sm:py-32 relative bg-[#060b19] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#75b947] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#75b947]" />
              <span>Chapter Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Executive Council 2026
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal">
              Elected student leaders driving the academic, technical, and community engine of the Nigeria Association of Computing Students at Nile University of Nigeria.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all focus:outline-none ${
                  filter === cat.value
                    ? "bg-[#274193] text-white border border-[#75b947]/50 shadow-md shadow-[#274193]/30"
                    : "bg-white/[0.04] text-slate-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Presidential Showcase + Asymmetrical Council Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Featured Spotlight (Chapter President) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#0b1429] border border-white/[0.1] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#75b947]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 border border-white/[0.08] bg-slate-900">
              <Image
                src={president.photo}
                alt={`${president.name} - ${president.role}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060b19] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#75b947] text-[#060b19] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Shield className="w-3 h-3" />
                  {president.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {president.name}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <blockquote className="text-sm sm:text-base italic text-slate-200 border-l-2 border-[#75b947] pl-3 py-1">
                {president.tagline}
              </blockquote>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Nile University of Nigeria</span>
                <span className="text-[#3b82f6]">Executive Head</span>
              </div>
            </div>
          </div>

          {/* Right Column: 8 Supporting Executive Directors in Asymmetrical Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {filteredExcos.map((exco) => (
              <div
                key={exco.id}
                onClick={() => setActiveModalExco(exco)}
                className="group p-5 rounded-2xl bg-[#0b1429]/70 border border-white/[0.08] hover:border-[#75b947]/40 hover:bg-[#0b1429] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 border border-white/[0.06] bg-slate-900">
                    <Image
                      src={exco.photo}
                      alt={`${exco.name} - ${exco.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060b19]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-7 h-7 rounded-full bg-[#75b947] flex items-center justify-center text-[#060b19]">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono text-[#75b947] font-semibold">
                      {exco.role}
                    </span>
                    {exco.department && (
                      <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-white/[0.04]">
                        {exco.department}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#3b82f6] transition-colors line-clamp-1">
                    {exco.name}
                  </h4>
                </div>

                <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <p className="text-xs italic text-slate-300 line-clamp-1">
                    {exco.tagline}
                  </p>
                  <span className="text-[10px] font-mono text-[#75b947] shrink-0 ml-2">Inspect ↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Modal Detail Inspector */}
        {activeModalExco && (
          <div
            onClick={() => setActiveModalExco(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-md w-full p-6 sm:p-7 rounded-3xl bg-[#0b1429] border border-white/[0.15] shadow-2xl relative"
            >
              <button
                onClick={() => setActiveModalExco(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 text-xs font-mono focus:outline-none"
              >
                ✕ ESC
              </button>

              <div className="relative aspect-square w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-[#75b947]">
                <Image
                  src={activeModalExco.photo}
                  alt={activeModalExco.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>

              <div className="text-center mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#75b947]/15 text-[#75b947] border border-[#75b947]/30 inline-block mb-2">
                  {activeModalExco.role}
                </span>
                <h3 className="text-xl font-bold text-white">{activeModalExco.name}</h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  NACOS Nile Chapter • {activeModalExco.department || "Faculty of Natural and Applied Sciences"}
                </p>
              </div>

              <blockquote className="text-sm italic text-slate-200 bg-white/[0.03] p-4 rounded-xl border border-white/[0.06] text-center mb-6 leading-relaxed">
                &ldquo;{activeModalExco.tagline}&rdquo;
              </blockquote>

              <div className="flex gap-3">
                <a
                  href={`mailto:${activeModalExco.email || "nacos@nileuniversity.edu.ng"}`}
                  className="flex-1 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#75b947]" />
                  <span>Send Memo</span>
                </a>

                <button
                  onClick={() => setActiveModalExco(null)}
                  className="flex-1 py-2.5 rounded-xl bg-[#274193] text-white text-xs font-semibold hover:bg-[#1d3375] transition-colors"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
