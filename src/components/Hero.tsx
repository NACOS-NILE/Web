"use client";

import Image from "next/image";
import {
  BookOpen,
  Users,
  UsersRound,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type TouchEvent } from "react";

type HeroCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  labels: string[];
  cards: HeroCard[];
};

const slides: HeroSlide[] = [
  {
    eyebrow: "Student community",
    title: "Learn, connect and grow.",
    description: "With fellow computing students at Nile University.",
    labels: ["CS", "SE", "CYBER", "DATA"],
    cards: [
      {
        title: "Learn",
        description: "Workshops & tutorials",
        icon: BookOpen,
      },
      {
        title: "Build",
        description: "Projects & hackathons",
        icon: Zap,
      },
      {
        title: "Connect",
        description: "Peers & industry",
        icon: UsersRound,
      },
    ],
  },
  {
    eyebrow: "Student builders",
    title: "Turn ideas into projects.",
    description: "Through workshops, hackathons and collaboration.",
    labels: ["CODE", "AI", "WEB", "DATA"],
    cards: [
      {
        title: "Workshops",
        description: "Learn by doing",
        icon: BookOpen,
      },
      {
        title: "Projects",
        description: "Build together",
        icon: Zap,
      },
      {
        title: "Hackathons",
        description: "Create solutions",
        icon: UsersRound,
      },
    ],
  },
  {
    eyebrow: "Industry & peers",
    title: "Create your next opportunity.",
    description: "Develop skills and connect with the wider industry.",
    labels: ["PEERS", "MENTORS", "CAREER", "NETWORK"],
    cards: [
      {
        title: "Mentorship",
        description: "Guidance that helps",
        icon: Users,
      },
      {
        title: "Careers",
        description: "Find your path",
        icon: Zap,
      },
      {
        title: "Industry",
        description: "Meet professionals",
        icon: UsersRound,
      },
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
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updatePreference = () =>
      setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () =>
      mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

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
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-28 top-12 h-72 w-72 rounded-full bg-[#dce7ff] opacity-70 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#eef4ff] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[70%] -translate-x-1/2 bg-[#edf3ff] opacity-70 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-14 pt-10 sm:gap-12 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-18">
        {/* LEFT SIDE */}
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
            A student-led community at Nile University where
            computing students learn, build, connect, and create
            opportunities together.
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

          <div className="hero-fade-up-delay-4 mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.13em] text-slate-400 sm:mt-10 sm:gap-x-6">
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

        {/* RIGHT / HERO VISUAL */}
        <div className="hero-fade-up-delay-2 relative min-w-0 w-full">
          <div className="relative mx-auto w-full max-w-[560px]">
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

            {/* MAIN CARD */}
            <div
              className="
                hero-card
                relative
                mx-auto
                h-[40rem]
                min-h-[40rem]
                w-full
                overflow-hidden
                rounded-[1.75rem]
                border
                border-[#cfdcf5]
                bg-gradient-to-br
                from-[#f8fbff]
                via-white
                to-[#eaf0ff]
                p-3
                shadow-[0_24px_60px_rgba(39,65,147,0.12)]
                sm:h-auto
                sm:min-h-0
                sm:aspect-square
                sm:rounded-[2rem]
                sm:p-7
              "
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

              {/* Glows */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#d8e5ff] blur-3xl sm:-right-20 sm:-top-20 sm:h-60 sm:w-60"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#e8edff] blur-3xl sm:-bottom-20 sm:-left-16 sm:h-56 sm:w-56"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-full min-w-0 flex-col justify-between">
                {/* CARD HEADER */}
                <div
                  key={`header-${activeSlide}`}
                  className="hero-slide-content min-w-0 pr-20 sm:pr-36"
                >
                  <p className="inline-flex max-w-full rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#274193] shadow-sm sm:px-3.5 sm:py-2 sm:text-[11px]">
                    {slide.eyebrow}
                  </p>

                  <p className="mt-3 max-w-[18rem] text-sm font-bold tracking-[-0.015em] text-[#0d1733] sm:text-base">
                    {slide.title}
                  </p>

                  <p className="mt-1 max-w-[18rem] text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                    {slide.description}
                  </p>
                </div>

                {/* CENTER VISUAL */}
                <div
                  key={`visual-${activeSlide}`}
                  className="hero-slide-content relative flex min-h-0 flex-1 items-center justify-center py-3 sm:py-6"
                >
                  {/* Rings */}
                  <div className="pointer-events-none absolute h-[42%] w-[42%] min-h-32 min-w-32 rounded-full border border-[#b9cdf5] sm:h-64 sm:w-64" />

                  <div className="pointer-events-none absolute h-[31%] w-[31%] min-h-24 min-w-24 rounded-full border border-dashed border-[#9eb8ee] sm:h-48 sm:w-48" />

                  <div className="pointer-events-none absolute h-[21%] w-[21%] min-h-16 min-w-16 rounded-full border border-[#d0dcf4] sm:h-32 sm:w-32" />

                  {/* Logo */}
                  <div className="hero-logo-pulse relative z-10 flex h-28 w-28 items-center justify-center rounded-[1.5rem] border border-white bg-white/95 shadow-[0_18px_45px_rgba(39,65,147,0.16)] sm:h-[10.5rem] sm:w-[10.5rem] sm:rounded-[2rem]">
                    <Image
                      src="/logo.svg"
                      alt="NACOS Nile"
                      width={170}
                      height={170}
                      className="h-20 w-20 sm:h-[7.5rem] sm:w-[7.5rem]"
                    />
                  </div>

                  {/* Discipline labels */}
                  {slide.labels.map((label, index) => {
                    const positions = [
                      "left-[7%] top-[26%]",
                      "right-[7%] top-[26%]",
                      "left-[8%] bottom-[24%]",
                      "right-[7%] bottom-[24%]",
                    ];

                    return (
                      <span
                        key={label}
                        className={`pointer-events-none absolute rounded-lg border border-white/90 bg-white/95 px-2.5 py-1.5 text-[8px] font-bold tracking-[0.08em] text-[#274193] shadow-[0_6px_18px_rgba(39,65,147,0.08)] sm:px-2.5 sm:py-1.5 sm:text-[9px] ${positions[index]}`}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>

                {/* BOTTOM FEATURE CARDS */}
                <div
                  key={`cards-${activeSlide}`}
                  className="hero-slide-content grid grid-cols-3 gap-2 sm:gap-3"
                >
                  {slide.cards.map((card, index) => {
                    const Icon = card.icon;

                    const iconBackgrounds = [
                      "bg-[#eaf1ff] text-[#3b82f6]",
                      "bg-[#eef0ff] text-[#274193]",
                      "bg-[#e9f1ff] text-[#3b82f6]",
                    ];

                    return (
                      <div
                        key={card.title}
                        className="min-w-0 rounded-2xl border border-white/90 bg-white/90 p-2.5 shadow-[0_8px_24px_rgba(39,65,147,0.08)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(39,65,147,0.12)] sm:rounded-2xl sm:p-4"
                      >
                        {/* Icon */}
                        <div
                          className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10 ${iconBackgrounds[index]}`}
                        >
                          <Icon
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                        </div>

                        <p className="truncate text-[10px] font-bold text-[#0d1733] sm:text-sm">
                          {card.title}
                        </p>

                        <p className="mt-0.5 line-clamp-2 text-[8px] leading-3.5 text-slate-500 sm:mt-1 sm:text-[10px] sm:leading-4">
                          {card.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}