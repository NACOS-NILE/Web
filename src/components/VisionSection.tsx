"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { IsoChip, IsoServer, IsoTerminal, IsoNode } from "@/components/IsoShapes";
import { Label } from "./ui/Label";
import { SectionHeader } from "./ui/SectionHeader";

export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 900vh scroll container for a long, leisurely scrollytelling experience
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Phase 1: Header (0% - 15%) ──
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [20, 0]);

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.15], [40, 0]);

  // ── Phase 2: Envelope Opening (15% - 40%) ──
  const leftFlapRotate = useTransform(scrollYProgress, [0.15, 0.4], [0, -110]); // Swing out left
  const rightFlapRotate = useTransform(scrollYProgress, [0.15, 0.4], [0, 110]); // Swing out right
  const paperOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]); // Reveal cream paper

  // ── Phase 3: Text Scrolling (40% - 100%) ──
  const textScrollY = useTransform(scrollYProgress, [0.4, 1], ["400px", "-700px"]);

  // Floating objects subtle scaling and rotation based on overall scroll
  const objScale1 = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const objRotate1 = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const objScale2 = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);
  const objRotate2 = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const objScale3 = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const objRotate3 = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const objScale4 = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);
  const objRotate4 = useTransform(scrollYProgress, [0, 1], [0, 3]);

  // The content blocks entry animation (triggered natively as they scroll into view)
  const blockVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // L5 fix: Mobile-safe corner shapes
  return (
    <section 
      ref={containerRef}
      // P5 fix: 250vh is plenty for this content — 900vh traps users too long
      className="relative w-full h-[250vh] bg-[#0a0a0f] z-10"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* ── Fixed Floating Isometric Objects (Corners) ── */}
        {/* L5 fix: Use positive offsets on mobile, negative only on md+ */}
        <motion.div className="absolute top-0 left-0 md:-top-10 md:-left-10 z-10" style={{ scale: objScale1, rotate: objRotate1 }}>
          <IsoChip className="w-[80px] h-[80px] md:w-[160px] md:h-[160px] opacity-80" />
        </motion.div>
        <motion.div className="absolute top-0 right-0 md:top-20 md:-right-12 z-10" style={{ scale: objScale2, rotate: objRotate2 }}>
          <IsoServer className="w-[80px] h-[80px] md:w-[170px] md:h-[170px] opacity-70" />
        </motion.div>
        <motion.div className="absolute bottom-0 left-0 md:bottom-10 md:-left-12 z-10" style={{ scale: objScale3, rotate: objRotate3 }}>
          <IsoNode className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] opacity-80" />
        </motion.div>
        <motion.div className="absolute bottom-0 right-0 md:bottom-10 md:-right-10 z-10" style={{ scale: objScale4, rotate: objRotate4 }}>
          <IsoTerminal className="w-[80px] h-[80px] md:w-[160px] md:h-[160px] opacity-90" />
        </motion.div>

        {/* ── Header Titles (Stays in upper middle) ── */}
        <div className="absolute top-[15%] w-full flex flex-col items-center z-30 pointer-events-none">
          <motion.div style={{ opacity: headerOpacity, y: headerY }} className="mb-6">
            <Label>TRANSMISSION : TO_THE_BUILDERS</Label>
          </motion.div>
          <SectionHeader
            style={{ opacity: titleOpacity, y: titleY }}
            titleLine1="AN OPEN LETTER"
          />
        </div>

        {/* ── The 3D Envelope ── */}
        <div className="relative w-[90%] max-w-[720px] h-[480px] mt-24" style={{ perspective: "1500px" }}>
          
          {/* Back Panel (Always visible) */}
          <div className="absolute inset-0 bg-[#1a1f2e] border border-[#2a3a4a] rounded-sm z-0 shadow-2xl" />

          {/* Cream Paper Background (Fades in as flaps open) */}
          <motion.div 
            style={{ opacity: paperOpacity }}
            className="absolute inset-[10px] bg-[#f5f1e8] z-10 overflow-hidden shadow-inner border border-black/5"
          >
            {/* The Scrolling Text Content (Scrolls exclusively inside the cream paper) */}
            <motion.div 
              style={{ y: textScrollY }}
              // L7 fix: max-w-[65ch] constrains line length for readability
              className="absolute top-0 w-full px-8 md:px-14 pt-8 flex flex-col gap-8 max-w-full"
            >
              {/* Salutation */}
              <motion.div variants={blockVariants} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10% 0px" }}>
                <h3 className="font-serif italic text-[#2a2a2a] text-xl md:text-3xl leading-tight font-medium">
                  To the builders of Nile,
                </h3>
              </motion.div>

              {/* Paragraph 1 */}
              <motion.div variants={blockVariants} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10% 0px" }}>
                <p className="font-serif text-[#2a2a2a] text-base md:text-xl leading-[1.8] tracking-tight max-w-[65ch]">
                  Computing was never meant to be taught from a slide deck alone.
                </p>
              </motion.div>

              {/* Paragraph 2 */}
              <motion.div variants={blockVariants} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10% 0px" }}>
                <p className="font-serif text-[#2a2a2a] text-base md:text-xl leading-[1.8] tracking-tight max-w-[65ch]">
                  It happens in late-night debugging sessions, in the project that broke three times before it worked, in the community that pushed you to ship it anyway.
                </p>
              </motion.div>

              {/* Paragraph 3 */}
              <motion.div variants={blockVariants} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10% 0px" }}>
                <p className="font-serif text-[#2a2a2a] text-lg md:text-xl leading-[1.8] tracking-tight">
                  We built NACOS Nile to be that community — a place where ideas turn into code, and code turns into the future of African tech.
                </p>
              </motion.div>

              {/* Closing & Sign-off */}
              <motion.div variants={blockVariants} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-10% 0px" }}>
                <p className="font-sans font-bold text-[#2a2a2a] text-xl md:text-2xl mb-8 tracking-tight uppercase">
                  This is for you.
                </p>
                <div className="border-t border-black/10 pt-6">
                  <p className="font-serif italic font-medium text-[#2a2a2a]/80 text-base md:text-lg">— NACOS Nile Exco</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Fade masks for the top and bottom of the paper so text doesn't hard clip */}
            <div className="absolute top-0 w-full h-[60px] bg-gradient-to-b from-[#f5f1e8] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 w-full h-[60px] bg-gradient-to-t from-[#f5f1e8] to-transparent z-20 pointer-events-none" />
          </motion.div>

          {/* Left Flap (Rotates out) */}
          <motion.div 
            className="absolute top-0 left-0 w-1/2 h-full bg-[#151925] border-r border-[#3b82f6]/40 origin-left z-20"
            style={{ 
              clipPath: "polygon(0 0, 100% 50%, 0 100%)", 
              rotateY: leftFlapRotate,
              // A3 fix: transformPerspective in Framer Motion style prop enables real 3D
              transformPerspective: 1500,
              willChange: "transform"
            }}
          >
            {/* Inner shadow to give the flap depth as it opens */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-50" />
          </motion.div>

          {/* Right Flap (Rotates out) */}
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-full bg-[#151925] border-l border-[#3b82f6]/40 origin-right z-20"
            style={{ 
              clipPath: "polygon(100% 0, 0 50%, 100% 100%)", 
              rotateY: rightFlapRotate,
              // A3 fix: per-element perspective for correct 3D fold
              transformPerspective: 1500,
              willChange: "transform"
            }}
          >
            {/* Inner shadow to give the flap depth as it opens */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
