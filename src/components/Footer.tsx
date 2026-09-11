"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import FooterTicker from "./FooterTicker"; // disabled for now — see bottom row below
import { footerNavLinks as navLinks, socialLinks } from "@/data/links";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";

const departments = [
  "Software Engineering",
  "Computer Science",
  "Cyber Security",
  "Information Technology",
  "Information Systems",
  "Data Science",
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLParagraphElement>(null);

  // Scroll-scrubbed, not play-once: progress is a direct function of how
  // far the footer has entered the viewport, so it fades/slides in on the
  // way down and reverses — fades back out — if you scroll back up away
  // from it, the same way the header-reveal pattern used across the rest
  // of the site behaves.
  //
  // Deliberately NOT a ScrollTrigger here, unlike the equivalent reveals
  // elsewhere on the page. A ScrollTrigger caches its start/end as pixel
  // positions the moment it's created — which for this one happens right
  // as Footer's own dynamic()-loaded chunk hydrates, possibly before the
  // page's other below-the-fold sections (each their own dynamic() chunk)
  // have finished mounting above it. Measured against a document that's
  // momentarily shorter than its final height, the cached range collapsed
  // toward scrollY 0, and neither a `document.fonts.ready` refresh nor an
  // IntersectionObserver-triggered `ScrollTrigger.refresh()` (both tried,
  // confirmed live) got it to re-measure correctly afterward. Computing
  // progress directly from `getBoundingClientRect()` every scroll frame
  // instead — the same manual pattern ExcoArch and the navbar's own
  // progress bar already use — has nothing cached to go stale: it's
  // always reading the footer's real, current position.
  useIsomorphicLayoutEffect(() => {
    const footer = footerRef.current;
    const wordmark = wordmarkRef.current;
    if (!footer || !wordmark) return;
    if (prefersReducedMotion()) return; // leave it at its natural, fully-visible state

    const setOpacity = gsap.quickSetter(wordmark, "opacity") as (v: number) => void;
    const setX = gsap.quickSetter(wordmark, "x", "px") as (v: number) => void;

    let rafId: number | null = null;
    const update = () => {
      rafId = null;
      const top = footer.getBoundingClientRect().top;
      const vh = window.innerHeight;
      // progress 0 when the footer's top just touches the viewport's
      // bottom edge, progress 1 once it's risen to 55% down the viewport —
      // same start/end the ScrollTrigger version used.
      const start = vh;
      const end = vh * 0.55;
      const progress = Math.min(1, Math.max(0, (start - top) / (start - end)));
      setOpacity(progress);
      setX(60 * (1 - progress));
    };
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative w-full bg-[#F6F6F6] pt-20 sm:pt-24 md:pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <h2 className="sr-only">Footer Navigation</h2>

      {/* BACKGROUND WORDMARK — sits behind everything else in the footer
          (z-0, real content is z-10 below), not as its own closing block.
          Right-anchored and sized so only "NACOS" reads; the "N" runs off
          past the left edge and the footer's own `overflow-hidden` above
          crops it there instead of forcing horizontal scroll. */}
      <p
        ref={wordmarkRef}
        aria-hidden="true"
        className="absolute z-0 -bottom-[8vw] sm:-bottom-[5vw] right-3 sm:right-6 lg:right-10 font-deacon text-[38vw] sm:text-[30vw] lg:text-[24vw] font-black uppercase text-[#274193]/[0.06] leading-none tracking-tighter whitespace-nowrap select-none pointer-events-none will-change-transform text-right"
      >
        NACOS
      </p>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-gray-200/80">
          
          {/* BRAND COLUMN (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image
                src="/logo.svg"
                alt="NACOS Nile Logo"
                width={80}
                height={38}
                style={{ aspectRatio: "80 / 38" }}
                className="w-24 sm:w-28 h-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed max-w-sm mb-6">
              Nigeria Association of Computing Students (NACOS), Nile University Chapter. Fostering technical excellence, leadership, and ethical innovation across all computing disciplines.
            </p>


          </div>

          {/* COLUMN 1: NAVIGATION */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-950 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#274193] font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: DEPARTMENTS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-950 mb-4">
              Departments
            </h3>
            <ul className="space-y-2.5">
              {departments.map((dept) => (
                <li key={dept} className="text-xs sm:text-sm text-gray-600 font-medium">
                  {dept}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: COMMUNITY & SOCIALS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-950 mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#274193] font-medium transition-colors flex items-center gap-1.5"
                  >
                    <span>{social.name}</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: COPYRIGHT & ATTRIBUTION TICKER — ticker disabled for
            now (uncomment the import above + <FooterTicker /> below to
            bring it back). Centered rather than justify-between while it's
            the only thing in this row, so it doesn't sit stranded on the
            left. */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500 font-medium">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} NACOS Nile University Chapter. All rights reserved.
          </p>
          {/* <FooterTicker /> */}
        </div>
      </div>
    </footer>
  );
}
