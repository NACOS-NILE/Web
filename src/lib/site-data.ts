export const disciplines = [
  "COMPUTER SCIENCE",
  "SOFTWARE ENGINEERING",
  "CYBER SECURITY",
  "INFORMATION TECHNOLOGY",
  "INFORMATION SYSTEMS",
  "DATA SCIENCE",
] as const;

export const benefits = [
  {
    icon: "Map" as const,
    title: "Technical Workshops",
    body: "Build practical skills through hands-on sessions in Python, React, AI, cybersecurity and more.",
  },
  {
    icon: "Code2" as const,
    title: "Active Learning",
    body: "Move beyond lectures through projects, hackathons and challenges that test what you know.",
  },
  {
    icon: "Users" as const,
    title: "Community Support",
    body: "Meet ambitious students, exchange ideas and grow with peers across every computing discipline.",
  },
  {
    icon: "Rocket" as const,
    title: "Career Growth",
    body: "Develop leadership, connect with industry and build the confidence to thrive after university.",
  },
];

export const programs = [
  {
    num: "01",
    title: "Skill-based sessions",
    tags: ["Python", "React", "Ethical Hacking"],
  },
  {
    num: "02",
    title: "Annual Hackathon",
    tags: ["Tech Week", "Projects", "Teamwork"],
  },
  {
    num: "03",
    title: "Industry Mentorship",
    tags: ["Career Talks", "Networking", "Mentorship"],
  },
  {
    num: "04",
    title: "Academic Tutorials",
    tags: ["Study Groups", "Volunteering", "Support"],
  },
] as const;

export const excos = [
  {
    photo: "/excos-pics/president.jpg",
    name: "Zikora Fortune Nwafor",
    role: "President",
    quote: "Passionate about building active student communities.",
  },
  {
    photo: "/excos-pics/vp.jpg",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    quote: "Advocating for student welfare and academic excellence.",
  },
  {
    photo: "/excos-pics/sg.jpg",
    name: "Sheila Jato",
    role: "Secretary General",
    quote: "Keeping the engines running smoothly.",
  },
  {
    photo: "/excos-pics/fc.jpg",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    quote: "Making the important financial decisions.",
  },
  {
    photo: "/excos-pics/pro.jpg",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    quote: "Applying creativity to communication.",
  },
  {
    photo: "/excos-pics/dtd.jpg",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    quote: "Driving technical growth and leading coding workshops for Nile computing students.",
  },
  {
    photo: "/excos-pics/provost.jpg",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    quote: "Managing the day-to-day operations of NACOS Nile.",
  },
  {
    photo: "/excos-pics/socials.jpg",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    quote: "Prioritizing social activities and events.",
  },
  {
    photo: "/excos-pics/welfare.jpg",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    quote: "Your well-being is my priority.",
  },
] as const;

export const communityChannels = [
  { label: "Discord", href: "#", icon: "MessageSquare" as const },
  { label: "WhatsApp", href: "#", icon: "Phone" as const },
  { label: "Telegram", href: "#", icon: "Send" as const },
  { label: "X (Twitter)", href: "https://x.com/NacosNileUni", icon: "Twitter" as const },
  { label: "Instagram", href: "https://www.instagram.com/nacosnileuni", icon: "Instagram" as const },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/",
    icon: "Linkedin" as const,
  },
] as const;

export const navLinks = [
  ["HOME", "#home"],
  ["ABOUT", "#about"],
  ["PROGRAMS", "#programs"],
  ["EXCOS", "#excos"],
  ["COMMUNITY", "#community"],
  ["CONTACT", "#contact"],
] as const;
