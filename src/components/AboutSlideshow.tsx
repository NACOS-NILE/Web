"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type FocusEvent as ReactFocusEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";
import { aboutSlides, SLIDE_DURATION } from "@/data/content";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { preloadImage } from "@/lib/utils";

export default function AboutSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  // null means "no choice yet": follow the device's reduced motion setting
  const [pausedChoice, setPausedChoice] = useState<boolean | null>(null);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();
  const userPaused = pausedChoice ?? reducedMotion;

  const total = aboutSlides.length;
  const slide = aboutSlides[activeSlide];

  // Autoplay stops while the slideshow is off screen (saves battery and data)
  const isPaused = userPaused || hoverPaused || focusPaused || !inView;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Load the next slide's photo in advance so it never appears as an empty box
  useEffect(() => {
    if (!inView) return;

    const nextIndex = (activeSlide + 1) % total;

    // Slide 1 shows the logo, not a photo
    if (nextIndex === 0) return;

    preloadImage(aboutSlides[nextIndex].image);
  }, [activeSlide, inView, total]);

  // One timer per slide, so tapping a dot always gives that slide its full time
  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % total);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isPaused, total]);

  const goTo = (index: number) => {
    setActiveSlide((index + total) % total);
  };

  // Swipe left or right on phones
  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;

    // Ignore small movements and mostly vertical swipes (page scrolling)
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

    goTo(activeSlide + (dx < 0 ? 1 : -1));
  };

  // Pause while a keyboard user is inside the slideshow
  const handleFocus = (event: ReactFocusEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    try {
      if (target.matches(":focus-visible")) setFocusPaused(true);
    } catch {
      setFocusPaused(true);
    }
  };

  const handleBlur = (event: ReactFocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setFocusPaused(false);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`about-slideshow ${isPaused ? "is-paused" : ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Why NACOS Nile matters"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHoverPaused(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setHoverPaused(false);
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        className="about-slide-viewport"
        aria-live={isPaused ? "polite" : "off"}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="about-slide" key={slide.title}>
          <div className="about-slide-image">
            {activeSlide === 0 ? (
              <Image
                src="/logo-web.svg"
                alt="NACOS Nile logo"
                width={170}
                height={80}
                className="about-logo"
              />
            ) : (
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 600px"
                style={{ objectPosition: slide.position }}
              />
            )}

            <span className="about-slide-count">
              0{activeSlide + 1} / 0{total}
            </span>
          </div>

          <div className="about-slide-content">
            <span>WHY NACOS</span>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      </div>

      <div className="about-slide-controls">
        <button
          type="button"
          className="about-slide-toggle"
          onClick={() => setPausedChoice(!userPaused)}
          aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {userPaused ? <PlayIcon /> : <PauseIcon />}
        </button>

        <div
          className="about-slide-dots"
          role="group"
          aria-label="Choose About slide"
        >
          {aboutSlides.map((item, index) => (
            <button
              type="button"
              key={item.title}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
              className={index === activeSlide ? "active" : ""}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
