/**
 * Single source of truth for every piece of copy on the landing page.
 * Editing content here never requires touching a component.
 */

export type Exco = {
  name: string;
  role: string;
  shortRole: string;
  bio: string;
  image: string;
};

export type Discipline = {
  name: string;
  blurb: string;
  icon: "code" | "layers" | "shield" | "server" | "network" | "chart";
  /** Course code, used as the index marker beside the name in the selector. */
  code: string;
  /**
   * Screen colour for this programme. Only ever lit inside the laptop display,
   * where it reads as an app's own palette rather than a second brand colour.
   */
  accent: string;
  /** Which mock interface the laptop boots when this programme is selected. */
  screen: "editor" | "pipeline" | "terminal" | "console" | "schema" | "notebook";
  /** Filename shown in the mock window's title bar. */
  file: string;
};

export type Program = {
  title: string;
  description: string;
  icon: "spark" | "trophy" | "briefcase" | "book";
};

export type Social = {
  name: string;
  handle: string;
  href: string;
  icon: "discord" | "whatsapp" | "telegram" | "x" | "instagram" | "linkedin";
  accent: string;
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Events", href: "#events" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
] as const;

export const DISCIPLINES: Discipline[] = [
  {
    name: "Computer Science",
    blurb:
      "The theory beneath the machine — algorithms, computation and the ideas every other discipline is built on.",
    icon: "code",
    code: "CSC",
    accent: "#60a5fa",
    screen: "editor",
    file: "traverse.py",
  },
  {
    name: "Software Engineering",
    blurb:
      "Designing, shipping and maintaining software that real people depend on, at real-world scale.",
    icon: "layers",
    code: "SEN",
    accent: "#a78bfa",
    screen: "pipeline",
    file: "release — main",
  },
  {
    name: "Cyber Security",
    blurb:
      "Offensive and defensive security — threat modelling, cryptography, forensics and secure systems.",
    icon: "shield",
    code: "CYB",
    accent: "#34d399",
    screen: "terminal",
    file: "zsh — recon",
  },
  {
    name: "Information Technology",
    blurb:
      "Networks, cloud infrastructure and the operations work that keeps organisations running.",
    icon: "server",
    code: "IFT",
    accent: "#38bdf8",
    screen: "console",
    file: "cluster-01",
  },
  {
    name: "Information Systems",
    blurb:
      "Where technology meets business strategy — data governance, process design and decision support.",
    icon: "network",
    code: "INS",
    accent: "#fbbf24",
    screen: "schema",
    file: "registry.model",
  },
  {
    name: "Data Science",
    blurb:
      "Statistics, machine learning and visualisation that turn raw data into decisions worth making.",
    icon: "chart",
    code: "DTS",
    accent: "#f472b6",
    screen: "notebook",
    file: "intake.ipynb",
  },
];

export const PROGRAMS: Program[] = [
  {
    title: "Tech Bootcamps & Coding Workshops",
    description:
      "Hands-on sessions led by our Director of Training & Development, taking members from first commit to deployed project across web, mobile, cloud and AI tracks.",
    icon: "spark",
  },
  {
    title: "Annual Hackathon & Tech Week",
    description:
      "Our flagship event. A week of talks, workshops, exhibitions and a build sprint where teams ship a working product against the clock — with prizes on the line.",
    icon: "trophy",
  },
  {
    title: "Industry Mentorship & Career Talks",
    description:
      "Engineers, founders and researchers sit down with members for CV reviews, portfolio critiques, interview prep and honest conversations about the path into tech.",
    icon: "briefcase",
  },
  {
    title: "Academic Tutorials & Study Groups",
    description:
      "Peer-led tutorials on the courses that trip people up, plus exam prep and study circles so no computing student at Nile has to struggle alone.",
    icon: "book",
  },
];

export const EXCOS: Exco[] = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    shortRole: "President",
    bio: "Passionate about building active student communities.",
    image: "/excos-pics/president.jpg",
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    shortRole: "VP",
    bio: "Advocating for student welfare and academic excellence.",
    image: "/excos-pics/vp.jpg",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    shortRole: "Secretary General",
    bio: "Keeping the engines running smoothly.",
    image: "/excos-pics/sg.jpg",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    shortRole: "Financial Secretary",
    bio: "Making the important financial decisions.",
    image: "/excos-pics/fc.jpg",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    shortRole: "PRO",
    bio: "Applying creativity to communication.",
    image: "/excos-pics/pro.jpg",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    shortRole: "DTD",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
    image: "/excos-pics/dtd.jpg",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    shortRole: "Provost",
    bio: "Managing the day-to-day operations of NACOS Nile.",
    image: "/excos-pics/provost.jpg",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    shortRole: "DOS",
    bio: "Prioritizing social activities and events.",
    image: "/excos-pics/socials.jpg",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    shortRole: "DOW",
    bio: "Your well-being is my priority.",
    image: "/excos-pics/welfare.jpg",
  },
];

/**
 * Chapter channels. The chapter should swap these `href` placeholders for its
 * live invite links — every other part of the page reads from this array.
 */
export const SOCIALS: Social[] = [
  {
    name: "WhatsApp",
    handle: "Course & general group chats",
    href: "#community",
    icon: "whatsapp",
    accent: "#25d366",
  },
  {
    name: "Discord",
    handle: "Study rooms, build channels & voice",
    href: "#community",
    icon: "discord",
    accent: "#5865f2",
  },
  {
    name: "Telegram",
    handle: "Announcements & resource drops",
    href: "#community",
    icon: "telegram",
    accent: "#2aabee",
  },
  {
    name: "X (Twitter)",
    handle: "@nacosnile",
    href: "#community",
    icon: "x",
    accent: "#0d1733",
  },
  {
    name: "Instagram",
    handle: "@nacosnile",
    href: "#community",
    icon: "instagram",
    accent: "#e1306c",
  },
  {
    name: "LinkedIn",
    handle: "NACOS Nile Chapter",
    href: "#community",
    icon: "linkedin",
    accent: "#0a66c2",
  },
];

export const CONTACT = {
  chapter: "NACOS Nile University of Nigeria Chapter",
  address: "Nile University of Nigeria, Plot 681, Cadastral Zone C-OO, Research & Institution Area, Jabi, Abuja, FCT",
  email: "nacos@nileuniversity.edu.ng",
  university: "https://www.nileuniversity.edu.ng/",
  github: "https://github.com/NACOS-NILE",
} as const;
