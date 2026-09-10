"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import { Label } from "./ui/Label";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

import { PLATFORMS } from "./community/data";
import { ConnectionLine, DataPulse, SatelliteNode } from "./community/CommunityNodes";

// ─── Hub Radius (px from center) ───
const HUB_RADIUS = 140;

// ─── Main Export ───
export default function CommunitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(hubRef, { once: true, margin: "-100px 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Scroll Phases ──
  // 0-15%: Intro headline
  const labelOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const labelY = useTransform(scrollYProgress, [0, 0.08], [20, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.04, 0.12], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.04, 0.12], [40, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.08, 0.15], [0, 1]);

  // 15-70%: Hub power-on
  const hubOpacity = useTransform(scrollYProgress, [0.12, 0.2], [0, 1]);
  const hubScale = useTransform(scrollYProgress, [0.12, 0.22], [0.8, 1]);

  // Each node gets a staggered slice of 0.2-0.65
  const nodeDrawProgress = PLATFORMS.map((_, i) => {
    const start = 0.2 + i * 0.07;
    const end = start + 0.08;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  });

  // 70-100%: CTA reveal
  const ctaOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.7, 0.8], [40, 0]);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const hubPulseScale = useSpring(1, { stiffness: 20, damping: 10 });
  useEffect(() => {
    if (!hasAnimated) return;
    const interval = setInterval(() => {
      hubPulseScale.set(1.05);
      setTimeout(() => hubPulseScale.set(1), 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [hasAnimated, hubPulseScale]);

  return (
    <section
      ref={containerRef}
      // P9 fix: 300vh gives nodes breathing room to reveal ceremonially
      className="relative w-full h-[300vh] bg-transparent"
      onMouseMove={handleMouseMove}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between py-[5vh] md:py-[6vh]">
        {/* ── Intro (top zone) ── */}
        <div className="w-full flex flex-col items-center z-20 px-6 shrink-0">
          <motion.div style={{ opacity: labelOpacity, y: labelY }} className="mb-4">
            <Label>CONNECT : JOIN_THE_NETWORK</Label>
          </motion.div>
          <SectionHeader
            style={{ opacity: titleOpacity, y: titleY }}
            titleLine1="PLUG INTO"
            titleLine2="THE COMMUNITY"
            subtitle={<motion.span style={{ opacity: subOpacity }}>Six platforms. One community. Pick your entry point.</motion.span>}
          />
        </div>

        {/* ── Hub Visualization (middle zone) ── */}
        <div className="relative flex-1 w-full flex items-center justify-center min-h-[300px] z-10" ref={hubRef}>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ x: parallaxX, y: parallaxY, opacity: hubOpacity, scale: hubScale }}
          >
            {/* SVG Connections Canvas */}
            <svg className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] pointer-events-none overflow-visible">
              <defs>
                <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
              </defs>

              <motion.circle cx="50%" cy="50%" r="40" fill="url(#hub-glow)" style={{ scale: hubPulseScale }} />

              {/* Draw Lines */}
              {PLATFORMS.map((platform, i) => {
                const angleRad = (platform.angle * Math.PI) / 180;
                const ex = 300 + Math.cos(angleRad) * HUB_RADIUS;
                const ey = 300 + Math.sin(angleRad) * HUB_RADIUS;

                // For current value reading inside React render, we need to extract from motion value.
                // However, framer-motion doesn't support reading motion value in render purely like this for SVG paths easily
                // without wrapping the SVG element in motion. 
                // We'll wrap ConnectionLine in a motion component that reads drawProgress.
                return (
                  <motion.g key={`line-${platform.name}`}>
                    <MotionConnectionLine
                      cx={300} cy={300} ex={ex} ey={ey}
                      drawProgress={nodeDrawProgress[i]}
                      accent={platform.accent}
                      isHovered={hoveredIndex === i}
                    />
                    
                    {hasAnimated && (
                      <DataPulse cx={300} cy={300} ex={ex} ey={ey} accent={platform.accent} delay={i * 0.4} />
                    )}
                  </motion.g>
                );
              })}
            </svg>

            {/* Central NACOS Node */}
            <div className="absolute flex items-center justify-center">
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 bg-[#0f1419] border border-blue-500/40 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10"
                style={{ scale: hubPulseScale }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
                </div>
              </motion.div>
            </div>

            {/* Satellite Nodes */}
            {PLATFORMS.map((platform, i) => {
              const angleRad = (platform.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * HUB_RADIUS;
              const y = Math.sin(angleRad) * HUB_RADIUS;

              return (
                <MotionSatelliteNodeWrapper
                  key={platform.name}
                  progress={nodeDrawProgress[i]}
                  render={(prog: number) => (
                    <SatelliteNode
                      platform={platform}
                      x={x}
                      y={y}
                      nodeProgress={prog}
                      index={i}
                      onHoverChange={(h) => setHoveredIndex(h ? i : null)}
                    />
                  )}
                />
              );
            })}
          </motion.div>
        </div>

        {/* ── Closing CTA (bottom zone) ── */}
        <motion.div
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="z-20 shrink-0"
        >
          <Button href="https://discord.gg/nacos" variant="primary" magnetic={true}>
            JOIN_COMMUNITY()
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Helper component to read motion values in render for SVG line
function MotionConnectionLine({ drawProgress, ...props }: any) {
  const [prog, setProg] = useState(0);
  useMotionValueEvent(drawProgress, "change", (v: number) => setProg(v));

  return <ConnectionLine drawProgress={prog} {...props} />;
}

// Helper to read motion value for Satellite Node
function MotionSatelliteNodeWrapper({ progress, render }: any) {
  const [prog, setProg] = useState(0);
  useMotionValueEvent(progress, "change", (v: number) => setProg(v));

  return render(prog);
}
