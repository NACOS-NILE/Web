"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { whyNacosite } from "@/data/site";

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

export default function WhyNacosite() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = whyNacosite.length;
  const reducedMotionRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const swipeStartXRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const hoveringRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  // Both the heading reveal and the carousel scale tween live in ONE
  // gsap.context(), scoped to sectionRef. Previously these were two
  // separate contexts (one per effect) — under React 18 Strict Mode's
  // dev-only double-mount, their independent setup/teardown could
  // interleave and race against ScrollTrigger's shared internal registry,
  // occasionally leaving a scrollTrigger config referencing an already-
  // reverted instance (the "Cannot read properties of undefined (reading
  // 'end')" error). One context = one atomic setup and one atomic
  // teardown, so there's nothing left to race.
  useEffect(() => {
    const section = sectionRef.current;
    const carousel = carouselRef.current;
    if (!section || !carousel) return;
    if (reducedMotionRef.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        paused: true,
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
      });

      SplitText.create(headingRef.current, {
        type: "words",
        mask: "words",
        onSplit: (split) => {
          timeline.from(split.words, {
            yPercent: 110,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
          });
        },
      });

      timeline.from(
        copyRef.current ? [copyRef.current] : [],
        { y: 22, opacity: 0, duration: 0.65 },
        "-=0.3",
      );

      const isMobile = window.matchMedia("(max-width: 639px)").matches;
      gsap.fromTo(
        carousel,
        { scale: isMobile ? 0.9 : 0.95, transformOrigin: "center center" },
        {
          scale: isMobile ? 1 : 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: carousel,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (paused || reducedMotionRef.current) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4000);
    return () => clearInterval(t);
  }, [paused, total]);

  function goTo(i: number) {
    setIndex(((i % total) + total) % total);
  }

  function isMobileViewport() {
    return window.matchMedia("(max-width: 639px)").matches;
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (!isMobileViewport()) return;
    swipeStartXRef.current = event.clientX;
    draggingRef.current = true;
    setPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (!isMobileViewport()) return;
    if (swipeStartXRef.current === null) return;

    const distance = event.clientX - swipeStartXRef.current;
    if (Math.abs(distance) > 50) {
      goTo(index + (distance < 0 ? 1 : -1));
    }

    swipeStartXRef.current = null;
    draggingRef.current = false;
    setPaused(hoveringRef.current);
  }

  function handlePointerCancel() {
    if (!isMobileViewport()) return;
    swipeStartXRef.current = null;
    draggingRef.current = false;
    setPaused(false);
  }

  return (
    <section
      id="why-nacosite"
      ref={sectionRef}
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-14">
          <h2 ref={headingRef} className="mb-3 font-display text-[clamp(26px,4vw,42px)] font-bold text-[var(--color-ink)]">
            Why become an active NACOSite?
          </h2>
          <p ref={copyRef} className="mx-auto max-w-xl font-body text-[clamp(15px,1.8vw,18px)] text-[var(--color-ink-muted)]">
            We provide the ecosystem you need to grow from a computing student
            to a professional.
          </p>
        </div>

        <div
          ref={carouselRef}
          className="relative mx-auto aspect-[6/9] max-w-5xl touch-pan-y overflow-hidden rounded-2xl sm:aspect-[16/9] sm:touch-auto"
          onMouseEnter={() => {
            hoveringRef.current = true;
            setPaused(true);
          }}
          onMouseLeave={() => {
            hoveringRef.current = false;
            if (!draggingRef.current) setPaused(false);
          }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {whyNacosite.map((slide, i) => (
            <div
              key={slide.title}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={i === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <span className="absolute right-6 top-5 font-display text-[clamp(32px,5vw,56px)] font-bold text-white/90 sm:right-8 sm:top-7">
                {slide.number}
              </span>

              <div className="absolute bottom-6 left-6 max-w-md text-left sm:bottom-8 sm:left-8">
                <h3 className="mb-1.5 font-display text-[clamp(20px,2.5vw,32px)] font-bold text-white">
                  {slide.title}
                </h3>
                <p className="font-body text-[clamp(13px,1.5vw,16px)] leading-relaxed text-white/90">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}

          <button
            type="button"
            aria-label="Previous"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-6 right-6 flex gap-2">
            {whyNacosite.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}