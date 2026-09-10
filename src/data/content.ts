export type Exco = {
  slug: string;
  name: string;
  role: string;
  shortRole: string;
  bio: string;
  /** Lead offices render as larger 4:5 portraits; the rest as squares. */
  lead?: true;
};

/** Executive Council — names, offices and taglines exactly as supplied in the brief. */
export const EXCOS: Exco[] = [
  {
    slug: "president",
    lead: true,
    name: "Zikora Fortune Nwafor",
    role: "President",
    shortRole: "President",
    bio: "Passionate about building active student communities.",
  },
  {
    slug: "vp",
    lead: true,
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    shortRole: "Vice President",
    bio: "Advocating for student welfare and academic excellence.",
  },
  {
    slug: "sg",
    lead: true,
    name: "Sheila Jato",
    role: "Secretary General",
    shortRole: "Secretary General",
    bio: "Keeping the engines running smoothly.",
  },
  {
    slug: "fc",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    shortRole: "Financial Secretary",
    bio: "Making the important financial decisions.",
  },
  {
    slug: "pro",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    shortRole: "Public Relations",
    bio: "Applying creativity to communication.",
  },
  {
    slug: "dtd",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    shortRole: "Training & Development",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
  },
  {
    slug: "provost",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    shortRole: "Provost",
    bio: "Managing the day-to-day operations of NACOS Nile.",
  },
  {
    slug: "socials",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    shortRole: "Socials",
    bio: "Prioritizing social activities and events.",
  },
  {
    slug: "welfare",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    shortRole: "Welfare",
    bio: "Your well-being is my priority.",
  },
];

export type Department = {
  code: string;
  name: string;
  blurb: string;
};

export const DEPARTMENTS: Department[] = [
  {
    code: "CSC",
    name: "Computer Science",
    blurb:
      "Algorithms, computation and the theory that underpins every system we build.",
  },
  {
    code: "SEN",
    name: "Software Engineering",
    blurb:
      "Designing, shipping and maintaining software that real people depend on.",
  },
  {
    code: "CYB",
    name: "Cyber Security",
    blurb:
      "Defending systems, networks and data against a threat landscape that never sleeps.",
  },
  {
    code: "IFT",
    name: "Information Technology",
    blurb:
      "The infrastructure, networks and operations that keep organisations running.",
  },
  {
    code: "ISY",
    name: "Information Systems",
    blurb:
      "Where business strategy meets technology, process and people.",
  },
  {
    code: "DTS",
    name: "Data Science",
    blurb:
      "Turning raw data into evidence, models and decisions that hold up.",
  },
];

export type Initiative = {
  index: string;
  title: string;
  cadence: string;
  blurb: string;
};

export const INITIATIVES: Initiative[] = [
  {
    index: "01",
    title: "Tech Bootcamps & Coding Workshops",
    cadence: "Every semester",
    blurb:
      "Hands-on sessions that take members from first commit to shipped project — web, mobile, data and security tracks led by our Training & Development office.",
  },
  {
    index: "02",
    title: "Annual Hackathon & Tech Week",
    cadence: "Once a year",
    blurb:
      "Our flagship event. Days of building, talks, demos and competition that bring the whole computing faculty together around one deadline.",
  },
  {
    index: "03",
    title: "Industry Mentorship & Career Talks",
    cadence: "Monthly",
    blurb:
      "Practitioners from across Nigerian tech sit down with members to talk portfolios, internships, interviews and the path from campus to career.",
  },
  {
    index: "04",
    title: "Academic Tutorials & Study Groups",
    cadence: "Weekly",
    blurb:
      "Peer-led tutorials across core courses, plus study groups that make sure nobody in the chapter faces a hard semester alone.",
  },
];

/* ------------------------------------------------------------------
   COMMUNITY CHANNELS

   The brief asks for links to Discord, WhatsApp, Telegram, X, Instagram
   and LinkedIn, but no chapter URLs are supplied anywhere in the starter
   repository. These are intentionally left as "#" placeholders rather
   than invented, so that no link points somewhere unintended.

   >>> Replace each `href` below with the chapter's real invite/profile
   >>> URL before submitting. Nothing else needs to change.
------------------------------------------------------------------- */
export type Channel = {
  /** Key into PLATFORM_LOGOS — must match a logo export. */
  id: "whatsapp" | "discord" | "telegram" | "instagram" | "x" | "linkedin";
  name: string;
  handle: string;
  href: string;
  blurb: string;
};

export const CHANNELS: Channel[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    handle: "Chapter group",
    href: "#",
    blurb: "Day-to-day announcements, class updates and quick questions.",
  },
  {
    id: "discord",
    name: "Discord",
    handle: "NACOS Nile server",
    href: "#",
    blurb: "Study voice rooms, project channels and hackathon coordination.",
  },
  {
    id: "telegram",
    name: "Telegram",
    handle: "Broadcast channel",
    href: "#",
    blurb: "Resources, past questions and event reminders in one feed.",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@nacosnile",
    href: "#",
    blurb: "Event photography, exco features and campus moments.",
  },
  {
    id: "x",
    name: "X",
    handle: "@nacosnile",
    href: "#",
    blurb: "Short-form updates and what the chapter is paying attention to.",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "NACOS Nile",
    href: "#",
    blurb: "Alumni network, internships and professional opportunities.",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Events", href: "#events" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------
   CHAPTER DETAILS

   The address is the one given in the brief. The email and the creator
   credit are placeholders — no real values are supplied anywhere in the
   starter repository, and inventing an address that might route mail to
   a real inbox would be worse than leaving it obviously blank.

   >>> Fill in `email` and `builtBy` before opening your pull request.
------------------------------------------------------------------- */
export const SITE = {
  name: "NACOS Nile",
  longName:
    "Nigeria Association of Computing Students — Nile University of Nigeria Chapter",
  addressLines: ["Nile University of Nigeria", "Abuja, FCT, Nigeria"],
  email: "", // e.g. "nacos@nileuniversity.edu.ng"
  builtBy: "", // e.g. "Ada Obi & Musa Bello"
};
