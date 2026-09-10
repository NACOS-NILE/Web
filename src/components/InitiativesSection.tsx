"use client";

import React, { useState } from "react";
import { INITIATIVES, Initiative } from "@/data/initiatives";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  Code2, 
  Users, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ArrowUpRight,
  Award,
  X,
} from "lucide-react";

export default function InitiativesSection() {
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "Trophy":
        return Trophy;
      case "Code2":
        return Code2;
      case "Users":
        return Users;
      case "GraduationCap":
        return GraduationCap;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="initiatives" className="relative py-24 bg-[#070913] border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono text-[#c1b3ff] uppercase tracking-widest block mb-2">
              03 / Signature Programs
            </span>
            <h2 className="font-rector text-3xl sm:text-5xl font-normal text-white uppercase tracking-tight">
              High-Impact Initiatives
            </h2>
          </div>
          <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
            From 72-hour hackathons with ₦1M+ prizes to weekly code labs, our initiatives prepare students for global excellence.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {INITIATIVES.map((item) => {
            const Icon = getIcon(item.iconName);
            const isFlagship = item.status === "Annual Flagship";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedInitiative(item)}
                className={`group relative cut-corner p-4 sm:p-8 lg:p-10 flex flex-col justify-between border hover:border-[#c1b3ff]/50 transition-all duration-300 shadow-xl cursor-pointer ${
                  isFlagship
                    ? "bg-gradient-to-b from-[#c1b3ff]/10 via-[#0d1021] to-[#070913] border-[#c1b3ff]/30"
                    : "bg-white/[0.02] border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 cut-corner-sm bg-[#c1b3ff]/10 text-[#c1b3ff] flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/10 cut-corner-sm text-zinc-300">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#c1b3ff] uppercase tracking-wider mb-1 sm:mb-2">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span className="text-emerald-400">{item.status}</span>
                  </div>

                  <h3 className="font-rector text-xl sm:text-3xl font-normal text-white uppercase tracking-tight mb-2 sm:mb-4 group-hover:text-[#c1b3ff] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description (Hidden on mobile) */}
                  <p className="hidden sm:block text-sm text-zinc-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-8">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-zinc-200">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c1b3ff] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 sm:pt-6 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedInitiative(item);
                    }}
                    className="cut-corner nacos-btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap text-[11px] sm:text-xs font-bold uppercase tracking-wider !py-2 sm:!py-2.5 !px-4 sm:!px-5 cursor-pointer"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>

                  {isFlagship && (
                    <span className="hidden sm:flex text-xs font-mono text-[#c1b3ff] font-bold uppercase items-center gap-1.5 shrink-0">
                      <Award className="w-4 h-4" /> ₦1,000,000+ Pool
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Initiative Detail Modal */}
      <AnimatePresence>
        {selectedInitiative && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0d1021] border border-white/10 cut-corner p-4 sm:p-8 lg:p-10 shadow-2xl max-h-[85dvh] sm:max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedInitiative(null)}
                aria-label="Close Initiative Modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 cut-corner-sm bg-white/5 hover:bg-[#c1b3ff] text-white/70 hover:text-[#070913] transition-colors cursor-pointer z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 pr-10">
                <span className="text-[10px] sm:text-[12px] font-mono font-bold text-[#c1b3ff] px-2 py-0.5 sm:px-2.5 sm:py-1 cut-corner-sm bg-[#c1b3ff]/10 border border-[#c1b3ff]/20">
                  {selectedInitiative.category}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-emerald-400 uppercase">
                  {selectedInitiative.status} • {selectedInitiative.date}
                </span>
              </div>

              <h3 className="font-rector text-[22px] sm:text-[30px] font-normal text-[#f4f2ee] mb-2 sm:mb-4 uppercase pr-8">
                {selectedInitiative.title}
              </h3>

              <p className="text-[13px] sm:text-[15px] font-light text-white/80 leading-relaxed mb-4 sm:mb-6">
                {selectedInitiative.description}
              </p>

              {/* Highlights Breakdown */}
              <div className="p-3.5 sm:p-5 cut-corner-sm bg-white/[0.02] border border-white/5 mb-4 sm:mb-8">
                <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#c1b3ff] mb-3 sm:mb-4 flex items-center gap-2 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Program Key Features & Deliverables</span>
                </div>
                <ul className="space-y-2 sm:space-y-2.5">
                  {selectedInitiative.highlights.map((h, i) => (
                    <li key={i} className="text-[12px] sm:text-[13px] text-white/80 flex items-start gap-2 sm:gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c1b3ff] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3">
                <a
                  href="https://discord.gg/nacos-nile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 cut-corner-sm bg-[#c1b3ff] text-[#070913] font-bold text-[11px] sm:text-[12px] font-mono uppercase hover:bg-white transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-center"
                >
                  <span>Join Official Channel</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </a>

                <button
                  onClick={() => setSelectedInitiative(null)}
                  className="px-4 sm:px-5 py-2.5 cut-corner-sm bg-white/5 hover:bg-white/10 text-white/70 font-mono text-[11px] sm:text-[12px] uppercase transition-colors cursor-pointer whitespace-nowrap text-center"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
