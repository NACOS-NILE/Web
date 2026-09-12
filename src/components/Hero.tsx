"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { imageKitHeroLoader } from "@/image-loader";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";
import { useMagnetic } from "@/lib/useMagnetic";
import { TechIconGlyph, type TechIconType } from "./TechIconGlyph";

const IK_ENDPOINT = "https://ik.imagekit.io/nacosnile";
const DINNER_PATH = "gallery/DinnerNight/2026";

const getHeroIkUrl = (index: number, width = 1200) =>
  `${IK_ENDPOINT}/${DINNER_PATH}/img${index}.webp?tr=w-${width},q-75,f-auto`;

const bgImages: { src: string; position: string; objectPosition?: string }[] = [
  { src: getHeroIkUrl(107), position: "origin-top", objectPosition: "center 40%" },
  { src: getHeroIkUrl(136), position: "object-center" },
  { src: getHeroIkUrl(19), position: "origin-top", objectPosition: "center 10%" },
  { src: getHeroIkUrl(52), position: "object-top origin-top" },
  { src: getHeroIkUrl(62), position: "object-top origin-top" },
  { src: getHeroIkUrl(44), position: "origin-top", objectPosition: "center 0%" },
  { src: getHeroIkUrl(106), position: "object-center" },
  { src: getHeroIkUrl(38), position: "origin-top", objectPosition: "center 20%" },
  { src: getHeroIkUrl(143), position: "object-center" },
];

const rotatingWords = [
  "Builders",
  "Innovators",
  "Creators",
  "Developers",
  "Engineers",
  "Thinkers",
  "Minds",
  "Visionaries",
  "Pioneers",
  "Dreamers",
  "Solvers",
  "Technologists",
];

const wordsLine2 = ["Shape", "the", "Future"];

// ── Ambient tech-icon field flanking the headline (desktop only — the
// headline runs edge-to-edge below xl, leaving no gutter to put them in) ──
// Each icon gets its own scroll/mouse parallax factor so they drift at
// different rates — the depth cue that actually reads as "parallax"
// instead of everything just sliding together like one flat layer.
// The glyphs themselves live in TechIconGlyph.tsx, shared with AboutBento's
// header, which uses the same icon set with its own (scroll-only) parallax.
interface TechIconSpec {
  id: string;
  type: TechIconType;
  side: "left" | "right";
  inset: number; // % from that side's edge
  top: number; // % down the pill
  size: number; // px
  rotate: number; // deg, static
  scrollFactor: number; // px of drift per px scrolled
  mouseFactor: number; // multiplier on the shared mouse-parallax offset
}

const TECH_ICONS: TechIconSpec[] = [
  { id: "code", type: "code", side: "left", inset: 5, top: 26, size: 34, rotate: -8, scrollFactor: 0.1, mouseFactor: 0.7 },
  { id: "terminal", type: "terminal", side: "left", inset: 3, top: 48, size: 42, rotate: 5, scrollFactor: -0.06, mouseFactor: 1.15 },
  { id: "gitBranch", type: "gitBranch", side: "left", inset: 7, top: 70, size: 30, rotate: 4, scrollFactor: 0.16, mouseFactor: 0.5 },
  { id: "cpu", type: "cpu", side: "right", inset: 4, top: 24, size: 36, rotate: 7, scrollFactor: -0.08, mouseFactor: 0.9 },
  { id: "database", type: "database", side: "right", inset: 6.5, top: 50, size: 30, rotate: -5, scrollFactor: 0.12, mouseFactor: 0.55 },
  { id: "cloud", type: "cloud", side: "right", inset: 3, top: 72, size: 40, rotate: -3, scrollFactor: -0.14, mouseFactor: 1.05 },
];

interface HeroHeadlineLine1Props {
  words: string[];
  handleWordHover: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

function HeroHeadlineLine1({ words, handleWordHover }: HeroHeadlineLine1Props) {
  const [index, setIndex] = useState(0);
  const whereRef = useRef<HTMLSpanElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const isHoveredRef = useRef(false);
  const isFirstRender = useRef(true);

  const prevWhereRectRef = useRef<{ left: number; top: number } | null>(null);
  const prevWordRectRef = useRef<{ left: number; top: number } | null>(null);

  // Layout-accommodating FLIP animation when word changes
  useIsomorphicLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!whereRef.current || !wordRef.current) return;
    if (!prevWhereRectRef.current && !prevWordRectRef.current) return;

    const nextWhereR = whereRef.current.getBoundingClientRect();
    const nextWordR = wordRef.current.getBoundingClientRect();

    if (prevWhereRectRef.current) {
      const deltaWhereX = prevWhereRectRef.current.left - nextWhereR.left;
      const deltaWhereY = prevWhereRectRef.current.top - nextWhereR.top;

      if (Math.abs(deltaWhereX) > 0.25 || Math.abs(deltaWhereY) > 0.25) {
        gsap.fromTo(
          whereRef.current,
          {
            x: deltaWhereX,
            y: deltaWhereY,
            scale: 0.985,
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power4.out",
            clearProps: "x,y,scale",
          }
        );
      }
    }

    if (prevWordRectRef.current) {
      const deltaWordX = prevWordRectRef.current.left - nextWordR.left;
      const deltaWordY = prevWordRectRef.current.top - nextWordR.top;

      if (Math.abs(deltaWordX) > 0.25 || Math.abs(deltaWordY) > 0.25) {
        gsap.fromTo(
          wordRef.current,
          {
            x: deltaWordX,
            y: deltaWordY,
          },
          {
            x: 0,
            y: 0,
            duration: 0.75,
            ease: "power4.out",
            clearProps: "x,y",
          }
        );
      }
    }

    // Animate incoming word letters with 3D kinetic stagger
    const chars = wordRef.current.querySelectorAll<HTMLSpanElement>(".hero-char");
    if (chars.length > 0) {
      gsap.fromTo(
        chars,
        {
          yPercent: 120,
          opacity: 0,
          rotateX: -65,
          rotateY: 8,
          scale: 0.9,
          filter: "blur(4px)",
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.025,
          duration: 0.75,
          ease: "power4.out",
        }
      );
    }
  }, [index]);

  // Handle word rotation interval and exit transition
  useEffect(() => {
    if (typeof window === "undefined") return;

    let timerId: NodeJS.Timeout;

    const scheduleExit = (delay: number) => {
      timerId = setTimeout(() => {
        if (isHoveredRef.current) {
          scheduleExit(1200);
          return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setIndex((prev) => (prev + 1) % words.length);
          return;
        }

        // Record positions before exiting
        if (whereRef.current && wordRef.current) {
          const whereR = whereRef.current.getBoundingClientRect();
          const wordR = wordRef.current.getBoundingClientRect();
          prevWhereRectRef.current = { left: whereR.left, top: whereR.top };
          prevWordRectRef.current = { left: wordR.left, top: wordR.top };
        }

        const chars = wordRef.current?.querySelectorAll<HTMLSpanElement>(".hero-char");
        if (!chars || chars.length === 0) {
          setIndex((prev) => (prev + 1) % words.length);
          return;
        }

        // Outgoing letters flip up and dissolve away cleanly
        gsap.to(chars, {
          yPercent: -100,
          opacity: 0,
          rotateX: 55,
          rotateY: -6,
          filter: "blur(4px)",
          stagger: 0.016,
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => {
            // Re-capture positions right before updating state
            if (whereRef.current && wordRef.current) {
              const whereR = whereRef.current.getBoundingClientRect();
              const wordR = wordRef.current.getBoundingClientRect();
              prevWhereRectRef.current = { left: whereR.left, top: whereR.top };
              prevWordRectRef.current = { left: wordR.left, top: wordR.top };
            }
            setIndex((prev) => (prev + 1) % words.length);
          },
        });
      }, delay);
    };

    scheduleExit(index === 0 ? 3800 : 3000);

    const handleResize = () => {
      if (whereRef.current) gsap.set(whereRef.current, { clearProps: "x,y,scale" });
      if (wordRef.current) gsap.set(wordRef.current, { clearProps: "x,y" });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timerId);
      window.removeEventListener("resize", handleResize);
    };
  }, [index, words]);

  const currentWord = words[index];

  return (
    <span className="flex flex-nowrap justify-center items-center gap-x-1.5 sm:gap-x-3.5 overflow-visible">
      {/* "Where" smoothly animates horizontally to accommodate varying word widths */}
      <span
        ref={whereRef}
        onMouseEnter={handleWordHover}
        className="inline-block whitespace-nowrap overflow-visible py-0.5 cursor-default group will-change-transform"
      >
        {"Where".split("").map((char, cIdx) => (
          <span
            key={cIdx}
            data-char={char}
            className="hero-char hero-intro-char inline-block will-change-transform group-hover:text-sky-200 transition-colors"
          >
            {char}
          </span>
        ))}
      </span>

      {/* Rotating role word */}
      <span
        ref={wordRef}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        className="inline-block whitespace-nowrap will-change-transform [perspective:1200px] cursor-default group overflow-visible py-0.5 px-0.5"
      >
        <span
          onMouseEnter={handleWordHover}
          className="inline-block whitespace-nowrap overflow-visible"
        >
          {currentWord.split("").map((char, cIdx) => (
            <span
              key={cIdx}
              data-char={char}
              className={`hero-char ${
                index === 0 ? "hero-intro-char" : ""
              } inline-block will-change-transform group-hover:text-sky-200 transition-colors`}
            >
              {char}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  const heroTextRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bgContainerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);
  const primaryCtaRef = useRef<HTMLAnchorElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useMagnetic(primaryCtaRef);

  // Background image rotation — only while the hero is actually in view.
  // Without this, scrolling past it (this is the first section of a ~13.7k
  // px page) still leaves this ticking and re-rendering the photo stack in
  // the background for the rest of the session. Same pattern GallerySection/
  // TestimonialsSection/ExcoArch/GeekyComputing already use for their own
  // cycling effects.
  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;

    let interval: ReturnType<typeof setInterval> | null = null;
    const startTimer = () => {
      if (interval) return;
      interval = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % bgImages.length);
      }, 5500);
    };
    const stopTimer = () => {
      if (interval) clearInterval(interval);
      interval = null;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTimer();
        } else {
          stopTimer();
        }
      },
      { rootMargin: "150px" }
    );
    observer.observe(pill);

    return () => {
      stopTimer();
      observer.disconnect();
    };
  }, []);

  // Smooth Parallax Scroll on Hero Background Photos & Editorial Text Fade-Out,
  // plus (desktop, fine-pointer only) a mouse-follow parallax drift on the
  // same photo layer — the two share the "y" axis, so both write through one
  // combined applyTransform() rather than fighting each other with separate
  // setters on the same property.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bgContainer = bgContainerRef.current;
    if (!bgContainer) return;

    const setX = gsap.quickSetter(bgContainer, "x", "px");
    const setY = gsap.quickSetter(bgContainer, "y", "px");
    const setHeroTextOpacity = heroTextRef.current
      ? gsap.quickSetter(heroTextRef.current, "opacity")
      : null;
    const setHeroTextY = heroTextRef.current
      ? gsap.quickSetter(heroTextRef.current, "y", "px")
      : null;

    // One quickSetter pair per flanking tech icon, each reading the same
    // shared scroll/mouse state through its own scrollFactor/mouseFactor —
    // that's what makes them drift at different rates instead of moving as
    // one flat layer with the background photo.
    const iconSetters = TECH_ICONS.map((spec, i) => {
      const el = iconRefs.current[i];
      if (!el) return null;
      // Static tilt lives here (via gsap) rather than an inline CSS
      // `transform: rotate()` — the quickSetters below write x/y through
      // that same `transform` property every frame, which would otherwise
      // silently wipe out a plain CSS rotate the instant either fires.
      // Routing it through gsap.set first means it composes with x/y
      // instead of getting overwritten.
      gsap.set(el, { rotation: spec.rotate });
      return {
        spec,
        setX: gsap.quickSetter(el, "x", "px"),
        setY: gsap.quickSetter(el, "y", "px"),
      };
    });

    let scrollY = window.scrollY;
    const mouse = { x: 0, y: 0 }; // smoothed by the quickTo tweens below

    const applyTransform = () => {
      setX(mouse.x);
      if (scrollY < 1200) {
        setY(scrollY * 0.32 + mouse.y);
      }
      iconSetters.forEach((s) => {
        if (!s) return;
        s.setX(mouse.x * s.spec.mouseFactor);
        s.setY(scrollY * s.spec.scrollFactor + mouse.y * s.spec.mouseFactor);
      });
    };

    const updateOnScroll = () => {
      scrollY = window.scrollY;
      applyTransform();
      if (setHeroTextOpacity) {
        // Smoothly fade out text as user scrolls down over the first 280px
        const textOpacity = Math.max(0, 1 - scrollY / 280);
        setHeroTextOpacity(textOpacity);
        if (setHeroTextY) {
          setHeroTextY(-scrollY * 0.22);
        }
      }
    };

    // rAF-throttled: the writes above are cheap GPU-only transforms, but
    // native "scroll" events aren't guaranteed to be capped at one per
    // frame, and this fires for the entire time the hero is scrolled past
    // (not just while it's on screen). No reason to run it more than once
    // per frame.
    let scrollTicking = false;
    const handleScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        scrollTicking = false;
        updateOnScroll();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateOnScroll();

    // Mouse-follow drift — desktop/trackpad only, the photo eases toward
    // wherever the cursor is over the hero, and eases back to center on leave.
    const pill = pillRef.current;
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let cleanupMouse = () => {};

    if (pill && isFinePointer) {
      const MAX_X = 22;
      const MAX_Y = 14;
      const setMouseX = gsap.quickTo(mouse, "x", { duration: 0.8, ease: "power3.out", onUpdate: applyTransform });
      const setMouseY = gsap.quickTo(mouse, "y", { duration: 0.8, ease: "power3.out", onUpdate: applyTransform });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = pill.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        setMouseX(nx * MAX_X);
        setMouseY(ny * MAX_Y);
      };
      const handleMouseLeave = () => {
        setMouseX(0);
        setMouseY(0);
      };

      pill.addEventListener("mousemove", handleMouseMove, { passive: true });
      pill.addEventListener("mouseleave", handleMouseLeave);
      cleanupMouse = () => {
        pill.removeEventListener("mousemove", handleMouseMove);
        pill.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanupMouse();
    };
  }, []);

  // Interactive re-scramble on word hover
  const handleWordHover = (e: React.MouseEvent<HTMLSpanElement>) => {
    const wordEl = e.currentTarget;
    const chars = wordEl.querySelectorAll<HTMLSpanElement>(".hero-char");
    const GLYPHS = "0101_#<>{}/\\$*!&%?[]~";

    chars.forEach((charEl, i) => {
      const originalText = charEl.getAttribute("data-char") || charEl.innerText;
      const obj = { progress: 0 };

      gsap.to(obj, {
        progress: 1,
        duration: 0.35 + i * 0.03,
        ease: "none",
        onUpdate: () => {
          if (obj.progress < 0.78) {
            charEl.innerText = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          } else {
            charEl.innerText = originalText;
          }
        },
        onComplete: () => {
          charEl.innerText = originalText;
        },
      });
    });
  };

  // GSAP Kinetic 3D Letter Animation
  useEffect(() => {
    if (!heroTextRef.current) return;

    const chars = heroTextRef.current.querySelectorAll<HTMLSpanElement>(".hero-intro-char");
    if (!chars.length) return;

    const tl = gsap.timeline({ delay: 0.2 });

    // 3D kinetic letter flip-up stagger
    tl.fromTo(
      chars,
      {
        yPercent: 120,
        opacity: 0,
        rotateX: -65,
        rotateY: 8,
        scale: 0.9,
      },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        stagger: 0.025,
        duration: 1.05,
        ease: "power4.out",
      },
      "-=0.35"
    );

    // 3. Subtitle unblur and rise
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 16,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }

    // 4. CTA row rises in last, just behind the subtitle
    if (ctaRowRef.current) {
      tl.fromTo(
        ctaRowRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.45"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  // No z-index on this outer <section>, and no `isolate` on the pill below:
  // ExcoArch (page.tsx) sits in a huge negative-margin wrapper (z-30) that
  // deliberately overlaps its exec-council carousel up into this pill's
  // bottom edge. Either of those would have trapped the hero text's z-index
  // inside a stacking context capped below ExcoArch's, so on shorter
  // viewports the carousel cards rendered in front of the headline/subtitle
  // no matter how high a z-index they carried internally. Left as plain
  // DOM order + z-auto, only heroTextRef below carries an explicit z-index
  // (z-40) that actually reaches high enough to clear ExcoArch — the pill's
  // opaque background/photos stay untouched (still z-0/z-10/z-20, still
  // correctly recede behind the cards) so that overlap effect is preserved.
  return (
    <section className="w-full px-2 sm:px-3 md:px-4 pt-1 sm:pt-1.5 pb-2 sm:pb-3 md:pb-4 relative">
      {/* THE ROUNDED PILL CONTAINER */}
      <div
        ref={pillRef}
        className="w-full relative min-h-[70vh] xs:min-h-[74vh] sm:min-h-[82vh] md:min-h-[85vh] lg:min-h-[88vh] xl:h-[calc(100vh-6rem)] rounded-2xl sm:rounded-3xl md:rounded-[2rem] overflow-hidden flex flex-col justify-end sm:justify-center bg-black"
      >
        
        {/* ROTATING BACKGROUND PHOTOS WITH CINEMATIC PARALLAX */}
        <div
          ref={bgContainerRef}
          className="absolute inset-x-0 -top-[18%] h-[136%] z-0 pointer-events-none will-change-transform"
        >
          {bgImages.map((img, i) => {
            const isCurrent = i === bgIndex;
            const isNext = i === (bgIndex + 1) % bgImages.length;
            const isPrev = i === (bgIndex - 1 + bgImages.length) % bgImages.length;
            const shouldMount = isCurrent || isNext || isPrev;

            return (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isCurrent ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {shouldMount && (
                  <Image
                    loader={imageKitHeroLoader}
                    src={img.src}
                    alt="Nile University Computing"
                    fill
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : undefined}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1400px"
                    style={{
                      aspectRatio: "16 / 9",
                      ...(img.objectPosition ? { objectPosition: img.objectPosition } : {}),
                    }}
                    className={`object-cover scale-105 ${img.position}`}
                  />
                )}
              </div>
            );
          })}

          {/* NATURAL CLEAN OVERLAYS (No blue tint, pure rich cinematic depth) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/65 z-20 pointer-events-none" />
        </div>

        {/* AMBIENT TECH-ICON FIELD — flanks the headline left/right, each
            drifting at its own scroll/mouse rate (see TECH_ICONS + the
            iconSetters loop above) for a layered-depth parallax rather than
            one flat sheet of icons. xl+ only: below that the headline runs
            close to the pill's own edges and there's no real gutter to put
            them in without colliding with the text. */}
        <div className="hidden xl:block absolute inset-0 z-20 pointer-events-none overflow-hidden" aria-hidden="true">
          {TECH_ICONS.map((icon, i) => (
            <div
              key={icon.id}
              ref={(el) => {
                iconRefs.current[i] = el;
              }}
              className="absolute text-white will-change-transform"
              style={{
                [icon.side]: `${icon.inset}%`,
                top: `${icon.top}%`,
                width: icon.size,
                height: icon.size,
                opacity: 0.16,
              }}
            >
              <TechIconGlyph type={icon.type} />
            </div>
          ))}
        </div>

        {/* HERO EDITORIAL CONTENT - Balanced headroom for large display typography.
            Desktop (sm+) centers vertically in the pill rather than sitting at a
            fixed offset from the top — the `pb-*` reserve below approximates how
            far ExcoArch's negative margin (page.tsx) pulls its card carousel up
            into this pill, so the centered text lands in the space actually
            clear of that overlap instead of drifting down into it on shorter
            viewports. Mobile stays bottom-anchored (justify-end on the pill)
            but needs the same kind of reserve — its own pb-32/xs:pb-36 keeps
            the "Join Community" button clear of the carousel cards instead of
            sitting on top of them. */}
        <div
          ref={heroTextRef}
          className="pt-16 sm:pt-10 md:pt-8 pb-32 xs:pb-36 sm:pb-28 md:pb-36 lg:pb-40 xl:pb-44 px-3 sm:px-6 md:px-8 text-center relative z-40 flex flex-col items-center select-none [perspective:1200px] mt-auto sm:mt-0"
        >
          {/* Editorial Display Headline (Pure White, Zero Cheesy Gradients) */}
          <h1 className="font-deacon text-[2rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9.5rem] font-black uppercase text-white tracking-[-0.03em] leading-[1.02] drop-shadow-2xl max-w-7xl">
            {/* Line 1 with Smooth Spatial Accommodation */}
            <HeroHeadlineLine1
              words={rotatingWords}
              handleWordHover={handleWordHover}
            />

            {/* Line 2 with #F4F6FC Typography */}
            <span className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3.5 mt-0.5 sm:mt-1">
              {wordsLine2.map((word, wIdx) => (
                <span
                  key={wIdx}
                  onMouseEnter={handleWordHover}
                  className="inline-block whitespace-nowrap overflow-hidden py-0.5 cursor-default group"
                >
                  {word.split("").map((char, cIdx) => (
                    <span
                      key={cIdx}
                      data-char={char}
                      className="hero-char hero-intro-char inline-block will-change-transform text-[#F4F6FC] group-hover:text-sky-200 transition-colors"
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <p
            ref={subtitleRef}
            className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg font-normal tracking-wide mt-3 sm:mt-4 max-w-xl mx-auto leading-relaxed drop-shadow-md"
          >
            Nigeria Association of Computing Students
          </p>

          {/* PRIMARY CTA — mobile only; desktop already has "Join Community"
              in the navbar, so this doesn't duplicate it up here too. */}
          <div ref={ctaRowRef} className="flex md:hidden items-center mt-6 sm:mt-9">
            <Link
              ref={primaryCtaRef}
              href="#join"
              className="will-change-transform inline-flex items-center justify-center gap-2 px-7 sm:px-8 h-12 sm:h-[54px] rounded-full bg-white text-gray-950 font-bold text-sm sm:text-base hover:bg-gray-100 active:scale-[0.98] transition-colors duration-200 group shadow-xl shadow-black/20"
            >
              <span>Join Community</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
