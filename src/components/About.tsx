"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

interface Discipline {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DISCIPLINES: Discipline[] = [
  {
    id: "cs",
    title: "Computer Science",
    description: "Algorithmic thinking, computational theory, artificial intelligence, and core computing architecture.",
    icon: (
      <svg
        className="w-6 h-6 text-nacos-accent-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
      </svg>
    ),
  },
  {
    id: "se",
    title: "Software Engineering",
    description: "Designing, engineering, and maintaining scalable full-stack web, mobile, and cloud software systems.",
    icon: (
      <svg
        className="w-6 h-6 text-nacos-accent-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    id: "cyber",
    title: "Cyber Security",
    description: "Securing modern infrastructure through ethical hacking, cryptography, threat analysis, and digital defense.",
    icon: (
      <svg
        className="w-6 h-6 text-nacos-accent-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "it",
    title: "Information Technology",
    description: "Managing enterprise IT infrastructure, cloud deployments, network architecture, and system operations.",
    icon: (
      <svg
        className="w-6 h-6 text-nacos-accent-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
  },
  {
    id: "is",
    title: "Information Systems",
    description: "Bridging executive business strategy with technological solutions to optimize digital transformation.",
    icon: (
      <svg
        className="w-6 h-6 text-nacos-accent-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
      </svg>
    ),
  },
  {
    id: "ds",
    title: "Data Science",
    description: "Unlocking actionable insights through big data analytics, statistical modeling, and predictive intelligence.",
    icon: (
      <svg
        className="w-6 h-6 text-nacos-accent-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isUnderlineDrawn, setIsUnderlineDrawn] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [isPointerDown, setIsPointerDown] = useState(false);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const hasMovedRef = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsUnderlineDrawn(true);
          if (headingRef.current) {
            observer.unobserve(headingRef.current);
          }
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = headingRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(DISCIPLINES.length / itemsPerPage);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  // Keep currentIndex valid when itemsPerPage changes
  useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(Math.max(0, totalPages - 1));
    }
  }, [itemsPerPage, totalPages, currentIndex]);

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

    if (hasMovedRef.current && Math.abs(deltaX) > 25) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-nacos-dark-alt px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <ScrollReveal className="max-w-2xl">
            <h2
              ref={headingRef}
              className="text-2xl sm:text-4xl font-semibold tracking-normal text-white mb-4 font-display"
            >
              Computing Degrees at{" "}
              <span className="relative inline-block pb-1">
                <span>Nile University of Nigeria</span>
                <span
                  className="absolute bottom-0 left-0 h-[3px] rounded-full bg-gradient-to-r from-nacos-accent to-nacos-accent-light transition-all duration-700 ease-out pointer-events-none"
                  style={{
                    width: isUnderlineDrawn ? "100%" : "0%",
                    transitionDelay: isUnderlineDrawn ? "400ms" : "0ms",
                  }}
                />
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Organized under the Department of Computer Science (Faculty of Natural &amp; Applied Sciences) at Nile University of Nigeria, NACOS Nile supports students across all six computing degree specializations.
            </p>
          </ScrollReveal>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous Disciplines"
              className="w-11 h-11 rounded-full bg-white/[0.04] hover:bg-nacos-accent border border-white/10 hover:border-nacos-accent text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Disciplines"
              className="w-11 h-11 rounded-full bg-white/[0.04] hover:bg-nacos-accent border border-white/10 hover:border-nacos-accent text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slider Track */}
        <div
          id="disciplines"
          className="overflow-hidden rounded-2xl p-1 -m-1 scroll-mt-24 cursor-grab active:cursor-grabbing select-none touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% + 1.5rem)))`,
            }}
          >
            {DISCIPLINES.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0"
              >
                <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 transition-colors duration-200 flex flex-col justify-between">
                  <div>
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-nacos-blue/15 border border-nacos-accent/25 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-nacos-accent-light transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-3 mt-10 mb-16 sm:mb-20">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide page ${idx + 1}`}
              className="min-w-[28px] min-h-[28px] p-1 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-nacos-accent group cursor-pointer"
            >
              <span
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-nacos-accent"
                    : "w-2.5 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>

        {/* About NACOS Nile Chapter Overview Component (Placed after Carousel) */}
        <ScrollReveal>
          <div className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors duration-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display tracking-tight">
              About NACOS Nile Chapter
            </h2>

            {/* Compact Preview State */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl">
              The <strong className="text-white">NACOS Nile Chapter</strong> serves as the premier student-led tech community at Nile University of Nigeria, operating under the national umbrella body{" "}
              <a
                href="https://nacos.org.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-nacos-accent-light underline underline-offset-4 decoration-nacos-accent-light/40 hover:text-white transition-colors"
              >
                NACOS National
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>{" "}
              and integrated with{" "}
              <a
                href="https://nileuniversity.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-nacos-accent-light underline underline-offset-4 decoration-nacos-accent-light/40 hover:text-white transition-colors"
              >
                Nile University
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>{" "}
              to empower computing students through digital innovation and academic excellence.
            </p>

            {/* Fast, Optimized Expanded State Content */}
            <div
              id="nacos-overview-details"
              className={`grid transition-all duration-200 ease-out ${
                isOverviewExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="h-px bg-white/10 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* NACOS National Card */}
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-nacos-blue/20 border border-nacos-accent/30 flex items-center justify-center text-nacos-accent-light shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <h3 className="text-base font-semibold text-white font-display">NACOS National</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      The Nigeria Association of Computing Students (NACOS) is the umbrella body for computing and technology students across Nigeria, actively fostering digital literacy, technical capability, innovation, and national tech advancement.
                    </p>
                  </div>

                  {/* Nile Chapter Legacy Card */}
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-nacos-blue/20 border border-nacos-accent/30 flex items-center justify-center text-nacos-accent-light shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <h3 className="text-base font-semibold text-white font-display">Nile Chapter Legacy</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
                      Established in <strong className="text-white">2023</strong> under the Department of Computer Science (Faculty of Natural & Applied Sciences), the chapter bridges academic theory and industry reality across six computing disciplines:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Computer Science", "Software Engineering", "Cybersecurity", "IT", "Information Systems", "Data Science"].map((discipline) => (
                        <span key={discipline} className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-xs text-gray-300">
                          {discipline}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Toggle Button */}
            <div className="mt-5 flex items-center">
              <button
                onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                aria-expanded={isOverviewExpanded}
                aria-controls="nacos-overview-details"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-white transition-all duration-150 active:scale-95 cursor-pointer"
              >
                <span>{isOverviewExpanded ? "Show Less ↑" : "Read Full Overview ↓"}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
