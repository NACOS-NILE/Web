"use client";

import { useRef, useEffect, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";

import { Label } from "./ui/Label";
import { SectionHeader } from "./ui/SectionHeader";
import { useCursorStore } from "@/store/cursorStore";

const DISCIPLINES = [
  { 
    num: "01", 
    title: "COMPUTER SCIENCE", 
    desc: "Theoretical foundations and algorithmic thinking that power all computing.",
    color: "#3b82f6", // Brand blue
    Icon: () => (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
      </svg>
    )
  },
  { 
    num: "02", 
    title: "SOFTWARE ENGINEERING", 
    desc: "Building robust, scalable systems and practices for the real world.",
    color: "#10b981", // Emerald
    Icon: () => (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    )
  },
  { 
    num: "03", 
    title: "CYBER SECURITY", 
    desc: "Protecting systems, data, and networks from advanced threats.",
    color: "#f59e0b", // Amber
    Icon: () => (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  { 
    num: "04", 
    title: "INFORMATION TECHNOLOGY", 
    desc: "Managing and deploying resilient technology infrastructure.",
    color: "#06b6d4", // Cyan
    Icon: () => (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    )
  },
  { 
    num: "05", 
    title: "INFORMATION SYSTEMS", 
    desc: "Bridging complex business needs and technology implementation.",
    color: "#8b5cf6", // Violet
    Icon: () => (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <circle cx="5" cy="5" r="2"></circle>
        <circle cx="19" cy="5" r="2"></circle>
        <circle cx="5" cy="19" r="2"></circle>
        <circle cx="19" cy="19" r="2"></circle>
        <line x1="6.5" y1="6.5" x2="10.5" y2="10.5"></line>
        <line x1="17.5" y1="6.5" x2="13.5" y2="10.5"></line>
        <line x1="6.5" y1="17.5" x2="10.5" y2="13.5"></line>
        <line x1="17.5" y1="17.5" x2="13.5" y2="13.5"></line>
      </svg>
    )
  },
  { 
    num: "06", 
    title: "DATA SCIENCE", 
    desc: "Extracting insights and building predictive models from data.",
    color: "#ec4899", // Pink
    Icon: () => (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    )
  },
];

const staggerVariants: any = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardContainerVariants: any = {
  hidden: { opacity: 0, x: 150, scale: 0.8, rotateY: 20 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15, 
      delayChildren: 0.2 
    }
  }
};

export default function DisciplinesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const dimensions = useRef({ width: 0, scrollRange: 0 });

  // B3 fix: useLayoutEffect guarantees dimensions are read before the browser paints the scroll-driven layout
  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (trackRef.current) {
        dimensions.current = {
          width: window.innerWidth,
          scrollRange: Math.max(0, trackRef.current.scrollWidth - window.innerWidth)
        };
      }
    };
    
    updateDimensions();
    // Safety recalculation after fonts/layout settle
    const timer = setTimeout(updateDimensions, 500);
    window.addEventListener("resize", updateDimensions);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamically map scroll progress based on the actual measured width of the track
  const x = useTransform(scrollYProgress, (p) => {
    const { width, scrollRange } = dimensions.current;
    if (width === 0) return "100vw"; // Initial SSR fallback

    if (p < 0.1) {
      // Intro: slide in from right (100% viewport width down to 0)
      return `${width * (1 - (p / 0.1))}px`;
    } else if (p < 0.9) {
      // Main track scroll: 0 to negative scroll range
      const progress = (p - 0.1) / 0.8;
      return `${-scrollRange * progress}px`;
    } else {
      // Outro: slide out to the left
      const progress = (p - 0.9) / 0.1;
      return `${-scrollRange - (width * progress)}px`;
    }
  });
  
  // Parallax Tilt for the entire track based on scroll speed
  const progressVelocity = useVelocity(scrollYProgress);
  const tiltRaw = useTransform(progressVelocity, [-0.1, 0, 0.1], [-5, 0, 5]);
  const tilt = useSpring(tiltRaw, { stiffness: 150, damping: 20 });

  const setCursorVariant = useCursorStore(state => state.setVariant);

  return (
    // P4 fix: 400vh sufficient for card count — 1500vh causes massive paint area
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#0a0a0f] z-10">
      {/* A4 fix: perspective on parent so rotateY reads as real 3D */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden" style={{ perspective: "1200px" }}>
        
        {/* Removed Background Network (Now Global) */}

        {/* Horizontal Scroll Track */}
        <motion.div 
          ref={trackRef}
          style={{ x, rotateY: tilt }}
          className="relative z-20 flex gap-4 md:gap-8 items-center h-full px-[5vw] w-max"
          onMouseEnter={() => setCursorVariant('canvas', 'DRAG')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          {/* Section Header (Now acts as the first item in the track so it scrolls away!) */}
          <div className="flex-shrink-0 w-[90vw] md:w-[40vw] flex flex-col justify-center px-4 md:px-10">
            <div className="mb-4 md:mb-6 self-start">
              <Label>DOMAINS_OF_EXPERTISE</Label>
            </div>
            <SectionHeader
              align="left"
              titleLine1="OUR"
              titleLine2="DISCIPLINES"
              subtitle="The six core pillars of computation at NACOS Nile. Dive deep into theory, application, and mastery."
            />
          </div>

          {DISCIPLINES.map((discipline) => (
            <motion.div 
              key={discipline.num}
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="relative w-[85vw] md:w-[38vw] lg:w-[28vw] h-[50vh] md:h-[55vh] flex-shrink-0 bg-[#0f1419]/90 backdrop-blur-md rounded-lg flex flex-col justify-between p-8 md:p-10 transition-all duration-300 hover:bg-[#131920] group border border-white/5 shadow-2xl"
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 w-full h-1 rounded-t-lg opacity-80"
                style={{ backgroundColor: discipline.color, boxShadow: `0 0 15px ${discipline.color}` }}
              />

              {/* Top Section: Icon & Number */}
              <div>
                <motion.div 
                  variants={staggerVariants}
                  className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: discipline.color, filter: `drop-shadow(0 0 15px ${discipline.color}60)` }}
                >
                  <discipline.Icon />
                </motion.div>
                <motion.h3 
                  variants={staggerVariants}
                  className="font-mono text-7xl md:text-[80px] lg:text-[110px] font-black leading-none tracking-tighter"
                  style={{ color: discipline.color, textShadow: `0 0 30px ${discipline.color}40` }}
                >
                  {discipline.num}
                </motion.h3>
              </div>

              {/* Bottom Section: Title & Description */}
              <div className="flex flex-col gap-3 md:gap-4 mt-auto">
                <motion.h4 
                  variants={staggerVariants}
                  className="font-sans text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-[-0.03em] leading-[1.05] uppercase"
                >
                  {discipline.title}
                </motion.h4>
                <motion.p 
                  variants={staggerVariants}
                  className="font-sans text-[#a1a1aa] text-sm md:text-base leading-relaxed"
                >
                  {discipline.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
