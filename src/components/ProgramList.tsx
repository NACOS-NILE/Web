"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import { programs } from "@/data/content";

export default function ProgramList() {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);

  return (
    <div className="program-list">
      {programs.map((program, index) => (
        <article
          className={`program-row ${activeProgram === index ? "active" : ""}`}
          key={program.number}
          onClick={() =>
            setActiveProgram((current) => (current === index ? null : index))
          }
        >
          <span className="program-number">{program.number}</span>

          <div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>

          <span className="program-arrow" aria-hidden="true">
            <ArrowUpRightIcon />
          </span>
        </article>
      ))}
    </div>
  );
}
