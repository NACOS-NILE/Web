// Shared line-icon set for the ambient "tech icon field" decoration used
// beside section titles (Hero's headline, AboutBento's header, ...). Kept
// as one small set of hand-drawn SVGs rather than an icon library so every
// section stays visually consistent and the bundle doesn't pick up a whole
// icon package for six glyphs.
export type TechIconType = "code" | "terminal" | "gitBranch" | "cpu" | "database" | "cloud";

export function TechIconGlyph({ type }: { type: TechIconType }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "code":
      return (
        <svg {...common}>
          <path d="M8.5 7L3.5 12l5 5" />
          <path d="M15.5 7l5 5-5 5" />
        </svg>
      );
    case "terminal":
      return (
        <svg {...common}>
          <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
          <path d="M6.5 9.5l3.5 2.5-3.5 2.5" />
          <path d="M12.5 14.5h5" />
        </svg>
      );
    case "gitBranch":
      return (
        <svg {...common}>
          <circle cx="6" cy="5" r="2.2" />
          <circle cx="6" cy="19" r="2.2" />
          <circle cx="18" cy="12" r="2.2" />
          <path d="M6 7.2V16.8" />
          <path d="M6 10c0 3.5 3 4.5 9.8 4.5" />
          <path d="M15.8 14.5H18" />
        </svg>
      );
    case "cpu":
      return (
        <svg {...common}>
          <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" />
          <rect x="9.5" y="9.5" width="5" height="5" />
          <path d="M9 2.5v3M15 2.5v3M9 18.5v3M15 18.5v3" />
          <path d="M2.5 9h3M2.5 15h3M18.5 9h3M18.5 15h3" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5.5" rx="8" ry="3" />
          <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.03 4 4 0 0 0 7 18z" />
        </svg>
      );
    default:
      return null;
  }
}
