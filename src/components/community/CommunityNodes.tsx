"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PLATFORMS } from "./data";
import MagneticButton from "@/components/MagneticButton";

// ─── SVG Line Component ───
export function ConnectionLine({
  cx,
  cy,
  ex,
  ey,
  drawProgress,
  accent,
  isHovered,
}: {
  cx: number;
  cy: number;
  ex: number;
  ey: number;
  drawProgress: number;
  accent: string;
  isHovered: boolean;
}) {
  const dx = ex - cx;
  const dy = ey - cy;
  const length = Math.sqrt(dx * dx + dy * dy);

  const dashOffset = length * (1 - Math.max(0, Math.min(1, drawProgress)));

  return (
    <line
      x1={cx}
      y1={cy}
      x2={ex}
      y2={ey}
      stroke={isHovered ? accent : "rgba(255,255,255,0.12)"}
      strokeWidth={isHovered ? 2 : 1}
      strokeDasharray={length}
      strokeDashoffset={dashOffset}
      style={{
        transition: "stroke 0.3s, stroke-width 0.3s",
        filter: drawProgress >= 1 ? `drop-shadow(0 0 4px ${accent}40)` : "none",
      }}
    />
  );
}

// ─── Data Pulse Dot ───
export function DataPulse({ cx, cy, ex, ey, accent, delay }: { cx: number; cy: number; ex: number; ey: number; accent: string; delay: number }) {
  return (
    <motion.circle
      r={3}
      fill={accent}
      filter={`drop-shadow(0 0 6px ${accent})`}
      initial={{ offsetDistance: "0%" }}
      animate={{
        cx: [cx, ex],
        cy: [cy, ey],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 4 + delay,
        ease: "easeInOut",
      }}
    />
  );
}

// ─── Satellite Node ───
export function SatelliteNode({
  platform,
  x,
  y,
  nodeProgress,
  onHoverChange
}: {
  platform: (typeof PLATFORMS)[number];
  x: number;
  y: number;
  nodeProgress: number;
  onHoverChange?: (hovered: boolean) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const opacity = Math.max(0, Math.min(1, nodeProgress));
  const scale = 0.5 + opacity * 0.5;

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      window.open(platform.href, "_blank", "noopener,noreferrer");
      setClicked(false);
    }, 200);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    onHoverChange?.(false);
  };

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-2"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
      initial={false}
      animate={{
        opacity,
        scale: hovered ? 1.08 : scale,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <MagneticButton>
        <button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label={platform.ariaLabel}
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer"
          style={{
            background: "#0f1419",
            border: `1px solid ${hovered ? platform.accent : "rgba(255,255,255,0.08)"}`,
            boxShadow: hovered
              ? `0 0 20px ${platform.accent}30, 0 0 40px ${platform.accent}15, inset 0 0 20px ${platform.accent}08`
              : clicked
              ? `0 0 30px ${platform.accent}60`
              : "none",
            color: hovered ? platform.accent : "rgba(255,255,255,0.5)",
          }}
        >
          {/* A5 fix: Electrical spark / flash on power-on */}
          {nodeProgress >= 0.95 && nodeProgress < 1.05 && (
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ opacity: 1, boxShadow: `0 0 0px ${platform.accent}` }}
              animate={{ 
                opacity: 0, 
                boxShadow: [`0 0 0px ${platform.accent}`, `0 0 40px ${platform.accent}`, `0 0 10px ${platform.accent}`] 
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ background: `radial-gradient(circle, ${platform.accent}60, transparent)` }}
            />
          )}
          {platform.icon}
        </button>
      </MagneticButton>
      <span
        className="font-mono text-[10px] md:text-xs tracking-[0.15em] transition-colors duration-300 whitespace-nowrap"
        style={{ color: hovered ? platform.accent : "rgba(255,255,255,0.4)" }}
      >
        {platform.name}
      </span>
    </motion.div>
  );
}
