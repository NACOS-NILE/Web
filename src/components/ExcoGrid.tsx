"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import ExcoCard, { ExcoCardProps } from "./ExcoCard";
import ScrollReveal from "./ScrollReveal";

export type ExcoMember = ExcoCardProps;

const EXCO_MEMBERS: ExcoMember[] = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    quote: "Passionate about building active student communities.",
    imageSrc: "/excos-pics/president.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 20%" },
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    quote: "Advocating for student welfare and academic excellence.",
    imageSrc: "/excos-pics/vp.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 15%" },
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    quote: "Keeping the engines running smoothly.",
    imageSrc: "/excos-pics/sg.jpg",
    imageStyle: {
      objectFit: "cover",
      objectPosition: "38% center",
      transform: "scale(1.15)",
    },
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    quote: "Making the important financial decisions.",
    imageSrc: "/excos-pics/fc.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 25%" },
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    quote: "Applying creativity to communication.",
    imageSrc: "/excos-pics/pro.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 15%" },
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    quote: "Driving technical growth and leading coding workshops for Nile computing students.",
    imageSrc: "/excos-pics/dtd.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 15%" },
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    quote: "Managing the day-to-day operations of NACOS Nile.",
    imageSrc: "/excos-pics/provost.jpg",
    imageStyle: {
      objectFit: "cover",
      transform: "rotate(90deg) scale(1.35)",
    },
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    quote: "Prioritizing social activities and events.",
    imageSrc: "/excos-pics/socials.jpg",
    imageStyle: {
      objectFit: "cover",
      transform: "rotate(-90deg) scale(1.35)",
    },
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    quote: "Your well-being is my priority.",
    imageSrc: "/excos-pics/welfare.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 20%" },
  },
];

export default function ExcoGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const hasMovedRef = useRef<boolean>(false);

  const totalMembers = EXCO_MEMBERS.length;

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? totalMembers - 1 : prev - 1));
  }, [totalMembers]);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev >= totalMembers - 1 ? 0 : prev + 1));
  }, [totalMembers]);

  // Reliable Auto-Scroll Effect (3000ms delay, pauses only while holding pointer)
  useEffect(() => {
    if (isPointerDown) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3200);

    return () => clearInterval(timer);
  }, [isPointerDown, nextSlide]);

  // Pointer Handlers (Works seamlessly across Mouse & Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsPointerDown(true);
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
    hasMovedRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown) return;
    currentXRef.current = e.clientX;
    if (Math.abs(e.clientX - startXRef.current) > 10) {
      hasMovedRef.current = true;
    }
  };

  const handlePointerUp = () => {
    if (!isPointerDown) return;
    setIsPointerDown(false);
    const deltaX = currentXRef.current - startXRef.current;

    if (hasMovedRef.current && Math.abs(deltaX) > 20) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  const activeMember = EXCO_MEMBERS[activeIndex];

  return (
    <section
      id="excos"
      className="relative py-12 sm:py-16 bg-nacos-dark px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-white mb-2 font-display">
              Executive Council Leadership
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Elected student officers representing the NACOS Nile Chapter for the 2025/2026 academic session.
            </p>
          </ScrollReveal>
        </div>

        {/* 3D Focal Cards Stage with Outer Side Arrow Navigation */}
        <div className="relative py-2 px-2 flex items-center justify-between max-w-5xl mx-auto select-none">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Student Officer"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1b2537] hover:bg-nacos-accent border border-white/20 hover:border-nacos-accent text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xl shrink-0 z-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Center 3-Card Stage */}
          <div
            className="flex items-center justify-center gap-2 sm:gap-6 md:gap-8 min-h-[260px] sm:min-h-[320px] md:min-h-[360px] w-full mx-auto [perspective:1000px] [transform-style:preserve-3d] overflow-hidden py-1 cursor-grab active:cursor-grabbing touch-pan-y"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {[-1, 0, 1].map((offset) => {
              const memberIndex =
                (activeIndex + offset + totalMembers) % totalMembers;
              const member = EXCO_MEMBERS[memberIndex];

              return (
                <ExcoCard
                  key={`${member.name}-${offset}`}
                  name={member.name}
                  role={member.role}
                  quote={member.quote}
                  imageSrc={member.imageSrc}
                  imageStyle={member.imageStyle}
                  isActive={offset === 0}
                  offset={offset}
                  onClick={() => {
                    if (!hasMovedRef.current) {
                      setActiveIndex(memberIndex);
                    }
                  }}
                />
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Student Officer"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1b2537] hover:bg-nacos-accent border border-white/20 hover:border-nacos-accent text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xl shrink-0 z-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Active Member Spotlight Details Below Center Photo (Matching Reference Image) */}
        <div className="mt-4 text-center max-w-xl mx-auto flex flex-col items-center">
          <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight mb-1 font-display">
            {activeMember.name}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-nacos-accent-light mb-3 tracking-wide">
            {activeMember.role}
          </p>
          <blockquote className="text-sm sm:text-base italic text-gray-300 leading-relaxed font-normal p-4 rounded-xl bg-white/[0.03] border border-white/10 w-full shadow-lg">
            &ldquo;{activeMember.quote}&rdquo;
          </blockquote>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {EXCO_MEMBERS.map((member, idx) => (
            <button
              key={member.name}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Show ${member.name}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-nacos-accent"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
