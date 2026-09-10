"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import Image from "next/image";
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
  const hubRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  // Dynamic radius based on viewport
  const [radius, setRadius] = useState(215);

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setRadius(120);
      } else if (w < 640) {
        setRadius(140);
      } else if (w < 1024) {
        setRadius(175);
      } else {
        setRadius(215);
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

  // GSAP shoot-out animation when scrolled into section
  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const validIcons = iconRefs.current.filter(Boolean) as HTMLElement[];

    if (shouldReduceMotion) {
      // Instant reveal for reduced-motion users
      gsap.set(validIcons, {
        opacity: 1,
        scale: 1,
        x: (i) => coords[i]?.x ?? 0,
        y: (i) => coords[i]?.y ?? 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial state: tucked hidden directly behind the center circle
      gsap.set(validIcons, {
        x: 0,
        y: 0,
        scale: 0.1,
        opacity: 0,
      });

      // Smooth burst shooting out to all sides
      gsap.to(validIcons, {
        x: (i) => coords[i]?.x ?? 0,
        y: (i) => coords[i]?.y ?? 0,
        scale: 1,
        opacity: 1,
        duration: 1.1,
        stagger: 0.05,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      // Ambient pulse on the center hub
      if (hubRef.current) {
        gsap.fromTo(
          hubRef.current,
          { scale: 0.9, opacity: 0.7 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [coords, shouldReduceMotion]);

  return (
    <section
      id="community"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 md:py-36 bg-[#111111] text-[#F7F7F5] border-t border-white/10 overflow-hidden"
    >
      {/* Editorial Headline */}
      <Container size="default" className="text-center pb-8 sm:pb-12">
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
      <Container size="default">
        <div
          ref={containerRef}
          className="relative w-full max-w-2xl mx-auto h-[380px] sm:h-[460px] md:h-[540px] flex items-center justify-center select-none"
        >
          {/* Subtle Concentric Orbit Guides */}
          <div
            aria-hidden="true"
            className="absolute rounded-full border border-dashed border-white/10 pointer-events-none"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
            }}
          />
          <div
            aria-hidden="true"
            className="absolute rounded-full border border-white/5 pointer-events-none"
            style={{
              width: `${radius * 1.3}px`,
              height: `${radius * 1.3}px`,
            }}
          />

          {/* Social Icons Shooting Out from Behind Center Circle */}
          {CHANNELS.map((channel, idx) => (
            <div
              key={channel.id}
              ref={(el) => {
                iconRefs.current[idx] = el;
              }}
              className="absolute z-10 will-change-transform"
            >
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN"
                aria-label={`Join NACOS on ${channel.name}`}
                className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#181818]/95 text-neutral-300 border border-white/15 shadow-2xl transition-all duration-300 hover:scale-120 hover:text-white hover:border-[#3b82f6] hover:bg-[#202020] hover:shadow-[0_0_28px_rgba(59,130,246,0.45)]"
              >
                {/* Platform Icon */}
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {channel.icon}
                </span>

                {/* Clean Floating Tooltip on Hover */}
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[2px] bg-[#141414] border border-white/20 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] text-white opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-1 shadow-lg">
                  {channel.name}
                </span>
              </a>
            </div>
          ))}

          {/* Center Community Hub (Icons emerge from behind this circle) */}
          <div
            ref={hubRef}
            className="relative z-20 flex flex-col items-center justify-center rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-[#141414] border border-white/20 shadow-[0_0_50px_rgba(39,65,147,0.35)] select-none"
          >
            {/* Ambient Pulse Wave */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-[#3b82f6]/40 animate-ping opacity-20 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-2.5 rounded-full border border-white/5 pointer-events-none"
            />

            <div className="flex flex-col items-center justify-center gap-1 sm:gap-1.5 text-center px-2">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="NACOS Nile Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
              </div>

              <span className="font-heading text-xs sm:text-sm md:text-base uppercase tracking-wider text-white">
                COMMUNITY
              </span>

              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#60a5fa]">
                CHANNELS
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
