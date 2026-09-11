"use client";
import { useState } from "react";
import { disciplines } from "@/data/content";
import { DisciplineIcon } from "./DisciplineIcon";
export function DisciplineExperience() {
  const [selected, setSelected] = useState(0);
  const discipline = disciplines[selected];
  return (
    <section
      id="disciplines"
      tabIndex={-1}
      className="disciplines section-space"
      aria-labelledby="discipline-title"
    >
      <div className="wrap">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">FIND YOUR CONNECTION</p>
          <div>
            <h2 id="discipline-title">
              Six disciplines.
              <br />
              <span className="muted-heading">A shared curiosity.</span>
            </h2>
            <p>
              Different ways to think. More ways to learn from each other.
              <br className="desktop-break" /> Choose a discipline to take a
              closer look.
            </p>
          </div>
        </div>
        <div className="discipline-layout" data-reveal>
          <div
            className="discipline-list"
            role="group"
            aria-label="Explore computing disciplines"
            data-reveal-stagger
          >
            {disciplines.map((item, index) => (
              <button
                key={item.short}
                aria-pressed={selected === index}
                aria-controls="discipline-detail"
                onClick={() => setSelected(index)}
              >
                <DisciplineIcon kind={item.short} /><span>{item.name}</span>
              </button>
            ))}
          </div>
          <div
            className="discipline-detail"
            id="discipline-detail"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="discipline-text" key={discipline.short}>
              <div className="discipline-text-top">
                <DisciplineIcon kind={discipline.short} className="detail-icon" />
                <p className="eyebrow">
                  {discipline.short} / YOUR WAY INTO COMPUTING
                </p>
              </div>
              <h3>{discipline.name}</h3>
              <p className="discipline-desc">{discipline.description}</p>
              <p className="discipline-focus mono">{discipline.focus}</p>
            </div>
          </div>
        </div>
        <noscript>
          <div className="no-script-disciplines">
            {disciplines.slice(1).map((item) => (
              <article key={item.short}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </noscript>
      </div>
    </section>
  );
}
