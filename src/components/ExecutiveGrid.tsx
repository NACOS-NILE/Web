"use client";

import Image from "next/image";
import { useState } from "react";
import { LinkedInIcon } from "./Icons";
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
        <div className="section-heading" data-reveal>
          <p className="eyebrow">THE PEOPLE BEHIND IT</p>
          <div>
            <h2 id="team-title">
              Built by students.
              <br />
              <span className="muted-heading">Led by students.</span>
            </h2>
            <p>
              Meet the executive council.
              <br />
              Your fellow students, working for the community.
            </p>
          </div>
        </div>

        <div
          className="team-filter-tabs"
          role="group"
          aria-label="Filter executive council by role"
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
                  sizes="(max-width: 560px) 46vw, (max-width: 900px) 44vw, 28vw"
                />
              </div>
              <div className="executive-info">
                <p className="executive-role">{person.role}</p>
                <h3>{person.name}</h3>
                <p className="executive-quote">{person.quote}</p>
                {person.linkedinUrl && (
                  <a
                    className="executive-link"
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect on LinkedIn with ${person.name}`}
                  >
                    Connect on LinkedIn <LinkedInIcon className="social-icon" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
