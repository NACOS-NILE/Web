"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <footer 
      ref={containerRef}
      className="relative h-[800px] w-full bg-[#050505] text-white overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <motion.div 
        style={{ y, opacity }}
        className="fixed bottom-0 left-0 w-full h-[800px] flex flex-col justify-between p-8 md:p-16 z-0"
      >
        {/* Top Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 mt-12 md:mt-0">
          
          {/* Left info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </div>
              <span className="font-mono text-xs tracking-widest text-white/50 uppercase">
                System Online
              </span>
            </div>
            
            <div>
              <p className="font-mono text-sm text-white/70">ABUJA, NIGERIA</p>
              <p className="font-mono text-sm text-white/40 mt-1">{time || "00:00:00"}</p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-x-20 gap-y-6">
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-xs tracking-widest text-white/40 mb-2">PLATFORMS</h4>
              <MagneticButton><a href="#" className="font-display text-xl md:text-2xl hover:text-blue-400 transition-colors">GitHub</a></MagneticButton>
              <MagneticButton><a href="#" className="font-display text-xl md:text-2xl hover:text-blue-400 transition-colors">Discord</a></MagneticButton>
              <MagneticButton><a href="#" className="font-display text-xl md:text-2xl hover:text-blue-400 transition-colors">X (Twitter)</a></MagneticButton>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-xs tracking-widest text-white/40 mb-2">NAVIGATION</h4>
              <MagneticButton><a href="#about" className="font-display text-xl md:text-2xl hover:text-white transition-colors text-white/70">About</a></MagneticButton>
              <MagneticButton><a href="#disciplines" className="font-display text-xl md:text-2xl hover:text-white transition-colors text-white/70">Disciplines</a></MagneticButton>
              <MagneticButton><a href="#initiatives" className="font-display text-xl md:text-2xl hover:text-white transition-colors text-white/70">Events</a></MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Massive Text & Copyright */}
        <div className="flex flex-col w-full border-t border-white/10 pt-8 mt-12 md:mt-0">
          <div className="flex justify-between items-center mb-8">
            <p className="font-mono text-xs text-white/40 tracking-widest">
              © {new Date().getFullYear()} NACOS NILE
            </p>
            
            <MagneticButton>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 font-mono text-xs text-white/40 hover:text-white tracking-widest transition-colors uppercase"
              >
                Back to Top <ArrowUpRight className="w-4 h-4" />
              </button>
            </MagneticButton>
          </div>

          <h1 className="font-display font-black text-[12vw] leading-[0.8] tracking-tighter text-center text-white/5 uppercase select-none">
            NACOS_NILE
          </h1>
        </div>
      </motion.div>
    </footer>
  );
}
