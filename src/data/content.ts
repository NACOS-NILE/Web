// Names, roles and taglines match the official NACOS-NILE/Web README.
export const disciplines = [
  {
    short: "CS",
    name: "Computer Science",
    description:
      "Understand how computers work. Use that knowledge to solve problems, from a small program to a new idea in computing.",
    focus: "Algorithms · Computing · Problem-solving",
  },
  {
    short: "SE",
    name: "Software Engineering",
    description:
      "Turn an idea into software people can use. Learn to design, build and improve apps as part of a team.",
    focus: "Applications · Design · Teamwork",
  },
  {
    short: "CY",
    name: "Cyber Security",
    description:
      "Help keep people and their information safe. Explore how to protect systems and spot digital threats.",
    focus: "Security · Privacy · Digital safety",
  },
  {
    short: "IT",
    name: "Information Technology",
    description:
      "Keep technology working for the people who need it. Connect devices, manage networks and solve everyday tech problems.",
    focus: "Networks · Support · Infrastructure",
  },
  {
    short: "IS",
    name: "Information Systems",
    description:
      "Connect people, organisations and technology. Find better ways to use information and make everyday work simpler.",
    focus: "People · Organisations · Technology",
  },
  {
    short: "DS",
    name: "Data Science",
    description:
      "Find the story in the data. Explore patterns, ask better questions and use evidence to make decisions.",
    focus: "Data · Patterns · Decisions",
  },
];
export type Executive = {
  name: string;
  role: string;
  photo: string;
  quote: string;
  linkedinUrl?: string;
};
export const executives: Executive[] = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    photo: "president",
    linkedinUrl: "https://www.linkedin.com/in/zikora-nwafor-/",
    quote: "Passionate about building active student communities.",
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    photo: "vp",
    linkedinUrl: "https://www.linkedin.com/in/abdullah-ali-ahmad-8278082a0/",
    quote: "Advocating for student welfare and academic excellence.",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    photo: "sg",
    linkedinUrl: "https://www.linkedin.com/in/sheila-jato-a83991352/",
    quote: "Keeping the engines running smoothly.",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    photo: "fc",
    linkedinUrl: "https://www.linkedin.com/in/amira-ibrahim-jibril-4a7326341/",
    quote: "Making the important financial decisions.",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    photo: "pro",
    linkedinUrl: "https://www.linkedin.com/in/elvis-eshiebor-028422239/",
    quote: "Applying creativity to communication.",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development (DTD)",
    photo: "dtd",
    linkedinUrl: "https://www.linkedin.com/in/kamsi-ivoke/",
    quote:
      "Driving technical growth and leading coding workshops for Nile computing students.",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    photo: "provost",
    linkedinUrl:
      "https://www.linkedin.com/in/zubaida-abdulazeez-king-257a2b31b/",
    quote: "Managing the day-to-day operations of NACOS Nile.",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    photo: "socials",
    quote: "Prioritizing social activities and events.",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    photo: "welfare",
    linkedinUrl: "https://www.linkedin.com/in/danielle-ekunwe-726325335/",
    quote: "Your well-being is my priority.",
  },
];
export const programs = [
  {
    word: "Learn",
    title: "A little practice. A lot of progress.",
    description:
      "Get hands-on in coding workshops and tech bootcamps. Work through the tricky parts with other students in tutorials and study groups.",
    tags: ["Coding workshops", "Tech bootcamps", "Study groups"],
    detail:
      "Bring your questions and what you’re working on. There’s room to start with the basics and keep learning together.",
  },
  {
    word: "Build",
    title: "Give your ideas a first version.",
    description:
      "Put what you learn to work. Team up, try something new and take on a challenge at a hackathon or Tech Week.",
    tags: ["Hackathons", "Tech Week", "Student projects"],
    detail:
      "Find teammates across computing disciplines. Share a problem, test an idea and learn from what you build.",
  },
  {
    word: "Connect",
    title: "Good things start with a conversation.",
    description:
      "Meet other computing students and learn from people working in tech through industry mentorship and career talks.",
    tags: ["Industry mentorship", "Career talks", "Community"],
    detail:
      "Ask the questions a lecture might not cover. Hear about different paths into tech and learn from other people’s experience.",
  },
  {
    word: "Grow",
    title: "Make your time at Nile count.",
    description:
      "Get involved in your student community. Share what you know, support your classmates and find ways to lead.",
    tags: ["Student leadership", "Peer support", "Volunteering"],
    detail:
      "You don’t have to know everything to contribute. Helping another student is a good place to start.",
  },
];

// Published social links from the supplied reference; LinkedIn independently
// checked on 2026-09-06 and confirmed as this exact Nile chapter.
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/",
  },
  { label: "Instagram", href: "https://www.instagram.com/nacosnileuni/" },
  { label: "X / Twitter", href: "https://x.com/NacosNileUni" },
];

export const chapterEmail = "nacosnile@gmail.com";
export const communityEmailHref =
  "mailto:" +
  chapterEmail +
  "?subject=" +
  encodeURIComponent("NACOS Nile WhatsApp Access Request") +
  "&body=" +
  encodeURIComponent(
    "Hello NACOS Nile,\n\nI would like to request access to the WhatsApp community.\n\nFull Name: \nStudent ID: \nWhatsApp Phone Number: \n\nThank you.",
  );
export const payment = {
  semesterDues: 10000,
  shirtTotal: 20000,
  sessionDuesTotal: 20000,
  fullSessionTotal: 40000,
  firstInstalment: 25000,
  secondInstalment: 15000,
  accountNumber: "1310806058",
  bank: "Zenith Bank",
  accountName: "NACOS Chapter, Nile University of Nigeria.",
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfYxaNuaUAkGmRkWtmRzfuAFR9ODrBvIjt_utUwg8dhzbGhJQ/viewform?usp=publish-editor",
};

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  source: string;
};
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/community/life-lead.jpg",
    width: 1600,
    height: 1067,
    alt: "A lively crowd of NACOS Nile computing students participating in a major chapter event",
    caption: "NACOS Nile Student Community Gathering",
    source: "NACOS Nile Community",
  },
  {
    src: "/community/workshop-presenter.jpg",
    width: 1600,
    height: 1067,
    alt: "A speaker presents practical computing insights to students during an interactive workshop",
    caption: "AI & Software Development Workshop",
    source: "NACOS Nile Community",
  },
  {
    src: "/community/achievement.jpg",
    width: 1200,
    height: 1600,
    alt: "A student receives an award recognition at the NACOS Nile Annual Dinner and Awards Night",
    caption: "Excellence & Recognition — NACOS Awards Night",
    source: "NACOS Nile Community",
  },
  {
    src: "/community/social-energy.jpg",
    width: 1600,
    height: 1067,
    alt: "NACOS Nile students sharing joyful moments and celebrating together",
    caption: "Chapter Dinner & Community Celebration",
    source: "NACOS Nile Community",
  },
  {
    src: "/community/stemcon.jpg",
    width: 1600,
    height: 1067,
    alt: "Computing students collaborating during a technology innovation event",
    caption: "Inter-Chapter Collaboration & Innovation Session",
    source: "NACOS Nile Community",
  },
  {
    src: "/community/cybersmart-speakers.jpg",
    width: 1200,
    height: 900,
    alt: "Industry leaders and chapter speakers sharing insights during the CyberSmart initiative",
    caption: "CyberSmart Awareness & Security Session",
    source: "NACOS Nile Community",
  },
  {
    src: "/community/friendship.jpg",
    width: 1600,
    height: 1200,
    alt: "NACOS Nile students bonding and making lifelong friendships on campus",
    caption: "Lifelong Connections Across Computing Disciplines",
    source: "NACOS Nile Community",
  },
];

