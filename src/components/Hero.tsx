"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import NetworkCanvas from "@/components/NetworkCanvas";
import LiquidCursor from "@/components/LiquidCursor";
import HeroSlider from "@/components/HeroSlider";
import { Label } from "./ui/Label";
import { Button } from "./ui/Button";

// A1 fix: Word-by-word stagger reveal with blur defocus
function SplitHeadline({ text, className, startDelay = 0.3 }: { text: string; className: string; startDelay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] last:mr-0"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            delay: startDelay + i * 0.07,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  // P2 fix: MotionValues never cause re-renders — NetworkCanvas reads them at rAF time
  const rawX = useMotionValue(-1000);
  const rawY = useMotionValue(-1000);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // P2 fix: passive listener — no blocking, no throttle needed
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    // L9 fix: flex-col justify-between so slider sits at bottom without clipping nav
    <section className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-spatial">
      {/* ── Noise Overlay ── */}
      <div className="bg-noise z-20" />

      {/* ── Subtle Node Background — hero only ── */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-60">
        <NetworkCanvas mouseX={rawX} mouseY={rawY} />
      </div>

      {/* ── Custom Cursor ── */}
      {isMounted && <LiquidCursor />}

      {/* ── Hero Content ── */}
      {/* P7 fix: transform-gpu promotes to composite layer */}
      <div className="relative z-30 flex w-full flex-col items-center justify-center px-6 text-center pt-36 md:pt-44 transform-gpu">

        {/* ── Label ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Label>SYS.INIT</Label>
        </motion.div>

        {/* ── Main Headline — fluid type + word-by-word reveal ── */}
        {/* L1 fix: clamp-based fluid typography via inline style */}
        <div className="mb-5" style={{ fontSize: "clamp(2rem, 7vw, 5.5rem)" }}>
          <div className="leading-[0.93] tracking-tighter font-display font-black uppercase">
            <SplitHeadline
              text="EMPOWERING NILE'S NEXT"
              className="block text-white"
              startDelay={0.25}
            />
          </div>
          <div className="leading-[0.93] tracking-tighter font-display font-black uppercase">
            <SplitHeadline
              text="GENERATION OF BUILDERS"
              className="block text-white/50"
              startDelay={0.45}
            />
          </div>
        </div>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg text-white/55 leading-relaxed mb-12"
          style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }} // L8 fix
        >
          The central nervous system for computer science students at Nile University. We build, we break, we innovate.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button href="#join" variant="primary" magnetic={true}>
            JOIN_NETWORK()
          </Button>
          <Button href="#programs" variant="outline" magnetic={true}>
            EXPLORE_PROGRAMS
          </Button>
        </motion.div>
      </div>

      {/* ── Slider — L9 fix: flex child sits naturally at bottom ── */}
      <div className="relative z-30 w-full max-w-[100vw] overflow-hidden pb-0">
        <HeroSlider />
      </div>
    </section>
  );
}
