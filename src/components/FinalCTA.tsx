import React from "react";
import { ArrowRight, Sparkles, Terminal, Users, ShieldCheck } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-36 relative bg-[#060b19] overflow-hidden">
      {/* Background Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#274193]/30 via-[#75b947]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#75b947] mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN 500+ NILE COMPUTING INNOVATORS</span>
        </div>

        {/* Massive Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[0.95] mb-6">
          Your Next Idea <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#75b947] via-white to-[#3b82f6]">
            Starts Here.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Learn something new. Build something meaningful. Grow with the community that is architecting the digital future of Nigeria.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <a
            href="#community"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#274193] hover:bg-[#1d3375] border border-white/10 hover:border-[#75b947]/50 shadow-2xl shadow-[#274193]/40 transition-all hover:scale-105 active:scale-95"
          >
            <span>Join NACOS Nile</span>
            <ArrowRight className="w-4 h-4 text-[#75b947]" />
          </a>

          <a
            href="#events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] transition-all"
          >
            <Terminal className="w-4 h-4 text-slate-400" />
            <span>Explore Events</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 pt-8 border-t border-white/[0.06]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#75b947]" />
            100% Student-Led Computing Association
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#3b82f6]" />
            Nile University Faculty of Natural & Applied Sciences
          </span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-400" />
            Zero-Barrier Community Access
          </span>
        </div>
      </div>
    </section>
  );
}
