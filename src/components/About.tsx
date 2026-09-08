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
  const headingRef = useRef<HTMLHeadingElement>(null);

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
              className="text-2xl sm:text-4xl font-semibold tracking-normal text-white mb-4"
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
        <div id="disciplines" className="overflow-hidden rounded-2xl p-1 -m-1 scroll-mt-24">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
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
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide page ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
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
