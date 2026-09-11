"use client";

import { useState } from "react";
import {
  Monitor,
  Code2,
  ShieldCheck,
  Server,
  Database,
  BarChart3,
} from "lucide-react";

const disciplines = [
  {
    id: 1,
    name: "Computer Science",
    icon: Monitor,
    description:
      "The study of algorithms, computational systems, and the theoretical foundations of computing — from artificial intelligence to systems architecture.",
  },
  {
    id: 2,
    name: "Software Engineering",
    icon: Code2,
    description:
      "Designing, building, and maintaining scalable software systems using modern engineering practices, frameworks, and development methodologies.",
  },
  {
    id: 3,
    name: "Cyber Security",
    icon: ShieldCheck,
    description:
      "Protecting digital systems, networks, and data from threats — covering ethical hacking, cryptography, and security operations.",
  },
  {
    id: 4,
    name: "Information Technology",
    icon: Server,
    description:
      "Managing and deploying technology infrastructure, cloud systems, and enterprise solutions to support organisational operations.",
  },
  {
    id: 5,
    name: "Information Systems",
    icon: Database,
    description:
      "Bridging business and technology through data-driven systems design, process optimisation, and digital transformation strategies.",
  },
  {
    id: 6,
    name: "Data Science",
    icon: BarChart3,
    description:
      "Extracting insights from complex datasets using statistical methods, machine learning, and advanced analytics techniques.",
  },
];

export default function Disciplines() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="disciplines"
      className="section-padding bg-gray-50"
      aria-label="Computing Disciplines"
    >
      <div className="container-nacos">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">What We Study</p>
          <h2 className="section-heading text-balance">
            Six disciplines. One community.
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            NACOS Nile unites students across every major computing field —
            creating a cross-disciplinary community where knowledge flows
            freely between specialisations.
          </p>
        </div>

        {/* Disciplines grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {disciplines.map((d) => {
            const Icon = d.icon;
            const isActive = active === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setActive(isActive ? null : d.id)}
                onFocus={() => setActive(d.id)}
                onBlur={() => setActive(null)}
                className={`group text-left p-6 rounded-sm border transition-all duration-300 ${
                  isActive
                    ? "bg-nacos-600 border-nacos-600 shadow-lg shadow-nacos-600/20"
                    : "bg-white border-gray-200 hover:border-nacos-300 hover:shadow-md"
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive
                        ? "bg-white/15"
                        : "bg-nacos-50 group-hover:bg-nacos-100"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={
                        isActive ? "text-white" : "text-nacos-600"
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-bold tracking-wider ${
                          isActive ? "text-nacos-300" : "text-nacos-500"
                        }`}
                      >
                        {String(d.id).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      className={`text-base font-bold transition-colors duration-300 ${
                        isActive ? "text-white" : "text-nacos-900"
                      }`}
                    >
                      {d.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed transition-all duration-300 ${
                        isActive
                          ? "text-white/80 max-h-40 opacity-100"
                          : "text-gray-500 max-h-0 opacity-0 sm:max-h-40 sm:opacity-100"
                      }`}
                    >
                      {d.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}