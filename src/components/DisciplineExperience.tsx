"use client";

import { useRef, useState } from "react";
import { disciplines } from "@/data/content";
import { DisciplineIcon } from "./DisciplineIcon";
import { Arrow } from "./Arrow";
import { DisciplineLaptop } from "./DisciplineLaptop";

const categoryMap: Record<string, string> = {
  CS: "CS / COMPUTING FOUNDATIONS",
  SE: "SE / APPLIED SOFTWARE",
  CY: "CY / SECURITY & DEFENSE",
  IT: "IT / INFRASTRUCTURE & SYSTEMS",
  IS: "IS / ENTERPRISE & ARCHITECTURE",
  DS: "DS / INTELLIGENCE & ANALYTICS",
};

export function DisciplineExperience() {
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const discipline = disciplines[selected];
  const tags = discipline.focus.split(" · ");

  return (
    <section
      id="disciplines"
      tabIndex={-1}
      className="disciplines section-space"
      aria-labelledby="discipline-title"
    >
      <div className="wrap">
        <div className="section-heading disciplines-header" data-reveal>
          <div className="disciplines-header-top">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              SIX DISCIPLINES
            </p>
            <div className="disciplines-header-kicker desktop-only" aria-hidden="true">
              <span>STUDENTS</span>
              <span>IDEAS</span>
              <span>COMMUNITY</span>
              <span>IMPACT</span>
            </div>
          </div>
          <div>
            <h2 id="discipline-title">
              Six disciplines.
              <br />
              <span className="blue-text">A shared curiosity.</span>
            </h2>
            <p>
              Different ways to think. More ways to learn from each other.
              <br className="desktop-break" /> Choose a discipline to take a closer look.
            </p>
          </div>
        </div>

        {/* 6 Discipline Interactive Grid (2 columns on desktop) */}
        <div
          ref={tabsRef}
          className="disciplines-selector-grid"
          role="tablist"
          aria-label="Select computing discipline"
          aria-orientation="horizontal"
          data-reveal-stagger
          onKeyDown={(event) => {
            const directions: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
            let next = directions[event.key] === undefined ? null : (selected + directions[event.key] + disciplines.length) % disciplines.length;
            if (event.key === "Home") next = 0;
            if (event.key === "End") next = disciplines.length - 1;
            if (next === null) return;
            event.preventDefault();
            setSelected(next);
            tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
          }}
        >
          {disciplines.map((item, index) => {
            const isActive = selected === index;
            return (
              <button
                key={item.short}
                type="button"
                role="tab"
                id={`discipline-tab-${index}`}
                aria-selected={isActive}
                aria-controls="discipline-detail"
                tabIndex={isActive ? 0 : -1}
                data-discipline={item.short}
                className={`discipline-selector-card ${isActive ? "is-selected" : ""}`}
                onClick={() => setSelected(index)}
              >
                <div className="discipline-card-left">
                  <DisciplineIcon kind={item.short} className="discipline-card-icon" />
                  <span className="discipline-card-name">{item.name}</span>
                </div>
                <Arrow diagonal={false} className="discipline-card-arrow" />
              </button>
            );
          })}
        </div>

        {/* Selected Discipline Preview Display */}
        <div
          className="discipline-detail-panel"
          id="discipline-detail"
          role="tabpanel"
          aria-labelledby={`discipline-tab-${selected}`}
          aria-live="polite"
          aria-atomic="true"
          data-reveal
        >
          <div className="discipline-detail-content" key={discipline.short}>
            <p className="eyebrow discipline-detail-kicker">
              {categoryMap[discipline.short] || `${discipline.short} / COMPUTING FOUNDATIONS`}
            </p>
            <h3 className="discipline-detail-title">{discipline.name}</h3>
            <p className="discipline-detail-desc">{discipline.description}</p>

            <div className="discipline-tags-row">
              {tags.map((tag) => (
                <span key={tag} className="discipline-pill-tag">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#programs"
              className="button button-blue discipline-explore-btn"
            >
              <span>Explore {discipline.name}</span>
              <Arrow diagonal={false} />
            </a>
          </div>

          <DisciplineLaptop activeIndex={selected} />
        </div>

        {/* Section Bottom Divider */}
        <div className="section-divider-banner" aria-hidden="true">
          <span className="divider-line" />
          <span className="divider-label">A STRONGER TECH COMMUNITY. A BRIGHTER TOMORROW.</span>
          <span className="divider-line" />
        </div>
      </div>
    </section>
  );
}
