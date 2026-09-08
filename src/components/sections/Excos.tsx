"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";
import { SectionLabel } from "../ui/SectionLabel";

interface ExcoMember {
  id: string;
  number: string;
  name: string;
  role: string;
  tagline: string;
  image: string;
}

const EXCO_MEMBERS: ExcoMember[] = [
  {
    id: "president",
    number: "01",
    name: "Zikora Fortune Nwafor",
    role: "President",
    tagline: "Passionate about building active student communities.",
    image: "/excos-pics/president.jpg",
  },
  {
    id: "vp",
    number: "02",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    tagline: "Advocating for student welfare and academic excellence.",
    image: "/excos-pics/vp.jpg",
  },
  {
    id: "sg",
    number: "03",
    name: "Sheila Jato",
    role: "Secretary General",
    tagline: "Keeping the engines running smoothly.",
    image: "/excos-pics/sg.jpg",
  },
  {
    id: "fc",
    number: "04",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    tagline: "Making the important financial decisions.",
    image: "/excos-pics/fc.jpg",
  },
  {
    id: "pro",
    number: "05",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    tagline: "Applying creativity to communication.",
    image: "/excos-pics/pro.jpg",
  },
  {
    id: "dtd",
    number: "06",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    tagline: "Driving technical growth and leading coding workshops for Nile computing students.",
    image: "/excos-pics/dtd.jpg",
  },
  {
    id: "provost",
    number: "07",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    tagline: "Managing the day-to-day operations of NACOS Nile.",
    image: "/excos-pics/provost.jpg",
  },
  {
    id: "socials",
    number: "08",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    tagline: "Prioritizing social activities and events.",
    image: "/excos-pics/socials.jpg",
  },
  {
    id: "welfare",
    number: "09",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    tagline: "Your well-being is my priority.",
    image: "/excos-pics/welfare.jpg",
  },
];

export function Excos() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const president = EXCO_MEMBERS[0];
  const vp = EXCO_MEMBERS[1];
  const executiveRow2 = EXCO_MEMBERS.slice(2, 5); // Sheila, Amira, Elvis
  const executiveRow3 = EXCO_MEMBERS.slice(5, 9); // Ivoke, Zubaida, Saidat, Danielle

  // GSAP ScrollTrigger for gallery entrance and multi-speed depth
  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Gentle parallax drift on staggered gallery elements
      const offsetCols = gsap.utils.toArray<HTMLElement>(".parallax-col");
      offsetCols.forEach((col, i) => {
        const speed = (i % 2 === 0 ? -30 : 25);
        gsap.to(col, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: col,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      id="excos"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 md:py-44 bg-[#F7F7F5] text-neutral-900 border-t border-neutral-900/10 overflow-hidden"
    >
      {/* Top Section Meta Row */}
      <Container size="default">
        <div className="flex items-center justify-between border-b border-neutral-900/10 pb-6">
          <SectionLabel label="Executive Leadership" showLine className="text-neutral-500" />
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#274193] font-semibold">
            Chapter Officers
          </span>
        </div>
      </Container>

      {/* Main Section Headline */}
      <Container size="default" className="pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(3.5rem,8.6vw,10.2rem)] leading-[0.84] tracking-tight uppercase text-neutral-950 select-none"
            >
              THE PEOPLE
              <br />
              BEHIND
              <br />
              THE COMMUNITY.
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm leading-relaxed text-neutral-600 max-w-sm"
            >
              The elected executive council steering NACOS Nile Chapter — driving technical initiatives, academic tutorials, community partnerships, and student welfare.
            </motion.p>
          </div>
        </div>
      </Container>

      {/* EDITORIAL PORTRAIT SPREAD */}
      <Container size="default">
        <div ref={galleryRef} className="space-y-20 sm:space-y-28 md:space-y-36">
          {/* TIER 1: Featured President & Vice President */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Col 1-7: Featured President Portrait Anchor */}
            <div className="lg:col-span-7 space-y-6">
              <div
                data-cursor="VIEW"
                tabIndex={0}
                className="group relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-neutral-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
              >
                <Image
                  src={president.image}
                  alt={president.name}
                  fill
                  sizes="(max-width: 1200px) 90vw, 700px"
                  priority
                  className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </div>

              {/* President Information */}
              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#274193] font-semibold">
                  {president.role}
                </div>
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[0.88] text-neutral-950">
                  {president.name}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 font-sans italic max-w-md">
                  &ldquo;{president.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Col 8-12: Vice President (Asymmetrically Offset) */}
            <div className="lg:col-span-5 lg:mt-24 space-y-6 parallax-col">
              <div
                data-cursor="VIEW"
                tabIndex={0}
                className="group relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-md ml-auto overflow-hidden bg-neutral-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
              >
                <Image
                  src={vp.image}
                  alt={vp.name}
                  fill
                  sizes="(max-width: 1200px) 90vw, 450px"
                  className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </div>

              {/* VP Information */}
              <div className="space-y-2 pt-2 max-w-md ml-auto">
                <div className="font-mono text-xs uppercase tracking-widest text-[#274193] font-semibold">
                  {vp.role}
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[0.88] text-neutral-950">
                  {vp.name}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 font-sans italic">
                  &ldquo;{vp.tagline}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* TIER 2: 3-Way Asymmetrical Offset (SG, FC, PRO) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start border-t border-neutral-900/10 pt-16">
            {executiveRow2.map((member, idx) => {
              const offsets = ["lg:mt-0", "lg:mt-16", "lg:mt-8"];
              const offsetClass = offsets[idx % offsets.length];

              return (
                <div
                  key={member.id}
                  className={`lg:col-span-4 space-y-4 parallax-col ${offsetClass}`}
                >
                  <div
                    data-cursor="VIEW"
                    tabIndex={0}
                    className="group relative aspect-[3/4] w-full overflow-hidden bg-neutral-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 90vw, 380px"
                      className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-[#274193] font-semibold">
                      {member.role}
                    </div>
                    <h4 className="font-heading text-2xl sm:text-3xl lg:text-3xl uppercase tracking-tight leading-[0.88] text-neutral-950">
                      {member.name}
                    </h4>
                    <p className="text-xs leading-relaxed text-neutral-600 font-sans italic line-clamp-2">
                      &ldquo;{member.tagline}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TIER 3: 4-Way Rhythmic Offset (DTD, Provost, Socials, Welfare) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start border-t border-neutral-900/10 pt-16">
            {executiveRow3.map((member, idx) => {
              const offsets = ["lg:mt-4", "lg:mt-20", "lg:mt-8", "lg:mt-24"];
              const offsetClass = offsets[idx % offsets.length];

              return (
                <div
                  key={member.id}
                  className={`lg:col-span-3 space-y-4 parallax-col ${offsetClass}`}
                >
                  <div
                    data-cursor="VIEW"
                    tabIndex={0}
                    className="group relative aspect-[3/4] w-full overflow-hidden bg-neutral-200/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 90vw, 300px"
                      className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="space-y-1 pt-1">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#274193] font-semibold">
                      {member.role}
                    </div>
                    <h4 className="font-heading text-xl sm:text-2xl uppercase tracking-tight leading-[0.88] text-neutral-950">
                      {member.name}
                    </h4>
                    <p className="text-xs leading-relaxed text-neutral-600 font-sans italic line-clamp-2">
                      &ldquo;{member.tagline}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* SECTION FOOTING: Editorial Manifesto Marker */}
      <Container size="default" className="pt-24 sm:pt-32">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-neutral-900/10 pt-6 gap-4 text-neutral-500 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em]">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
            <span className="font-bold text-neutral-950">09 PEOPLE. ONE COMMUNITY.</span>
          </div>
          <div>
            <span>BUILT BY STUDENTS. SHAPED BY COMMUNITY.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
