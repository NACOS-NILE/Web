"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { MotionValue } from "motion/react";
import styles from "./chapter-excos.module.css";

const council = [
  {
    image: "president",
    name: "Zikora Fortune Nwafor",
    role: "President",
    tagline: "Passionate about building active student communities.",
  },
  {
    image: "vp",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    tagline: "Advocating for student welfare and academic excellence.",
  },
  {
    image: "sg",
    name: "Sheila Jato",
    role: "Secretary General",
    tagline: "Keeping the engines running smoothly.",
  },
  {
    image: "fc",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    tagline: "Making the important financial decisions.",
  },
  {
    image: "pro",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    tagline: "Applying creativity to communication.",
  },
  {
    image: "dtd",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    tagline:
      "Driving technical growth and leading coding workshops for Nile computing students.",
  },
  {
    image: "provost",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    tagline: "Managing the day-to-day operations of NACOS Nile.",
  },
  {
    image: "socials",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    tagline: "Prioritizing social activities and events.",
  },
  {
    image: "welfare",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    tagline: "Your well-being is my priority.",
  },
];

// Narrow tangent planes reconstruct each photograph as a curved paper surface.
const stripSlices = Array.from({ length: 24 }, (_, index) => index);
const stripArc = 0.46;

function PortraitSlice({
  image,
  index,
  slice,
  rotation,
}: {
  image: string;
  index: number;
  slice: number;
  rotation: MotionValue<number>;
}) {
  const transform = useTransform(() => {
    const angle =
      (index / council.length) * Math.PI * 2 +
      rotation.get() +
      ((slice + 0.5) / stripSlices.length - 0.5) * stripArc;
    // Normalize platform-dependent trig precision for identical SSR/client CSS.
    return `translate3d(calc(${Math.sin(angle).toFixed(6)} * var(--orbit-radius)), 0px, calc(${Math.cos(angle).toFixed(6)} * var(--orbit-radius))) rotateY(${angle.toFixed(6)}rad)`;
  });

  return (
    <motion.span
      className={styles.paperSlice}
      style={{
        transform,
        borderRadius:
          slice === 0
            ? "4px 0 0 4px"
            : slice === stripSlices.length - 1
              ? "0 4px 4px 0"
              : 0,
      }}
    >
      <span
        className={styles.paperTexture}
        style={{
          left: `calc(var(--slice-width) * ${-slice})`,
          backgroundImage: `url(/excos-pics/${image}.webp)`,
        }}
      />
    </motion.span>
  );
}

function OrbitPortrait({
  member,
  index,
  rotation,
}: {
  member: (typeof council)[number];
  index: number;
  rotation: MotionValue<number>;
}) {
  return stripSlices.map((slice) => (
    <PortraitSlice
      key={slice}
      image={member.image}
      index={index}
      slice={slice}
      rotation={rotation}
    />
  ));
}

function TextSwap({ children }: { children: string }) {
  const element = useRef<HTMLSpanElement>(null);
  const [initialText] = useState(children);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const text = element.current;
    if (!text) return;

    text.classList.remove(styles.isExit, styles.isEnterStart);
    if (reducedMotion) {
      text.textContent = children;
      return;
    }
    if (text.textContent === children) return;

    text.classList.add(styles.isExit);
    const duration = Number.parseFloat(
      getComputedStyle(text).getPropertyValue("--text-swap-dur"),
    );
    const timeout = window.setTimeout(() => {
      text.textContent = children;
      text.classList.replace(styles.isExit, styles.isEnterStart);
      // Commit the below-baseline start before transitioning back into place.
      void text.offsetHeight;
      text.classList.remove(styles.isEnterStart);
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [children, reducedMotion]);

  return (
    <span ref={element} className={styles.textSwap}>
      {initialText}
    </span>
  );
}

export function ChapterExcos() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });
  const rotationTarget = useTransform(
    scrollYProgress,
    [0, 1],
    [0, (-Math.PI * 2 * (council.length - 1)) / council.length],
  );
  const smoothRotation = useSpring(rotationTarget, {
    stiffness: 90,
    damping: 28,
  });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const pointerX = useSpring(mouseX, { stiffness: 100, damping: 22 });
  const pointerY = useSpring(mouseY, { stiffness: 100, damping: 22 });
  const ringTilt = useTransform(
    () =>
      `rotateX(${-37 + pointerY.get() * -12}deg) rotateY(${pointerX.get() * 14}deg) scaleZ(0.48)`,
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActive(
      Math.min(
        council.length - 1,
        Math.max(0, Math.round(progress * (council.length - 1))),
      ),
    );
  });

  useEffect(() => {
    const element = stage.current;
    if (!element || reducedMotion) return;

    const desktop = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    );
    let visible = false;
    let listening = false;

    function resetPointer() {
      mouseX.set(0);
      mouseY.set(0);
      pointerX.jump(0);
      pointerY.jump(0);
    }

    function trackPointer(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      mouseX.set((event.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((event.clientY / window.innerHeight - 0.5) * 2);
    }

    function leaveViewport(event: PointerEvent) {
      if (event.relatedTarget === null) resetPointer();
    }

    function syncTracking() {
      const enabled = visible && desktop.matches && !document.hidden;
      if (enabled === listening) return;
      listening = enabled;
      if (enabled) {
        window.addEventListener("pointermove", trackPointer, { passive: true });
        window.addEventListener("pointerout", leaveViewport);
        window.addEventListener("blur", resetPointer);
      } else {
        window.removeEventListener("pointermove", trackPointer);
        window.removeEventListener("pointerout", leaveViewport);
        window.removeEventListener("blur", resetPointer);
        resetPointer();
      }
    }

    // Observe the ring stage, not the much taller scroll section.
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio > 0;
      syncTracking();
    });
    observer.observe(element);
    desktop.addEventListener("change", syncTracking);
    document.addEventListener("visibilitychange", syncTracking);

    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", syncTracking);
      document.removeEventListener("visibilitychange", syncTracking);
      window.removeEventListener("pointermove", trackPointer);
      window.removeEventListener("pointerout", leaveViewport);
      window.removeEventListener("blur", resetPointer);
      resetPointer();
    };
  }, [reducedMotion, mouseX, mouseY, pointerX, pointerY]);

  const member = council[active];

  return (
    <section
      ref={section}
      id="excos"
      className={styles.section}
      aria-labelledby="excos-heading"
    >
      <div className={styles.sticky}>
        <header className={styles.header}>
          <h2 id="excos-heading">Executive Council</h2>
          <p>The people moving our chapter forward.</p>
        </header>

        <div ref={stage} className={styles.stage}>
          <div className={styles.perspective}>
            <motion.div
              className={styles.ring}
              aria-hidden="true"
              style={{ transform: ringTilt }}
            >
              {council.map((person, index) => (
                <OrbitPortrait
                  key={person.image}
                  member={person}
                  index={index}
                  rotation={reducedMotion ? rotationTarget : smoothRotation}
                />
              ))}
            </motion.div>
            <div className={styles.mainPortrait}>
              {council.map((person, index) => (
                <Image
                  key={person.image}
                  src={`/excos-pics/${person.image}.webp`}
                  alt={index === active ? person.name : ""}
                  aria-hidden={index !== active}
                  fill
                  sizes="(max-width: 600px) 52vw, 320px"
                  className={index === active ? styles.visible : styles.hidden}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.details} aria-live="polite" aria-atomic="true">
          <p className={styles.role}>
            <TextSwap>{member.role}</TextSwap>
          </p>
          <h3>
            <TextSwap>{member.name}</TextSwap>
          </h3>
          <p className={styles.tagline}>
            <TextSwap>{member.tagline}</TextSwap>
          </p>
        </div>
      </div>
    </section>
  );
}
