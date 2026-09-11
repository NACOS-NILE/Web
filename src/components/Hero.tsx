"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface FloatingImageProps {
  src: string;
  alt: string;
  caption: string;
  href: string;
  className: string;
  parallaxFactor: number;
  rotate: number;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}

function FloatingCard({
  src,
  alt,
  caption,
  href,
  className,
  parallaxFactor,
  rotate,
  smoothX,
  smoothY,
}: FloatingImageProps) {
  const x = useTransform(smoothX, (val) => val * parallaxFactor);
  const y = useTransform(smoothY, (val) => val * parallaxFactor);

  return (
    <motion.div
      style={{ x, y }}
      className={`absolute ${className} rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0d1021]/80 backdrop-blur-sm transition-all duration-300 hidden sm:block pointer-events-auto`}
    >
      <Link
        href={href}
        style={{ transform: `rotate(${rotate}deg)` }}
        className="block relative aspect-[4/3] w-full overflow-hidden group cursor-pointer"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 30vw, 20vw"
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-2 left-2 right-2 text-center">
          <span className="text-[9px] font-mono tracking-widest text-[#60a5fa] uppercase px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 group-hover:bg-[#60a5fa] group-hover:text-[#070913] transition-colors">
            {caption} ↗
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

const FLOATING_IMAGES = [
  {
    id: 1,
    src: "/gallery/faculty.jpeg",
    alt: "Nile University Faculty & Academic Leadership",
    caption: "Faculty Leadership",
    href: "#on-the-ground",
    className:
      "top-[6%] md:top-[8%] left-[2%] sm:left-[4%] lg:left-[6%] w-[30%] sm:w-[24%] lg:w-[19%] max-w-[240px]",
    parallaxFactor: 35,
    rotate: -4,
  },
  {
    id: 2,
    src: "/gallery/6th-inaugural-lecture.jpg",
    alt: "Nile University 6th Inaugural Lecture",
    caption: "Academic Assemblies",
    href: "#on-the-ground",
    className:
      "top-[12%] md:top-[10%] right-[3%] sm:right-[5%] lg:right-[7%] w-[28%] sm:w-[22%] lg:w-[18%] max-w-[220px]",
    parallaxFactor: -40,
    rotate: 5,
  },
  {
    id: 3,
    src: "/gallery/workshop-1.jpg",
    alt: "Nile Computing Students Workshop & Coding",
    caption: "Student Collaboration",
    href: "#initiatives",
    className:
      "bottom-[14%] md:bottom-[12%] left-[3%] sm:left-[6%] lg:left-[8%] w-[30%] sm:w-[24%] lg:w-[19%] max-w-[230px]",
    parallaxFactor: 28,
    rotate: 3,
  },
  {
    id: 4,
    src: "/gallery/stem-con.jpg",
    alt: "Nile Tech Week & StemCon Exhibition",
    caption: "Tech Week Hackathon",
    href: "#initiatives",
    className:
      "bottom-[6%] md:bottom-[5%] left-[50%] -translate-x-1/2 w-[32%] sm:w-[24%] lg:w-[18%] max-w-[230px]",
    parallaxFactor: -25,
    rotate: -2,
  },
  {
    id: 5,
    src: "/gallery/lab.jpeg",
    alt: "Ubangi Computing Laboratory & Workspaces",
    caption: "Innovation Lab",
    href: "#disciplines",
    className:
      "top-[54%] md:top-[50%] right-[2%] sm:right-[4%] lg:right-[5%] w-[28%] sm:w-[22%] lg:w-[18%] max-w-[220px]",
    parallaxFactor: 45,
    rotate: 6,
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for magnetic parallax floating effect
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center bg-[#070913] text-[#f4f2ee] overflow-hidden pt-28 pb-16 px-4 select-none"
    >
      {/* Floating Constellation Images (Real Nile University & Computing Photography) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {FLOATING_IMAGES.map((img) => (
          <FloatingCard
            key={img.id}
            src={img.src}
            alt={img.alt}
            caption={img.caption}
            href={img.href}
            className={img.className}
            parallaxFactor={img.parallaxFactor}
            rotate={img.rotate}
            smoothX={smoothX}
            smoothY={smoothY}
          />
        ))}
      </div>

      {/* Center Editorial Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center px-4">
        {/* Top Collegiate Chapter Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-6 bg-[#60a5fa]/50" />
          <span className="text-[12px] md:text-[13px] font-mono uppercase tracking-[0.25em] text-[#60a5fa] font-semibold">
            NACOS Nile University Chapter
          </span>
          <span className="h-px w-6 bg-[#60a5fa]/50" />
        </motion.div>

        {/* Kinetic Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-rector text-[46px] sm:text-[72px] md:text-[96px] lg:text-[112px] font-normal tracking-[-0.03em] uppercase leading-[0.92] text-[#f4f2ee] mb-8 max-w-3xl"
        >
          Orchestrating<br />
          <span className="text-[#60a5fa] italic">
            Excellence
          </span>
        </motion.h1>

        {/* Subtitle Editorial Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[15px] sm:text-[18px] md:text-[20px] font-light text-white/70 max-w-xl leading-relaxed mb-10"
        >
          Empowering Nile University computing students across 6 majors to innovate, build real software systems, and lead the future of technology in Africa.
        </motion.p>

        {/* Action Buttons (Geometric Chamfered Silhouette) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Button */}
          <Link
            href="#community"
            className="cut-corner inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#60a5fa] hover:bg-white text-[#070913] font-bold text-[13px] font-mono uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer w-full sm:w-auto whitespace-nowrap"
          >
            <span>Join Student Hub</span>
            <ArrowUpRight className="w-4 h-4 text-[#070913] shrink-0" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="#disciplines"
            className="cut-corner group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/[0.05] hover:bg-[#60a5fa] text-[#f4f2ee] hover:text-[#070913] font-medium text-[13px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer w-full sm:w-auto whitespace-nowrap"
          >
            <span>Explore Disciplines</span>
            <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-[#070913] shrink-0" />
          </Link>
        </motion.div>

        {/* Chapter Metric Strip (Fully Clickable to Sections) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 mt-16 pt-10 border-t border-white/10 w-full max-w-2xl"
        >
          <Link href="#community" className="group text-left transition-transform hover:-translate-y-1 block cursor-pointer">
            <div className="text-[24px] sm:text-[30px] font-black text-[#f4f2ee] group-hover:text-[#60a5fa] transition-colors">2,500+</div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">Students ↗</div>
          </Link>
          <Link href="#disciplines" className="group text-left transition-transform hover:-translate-y-1 block cursor-pointer">
            <div className="text-[24px] sm:text-[30px] font-black text-[#60a5fa] group-hover:text-white transition-colors">6</div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">Disciplines ↗</div>
          </Link>
          <Link href="#initiatives" className="group text-left transition-transform hover:-translate-y-1 block cursor-pointer">
            <div className="text-[24px] sm:text-[30px] font-black text-[#f4f2ee] group-hover:text-[#60a5fa] transition-colors">Annual</div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">Tech Week ↗</div>
          </Link>
          <Link href="#excos" className="group text-left transition-transform hover:-translate-y-1 block cursor-pointer">
            <div className="text-[24px] sm:text-[30px] font-black text-[#f4f2ee] group-hover:text-[#60a5fa] transition-colors">9</div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">Officers ↗</div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
