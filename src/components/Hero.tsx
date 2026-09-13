"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  labels: string[];
  cards: Array<{ title: string; description: string }>;
};

const slides: HeroSlide[] = [
  {
    eyebrow: "Student community",
    title: "Learn, connect and grow.",
    description: "With fellow computing students at Nile University.",
    labels: ["CS", "SE", "CYBER", "DATA"],
    cards: [
      { title: "Learn", description: "Workshops & tutorials" },
      { title: "Build", description: "Projects & hackathons" },
      { title: "Connect", description: "Peers & industry" },
    ],
  },
  {
    eyebrow: "Student builders",
    title: "Turn ideas into projects.",
    description: "Through workshops, hackathons and collaboration.",
    labels: ["CODE", "AI", "WEB", "DATA"],
    cards: [
      { title: "Workshops", description: "Learn by doing" },
      { title: "Projects", description: "Build together" },
      { title: "Hackathons", description: "Create solutions" },
    ],
  },
  {
    eyebrow: "Industry & peers",
    title: "Create your next opportunity.",
    description: "Develop skills and connect with the wider industry.",
    labels: ["PEERS", "MENTORS", "CAREER", "NETWORK"],
    cards: [
      { title: "Mentorship", description: "Guidance that helps" },
      { title: "Careers", description: "Find your path" },
      { title: "Industry", description: "Meet professionals" },
    ],
  },
];

const AUTOPLAY_DELAY = 5000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const slide = slides[activeSlide];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [prefersReducedMotion]);

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX =
      event.changedTouches[0]?.clientX ?? touchStartX.current;

    const distance = endX - touchStartX.current;

    if (Math.abs(distance) > 50) {
      showSlide(activeSlide + (distance < 0 ? 1 : -1));
    }

    touchStartX.current = null;
  };

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-28 top-12 h-72 w-72 rounded-full bg-[#dce7ff] blur-3xl opacity-70" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#eef4ff] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[70%] -translate-x-1/2 bg-[#edf3ff] blur-3xl opacity-70" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl min-w-0 items-center gap-10 px-5 pb-16 pt-12 sm:gap-12 sm:px-6 sm:pb-22 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-18">
        {/* Left side */}
        <div className="min-w-0 max-w-2xl">
          <div className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-[#d8e1fb] bg-[#f5f8ff] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#274193]">
            <span
              className="h-2 w-2 rounded-full bg-[#3b82f6]"
              aria-hidden="true"
            />
            NACOS Nile Chapter
          </div>

          <h1
            id="hero-heading"
            className="hero-fade-up-delay-1 mt-6 max-w-[15ch] text-balance text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#0d1733] sm:text-5xl lg:mt-7 lg:text-[3.5rem] lg:leading-[1.06] xl:text-[4rem] 2xl:text-[4.25rem]"
          >
            Building the next generation of{" "}
            <span className="text-[#274193]">
              computing innovators.
            </span>
          </h1>

          <p className="hero-fade-up-delay-2 mt-6 max-w-xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
            A student-led community at Nile University where computing
            students learn, build, connect, and create opportunities together.
          </p>

          <div className="hero-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#community"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#274193] px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(39,65,147,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20357c] focus:outline-none focus:ring-2 focus:ring-[#274193] focus:ring-offset-2"
            >
              Join the Community
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-bold text-[#0d1733] transition hover:border-[#aebce2] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#274193] focus:ring-offset-2"
            >
              Explore NACOS
            </a>
          </div>

          <div className="hero-fade-up-delay-4 mt-9 flex max-w-full flex-wrap items-center gap-x-4 gap-y-3 text-xs font-semibold uppercase tracking-[0.13em] text-slate-400 sm:mt-10 sm:gap-x-6">
            <span>Learn</span>
            <span
              className="h-1 w-1 rounded-full bg-slate-300"
              aria-hidden="true"
            />
            <span>Build</span>
            <span
              className="h-1 w-1 rounded-full bg-slate-300"
              aria-hidden="true"
            />
            <span>Connect</span>
            <span
              className="h-1 w-1 rounded-full bg-slate-300"
              aria-hidden="true"
            />
            <span>Grow</span>
          </div>
        </div>

        {/* Right side */}
        <div className="hero-fade-up-delay-2 min-w-0 w-full">
          <div className="relative mx-auto w-full max-w-[560px] min-w-0">
            {/* Carousel controls */}
            <div
              className="absolute right-3 top-3 z-50 flex items-center gap-0.5 rounded-full border border-white/90 bg-white/95 p-1 shadow-[0_8px_24px_rgba(39,65,147,0.14)] backdrop-blur sm:right-7 sm:top-7"
              role="tablist"
              aria-label="Choose a community highlight"
            >
              {slides.map((item, index) => {
                const isActive = index === activeSlide;

                return (
                  <button
                    key={item.eyebrow}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show slide ${index + 1}: ${item.eyebrow}`}
                    onClick={() => showSlide(index)}
                    className="relative z-50 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-[#274193] focus:ring-offset-2"
                  >
                    <span
                      className={`rounded-full transition-all duration-200 motion-reduce:transition-none ${
                        isActive
                          ? "h-2.5 w-5 bg-[#274193] shadow-[0_1px_3px_rgba(39,65,147,0.28)]"
                          : "h-1.5 w-1.5 bg-[#aec4ee] hover:bg-[#60a5fa]"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {/* Main hero card */}
            <div
              className="hero-card relative mx-auto aspect-square w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-[#dce5f8] bg-gradient-to-br from-[#f8fbff] via-white to-[#eaf0ff] p-3.5 shadow-[0_30px_80px_rgba(39,65,147,0.13)] min-[381px]:rounded-[1.75rem] min-[381px]:p-4 sm:rounded-[2rem] sm:p-7"
              role="region"
              aria-roledescription="carousel"
              aria-label="NACOS Nile community highlights"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  showSlide(activeSlide + 1);
                }

                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  showSlide(activeSlide - 1);
                }
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: "pan-y" }}
            >
              {/* Grid */}
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(39,65,147,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(39,65,147,0.06)_1px,transparent_1px)] bg-[size:28px_28px] sm:bg-[size:34px_34px]"
                aria-hidden="true"
              />

              {/* Soft glows */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d8e5ff] blur-3xl min-[381px]:h-52 min-[381px]:w-52 sm:-right-20 sm:-top-20 sm:h-60 sm:w-60"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#e8edff] blur-3xl min-[381px]:h-48 min-[381px]:w-48 sm:-bottom-20 sm:-left-16 sm:h-56 sm:w-56"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-full min-h-0 flex-col justify-between">
                {/* Slide heading */}
                <div
                  key={`header-${activeSlide}`}
                  className="hero-slide-content min-w-0 pr-24 min-[381px]:pr-28 sm:pr-36"
                >
                  <p className="inline-flex max-w-full rounded-full border border-white/80 bg-white/85 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-[#274193] shadow-sm backdrop-blur min-[381px]:px-3 min-[381px]:text-[10px] sm:px-3.5 sm:py-2 sm:text-[11px]">
                    {slide.eyebrow}
                  </p>

                  <p className="mt-2.5 max-w-[15rem] text-[11px] font-bold tracking-[-0.015em] text-[#0d1733] min-[381px]:mt-3 min-[381px]:max-w-[18rem] min-[381px]:text-xs sm:text-sm">
                    {slide.title}
                  </p>

                  <p className="mt-1 max-w-[15rem] text-[10px] leading-4 text-slate-500 min-[381px]:max-w-[17rem] min-[381px]:text-[11px] sm:text-xs sm:leading-5">
                    {slide.description}
                  </p>
                </div>

                {/* Center visual */}
                <div
                  key={`visual-${activeSlide}`}
                  className="hero-slide-content relative flex min-h-0 flex-1 items-center justify-center py-3 min-[381px]:py-4 sm:py-6"
                >
                  {/* Rings */}
                  <div
                    className="pointer-events-none absolute h-36 w-36 rounded-full border border-[#c8d7f5] min-[381px]:h-40 min-[381px]:w-40 sm:h-64 sm:w-64"
                    aria-hidden="true"
                  />

                  <div
                    className="pointer-events-none absolute h-28 w-28 rounded-full border border-dashed border-[#b7c8ee] min-[381px]:h-32 min-[381px]:w-32 sm:h-48 sm:w-48"
                    aria-hidden="true"
                  />

                  <div
                    className="pointer-events-none absolute h-20 w-20 rounded-full border border-[#d5e0f6] min-[381px]:h-24 min-[381px]:w-24 sm:h-32 sm:w-32"
                    aria-hidden="true"
                  />

                  {/* Smaller center box on narrow mobile */}
                  <div className="hero-logo-pulse relative flex h-[5.75rem] w-[5.75rem] items-center justify-center rounded-[1.1rem] border border-white bg-white/95 shadow-[0_20px_50px_rgba(39,65,147,0.18)] min-[381px]:h-[6.5rem] min-[381px]:w-[6.5rem] min-[381px]:rounded-[1.25rem] sm:h-[10.5rem] sm:w-[10.5rem] sm:rounded-[2rem]">
                    <Image
                      src="/logo.svg"
                      alt="NACOS Nile"
                      width={170}
                      height={170}
                      priority
                      className="h-[4rem] w-[4rem] min-[381px]:h-[4.5rem] min-[381px]:w-[4.5rem] sm:h-[7.5rem] sm:w-[7.5rem]"
                    />
                  </div>

                  {/* Floating labels */}
                  {slide.labels.map((label, index) => {
                    const positions = [
                      "left-[8%] top-[22%]",
                      "right-[8%] top-[22%]",
                      "left-[9%] bottom-[21%]",
                      "right-[8%] bottom-[21%]",
                    ];

                    return (
                      <span
                        key={label}
                        className={`pointer-events-none absolute rounded-md border border-white bg-white/90 px-2 py-1 text-[7px] font-bold tracking-[0.07em] text-[#274193] shadow-[0_8px_24px_rgba(39,65,147,0.1)] backdrop-blur min-[381px]:rounded-lg min-[381px]:px-2.5 min-[381px]:py-1.5 min-[381px]:text-[8px] sm:text-[9px] ${positions[index]}`}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>

                {/* Bottom cards */}
                <div
                  key={`cards-${activeSlide}`}
                  className="hero-slide-content grid grid-cols-3 gap-1.5 min-[381px]:gap-2 sm:gap-3"
                >
                  {slide.cards.map((card) => (
                    <div
                      key={card.title}
                      className="min-w-0 rounded-lg border border-white/80 bg-white/75 p-2 shadow-sm backdrop-blur min-[381px]:rounded-xl min-[381px]:p-2.5 sm:rounded-2xl sm:p-3"
                    >
                      <p className="truncate text-[9px] font-bold text-[#0d1733] min-[381px]:text-[10px] sm:text-xs">
                        {card.title}
                      </p>

                      <p className="mt-1 text-[8px] leading-3.5 text-slate-500 min-[381px]:text-[9px] min-[381px]:leading-4 sm:text-[10px]">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}