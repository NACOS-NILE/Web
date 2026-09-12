"use client";

import { useRef } from "react";
import Image from "next/image";
import GeekyComputing from "./GeekyComputing";
import HeartbeatWord from "./HeartbeatWord";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { useSectionHeaderReveal } from "@/lib/useSectionHeaderReveal";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";
import { TechIconField, buildTechIcons } from "./TechIconField";

const HEADER_TECH_ICONS = buildTechIcons(["code", "terminal", "gitBranch", "cpu", "database", "cloud"]);

const storyStats = [
  {
    value: "5,600+",
    label: "Active Student Builders",
    desc: "A multidisciplinary student body collaborating across open-source software, campus infrastructure utilities, and student-founded technology startups.",
    image: "/students-1200.webp",
  },
  {
    value: "6",
    label: "Computing Departments",
    desc: "Spanning Software Engineering, Computer Science, Cyber Security, Information Technology, Information Systems, and Data Science under Nile's Faculty of Computing.",
    image: "/departments-5.webp",
  },
  {
    value: "24+",
    label: "Annual Workshops & Hackathons",
    desc: "Regular developer masterclasses, system architecture labs, and intense weekend buildathons designed to bridge classroom theory with real-world industry engineering.",
    image: "/workshops-24.webp",
  },
  {
    value: "15+",
    label: "Hackathon Podiums & Awards",
    desc: "Nile computing teams regularly take top honors at regional and national inter-university competitions, demonstrating high-caliber execution and innovation.",
    image: "/awards-15.webp",
    objectPosition: "object-[center_30%]",
  },
];

// Splits "5,600+" into { target: 5600, suffix: "+" } so the count-up tween
// can animate the numeric part and reattach the suffix verbatim.
function parseStatValue(value: string): { target: number; suffix: string } {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: parseInt(match[1].replace(/,/g, ""), 10), suffix: match[2] };
}

export default function AboutBento() {
  const headerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const imageWrapRefs = useRef<(HTMLDivElement | null)[]>([]);

  useSectionHeaderReveal(headerRef);

  // Scroll-scrubbed parallax on the stat images: each image is oversized
  // (scale 1.15) and drifts vertically as its card crosses the viewport, so
  // it never exposes an edge. Lives on a wrapper div, not the <Image> itself,
  // so it doesn't fight the existing CSS hover-zoom on the image.
  useIsomorphicLayoutEffect(() => {
    const wraps = imageWrapRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
    if (wraps.length === 0) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      wraps.forEach((el) => {
        const container = el.parentElement;
        if (!container) return;
        gsap.set(el, { transformOrigin: "center center" });
        // scale lives in both the from/to vars (not a separate gsap.set)
        // so it stays constant at 1.15 for the whole scrub instead of only
        // the yPercent translate animating.
        gsap.fromTo(
          el,
          { yPercent: -8, scale: 1.15 },
          {
            yPercent: 8,
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  // Row-by-row scroll reveal + GSAP count-up on the stat numbers
  useIsomorphicLayoutEffect(() => {
    const rows = rowRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
    if (rows.length === 0) return;

    if (prefersReducedMotion()) return; // rows stay at their natural, fully-visible state

    const ctx = gsap.context(() => {
      gsap.set(rows, { opacity: 0, y: 40 });

      ScrollTrigger.batch(rows, {
        start: "top 85%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          });

          // Count each revealed row's stat number up from 0 in lockstep
          batch.forEach((rowEl) => {
            const idx = rows.indexOf(rowEl as HTMLDivElement);
            const valueEl = valueRefs.current[idx];
            const stat = storyStats[idx];
            if (!valueEl || !stat) return;

            const { target, suffix } = parseStatValue(stat.value);
            const counter = { val: 0 };
            gsap.to(counter, {
              val: target,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                valueEl.textContent = Math.round(counter.val).toLocaleString() + suffix;
              },
            });
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="w-full pt-6 sm:pt-10 md:pt-12 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-40">
      {/* SECTION HEADER */}
      <div className="relative">
        {/* AMBIENT TECH-ICON FIELD — flanks the header, outside the header's
            own max-w-4xl so they land in the section's wider gutter instead
            of crowding the text column. */}
        <TechIconField icons={HEADER_TECH_ICONS} />

        <div ref={headerRef} className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <p data-reveal="eyebrow" className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-600 font-bold mb-3 sm:mb-4">
            About NACOS Nile Chapter
          </p>
          <h2 data-reveal="heading" className="font-deacon uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-950 tracking-[-0.035em] leading-[1.12]">
            The <HeartbeatWord /> of <br />
            <GeekyComputing /> <br />
            at Nile University
          </h2>
          <p data-reveal="subtitle" className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed mt-3 max-w-xl">
            Bridging academic theory and real-world engineering through collaborative builds, mentorship, and hackathons.
          </p>
        </div>
      </div>

      {/* ALTERNATING STATS & STORIES GRID */}
      <div className="space-y-8 sm:space-y-12 lg:space-y-14">
        {storyStats.map((item, idx) => {
          const isEven = idx % 2 === 0;
          // Every other row breaks from the grey card into a solid navy
          // one — a deliberate bold-color beat so the section reads as a
          // rhythm instead of four look-alike grey rows in a row.
          const isNavy = idx % 2 === 1;
          return (
            <div
              key={item.label}
              ref={(el) => {
                rowRefs.current[idx] = el;
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch"
            >
              {/* CONTENT CONTAINER — alternates grey / solid navy (STROKELESS - WIDER) */}
              <div
                className={`lg:col-span-7 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl flex flex-col justify-center transition-all duration-300 ${
                  isNavy ? "bg-[#274193]" : "bg-[#F6F6F6]"
                } ${isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="mb-3 sm:mb-4">
                  <span
                    ref={(el) => {
                      valueRefs.current[idx] = el;
                    }}
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-none tabular-nums ${
                      isNavy ? "text-white" : "text-gray-950"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
                <h3
                  className={`text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-3 ${
                    isNavy ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.label}
                </h3>
                <p
                  className={`text-sm sm:text-base font-normal leading-relaxed ${
                    isNavy ? "text-white/75" : "text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>
              </div>

              {/* IMAGE CONTAINER (STROKELESS - SMALLER WIDTH) */}
              <div
                className={`lg:col-span-5 relative w-full min-h-[240px] sm:min-h-[300px] lg:min-h-[360px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F6F6F6] transition-all duration-500 group ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div
                  ref={(el) => {
                    imageWrapRefs.current[idx] = el;
                  }}
                  className="absolute inset-0 will-change-transform"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 640px) 480px, (max-width: 1024px) 100vw, 40vw"
                    style={{ aspectRatio: "4 / 3" }}
                    className={`object-cover ${
                      item.objectPosition || "object-center"
                    } group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
