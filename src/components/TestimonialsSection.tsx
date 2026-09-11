"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, prefersReducedMotion, hasContentVisibilityAncestor } from "@/lib/gsap";
import { testimonials, Testimonial } from "@/data/testimonials";
import { useSectionHeaderReveal } from "@/lib/useSectionHeaderReveal";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";
import { TechIconField, buildTechIcons } from "./TechIconField";

const HEADER_TECH_ICONS = buildTechIcons(["database", "code", "cloud", "terminal", "cpu", "gitBranch"]);

const CYCLE_DURATION = 7000;
// How far (px) the outer edges of the mobile avatar row droop below the
// center of the canopy arc.
const ARC_CANOPY_DEPTH = 14;

function PortraitCard({
  item,
  isSelected,
  onSelect,
  aspectOverride,
  rotateClass = "",
}: {
  item: Testimonial;
  isSelected: boolean;
  onSelect: () => void;
  aspectOverride?: string;
  rotateClass?: string;
}) {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  // Image drifts inside its frame as the grid scrolls past — same
  // oversized-wrapper trick as AboutBento's stat photos and the gallery
  // cards. Lives on a wrapper div rather than the button/Image directly:
  // the button already carries Tailwind's selected/hover scale+rotate
  // classes, and this card sits inside a hand-placed "amphitheater" column
  // with its own static translate-y offset — a GSAP-driven transform on
  // either of those elements would silently overwrite that composed
  // transform (inline style always wins over classes). This wrapper has no
  // transform of its own, so GSAP can own it outright.
  useIsomorphicLayoutEffect(() => {
    const imgWrap = imgWrapRef.current;
    const container = imgWrap?.parentElement;
    if (!imgWrap || !container) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set(imgWrap, { scale: 1.14, transformOrigin: "center center" });
      gsap.fromTo(
        imgWrap,
        { yPercent: -5 },
        {
          yPercent: 5,
          scale: 1.14,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // This section sits deep down the page under a
            // content-visibility:auto ancestor, so ScrollTrigger's first
            // (shortly-after-load) measurement pass can run before that
            // skip lifts and bake in a collapsed position. Re-resolve once
            // the card is actually about to become relevant.
            invalidateOnRefresh: true,
          },
        }
      );
    });

    // Only worth watching if something up the tree can actually hand this a
    // collapsed measurement — otherwise it's a global ScrollTrigger.refresh()
    // on every scroll pass, once per card, fixing a bug that isn't there.
    const revealObserver = hasContentVisibilityAncestor(container)
      ? new IntersectionObserver(
          (entries) => {
            if (!entries[0].isIntersecting) return;
            revealObserver?.disconnect();
            requestAnimationFrame(() => ScrollTrigger.refresh());
          },
          { rootMargin: "800px 0px" }
        )
      : null;
    revealObserver?.observe(container);

    return () => {
      revealObserver?.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 text-left focus:outline-none ${
        aspectOverride ||
        (item.aspect === "tall"
          ? "aspect-[3/4]"
          : item.aspect === "portrait"
          ? "aspect-[4/5]"
          : "aspect-square")
      } ${
        isSelected
          ? `shadow-[0_24px_50px_-10px_rgba(0,0,0,0.22)] scale-[1.05] z-30 ${rotateClass}`
          : "opacity-75 hover:opacity-100 hover:scale-[1.02] hover:shadow-md"
      }`}
    >
      <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 1024px) 15vw, 12vw"
          style={{
            aspectRatio: aspectOverride
              ? "1 / 1"
              : item.aspect === "tall"
              ? "3 / 4"
              : item.aspect === "portrait"
              ? "4 / 5"
              : "1 / 1",
          }}
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {isSelected && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {/* Animated Overlay Filling Up in the Image */}
          <div
            key={item.id}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent border-t border-white/70 shadow-[0_-2px_10px_rgba(255,255,255,0.4)]"
            style={{
              animation: `fillOverlay ${CYCLE_DURATION}ms linear forwards`,
            }}
          />
        </div>
      )}
    </button>
  );
}

// ── Kinetic "Trusted by builders" Heading ──────────────────────────────────
// Blueprint drafting ruler line draws smoothly under "Trusted" terminating in an architect's checkmark,
// while letter "d" hammers both loose "l" and "e" back into line
function TrustedBuildersHeading() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const rulerLineRef = useRef<HTMLSpanElement>(null);
  const ticksRef = useRef<HTMLSpanElement>(null);
  const checkmarkRef = useRef<HTMLSpanElement>(null);
  const checkSparkRef = useRef<HTMLSpanElement>(null);
  const lRef = useRef<HTMLSpanElement>(null);
  const dRef = useRef<HTMLSpanElement>(null);
  const eRef = useRef<HTMLSpanElement>(null);
  const sparkLRef = useRef<HTMLSpanElement>(null);
  const sparkERRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: gsap.Context | null = null;
    let isBuilt = false;

    const buildTimeline = () => {
      if (isBuilt) return;
      isBuilt = true;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 3.5,
          paused: true,
        });
        tlRef.current = tl;

      // Initial positions
      gsap.set(lRef.current, { x: 0, y: 0, rotate: 0, scale: 1 });
      gsap.set(dRef.current, { x: 0, y: 0, rotate: 0 });
      gsap.set(eRef.current, { x: 0, y: 0, rotate: 0, scale: 1 });
      gsap.set(sparkLRef.current, { opacity: 0, scale: 0 });
      gsap.set(sparkERRef.current, { opacity: 0, scale: 0 });
      gsap.set(rulerLineRef.current, { scaleX: 1, transformOrigin: "left center" });
      gsap.set(ticksRef.current, { opacity: 1 });
      gsap.set(checkmarkRef.current, { scale: 1, opacity: 1, transformOrigin: "center center" });
      gsap.set(checkSparkRef.current, { opacity: 0, scale: 0 });

      // ── STEP 1: Two letters slip out of alignment in "builders" ──
      // Sparks reset here too (not just in the standalone gsap.set above) —
      // that one only runs once, at build time. Restarting mid-animation
      // (hover/click while a spark is still fading) jumps the timeline back
      // to 0 without this, leaving a spark's last mid-fade opacity visible
      // straight through the next wobble, before any hit has happened.
      tl.set([sparkLRef.current, sparkERRef.current], { opacity: 0, scale: 0 })
        // Blueprint ruler softly resets while alignment is lost
        .to([rulerLineRef.current, ticksRef.current, checkmarkRef.current], {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
        }, 0)
        .set(rulerLineRef.current, { scaleX: 0 })
        .set(checkmarkRef.current, { scale: 0 })
        .to(
          [lRef.current, eRef.current],
          {
            rotate: (i) => (i === 0 ? -8 : 8),
            duration: 0.08,
            yoyo: true,
            repeat: 3,
            ease: "sine.inOut",
          },
          "<"
        )
        .to(
          lRef.current,
          {
            y: "0.2em",
            rotate: -20,
            transformOrigin: "bottom right",
            duration: 0.3,
            ease: "power2.in",
          },
          "+=0.1"
        )
        .to(
          eRef.current,
          {
            y: "0.24em",
            rotate: 22,
            transformOrigin: "bottom left",
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        )

        // ── STEP 2: Hammer strikes target 1 ('l') ──
        .to(
          dRef.current,
          {
            y: "-0.36em",
            x: "0.12em",
            rotate: 38,
            transformOrigin: "bottom center",
            duration: 0.35,
            ease: "power2.out",
          },
          "+=0.1"
        )
        .to({}, { duration: 0.08 })
        // WHACK left!
        .to(dRef.current, {
          y: "0.08em",
          x: "-0.16em",
          rotate: -26,
          duration: 0.12,
          ease: "power4.in",
        })
        // Impact on 'l'
        .to(
          lRef.current,
          {
            y: 0,
            rotate: 0,
            scale: 0.88,
            duration: 0.08,
            ease: "power3.out",
          },
          "<+=0.06"
        )
        // Spark on 'l'
        .fromTo(
          sparkLRef.current,
          { opacity: 1, scale: 0.2 },
          { opacity: 0, scale: 1.8, duration: 0.22, ease: "power2.out" },
          "<"
        )
        .to(lRef.current, { scale: 1, duration: 0.22, ease: "back.out(3)" })

        // ── STEP 3: Hammer strikes target 2 ('e') ──
        .to(
          dRef.current,
          {
            y: "-0.38em",
            x: "-0.14em",
            rotate: -45,
            transformOrigin: "bottom center",
            duration: 0.32,
            ease: "power2.out",
          },
          "<"
        )
        .to({}, { duration: 0.08 })
        // WHACK right!
        .to(dRef.current, {
          y: "0.1em",
          x: "0.18em",
          rotate: 24,
          duration: 0.12,
          ease: "power4.in",
        })
        // Impact on 'e'
        .to(
          eRef.current,
          {
            y: 0,
            rotate: 0,
            scale: 0.88,
            duration: 0.08,
            ease: "power3.out",
          },
          "<+=0.06"
        )
        // Spark on 'e'
        .fromTo(
          sparkERRef.current,
          { opacity: 1, scale: 0.2 },
          { opacity: 0, scale: 1.8, duration: 0.22, ease: "power2.out" },
          "<"
        )
        .to(eRef.current, { scale: 1, duration: 0.22, ease: "back.out(3)" })

        // ── STEP 4: Hammer returns home with bounce ──
        .to(
          dRef.current,
          {
            y: "-0.12em",
            x: "0.02em",
            rotate: -6,
            duration: 0.15,
            ease: "power2.out",
          },
          "<"
        )
        .to(dRef.current, {
          y: 0,
          x: 0,
          rotate: 0,
          duration: 0.45,
          ease: "bounce.out",
        })

        // ── STEP 5: Architectural drafting ruler line draws smoothly under "Trusted" ──
        .to(
          rulerLineRef.current,
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          },
          "<+=0.05"
        )
        .to(
          ticksRef.current,
          {
            opacity: 1,
            duration: 0.2,
            ease: "power1.out",
          },
          "<+=0.1"
        )
        // Architect's checkmark snaps in right at the baseline corner!
        .to(
          checkmarkRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.28,
            ease: "back.out(2.5)",
          },
          "-=0.08"
        )
        // Drafting gold spark flashes at checkmark tip
        .fromTo(
          checkSparkRef.current,
          { opacity: 1, scale: 0.2 },
          { opacity: 0, scale: 1.8, duration: 0.3, ease: "power2.out" },
          "<"
        );
      }, containerRef);
    };

    let observer: IntersectionObserver | null = null;
    if (containerRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!isBuilt) {
              buildTimeline();
            }
            tlRef.current?.play();
          } else {
            tlRef.current?.pause();
          }
        },
        { rootMargin: "150px" }
      );
      observer.observe(containerRef.current);
    }

    return () => {
      observer?.disconnect();
      ctx?.revert();
    };
  }, []);

  return (
    <span
      ref={containerRef}
      onClick={() => tlRef.current?.restart()}
      onMouseEnter={() => tlRef.current?.restart()}
      className="inline-flex items-center flex-wrap justify-center gap-x-2.5 sm:gap-x-3.5 cursor-pointer select-none align-baseline will-change-transform"
      title="Click or hover to inspect blueprint & hammer"
    >
      {/* "Trusted" with Architectural Blueprint Underline & Architect's Checkmark */}
      <span className="relative inline-block text-[#274193]">
        <span className="font-black tracking-tight inline-block">Trusted</span>

        {/* Architectural Blueprint Drafting Ruler Underline */}
        <span
          className="absolute -bottom-[0.14em] left-0 w-full pointer-events-none select-none overflow-visible"
          aria-hidden="true"
        >
          {/* Left Drafting Crosshair / Stop */}
          <span className="absolute -left-[0.06em] top-1/2 -translate-y-1/2 w-[0.035em] h-[0.24em] bg-[#274193] rounded-full" />

          {/* The Precision Drafting Baseline */}
          <span
            ref={rulerLineRef}
            className="block w-full h-[0.055em] bg-[#274193] rounded-full origin-left will-change-transform shadow-[0_0_8px_rgba(39,65,147,0.28)]"
          />

          {/* Technical Blueprint Measurement Ticks */}
          <span
            ref={ticksRef}
            className="absolute inset-0 flex justify-between items-center px-[0.18em] pointer-events-none will-change-transform"
          >
            <span className="w-[0.018em] h-[0.1em] bg-[#274193]/40" />
            <span className="w-[0.018em] h-[0.14em] bg-[#274193]/60" />
            <span className="w-[0.018em] h-[0.1em] bg-[#274193]/40" />
            <span className="w-[0.018em] h-[0.14em] bg-[#274193]/60" />
            <span className="w-[0.018em] h-[0.1em] bg-[#274193]/40" />
          </span>

          {/* Right Architect's Checkmark Badge */}
          <span
            ref={checkmarkRef}
            className="absolute -right-[0.14em] top-1/2 -translate-y-1/2 flex items-center will-change-transform z-10"
          >
            <span className="flex items-center justify-center w-[0.36em] h-[0.36em] rounded-full bg-[#274193] text-white shadow-xs border border-white/90">
              <svg
                className="w-[0.22em] h-[0.22em]"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 6.2L4.8 8.5L9.5 3.5" />
              </svg>
            </span>

            {/* Drafting Spark on verification */}
            <span
              ref={checkSparkRef}
              className="absolute -top-[0.22em] -right-[0.22em] text-amber-500 font-bold text-[0.4em] select-none pointer-events-none leading-none"
            >
              ✦
            </span>
          </span>
        </span>
      </span>

      {/* "by" */}
      <span className="text-gray-950 font-black">by</span>

      {/* "builders" with kinetic hammer 'd' repairing both 'l' and 'e' */}
      <span className="relative inline-flex items-center text-gray-950 font-black">
        <span>b</span>
        <span>u</span>
        <span>i</span>

        {/* Loose Letter 1: 'l' */}
        <span
          ref={lRef}
          className="relative inline-block will-change-transform"
        >
          l
        </span>

        {/* Spark on 'l' — sits near the letter's own baseline (where the
            hammer actually lands), not floating above the word. */}
        <span
          ref={sparkLRef}
          className="absolute top-[0.35em] left-[38%] -translate-x-1/2 pointer-events-none z-20 text-amber-500 font-bold text-[0.45em] select-none leading-none"
        >
          ✦
        </span>

        {/* The Hammer: 'd' */}
        <span
          ref={dRef}
          className="relative inline-block text-[#274193] will-change-transform z-10"
          title="Hammer"
        >
          d
        </span>

        {/* Spark on 'e' — same lower placement as the 'l' spark above. */}
        <span
          ref={sparkERRef}
          className="absolute top-[0.35em] left-[62%] -translate-x-1/2 pointer-events-none z-20 text-amber-500 font-bold text-[0.45em] select-none leading-none"
        >
          ✦
        </span>

        {/* Loose Letter 2: 'e' */}
        <span
          ref={eRef}
          className="relative inline-block will-change-transform"
        >
          e
        </span>

        <span>r</span>
        <span>s</span>
      </span>
    </span>
  );
}

export default function TestimonialsSection() {
  const [selectedId, setSelectedId] = useState<string>("zikora");
  const avatarRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  useSectionHeaderReveal(headerRef);

  const selected =
    testimonials.find((t) => t.id === selectedId) || testimonials[0];

  // Viewport-relative canopy arc: avatars currently inside the visible
  // scroll window rise into the arc; as you scroll, ones settling into view
  // from either side rise up to complete it while the ones leaving droop
  // back down — the arc tracks what's on screen, not each item's fixed
  // position in the full list.
  //
  // The lift is set with gsap.set (no easing) so it stays glued to the
  // scroll position frame-by-frame instead of chasing after it — a CSS
  // transition here is exactly what caused the "scrolls, then the arc
  // catches up" lag. Only the selection *scale* (below) gets to ease.
  useEffect(() => {
    const container = mobileCarouselRef.current;
    if (!container) return;

    let rafId: number | null = null;

    const updateArc = () => {
      rafId = null;
      const halfWidth = container.clientWidth / 2;
      if (halfWidth === 0) return;
      const viewportCenter = container.scrollLeft + halfWidth;

      testimonials.forEach((item) => {
        const btn = avatarRefs.current[item.id];
        if (!btn) return;
        const btnCenter = btn.offsetLeft + btn.offsetWidth / 2;
        const normalized = Math.max(-1, Math.min(1, (btnCenter - viewportCenter) / halfWidth));
        const arcLift = (1 - normalized * normalized) * ARC_CANOPY_DEPTH;
        gsap.set(btn, { y: -arcLift });
      });
    };

    const scheduleUpdate = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(updateArc);
    };

    updateArc();
    container.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      container.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Selection pop: eased independently of the arc's scroll-synced lift so
  // the two motions never fight each other.
  useEffect(() => {
    testimonials.forEach((item) => {
      const btn = avatarRefs.current[item.id];
      if (!btn) return;
      gsap.to(btn, {
        scale: item.id === selectedId ? 1.15 : 1,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  }, [selectedId]);

  // Horizontally center the active avatar within the mobile carousel container ONLY (never page window)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    const rafId = requestAnimationFrame(() => {
      const container = mobileCarouselRef.current;
      const el = avatarRefs.current[selectedId];
      if (container && el) {
        const targetLeft = el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2;
        container.scrollTo({
          left: Math.max(0, targetLeft),
          behavior: "smooth",
        });
      }
    });
    return () => cancelAnimationFrame(rafId);
  }, [selectedId]);

  // Auto-cycle through student stories; only active when section is in view
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;

    const startTimer = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        setSelectedId((prev) => {
          const currIdx = testimonials.findIndex((t) => t.id === prev);
          const nextIdx = (currIdx + 1) % testimonials.length;
          return testimonials[nextIdx].id;
        });
      }, CYCLE_DURATION);
    };

    const stopTimer = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };

    let observer: IntersectionObserver | null = null;
    if (sectionRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startTimer();
          } else {
            stopTimer();
          }
        },
        { rootMargin: "150px" }
      );
      observer.observe(sectionRef.current);
    }

    return () => {
      stopTimer();
      observer?.disconnect();
    };
  }, []);

  // Row 1 items (one per column 1-7)
  const row1Items: { col: number; item: Testimonial }[] = [
    { col: 1, item: testimonials.find((t) => t.id === "halima")! },
    { col: 2, item: testimonials.find((t) => t.id === "zikora")! },
    { col: 3, item: testimonials.find((t) => t.id === "elvis")! },
    { col: 4, item: testimonials.find((t) => t.id === "zubaida")! },
    { col: 5, item: testimonials.find((t) => t.id === "saidat")! },
    { col: 6, item: testimonials.find((t) => t.id === "amira")! },
    { col: 7, item: testimonials.find((t) => t.id === "omodot")! },
  ];

  // Row 2 flanking items (cols 1, 2 on left; cols 6, 7 on right)
  const row2Left: Testimonial[] = [
    testimonials.find((t) => t.id === "tobenna")!,
    testimonials.find((t) => t.id === "chinedu")!,
  ];

  const row2Right: Testimonial[] = [
    testimonials.find((t) => t.id === "folasade")!,
    testimonials.find((t) => t.id === "ngozi")!,
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full pt-16 sm:pt-24 pb-28 sm:pb-36 lg:pb-44 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* SECTION HEADER - CONSISTENT WITH FACULTY OF COMPUTING & ABOUT */}
      <div className="relative">
        <TechIconField icons={HEADER_TECH_ICONS} />
        <div ref={headerRef} className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <p data-reveal="eyebrow" className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-600 font-bold mb-3 sm:mb-4">
            Community Voices
          </p>
          <h2 data-reveal="heading" className="font-deacon uppercase text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-950 tracking-[-0.035em] leading-[1.08]">
            <TrustedBuildersHeading /> <br className="hidden sm:inline" />across every level
          </h2>
          <p data-reveal="subtitle" className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed mt-4 max-w-xl">
            Hear directly from computing students and alumni on how NACOS Nile shaped their technical abilities, friendships, and engineering careers.
          </p>
        </div>
      </div>

      {/* ================= DESKTOP & TABLET: 7-COLUMN STAGGERED AMPHITHEATER ================= */}
      <div className="hidden md:block relative z-10">

        {/* ROW 1: TOP ARCH (ALL 7 COLUMNS) */}
        <div className="grid grid-cols-7 gap-3 sm:gap-4 lg:gap-5 items-end">
          {row1Items.map(({ item }) => {
            const isSelected = item.id === selected.id;
            return (
              <div key={item.id} className="flex flex-col gap-2.5 sm:gap-3">
                {/* Ghost placeholder tile at the top */}
                <div className="w-full h-8 sm:h-11 rounded-2xl bg-[#F6F6F6]" />

                {/* Student Portrait Card */}
                <PortraitCard
                  item={item}
                  isSelected={isSelected}
                  onSelect={() => setSelectedId(item.id)}
                  rotateClass="-rotate-1"
                />
              </div>
            );
          })}
        </div>

        {/* ROW 2: FLANKING SIDES (COLS 1, 2 & COLS 6, 7) + CENTER TESTIMONIAL DISPLAY (COLS 3-5) */}
        <div className="grid grid-cols-7 gap-3 sm:gap-4 lg:gap-5 items-start mt-4 sm:mt-6">
          
          {/* COL 1 (FAR LEFT EDGE - HANGS DOWN LOWER) */}
          <div className="translate-y-8 sm:translate-y-14 lg:translate-y-16">
            <PortraitCard
              item={row2Left[0]}
              isSelected={row2Left[0].id === selected.id}
              onSelect={() => setSelectedId(row2Left[0].id)}
              aspectOverride="aspect-square"
              rotateClass="rotate-1"
            />
          </div>

          {/* COL 2 (INNER LEFT - HANGS LOWER) */}
          <div className="translate-y-3 sm:translate-y-6 lg:translate-y-8">
            <PortraitCard
              item={row2Left[1]}
              isSelected={row2Left[1].id === selected.id}
              onSelect={() => setSelectedId(row2Left[1].id)}
              aspectOverride="aspect-square"
              rotateClass="-rotate-1"
            />
          </div>

          {/* CENTER STAGE (SPANS COLUMNS 3, 4, 5) - BROUGHT LOWER DOWN */}
          <div className="col-span-3 flex flex-col items-center text-center px-2 sm:px-6 pt-10 sm:pt-16 lg:pt-20">
            {/* Dynamic Interactive Testimonial Quote */}
            <div
              key={selected.id}
              className="min-h-[160px] flex flex-col items-center justify-center transition-all duration-300 animate-in fade-in zoom-in-95 duration-300"
            >
              {/* Minimalist Editorial Quotation Mark Motif */}
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-[#274193]/25 mb-3 select-none"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Bold Typography Pull Quote */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-950 font-medium tracking-tight leading-[1.38] max-w-2xl mx-auto">
                &ldquo;{selected.quote}&rdquo;
              </p>

              {/* Clean Editorial Attribution Dock */}
              <div className="mt-6 sm:mt-7 inline-flex flex-col items-center text-center px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#F6F6F6] select-none">
                <span className="text-sm sm:text-base font-bold text-gray-950">
                  {selected.name}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-600 font-medium mt-0.5">
                  {selected.dept} · {selected.year}
                </span>
              </div>
            </div>
          </div>

          {/* COL 6 (INNER RIGHT - HANGS LOWER) */}
          <div className="translate-y-3 sm:translate-y-6 lg:translate-y-8">
            <PortraitCard
              item={row2Right[0]}
              isSelected={row2Right[0].id === selected.id}
              onSelect={() => setSelectedId(row2Right[0].id)}
              aspectOverride="aspect-square"
              rotateClass="rotate-1"
            />
          </div>

          {/* COL 7 (FAR RIGHT EDGE - HANGS DOWN LOWER) */}
          <div className="translate-y-8 sm:translate-y-14 lg:translate-y-16">
            <PortraitCard
              item={row2Right[1]}
              isSelected={row2Right[1].id === selected.id}
              onSelect={() => setSelectedId(row2Right[1].id)}
              aspectOverride="aspect-square"
              rotateClass="-rotate-1"
            />
          </div>
        </div>
      </div>

      {/* ================= MOBILE: HORIZONTAL AVATAR CANOPY + CENTER QUOTE ================= */}
      <div className="block md:hidden relative z-10 text-center">
        {/* Touch-Friendly Avatar Carousel Bar */}
        <div
          ref={mobileCarouselRef}
          className="relative flex items-center gap-2.5 overflow-x-auto py-5 px-1 no-scrollbar justify-start sm:justify-center"
        >
          {testimonials.map((item) => {
            const isSelected = item.id === selected.id;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  avatarRefs.current[item.id] = el;
                }}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`relative shrink-0 w-12 h-12 rounded-2xl overflow-hidden transition-[opacity,box-shadow] duration-300 focus:outline-none ${
                  isSelected ? "shadow-lg z-10" : "opacity-70 hover:opacity-90"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  style={{ aspectRatio: "1 / 1" }}
                  className="w-full h-full object-cover object-center"
                />
                {isSelected && (
                  <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                    <div
                      key={item.id}
                      className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent border-t border-white/70"
                      style={{
                        animation: `fillOverlay ${CYCLE_DURATION}ms linear forwards`,
                      }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Quote on Mobile */}
        <div
          key={selected.id}
          className="min-h-[120px] flex flex-col items-center justify-center mt-3 px-3 animate-in fade-in zoom-in-95 duration-300"
        >
          {/* Quotation Mark Motif */}
          <svg
            className="w-6 h-6 text-[#274193]/25 mb-2 select-none"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <p className="text-sm sm:text-base text-gray-950 font-medium leading-relaxed max-w-lg">
            &ldquo;{selected.quote}&rdquo;
          </p>

          {/* Clean Editorial Attribution Dock */}
          <div className="mt-4 inline-flex flex-col items-center text-center px-4 py-2 rounded-full bg-[#F6F6F6] select-none">
            <span className="text-xs sm:text-sm font-bold text-gray-950">
              {selected.name}
            </span>
            <span className="text-[10px] text-gray-600 font-medium mt-0.5">
              {selected.dept} · {selected.year}
            </span>
          </div>

          {/* Touch Navigation Controls for Mobile */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              type="button"
              onClick={() => {
                const currIdx = testimonials.findIndex((t) => t.id === selectedId);
                const prevIdx = (currIdx - 1 + testimonials.length) % testimonials.length;
                setSelectedId(testimonials[prevIdx].id);
              }}
              className="w-8 h-8 rounded-full bg-[#F6F6F6] hover:bg-gray-200/80 flex items-center justify-center text-gray-700 transition-all active:scale-95 cursor-pointer"
              aria-label="Previous story"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-[11px] font-mono text-gray-600 font-medium">
              {testimonials.findIndex((t) => t.id === selectedId) + 1} / {testimonials.length}
            </span>

            <button
              type="button"
              onClick={() => {
                const currIdx = testimonials.findIndex((t) => t.id === selectedId);
                const nextIdx = (currIdx + 1) % testimonials.length;
                setSelectedId(testimonials[nextIdx].id);
              }}
              className="w-8 h-8 rounded-full bg-[#F6F6F6] hover:bg-gray-200/80 flex items-center justify-center text-gray-700 transition-all active:scale-95 cursor-pointer"
              aria-label="Next story"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

