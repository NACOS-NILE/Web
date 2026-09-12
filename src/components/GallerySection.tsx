"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, prefersReducedMotion, scheduleScrollTriggerRefresh, hasContentVisibilityAncestor } from "@/lib/gsap";
import { useSectionHeaderReveal } from "@/lib/useSectionHeaderReveal";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";
import { TechIconField, buildTechIcons } from "./TechIconField";

const HEADER_TECH_ICONS = buildTechIcons(["terminal", "cloud", "cpu", "code", "gitBranch", "database"]);

const IK_ENDPOINT = "https://ik.imagekit.io/nacosnile";
const DINNER_PATH = "gallery/DinnerNight/2026";
const TOTAL_PHOTOS = 164;

const getIkUrl = (index: number, width = 800) =>
  `${IK_ENDPOINT}/${DINNER_PATH}/img${index}.webp?tr=w-${width},q-75,f-auto`;

const imageKitGalleryLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  const clean = src.split("?")[0];
  const targetWidth = Math.min(width, 800);
  return `${clean}?tr=w-${targetWidth},q-${quality || 75},f-auto`;
};

// ── Coordinated "Captured in action" Viewfinder & Kinetic Expansion ──────────
const CAPTURED_LETTERS = ["C", "a", "p", "t", "u", "r", "e", "d"];
const SPREAD_X = [-48, -34, -20, -7, 7, 20, 34, 48];

function CapturedPhrase() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const inActionRef = useRef<HTMLSpanElement>(null);
  const cornersRef = useRef<HTMLSpanElement>(null);
  const flashRef = useRef<HTMLSpanElement>(null);
  const wordBoxRef = useRef<HTMLSpanElement>(null);
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
        const validLetters = letterRefs.current.filter(Boolean);

        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 3.2,
          paused: true,
        });
        tlRef.current = tl;

      // 1. Initial State: relaxed ambient viewfinder watermark
      gsap.set(cornersRef.current, { scale: 1.12, opacity: 0.35 });
      gsap.set(flashRef.current, { xPercent: -120, opacity: 0 });
      gsap.set(inActionRef.current, { x: 0 });

      const isMobile = window.innerWidth < 640;
      const spreadScale = isMobile ? 0.4 : 1;

      // 2. Optical Breathing / Lens Aperture Expansion:
      // Letters separate slightly and viewfinder brackets widen,
      // while "in action" smoothly glides outward in lockstep (preventing any overlap)
      tl.to(validLetters, {
        xPercent: (i) => SPREAD_X[i] * spreadScale,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: {
          amount: 0.1,
          from: "center",
        },
      })
        .to(
          cornersRef.current,
          {
            scale: isMobile ? 1.12 : 1.22,
            opacity: 0.75,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          inActionRef.current,
          {
            x: isMobile ? "0.3em" : "0.85em",
            duration: 0.8,
            ease: "power2.inOut",
          },
          "<"
        )
        // 3. Tack-sharp Focus Lock:
        // Letters snap together, brackets contract tightly into focus lock,
        // and "in action" snaps back inward in lockstep
        .to(validLetters, {
          xPercent: 0,
          duration: 0.45,
          ease: "back.out(2.4)",
          stagger: {
            amount: 0.08,
            from: "edges",
          },
        })
        .to(
          cornersRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: "back.out(2.8)",
          },
          "<"
        )
        .to(
          inActionRef.current,
          {
            x: 0,
            duration: 0.45,
            ease: "back.out(2.2)",
          },
          "<"
        )
        // 4. Camera Shutter Click: micro kinetic scale dip + optical flash sweep + recoil
        .to(wordBoxRef.current, {
          scale: 0.96,
          duration: 0.08,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        })
        .to(
          flashRef.current,
          {
            xPercent: 120,
            opacity: 0.85,
            duration: 0.35,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          inActionRef.current,
          {
            scale: 0.98,
            duration: 0.08,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
          },
          "<"
        )
        // 5. Release and settle back to ambient state
        .to(
          cornersRef.current,
          {
            scale: 1.12,
            opacity: 0.35,
            duration: 0.7,
            ease: "power2.out",
          },
          "+=0.4"
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
      onMouseEnter={() => tlRef.current?.restart()}
      onClick={() => tlRef.current?.restart()}
      className="inline-flex items-center select-none cursor-pointer will-change-transform"
      title="Click or hover to focus & capture"
    >
      {/* The animated "Captured" word with viewfinder brackets */}
      <span
        ref={wordBoxRef}
        className="relative inline-flex items-center px-2.5 sm:px-3.5 py-0.5 text-[#274193] align-baseline will-change-transform"
      >
        {/* Viewfinder Corner Brackets */}
        <span
          ref={cornersRef}
          className="absolute inset-0 pointer-events-none will-change-transform"
        >
          {/* Top-Left */}
          <span className="absolute -top-1 -left-1 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-t-2 border-l-2 border-[#274193] rounded-tl-[3px]" />
          {/* Top-Right */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-t-2 border-r-2 border-[#274193] rounded-tr-[3px]" />
          {/* Bottom-Left */}
          <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-b-2 border-l-2 border-[#274193] rounded-bl-[3px]" />
          {/* Bottom-Right */}
          <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-b-2 border-r-2 border-[#274193] rounded-br-[3px]" />
        </span>

        {/* Shutter Exposure Flash Sweep */}
        <span className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
          <span
            ref={flashRef}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg]"
          />
        </span>

        {/* Animated Letters */}
        <span className="relative z-10 inline-flex items-center font-black tracking-[-0.035em]">
          {CAPTURED_LETTERS.map((char, i) => (
            <span
              key={i}
              ref={(el) => {
                letterRefs.current[i] = el;
              }}
              className="inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
        </span>
      </span>

      {/* "in action" glides outward in lockstep when "Captured" expands, preventing any overlap */}
      <span
        ref={inActionRef}
        className="inline-block text-gray-950 font-black will-change-transform ml-2 sm:ml-4 whitespace-nowrap"
      >
        in action
      </span>
    </span>
  );
}

const galleryItems = [
  {
    initialIndex: 0,
    title: "Nile Tech Summit & Keynotes",
    tag: "Conference",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    height: "h-80 md:h-[450px]",
  },
  {
    initialIndex: 14,
    title: "CodeSprint 48-Hour Hackathon",
    tag: "Hackathon",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    height: "h-64 md:h-[215px]",
  },
  {
    initialIndex: 28,
    title: "Executive Strategic Planning",
    tag: "Leadership",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    height: "h-64 md:h-[215px]",
  },
  {
    initialIndex: 42,
    title: "Peer Mentorship & Code Review",
    tag: "Workshops",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    height: "h-64 md:h-[215px]",
  },
  {
    initialIndex: 56,
    title: "Systems Architecture Masterclass",
    tag: "Academic",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    height: "h-64 md:h-[215px]",
  },
  {
    initialIndex: 70,
    title: "Project Demos & Prototype Pitching",
    tag: "Showcase",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    height: "h-64 md:h-[240px]",
  },
  {
    initialIndex: 84,
    title: "Community Guild Gathering",
    tag: "Community",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    height: "h-64 md:h-[240px]",
  },
  {
    initialIndex: 98,
    title: "CyberDef Defense Briefing",
    tag: "CyberSec",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    height: "h-64 md:h-[240px]",
  },
];

const INITIAL_INDICES = galleryItems.map((item) => item.initialIndex);
const CARD_CYCLE_ORDER = [0, 3, 6, 1, 4, 7, 2, 5];

// ── Preloaded cinematic cross-dissolve gallery card ──────────────────────────
function CyclingGalleryCard({
  item,
  photoIndex,
  onHover,
  onLeave,
}: {
  item: (typeof galleryItems)[0];
  photoIndex: number;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [currentUrl, setCurrentUrl] = useState(() => getIkUrl(photoIndex));
  const [incomingUrl, setIncomingUrl] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);
  const activeIndexRef = useRef(photoIndex);

  // The very first photo each card ever shows previously popped in the
  // instant it decoded — on a slow connection, or right as content-visibility
  // hands this section its first real layout, that read as a brief flash of
  // an image snapping into place. Fading it in on its own onLoad (once,
  // never again — the cross-dissolve already covers every swap after this)
  // smooths that first paint out.
  const [baseLoaded, setBaseLoaded] = useState(false);

  useEffect(() => {
    if (photoIndex === activeIndexRef.current) return;
    activeIndexRef.current = photoIndex;

    const nextUrl = getIkUrl(photoIndex);
    let cancelled = false;

    // Preload image in browser memory before initiating the dissolve
    const img = new window.Image();
    img.src = nextUrl;

    const onImageLoaded = () => {
      if (cancelled) return;
      setIncomingUrl(nextUrl);
      setIsFading(false);

      // Allow DOM to mount incomingUrl at opacity 0 before transitioning
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) {
            setIsFading(true);
          }
        });
      });
    };

    if (img.complete) {
      onImageLoaded();
    } else {
      img.onload = onImageLoaded;
      img.onerror = () => {
        // Fallback on error - skip without breaking
      };
    }

    return () => {
      cancelled = true;
      img.onload = null;
      img.onerror = null;
    };
  }, [photoIndex]);

  // When fade transition finishes (1100ms), promote incomingUrl to base currentUrl
  useEffect(() => {
    if (!isFading || !incomingUrl) return;

    const timer = setTimeout(() => {
      setCurrentUrl(incomingUrl);
      setIncomingUrl(null);
      setIsFading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, [isFading, incomingUrl]);

  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  // Positions the border-glow's radial-gradient center at the cursor via a
  // CSS custom property, written directly to the DOM (no setState) so
  // hovering one of ~8 cards doesn't trigger a React re-render per frame.
  const handleGlowMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current?.style.setProperty("--mx", `${x}%`);
    glowRef.current?.style.setProperty("--my", `${y}%`);
  };

  // Card rises into place (reversibly — scrolling back up slides it back
  // out) as it crosses the viewport, and its photo drifts inside the frame
  // the same way AboutBento's stat images do: an oversized wrapper nudged
  // vertically by scroll so it never exposes an edge. Two separate
  // scrubbed tweens sharing the card as trigger, not fighting each other —
  // one moves the card, the other moves the image inside it.
  useIsomorphicLayoutEffect(() => {
    const card = cardRef.current;
    const imgWrap = imgWrapRef.current;
    if (!card || !imgWrap) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set(card, { opacity: 0, y: 36 });
      gsap.to(card, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 92%",
          end: "top 60%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(imgWrap, { scale: 1.12, transformOrigin: "center center" });
      gsap.fromTo(
        imgWrap,
        { yPercent: -6 },
        {
          yPercent: 6,
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    // Persistent (not self-disconnecting) — re-measures on every crossing
    // of the margin, both the way in *and* the way out. A one-shot "refresh
    // once on first entry" observer left the outgoing edge uncorrected: the
    // card's cached scroll range could still drift stale over time (window
    // resize, other layout shifts elsewhere on the page), and the only
    // symptom was a one-time visible snap exactly as its trigger area left
    // the viewport, never again after that first correction.
    // Only worth watching if something up the tree can actually hand this a
    // collapsed measurement — otherwise it's a global ScrollTrigger.refresh()
    // on every scroll pass, once per card, fixing a bug that isn't there.
    const revealObserver = hasContentVisibilityAncestor(card)
      ? new IntersectionObserver(() => scheduleScrollTriggerRefresh(), { rootMargin: "800px 0px" })
      : null;
    revealObserver?.observe(card);

    return () => {
      revealObserver?.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <Link
      ref={cardRef}
      href="/gallery"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onMouseMove={handleGlowMove}
      className={`${item.colSpan} ${item.height} relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-950 border border-gray-200/80 group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 isolate block`}
    >
      {/* IMAGE STACK — wrapped so the scroll-drift tween (scale + yPercent)
          can own this layer without fighting the hover-zoom classes on the
          images themselves. */}
      <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
        {/* BASE CURRENT PHOTO - Stays 100% visible beneath so there is never a blank/gray gap */}
        <Image
          loader={imageKitGalleryLoader}
          src={currentUrl}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ aspectRatio: "4 / 3" }}
          onLoad={() => setBaseLoaded(true)}
          className={`object-cover object-top transition-[opacity,transform] duration-700 ease-out group-hover:scale-105 pointer-events-none z-1 ${
            baseLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* INCOMING PHOTO - Preloaded in memory, then cross-dissolves in on top */}
        {incomingUrl && (
          <Image
            loader={imageKitGalleryLoader}
            src={incomingUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ aspectRatio: "4 / 3" }}
            className={`object-cover object-top transition-[opacity,transform] duration-1000 ease-in-out group-hover:scale-105 pointer-events-none z-2 ${
              isFading ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* NATURAL CINEMATIC GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 z-10 pointer-events-none" />

      {/* CONTENT BADGES */}
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between pointer-events-none z-20">
        <div className="flex justify-start">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white/80 drop-shadow-sm">
            {item.tag}
          </span>
        </div>

        <div>
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug drop-shadow-sm">
            {item.title}
          </h3>
        </div>
      </div>

      {/* BORDER GLOW — a ring, not a wash: painted only into the 1.5px
          stroke via the padding + mask-composite "exclude" trick, so just
          the edge nearest the cursor lights up rather than the whole card. */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
        style={{
          padding: "1.5px",
          // Brand primary blue (#274193) at the cursor, fading through the
          // site's lighter accent blue (#60a5fa) rather than a generic sky blue.
          background:
            "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), #274193, rgba(96,165,250,0.55) 45%, transparent 70%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        } as React.CSSProperties}
      />
    </Link>
  );
}

export default function GallerySection() {
  const [photoIndices, setPhotoIndices] = useState<number[]>(INITIAL_INDICES);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);

  const [isMobilePaused, setIsMobilePaused] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useSectionHeaderReveal(headerRef);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsMobilePaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsMobilePaused(false);
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Only swipe if horizontal movement clearly exceeds vertical scroll movement
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 35) {
      if (dx < 0) {
        setActiveMobileIndex((prev) => (prev + 1) % galleryItems.length);
      } else {
        setActiveMobileIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Auto-advance mobile carousel only when visible
  useEffect(() => {
    if (isMobilePaused) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let interval: ReturnType<typeof setInterval> | null = null;

    const startTimer = () => {
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        setActiveMobileIndex((prev) => (prev + 1) % galleryItems.length);
      }, 3800);
    };

    const stopTimer = () => {
      if (interval) clearInterval(interval);
      interval = null;
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
  }, [activeMobileIndex, isMobilePaused]);

  // Desktop photo cycle only when visible
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let step = 0;
    let interval: ReturnType<typeof setInterval> | null = null;

    const startTimer = () => {
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        const cardToUpdate = CARD_CYCLE_ORDER[step % CARD_CYCLE_ORDER.length];
        step++;

        // Don't change photo on a tile the user is actively hovering
        if (hoveredIndex === cardToUpdate) return;

        setPhotoIndices((prev) => {
          const inUse = new Set(prev);
          const available: number[] = [];
          for (let i = 0; i < TOTAL_PHOTOS; i++) {
            if (!inUse.has(i)) available.push(i);
          }
          if (available.length === 0) return prev;

          const nextRandom = available[Math.floor(Math.random() * available.length)];
          const next = [...prev];
          next[cardToUpdate] = nextRandom;
          return next;
        });
      }, 3200);
    };

    const stopTimer = () => {
      if (interval) clearInterval(interval);
      interval = null;
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
  }, [hoveredIndex]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100"
    >
      {/* SECTION HEADER - CENTERED & BIGGER (MATCHING SITE ARCHITECTURE) */}
      <div className="relative">
        <TechIconField icons={HEADER_TECH_ICONS} />
        <div ref={headerRef} className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <p data-reveal="eyebrow" className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-600 font-bold mb-3 sm:mb-4">
            Life at NACOS Nile
          </p>
          <h2 data-reveal="heading" className="font-deacon uppercase text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-950 tracking-[-0.035em] leading-[1.08]">
            <CapturedPhrase /> <br className="hidden sm:inline" />across campus
          </h2>
          <p data-reveal="subtitle" className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed mt-4 max-w-xl">
            A glimpse into our hackathon battlegrounds, lab build sessions, project demo days, and collaborative study groups at Nile University.
          </p>
          <Link
            href="/gallery"
            className="mt-6 hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F6F6F6] hover:bg-gray-200/80 text-gray-900 font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <span>View all 160+ photos</span>
            <svg className="w-4 h-4 text-gray-700 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* DESKTOP: ASYMMETRIC MASONRY GALLERY GRID WITH DYNAMIC AMBIENT CYCLING */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {galleryItems.map((item, i) => (
          <CyclingGalleryCard
            key={i}
            item={item}
            photoIndex={photoIndices[i]}
            onHover={() => setHoveredIndex(i)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      {/* MOBILE: INTERACTIVE PEEK CAROUSEL (STACKED CARDS UNDER SHOWING LEFT & RIGHT ENDS) */}
      <div className="block md:hidden relative w-full select-none py-2 overflow-visible">
        {/* Carousel Viewport Stage */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => setIsMobilePaused(false)}
          className="relative w-full h-[360px] xs:h-[400px] flex items-center justify-center overflow-visible"
        >
          {galleryItems.map((item, i) => {
            let diff = i - activeMobileIndex;
            if (diff < -galleryItems.length / 2) {
              diff += galleryItems.length;
            } else if (diff > galleryItems.length / 2) {
              diff -= galleryItems.length;
            }

            const isCenter = diff === 0;
            const isNext = diff === 1;
            const isPrev = diff === -1;

            let transform = "translateX(-50%) translateY(14px) scale(0.85) rotate(0deg)";
            let opacity = 0;
            let zIndex = 0;
            let pointerEvents: "auto" | "none" = "none";

            if (isCenter) {
              transform = "translateX(-50%) translateY(0px) scale(1) rotate(0deg)";
              opacity = 1;
              zIndex = 20;
              pointerEvents = "auto";
            } else if (isNext) {
              transform = "translateX(calc(-50% + 44px)) translateY(8px) scale(0.92) rotate(3deg)";
              opacity = 0.65;
              zIndex = 10;
              pointerEvents = "auto";
            } else if (isPrev) {
              transform = "translateX(calc(-50% - 44px)) translateY(8px) scale(0.92) rotate(-3deg)";
              opacity = 0.65;
              zIndex = 10;
              pointerEvents = "auto";
            } else if (diff > 1) {
              transform = "translateX(calc(-50% + 80px)) translateY(14px) scale(0.85) rotate(5deg)";
              opacity = 0;
              zIndex = 0;
            } else {
              transform = "translateX(calc(-50% - 80px)) translateY(14px) scale(0.85) rotate(-5deg)";
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={i}
                onClick={() => {
                  if (isNext) {
                    setActiveMobileIndex((prev) => (prev + 1) % galleryItems.length);
                  } else if (isPrev) {
                    setActiveMobileIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
                  }
                }}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents,
                  transition: "transform 450ms cubic-bezier(0.22, 1, 0.36, 1), opacity 450ms ease",
                }}
                className={`absolute top-0 left-1/2 w-[78%] xs:w-[76%] max-w-[305px] h-[350px] xs:h-[390px] rounded-3xl overflow-hidden bg-gray-950 border border-white/10 ${
                  isCenter
                    ? "shadow-[0_22px_45px_-10px_rgba(0,0,0,0.45)] ring-1 ring-white/15"
                    : "cursor-pointer shadow-lg hover:opacity-75"
                }`}
              >
                {/* Photo Image */}
                <Image
                  loader={imageKitGalleryLoader}
                  src={getIkUrl(photoIndices[i])}
                  alt={item.title}
                  fill
                  sizes="320px"
                  priority={isCenter}
                  style={{ aspectRatio: "3 / 4" }}
                  className="object-cover object-top pointer-events-none"
                />

                {/* Natural Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none z-10" />

                {/* Dark Glass Shade for non-center peek cards (Enhances the 'faded under' depth) */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px] pointer-events-none z-15" />
                )}

                {/* Titles (category badge intentionally omitted on mobile) */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end z-20 pointer-events-none">
                  <div>
                    <h3 className="text-sm xs:text-base font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                    {isCenter && (
                      <Link
                        href="/gallery"
                        className="inline-flex items-center gap-1 text-[11px] text-white/75 font-medium mt-1.5 pointer-events-auto hover:text-white transition-colors"
                      >
                        <span>Explore full gallery</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA: View all photos placed directly under the carousel */}
        <div className="flex justify-center mt-6">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F6F6F6] hover:bg-gray-200/80 text-gray-900 font-semibold text-sm transition-all duration-300 active:scale-95 shadow-2xs group"
          >
            <span>View all 160+ photos</span>
            <svg className="w-4 h-4 text-gray-700 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
