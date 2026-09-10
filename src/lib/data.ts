import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  Code,
  ShieldCheck,
  Network,
  DatabaseZap,
  BrainCircuit,
} from "lucide-react";

/* ============================================================
   Data Contracts
   ============================================================ */

/** Executive Council member profile */
export interface ExcoMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

/** Academic computing discipline */
export interface Discipline {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/* ============================================================
   Executive Council — 2025/2026 Session
   ============================================================ */

export const EXCO_MEMBERS: readonly ExcoMember[] = [
  {
    id: "president",
    name: "Zikora Fortune Nwafor",
    role: "President",
    bio: "Passionate about building active student communities.",
    image: "/excos-pics/president.jpg",
  },
  {
    id: "vp",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    bio: "Advocating for student welfare and academic excellence.",
    image: "/excos-pics/vp.jpg",
  },
  {
    id: "sg",
    name: "Sheila Jato",
    role: "Secretary General",
    bio: "Keeping the engines running smoothly.",
    image: "/excos-pics/sg.jpg",
  },
  {
    id: "fc",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    bio: "Making the important financial decisions.",
    image: "/excos-pics/fc.jpg",
  },
  {
    id: "pro",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    bio: "Applying creativity to communication.",
    image: "/excos-pics/pro.jpg",
  },
  {
    id: "dtd",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
    image: "/excos-pics/dtd.jpg",
  },
  {
    id: "provost",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    bio: "Managing the day-to-day operations of NACOS Nile.",
    image: "/excos-pics/provost.jpg",
  },
  {
    id: "socials",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    bio: "Prioritizing social activities and events.",
    image: "/excos-pics/socials.jpg",
  },
  {
    id: "welfare",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    bio: "Your well-being is my priority.",
    image: "/excos-pics/welfare.jpg",
  },
] as const;

/* ============================================================
   Core Computing Disciplines
   ============================================================ */

export const DISCIPLINES: readonly Discipline[] = [
  {
    id: "cs",
    title: "Computer Science",
    description:
      "The foundational study of computation, algorithms, data structures, and the theoretical underpinnings of modern technology.",
    icon: Cpu,
  },
  {
    id: "se",
    title: "Software Engineering",
    description:
      "Designing, building, and maintaining reliable software systems using engineering principles and modern development practices.",
    icon: Code,
  },
  {
    id: "cyber",
    title: "Cyber Security",
    description:
      "Protecting digital systems, networks, and data from threats through security analysis, ethical hacking, and risk management.",
    icon: ShieldCheck,
  },
  {
    id: "it",
    title: "Information Technology",
    description:
      "Managing and deploying technology infrastructure to solve real-world organizational and business challenges.",
    icon: Network,
  },
  {
    id: "is",
    title: "Information Systems",
    description:
      "Bridging business and technology by designing systems that manage, process, and deliver information effectively.",
    icon: DatabaseZap,
  },
  {
    id: "ds",
    title: "Data Science",
    description:
      "Extracting insights from complex datasets using statistics, machine learning, and advanced analytical techniques.",
    icon: BrainCircuit,
  },
] as const;
