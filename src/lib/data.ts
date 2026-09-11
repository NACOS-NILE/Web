/**
 * Central content for the NACOS Nile landing page.
 * Keeping copy and lists here keeps the section components clean and
 * makes future edits (new execs, new links) a one-file change.
 */

export type Exco = {
  photo: string;
  name: string;
  role: string;
  short: string; // compact role label for the card chip
  bio: string;
  linkedin?: string;
  github?: string;
};

export const excos: Exco[] = [
  {
    photo: "/excos-pics/president.jpg",
    name: "Zikora Fortune Nwafor",
    role: "President",
    short: "President",
    bio: "Passionate about building active student communities.",
    linkedin: "https://www.linkedin.com/in/zikora-nwafor-",
  },
  {
    photo: "/excos-pics/vp.jpg",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    short: "Vice President",
    bio: "Advocating for student welfare and academic excellence.",
    linkedin: "https://www.linkedin.com/in/abdullah-ali-ahmad-8278082a0",
  },
  {
    photo: "/excos-pics/sg.jpg",
    name: "Sheila Jato",
    role: "Secretary General",
    short: "Secretary General",
    bio: "Keeping the engines running smoothly.",
    linkedin: "https://www.linkedin.com/in/sheila-jato-a83991352",
  },
  {
    photo: "/excos-pics/fc.jpg",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    short: "Financial Sec.",
    bio: "Making the important financial decisions.",
    linkedin: "https://www.linkedin.com/in/amira-jibril-4a7326341",
  },
  {
    photo: "/excos-pics/pro.jpg",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    short: "PRO",
    bio: "Applying creativity to communication.",
    linkedin: "https://www.linkedin.com/in/elvis-eshiebor-028422239",
  },
  {
    photo: "/excos-pics/dtd.jpg",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    short: "Training & Dev",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
    linkedin: "https://www.linkedin.com/in/kamsi-ivoke",
    github: "https://github.com/kams-i",
  },
  {
    photo: "/excos-pics/provost.jpg",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    short: "Provost",
    bio: "Managing the day-to-day operations of NACOS Nile.",
    linkedin: "https://www.linkedin.com/in/zubaida-abdulazeez-king-257a2b31b",
  },
  {
    photo: "/excos-pics/socials.jpg",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    short: "Socials",
    bio: "Prioritizing social activities and events.",
  },
  {
    photo: "/excos-pics/welfare.jpg",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    short: "Welfare",
    bio: "Your well-being is my priority.",
    linkedin: "https://www.linkedin.com/in/danielle-ekunwe-726325335",
  },
];

export type Discipline = {
  code: string;
  name: string;
  blurb: string;
};

export const disciplines: Discipline[] = [
  {
    code: "CS",
    name: "Computer Science",
    blurb:
      "The theory and craft behind computation — algorithms, systems, and the ideas that hold software together.",
  },
  {
    code: "SE",
    name: "Software Engineering",
    blurb:
      "Designing, shipping, and maintaining real products with the discipline of a working engineering team.",
  },
  {
    code: "CY",
    name: "Cyber Security",
    blurb:
      "Defending systems and data — from network fundamentals to the mindset of thinking like an attacker.",
  },
  {
    code: "IT",
    name: "Information Technology",
    blurb:
      "Infrastructure, networks, and the practical systems that keep organisations running day to day.",
  },
  {
    code: "IS",
    name: "Information Systems",
    blurb:
      "Where technology meets the business — turning data and process into decisions people can act on.",
  },
  {
    code: "DS",
    name: "Data Science",
    blurb:
      "Statistics, modelling, and machine learning applied to messy, real-world questions.",
  },
];

export type Initiative = {
  tag: string;
  title: string;
  body: string;
};

export const initiatives: Initiative[] = [
  {
    tag: "Learn",
    title: "Bootcamps & Coding Workshops",
    body: "Hands-on sessions led by the Training & Development team — from a first line of code to shipping a working project.",
  },
  {
    tag: "Build",
    title: "Annual Hackathon & Tech Week",
    body: "A week of talks, challenges, and late-night building where the chapter comes together to make something real.",
  },
  {
    tag: "Grow",
    title: "Industry Mentorship & Career Talks",
    body: "Conversations with people already doing the work — internships, first jobs, and the paths that lead there.",
  },
  {
    tag: "Support",
    title: "Tutorials & Study Groups",
    body: "Peer-led academic support across all six disciplines, so no one has to figure out a hard course alone.",
  },
];

export type SocialIconName =
  | "whatsapp"
  | "instagram"
  | "x"
  | "tiktok"
  | "linkedin"
  | "mail";

export type Social = {
  name: string;
  handle: string;
  href: string;
  icon: SocialIconName;
  color: string; // brand accent shown on hover
};

/*
 * Public channels shown in the community grid and footer.
 * WhatsApp is handled separately (members-only — see JoinModal) because it
 * needs a short verification step rather than a plain link.
 */
export const socials: Social[] = [
  {
    name: "Instagram",
    handle: "@nacosnileuni",
    href: "https://www.instagram.com/nacosnileuni",
    icon: "instagram",
    color: "#e1306c",
  },
  {
    name: "X (Twitter)",
    handle: "@NacosNileUni",
    href: "https://x.com/NacosNileUni",
    icon: "x",
    color: "#1d9bf0",
  },
  {
    name: "TikTok",
    handle: "@nacosnileuni",
    href: "https://www.tiktok.com/@nacosnileuni",
    icon: "tiktok",
    color: "#ee1d52",
  },
  {
    name: "LinkedIn",
    handle: "NACOS Nile Chapter",
    href: "https://ng.linkedin.com/company/nacos-nile-university-of-nigeria-chapter",
    icon: "linkedin",
    color: "#0a66c2",
  },
  {
    name: "Email",
    handle: "nacosnile@gmail.com",
    href: "mailto:nacosnile@gmail.com",
    icon: "mail",
    color: "#60a5fa",
  },
];

/* Chapter location — links open the pin in the user's preferred maps app. */
export const location = {
  label: "Nile University of Nigeria",
  address:
    "Plot 681 Cadastral Zone C-00, Research & Institution Area, Abuja, FCT.",
  googleMaps: "https://maps.app.goo.gl/zjxVg5vyGcgYeeoLA",
  appleMaps: "https://maps.apple/p/SpE511INpuFR6y",
};

/* Verification address for the members-only WhatsApp community. */
export const membershipEmail = "nacosnile@gmail.com";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Programs", href: "#programs" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
];
