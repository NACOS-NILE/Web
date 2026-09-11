export interface ExcoMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  image: string;
  featured?: boolean;
}

export const excoMembers: ExcoMember[] = [
  {
    id: "president",
    name: "Zikora Fortune Nwafor",
    role: "President",
    tagline: "Passionate about building active student communities.",
    image: "/excos-pics/president.jpg",
    featured: true,
  },
  {
    id: "vp",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    tagline: "Advocating for student welfare and academic excellence.",
    image: "/excos-pics/vp.jpg",
    featured: true,
  },
  {
    id: "sg",
    name: "Sheila Jato",
    role: "Secretary General",
    tagline: "Keeping the engines running smoothly.",
    image: "/excos-pics/sg.jpg",
  },
  {
    id: "fc",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    tagline: "Making the important financial decisions.",
    image: "/excos-pics/fc.jpg",
  },
  {
    id: "pro",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    tagline: "Applying creativity to communication.",
    image: "/excos-pics/pro.jpg",
  },
  {
    id: "dtd",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    tagline:
      "Driving technical growth and leading coding workshops for Nile computing students.",
    image: "/excos-pics/dtd.jpg",
  },
  {
    id: "provost",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    tagline: "Managing the day-to-day operations of NACOS Nile.",
    image: "/excos-pics/provost.jpg",
  },
  {
    id: "socials",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    tagline: "Prioritizing social activities and events.",
    image: "/excos-pics/socials.jpg",
  },
  {
    id: "welfare",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    tagline: "Your well-being is my priority.",
    image: "/excos-pics/welfare.jpg",
  },
];

export interface Discipline {
  index: string;
  name: string;
  description: string;
  img: string;
}

export const disciplines: Discipline[] = [
  {
    index: "01",
    name: "Computer Science",
    img: "/Images/Disciplines/Computer-Science.svg",
    description:
      "The theory and design of computation — algorithms, systems, and the logic that underlies modern software.",
  },
  {
    index: "02",
    name: "Software Engineering",
    img: "/Images/Disciplines/Software-engineering.svg",
    description:
      "Building reliable, scalable software through structured design, engineering discipline, and craftsmanship.",
  },
  {
    index: "03",
    name: "Cyber Security",
    img: "/Images/Disciplines/Cyber-Security.svg",
    description:
      "Protecting systems, networks, and data from threats through analysis, defense, and applied security research.",
  },
  {
    index: "04",
    name: "Information Technology",
    img: "/Images/Disciplines/Information-technology.svg",
    description:
      "Applying technology to solve real infrastructure and organisational problems across every industry.",
  },
  {
    index: "05",
    name: "Information Systems",
    img: "/Images/Disciplines/Information-systems.svg",
    description:
      "Bridging people, processes, and technology to help organisations make better decisions with data.",
  },
  {
    index: "06",
    name: "Data Science",
    img: "/Images/Disciplines/Data-science.svg",
    description:
      "Extracting insight from data through statistics, machine learning, and rigorous analytical thinking.",
  },
];

export interface Program {
  title: string;
  description: string;
  tag: string;
  featured?: boolean;
  image?: string;
}

export const programs: Program[] = [
  {
    title: "Annual Hackathon",
    description:
      "A weekend-long build sprint where teams of Nile computing students ship working products from a single idea, judged by industry mentors.",
    tag: "Flagship",
    featured: true,
    image: "/Images/Events/hackathon.png",
  },
  {
    title: "Tech Bootcamps",
    description:
      "Structured, multi-week tracks that take students from fundamentals to job-ready skill in web, data, and security.",
    tag: "Skill-building",
  },
  {
    title: "Coding Workshops",
    description:
      "Hands-on weekly sessions led by peers and alumni, focused on practical, portfolio-ready projects.",
    tag: "Weekly",
  },
  {
    title: "Tech Week",
    description:
      "A week of talks, exhibitions, and competitions that brings the entire Nile computing community together.",
    tag: "Annual",
    image: "/Images/Events/100 level orientation.jpg",
  },
  {
    title: "Industry Mentorship",
    description:
      "Pairing students with professionals across software, data, and security for guidance beyond the classroom.",
    tag: "Ongoing",
  },
  {
    title: "Career Talks",
    description:
      "Conversations with engineers, founders, and recruiters on breaking into the tech industry from Nigeria.",
    tag: "Monthly",
    image: "/Images/Events/csw speakers.jpeg"
  },
  {
    title: "Academic Tutorials",
    description:
      "Peer-led revision sessions that reinforce core computing courses ahead of exams and assessments.",
    tag: "Per semester",
    image: "/Images/Events/Collective Lab 2.jpg"
  },
  {
    title: "Study Groups",
    description:
      "Small, consistent study circles that turn coursework into a shared effort instead of a solitary one.",
    tag: "Weekly",
    image: "/Images/Events/stem con.jpg"
  },
];

export interface EventItem {
  title: string;
  description: string;
  date: string;
  image?: string;
  featured?: boolean;
}

export const events: EventItem[] = [
  {
    title: "Academic Tutorials",
    description:
      "Peer-led revision ahead of exams and assessments.",
    date: "Per semester",
    image: "/Images/Events/faculty.webp",
  },
  {
    title: "Tech Week",
    description:
      "A week-long showcase of talks, exhibitions, and competitions for the entire Nile computing community.",
    date: "Date to be announced",
    image: "/Images/Events/100 level orientation.webp",
    featured: true,
  },

  {
    title: "Career Talks",
    description:
      "Industry professionals share how they broke into tech.",
    date: "Date to be announced",
    image: "/Images/Events/csw speakers.webp",
  },

  {
    title: "Annual Hackathon",
    description:
      "Teams build and pitch working products in one weekend.",
    date: "Date to be announced",
    image: "/Images/Events/hackathon.webp",
  },

  {
    title: "Coding Workshops",
    description:
      "Recurring hands-on sessions across web, data, and security.",
    date: "Held regularly",
    image: "/Images/Events/Collective Lab 2.webp",
  },

  

  
];

export interface CommunityLink {
  label: string;
  href: string;
}

export const communityLinks: CommunityLink[] = [
  { label: "Discord", href: "#" },
  { label: "WhatsApp", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];
