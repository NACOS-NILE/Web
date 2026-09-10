"use client";

import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";

interface ChannelItem {
  id: string;
  name: string;
  href: string;
  angle: number; // Angle in degrees around the circle
  icon: React.ReactNode;
}

const CHANNELS: ChannelItem[] = [
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/nacos-nile",
    angle: 270, // 12 o'clock (Top)
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "discord",
    name: "Discord",
    href: "https://discord.gg",
    angle: 330, // 2 o'clock (Top-Right)
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    href: "https://whatsapp.com",
    angle: 30, // 4 o'clock (Bottom-Right)
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true">
        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.201.3-.778.979-.954 1.18-.176.2-.351.226-.652.076-.301-.151-1.27-.468-2.42-1.493-.894-.799-1.498-1.786-1.674-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.151-.678-1.633-.929-2.235-.245-.587-.493-.507-.678-.517-.176-.01-.376-.012-.577-.012s-.527.075-.803.376c-.276.301-1.054 1.029-1.054 2.509s1.079 2.909 1.229 3.11c.15.2 2.124 3.243 5.145 4.549.718.31 1.279.496 1.716.634.721.23 1.377.197 1.895.12.577-.087 1.78-.727 2.031-1.43.25-.702.25-1.303.176-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.688c-1.748 0-3.461-.468-4.97-1.353l-.356-.21-3.693.968.985-3.6-.23-.367a9.664 9.664 0 0 1-1.48-5.116c0-5.352 4.354-9.706 9.71-9.706 2.593 0 5.03 1.01 6.864 2.845 1.834 1.835 2.844 4.273 2.843 6.866 0 5.353-4.354 9.673-9.663 9.673zM12.042 0C5.402 0 0 5.402 0 12.042c0 2.119.553 4.185 1.603 6.006L.068 24l6.108-1.602a11.986 11.986 0 0 0 5.866 1.524c6.64 0 12.042-5.402 12.042-12.042C24.084 5.402 18.682 0 12.042 0z" />
      </svg>
    ),
  },
  {
    id: "telegram",
    name: "Telegram",
    href: "https://telegram.org",
    angle: 90, // 6 o'clock (Bottom)
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com",
    angle: 150, // 8 o'clock (Bottom-Left)
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    name: "X / Twitter",
    href: "https://x.com",
    angle: 210, // 10 o'clock (Top-Left)
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Community() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLButtonElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  // Expansion state tracked with ref and state to avoid race conditions
  const [isExpanded, setIsExpanded] = useState(false);
  const isExpandedRef = useRef(false);

  // Dynamic radius based on viewport
  const [radius, setRadius] = useState(210);

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setRadius(120);
      } else if (w < 640) {
        setRadius(145);
      } else if (w < 1024) {
        setRadius(175);
      } else {
        setRadius(210);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // Pre-calculate destination coordinates for each channel based on radius
  const coords = useMemo(() => {
    return CHANNELS.map((ch) => {
      const rad = (ch.angle * Math.PI) / 180;
      return {
        x: Math.round(radius * Math.cos(rad)),
        y: Math.round(radius * Math.sin(rad)),
      };
    });
  }, [radius]);

  // Generate Git version-control branch curves from center (0,0) to each outer node (x, y)
  const branchPaths = useMemo(() => {
    return coords.map((coord, idx) => {
      const { x, y } = coord;
      const angle = CHANNELS[idx].angle;

      if (angle === 270) {
        // Top: Git branch S-curve upward
        return `M 0 0 C 35 ${y * 0.35}, -25 ${y * 0.7}, ${x} ${y}`;
      } else if (angle === 90) {
        // Bottom: Git branch S-curve downward
        return `M 0 0 C -35 ${y * 0.35}, 25 ${y * 0.7}, ${x} ${y}`;
      } else if (angle === 330) {
        // Top-right: branch upward then curve right
        return `M 0 0 C 0 ${y * 0.85}, ${x * 0.3} ${y}, ${x} ${y}`;
      } else if (angle === 210) {
        // Top-left: branch upward then curve left
        return `M 0 0 C 0 ${y * 0.85}, ${x * 0.3} ${y}, ${x} ${y}`;
      } else if (angle === 30) {
        // Bottom-right: branch right then curve down
        return `M 0 0 C ${x * 0.65} 0, ${x * 0.45} ${y}, ${x} ${y}`;
      } else {
        // Bottom-left (angle === 150): branch left then curve down
        return `M 0 0 C ${x * 0.65} 0, ${x * 0.45} ${y}, ${x} ${y}`;
      }
    });
  }, [coords]);

  // Execute animation whenever expanded state or coords changes
  const animateState = useCallback(
    (expanded: boolean) => {
      isExpandedRef.current = expanded;
      setIsExpanded(expanded);

      const validIcons = iconRefs.current.filter(Boolean) as HTMLElement[];
      const validPaths = pathRefs.current.filter(Boolean) as SVGPathElement[];

      if (shouldReduceMotion) {
        gsap.set(validIcons, {
          opacity: expanded ? 1 : 0,
          scale: expanded ? 1 : 0,
          x: (i: number) => (expanded ? coords[i]?.x ?? 0 : 0),
          y: (i: number) => (expanded ? coords[i]?.y ?? 0 : 0),
        });
        validPaths.forEach((path) => {
          gsap.set(path, {
            strokeDashoffset: expanded ? 0 : 100,
            opacity: expanded ? 0.75 : 0,
          });
        });
        return;
      }

      if (expanded) {
        // Shoot out icons smoothly from center
        gsap.to(validIcons, {
          x: (i: number) => coords[i]?.x ?? 0,
          y: (i: number) => coords[i]?.y ?? 0,
          scale: 1,
          opacity: 1,
          duration: 0.95,
          stagger: 0.04,
          ease: "back.out(1.6)",
          overwrite: "auto",
        });

        // Draw Git branch lines out from center
        validPaths.forEach((path, i) => {
          gsap.to(path, {
            strokeDashoffset: 0,
            opacity: 0.75,
            duration: 0.85,
            delay: i * 0.035,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      } else {
        // Retract icons smoothly back behind center circle
        gsap.to(validIcons, {
          x: 0,
          y: 0,
          scale: 0,
          opacity: 0,
          duration: 0.55,
          stagger: 0.025,
          ease: "power3.inOut",
          overwrite: "auto",
        });

        // Retract Git branch lines back into center
        validPaths.forEach((path, i) => {
          gsap.to(path, {
            strokeDashoffset: 100,
            opacity: 0,
            duration: 0.45,
            delay: i * 0.02,
            ease: "power3.inOut",
            overwrite: "auto",
          });
        });
      }
    },
    [coords, shouldReduceMotion]
  );

  // Set initial hidden state behind the center circle on mount
  useEffect(() => {
    const validIcons = iconRefs.current.filter(Boolean) as HTMLElement[];
    const validPaths = pathRefs.current.filter(Boolean) as SVGPathElement[];

    gsap.set(validIcons, { x: 0, y: 0, scale: 0, opacity: 0 });
    validPaths.forEach((path) => {
      gsap.set(path, { strokeDashoffset: 100, opacity: 0 });
    });
  }, []);

  // Update position on resize if currently expanded
  useEffect(() => {
    if (isExpandedRef.current) {
      animateState(true);
    }
  }, [coords, animateState]);

  // ScrollTrigger: fires each time the user scrolls to this section
  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 65%",
      end: "bottom 25%",
      onEnter: () => animateState(true),
      onLeave: () => animateState(false),
      onEnterBack: () => animateState(true),
      onLeaveBack: () => animateState(false),
    });

    // If page loads already inside the community section, trigger immediately
    const rect = sectionRef.current.getBoundingClientRect();
    const inViewNow = rect.top <= window.innerHeight * 0.75 && rect.bottom >= window.innerHeight * 0.25;
    if (inViewNow) {
      animateState(true);
    }

    return () => trigger.kill();
  }, [animateState]);

  // Click center hub to toggle expand / retract at will
  const handleToggle = () => {
    animateState(!isExpandedRef.current);
  };

  return (
    <section
      id="community"
      ref={sectionRef}
      className="relative w-full pt-20 sm:pt-28 md:pt-36 pb-32 sm:pb-44 md:pb-56 bg-[#111111] text-[#F7F7F5] border-t border-white/10 overflow-hidden"
    >
      {/* Subtle Grey Grid Background — Exclusive to Community Section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40 select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)",
        }}
      />

      {/* Global CSS for Organic Floating Micro-Drift */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes communityDrift0 { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(6px, -6px); } }
            @keyframes communityDrift1 { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(-5px, 6px); } }
            @keyframes communityDrift2 { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(6px, 5px); } }
            @keyframes communityDrift3 { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(-6px, -5px); } }
            @keyframes communityDrift4 { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(5px, 3px); } }
            @keyframes communityDrift5 { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(-5px, -6px); } }
          `,
        }}
      />

      {/* Editorial Headline */}
      <Container size="default" className="relative z-10 text-center pb-8 sm:pb-12">
        <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] text-white py-1">
          JOIN THE
          <br />
          <span className="text-[#3b82f6]">COMMUNITY.</span>
        </h2>

        <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed text-neutral-300 font-sans max-w-lg mx-auto">
          Six computing concentrations. One united student ecosystem. Select any channel to enter our digital community.
        </p>
      </Container>

      {/* Interactive Radial Shoot-Out Canvas */}
      <Container size="default" className="relative z-10">
        <div
          ref={containerRef}
          className="relative w-full max-w-2xl mx-auto h-[440px] sm:h-[520px] md:h-[600px] flex items-center justify-center select-none"
        >
          {/* Dynamic Git Version-Control Curved Branch Lines (Solid Grey, Zero Glow) */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
            viewBox="-300 -300 600 600"
          >
            {branchPaths.map((d, idx) => (
              <path
                key={idx}
                ref={(el) => {
                  pathRefs.current[idx] = el;
                }}
                d={d}
                fill="none"
                stroke="#6b7280"
                strokeWidth="1.75"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray="100"
                strokeDashoffset={100}
                opacity={0}
              />
            ))}
          </svg>

          {/* Social Icons Shooting Out from Behind Center Circle */}
          {CHANNELS.map((channel, idx) => (
            <div
              key={channel.id}
              ref={(el) => {
                iconRefs.current[idx] = el;
              }}
              className="absolute z-30 will-change-transform"
            >
              {/* Inner Wrapper with Organic Micro-Movement / Floating Drift */}
              <div
                style={{
                  animation: isExpanded
                    ? `communityDrift${idx % 6} ${3.2 + (idx % 3) * 0.7}s ease-in-out infinite alternate`
                    : "none",
                }}
              >
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="OPEN"
                  aria-label={channel.name}
                  className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/[0.05] backdrop-blur-md text-neutral-200 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-125 hover:text-white hover:border-white/50 hover:bg-white/[0.12] active:scale-95"
                >
                  {/* Platform Icon Smooth Size Increase on Hover (Zero Glow, Zero Tooltips) */}
                  <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-115">
                    {channel.icon}
                  </span>
                </a>
              </div>
            </div>
          ))}

          {/* Center Community Hub (Transparent Frosted Glass, Clickable to Retract/Expand, Zero Glow, All-White Icon, No Text) */}
          <button
            ref={hubRef}
            type="button"
            onClick={handleToggle}
            data-cursor="CLICK"
            aria-label={isExpanded ? "Retract community channels" : "Expand community channels"}
            aria-expanded={isExpanded}
            className="group relative z-20 flex items-center justify-center rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/[0.05] backdrop-blur-md border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] select-none cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-108 hover:border-white/50 hover:bg-white/[0.1] focus-visible:outline-none"
          >
            {/* Community People Icon — 100% Fully White (No blue head) */}
            <div className="relative flex items-center justify-center text-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
                aria-hidden="true"
              >
                {/* Left person */}
                <circle cx="5.5" cy="10" r="2" strokeWidth="1.75" />
                <path
                  d="M2 18c0-2.2 1.6-3.8 3.8-3.8 1.2 0 2.2.5 2.9 1.4"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />

                {/* Right person */}
                <circle cx="18.5" cy="10" r="2" strokeWidth="1.75" />
                <path
                  d="M22 18c0-2.2-1.6-3.8-3.8-3.8-1.2 0-2.2.5-2.9 1.4"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />

                {/* Center / Leader person — Pure White */}
                <circle
                  cx="12"
                  cy="7.5"
                  r="2.5"
                  strokeWidth="2"
                />
                <path
                  d="M7 18.5c0-2.8 2.2-4.8 5-4.8s5 2 5 4.8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
}
