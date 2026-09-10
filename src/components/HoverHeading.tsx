"use client";

import { useCallback, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type HoverHeadingProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  as?: ElementType;
  /** Colour of the travelling highlight. Defaults to the soft accent. */
  glow?: string;
};

/**
 * A heading whose highlight follows the pointer across the letters.
 *
 * The pointer position is written to CSS custom properties and the paint work
 * is done by a gradient in globals.css, so moving the mouse never re-renders
 * React — only two custom properties change, which the compositor handles.
 *
 * The gradient runs from the glow colour to `currentColor`, so everything
 * outside the spotlight stays exactly the heading's normal colour. The
 * transparent text fill that makes this possible is applied only while the
 * pointer is over the heading, and only inside an `@supports` guard, so the
 * text can never end up invisible.
 */
export default function HoverHeading({
  children,
  id,
  className = "",
  as,
  glow,
}: HoverHeadingProps) {
  const Tag = (as ?? "h2") as unknown as "h2";
  const [lit, setLit] = useState(false);
  const [sweeping, setSweeping] = useState(false);

  const track = useCallback((e: React.PointerEvent<HTMLHeadingElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - box.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - box.top}px`);
  }, []);

  /**
   * Plays the sweep once, when the heading first scrolls into view — so the
   * effect is seen without anyone needing to point at it. That matters on
   * touch screens and on the many laptops whose browser reports no hover at
   * all, where a hover-only version would simply never run.
   */
  const watch = useCallback((node: HTMLHeadingElement | null) => {
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        io.disconnect();
        setSweeping(true);
      },
      { threshold: 0.5 },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      id={id}
      ref={watch}
      onPointerEnter={(e) => {
        track(e);
        setLit(true);
      }}
      onPointerMove={track}
      onPointerLeave={() => setLit(false)}
      // Dropped as soon as it finishes, so the pointer is free to take over
      // and the inline --spot-x is not fighting a running animation.
      onAnimationEnd={() => setSweeping(false)}
      style={glow ? ({ "--spot-glow": glow } as CSSProperties) : undefined}
      className={`heading-spot ${sweeping ? "is-sweeping" : ""} ${lit ? "is-lit" : ""} ${className}`
        .replace(/\s+/g, " ")
        .trim()}
    >
      {children}
    </Tag>
  );
}
