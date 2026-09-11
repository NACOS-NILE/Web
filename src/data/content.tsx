/*
  SITE CONTENT
  All the text, people, prices and links used on the page live here, so
  content can be updated without touching any component code.
*/

import type { ReactNode } from "react";
import { naira } from "@/lib/utils";

export const disciplines = [
  {
    number: "01",
    name: "Computer Science",
    short: "Algorithms, programming and the foundations of computing.",
    description:
      "The foundation of computing, from algorithms and programming to artificial intelligence and systems.",
    image: "/images/disciplines/computer-science.jpg",
    icon: "code",
    tint: "linear-gradient(160deg, rgba(39,65,147,0.55), rgba(13,23,51,0.15))",
  },
  {
    number: "02",
    name: "Software Engineering",
    short: "Designing and building software that solves real problems.",
    description:
      "Designing, building and maintaining software that solves real problems and serves real people.",
    image: "/images/disciplines/software-engineering.jpg",
    icon: "layers",
    tint: "linear-gradient(160deg, rgba(59,130,246,0.5), rgba(13,23,51,0.15))",
  },
  {
    number: "03",
    name: "Cyber Security",
    short: "Protecting systems, networks, data and digital infrastructure.",
    description:
      "Protecting systems, networks, data and digital infrastructure from evolving cyber threats.",
    image: "/images/disciplines/cyber-security.jpg",
    icon: "shield",
    tint: "linear-gradient(160deg, rgba(96,165,250,0.55), rgba(13,23,51,0.15))",
  },
  {
    number: "04",
    name: "Information Technology",
    short: "Keeping organisations connected through technology infrastructure.",
    description:
      "Building and managing the technology infrastructure that keeps organisations connected.",
    image: "/images/disciplines/information-technology.jpg",
    icon: "monitor",
    tint: "linear-gradient(160deg, rgba(13,23,51,0.6), rgba(39,65,147,0.15))",
  },
  {
    number: "05",
    name: "Information Systems",
    short: "Connecting technology, people and business processes.",
    description:
      "Connecting technology, people and business processes to create smarter organisations.",
    image: "/images/disciplines/information-systems.jpg",
    icon: "network",
    tint: "linear-gradient(160deg, rgba(39,65,147,0.45), rgba(96,165,250,0.15))",
  },
  {
    number: "06",
    name: "Data Science",
    short: "Turning data into useful insights through analytics and ML.",
    description:
      "Turning data into insights through statistics, analytics, machine learning and visualisation.",
    image: "/images/disciplines/data-science.jpg",
    icon: "chart",
    tint: "linear-gradient(160deg, rgba(59,130,246,0.55), rgba(13,23,51,0.2))",
  },
];

export const programs = [
  {
    number: "01",
    title: "Coding Workshops",
    description:
      "Practical sessions designed to help students build confidence beyond the classroom.",
  },
  {
    number: "02",
    title: "Hackathons & Tech Week",
    description:
      "Spaces where students turn ideas into products, compete, collaborate and experiment.",
  },
  {
    number: "03",
    title: "Industry & Career Talks",
    description:
      "Conversations with professionals that connect classroom learning with the technology industry.",
  },
  {
    number: "04",
    title: "Tutorials & Study Groups",
    description:
      "Peer learning and academic support across the computing disciplines.",
  },
];

export const aboutSlides = [
  {
    title: "The NACOS Nile chapter",
    description:
      "NACOS Nile is the student community for computing, technology and innovation at Nile University of Nigeria.",
    image: "/images/about/chapter.jpg",
  },
  {
    title: "A place to learn together",
    description:
      "Students across every computing discipline share knowledge, support one another and grow with their peers.",
    image: "/images/about/learning.jpg",
  },
  {
    title: "Beyond the classroom",
    description:
      "Through workshops, study groups and practical sessions, NACOS turns classroom ideas into useful skills.",
    image: "/images/about/workshop.jpg",
  },
  {
    title: "A community that connects",
    description:
      "Meet collaborators, mentors and friends who make the journey through computing less solitary.",
    image: "/images/about/community.jpg",
  },
  {
    title: "Room to become more",
    description:
      "NACOS creates opportunities to lead, experiment, build confidence and shape the future of technology.",
    image: "/images/about/future.jpg",
  },
];

export const excos = {
  president: {
    name: "Zikora Fortune Nwafor",
    role: "President",
    image: "/excos-pics/president.jpg",
    description: "Passionate about building active student communities.",
  },
  vp: {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    image: "/excos-pics/vp.jpg",
    description: "Advocating for student welfare and academic excellence.",
  },
  sg: {
    name: "Sheila Jato",
    role: "Secretary General",
    image: "/excos-pics/sg.jpg",
    description: "Keeping the engines running smoothly.",
  },
  fs: {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    image: "/excos-pics/fc.jpg",
    description: "Making the important financial decisions.",
  },
  pro: {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    image: "/excos-pics/pro.jpg",
    description: "Applying creativity to communication.",
  },
  dtd: {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    image: "/excos-pics/dtd.jpg",
    description:
      "Driving technical growth and leading coding workshops for Nile computing students.",
  },
  provost: {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    image: "/excos-pics/provost.jpg",
    description: "Managing the day-to-day operations of NACOS Nile.",
  },
  socials: {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    image: "/excos-pics/socials.jpg",
    description: "Prioritizing social activities and events.",
  },
  welfare: {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    image: "/excos-pics/welfare.jpg",
    description: "Your well-being is my priority.",
  },
};

export type Exco = (typeof excos)[keyof typeof excos];

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "disciplines", label: "Disciplines" },
  { id: "programs", label: "Programs" },
  { id: "gallery", label: "Gallery" },
  { id: "excos", label: "Excos" },
  { id: "membership", label: "Membership" },
  { id: "community", label: "Community" },
];

/*
  GALLERY
  Photos from the chapter dinner. Each photo has a small version for the
  grid (src) and a larger one that opens when tapped (full). "position"
  controls which part of the photo stays visible when the grid crops it.
*/
export const GALLERY = {
  event: "A Colours Show",
  photographer: "DH Media",
};

export const galleryPhotos = [
  {
    id: "hall",
    src: "/images/gallery/hall.webp",
    full: "/images/gallery/hall-full.webp",
    width: 1800,
    height: 1200,
    position: "50% 55%",
    caption: "The hall on the night",
    alt: "Guests seated at decorated round tables facing the stage, with draped fabric overhead",
  },
  {
    id: "red-carpet",
    src: "/images/gallery/red-carpet.webp",
    full: "/images/gallery/red-carpet-full.webp",
    width: 1200,
    height: 1800,
    position: "50% 30%",
    caption: "Red carpet arrivals",
    alt: "A guest in a red lace gown posing on the red carpet in front of the event backdrop",
  },
  {
    id: "couple",
    src: "/images/gallery/couple.webp",
    full: "/images/gallery/couple-full.webp",
    width: 1200,
    height: 1800,
    position: "50% 30%",
    caption: "Dressed for the occasion",
    alt: "Two guests in black formal wear posing in front of the NACOS Nile backdrop",
  },
  {
    id: "stage",
    src: "/images/gallery/stage.webp",
    full: "/images/gallery/stage-full.webp",
    width: 1800,
    height: 1200,
    position: "50% 60%",
    caption: "On stage",
    alt: "A row of guests seated on stage while a host speaks into a microphone",
  },
  {
    id: "smiles",
    src: "/images/gallery/smiles.webp",
    full: "/images/gallery/smiles-full.webp",
    width: 1200,
    height: 1800,
    position: "50% 40%",
    caption: "All smiles",
    alt: "A guest in a black jacket smiling and dancing at his table",
  },
  {
    id: "dance",
    src: "/images/gallery/dance.webp",
    full: "/images/gallery/dance-full.webp",
    width: 1200,
    height: 1800,
    position: "50% 45%",
    caption: "Dancing the night away",
    alt: "A guest in a green sequinned dress dancing under green lights",
  },
  {
    id: "awards",
    src: "/images/gallery/awards.webp",
    full: "/images/gallery/awards-full.webp",
    width: 1800,
    height: 1200,
    position: "50% 35%",
    caption: "Awards presentation",
    alt: "An award plaque being presented on stage",
  },
  {
    id: "friends",
    src: "/images/gallery/friends.webp",
    full: "/images/gallery/friends-full.webp",
    width: 1800,
    height: 1200,
    position: "50% 35%",
    caption: "Capturing the moment",
    alt: "Three friends in red outfits taking a selfie at the dinner",
  },
];

/*
  MEMBERSHIP
  Update these numbers when dues or the shirt price change. Every amount
  in the Membership section is worked out from them automatically.
*/
export const MEMBERSHIP = {
  session: "2026/2027 session",
  duesPerSemester: 10000,
  shirtDeposit: 15000,
  shirtBalance: 5000,
};

export const shirtTotal = MEMBERSHIP.shirtDeposit + MEMBERSHIP.shirtBalance;

export const membershipStages = [
  {
    title: "First semester",
    amount: MEMBERSHIP.duesPerSemester + MEMBERSHIP.shirtDeposit,
    detail: `${naira(MEMBERSHIP.duesPerSemester)} dues + ${naira(
      MEMBERSHIP.shirtDeposit
    )} shirt deposit`,
  },
  {
    title: "Second semester",
    amount: MEMBERSHIP.duesPerSemester + MEMBERSHIP.shirtBalance,
    detail: `${naira(MEMBERSHIP.duesPerSemester)} dues + ${naira(
      MEMBERSHIP.shirtBalance
    )} shirt balance`,
  },
  {
    title: "Every semester after",
    amount: MEMBERSHIP.duesPerSemester,
    detail: "Dues only. Your shirt is fully paid.",
  },
];

export const duesSupport = [
  { icon: "calendar", label: "Events" },
  { icon: "heart", label: "Welfare" },
  { icon: "book", label: "Student programmes" },
  { icon: "users", label: "Association activities" },
];

export const membershipFaqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Who can join NACOS Nile?",
    answer:
      "Students in any of the six computing disciplines at Nile University of Nigeria.",
  },
  {
    question: "Do I pay for the shirt every semester?",
    answer: `No. The shirt is a one-time ${naira(
      shirtTotal
    )} payment for your whole time at Nile, split across your first two semesters. After that, you only pay dues.`,
  },
  {
    question: "Why does NACOS have an official shirt?",
    answer:
      "It builds a unified NACOS identity. Members wear it at major NACOS events and when representing the chapter.",
  },
  {
    question: "How do I pay?",
    answer: (
      <>
        Payment details will be shared through official NACOS channels.{" "}
        <a href="#community">Join the community</a> so you do not miss them.
      </>
    ),
  },
  {
    question: "When will I get my shirt?",
    answer:
      "Details on shirt collection will be announced through official NACOS channels.",
  },
];

/*
  COMMUNITY LINKS
  Replace each "#" with the real URL once the chapter shares it.
  - Social links left as "#" show a "Coming soon" label and do nothing.
  - While COMMUNITY_JOIN_URL is "#", the Join button goes to Membership.
  Real URLs open in a new tab automatically.
*/
export const COMMUNITY_JOIN_URL = "#";

export const SOCIAL_LINKS = [
  { type: "discord", label: "Discord", href: "#" },
  { type: "whatsapp", label: "WhatsApp", href: "#" },
  { type: "telegram", label: "Telegram", href: "#" },
  { type: "instagram", label: "Instagram", href: "#" },
  { type: "linkedin", label: "LinkedIn", href: "#" },
  { type: "x", label: "X", href: "#" },
];

export const SLIDE_DURATION = 4500;

/*
  STUDENT RESOURCES
  Official links shown in the footer. They open in a new tab. Add the
  student portal or e-learning links here once you have the correct URLs.
*/
export const STUDENT_RESOURCES = [
  { label: "Nile University website", href: "https://nileuniversity.edu.ng" },
  { label: "Nile University library", href: "https://nileuniversity.edu.ng/nile-library" },
];

/*
  CREDITS
  Shown in the footer. Change the name and link to whatever you want judges
  and visitors to see.
*/
export const CREDITS = {
  name: "Ini120",
  url: "https://github.com/Ini120",
};
