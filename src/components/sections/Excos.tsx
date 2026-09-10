"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../layout/Container";

interface ExcoMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  image: string;
}

const EXCO_MEMBERS: ExcoMember[] = [
  {
    id: "president",
    name: "Zikora Fortune Nwafor",
    role: "President",
    tagline: "Passionate about building active student communities.",
    image: "/excos-pics/president.jpg",
  },
  {
    id: "vp",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    tagline: "Advocating for student welfare and academic excellence.",
    image: "/excos-pics/vp.jpg",
  },
  {
    id: "sg",
    name: "Sheila Jato",
    role: "Secretary General",
    tagline: "Keeping the engines running smoothly.",
    image: "/excos-pics/sg.jpg",
  },
  {
    id: "fc",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    tagline: "Making the important financial decisions.",
    image: "/excos-pics/fc.jpg",
  },
  {
    id: "pro",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    tagline: "Applying creativity to communication.",
    image: "/excos-pics/pro.jpg",
  },
  {
    id: "dtd",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development (DTD)",
    tagline: "Driving technical growth and leading coding workshops for Nile computing students.",
    image: "/excos-pics/dtd.jpg",
  },
  {
    id: "provost",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    tagline: "Managing the day-to-day operations of NACOS Nile.",
    image: "/excos-pics/provost.jpg",
  },
  {
    id: "socials",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    tagline: "Prioritizing social activities and events.",
    image: "/excos-pics/socials.jpg",
  },
  {
    id: "welfare",
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
        const speed = i % 2 === 0 ? -25 : 20;
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
      className="relative w-full py-24 sm:py-32 md:py-40 bg-[#F7F7F5] text-neutral-900 border-t border-neutral-900/10 overflow-hidden"
    >
      {/* Main Section Headline - No Section Labels */}
      <Container size="default" className="pt-4 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(3.5rem,8.6vw,10.2rem)] leading-[0.92] tracking-tight uppercase text-neutral-950 select-none"
            >
              THE PEOPLE
              <br />
              BEHIND
              <br />
              THE COMMUNITY<span className="text-[#274193]">.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm leading-relaxed text-neutral-600 max-w-sm font-sans"
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
                className="group relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-neutral-200/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
              >
                <Image
                  src={president.image}
                  alt={president.name}
                  fill
                  sizes="(max-width: 1200px) 90vw, 700px"
                  priority
                  className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* President Information */}
              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#274193] font-semibold">
                  {president.role}
                </div>
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[0.9] text-neutral-950">
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
                className="group relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-md ml-auto overflow-hidden bg-neutral-200/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
              >
                <Image
                  src={vp.image}
                  alt={vp.name}
                  fill
                  sizes="(max-width: 1200px) 90vw, 450px"
                  className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* VP Information */}
              <div className="space-y-2 pt-2 max-w-md ml-auto">
                <div className="font-mono text-xs uppercase tracking-widest text-[#274193] font-semibold">
                  {vp.role}
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[0.9] text-neutral-950">
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
                    className="group relative aspect-[3/4] w-full overflow-hidden bg-neutral-200/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 90vw, 380px"
                      className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-[#274193] font-semibold">
                      {member.role}
                    </div>
                    <h4 className="font-heading text-2xl sm:text-3xl lg:text-3xl uppercase tracking-tight leading-[0.9] text-neutral-950">
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
                    className="group relative aspect-[3/4] w-full overflow-hidden bg-neutral-200/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 90vw, 300px"
                      className="object-cover object-top grayscale contrast-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="space-y-1 pt-1">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#274193] font-semibold">
                      {member.role}
                    </div>
                    <h4 className="font-heading text-xl sm:text-2xl uppercase tracking-tight leading-[0.9] text-neutral-950">
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
    </section>
  );
}
