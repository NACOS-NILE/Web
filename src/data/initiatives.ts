export interface Initiative {
  id: string;
  title: string;
  category: "Hackathon" | "Bootcamp" | "Mentorship" | "Workshop" | "Academic";
  status: "Upcoming" | "Active" | "Annual Flagship" | "Weekly";
  date: string;
  description: string;
  highlights: string[];
  iconName: string;
  actionText: string;
  actionLink: string;
}

export const INITIATIVES: Initiative[] = [
  {
    id: "tech-week",
    title: "Nile Tech Week & Hackathon",
    category: "Hackathon",
    status: "Annual Flagship",
    date: "Semester 2 Flagship",
    description: "Our premier annual gathering uniting 1,000+ Nile students for 72 hours of high-stakes hacking, keynote sessions from tech executives, and product exhibitions.",
    highlights: ["₦1,000,000+ in Total Prize Pools", "Direct VC & Angel Pitching", "Industry Recruiter Fast-track", "Hardware & AI Demo Showcases"],
    iconName: "Trophy",
    actionText: "View Hackathon Guide",
    actionLink: "#community"
  },
  {
    id: "dev-bootcamps",
    title: "Hands-on Code Labs & Bootcamps",
    category: "Bootcamp",
    status: "Active",
    date: "Bi-Weekly Cohorts",
    description: "Intensive, mentor-guided coding sessions led by DTD Ivoke Kamsi and experienced peer leaders, taking students from fundamentals to production deployments.",
    highlights: ["Frontend (Next.js & React)", "Backend & APIs (Node/Go/Python)", "Mobile App Dev (Flutter/React Native)", "DevOps & Cloud Fundamentals"],
    iconName: "Code2",
    actionText: "Register for Next Cohort",
    actionLink: "#community"
  },
  {
    id: "career-mentorship",
    title: "Industry Mentorship & Tech Talks",
    category: "Mentorship",
    status: "Upcoming",
    date: "Monthly Sessions",
    description: "Direct access to alumni and senior software leaders at global tech giants (Google, Microsoft, Paystack, Moniepoint) providing 1-on-1 resume reviews and career coaching.",
    highlights: ["Mock Technical & Behavioral Interviews", "Portfolio & GitHub Audits", "Internship Placement Pathways", "AMA Speaker Panels"],
    iconName: "Users",
    actionText: "Book a Mentor",
    actionLink: "#community"
  },
  {
    id: "peer-tutorials",
    title: "Departmental Tutorial Circles",
    category: "Academic",
    status: "Weekly",
    date: "Every Weekend",
    description: "Collaborative study circles breaking down complex university coursework (CSC, SEN, CYB, IFT, IFS, DAT) to ensure top GPA outcomes across all levels.",
    highlights: ["Past Questions Deep Dives", "Algorithm & Math Problem Solving", "Lab Practical Assistance", "Exam Strategy Blueprints"],
    iconName: "GraduationCap",
    actionText: "Join Study Circles",
    actionLink: "#community"
  }
];

export interface CommunityChannel {
  name: string;
  platform: string;
  memberCount: string;
  description: string;
  link: string;
  color: string;
  icon: string;
  badge: string;
}

export const COMMUNITY_CHANNELS: CommunityChannel[] = [
  {
    name: "Discord Server",
    platform: "Discord",
    memberCount: "1,400+ Members",
    description: "Real-time coding voice lounges, homework channels, bot experiments, and gaming hangouts.",
    link: "https://discord.gg/nacos-nile",
    color: "from-indigo-600 to-indigo-800",
    icon: "Discord",
    badge: "Most Active for Code"
  },
  {
    name: "WhatsApp Community",
    platform: "WhatsApp",
    memberCount: "2,000+ Students",
    description: "Official announcement broadcasts, level-specific class updates, and instant emergency alerts.",
    link: "https://chat.whatsapp.com/invite/nacos-nile",
    color: "from-emerald-600 to-teal-800",
    icon: "WhatsApp",
    badge: "Official Broadcasts"
  },
  {
    name: "GitHub Organization",
    platform: "GitHub",
    memberCount: "80+ Repositories",
    description: "Open source contributions, starter templates, hackathon submissions, and Nile student projects.",
    link: "https://github.com/NACOS-NILE",
    color: "from-neutral-700 to-neutral-900",
    icon: "Github",
    badge: "Open Source"
  },
  {
    name: "Telegram Hub",
    platform: "Telegram",
    memberCount: "950+ Members",
    description: "Course materials repository, large PDF sharing, and developer discussions.",
    link: "https://t.me/nacos_nile",
    color: "from-sky-500 to-blue-700",
    icon: "Telegram",
    badge: "Study Resources"
  },
  {
    name: "Twitter / X",
    platform: "X / Twitter",
    memberCount: "@NACOSNile",
    description: "Live event coverage, student highlights, memes, tech news, and executive updates.",
    link: "https://x.com/NACOSNile",
    color: "from-zinc-800 to-black",
    icon: "Twitter",
    badge: "Social Media"
  },
  {
    name: "LinkedIn Page",
    platform: "LinkedIn",
    memberCount: "1,200+ Followers",
    description: "Professional networking, partnership announcements, internship spotlights, and alumni success.",
    link: "https://www.linkedin.com/company/nacos-nile",
    color: "from-blue-700 to-blue-900",
    icon: "Linkedin",
    badge: "Professional"
  }
];
