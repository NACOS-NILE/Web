"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "default" | "active" | "surface" | "text";

/**
 * Two layers moving together: a soft primary-tinted glow (normal blend, for
 * brand feel) behind a solid white circle using mix-blend-mode: difference
 * (the actual mechanism the reference site uses — it inverts whatever is
 * underneath, which is why text and element color never disappear into it).
 * Keeping the glow on its own un-blended layer means it stays a clean
 * colored halo instead of being inverted along with the core circle.
 */
export function CustomCursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(fine.matches && !calm.matches);
    sync();
    fine.addEventListener("change", sync);
    calm.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      calm.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: target.x, y: target.y };
    const magnets = new Map<HTMLElement, { x: number; y: number }>();
    // Read inside the pointermove closure below so a press-scale can be
    // composed into the magnet's inline transform (which would otherwise
    // silently override the CSS active:scale press feedback on these
    // elements, since inline styles always win over classes).
    const downRef = { current: false };
    let frame = 0;

    const resolve = (el: Element | null): Variant => {
      if (!el) return "default";
      const explicit = (el as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (explicit) return (explicit.dataset["cursor"] as Variant) ?? "default";
      if ((el as HTMLElement).closest("input, textarea, select")) return "text";
      if ((el as HTMLElement).closest("button, [role='button'], a")) return "active";
      return "default";
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setVisible(true);
      setVariant(resolve(e.target as Element));

      const magnet = (e.target as HTMLElement)?.closest<HTMLElement>("[data-magnetic]");
      if (magnet && !magnets.has(magnet)) magnets.set(magnet, { x: 0, y: 0 });
      magnets.forEach((_, el) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const near = Math.abs(dx) < r.width / 2 + 60 && Math.abs(dy) < r.height / 2 + 50;
        const strength = Number(el.dataset["magnetic"]) || 0.18;
        if (near) {
          const press = downRef.current ? " scale(0.96)" : "";
          el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)${press}`;
        } else {
          el.style.transform = "";
          magnets.delete(el);
        }
      });
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      if (wrapRef.current)
        wrapRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const hide = () => setVisible(false);
    const onDown = () => {
      downRef.current = true;
      setDown(true);
    };
    const onUp = () => {
      downRef.current = false;
      setDown(false);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", hide);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", hide);
      magnets.forEach((_, el) => (el.style.transform = ""));
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  const state = `is-${variant} ${visible ? "is-on" : ""} ${down ? "is-down" : ""}`;

  return (
    <div ref={wrapRef} aria-hidden="true" className="cursor-layer">
      <span className={`cursor-glow ${state}`} />
      <span className={`cursor-dot ${state}`} />
    </div>
  );
}
