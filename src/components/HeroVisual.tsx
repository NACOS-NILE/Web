"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Terminal, Trophy, Users } from "lucide-react";
import { BrandMark } from "./BrandMark";

function useFloat(distance: number, duration: number, delay = 0) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return {};
  return {
    animate: { y: [0, -distance, 0] },
    transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
  };
}

export function HeroVisual() {
  const float1 = useFloat(14, 6, 0);
  const float2 = useFloat(10, 5, 0.4);
  const float3 = useFloat(12, 7, 0.2);
  const float4 = useFloat(9, 5.5, 0.6);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* connective network lines */}
      <svg
        className="absolute inset-0 h-full w-full text-nacos-accent-light/30"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <path d="M60 90 L200 200 L340 120" stroke="currentColor" strokeWidth="1.5" />
        <path d="M70 320 L200 200 L330 300" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="60" cy="90" r="4" fill="currentColor" />
        <circle cx="340" cy="120" r="4" fill="currentColor" />
        <circle cx="70" cy="320" r="4" fill="currentColor" />
        <circle cx="330" cy="300" r="4" fill="currentColor" />
        <circle cx="200" cy="200" r="5" fill="currentColor" />
      </svg>

      {/* central floating logo badge */}
      <motion.div
        {...float1}
        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/15 bg-white/10 px-7 py-6 shadow-2xl shadow-nacos-dark/40 backdrop-blur-md sm:px-8 sm:py-7"
      >
        <BrandMark size="lg" tone="dark" nileVariant="icon" />
      </motion.div>

      {/* discipline chip */}
      <motion.div
        {...float2}
        className="absolute top-2 left-0 flex items-center gap-2 rounded-2xl border border-white/15 bg-nacos-dark/80 px-4 py-3 shadow-lg shadow-nacos-dark/30 backdrop-blur-md sm:top-4 sm:-left-4"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nacos-accent/20 text-nacos-accent-light">
          <Code2 className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-white">6 Disciplines</p>
          <p className="text-[11px] text-white/50">One community</p>
        </div>
      </motion.div>

      {/* hackathon chip */}
      <motion.div
        {...float3}
        className="absolute right-0 bottom-6 flex items-center gap-2 rounded-2xl border border-white/15 bg-nacos-dark/80 px-4 py-3 shadow-lg shadow-nacos-dark/30 backdrop-blur-md sm:-right-4 sm:bottom-10"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nacos-accent/20 text-nacos-accent-light">
          <Trophy className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-white">Hackathons</p>
          <p className="text-[11px] text-white/50">Build & compete</p>
        </div>
      </motion.div>

      {/* mentorship chip */}
      <motion.div
        {...float4}
        className="absolute bottom-0 left-2 flex items-center gap-2 rounded-2xl border border-white/15 bg-nacos-dark/80 px-4 py-3 shadow-lg shadow-nacos-dark/30 backdrop-blur-md sm:-left-2 sm:bottom-2"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nacos-accent/20 text-nacos-accent-light">
          <Users className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-white">Mentorship</p>
          <p className="text-[11px] text-white/50">& career talks</p>
        </div>
      </motion.div>

      {/* workshop chip */}
      <motion.div
        {...float2}
        className="absolute top-8 right-0 flex items-center gap-2 rounded-2xl border border-white/15 bg-nacos-dark/80 px-4 py-3 shadow-lg shadow-nacos-dark/30 backdrop-blur-md sm:top-12 sm:-right-2"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nacos-accent/20 text-nacos-accent-light">
          <Terminal className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-white">Bootcamps</p>
          <p className="text-[11px] text-white/50">Hands-on skills</p>
        </div>
      </motion.div>
    </div>
  );
}
