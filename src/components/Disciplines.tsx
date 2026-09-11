"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Matter from "matter-js";
import { disciplines } from "@/data/site";

gsap.registerPlugin(ScrollTrigger, SplitText);

const { Engine, World, Bodies, Body } = Matter;

export default function Disciplines() {
  const stageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let rafId: number | null = null;
    let engine: Matter.Engine | null = null;

    function measureTag(label: string) {
      const ghost = document.createElement("div");
      ghost.className = "discipline-pill";
      ghost.style.position = "absolute";
      ghost.style.visibility = "hidden";
      ghost.style.whiteSpace = "nowrap";
      ghost.textContent = label;
      document.body.appendChild(ghost);
      const size = { width: ghost.offsetWidth, height: ghost.offsetHeight };
      ghost.remove();
      return size;
    }

    function dropPills() {
      if (!stage) return;

      const stageWidth = stage.offsetWidth;
      const stageHeight = stage.offsetHeight;
      const wallThickness = 20;
      const groundGap = 32; // space reserved at the bottom of the stage

      engine = Engine.create({ gravity: { x: 0, y: 2 } });

      const floor = Bodies.rectangle(
        stageWidth / 2,
        stageHeight - groundGap + wallThickness / 2,
        stageWidth * 3,
        wallThickness,
        { isStatic: true },
      );
      const leftWall = Bodies.rectangle(
        -wallThickness / 2,
        stageHeight / 2,
        wallThickness,
        stageHeight * 4,
        { isStatic: true },
      );
      const rightWall = Bodies.rectangle(
        stageWidth + wallThickness / 2,
        stageHeight / 2,
        wallThickness,
        stageHeight * 4,
        { isStatic: true },
      );
      World.add(engine.world, [floor, leftWall, rightWall]);

      const pillElements: HTMLDivElement[] = [];
      const pillBodies: Matter.Body[] = [];
      const pillSizes = disciplines.map(measureTag);

      disciplines.forEach((label, index) => {
        const el = document.createElement("div");
        el.className = "discipline-pill";
        el.textContent = label;
        el.style.position = "absolute";
        el.style.top = "0";
        el.style.left = "0";
        el.style.opacity = "0";
        stage.appendChild(el);

        const { width, height } = pillSizes[index];
        const margin = width / 2 + 4;
        const spawnRange = Math.max(stageWidth - margin * 2, 0);
        const startX = margin + Math.random() * spawnRange;
        const startY = -(height / 2) - index * 40;
        const angle = (Math.random() - 0.5) * 0.4;

        const body = Bodies.rectangle(startX, startY, width, height, {
          restitution: 0.15,
          friction: 0.6,
          density: 0.002,
          chamfer: { radius: height / 2 },
        });
        Body.setAngle(body, angle);
        World.add(engine!.world, body);

        gsap.to(el, {
          opacity: 1,
          duration: 0.3,
          delay: index * 0.08,
          ease: "power2.out",
        });

        pillElements.push(el);
        pillBodies.push(body);
      });

      function update() {
        if (!engine) return;
        Engine.update(engine, 1000 / 60);
        for (let i = 0; i < pillElements.length; i++) {
          const body = pillBodies[i];
          const { width, height } = pillSizes[i];
          pillElements[i].style.transform =
            `translate(${body.position.x - width / 2}px, ${body.position.y - height / 2}px) rotate(${body.angle}rad)`;
        }
        rafId = requestAnimationFrame(update);
      }
      rafId = requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRunRef.current) {
          hasRunRef.current = true;
          dropPills();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(stage);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      if (engine) Engine.clear(engine);
    };
  }, []);

  return (
    <section ref={sectionRef} id="disciplines" className="disciplines-section">
      <div className="mx-auto mb-10 max-w-7xl px-4 text-left sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(26px , 4vw, 42px)",
            color: "var(--color-ink)",
            textAlign: "center",
            margin: "0 0 10px",
          }}
        >
          Six disciplines, one community
        </h2>
        <p
          ref={copyRef}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "var(--color-ink-muted)",
            textAlign: "center",
            margin: "0",
          }}
        >
          Scroll down to see them land.
        </p>
      </div>

      <div ref={stageRef} className="discipline-stage" />

      <style>{`
        .disciplines-section {
          padding: 64px 16px;
        }

        @media (min-width: 640px) {
          .disciplines-section { padding: 80px 32px; }
        }

        @media (min-width: 1024px) {
          .disciplines-section { padding: 100px 48px; }
        }

        .discipline-stage {
          position: relative;
          width: 100%;
          max-width: 420px;
          height: 260px;
          margin: 0 auto;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .discipline-stage { max-width: 600px; height: 300px; }
        }

        @media (min-width: 1024px) {
          .discipline-stage { max-width: 820px; height: 360px; }
        }

        @media (min-width: 1280px) {
          .discipline-stage { max-width: 960px; height: 400px; }
        }

        @media (min-width: 1536px) {
          .discipline-stage { max-width: 1060px; height: 420px; }
        }

        .discipline-pill {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 300;
          color: #eef1f8;
          background: #16214a;
          border: 2px solid #E5ECFB;
          border-radius: 999px;
          padding: 10px 26px;
          white-space: nowrap;
          will-change: transform, opacity;
        }

        @media (min-width: 1024px) {
          .discipline-pill {
            font-size: 17px;
            padding: 12px 30px;
          }
        }

        @media (max-width: 480px) {
          .discipline-pill {
            font-size: 13px;
            padding: 8px 14px;
            border-width: 1.5px;
          }
        }
      `}</style>
    </section>
  );
}
