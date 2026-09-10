"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { EXCO_MEMBERS } from "@/lib/data";

/**
 * Premium Auto-Playing Coverflow Carousel
 */
export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const N = EXCO_MEMBERS.length;

  // B1 fix: Pause when tab is hidden to save CPU
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Auto-play — paused when tab hidden or user hovers
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % N);
    }, 3000);
    return () => clearInterval(timer);
  }, [N, isPaused]);

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setActiveIndex((prev) => (prev + 1) % N);
    } else if (info.offset.x > swipeThreshold) {
      setActiveIndex((prev) => (prev - 1 + N) % N);
    }
  };

  const tagThemes = [
    "bg-[#0f172a] text-[#94a3b8] border-[#334155]", // Slate
    "bg-[#1e1b4b] text-[#a5b4fc] border-[#3730a3]", // Indigo/Violet
    "bg-[#083344] text-[#67e8f9] border-[#0e7490]", // Cyan
    "bg-[#022c22] text-[#6ee7b7] border-[#047857]", // Emerald
    "bg-[#451a03] text-[#fcd34d] border-[#b45309]", // Amber
  ];

  return (
    // A6 fix: Pause on hover
    <div 
      className="relative w-full py-16 flex justify-center items-center overflow-visible touch-none h-[480px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div 
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        className="relative w-full h-full flex justify-center items-center cursor-grab active:cursor-grabbing"
      >
        {EXCO_MEMBERS.map((member, i) => {
          let offset = i - activeIndex;
          if (offset > N / 2) offset -= N;
          if (offset < -N / 2) offset += N;

          const isVisible = Math.abs(offset) <= 2;
          const isCenter = offset === 0;

          const x = offset * 220;
          const y = Math.abs(offset) * 20;
          const scale = isCenter ? 1 : 1 - Math.abs(offset) * 0.12;
          const rotate = offset * 6;
          const zIndex = 30 - Math.abs(offset);
          const opacity = isCenter ? 1 : isVisible ? 1 - Math.abs(offset) * 0.35 : 0;
          
          const theme = tagThemes[i % tagThemes.length];

          const handleClick = () => {
            if (!isCenter) setActiveIndex(i);
          };

          return (
            <motion.figure
              key={member.id}
              initial={false}
              animate={{ x, y, scale, rotate, zIndex, opacity }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={handleClick}
              className="absolute shrink-0 overflow-hidden bg-[#0a0a0a] border border-white/10 rounded-2xl w-[280px] h-[400px] sm:w-[320px] sm:h-[440px] transform-origin-bottom"
              style={{ 
                pointerEvents: isVisible ? "auto" : "none",
                boxShadow: isCenter 
                  ? "0 30px 60px rgba(0,0,0,0.9), 0 0 40px rgba(59,130,246,0.2)" 
                  : "0 10px 30px rgba(0,0,0,0.7)"
              }}
            >
              {/* ── Role Tag Pill ── */}
              <div className="absolute left-4 top-4 z-20">
                <span className={`px-3 py-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase border rounded-full backdrop-blur-sm shadow-lg ${theme}`}>
                  {member.role}
                </span>
              </div>

              {/* ── Photo Layer ── */}
              {/* P8 fix: explicit loading strategy per card position */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className={`object-cover transition-all duration-700 ${
                  isCenter ? "grayscale-[0.3] opacity-100" : "grayscale opacity-50 blur-[2px]"
                }`}
                sizes="(max-width: 768px) 280px, 320px"
                loading={isCenter ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />
              
              {/* ── Internal Gradient Fade ── */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-700 ${isCenter ? 'opacity-80' : 'opacity-95'}`} />
              
              {/* ── Name Label ── */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-20 text-center">
                <p className={`font-display font-bold text-white uppercase tracking-tight leading-tight transition-all duration-700 ${isCenter ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl text-white/70'}`}>
                  {member.name}
                </p>
                {isCenter && (
                  <p className="mt-2 font-mono text-[10px] text-white/50 tracking-widest uppercase">
                    ID: 0x{member.id.toUpperCase()}
                  </p>
                )}
              </div>

              {/* A6 fix: SVG arc progress ring on center card */}
              {isCenter && (
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 320 440"
                  fill="none"
                >
                  <motion.rect
                    x="2" y="2" width="316" height="436" rx="14"
                    stroke="rgba(59,130,246,0.5)"
                    strokeWidth="2"
                    strokeDasharray="1500"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: 1500 }}
                    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                  />
                </svg>
              )}
            </motion.figure>
          );
        })}
      </motion.div>
    </div>
  );
}
