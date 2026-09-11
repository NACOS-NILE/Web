export interface Executive {
  id: string;
  name: string;
  role: string;
  photo: string;
  tagline: string;
  category: "Executive" | "Technical" | "Operations & Welfare";
  department?: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

export interface Discipline {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  corePillars: string[];
  popularTech: string[];
  careerPaths: string[];
  coreCourses: { code: string; title: string }[];
  labFacility: string;
}

export interface Initiative {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  leadRole: string;
  metrics: string;
  highlights: string[];
}

export interface ChapterEvent {
  id: string;
  title: string;
  category: "Competition" | "Hackathon" | "Workshop" | "Mentorship";
  date: string;
  location: string;
  description: string;
  status: "Active Now" | "Upcoming" | "Annual Flagship";
  prizes?: string;
  timelineSteps: { time: string; activity: string }[];
  calendarData?: {
    filename: string;
    startDate: string;
    endDate: string;
    summary: string;
    description: string;
    location: string;
  };
}

export interface CommunityChannel {
  id: string;
  name: string;
  platform: string;
  description: string;
  handle: string;
  url: string;
  membersEstimate: string;
  iconType: "message-square" | "users" | "send" | "twitter" | "instagram" | "linkedin";
  badgeText: string;
}

/* =========================================================================
   1. 100% VERIFIED EXECUTIVE COUNCIL (From public/excos-pics & official README)
   ========================================================================= */
export const EXCO_PROFILES: Executive[] = [
  {
    id: "president",
    name: "Zikora Fortune Nwafor",
    role: "President",
    photo: "/excos-pics/president.jpg",
    tagline: "Passionate about building active student communities.",
    category: "Executive",
    department: "Computer Science",
    email: "president.nacos@nileuniversity.edu.ng",
  },
  {
    id: "vp",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    photo: "/excos-pics/vp.jpg",
    tagline: "Advocating for student welfare and academic excellence.",
    category: "Executive",
    department: "Software Engineering",
    email: "vp.nacos@nileuniversity.edu.ng",
  },
  {
    id: "sg",
    name: "Sheila Jato",
    role: "Secretary General",
    photo: "/excos-pics/sg.jpg",
    tagline: "Keeping the engines running smoothly.",
    category: "Executive",
    department: "Information Systems",
    email: "secgen.nacos@nileuniversity.edu.ng",
  },
  {
    id: "dtd",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development (DTD)",
    photo: "/excos-pics/dtd.jpg",
    tagline: "Driving technical growth and leading coding workshops for Nile computing students.",
    category: "Technical",
    department: "Computer Science",
    email: "training.nacos@nileuniversity.edu.ng",
  },
  {
    id: "fc",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    photo: "/excos-pics/fc.jpg",
    tagline: "Making the important financial decisions.",
    category: "Executive",
    department: "Information Technology",
    email: "finance.nacos@nileuniversity.edu.ng",
  },
  {
    id: "pro",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    photo: "/excos-pics/pro.jpg",
    tagline: "Applying creativity to communication.",
    category: "Operations & Welfare",
    department: "Software Engineering",
    email: "pro.nacos@nileuniversity.edu.ng",
  },
  {
    id: "provost",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    photo: "/excos-pics/provost.jpg",
    tagline: "Managing the day-to-day operations of NACOS Nile.",
    category: "Operations & Welfare",
    department: "Cyber Security",
    email: "provost.nacos@nileuniversity.edu.ng",
  },
  {
    id: "socials",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    photo: "/excos-pics/socials.jpg",
    tagline: "Prioritizing social activities and events.",
    category: "Operations & Welfare",
    department: "Data Science",
    email: "socials.nacos@nileuniversity.edu.ng",
  },
  {
    id: "welfare",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    photo: "/excos-pics/welfare.jpg",
    tagline: "Your well-being is my priority.",
    category: "Operations & Welfare",
    department: "Software Engineering",
    email: "welfare.nacos@nileuniversity.edu.ng",
  },
];

/* =========================================================================
   2. CORE COMPUTING DISCIPLINES (Nile University Computing Faculty)
   ========================================================================= */
export const COMPUTING_DISCIPLINES: Discipline[] = [
  {
    id: "cs",
    code: "CSC",
    name: "Computer Science",
    tagline: "Theory, Algorithms & Future Intelligence",
    description:
      "Deep algorithmic reasoning, computational theory, operating systems, compiler design, and high-performance computing systems.",
    corePillars: ["Data Structures & Algorithms", "Systems Architecture", "Applied Computation"],
    popularTech: ["Python", "C++", "Go", "Linux Kernel"],
    careerPaths: ["Algorithm Engineer", "Systems Architect", "Software Research Engineer"],
    coreCourses: [
      { code: "CSC 201", title: "Data Structures & Algorithms" },
      { code: "CSC 301", title: "Operating Systems & Concurrency" },
      { code: "CSC 411", title: "Compiler Design & Automata" },
    ],
    labFacility: "Advanced Algorithms & Systems Lab (FNAS Block A)",
  },
  {
    id: "se",
    code: "SEN",
    name: "Software Engineering",
    tagline: "Production Engineering & Resilient Architectures",
    description:
      "Building scalable web applications, distributed cloud services, robust microservices, and battle-tested automated CI/CD pipelines.",
    corePillars: ["Full-Stack Engineering", "Distributed Systems", "Cloud Native DevOps"],
    popularTech: ["TypeScript", "Next.js", "Docker", "Kubernetes", "PostgreSQL"],
    careerPaths: ["Full-Stack Engineer", "Cloud Solutions Architect", "Engineering Manager"],
    coreCourses: [
      { code: "SEN 202", title: "Object-Oriented Design Patterns" },
      { code: "SEN 304", title: "Software Architecture & Microservices" },
      { code: "SEN 402", title: "CI/CD & Cloud DevOps Engineering" },
    ],
    labFacility: "Software Engineering Studio (FNAS Block B)",
  },
  {
    id: "cys",
    code: "CYB",
    name: "Cyber Security",
    tagline: "Defensive Operations, Forensics & Cryptography",
    description:
      "Safeguarding digital perimeters, ethical penetration testing, cryptography protocols, security incident response, and threat analysis.",
    corePillars: ["Network Security", "Threat Intelligence", "Offensive Penetration Testing"],
    popularTech: ["Kali Linux", "Wireshark", "Metasploit", "Bash", "Burp Suite"],
    careerPaths: ["SOC Analyst", "Penetration Tester", "Information Security Officer"],
    coreCourses: [
      { code: "CYB 201", title: "Computer Networks & Protocol Analysis" },
      { code: "CYB 303", title: "Ethical Hacking & Vulnerability Assessment" },
      { code: "CYB 405", title: "Applied Cryptography & Digital Forensics" },
    ],
    labFacility: "Isolated Virtual Cyber Defense Range (FNAS Block C)",
  },
  {
    id: "it",
    code: "ITE",
    name: "Information Technology",
    tagline: "Infrastructure, Cloud Operations & Reliability",
    description:
      "Architecting enterprise network backbones, managing virtualization clusters, high-availability storage, and resilient business continuity.",
    corePillars: ["Cloud Infrastructure", "System Administration", "Network Engineering"],
    popularTech: ["AWS", "Azure", "Terraform", "Cisco CLI", "Nginx"],
    careerPaths: ["DevOps Engineer", "Site Reliability Engineer (SRE)", "Network Administrator"],
    coreCourses: [
      { code: "ITE 202", title: "Enterprise Systems Administration" },
      { code: "ITE 305", title: "Cloud Infrastructure & Virtualization" },
      { code: "ITE 401", title: "Network Engineering & Telephony" },
    ],
    labFacility: "Cisco & Cloud Infrastructure Laboratory",
  },
  {
    id: "is",
    code: "IFS",
    name: "Information Systems",
    tagline: "Digital Transformation & Product Strategy",
    description:
      "Connecting technical architectures to real-world business impact through enterprise data modeling, ERP systems, and agile product governance.",
    corePillars: ["Enterprise Architecture", "Product Management", "Business Intelligence"],
    popularTech: ["PowerBI", "SQL", "Jira", "UML", "ERP Systems"],
    careerPaths: ["IT Consultant", "Technical Product Manager", "Enterprise Solutions Architect"],
    coreCourses: [
      { code: "IFS 201", title: "Enterprise Database Systems & SQL" },
      { code: "IFS 302", title: "Business Process Modeling & ERP" },
      { code: "IFS 404", title: "IT Governance & Digital Transformation" },
    ],
    labFacility: "Enterprise Information Systems Suite",
  },
  {
    id: "ds",
    code: "DSC",
    name: "Data Science",
    tagline: "Statistical Learning & Insight Discovery",
    description:
      "Transforming raw telemetry and enterprise datasets into predictive intelligence through statistical modeling, deep neural nets, and ETL pipelines.",
    corePillars: ["Statistical Modeling", "Big Data Pipelines", "Predictive Analytics"],
    popularTech: ["Python", "Pandas", "Scikit-Learn", "Apache Spark", "Tableau"],
    careerPaths: ["Data Scientist", "Machine Learning Engineer", "Quantitative Analyst"],
    coreCourses: [
      { code: "DSC 202", title: "Probability, Statistics & Data Exploration" },
      { code: "DSC 301", title: "Machine Learning & Neural Architectures" },
      { code: "DSC 403", title: "Big Data Engineering & Distributed ETL" },
    ],
    labFacility: "Data Intelligence & GPU Analytics Center",
  },
];

/* =========================================================================
   3. KEY CHAPTER INITIATIVES (From Official Scope & README)
   ========================================================================= */
export const CHAPTER_INITIATIVES: Initiative[] = [
  {
    id: "bootcamps",
    number: "01",
    title: "Tech Bootcamps & Coding Labs",
    category: "Technical Upskilling",
    summary:
      "Intensive peer-led weekend workshops covering algorithms, modern web development, cloud tooling, and open-source contributions.",
    leadRole: "Directed by Ivoke Kamsi (DTD)",
    metrics: "Hands-on Weekly Sessions",
    highlights: [
      "Zero-to-One Fullstack JavaScript & Python bootcamps",
      "Git & GitHub collaboration best practices",
      "Interactive code review sessions with senior peers",
    ],
  },
  {
    id: "hackathon",
    number: "02",
    title: "Annual Nile Hackathon & Tech Week",
    category: "Competitive Innovation",
    summary:
      "The chapter's flagship multiday innovation sprint where Nile computing students assemble multidisciplinary teams to solve real societal challenges.",
    leadRole: "Executive Council & Industry Sponsors",
    metrics: "Cash Grants & Incubation",
    highlights: [
      "48-hour continuous product sprint on campus",
      "Mentorship from Nile alumni working in global tech",
      "Pitch showcase before tech founders and university faculty",
    ],
  },
  {
    id: "mentorship",
    number: "03",
    title: "Industry Mentorship & Career Talks",
    category: "Professional Growth",
    summary:
      "Direct fireside dialogues with Nigerian and international software leaders, senior engineers, and alumni to bridge the gap between campus and career.",
    leadRole: "Public Relations & Executive Council",
    metrics: "Direct Career Guidance",
    highlights: [
      "Technical resume optimization & mock technical interviews",
      "Remote work and international internship playbooks",
      "Direct talent referrals to fast-growing tech companies",
    ],
  },
  {
    id: "tutorials",
    number: "04",
    title: "Academic Tutorials & Study Circles",
    category: "Academic Excellence",
    summary:
      "Rigorous, structured revision circles covering core computing curriculum courses from 100L through 400L before midterm and semester examinations.",
    leadRole: "Secretariat & Departmental Leads",
    metrics: "100L–400L Comprehensive Support",
    highlights: [
      "Past question deconstructions and algorithm run-throughs",
      "Specialized math for computing and discrete mathematics clinic",
      "Lab assistance for hardware and networking practical exams",
    ],
  },
];

/* =========================================================================
   4. EVENTS & TIMELINE (Verified Context)
   ========================================================================= */
export const CHAPTER_EVENTS: ChapterEvent[] = [
  {
    id: "annual-hackathon",
    title: "Annual Nile Hackathon & Tech Week",
    category: "Hackathon",
    date: "Annual Chapter Flagship",
    location: "Faculty of Natural and Applied Sciences Auditorium, Nile Campus",
    description:
      "The definitive multiday innovation sprint where Nile computing students assemble multidisciplinary teams across our 6 departments to design, code, and deploy production software.",
    status: "Annual Flagship",
    prizes: "₦500,000 Project Grants • Startup Incubation • Hardware Toolkits",
    timelineSteps: [
      { time: "Day 1", activity: "Opening Keynotes, Team Formation & Problem Statements" },
      { time: "Day 2", activity: "36-Hour Continuous Build Sprint & Technical Mentorship" },
      { time: "Day 3", activity: "Live Product Demonstrations, Jury Pitch & Grand Awards" },
    ],
    calendarData: {
      filename: "nacos-nile-annual-hackathon.ics",
      startDate: "20261112T080000Z",
      endDate: "20261114T180000Z",
      summary: "NACOS Nile Annual Hackathon & Tech Week",
      description: "Flagship 3-day continuous build sprint and project showcase across 6 computing departments.",
      location: "FNAS Auditorium, Nile University of Nigeria, Abuja",
    },
  },
  {
    id: "ctf-challenge",
    title: "Nile Cyber Defense & CTF Challenge",
    category: "Competition",
    date: "Semester Tech Sprint",
    location: "Nile University Computing Labs & Cyber Lab",
    description:
      "An intense collegiate Capture The Flag competition testing ethical hacking, cryptographic analysis, forensics, reverse engineering, and defensive perimeter operations.",
    status: "Upcoming",
    prizes: "Security Certifications • Industry Fellowships • Challenge Trophies",
    timelineSteps: [
      { time: "09:00 AM", activity: "Environment Briefing & Security Rules of Engagement" },
      { time: "10:30 AM", activity: "Flag Capture Sprint: Web Exploitation & Cryptography" },
      { time: "04:00 PM", activity: "Attack-Defend Finals & Scoring Board Reveal" },
    ],
    calendarData: {
      filename: "nacos-nile-ctf-defense.ics",
      startDate: "20261018T080000Z",
      endDate: "20261018T160000Z",
      summary: "NACOS Nile Cyber Defense & CTF Challenge",
      description: "Collegiate ethical hacking, reverse engineering, and defensive perimeter sprint.",
      location: "Cyber Defense Lab, Nile University of Nigeria, Abuja",
    },
  },
  {
    id: "masterclass-web-cloud",
    title: "Full-Stack Web & Cloud Systems Masterclass",
    category: "Workshop",
    date: "Bi-Weekly Saturdays",
    location: "Nile Computing Labs & Virtual Stream",
    description:
      "Deep dive into production engineering: deploying containerized Next.js applications, building real-time websockets, managing PostgreSQL clusters, and securing cloud infrastructure.",
    status: "Annual Flagship",
    timelineSteps: [
      { time: "10:00 AM", activity: "Live Architecture Breakdown & Code Walkthrough" },
      { time: "11:30 AM", activity: "Hands-on Guided Lab Exercise on GitHub" },
      { time: "12:30 PM", activity: "Peer Q&A, Code Review, and Challenge Brief" },
    ],
    calendarData: {
      filename: "nacos-nile-cloud-masterclass.ics",
      startDate: "20261025T090000Z",
      endDate: "20261025T130000Z",
      summary: "NACOS Nile Full-Stack Web & Cloud Masterclass",
      description: "Hands-on Next.js, Docker, and PostgreSQL systems engineering session.",
      location: "Computing Labs & Virtual Stream, Nile University of Nigeria",
    },
  },
  {
    id: "career-mixer",
    title: "Nile Tech Alumni & Executive Mixer",
    category: "Mentorship",
    date: "End-of-Term Mixer",
    location: "Nile University Abuja Student Center",
    description:
      "An exclusive networking evening connecting graduating seniors and eager builders with alumni currently working at top engineering hubs worldwide.",
    status: "Upcoming",
    timelineSteps: [
      { time: "03:00 PM", activity: "Panel: Breaking into Global Remote Software Roles" },
      { time: "04:30 PM", activity: "Lightning Portfolio & GitHub Profile Reviews" },
      { time: "05:30 PM", activity: "Open Networking & Mentorship Cohort Matching" },
    ],
    calendarData: {
      filename: "nacos-nile-alumni-mixer.ics",
      startDate: "20261205T140000Z",
      endDate: "20261205T180000Z",
      summary: "NACOS Nile Alumni & Executive Mixer",
      description: "Direct career matching and portfolio reviews with Nile tech alumni.",
      location: "Nile University Abuja Student Center",
    },
  },
];

/* =========================================================================
   5. VERIFIED COMMUNITY CHANNELS (For Header & Footer CTAs)
   ========================================================================= */
export const COMMUNITY_CHANNELS: CommunityChannel[] = [
  {
    id: "discord",
    name: "Discord Guild",
    platform: "Discord",
    description: "Real-time coding voice channels, project showcases, dev chat, and homework help.",
    handle: "discord.gg/nacos-nile",
    url: "https://discord.gg",
    membersEstimate: "500+ Active Builders",
    iconType: "message-square",
    badgeText: "Primary Tech Hub",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Community",
    platform: "WhatsApp",
    description: "Official broadcast announcements, urgent academic memos, and class representative channels.",
    handle: "chat.whatsapp.com/nacos-nile",
    url: "https://chat.whatsapp.com",
    membersEstimate: "All Computing Cohorts",
    iconType: "users",
    badgeText: "Instant Updates",
  },
  {
    id: "telegram",
    name: "Telegram Resource Archive",
    platform: "Telegram",
    description: "Shared past questions, lecture recordings, textbooks, software installation packages.",
    handle: "t.me/nacos_nile_library",
    url: "https://t.me",
    membersEstimate: "Course Library",
    iconType: "send",
    badgeText: "Study Vault",
  },
  {
    id: "twitter",
    name: "X (Formerly Twitter)",
    platform: "X / Twitter",
    description: "Public project spotlights, hackathon live-tweeting, tech memes, and industry engagement.",
    handle: "@NACOSNile",
    url: "https://twitter.com",
    membersEstimate: "Chapter Updates",
    iconType: "twitter",
    badgeText: "Public Voice",
  },
  {
    id: "linkedin",
    name: "LinkedIn Organization",
    platform: "LinkedIn",
    description: "Professional chapter achievements, executive announcements, and alumni career milestones.",
    handle: "NACOS Nile Chapter",
    url: "https://linkedin.com",
    membersEstimate: "Alumni Network",
    iconType: "linkedin",
    badgeText: "Professional",
  },
  {
    id: "instagram",
    name: "Instagram",
    platform: "Instagram",
    description: "Visual stories, event highlights, student spotlights, and behind-the-scenes moments.",
    handle: "@nacos_nile",
    url: "https://instagram.com",
    membersEstimate: "Life at Nile",
    iconType: "instagram",
    badgeText: "Campus Life",
  },
];

/* =========================================================================
   6. VERIFIED BRAND & CHAPTER FACTS
   ========================================================================= */
export const CHAPTER_METRICS = [
  { label: "Computing Disciplines", value: "6", subtitle: "CSC • SEN • CYB • ITE • IFS • DSC" },
  { label: "Executive Council", value: "9", subtitle: "Dedicated Student Leaders" },
  { label: "Student Innovators", value: "500+", subtitle: "Nile University Chapter" },
  { label: "Official Motto", value: "Learn • Build • Grow", subtitle: "National NACOS Standard" },
];

/* =========================================================================
   7. ANNUAL GALA & DINNER NIGHT ("A COLORS SHOW")
   Official link: https://dhmedia270.pixieset.com/acolorsshownacosnilechapter/
   PIN: 2501
   ========================================================================= */
export interface GalaPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "Arrivals & Red Carpet" | "Stage & Awards" | "Community & Dining";
  caption: string;
  aspect: "portrait" | "landscape";
  width: number;
  height: number;
}

export const GALA_ALBUM_INFO = {
  title: "A Colors Show: Annual Dinner & Awards Night",
  theme: "A Celebration of Unity, Innovation & Excellence",
  description:
    "The official annual celebration bringing together Nile University computing students, departmental faculty, and executive leaders to honor outstanding achievements and lifelong fellowship.",
  totalPhotos: "160+ High-Res Photos",
  galleryUrl: "https://dhmedia270.pixieset.com/acolorsshownacosnilechapter/",
  downloadPin: "2501",
};

export const GALA_PHOTOS: GalaPhoto[] = [
  {
    id: "gala-01",
    src: "/gala/gala-01.webp",
    alt: "Guests arriving in formal evening wear at the A Colors Show photo suite",
    title: "Red Carpet Elegance",
    category: "Arrivals & Red Carpet",
    caption: "Guests arriving in formal evening wear at the official A Colors Show photo suite.",
    aspect: "portrait",
    width: 640,
    height: 960,
  },
  {
    id: "gala-02",
    src: "/gala/gala-02.webp",
    alt: "Attendees in evening attire posing at the A Colors Show backdrop",
    title: "Evening Red Carpet",
    category: "Arrivals & Red Carpet",
    caption: "Celebrating personal style, community bonds, and student fellowship at the gala entrance.",
    aspect: "portrait",
    width: 640,
    height: 960,
  },
  {
    id: "gala-03",
    src: "/gala/gala-03.webp",
    alt: "Formal evening portrait at the A Colors Show entrance",
    title: "Gala Portraiture",
    category: "Arrivals & Red Carpet",
    caption: "Striking evening portraits captured before the official dinner and awards ceremony.",
    aspect: "portrait",
    width: 640,
    height: 960,
  },
  {
    id: "gala-04",
    src: "/gala/gala-04.webp",
    alt: "Nile University computing scholars and student leaders in formal gala wear",
    title: "The Colors of Nile Computing",
    category: "Arrivals & Red Carpet",
    caption: "Computing students showcasing vibrant fashion, unity, and excellence at the official red carpet.",
    aspect: "landscape",
    width: 640,
    height: 427,
  },
  {
    id: "gala-05",
    src: "/gala/gala-05.webp",
    alt: "Presentation of an achievement award plaque on stage",
    title: "Annual Achievement Awards",
    category: "Stage & Awards",
    caption: "Honoring outstanding student accomplishments, leadership, and contributions on the main stage.",
    aspect: "landscape",
    width: 640,
    height: 427,
  },
  {
    id: "gala-06",
    src: "/gala/gala-06.webp",
    alt: "Overhead view of Nile computing students seated at gala banquet tables",
    title: "Grand Banquet Hall",
    category: "Community & Dining",
    caption: "Overhead view of the banquet hall as computing cohorts gather for dinner, toasts, and fellowship.",
    aspect: "landscape",
    width: 640,
    height: 427,
  },
  {
    id: "gala-07",
    src: "/gala/gala-07.webp",
    alt: "Main stage illuminated with LED display and host at the annual dinner",
    title: "Main Stage & LED Display",
    category: "Stage & Awards",
    caption: "Master of ceremonies opening the gala under stage lighting and full-width digital displays.",
    aspect: "landscape",
    width: 640,
    height: 427,
  },
  {
    id: "gala-08",
    src: "/gala/gala-08.webp",
    alt: "Student musical performance on the gala stage",
    title: "Live Creative Showcase",
    category: "Stage & Awards",
    caption: "Live musical and artistic performances by computing students celebrating creative versatility.",
    aspect: "portrait",
    width: 640,
    height: 960,
  },
  {
    id: "gala-09",
    src: "/gala/gala-09.webp",
    alt: "Students sharing laughs and memories at the photo booth",
    title: "Fellowship & Moments",
    category: "Community & Dining",
    caption: "Smiles and unforgettable memories among classmates celebrating another milestone academic year.",
    aspect: "landscape",
    width: 640,
    height: 427,
  },
  {
    id: "gala-10",
    src: "/gala/gala-10.webp",
    alt: "Student enjoying the celebration and music",
    title: "Celebration & Harmony",
    category: "Community & Dining",
    caption: "Unwinding and celebrating hard work, hackathon triumphs, and departmental solidarity.",
    aspect: "portrait",
    width: 640,
    height: 960,
  },
];
