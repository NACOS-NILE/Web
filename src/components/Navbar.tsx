"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { primaryNavLinks as navLinks, WHATSAPP_URL, PAY_DUES_URL } from "@/data/links";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const pillProgressRef = useRef<HTMLDivElement>(null);
  const pillProgressTrackRef = useRef<HTMLDivElement>(null);

  // Thin scroll-progress line, in two layers: a static `track` (the
  // permanent "stroke") and the blue `fill` that scaleX's over it with
  // scroll progress. Without the track, the stroke itself barely existed
  // until you'd scrolled a good way down — just the sliver the fill had
  // grown to.
  //
  // Two whole PAIRS of these exist rather than one pair whose position gets
  // reassigned: a fixed, full-width pair along the very top of the viewport
  // for the normal (non-pill) header, and a second pair that lives INSIDE
  // the nav pill itself, wrapped in a `rounded-full overflow-hidden` mask
  // matching the pill's own shape. A straight bar positioned by reading the
  // pill's bounding rect (left/top/width in JS) stays a straight line —
  // `border-radius` on the bar's own tiny corners doesn't make it trace the
  // pill's actual semicircular ends the way a real border would. Clipping a
  // straight bar with a mask shaped like the pill does: near the ends, the
  // mask itself curves inward, so the visible sliver of the bar narrows and
  // curves with it. Both pairs always render; only one is visible at a time
  // (toggled by `isScrolled`) — simpler and more robust than swapping which
  // element is mounted, since a single rAF-throttled scroll handler below
  // just writes the same progress value into whichever pair is showing.
  useEffect(() => {
    const fill = progressRef.current;
    const track = progressTrackRef.current;
    const pillFill = pillProgressRef.current;
    const pillTrack = pillProgressTrackRef.current;
    if (!fill || !track || !pillFill || !pillTrack) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      fill.style.transform = `scaleX(${progress})`;
      pillFill.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close mobile drawer on ESC and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Return focus to the trigger button when the drawer closes (keyboard users)
  useEffect(() => {
    if (!mobileMenuOpen && wasOpenRef.current) {
      menuButtonRef.current?.focus();
    }
    wasOpenRef.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let isPill = false;

    let availableW = typeof window !== "undefined" ? window.innerWidth : 1200;
    const updateAvailableWidth = () => {
      const parent = nav.parentElement;
      if (parent) {
        // parent.clientWidth includes the header's own horizontal padding
        // (px-3 sm:px-5 md:px-6 lg:px-8). The nav sits inside that padding,
        // so its real available width is the content box, not the full
        // padding box — otherwise the pill overflows past the right edge.
        const style = window.getComputedStyle(parent);
        const paddingX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        availableW = parent.clientWidth - paddingX;
      } else {
        availableW = window.innerWidth;
      }
    };
    updateAvailableWidth();
    window.addEventListener("resize", updateAvailableWidth, { passive: true });

    // Snap instead of tween for users who've asked for less motion — the
    // pill still changes state, it just doesn't animate getting there.
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // One shared duration/ease for both directions — and matched by the
    // inner content's own `duration-[350ms] ease-out` Tailwind transitions
    // below, so the pill's geometry and its contents (logo, text, gaps)
    // resize in lockstep instead of visibly drifting apart mid-transition.
    const PILL_DURATION = 0.35;
    const PILL_EASE = "power3.out";

    // rAF-throttled like the progress-bar effect above — the actual check
    // below is cheap, but this runs on every native "scroll" event, and some
    // browsers/inputs (fast trackpad flicks) can dispatch more than one of
    // those per animation frame. No reason to run it more than once a frame.
    let scrollTicking = false;
    const checkPillState = () => {
      scrollTicking = false;
      // Hysteresis: enter the pill state past 40px, only leave it below
      // 20px. A single shared threshold meant scroll jitter right at that
      // pixel (momentum scroll, trackpad micro-movement) could flip the
      // state back and forth and restart the tween mid-flight repeatedly —
      // the dead zone between 20-40px stops that flicker.
      const nextIsPill = isPill ? window.scrollY > 20 : window.scrollY > 40;
      if (nextIsPill === isPill) return;
      isPill = nextIsPill;
      setIsScrolled(isPill);

      const targetPillW = Math.min(740, availableW);

      gsap.killTweensOf(nav);

      // will-change is only worth its (real) memory/layer cost for the
      // ~350ms this subtree is actually being reflowed every tick — left on
      // permanently it just keeps a promoted layer alive for the other 13k+
      // px of the page where nothing here is animating. Scope it to the
      // transition itself.
      nav.style.willChange = "width, padding, background-color, box-shadow";
      const clearWillChange = () => {
        nav.style.willChange = "auto";
      };

      if (isPill) {
        // Animate width from full width down to compact pill width
        gsap.to(nav, {
          width: targetPillW,
          maxWidth: targetPillW,
          paddingLeft: 16,
          paddingRight: 8,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "rgba(255, 255, 255, 0.82)",
          borderColor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 16px 36px -4px rgba(0, 0, 0, 0.12), inset 0 1px 2px 0 rgba(255, 255, 255, 1)",
          duration: reduceMotion ? 0 : PILL_DURATION,
          ease: PILL_EASE,
          onComplete: clearWillChange,
        });
      } else {
        // Animate width from compact pill back out to available full width
        gsap.to(nav, {
          width: availableW,
          maxWidth: availableW,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 6,
          paddingBottom: 6,
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderColor: "rgba(229, 231, 235, 0)",
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          duration: reduceMotion ? 0 : PILL_DURATION,
          ease: PILL_EASE,
          onComplete: () => {
            gsap.set(nav, { width: "100%", maxWidth: "100%" });
            clearWillChange();
          },
        });
      }
    };

    const onScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(checkPillState);
    };

    const onResize = () => {
      updateAvailableWidth();
      if (!isPill) {
        gsap.set(nav, { width: "100%", maxWidth: "100%" });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    const rafId = requestAnimationFrame(checkPillState);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-5 md:px-6 lg:px-8 pt-2.5 sm:pt-3 pb-1 pointer-events-none">
      {/* SCROLL PROGRESS LINE — edge-to-edge along the top of the viewport
          while the header is full-width; hidden once it's a pill, in favor
          of the pill-hugging pair rendered inside <nav> below. */}
      <div
        aria-hidden="true"
        className={`fixed left-0 top-0 w-full h-[2.5px] bg-[#274193]/15 pointer-events-none z-[50] transition-opacity duration-200 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
        ref={progressTrackRef}
      />
      <div
        aria-hidden="true"
        className={`fixed left-0 top-0 w-full h-[2.5px] bg-[#274193] origin-left pointer-events-none z-[51] transition-opacity duration-200 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
        style={{ transform: "scaleX(0)" }}
        ref={progressRef}
      />

      <nav
        ref={navRef}
        style={{
          width: "100%",
          maxWidth: "100%",
          // Layout containment: the width/padding tween below reflows this
          // subtree on every tick of the 350ms pill transition. Without
          // `contain`, the browser also has to re-check whether that reflow
          // could affect anything outside <nav> (it can't — this header's
          // own box is a fixed-height flex row regardless of the pill's
          // width) on every one of those ticks. `layout style` scopes the
          // recalculation to just this subtree instead of the whole
          // document, which is what actually made the pill morph feel
          // laggy — not just the transform-vs-layout choice below, but
          // *how far* each of those forced layouts had to look.
          contain: "layout style",
        }}
        className="relative rounded-full border border-transparent backdrop-blur-lg flex items-center justify-between mx-auto pointer-events-auto py-1"
      >
        {/* PILL-MODE PROGRESS LINE — same track+fill pair, but living inside
            the pill and masked to its own `rounded-full` shape so the bar's
            visible sliver actually curves with the pill's semicircular ends
            instead of running straight underneath them. `-inset-px` rather
            than `inset-0`: `absolute` positions against nav's padding box,
            1px inside its actual (1px) border — inset-0 left a sliver of
            nav's own border/background showing below the bar. Extending the
            mask out by the border width puts its bottom edge flush with
            nav's true outer edge instead. Hidden until the header is a pill
            (the top-of-viewport pair above covers that state instead). */}
        <div
          aria-hidden="true"
          className={`absolute -inset-px rounded-full overflow-hidden pointer-events-none transition-opacity duration-200 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[2.5px] bg-[#274193]/15"
            ref={pillProgressTrackRef}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[2.5px] bg-[#274193] origin-left"
            style={{ transform: "scaleX(0)" }}
            ref={pillProgressRef}
          />
        </div>

        {/* FAR LEFT: Brand Logo & Chapter Label */}
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group shrink-0">
          <Image
            src="/logo.svg"
            alt="NACOS Nile Logo"
            width={80}
            height={38}
            priority
            style={{ aspectRatio: "80 / 38" }}
            className={`h-auto object-contain transition-all duration-[350ms] ease-out group-hover:scale-105 ${
              isScrolled ? "w-11 sm:w-14 md:w-16" : "w-12 sm:w-20 md:w-28"
            }`}
          />
          <div
            className="h-4 sm:h-5 w-px bg-gray-200"
            aria-hidden="true"
          />
          <div className="flex flex-col select-none">
            <span
              className={`font-black tracking-wider text-gray-900 uppercase leading-none transition-all duration-[350ms] ease-out ${
                isScrolled ? "text-[11px] sm:text-xs md:text-sm" : "text-sm sm:text-xl md:text-2xl"
              }`}
            >
              NACOS
            </span>
            <span
              className={`font-black tracking-widest text-[#274193] uppercase leading-tight transition-all duration-[350ms] ease-out ${
                isScrolled ? "text-[9px] sm:text-[10px] md:text-xs" : "text-[10px] sm:text-base md:text-xl"
              }`}
            >
              NILE CHAPTER
            </span>
          </div>
        </Link>

        {/* RIGHT HAND SIDE: Nav Links & Action Buttons */}
        <div
          className={`flex items-center transition-all duration-[350ms] ease-out ${
            isScrolled ? "gap-2 sm:gap-3" : "gap-3 sm:gap-4 lg:gap-5"
          }`}
        >
          {/* Desktop Navigation Links */}
          <div
            className={`hidden md:flex items-center transition-all duration-[350ms] ease-out ${
              isScrolled ? "gap-2.5 sm:gap-3.5" : "gap-4 lg:gap-6"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`font-bold transition-colors py-1 whitespace-nowrap ${
                  isScrolled
                    ? "text-sm text-gray-800 hover:text-[#274193]"
                    : "text-base text-gray-700 hover:text-[#274193]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Join Community CTA - Desktop Only */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center font-bold text-white bg-[#274193] hover:bg-[#1e3478] rounded-full active:scale-[0.98] transition-all duration-[350ms] ease-out group shrink-0 ${
              isScrolled
                ? "gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-md"
                : "gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-[#274193] hover:bg-transparent hover:text-[#274193]"
            }`}
          >
            <span>{isScrolled ? "Join" : "Join Community"}</span>
            <svg
              className={`transition-transform group-hover:translate-x-0.5 ${
                isScrolled ? "w-4 h-4" : "w-4.5 h-4.5 sm:w-5 sm:h-5"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          {/* Pay Dues — mobile only; desktop already gets it in the nav
              links row, but that row is hidden below md, so it otherwise
              disappears entirely except inside the hamburger dropdown.
              PAY_DUES_URL is an internal route (the "coming soon" page),
              not an external gateway — plain <Link>, no new-tab target. */}
          <Link
            href={PAY_DUES_URL}
            className={`md:hidden inline-flex items-center justify-center font-bold text-white bg-[#274193] hover:bg-[#1e3478] rounded-full active:scale-[0.98] transition-all whitespace-nowrap shrink-0 ${
              isScrolled ? "px-3 py-2 text-[11px]" : "px-3.5 py-2 text-xs"
            }`}
          >
            Pay Dues
          </Link>

          {/* Mobile menu trigger */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all focus:outline-none shrink-0 ${
              isScrolled
                ? "text-gray-800 hover:text-gray-950 bg-black/5 hover:bg-black/10 mr-0.5 sm:mr-0"
                : "text-gray-700 hover:text-gray-900 bg-gray-100/80 hover:bg-gray-200"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Backdrop overlay for outside click dismissal */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden pointer-events-auto transition-opacity duration-200 animate-in fade-in"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="menu"
          className={`relative z-50 md:hidden mt-2.5 p-4 sm:p-5 rounded-3xl shadow-2xl space-y-2.5 animate-in fade-in slide-in-from-top-3 duration-200 pointer-events-auto ${
            isScrolled
              ? "max-w-[490px] mx-auto bg-white/95 backdrop-blur-2xl border border-white/60 text-gray-900 shadow-xl"
              : "w-full bg-white/98 backdrop-blur-2xl border border-gray-200/90 text-gray-850"
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-bold text-gray-800 hover:text-[#274193] hover:bg-gray-50 rounded-xl transition-all"
              >
                <span>{link.name}</span>
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white bg-[#274193] hover:bg-[#1e3478] rounded-full shadow-md active:scale-[0.98] transition-all"
            >
              <span>Join WhatsApp Community</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
