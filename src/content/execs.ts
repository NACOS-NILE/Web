export interface Exec {
  slug: string;
  name: string;
  role: string;
  /** Aspect ratio 4:5, 300px wide source. */
  image: string;
}

// Source: README.md exco table. Photos re-cropped and colour-normalised —
// see DESIGN.md and .mockups/build_assets.py for the pipeline.
export const execs: Exec[] = [
  { slug: "president", name: "Zikora Fortune Nwafor", role: "President", image: "/exec/president-300.webp" },
  { slug: "vp", name: "Abdullah Ali Ahmad", role: "Vice President", image: "/exec/vp-300.webp" },
  { slug: "sg", name: "Sheila Jato", role: "Secretary General", image: "/exec/sg-300.webp" },
  { slug: "fc", name: "Amira Ibrahim", role: "Financial Secretary", image: "/exec/fc-300.webp" },
  { slug: "pro", name: "Elvis Francis", role: "Public Relations Officer", image: "/exec/pro-300.webp" },
  { slug: "dtd", name: "Ivoke Kamsi", role: "Training & Development", image: "/exec/dtd-300.webp" },
  { slug: "provost", name: "Zubaida Abdulazeez", role: "Provost", image: "/exec/provost-300.webp" },
  { slug: "socials", name: "Saidat Ahmed", role: "Director of Socials", image: "/exec/socials-300.webp" },
  { slug: "welfare", name: "Danielle Ekunwe", role: "Director of Welfare", image: "/exec/welfare-300.webp" },
];
