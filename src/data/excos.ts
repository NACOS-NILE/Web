import { LINKEDIN_URL } from "./links";

export interface ExcoSocials {
  linkedin?: string;
  instagram?: string;
  github?: string;
  website?: string;
}

export interface ExcoMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  department: string;
  isPresident?: boolean;
  // Optional — only whichever platforms a given exco actually has render as
  // icons under their name (see ExcoArch's SocialRow). No X/Twitter option:
  // dropped site-wide, see socialLinks in data/links.ts.
  socials?: ExcoSocials;
}

// Photos are background-removed cutouts (see cutouts/) shown on a radial
// brand-blue vignette mat — see the photo container's background in
// ExcoArch.tsx — rather than each person's original, differently-lit event
// backdrop.
const excosBase: ExcoMember[] = [
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    photo: "/excos-pics/cutouts/provost_c.webp",
    bio: "Managing the day-to-day operations of NACOS Nile.",
    department: "Computer Science",
    socials: { linkedin: "https://www.linkedin.com/in/zubaida-abdulazeez-king-257a2b31b" },
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    photo: "/excos-pics/cutouts/fc_c.webp",
    bio: "Making the important financial decisions.",
    department: "Software Engineering",
    socials: { linkedin: "https://www.linkedin.com/in/amira-jibril-4a7326341" },
  },
  {
    name: "Elvis Francis",
    role: "PRO",
    photo: "/excos-pics/cutouts/pro_c.webp",
    bio: "Applying creativity to communication.",
    department: "Software Engineering",
    socials: { linkedin: "https://www.linkedin.com/in/elvis-eshiebor-028422239" },
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    photo: "/excos-pics/cutouts/vp_c.webp",
    bio: "Advocating for student welfare and academic excellence.",
    department: "Cyber Security",
    socials: { linkedin: "https://www.linkedin.com/in/abdullah-ali-ahmad-8278082a0" },
  },
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    photo: "/excos-pics/cutouts/president_c.webp",
    bio: "Passionate about building active student communities.",
    department: "Software Engineering",
    isPresident: true,
    socials: { linkedin: "https://www.linkedin.com/in/zikora-nwafor-" },
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    photo: "/excos-pics/cutouts/sg_c.webp",
    bio: "Keeping the engines running smoothly.",
    department: "Information Technology",
    socials: { linkedin: "https://www.linkedin.com/in/sheila-jato-a83991352" },
  },
  {
    name: "Ivoke Kamsi",
    role: "DTD",
    photo: "/excos-pics/cutouts/dtd_c.webp",
    bio: "Driving technical growth and coding workshops.",
    department: "Software Engineering",
    socials: { linkedin: "https://www.linkedin.com/in/kamsi-ivoke" },
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    photo: "/excos-pics/cutouts/socials_c.webp",
    bio: "Prioritizing social activities and events.",
    department: "Computer Science",
    // Explicitly no icon at all here (not even the chapter-page fallback)
    // — an empty object, not omitted, is what tells the map below to skip
    // the fallback rather than apply it. Leaving this field off entirely
    // would fall back to the chapter page like everyone else without one.
    socials: {},
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    photo: "/excos-pics/cutouts/welfare_c.webp",
    bio: "Your well-being is my priority.",
    department: "Computer Science",
    socials: { linkedin: "https://www.linkedin.com/in/danielle-ekunwe-726325335" },
  },
];

// Anyone without their own `socials` on file falls back to the chapter's
// own LinkedIn page (the one real, verified LinkedIn URL we actually have)
// rather than showing no icon at all. `member.socials` has to be `undefined`
// for that fallback to apply, not just empty — `socials: {}` (like Saidat's
// above) means "no icon, on purpose," and has to survive this untouched,
// not get the fallback merged into it.
export const excos: ExcoMember[] = excosBase.map((member) => ({
  ...member,
  socials: member.socials ?? { linkedin: LINKEDIN_URL },
}));
