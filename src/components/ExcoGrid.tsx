"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
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
    linkedinUrl: "https://www.linkedin.com/in/zikora-nwafor-/",
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    quote: "Advocating for student welfare and academic excellence.",
    imageSrc: "/excos-pics/vp.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 15%" },
    linkedinUrl: "https://www.linkedin.com/in/abdullah-ali-ahmad-8278082a0/",
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
    linkedinUrl: "https://www.linkedin.com/in/sheila-jato-a83991352/",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    quote: "Making the important financial decisions.",
    imageSrc: "/excos-pics/fc.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 25%" },
    linkedinUrl: "https://www.linkedin.com/in/amira-ibrahim-jibril-4a7326341/",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    quote: "Applying creativity to communication.",
    imageSrc: "/excos-pics/pro.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 15%" },
    linkedinUrl: "https://www.linkedin.com/in/elvis-eshiebor-028422239/",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    quote: "Driving technical growth and leading coding workshops for Nile computing students.",
    imageSrc: "/excos-pics/dtd.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 15%" },
    linkedinUrl: "https://www.linkedin.com/in/kamsi-ivoke/",
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
    linkedinUrl: "https://www.linkedin.com/in/zubaida-abdulazeez-king-257a2b31b/",
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
    linkedinUrl: "https://www.linkedin.com/in/ahmed-saidat-17455030b/",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    quote: "Your well-being is my priority.",
    imageSrc: "/excos-pics/welfare.jpg",
    imageStyle: { objectFit: "cover", objectPosition: "center 20%" },
    linkedinUrl: "https://www.linkedin.com/in/danielle-ekunwe-726325335/",
  },
];

export default function ExcoGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPointerDown, setIsPointerDown] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const hasMovedRef = useRef<boolean>(false);
  const isTransitioningRef = useRef<boolean>(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const totalMembers = EXCO_MEMBERS.length;
  const TRANSITION_LOCK_MS = 450;
  const PAUSE_RESUME_DELAY_MS = 4500;

  // Reset manual pause timer (4.5s delay before resuming auto-scroll)
  const resetAutoScrollPause = useCallback(() => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, PAUSE_RESUME_DELAY_MS);
  }, [PAUSE_RESUME_DELAY_MS]);

  // Unified transition handler with lock guard
  const goToSlide = useCallback(
    (targetIndex: number | ((prev: number) => number), isManual: boolean = false) => {
      if (isTransitioningRef.current) return;

      if (isManual) {
        resetAutoScrollPause();
      }

      isTransitioningRef.current = true;
      setActiveIndex((prev) => {
        if (typeof targetIndex === "function") {
          return targetIndex(prev);
        }
        return targetIndex;
      });

      setTimeout(() => {
        isTransitioningRef.current = false;
      }, TRANSITION_LOCK_MS);
    },
    [resetAutoScrollPause]
  );

  const prevSlide = useCallback(() => {
    goToSlide((prev) => (prev === 0 ? totalMembers - 1 : prev - 1), true);
  }, [goToSlide, totalMembers]);

  const nextSlide = useCallback(() => {
    goToSlide((prev) => (prev >= totalMembers - 1 ? 0 : prev + 1), true);
  }, [goToSlide, totalMembers]);

  // Auto-scroll Effect (3200ms interval, pauses on drag, manual navigation, or prefers-reduced-motion)
  useEffect(() => {
    if (isPointerDown || isPaused) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      setActiveIndex((prev) => (prev >= totalMembers - 1 ? 0 : prev + 1));
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, TRANSITION_LOCK_MS);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPointerDown, isPaused, totalMembers]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  // Pointer Handlers (Works seamlessly across Mouse & Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    resetAutoScrollPause();
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
      className="relative py-8 sm:py-12 bg-nacos-dark px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-6">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-normal text-white mb-1.5 font-display">
              Executive Council Leadership
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Elected student officers representing the NACOS Nile Chapter for the 2025/2026 academic session.
            </p>
          </ScrollReveal>
        </div>

        {/* 3D Focal Cards Stage with Outer Side Arrow Navigation */}
        <div className="relative py-1 px-1 flex items-center justify-between max-w-4xl mx-auto select-none">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Student Officer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b2537] hover:bg-nacos-accent border border-white/20 hover:border-nacos-accent text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg shrink-0 z-30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Center 3-Card Stage */}
          <div
            className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 min-h-[200px] sm:min-h-[240px] md:min-h-[260px] w-full mx-auto [perspective:1000px] [transform-style:preserve-3d] overflow-hidden py-1 cursor-grab active:cursor-grabbing touch-pan-y"
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
                  linkedinUrl={member.linkedinUrl}
                  isActive={offset === 0}
                  offset={offset}
                  onClick={() => {
                    if (!hasMovedRef.current) {
                      if (memberIndex !== activeIndex) {
                        goToSlide(memberIndex, true);
                      } else if (member.linkedinUrl) {
                        window.open(member.linkedinUrl, "_blank", "noopener,noreferrer");
                      }
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
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b2537] hover:bg-nacos-accent border border-white/20 hover:border-nacos-accent text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg shrink-0 z-30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Active Member Spotlight Details Below Center Photo */}
        <div className="mt-3 text-center max-w-lg mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-1.5 mb-0.5">
            <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight font-display">
              {activeMember.name}
            </h3>
            {activeMember.linkedinUrl && (
              <a
                href={activeMember.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Connect with ${activeMember.name} on LinkedIn`}
                aria-label={`Connect with ${activeMember.name} on LinkedIn`}
                className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#0A66C2] hover:bg-[#004182] text-white transition-all duration-200 hover:scale-110 shadow-sm shrink-0"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            )}
          </div>
          <p className="text-xs font-medium text-nacos-accent-light mb-2 tracking-wide">
            {activeMember.role}
          </p>
          <blockquote className="text-xs sm:text-sm italic text-gray-300 leading-relaxed font-normal p-3 rounded-xl bg-white/[0.03] border border-white/10 w-full shadow-md">
            &ldquo;{activeMember.quote}&rdquo;
          </blockquote>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-4">
          {EXCO_MEMBERS.map((member, idx) => (
            <button
              key={member.name}
              onClick={() => {
                if (idx !== activeIndex) {
                  goToSlide(idx, true);
                }
              }}
              aria-label={`Show ${member.name}`}
              className="min-w-[24px] min-h-[24px] p-1 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-nacos-accent group cursor-pointer"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-6 bg-nacos-accent"
                    : "w-2 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>

        {/* View Full EXCO Directory Button */}
        <div className="mt-5 text-center">
          <Link
            href="/excos"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-nacos-accent/50 transition-all duration-200 group shadow-sm"
          >
            <span>Meet the Executive Council</span>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
