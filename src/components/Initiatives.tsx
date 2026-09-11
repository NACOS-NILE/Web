import React from "react";
import { ArrowUpRight, Terminal, Award, Users, BookOpen, Sparkles } from "lucide-react";
import { CHAPTER_INITIATIVES } from "@/data/nacosData";

export default function Initiatives() {
  const getInitiativeIcon = (id: string) => {
    switch (id) {
      case "bootcamps":
        return <Terminal className="w-6 h-6 text-[#75b947]" />;
      case "hackathon":
        return <Award className="w-6 h-6 text-[#eab308]" />;
      case "mentorship":
        return <Users className="w-6 h-6 text-[#3b82f6]" />;
      case "tutorials":
        return <BookOpen className="w-6 h-6 text-[#10b981]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#75b947]" />;
    }
  };

  return (
    <section id="initiatives" className="py-24 sm:py-32 relative bg-[#060b19] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#75b947] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#75b947]" />
              <span>Initiatives & Operations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              What We Do Every Day
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Purpose-driven programs designed to accelerate student mastery, celebrate innovation, and foster an unbreakable engineering community across Nile University.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 pb-2">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
            <span>4 Core Programs in Continuous Operation</span>
          </div>
        </div>

        {/* Distinctive Asymmetrical Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHAPTER_INITIATIVES.map((item) => (
            <div
              key={item.id}
              className="group relative p-8 sm:p-10 rounded-3xl bg-[#0b1429]/80 border border-white/[0.08] hover:border-[#75b947]/40 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#75b947]/5 to-transparent rounded-bl-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100" />

              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:bg-white/[0.08] transition-colors">
                      {getInitiativeIcon(item.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#75b947] block font-semibold">
                        PROGRAM {item.number}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center border border-white/[0.06] group-hover:bg-[#75b947] group-hover:border-[#75b947] transition-all">
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#060b19] transition-colors" />
                  </div>
                </div>

                {/* Title and Summary */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#75b947] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.summary}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-8">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#75b947] flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-slate-400">{item.leadRole}</span>
                <span className="px-2.5 py-1 rounded bg-white/[0.04] text-[#3b82f6] border border-white/[0.08]">
                  {item.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
