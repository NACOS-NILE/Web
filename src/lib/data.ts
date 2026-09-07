export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#footer" },
] as const;

export type Discipline = {
  name: string;
  description: string;
  icon: "code" | "layers" | "shield" | "cpu" | "network" | "chart";
};

export const DISCIPLINES: Discipline[] = [
  {
    name: "Computer Science",
    description: "Algorithms, systems, and the theory that powers modern software.",
    icon: "code",
  },
  {
    name: "Software Engineering",
    description: "Designing and building reliable, real-world applications.",
    icon: "layers",
  },
  {
    name: "Cyber Security",
    description: "Defending systems, networks, and data from evolving threats.",
    icon: "shield",
  },
  {
    name: "Information Technology",
    description: "Infrastructure, support, and technology that keeps things running.",
    icon: "cpu",
  },
  {
    name: "Information Systems",
    description: "Bridging technology and business to drive better decisions.",
    icon: "network",
  },
  {
    name: "Data Science",
    description: "Extracting insight and value from data at scale.",
    icon: "chart",
  },
];

export type Program = {
  index: string;
  title: string;
  description: string;
  icon: "terminal" | "trophy" | "users" | "book";
};

export const PROGRAMS: Program[] = [
  {
    index: "01",
    title: "Tech Bootcamps & Coding Workshops",
    description:
      "Hands-on sessions designed to build practical, in-demand computing skills beyond the classroom.",
    icon: "terminal",
  },
  {
    index: "02",
    title: "Annual Hackathon / Tech Week",
    description:
      "A week of building, competing, and shipping — where teams turn ideas into working projects.",
    icon: "trophy",
  },
  {
    index: "03",
    title: "Industry Mentorship & Career Talks",
    description:
      "Direct access to professionals and alumni sharing real industry perspective and guidance.",
    icon: "users",
  },
  {
    index: "04",
    title: "Academic Tutorials & Study Groups",
    description:
      "Peer-led learning that supports coursework and strengthens academic performance together.",
    icon: "book",
  },
];

export type EventCategory = "Workshop" | "Hackathon" | "Social" | "Academic" | "Career";

export type SampleEvent = {
  title: string;
  category: EventCategory;
  description: string;
};

/**
 * Illustrative schedule only. No real dates are implied — final events,
 * dates, and registration details are announced via NACOS Nile's community channels.
 */
export const SAMPLE_EVENTS: SampleEvent[] = [
  {
    title: "Intro to Web Development Bootcamp",
    category: "Workshop",
    description: "A beginner-friendly, hands-on introduction to building for the web.",
  },
  {
    title: "NACOS Nile Hackathon / Tech Week",
    category: "Hackathon",
    description: "Teams build and pitch projects over a high-energy week of collaboration.",
  },
  {
    title: "Industry Career Talk Series",
    category: "Career",
    description: "Conversations with professionals about breaking into the tech industry.",
  },
  {
    title: "Exam Season Study Group",
    category: "Academic",
    description: "Peer-led revision sessions covering core computing courses.",
  },
  {
    title: "NACOS Nile Social Mixer",
    category: "Social",
    description: "A relaxed evening for members across all computing disciplines to connect.",
  },
  {
    title: "Cyber Security Clinic",
    category: "Workshop",
    description: "A practical look at securing systems, from fundamentals to live demos.",
  },
];

export type Exco = {
  name: string;
  role: string;
  tagline: string;
  photo: string;
  featured?: boolean;
};

export const EXCOS: Exco[] = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    tagline: "Passionate about building active student communities.",
    photo: "/excos-pics/president.jpg",
    featured: true,
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    tagline: "Advocating for student welfare and academic excellence.",
    photo: "/excos-pics/vp.jpg",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    tagline: "Keeping the engines running smoothly.",
    photo: "/excos-pics/sg.jpg",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    tagline: "Making the important financial decisions.",
    photo: "/excos-pics/fc.jpg",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    tagline: "Applying creativity to communication.",
    photo: "/excos-pics/pro.jpg",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    tagline: "Driving technical growth and leading coding workshops for Nile computing students.",
    photo: "/excos-pics/dtd.jpg",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    tagline: "Managing the day-to-day operations of NACOS Nile.",
    photo: "/excos-pics/provost.jpg",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    tagline: "Prioritizing social activities and events.",
    photo: "/excos-pics/socials.jpg",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    tagline: "Your well-being is my priority.",
    photo: "/excos-pics/welfare.jpg",
  },
];

export type SocialLink = {
  name: string;
  icon: "discord" | "whatsapp" | "telegram" | "x" | "instagram" | "linkedin";
  href: string;
};

/**
 * No official social URLs were supplied. Hrefs are left as "#" placeholders
 * so the UI structure is ready for real links to be dropped in later.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Discord", icon: "discord", href: "#" },
  { name: "WhatsApp", icon: "whatsapp", href: "#" },
  { name: "Telegram", icon: "telegram", href: "#" },
  { name: "X / Twitter", icon: "x", href: "#" },
  { name: "Instagram", icon: "instagram", href: "#" },
  { name: "LinkedIn", icon: "linkedin", href: "#" },
];
