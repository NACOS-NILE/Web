"use client";

import Image from "next/image";
import { useState } from "react";
import { LinkedInIcon } from "./Icons";
import { Arrow } from "./Arrow";
import { executives } from "@/data/content";

const categories = [
  { id: "all", label: "All Council" },
  { id: "executive", label: "Presidency & Provost" },
  { id: "operations", label: "Secretariat & Finance" },
  { id: "directors", label: "Directors & PRO" },
] as const;

function getCategory(photo: string): string {
  if (["president", "vp", "provost"].includes(photo)) return "executive";
  if (["sg", "fc"].includes(photo)) return "operations";
  return "directors";
}

export function ExecutiveGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? executives
      : executives.filter((p) => getCategory(p.photo) === activeCategory);

  return (
    <section
      id="team"
      tabIndex={-1}
      className="team section-space"
      aria-labelledby="team-title"
    >
      <div className="wrap">
        <div className="section-heading team-heading" data-reveal>
          <div className="team-heading-top">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              EXECUTIVE COUNCIL
            </p>
            <div className="team-header-kicker desktop-only" aria-hidden="true">
              <span>STUDENTS</span>
              <span>IDEAS</span>
              <span>COMMUNITY</span>
              <span>IMPACT</span>
            </div>
          </div>
          <div>
            <h2 id="team-title">The people serving this session.</h2>
            <p>
              Meet the executive council.
              <br className="desktop-break" />
              Your fellow students, working for the community.
            </p>
          </div>
        </div>

        <div
          className="team-filter-tabs"
          role="group"
          aria-label="Filter executive council by role"
          data-reveal
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={activeCategory === cat.id}
              className={`team-filter-pill ${activeCategory === cat.id ? "is-active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="executive-grid" data-reveal-stagger>
          {filtered.map((person) => (
            <article
              className={`executive-card portrait-${person.photo}`}
              key={person.photo}
              data-reveal
            >
              <div className="portrait">
                <Image
                  src={`/excos-pics/${person.photo}.jpg`}
                  alt={person.name}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <div className="executive-info">
                <p className="executive-role">{person.role}</p>
                <h3>{person.name}</h3>
                <p className="executive-quote">{person.quote}</p>
                {person.linkedinUrl ? (
                  <a
                    className="executive-link"
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect on LinkedIn with ${person.name}`}
                  >
                    <span>Connect on LinkedIn</span>
                    <LinkedInIcon className="social-icon" />
                  </a>
                ) : (
                  <div className="executive-link-placeholder" />
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Executive Section Bottom Banner Card */}
        <div className="executive-banner-card" data-reveal>
          <div className="executive-banner-content">
            <p className="eyebrow executive-banner-kicker">
              SAME STUDENTS. A BRIGHTER TOMORROW.
            </p>
            <div className="executive-banner-bar" aria-hidden="true" />
            <h3 className="executive-banner-title">
              More than a chapter.
              <br />
              <span className="blue-text">A community that builds.</span>
            </h3>
          </div>
          <a href="#community" className="button button-white executive-banner-cta">
            <span>Join our community</span>
            <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}
