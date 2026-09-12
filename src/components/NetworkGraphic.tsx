import { useId, type CSSProperties } from "react";
import { disciplines } from "@/data/content";
import { DisciplineIcon } from "./DisciplineIcon";

/** One visual vocabulary for the moving hero and stationary explorer. */
export function NetworkGraphic({ selected, moving = false }: { selected?: number; moving?: boolean }) {
  const id = useId().replace(/:/g, "");
  const phases = [60, 180, 120, 0, 240, 300];

  return (
    <svg
      className="network-art orbital-art"
      viewBox="0 0 620 620"
      fill="none"
      role="img"
      aria-label="Six computing disciplines connected around NACOS Nile"
    >
      <defs>
        <radialGradient id={`${id}-sphere`} cx="25%" cy="15%" r="85%">
          <stop stopColor="#278eff" />
          <stop offset=".18" stopColor="#08316d" />
          <stop offset=".7" stopColor="#031126" />
          <stop offset="1" stopColor="#1352b1" />
        </radialGradient>
        <linearGradient id={`${id}-blue`} x2="1" y2="1">
          <stop stopColor="#8be9ff" />
          <stop offset=".5" stopColor="#3e8aff" />
          <stop offset="1" stopColor="#274193" />
        </linearGradient>
        <linearGradient id={`${id}-beam`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e60d5" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Solar System Orbital Tracks — Distinct and High-Contrast */}
      <g className="network-tracks" stroke="#2563eb">
        {[145, 185, 235, 273].map((r, i) => (
          <ellipse
            key={r}
            cx="310"
            cy="300"
            rx={r}
            ry={r * 0.86}
            strokeWidth={i === 2 ? (selected !== undefined ? "2.6" : "2") : "1.8"}
            stroke={i === 2 && selected !== undefined ? "#1e60d5" : "#2563eb"}
            strokeOpacity={i === 2 ? "0.85" : "0.5"}
            strokeDasharray={i % 2 ? "6 7" : undefined}
          />
        ))}
      </g>

      {/* Center Core Atmosphere */}
      <circle cx="310" cy="300" r="118" fill="#0d57d8" opacity=".22" />
      <circle
        className="network-sphere"
        cx="310"
        cy="300"
        r="103"
        fill={`url(#${id}-sphere)`}
        stroke="#3eaeff"
        strokeWidth="2"
      />
      <circle
        cx="310"
        cy="300"
        r="76"
        fill="#031024"
        fillOpacity="0.6"
        stroke="#45a5ff"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />
      <image
        href="/nacos-symbol.webp"
        x="238"
        y="228"
        width="144"
        height="144"
        preserveAspectRatio="xMidYMid meet"
      />

      {/* Orbit Nodes and Radial Beams */}
      <g transform="translate(310 300) scale(1 .86)">
        {disciplines.map((d, i) => {
          const isSelected = selected === i;
          return (
            <g
              key={d.short}
              className={moving ? "orbit-turn" : "fixed-orbit"}
              style={
                {
                  "--phase": `${phases[i]}deg`,
                  "--duration": "75s",
                  transform: moving ? undefined : `rotate(${phases[i]}deg)`,
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                } as CSSProperties
              }
            >
              {/* Active Glow Beam Background */}
              {isSelected && (
                <line
                  x1="104"
                  x2="235"
                  stroke="#38bdf8"
                  strokeWidth="8"
                  strokeOpacity="0.55"
                  strokeLinecap="round"
                  style={{ filter: "blur(3px)" }}
                />
              )}

              {/* Radial Connection Line */}
              <line
                x1="106"
                x2="235"
                stroke={isSelected ? `url(#${id}-beam)` : "#3b82f6"}
                strokeWidth={isSelected ? "4" : "1.8"}
                strokeOpacity={isSelected ? "1" : "0.32"}
                strokeDasharray={isSelected ? undefined : "4 5"}
                strokeLinecap={isSelected ? "round" : undefined}
                className={isSelected ? "active-discipline-beam" : undefined}
              />

              {/* Active Energy Pulse Beacon */}
              {isSelected && (
                <circle cx="170" cy="0" r="4.5" fill="#38bdf8" className="active-beam-beacon" />
              )}

              <g transform="translate(235 0)">
                <g
                  className={moving ? "orbit-counter" : undefined}
                  style={moving ? undefined : { transform: `rotate(${-phases[i]}deg)` }}
                >
                  <g
                    transform="scale(1 1.1627906977)"
                    className={`network-node${isSelected ? " selected-node" : ""}`}
                  >
                    {/* Active Halo Glow Ring */}
                    {isSelected && (
                      <circle
                        r="43"
                        fill="#1d4ed8"
                        fillOpacity="0.22"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                      />
                    )}

                    <circle
                      r={isSelected ? 38 : 35}
                      fill={isSelected ? "#041530" : "#06162e"}
                      stroke={isSelected ? "#38bdf8" : "#298aff"}
                      strokeWidth={isSelected ? 3.5 : 2}
                      style={{
                        filter: isSelected
                          ? "drop-shadow(0 0 16px #2563ebc0)"
                          : moving
                          ? undefined
                          : "drop-shadow(0 0 4px #1b7dff50)",
                        transition: "all 0.35s ease",
                      }}
                    />

                    <text
                      y="-8"
                      textAnchor="middle"
                      fill="white"
                      fontSize={isSelected ? "16" : "15"}
                      fontWeight="700"
                      letterSpacing="0.5px"
                    >
                      {d.short}
                    </text>

                    <DisciplineIcon
                      kind={d.short}
                      x={isSelected ? "-12" : "-11"}
                      y="1"
                      width={isSelected ? "24" : "22"}
                      height={isSelected ? "24" : "22"}
                      color={isSelected ? "#38bdf8" : "#78baff"}
                    />

                    {moving && (
                      <text
                        className="network-node-name"
                        y="53"
                        textAnchor="middle"
                        fill="#d9e9ff"
                        fontSize="12"
                      >
                        {d.name.split(" ").map((word, n) => (
                          <tspan key={word} x="0" dy={n ? 14 : 0}>
                            {word}
                          </tspan>
                        ))}
                      </text>
                    )}
                  </g>
                </g>
              </g>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
