"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DISCIPLINES } from "@/lib/data";
import MacBook from "@/components/MacBook";

/** Resting yaw per programme, so no two selections leave the machine square on. */
const YAW = [-19, -11, -24, -14, -21, -9];

/**
 * Hinge angles, in degrees, matching the geometry documented in globals.css:
 * positive leans the lid back into the open position, -90 lays it face down on
 * the keys. Shut stops a degree and a half short so the two planes never land
 * in exactly the same place and z-fight.
 */
const OPEN = 19;
const SHUT = -88.5;

/** How long a pointer has to rest on a programme before the machine commits. */
const HOVER_INTENT_MS = 170;

export default function DisciplineShowcase() {
  const [active, setActive] = useState(0);

  const machineRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Live mirrors of state for the timeline callbacks, which are created once
  // and would otherwise close over whatever `active` was at build time.
  const activeRef = useRef(0);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  /** Last programme asked for while the hinge was busy; picked up on landing. */
  const queuedRef = useRef<number | null>(null);
  const hoverTimerRef = useRef<number | null>(null);
  const reducedRef = useRef(false);
  /**
   * `goTo` picks up a queued selection by calling itself once the hinge lands,
   * which it cannot do directly from inside its own definition. The indirection
   * is the point: the callback that runs on landing is always the current one.
   */
  const goToRef = useRef<(next: number) => void>(() => {});

  /* ------------------------------------------------------------ the swap -- */

  const goTo = useCallback((next: number) => {
    if (next === activeRef.current) return;

    // Mid-flight requests are remembered rather than dropped or stacked: a
    // reader running down the list gets one clean turn per stop, and always
    // ends on the thing their pointer is actually resting on.
    if (timelineRef.current?.isActive()) {
      queuedRef.current = next;
      return;
    }

    const machine = machineRef.current;
    const caption = captionRef.current;
    if (!machine) return;

    if (reducedRef.current) {
      activeRef.current = next;
      setActive(next);
      gsap.set(machine, { "--mb-yaw": `${YAW[next]}deg` });
      if (caption) gsap.fromTo(caption, { opacity: 0 }, { opacity: 1, duration: 0.25 });
      return;
    }

    const from = activeRef.current;
    // Turn the long way round when moving down the list and back the other way
    // coming up, so the direction of the swing echoes the direction of travel.
    const swing = next > from ? 34 : -34;

    const tl = gsap.timeline({
      onComplete: () => {
        const queued = queuedRef.current;
        queuedRef.current = null;
        if (queued !== null && queued !== activeRef.current) goToRef.current(queued);
      },
    });
    timelineRef.current = tl;

    tl
      // Shut. The machine also pulls back and turns, which is what makes this
      // read as the camera moving rather than a panel merely fading over.
      .to(machine, {
        "--mb-open": `${SHUT}deg`,
        "--mb-yaw": `${YAW[from] + swing}deg`,
        "--mb-z": "-90px",
        duration: 0.52,
        ease: "power3.inOut",
      })
      .to(caption ?? {}, { opacity: 0, y: -10, duration: 0.26, ease: "power2.in" }, 0)

      // The display is face down and pointing away — swap it here and nobody
      // ever sees the crossfade.
      .call(() => {
        activeRef.current = next;
        setActive(next);
      })

      // Open, landing on the new programme's own angle.
      .to(machine, {
        "--mb-open": `${OPEN}deg`,
        "--mb-yaw": `${YAW[next]}deg`,
        "--mb-z": "0px",
        duration: 0.82,
        ease: "power3.out",
      })
      // A touch of overshoot at the very top of the hinge's travel: real lids
      // have weight, and stopping dead at the target is the one thing that
      // gives a CSS laptop away.
      .to(machine, { "--mb-open": `${OPEN + 1.6}deg`, duration: 0.16, ease: "sine.inOut" }, "-=0.14")
      .to(machine, { "--mb-open": `${OPEN}deg`, duration: 0.34, ease: "sine.out" })

      // Backlight coming up, then the reflection sweeping across the glass.
      .fromTo(
        machine.querySelector(".mb-glass") ?? {},
        { "--mb-wake": 0 },
        { "--mb-wake": 1, duration: 0.5, ease: "power2.out" },
        "-=0.72",
      )
      .fromTo(
        machine.querySelector(".mb-flare") ?? {},
        { xPercent: -140, opacity: 0 },
        { xPercent: 140, opacity: 1, duration: 0.85, ease: "power2.inOut" },
        "-=0.66",
      )
      .fromTo(
        caption ?? {},
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" },
        "-=0.55",
      );
  }, []);

  useEffect(() => {
    goToRef.current = goTo;
  }, [goTo]);

  /* ----------------------------------------------------- boot & pointer -- */

  useEffect(() => {
    const machine = machineRef.current;
    const stage = stageRef.current;
    if (!machine || !stage) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      reducedRef.current = true;
      gsap.set(machine, { "--mb-open": `${OPEN}deg`, "--mb-yaw": `${YAW[0]}deg` });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      reducedRef.current = false;

      // Arrive shut, and open on the way in. The first thing the section does
      // is show you what the interaction is.
      gsap.set(machine, { "--mb-open": `${SHUT}deg`, "--mb-yaw": `${YAW[0] + 26}deg` });

      let io: IntersectionObserver | null = null;
      const boot = () => {
        gsap
          .timeline()
          .to(machine, {
            "--mb-open": `${OPEN}deg`,
            "--mb-yaw": `${YAW[0]}deg`,
            duration: 1.15,
            ease: "power3.out",
            delay: 0.15,
          })
          .fromTo(
            machine.querySelector(".mb-glass") ?? {},
            { "--mb-wake": 0 },
            { "--mb-wake": 1, duration: 0.7 },
            "-=0.75",
          )
          .fromTo(
            machine.querySelector(".mb-flare") ?? {},
            { xPercent: -140, opacity: 0 },
            { xPercent: 140, opacity: 1, duration: 1 },
            "-=0.85",
          );
      };

      if (typeof IntersectionObserver === "undefined") {
        boot();
      } else {
        io = new IntersectionObserver(
          (entries) => {
            if (!entries.some((e) => e.isIntersecting)) return;
            io?.disconnect();
            boot();
          },
          { threshold: 0.25 },
        );
        io.observe(stage);
      }

      return () => io?.disconnect();
    });

    // Pointer parallax, on its own pair of custom properties so it composes
    // with — instead of fighting — whatever the hinge timeline is writing.
    mm.add("(hover: hover) and (pointer: fine)", () => {
      // Tweened as plain numbers on a proxy and written out with the unit, so
      // the easing is GSAP's and the property stays a real <angle>.
      const look = { yaw: 0, pitch: 0 };
      const write = () => {
        machine.style.setProperty("--mb-yaw-p", `${look.yaw}deg`);
        machine.style.setProperty("--mb-pitch-p", `${look.pitch}deg`);
      };
      const ease = (yaw: number, pitch: number) =>
        gsap.to(look, { yaw, pitch, duration: 0.7, ease: "power3.out", onUpdate: write });

      const onMove = (event: PointerEvent) => {
        const box = stage.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        ease(x * 13, -y * 8);
      };
      const onLeave = () => ease(0, 0);

      stage.addEventListener("pointermove", onMove);
      stage.addEventListener("pointerleave", onLeave);
      return () => {
        gsap.killTweensOf(look);
        stage.removeEventListener("pointermove", onMove);
        stage.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => {
      mm.revert();
      timelineRef.current?.kill();
    };
  }, []);

  useEffect(
    () => () => {
      if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    },
    [],
  );

  /* --------------------------------------------------------- interaction -- */

  const hoverIn = (i: number) => {
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    // Intent delay: sweeping the pointer down the list on the way somewhere
    // else should not fire five hinge animations.
    hoverTimerRef.current = window.setTimeout(() => goTo(i), HOVER_INTENT_MS);
  };

  const hoverOut = () => {
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
  };

  // Roving focus, per the tabs pattern: one stop for the whole list, arrows
  // move within it.
  const onKeyDown = (event: React.KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };
    let next: number | null = null;

    if (event.key in keys) {
      next = (activeRef.current + keys[event.key] + DISCIPLINES.length) % DISCIPLINES.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = DISCIPLINES.length - 1;
    }
    if (next === null) return;

    event.preventDefault();
    goTo(next);
    // The tween owns `active`, so focus has to follow the DOM node directly.
    tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']")[next]?.focus();
  };

  const current = DISCIPLINES[active];

  return (
    <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
      {/* The machine leads on narrow screens — it is the thing worth seeing
          first — but sits second in the source order, after the controls that
          drive it, which is the order a screen reader wants. */}
      <div className="order-1 lg:order-2">
        <div ref={stageRef} className="mb-stage-wrap">
          <div ref={machineRef} className="mb-vars">
            <MacBook activeIndex={active} />
          </div>
        </div>
      </div>

      <div className="order-2 lg:order-1">
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Programmes"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="mb-tabs"
        >
          {DISCIPLINES.map((discipline, i) => (
            <button
              key={discipline.name}
              type="button"
              role="tab"
              id={`programme-tab-${i}`}
              aria-selected={i === active}
              aria-controls="programme-detail"
              tabIndex={i === active ? 0 : -1}
              onClick={() => goTo(i)}
              onFocus={() => goTo(i)}
              onPointerEnter={(e) => e.pointerType === "mouse" && hoverIn(i)}
              onPointerLeave={hoverOut}
              className="mb-tab"
              style={{ "--mb-accent": discipline.accent } as React.CSSProperties}
            >
              <span className="mb-tab-code">{discipline.code}</span>
              <span className="mb-tab-name">{discipline.name}</span>
              <span className="mb-tab-rule" aria-hidden="true" />
            </button>
          ))}
        </div>

        <div
          ref={captionRef}
          id="programme-detail"
          role="tabpanel"
          aria-labelledby={`programme-tab-${active}`}
          tabIndex={0}
          className="mt-8 max-w-md border-l-2 pl-5"
          style={{ borderColor: current.accent }}
        >
          <h3 className="text-lg font-bold text-brand-900 sm:text-xl dark:text-white">
            {current.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-pretty text-brand-900/65 sm:text-base dark:text-brand-100/70">
            {current.blurb}
          </p>
        </div>
      </div>
    </div>
  );
}
