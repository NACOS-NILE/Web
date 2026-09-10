"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Terminal, Users, Cpu, ShieldAlert } from "lucide-react";
import { Label } from "./ui/Label";
import { SectionHeader } from "./ui/SectionHeader";
import { useCursorStore } from "@/store/cursorStore";

const INITIATIVES = [
  {
    id: "osl",
    title: "Open Source Lab",
    desc: "Collaborative development on community-driven projects and campus infrastructure.",
    icon: <Code2 className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-2 bg-[#0d1117]",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
  },
  {
    id: "hacknile",
    title: "HackNile",
    desc: "Annual 48-hour hackathon. Build, break, and scale your ideas.",
    icon: <Terminal className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-2 bg-[#120a17]",
    accent: "text-purple-400",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
  },
  {
    id: "workshops",
    title: "Masterclasses",
    desc: "Deep dives into Web3, AI, and System Design.",
    icon: <Cpu className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-[#0a1210]",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
  },
  {
    id: "cyber",
    title: "CyberSec CTF",
    desc: "Capture the flag challenges and security training.",
    icon: <ShieldAlert className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-[#170a0a]",
    accent: "text-red-400",
    border: "border-red-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]",
  },
  {
    id: "mentorship",
    title: "Peer Mentorship",
    desc: "Connecting freshmen with senior engineers.",
    icon: <Users className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-[#17140a]",
    accent: "text-yellow-400",
    border: "border-yellow-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]",
  },
];

export default function InitiativesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setCursorVariant = useCursorStore(state => state.setVariant);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0a0a0f] py-32 px-6 flex flex-col items-center z-10"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
          >
            <Label showDot={true}>PROJECTS_&_PROGRAMS</Label>
          </motion.div>
          <SectionHeader 
            titleLine1="CORE" 
            titleLine2="INITIATIVES" 
            className="mt-6"
          />
        </div>

        {/* Bento Grid */}
        <motion.div 
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-4 w-full"
        >
          {INITIATIVES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
              className={`group relative rounded-3xl border ${item.border} p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${item.className} ${item.glow} cursor-none`}
            >
              {/* Noise overlay */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/noise.png')]" />

              {/* Hover Radial Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white/20 to-transparent`} />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-2xl bg-black/50 border ${item.border} ${item.accent} backdrop-blur-md`}>
                    {item.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs md:text-sm text-white/50 leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Animated Border Bottom */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
