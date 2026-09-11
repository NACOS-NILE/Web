"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { excos, type ExcoSocials } from "@/data/excos";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";

const N = excos.length; // 9

// ── Social row: small circular chips under each exco's name/department ──
// Outline chips at rest (muted, doesn't compete with the name), filling to
// solid brand blue with a slight lift on hover — the same "quiet until you
// engage" language the footer's social links already use, just compact
// enough to fit a leadership card instead of a footer row. Real brand
// marks (not generic line icons) since these ARE the actual platforms,
// matching the filled GitHub mark Footer.tsx already uses. Nothing renders
// for a member with no socials entry at all, or one where every field is
// empty — no empty chip row taking up space under a bio-only card.
const LinkedInGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const GithubGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const WebsiteGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18" />
    <path strokeLinecap="round" d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
  </svg>
);

// Actual quote-mark icon (not just a big typographic character) marking
// the bio-as-quote under each spotlight card's socials row.
const QuoteGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-4v-10h10z" />
  </svg>
);

const SOCIAL_PLATFORMS: { key: keyof ExcoSocials; label: string; icon: React.ReactNode }[] = [
  { key: "linkedin", label: "LinkedIn", icon: <LinkedInGlyph /> },
  { key: "instagram", label: "Instagram", icon: <InstagramGlyph /> },
  { key: "github", label: "GitHub", icon: <GithubGlyph /> },
  { key: "website", label: "Website", icon: <WebsiteGlyph /> },
];

function ExcoSocialRow({ name, socials }: { name: string; socials?: ExcoSocials }) {
  const present = socials ? SOCIAL_PLATFORMS.filter((p) => socials[p.key]) : [];
  if (present.length === 0) return null;

  return (
    // Card itself is a clickable div (opens the detail modal) — without
    // stopping propagation here, tapping a social icon would also fire
    // that click and immediately cover the icon's own destination with
    // the modal.
    <div className="flex items-center gap-1.5 mt-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
      {present.map(({ key, label, icon }) => (
        <a
          key={key}
          href={socials![key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on ${label}`}
          className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 hover:bg-[#274193] hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <span className="w-3 h-3">{icon}</span>
        </a>
      ))}
    </div>
  );
}

export default function ExcoArch() {
  const [cardWidth, setCardWidth] = useState(315);
  const [gap, setGap] = useState(58);
  const [isReady, setIsReady] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const liftRef = useRef<HTMLDivElement>(null);
  const activeIdxRef = useRef(4); // President by default
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quoteRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imgWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const proxy = useRef({ offset: -4 * (315 + 58) });
  const targetOffsetRef = useRef(-4 * (315 + 58));

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);

  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelSnapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Measure dimensions responsively and align offset immediately.
  // useLayoutEffect so the initial measurement + isReady flip happen
  // synchronously before paint (avoids a visible flash and the
  // cascading-render lint warning that a plain useEffect would trigger here).
  useIsomorphicLayoutEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      let newW = 320;
      let newGap = 58;
      if (w < 380) {
        newW = 195;
        newGap = 30;
      } else if (w < 640) {
        newW = 205;
        newGap = 34;
      } else if (w < 768) {
        newW = 240;
        newGap = 42;
      } else if (w < 1024) {
        newW = 270;
        newGap = 48;
      } else if (w < 1280) {
        newW = 295;
        newGap = 52;
      }

      setCardWidth(newW);
      setGap(newGap);

      // Re-center on active card index immediately for new spacing
      const newSpacing = newW + newGap;
      const newOffset = -activeIdxRef.current * newSpacing;
      proxy.current.offset = newOffset;
      targetOffsetRef.current = newOffset;
    };

    updateDimensions();
    setIsReady(true);

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const currentCardSpacing = cardWidth + gap;

  // Direct GPU Transform update on card DOM nodes via GSAP (0 React re-renders)
  const updateCards = useCallback(() => {
    const currentOffset = proxy.current.offset;
    const spacing = cardWidth + gap;
    const totalW = N * spacing;

    cardRefs.current.forEach((cardEl, idx) => {
      if (!cardEl) return;

      const rawX = idx * spacing + currentOffset;
      let x = ((rawX % totalW) + totalW) % totalW;
      if (x > totalW / 2) {
        x -= totalW;
      }

      const dist = Math.abs(x);
      const maxRange = spacing * 2.5;
      const progress = Math.min(dist / maxRange, 1);

      // Card scaling and vertical offset
      const scale = 1.15 - progress * 0.38;
      const yOffset = progress * 95;
      const zIndex = Math.round((1 - progress) * 40) + 5;

      // 3D Spatial curvature: subtle inward tilt (~14deg at perimeter)
      const rotateY = (x / totalW) * -65;

      // Smooth opacity culling at the edges so wrapping is 100% invisible
      const fadeStart = spacing * 2.0;
      const fadeEnd = spacing * 2.45;
      let opacity = 1;
      if (dist > fadeStart) {
        opacity = Math.max(0, 1 - (dist - fadeStart) / (fadeEnd - fadeStart));
      }

      gsap.set(cardEl, {
        x,
        y: yOffset,
        scale,
        rotateY,
        zIndex,
        opacity,
        // "block" (not "flex") when visible — this now targets the
        // positioning SLOT wrapper, not the card's own flex-col body, so
        // restoring it to a flex display turned it into an (unintended)
        // flex row container and squished its white-body child down to
        // content-width instead of letting it fill the slot.
        display: opacity <= 0.01 ? "none" : "block",
        transformPerspective: 1200,
        transformOrigin: "bottom center",
      });

      // Quote only for whichever card is actually front-and-center — every
      // card carries one in the DOM (so there's nothing to mount/unmount
      // as the active card changes), this just toggles which one is
      // visible, off the exact same per-frame `dist` this loop already
      // computes for positioning. No React state for "which card is
      // active" on purpose: that would mean a re-render on every drag/
      // autoplay/snap frame — this stays a plain style write, same as
      // every other per-card property set above.
      const quoteEl = quoteRefs.current[idx];
      if (quoteEl) {
        quoteEl.style.opacity = dist < spacing * 0.5 ? "1" : "0";
      }
    });
  }, [cardWidth, gap]);

  // Animate offset to target using GSAP
  const animateTo = useCallback(
    (target: number, duration = 0.75, ease = "power3.out") => {
      targetOffsetRef.current = target;
      gsap.killTweensOf(proxy.current);
      gsap.to(proxy.current, {
        offset: target,
        duration,
        ease,
        onUpdate: updateCards,
        overwrite: "auto",
      });
    },
    [updateCards]
  );

  // Stop auto-play and any pending resume timer
  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  // Start auto-play (skipped entirely under prefers-reduced-motion — the
  // carousel stays fully usable via drag/click/wheel/arrows, it just won't
  // move on its own)
  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    autoPlayTimerRef.current = setInterval(() => {
      activeIdxRef.current = (activeIdxRef.current + 1) % N;
      animateTo(targetOffsetRef.current - currentCardSpacing, 0.9, "power3.inOut");
    }, 3800);
  }, [animateTo, currentCardSpacing, stopAutoPlay]);

  // Pause on user action and automatically resume after 3.8s of inactivity
  const pauseAndScheduleResume = useCallback(() => {
    stopAutoPlay();
    resumeTimerRef.current = setTimeout(() => {
      startAutoPlay();
    }, 3800);
  }, [stopAutoPlay, startAutoPlay]);

  // Re-run updateCards on dimension change
  useEffect(() => {
    updateCards();
  }, [updateCards]);

  // Start auto-play only when in or near viewport
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (containerRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAutoPlay();
          } else {
            stopAutoPlay();
          }
        },
        { rootMargin: "150px" }
      );
      observer.observe(containerRef.current);
    }

    return () => {
      observer?.disconnect();
      stopAutoPlay();
      if (wheelSnapTimerRef.current) clearTimeout(wheelSnapTimerRef.current);
    };
  }, [startAutoPlay, stopAutoPlay]);

  // Vertical scroll tracking for page emergence lift using RAF (zero React re-renders).
  // Skipped under prefers-reduced-motion — this is purely ambient parallax.
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!liftRef.current) return;
        const lift = Math.min(window.scrollY * 0.45, 80);
        liftRef.current.style.transform = `translate3d(0, -${lift}px, 0)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Per-card photo drift: same oversized-wrapper scroll-scrub technique as
  // AboutBento's stat images and the gallery cards — each cutout is scaled
  // up slightly and nudged vertically as its own card crosses the
  // viewport, so it never exposes an edge of the (much smaller) source
  // photo. Independent of the liftRef parallax above, which moves the
  // whole arch as one unit; this moves each photo within its own frame,
  // layering the two for more depth than either alone. Cards aren't
  // remeasured under content-visibility here (this section isn't wrapped
  // in it), so a plain scrub — no invalidateOnRefresh dance — is enough.
  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      imgWrapRefs.current.forEach((el, i) => {
        const card = cardRefs.current[i];
        if (!el || !card) return;
        gsap.set(el, { scale: 1.14, transformOrigin: "center center" });
        gsap.fromTo(
          el,
          { yPercent: -6 },
          {
            yPercent: 6,
            scale: 1.14,
            ease: "none",
            scrollTrigger: {
              trigger: card,
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

  const startYRef = useRef(0);
  const hasDecidedAxisRef = useRef(false);
  const isHorizontalDragRef = useRef(false);

  // Pointer Drag Handlers with Velocity & Momentum
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    stopAutoPlay();
    gsap.killTweensOf(proxy.current);
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    dragStartOffsetRef.current = proxy.current.offset;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    hasDecidedAxisRef.current = false;
    isHorizontalDragRef.current = false;

    // For mouse, we can directly engage; for touch, we wait for gesture direction
    if (e.pointerType === "mouse") {
      hasDecidedAxisRef.current = true;
      isHorizontalDragRef.current = true;
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    if (!hasDecidedAxisRef.current) {
      const dx = Math.abs(e.clientX - startXRef.current);
      const dy = Math.abs(e.clientY - startYRef.current);

      if (dx > 7 || dy > 7) {
        hasDecidedAxisRef.current = true;
        if (dx > dy) {
          // Horizontal intent: lock pointer capture and drag cards
          isHorizontalDragRef.current = true;
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {
            // ignore
          }
        } else {
          // Vertical intent: release drag and let browser scroll the page smoothly
          isDraggingRef.current = false;
          isHorizontalDragRef.current = false;
          return;
        }
      } else {
        return;
      }
    }

    if (!isHorizontalDragRef.current) return;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 8) {
      velocityRef.current = (e.clientX - lastXRef.current) / dt;
      lastXRef.current = e.clientX;
      lastTimeRef.current = now;
    }
    const delta = e.clientX - startXRef.current;
    proxy.current.offset = dragStartOffsetRef.current + delta;
    updateCards();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current && !isHorizontalDragRef.current) return;
    const wasDragging = isHorizontalDragRef.current;
    isDraggingRef.current = false;
    isHorizontalDragRef.current = false;
    hasDecidedAxisRef.current = false;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    if (!wasDragging) return;

    // Momentum throw calculation
    const v = velocityRef.current;
    const momentum = v * 220; // flick distance based on drag speed
    const projectedOffset = proxy.current.offset + momentum;
    const spacing = cardWidth + gap;
    const nearestStep = Math.round(projectedOffset / spacing) * spacing;
    activeIdxRef.current = ((Math.round(-nearestStep / spacing) % N) + N) % N;

    const duration = Math.min(Math.max(Math.abs(v) * 0.7, 0.55), 1.1);
    animateTo(nearestStep, duration, "power3.out");
    pauseAndScheduleResume();
  };

  // Wheel horizontal scrolling
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const delta = e.deltaX !== 0 ? e.deltaX : e.shiftKey ? e.deltaY : 0;
    if (Math.abs(delta) > 3) {
      stopAutoPlay();
      gsap.killTweensOf(proxy.current);
      if (wheelSnapTimerRef.current) clearTimeout(wheelSnapTimerRef.current);

      // Follow the wheel/trackpad 1:1 while events are actively arriving —
      // no easing here on purpose, direct tracking is what should feel
      // immediate.
      const newTarget = proxy.current.offset - delta * 1.3;
      proxy.current.offset = newTarget;
      updateCards();

      // But nothing ever animated it to rest afterward — the carousel just
      // sat wherever the last event left it the instant scrolling stopped,
      // which reads as a hard stop instead of a settle. Debounce a smooth
      // snap-to-nearest-card once wheel input actually stops arriving
      // (trackpad momentum keeps firing events for a while on its own).
      wheelSnapTimerRef.current = setTimeout(() => {
        const spacing = cardWidth + gap;
        const nearestStep = Math.round(proxy.current.offset / spacing) * spacing;
        activeIdxRef.current = ((Math.round(-nearestStep / spacing) % N) + N) % N;
        animateTo(nearestStep, 0.5, "power3.out");
      }, 140);

      pauseAndScheduleResume();
    }
  };

  // Click card to center it
  const handleCardClick = (idx: number) => {
    const spacing = cardWidth + gap;
    const totalW = N * spacing;
    const rawX = idx * spacing + proxy.current.offset;
    let x = ((rawX % totalW) + totalW) % totalW;
    if (x > totalW / 2) x -= totalW;

    if (Math.abs(x) > 10) {
      activeIdxRef.current = idx;
      animateTo(targetOffsetRef.current - x, 0.75, "power3.out");
      pauseAndScheduleResume();
    }
  };

  // Previous card navigation button
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    activeIdxRef.current = (activeIdxRef.current - 1 + N) % N;
    animateTo(targetOffsetRef.current + currentCardSpacing, 0.7, "power3.out");
    pauseAndScheduleResume();
  };

  // Next card navigation button
  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    activeIdxRef.current = (activeIdxRef.current + 1) % N;
    animateTo(targetOffsetRef.current - currentCardSpacing, 0.7, "power3.out");
    pauseAndScheduleResume();
  };

  return (
    <div
      ref={containerRef}
      className="w-full relative z-30 flex flex-col items-center select-none overflow-visible [perspective:1400px]"
    >
      {/* ACCESSIBLE SECTION HEADING */}
      <h2 className="sr-only">Executive Leadership</h2>

      {/* Ambient background glows inspired by NACOSPay root */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] max-w-[1000px] h-[450px] bg-gradient-to-tr from-[#274193]/[0.10] via-[#274193]/[0.04] to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-[8%] w-[35vw] max-w-[420px] h-[300px] bg-[#274193]/[0.08] rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-[8%] w-[35vw] max-w-[420px] h-[300px] bg-[#274193]/[0.06] rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Interactive Arch Stage */}
      <div
        ref={liftRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        className={`w-full relative h-[400px] xs:h-[420px] sm:h-[570px] md:h-[640px] lg:h-[700px] xl:h-[750px] flex items-end justify-center cursor-grab active:cursor-grabbing overflow-visible touch-pan-y transition-opacity duration-300 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {/* All Exco Cards */}
        {excos.map((exco, idx) => (
          <div
            key={exco.name}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            onClick={() => handleCardClick(idx)}
            className="absolute -bottom-[78px] sm:-bottom-[94px] md:-bottom-[102px] lg:-bottom-[110px] xl:-bottom-[118px] cursor-pointer select-none"
            style={{
              width: `${cardWidth}px`,
              left: "50%",
              marginLeft: `${-cardWidth / 2}px`,
              willChange: "transform",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* WHITE CARD BODY — the visible chrome (bg, border, rounding,
                bottom fade mask, name/department). Split out from the photo
                below because CSS mask-image implicitly confines EVERYTHING
                inside the masked element to its own box, `overflow` setting
                or not — a photo trying to escape above this box's top edge
                would just get cut off at that edge by the mask itself, same
                as if overflow-hidden were set, no matter what its own
                clip-path says. Rendering the photo as a sibling instead
                (below) means it's never a descendant of this mask, so its
                own escape isn't subject to it. */}
            <div
              className="rounded-t-[2rem] bg-white text-gray-900 border border-b-0 border-gray-200/80 flex flex-col justify-between
                h-[470px] sm:h-[580px] md:h-[640px] lg:h-[690px] xl:h-[730px]"
              style={{
                // Fades the whole card body — bg, border, everything — into
                // nothing over the reserved space at the bottom. The internal
                // gradient fill alone couldn't do this: it only faded its own
                // color, not the card's actual rectangular edge underneath it,
                // which is what was still visibly "cutting off." Stays solid
                // through the photo-spacer + name + department (~65%).
                WebkitMaskImage: "linear-gradient(to bottom, white 0%, white 65%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, white 0%, white 65%, transparent 100%)",
              }}
            >
              {/* Invisible spacer, same box as the real (escaping) photo
                  layer below — reserves the identical footprint in normal
                  flow so the name/department start in exactly the same
                  place as before. The actual photo renders on top of this,
                  not inside it. */}
              <div className="p-1 sm:p-1.5 pb-0 shrink-0 aspect-[4/5] invisible" aria-hidden="true" />

              {/* BOTTOM: name + department, on the card's own white */}
              <div className="pt-2 sm:pt-2.5 pb-2.5 sm:pb-3 px-3 sm:px-3.5 flex flex-col flex-1 min-h-0 text-left">
                {/* Full Name */}
                <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-950 tracking-tight leading-snug shrink-0">
                  {exco.name}
                </h3>

                {/* Department Metadata */}
                <div className="flex items-center gap-1.5 mt-0.5 shrink-0">
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-tight">
                    {exco.department}
                  </span>
                </div>

                <ExcoSocialRow name={exco.name} socials={exco.socials} />

                {/* Quote — this is what `exco.bio` actually is (a one-line
                    personal line, not a bio paragraph), so it reads as one:
                    a quote-mark icon standing in for an opening quotation
                    mark, the line itself in a quiet italic. Every card
                    renders its own quote (nothing to mount/unmount as the
                    carousel moves) but starts at opacity 0 — only the one
                    currently front-and-center gets faded in, imperatively,
                    from the per-frame position loop above (see the
                    quoteRefs write in updateCards) rather than through
                    React state, so cycling through the carousel doesn't
                    re-render on every drag/autoplay frame. */}
                <p
                  ref={(el) => {
                    quoteRefs.current[idx] = el;
                  }}
                  style={{ opacity: 0 }}
                  className="relative mt-2 pl-4 text-xs sm:text-sm text-gray-500 italic leading-snug line-clamp-2 shrink-0 transition-opacity duration-300"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#274193]/70"
                  >
                    <QuoteGlyph />
                  </span>
                  {exco.bio}
                </p>

                {/* Reserved space — fill fades out via gradient rather than
                    sitting as flat white */}
                <div className="mt-2 -mx-3 sm:-mx-3.5 -mb-2.5 sm:-mb-3 flex-1 bg-gradient-to-b from-white to-transparent" />
              </div>
            </div>

            {/* TOP: Photo — a sibling of the masked white body above, laid
                over its invisible spacer, so it isn't subject to that mask.
                Keeps its own inset "mat" padding, fixed 4:5 aspect. No
                shadow. Radial vignette mat behind the photo: invisible for
                the opaque original photos (they cover it entirely), but
                shows through as the background for the cutout
                (transparent-bg) photos being tested — brand blue glowing
                around the face, fading to near-black at the corners rather
                than a flat fill. Center is pulled up to ~35% (not a dead-
                centered 50%) since object-top framing puts the face in the
                upper half of the box; a geometrically-centered glow would
                light up the chest instead of the face.

                clip-path (not overflow-hidden) does the clipping: a negative
                top inset pushes the clip boundary above this box WITHOUT
                the box itself growing — its own layout size/footprint here
                is untouched, only the paint boundary moves. That's the
                actual point of using clip-path over "make the container
                taller": a reserved-space version grows the box, which reads
                as the container itself getting bigger; this keeps the same
                geometry and only lets the photo's paint spill past it.
                Sides/bottom stay clipped + rounded exactly as before (0
                inset there). */}
            <div className="absolute top-0 inset-x-0 p-1 sm:p-1.5 pb-0">
              <div
                className="relative w-full rounded-t-[1.6rem] rounded-bl-[1.6rem] rounded-br-none aspect-[4/5]"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 35%, #2f4da8 0%, #274193 30%, #14204a 60%, #05070f 88%, #000000 100%)",
                  clipPath: "inset(-28% 0px 0px 0px round 1.6rem 1.6rem 0px 1.6rem)",
                  WebkitClipPath: "inset(-28% 0px 0px 0px round 1.6rem 1.6rem 0px 1.6rem)",
                }}
              >
                <div
                  ref={(el) => {
                    imgWrapRefs.current[idx] = el;
                  }}
                  className="absolute inset-0 will-change-transform"
                >
                  <Image
                    src={exco.photo}
                    alt={exco.name}
                    fill
                    priority={Boolean(exco.isPresident)}
                    unoptimized
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 330px, 380px"
                    style={{ aspectRatio: "4 / 5" }}
                    className="object-cover object-top pointer-events-none"
                  />
                </div>

                {/* Title Notch: Placed at bottom-right of image, pure white merged directly with card background */}
                <div className="absolute -bottom-px -right-px z-10 bg-white pl-3.5 pr-3 pt-1.5 pb-1 rounded-tl-2xl flex items-center gap-1.5">
                  {/* Inverted curve scallops with 2px overlap to eliminate subpixel gap */}
                  <svg
                    className="absolute -left-2.5 -bottom-0.5 w-3 h-3 text-white fill-current pointer-events-none"
                    viewBox="0 0 12 12"
                  >
                    <path d="M 10 0 C 10 5.52 5.52 10 0 10 L 0 12 L 12 12 L 12 0 Z" />
                  </svg>
                  <svg
                    className="absolute -right-0.5 -top-2.5 w-3 h-3 text-white fill-current pointer-events-none"
                    viewBox="0 0 12 12"
                  >
                    <path d="M 10 0 C 10 5.52 5.52 10 0 10 L 0 12 L 12 12 L 12 0 Z" />
                  </svg>

                  <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#274193]">
                    {exco.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Left Navigation Arrow - rendered AFTER cards with z-[100] so it sits firmly on top */}
        <button
          type="button"
          onClick={handlePrev}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Previous executive"
          className="absolute left-2 xs:left-4 sm:left-6 md:left-8 lg:left-12 bottom-14 xs:bottom-16 sm:bottom-28 md:bottom-32 lg:bottom-36 z-[100] p-2.5 sm:p-3.5 md:p-4 rounded-full bg-white/95 hover:bg-white text-gray-900 hover:text-[#274193] shadow-[0_10px_25px_-5px_rgba(39,65,147,0.18)] hover:shadow-[0_14px_30px_-5px_rgba(39,65,147,0.28)] border border-[#274193]/20 hover:border-[#274193]/40 backdrop-blur-md transition-all hover:scale-110 active:scale-95 focus:outline-none cursor-pointer flex items-center justify-center group"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Navigation Arrow - rendered AFTER cards with z-[100] so it sits firmly on top */}
        <button
          type="button"
          onClick={handleNext}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Next executive"
          className="absolute right-2 xs:right-4 sm:right-6 md:right-8 lg:right-12 bottom-14 xs:bottom-16 sm:bottom-28 md:bottom-32 lg:bottom-36 z-[100] p-2.5 sm:p-3.5 md:p-4 rounded-full bg-white/95 hover:bg-white text-gray-900 hover:text-[#274193] shadow-[0_10px_25px_-5px_rgba(39,65,147,0.18)] hover:shadow-[0_14px_30px_-5px_rgba(39,65,147,0.28)] border border-[#274193]/20 hover:border-[#274193]/40 backdrop-blur-md transition-all hover:scale-110 active:scale-95 focus:outline-none cursor-pointer flex items-center justify-center group"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
