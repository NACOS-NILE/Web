"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useSectionHeaderReveal } from "@/lib/useSectionHeaderReveal";
import { useMagnetic } from "@/lib/useMagnetic";
import { TechIconField, buildTechIcons } from "./TechIconField";

const HEADER_TECH_ICONS = buildTechIcons(["gitBranch", "database", "code", "cloud", "terminal", "cpu"]);

interface PopoutIcon {
  label: string;
  svg: ReactNode;
  activeClass: string;
  floatClass: string;
  bgGlow?: string;
}

interface CourseNode {
  id: string;
  code: string;
  name: string;
  degree: string;
  focus: string;
  side: "left" | "right";
  baseAnchorX: number;
  baseAnchorY: number;
  cp1X: number;
  cp1Y: number;
  cp2X: number;
  cp2Y: number;
  targetX: number;
  targetY: number;
  initialD: string;
  popoutIcons: PopoutIcon[];
}

// Coordinate canvas space: 1000 x 620
// Center NACOS logo is at (500, 310)
// Paths originate at course anchor dots and flow directly into the central logo
const courses: CourseNode[] = [
  {
    id: "cs",
    code: "CS",
    name: "Computer Science",
    degree: "B.Sc. Honors",
    focus: "Algorithms · Compilers · Theory",
    side: "left",
    baseAnchorX: 300,
    baseAnchorY: 110,
    cp1X: 360,
    cp1Y: 120,
    cp2X: 410,
    cp2Y: 210,
    targetX: 440,
    targetY: 290,
    initialD: "M 300 110 C 360 120, 410 210, 440 290",
    popoutIcons: [
      {
        label: "Silicon CPU",
        activeClass: "-top-11 right-0 sm:right-2",
        floatClass: "animate-float-1",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
          </svg>
        ),
      },
      {
        label: "Code Syntax",
        activeClass: "-top-9 left-2 sm:left-6",
        floatClass: "animate-float-2",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
      },
      {
        label: "Algorithm Graph",
        activeClass: "-bottom-10 right-3 sm:right-6",
        floatClass: "animate-float-3",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="6" cy="17" r="2.5" />
            <circle cx="18" cy="17" r="2.5" />
            <path d="M10.5 7L7.5 14.5M13.5 7L16.5 14.5" />
          </svg>
        ),
      },
      {
        label: "Core Intellect Spark",
        activeClass: "-bottom-9 left-4 sm:left-10",
        floatClass: "animate-float-4",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "se",
    code: "SE",
    name: "Software Engineering",
    degree: "B.Sc. Honors",
    focus: "Full-Stack · Architecture · Mobile",
    side: "right",
    baseAnchorX: 700,
    baseAnchorY: 110,
    cp1X: 640,
    cp1Y: 120,
    cp2X: 590,
    cp2Y: 210,
    targetX: 560,
    targetY: 290,
    initialD: "M 700 110 C 640 120, 590 210, 560 290",
    popoutIcons: [
      {
        label: "Git Version Control",
        activeClass: "-top-11 left-0 sm:left-2",
        floatClass: "animate-float-1",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <line x1="6" y1="3" x2="6" y2="15" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
          </svg>
        ),
      },
      {
        label: "System Architecture Layers",
        activeClass: "-top-9 right-2 sm:right-6",
        floatClass: "animate-float-2",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        ),
      },
      {
        label: "Deploy / Ship Rocket",
        activeClass: "-bottom-10 left-3 sm:left-6",
        floatClass: "animate-float-3",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          </svg>
        ),
      },
      {
        label: "Mobile UI Layout",
        activeClass: "-bottom-9 right-4 sm:right-10",
        floatClass: "animate-float-4",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "cyber",
    code: "CYBER",
    name: "Cyber Security",
    degree: "B.Sc. Honors",
    focus: "Ethical Hacking · Defense · CTF",
    side: "left",
    baseAnchorX: 280,
    baseAnchorY: 310,
    cp1X: 325,
    cp1Y: 295,
    cp2X: 370,
    cp2Y: 295,
    targetX: 415,
    targetY: 310,
    initialD: "M 280 310 C 325 295, 370 295, 415 310",
    popoutIcons: [
      {
        label: "Security Shield",
        activeClass: "-top-11 right-0 sm:right-2",
        floatClass: "animate-float-1",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        ),
      },
      {
        label: "Cryptographic Padlock",
        activeClass: "-top-9 left-2 sm:left-6",
        floatClass: "animate-float-2",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            <circle cx="12" cy="16" r="1.5" />
          </svg>
        ),
      },
      {
        label: "Threat Vulnerability Radar",
        activeClass: "-bottom-10 right-3 sm:right-6",
        floatClass: "animate-float-3",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect width="8" height="14" x="8" y="6" rx="4" />
            <path d="m19 7-3 2M5 7l3 2M19 19l-3-2M5 19l3-2M20 13h-4M4 13h4M10 4l1 2M14 4l-1 2" />
          </svg>
        ),
      },
      {
        label: "Target Crosshair",
        activeClass: "-bottom-9 left-4 sm:left-10",
        floatClass: "animate-float-4",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="12" r="10" />
            <line x1="22" y1="12" x2="18" y2="12" />
            <line x1="6" y1="12" x2="2" y2="12" />
            <line x1="12" y1="6" x2="12" y2="2" />
            <line x1="12" y1="22" x2="12" y2="18" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "is",
    code: "IS",
    name: "Information Systems",
    degree: "B.Sc. Honors",
    focus: "Enterprise · Data Governance · ERP",
    side: "right",
    baseAnchorX: 720,
    baseAnchorY: 310,
    cp1X: 675,
    cp1Y: 295,
    cp2X: 630,
    cp2Y: 295,
    targetX: 585,
    targetY: 310,
    initialD: "M 720 310 C 675 295, 630 295, 585 310",
    popoutIcons: [
      {
        label: "Database Storage",
        activeClass: "-top-11 left-0 sm:left-2",
        floatClass: "animate-float-1",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        ),
      },
      {
        label: "Analytics Bar Chart",
        activeClass: "-top-9 right-2 sm:right-6",
        floatClass: "animate-float-2",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
      {
        label: "Enterprise Process Node",
        activeClass: "-bottom-10 left-3 sm:left-6",
        floatClass: "animate-float-3",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="3" y="3" width="6" height="6" rx="1" />
            <rect x="15" y="15" width="6" height="6" rx="1" />
            <path d="M9 6h6a3 3 0 0 1 3 3v6" />
          </svg>
        ),
      },
      {
        label: "Enterprise Network Hub",
        activeClass: "-bottom-9 right-4 sm:right-10",
        floatClass: "animate-float-4",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="12" r="9" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "it",
    code: "IT",
    name: "Information Technology",
    degree: "B.Sc. Honors",
    focus: "Cloud Infra · Linux · DevOps",
    side: "left",
    baseAnchorX: 300,
    baseAnchorY: 510,
    cp1X: 360,
    cp1Y: 500,
    cp2X: 410,
    cp2Y: 410,
    targetX: 440,
    targetY: 330,
    initialD: "M 300 510 C 360 500, 410 410, 440 330",
    popoutIcons: [
      {
        label: "Cloud Computing",
        activeClass: "-top-11 right-0 sm:right-2",
        floatClass: "animate-float-1",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        ),
      },
      {
        label: "Server Blade Rack",
        activeClass: "-top-9 left-2 sm:left-6",
        floatClass: "animate-float-2",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        ),
      },
      {
        label: "Command Terminal",
        activeClass: "-bottom-10 right-3 sm:right-6",
        floatClass: "animate-float-3",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        ),
      },
      {
        label: "Network Nodes",
        activeClass: "-bottom-9 left-4 sm:left-10",
        floatClass: "animate-float-4",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="9" y="9" width="6" height="6" rx="1" />
            <path d="M12 2v7M12 15v7M2 12h7M15 12h7" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "ds",
    code: "DS",
    name: "Data Science",
    degree: "B.Sc. Honors",
    focus: "Machine Learning · Big Data · Analytics",
    side: "right",
    baseAnchorX: 700,
    baseAnchorY: 510,
    cp1X: 640,
    cp1Y: 500,
    cp2X: 590,
    cp2Y: 410,
    targetX: 560,
    targetY: 330,
    initialD: "M 700 510 C 640 500, 590 410, 560 330",
    popoutIcons: [
      {
        label: "Neural Network Nodes",
        activeClass: "-top-11 left-0 sm:left-2",
        floatClass: "animate-float-1",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="5" cy="6" r="2.5" />
            <circle cx="5" cy="18" r="2.5" />
            <circle cx="12" cy="12" r="2.5" />
            <circle cx="19" cy="6" r="2.5" />
            <circle cx="19" cy="18" r="2.5" />
            <line x1="7.5" y1="7" x2="9.5" y2="11" />
            <line x1="7.5" y1="17" x2="9.5" y2="13" />
            <line x1="14.5" y1="11" x2="16.5" y2="7" />
            <line x1="14.5" y1="13" x2="16.5" y2="17" />
          </svg>
        ),
      },
      {
        label: "AI Neural Brain",
        activeClass: "-top-9 right-2 sm:right-6",
        floatClass: "animate-float-2",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
          </svg>
        ),
      },
      {
        label: "Tensor Analytics Plot",
        activeClass: "-bottom-10 left-3 sm:left-6",
        floatClass: "animate-float-3",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        ),
      },
      {
        label: "Spark of Intelligence",
        activeClass: "-bottom-9 right-4 sm:right-10",
        floatClass: "animate-float-4",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        ),
      },
    ],
  },
];

const animParams = [
  { ampX: 5, ampY: 7, durationX: 4.8, durationY: 5.6, delayX: 0, delayY: 0.4 },
  { ampX: 6, ampY: 6, durationX: 5.2, durationY: 4.6, delayX: 0.8, delayY: 0 },
  { ampX: 4, ampY: 6, durationX: 4.4, durationY: 5.8, delayX: 0.3, delayY: 1.1 },
  { ampX: 5, ampY: 7, durationX: 5.5, durationY: 4.9, delayX: 1.2, delayY: 0.6 },
  { ampX: 6, ampY: 5, durationX: 4.9, durationY: 5.3, delayX: 0.5, delayY: 1.4 },
  { ampX: 4, ampY: 6, durationX: 5.7, durationY: 4.7, delayX: 1.0, delayY: 0.2 },
];

// ── Animated "converge" Word: separates outwards and snaps magnetically together ──
const CONVERGE_LETTERS = ["c", "o", "n", "v", "e", "r", "g", "e"];
// Lateral separation offsets for: c, o, n, v | e, r, g, e
// Center is between index 3 ('v') and index 4 ('e')
const SPREAD_X = [-110, -80, -50, -22, 22, 50, 80, 110];
const SPREAD_Y = [-4, 3, -2, 2, -2, 3, -3, 4];

function ConvergePhrase() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const atNacosRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const validLetters = letterRefs.current.filter(Boolean);
      const isMobile = window.innerWidth < 640;
      const spreadScale = isMobile ? 0.42 : 1;

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2.5,
      });
      tlRef.current = tl;

      // 1. Separate: letters pull apart outward from center,
      // and on desktop "at NACOS" smoothly glides rightward to provide ample clearance
      tl.to(validLetters, {
        xPercent: (i) => SPREAD_X[i] * spreadScale,
        y: (i) => SPREAD_Y[i] * spreadScale,
        duration: 1.1,
        ease: "power2.inOut",
        stagger: {
          amount: 0.14,
          from: "center",
        },
      })
      .to(
        atNacosRef.current,
        {
          x: isMobile ? 0 : "0.85em",
          duration: 1.1,
          ease: "power2.inOut",
        },
        "<" // synchronized in lockstep
      )
      // 2. Brief float at maximum separation
      .to(validLetters, {
        y: (i) => SPREAD_Y[i] * -0.5,
        duration: 0.5,
        ease: "sine.inOut",
      })
      // 3. Magnetic Convergence: letters accelerate inward and snap together into "converge"
      // while "at NACOS" snaps back inward in lockstep
      .to(validLetters, {
        xPercent: 0,
        y: 0,
        duration: 0.6,
        ease: "back.out(2.2)",
        stagger: {
          amount: 0.1,
          from: "edges",
        },
      })
      .to(
        atNacosRef.current,
        {
          x: 0,
          duration: 0.6,
          ease: "back.out(2.2)",
        },
        "<"
      )
      // 4. Kinetic impact pulse upon joining
      .fromTo(
        containerRef.current,
        { scale: 1 },
        {
          scale: 1.05,
          duration: 0.18,
          yoyo: true,
          repeat: 1,
          ease: "power2.out",
        },
        "<+=0.35"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => tlRef.current?.restart()}
      className="inline-flex flex-col sm:inline-flex sm:flex-row items-center will-change-transform select-none cursor-pointer"
      title="All disciplines converge at NACOS"
    >
      {/* The animated "converge" word */}
      <span className="inline-flex items-center text-[#274193] font-black tracking-[-0.035em] will-change-transform">
        {CONVERGE_LETTERS.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              letterRefs.current[i] = el;
            }}
            className="inline-block will-change-transform"
          >
            {char}
          </span>
        ))}
      </span>

      {/* "at NACOS" on mobile view appears on the next line so it does not get compressed by the side */}
      <span
        ref={atNacosRef}
        className="block sm:inline-block text-gray-950 font-black will-change-transform mt-1 sm:mt-0 sm:ml-4 whitespace-nowrap"
      >
        at NACOS
      </span>
    </span>
  );
}

// ── Magnetic pull for each discipline node ───────────────────────────────
// A dedicated wrapper, not applied directly to either existing layer on
// these nodes, because both of those are already spoken for: the outer
// "positional shell" carries its own static Tailwind `-translate-y-1/2` /
// `-translate-x-full` offset (must never move), and the inner "gsap-float"
// child gets a raw `style.transform` write every tick from the ambient
// drift ticker in the effect below (must stay exactly what that ticker
// leaves it as). useMagnetic's own quickTo `x`/`y` tween needs a transform
// target that's entirely its own — this owns nothing else, so there's
// nothing for the pointer-follow to fight.
function DisciplineMagnetNode({ children }: { children: ReactNode }) {
  const magnetRef = useRef<HTMLDivElement>(null);
  useMagnetic(magnetRef, { strength: 0.3, padding: 20 });
  return (
    <div ref={magnetRef} className="will-change-transform">
      {children}
    </div>
  );
}

export default function CoursesGraph() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeMobileId, setActiveMobileId] = useState<string | null>("se");

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const nodeInnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);

  useSectionHeaderReveal(headerRef);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: gsap.Context | null = null;
    let onTick: (() => void) | null = null;
    let updateDimensions: (() => void) | null = null;
    let isInitialized = false;

    const initConstellation = () => {
      if (isInitialized) return;
      isInitialized = true;

      // Coordinate proxies for GSAP to tween smoothly
      const proxies = courses.map(() => ({ x: 0, y: 0 }));

      ctx = gsap.context(() => {
        // 1. Launch smooth out-of-phase floating tweens for each node
        courses.forEach((_, i) => {
          const p = animParams[i];

          gsap.to(proxies[i], {
            x: p.ampX,
            duration: p.durationX,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: p.delayX,
          });

          gsap.to(proxies[i], {
            y: p.ampY,
            duration: p.durationY,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: p.delayY,
          });
        });

        // Cache scale factors and only recompute on resize, eliminating per-frame getBoundingClientRect() forced reflows
        let scaleX = 1;
        let scaleY = 1;

        updateDimensions = () => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          if (rect && rect.width > 0 && rect.height > 0) {
            scaleX = rect.width / 1000;
            scaleY = rect.height / 620;
          }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions, { passive: true });

        // 2. GSAP Ticker: updates text, dot, and SVG line in exact 1:1 physical lockstep
        onTick = () => {
          // Skip on mobile or when desktop constellation is hidden
          if (window.innerWidth < 768) return;

          courses.forEach((c, i) => {
            const dx = proxies[i].x;
            const dy = proxies[i].y;

            // 1. Move text anchor by exact screen displacement with ZERO CSS transition lag
            const nodeEl = nodeInnerRefs.current[i];
            if (nodeEl) {
              const screenDx = dx * scaleX;
              const screenDy = dy * scaleY;
              nodeEl.style.transform = `translate3d(${screenDx.toFixed(2)}px, ${screenDy.toFixed(2)}px, 0)`;
            }

            // 2. Exact synchronized anchor coordinate in SVG units
            const curAnchorX = c.baseAnchorX + dx;
            const curAnchorY = c.baseAnchorY + dy;

            // 3. Update SVG path: starts at curAnchor and terminates at central logo target
            const pathEl = pathRefs.current[i];
            if (pathEl) {
              const cpCurX = c.cp1X + dx * 0.4;
              const cpCurY = c.cp1Y + dy * 0.4;
              const d = `M ${curAnchorX.toFixed(1)} ${curAnchorY.toFixed(1)} C ${cpCurX.toFixed(1)} ${cpCurY.toFixed(1)}, ${c.cp2X} ${c.cp2Y}, ${c.targetX} ${c.targetY}`;
              pathEl.setAttribute("d", d);
            }

            // 4. Update anchor dot position
            const dotEl = dotRefs.current[i];
            if (dotEl) {
              dotEl.setAttribute("cx", curAnchorX.toFixed(1));
              dotEl.setAttribute("cy", curAnchorY.toFixed(1));
            }
          });
        };
      }, containerRef);
    };

    // 3. Viewport-activated ticker & lazy initializer: only runs when CoursesGraph is in or near viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isInitialized) {
            initConstellation();
          }
          if (onTick) {
            gsap.ticker.add(onTick);
          }
        } else {
          if (onTick) {
            gsap.ticker.remove(onTick);
          }
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (onTick) gsap.ticker.remove(onTick);
      if (updateDimensions) window.removeEventListener("resize", updateDimensions);
      ctx?.revert();
    };
  }, []);

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 relative isolate">
      {/* AMBIENT BRAND GLOW — echoes the constellation's central NACOS logo */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[900px] h-[500px] bg-[#274193]/[0.05] rounded-full blur-[150px] pointer-events-none -z-10"
      />

      {/* SECTION HEADER - BALANCED 2-LINE RHYTHM */}
      <div className="relative">
        <TechIconField icons={HEADER_TECH_ICONS} />
        <div ref={headerRef} className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p data-reveal="eyebrow" className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-600 font-bold mb-3 sm:mb-4">
            Faculty of Computing
          </p>
          <h2 data-reveal="heading" className="font-deacon uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-950 tracking-[-0.035em] leading-[1.08]">
            All disciplines <br className="hidden sm:inline" />
            <ConvergePhrase />
          </h2>
          <p data-reveal="subtitle" className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed mt-4 max-w-xl">
            Every computing department at Nile University branches from our central guild.
          </p>
        </div>
      </div>

      {/* DESKTOP CONSTELLATION CANVAS */}
      <div
        ref={containerRef}
        className="hidden md:block relative w-full max-w-6xl mx-auto h-[620px] lg:h-[680px] select-none"
      >
        {/* SVG CONNECTING BEZIER CURVES & DOTS */}
        <svg
          viewBox="0 0 1000 620"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          <defs>
            {/* Linear gradients that fade towards the central NACOS logo */}
            {courses.map((course) => (
              <linearGradient
                key={`grad-${course.id}`}
                id={`line-grad-${course.id}`}
                gradientUnits="userSpaceOnUse"
                x1={course.baseAnchorX}
                y1={course.baseAnchorY}
                x2={course.targetX}
                y2={course.targetY}
              >
                <stop offset="0%" stopColor="#64748b" stopOpacity="0.95" />
                <stop offset="30%" stopColor="#94a3b8" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#cbd5e1" stopOpacity="0.38" />
                <stop offset="85%" stopColor="#e2e8f0" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
              </linearGradient>
            ))}
            {courses.map((course) => (
              <linearGradient
                key={`grad-hover-${course.id}`}
                id={`line-grad-hover-${course.id}`}
                gradientUnits="userSpaceOnUse"
                x1={course.baseAnchorX}
                y1={course.baseAnchorY}
                x2={course.targetX}
                y2={course.targetY}
              >
                <stop offset="0%" stopColor="#274193" stopOpacity="1" />
                <stop offset="35%" stopColor="#274193" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#274193" stopOpacity="0.45" />
                <stop offset="88%" stopColor="#274193" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#274193" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {courses.map((course, idx) => {
            const isHovered = hoveredId === course.id;
            const isOtherHovered = hoveredId !== null && !isHovered;

            return (
              <g key={course.id}>
                {/* Curved Dotted Connecting Line (Fades smoothly towards NACOS logo) */}
                <path
                  ref={(el) => {
                    pathRefs.current[idx] = el;
                  }}
                  d={course.initialD}
                  fill="none"
                  stroke={
                    isHovered
                      ? `url(#line-grad-hover-${course.id})`
                      : `url(#line-grad-${course.id})`
                  }
                  strokeWidth={isHovered ? "2.5" : "1.5"}
                  strokeDasharray={isHovered ? "6 4" : "4 5"}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className={`transition-all duration-300 ${
                    isHovered
                      ? "animate-graph-dash-active opacity-100"
                      : isOtherHovered
                      ? "opacity-25"
                      : "opacity-100"
                  }`}
                />

                {/* Anchor Dot at Course Origin (Constant size, clean color transition, no popup ring) */}
                <circle
                  ref={(el) => {
                    dotRefs.current[idx] = el;
                  }}
                  cx={course.baseAnchorX}
                  cy={course.baseAnchorY}
                  r={3.5}
                  fill={isHovered ? "#274193" : "#94a3b8"}
                  className={`transition-colors duration-200 ${
                    isHovered
                      ? "opacity-100"
                      : isOtherHovered
                      ? "opacity-30"
                      : "opacity-80"
                  }`}
                />
              </g>
            );
          })}
        </svg>

        {/* CENTER: NACOS LOGO (AT CONVERGENCE POINT) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="NACOS Nile Logo"
            width={160}
            height={76}
            priority
            style={{ aspectRatio: "80 / 38" }}
            className="w-28 sm:w-36 md:w-44 lg:w-48 h-auto object-contain drop-shadow-sm select-none"
          />
        </div>

        {/* DISCIPLINE TYPOGRAPHY BLOCKS: RIGIDLY ANCHORED AT EXACT SVG COORDINATES */}
        {courses.map((course, idx) => {
          const isHovered = hoveredId === course.id;
          const isOtherHovered = hoveredId !== null && !isHovered;
          const isLeft = course.side === "left";

          return (
            <div
              key={course.id}
              style={{
                left: `${(course.baseAnchorX / 1000) * 100}%`,
                top: `${(course.baseAnchorY / 620) * 100}%`,
              }}
              onMouseEnter={() => setHoveredId(course.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`absolute cursor-pointer select-none group pointer-events-auto ${
                isHovered ? "z-40" : "z-20"
              }`}
            >
              {/*
                POSITIONAL SHELL: owns the -translate-y-1/2 / -translate-x-full base offset.
                GSAP must NOT touch this element — it only moves the inner gsap-float div.
              */}
              <div
                className={`relative flex flex-col -translate-y-1/2 ${
                  isLeft
                    ? "items-end text-right -translate-x-full pr-3.5 sm:pr-4"
                    : "items-start text-left pl-3.5 sm:pl-4"
                } w-[150px] xs:w-[190px] sm:w-[260px] md:w-[310px] lg:w-[340px] transition-opacity duration-300 ${
                  isOtherHovered ? "opacity-35" : "opacity-100"
                }`}
              >
                {/* MAGNETIC WRAPPER: eases toward the cursor within reach,
                    snaps back on leave — its own transform layer, see the
                    component comment above for why it can't share either
                    neighbor's. */}
                <DisciplineMagnetNode>
                {/*
                  GSAP FLOAT CHILD: ONLY this element gets style.transform from the ticker.
                  All visual content lives here.
                */}
                <div
                  ref={(el) => {
                    nodeInnerRefs.current[idx] = el;
                  }}
                  className="will-change-transform relative flex flex-col"
                  style={isLeft ? { alignItems: "flex-end" } : { alignItems: "flex-start" }}
                >
                  {/* AMBIENT RADIAL BLOOM AURA ON HOVER */}
                  <div
                    className={`absolute inset-0 -inset-x-8 bg-gradient-to-r from-[#274193]/14 via-[#274193]/06 to-transparent blur-2xl rounded-full pointer-events-none transition-opacity duration-500 -z-10 ${
                      isHovered ? "opacity-100 scale-110" : "opacity-0 scale-90"
                    }`}
                  />

                  {/* FLOATING BARE ICONS: burst out on hover, drift in mid-air, retract on leave */}
                  {course.popoutIcons.map((icon, iIdx) => (
                    <div
                      key={iIdx}
                      className={`absolute pointer-events-none z-30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-slate-400/90 ${
                        isHovered
                          ? `${icon.activeClass} opacity-100 scale-100 ${icon.floatClass}`
                          : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0"
                      }`}
                      style={{
                        transitionDelay: isHovered ? `${iIdx * 55}ms` : "0ms",
                      }}
                    >
                      {icon.svg}
                    </div>
                  ))}

                  {/* Monospace Degree Code */}
                  <span
                    className={`text-[10px] sm:text-xs md:text-sm font-mono font-bold tracking-[0.18em] uppercase transition-colors block leading-none mb-1 sm:mb-1.5 ${
                      isHovered ? "text-[#274193]" : "text-gray-400"
                    }`}
                  >
                    {course.code} · {course.degree}
                  </span>

                  {/* Course Title */}
                  <h3
                    className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-black tracking-tight leading-tight transition-all duration-300 ${
                      isHovered ? "text-[#274193] scale-[1.02]" : "text-gray-950 scale-100"
                    }`}
                  >
                    {course.name}
                  </h3>

                  {/* Sub-Focus Tag */}
                  <p
                    className={`text-xs sm:text-sm text-gray-500 font-normal leading-relaxed mt-1 hidden sm:block transition-colors ${
                      isHovered ? "text-gray-700" : "text-gray-500"
                    }`}
                  >
                    {course.focus}
                  </p>
                </div>
                </DisciplineMagnetNode>
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE INTERACTIVE DISCIPLINE FLOW (< md) — UNBOXED TYPOGRAPHY ALONG WAVY FADING LINES */}
      <div className="block md:hidden w-full max-w-md mx-auto py-2">
        {/* Top Central Logo */}
        <div className="flex flex-col items-center justify-center text-center select-none pt-2 pb-1">
          <Image
            src="/logo.svg"
            alt="NACOS Nile Logo"
            width={120}
            height={57}
            priority
            style={{ aspectRatio: "80 / 38" }}
            className="w-28 sm:w-32 h-auto object-contain drop-shadow-2xs"
          />
        </div>

        {/* Initial Wavy Drop Curve from Center Logo into Node 1 Middle (CS) */}
        <div className="w-full h-9 relative pointer-events-none overflow-visible">
          <svg viewBox="0 0 100 32" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="mobile-top-fade" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#274193" stopOpacity="0" />
                <stop offset="25%" stopColor="#274193" stopOpacity="0.45" />
                <stop offset="55%" stopColor="#274193" stopOpacity="0.85" />
                <stop offset="80%" stopColor="#cbd5e1" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 50 0 C 50 16, 40 16, 40 32"
              fill="none"
              stroke="url(#mobile-top-fade)"
              strokeWidth="1.5"
              strokeDasharray="4 5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="opacity-80"
            />
          </svg>
        </div>

        {/* Departments on the Wavy Line (Spaced-Out Zigzag, Lines to Middle of Text) */}
        <div className="relative w-full">
          {courses.map((course, idx) => {
            const isSelected = activeMobileId === course.id;
            const isLeft = idx % 2 === 0;
            const hasNext = idx < courses.length - 1;
            const nextCourse = hasNext ? courses[idx + 1] : null;
            const isNextSelected = nextCourse ? activeMobileId === nextCourse.id : false;
            const isCurveActive = isSelected || isNextSelected;

            return (
              <div key={course.id} className="relative w-full">
                {/* Department Typography in a Comfortable Zigzag Offset */}
                <div
                  className={`relative w-full flex ${
                    isLeft ? "justify-start pl-3.5 sm:pl-7" : "justify-end pr-3.5 sm:pr-7"
                  }`}
                >
                  <div
                    onClick={() => setActiveMobileId(isSelected ? null : course.id)}
                    className="relative w-[80%] sm:w-[76%] text-center cursor-pointer select-none py-1.5 group transition-all duration-300"
                  >
                    {/* AMBIENT RADIAL BLOOM AURA ON SELECTION */}
                    <div
                      className={`absolute inset-0 -inset-x-4 bg-gradient-to-r from-[#274193]/14 via-[#274193]/06 to-transparent blur-xl rounded-full pointer-events-none transition-opacity duration-500 -z-10 ${
                        isSelected ? "opacity-100 scale-110" : "opacity-0 scale-90"
                      }`}
                    />

                    {/* FLOATING BARE ICONS: burst out on selection, drift in mid-air with animate-float */}
                    {course.popoutIcons.map((icon, iIdx) => (
                      <div
                        key={iIdx}
                        className={`absolute pointer-events-none z-30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-[#274193] ${
                          isSelected
                            ? `${icon.activeClass} opacity-100 scale-100 ${icon.floatClass}`
                            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 pointer-events-none"
                        }`}
                        style={{
                          transitionDelay: isSelected ? `${iIdx * 55}ms` : "0ms",
                        }}
                      >
                        <div className="w-6 h-6 flex items-center justify-center drop-shadow-xs">
                          {icon.svg}
                        </div>
                      </div>
                    ))}

                    {/* Monospace Degree Code */}
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-bold tracking-[0.16em] uppercase block leading-none mb-1 transition-colors ${
                        isSelected ? "text-[#274193]" : "text-gray-400"
                      }`}
                    >
                      {course.code} · {course.degree}
                    </span>

                    {/* Department Title */}
                    <h3
                      className={`text-base sm:text-lg font-black tracking-tight leading-tight transition-colors ${
                        isSelected ? "text-[#274193]" : "text-gray-950"
                      }`}
                    >
                      {course.name}
                    </h3>

                    {/* Focus Subtitle */}
                    <p className="text-[11px] sm:text-xs text-gray-500 font-normal leading-relaxed mt-0.5 max-w-xs mx-auto">
                      {course.focus}
                    </p>
                  </div>
                </div>

                {/* Serpentine Wavy Dotted Curve Weaving Between Middle of Department i and Middle of Department i+1 */}
                {hasNext && (
                  <div className="w-full h-11 sm:h-12 relative my-[-2px] pointer-events-none overflow-visible">
                    <svg viewBox="0 0 100 42" preserveAspectRatio="none" className="w-full h-full">
                      <defs>
                        {/* Symmetrical gradient: both head (0%) and tail (100%) fade seamlessly */}
                        <linearGradient
                          id={`wave-fade-${idx}`}
                          x1="50%"
                          y1="0%"
                          x2="50%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
                          <stop offset="20%" stopColor="#cbd5e1" stopOpacity="0.35" />
                          <stop offset="50%" stopColor="#64748b" stopOpacity="0.85" />
                          <stop offset="80%" stopColor="#cbd5e1" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
                        </linearGradient>

                        {/* Active symmetrical gradient: vibrant Nile blue body with faded head and tail */}
                        <linearGradient
                          id={`wave-fade-active-${idx}`}
                          x1="50%"
                          y1="0%"
                          x2="50%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#274193" stopOpacity="0" />
                          <stop offset="20%" stopColor="#274193" stopOpacity="0.45" />
                          <stop offset="50%" stopColor="#274193" stopOpacity="0.95" />
                          <stop offset="80%" stopColor="#274193" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#274193" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d={
                          isLeft
                            ? "M 40 0 C 40 24, 60 18, 60 42"
                            : "M 60 0 C 60 24, 40 18, 40 42"
                        }
                        fill="none"
                        stroke={
                          isCurveActive
                            ? `url(#wave-fade-active-${idx})`
                            : `url(#wave-fade-${idx})`
                        }
                        strokeWidth={isCurveActive ? "2" : "1.5"}
                        strokeDasharray={isCurveActive ? "6 4" : "4 5"}
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        className={
                          isCurveActive
                            ? "animate-graph-dash-active opacity-100"
                            : "opacity-80"
                        }
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
