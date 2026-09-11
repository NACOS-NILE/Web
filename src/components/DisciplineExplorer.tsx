"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, Icon } from "@/components/icons";
import { disciplines } from "@/data/content";
import { preloadImage, prefersReducedMotion } from "@/lib/utils";

export default function DisciplineExplorer() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  const explorerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const active = disciplines[activeDiscipline];

  // Load all six images once the section is close, so switching is instant
  useEffect(() => {
    const el = explorerRef.current;
    if (!el) return;

    const preloadAll = () => {
      disciplines.forEach((discipline) => preloadImage(discipline.image));
    };

    if (!("IntersectionObserver" in window)) {
      preloadAll();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          preloadAll();
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // On phones the discipline tabs scroll sideways; keep the active one in view
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu || menu.scrollWidth <= menu.clientWidth) return;

    const button = menu.children[activeDiscipline] as HTMLElement | undefined;
    if (!button) return;

    const left =
      button.offsetLeft - (menu.clientWidth - button.offsetWidth) / 2;

    menu.scrollTo({
      left: Math.max(left, 0),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, [activeDiscipline]);

  return (
    <div className="discipline-explorer" ref={explorerRef}>
      <div
        ref={menuRef}
        className="discipline-menu"
        role="tablist"
        aria-label="Computing disciplines"
      >
        {disciplines.map((discipline, index) => (
          <button
            type="button"
            key={discipline.name}
            id={`discipline-tab-${index}`}
            className={activeDiscipline === index ? "active" : ""}
            onPointerEnter={(event) => {
              /*
                Hover preview only for a real mouse, and only in the desktop
                list layout. In the scrolling pill row, hovering would move
                the row under the pointer and pick the wrong discipline.
              */
              const menu = menuRef.current;
              const isScrollingRow =
                menu !== null && menu.scrollWidth > menu.clientWidth;

              if (event.pointerType === "mouse" && !isScrollingRow) {
                setActiveDiscipline(index);
              }
            }}
            onFocus={() => setActiveDiscipline(index)}
            onClick={() => setActiveDiscipline(index)}
            role="tab"
            aria-selected={activeDiscipline === index}
            aria-controls="discipline-panel"
          >
            <span>{discipline.number}</span>
            <strong>{discipline.name}</strong>
            <ArrowUpRightIcon />
          </button>
        ))}
      </div>

      <div
        className="discipline-feature"
        key={active.name}
        id="discipline-panel"
        role="tabpanel"
        aria-labelledby={`discipline-tab-${activeDiscipline}`}
      >
        <div className="discipline-feature-image">
          <Image
            src={active.image}
            alt={`${active.name} related visual`}
            fill
            sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 560px"
          />

          <div className="image-overlay" style={{ background: active.tint }} />

          <span>{active.number}</span>

          <div className="discipline-feature-icon">
            <Icon type={active.icon} />
          </div>
        </div>

        <div className="discipline-feature-copy">
          <span>DISCIPLINE {active.number}</span>

          <h3>{active.name}</h3>

          <p>{active.description}</p>

          <div className="discipline-feature-note">
            <Icon type={active.icon} />
            <span>{active.short}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
