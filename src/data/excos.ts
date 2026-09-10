export interface ExcoMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  quote?: string;
  department?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export const EXCO_MEMBERS: ExcoMember[] = [
  {
    id: "president",
    name: "Zikora Fortune Nwafor",
    role: "President",
    photo: "/excos-pics/president.jpg",
    bio: "Passionate about building active student communities, fostering technical innovation, and steering NACOS Nile towards global excellence.",
    quote: "Passionate about building active student communities.",
    department: "Computer Science",
    linkedin: "https://www.linkedin.com/company/nacos-nile",
    github: "https://github.com/NACOS-NILE",
    twitter: "https://x.com/NACOSNile"
  },
  {
    id: "vp",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    photo: "/excos-pics/vp.jpg",
    bio: "Dedicated to student welfare, bridge-building between faculty and learners, and driving high-impact academic and professional programs.",
    quote: "Advocating for student welfare and academic excellence.",
    department: "Software Engineering",
    linkedin: "https://www.linkedin.com/company/nacos-nile",
    github: "https://github.com/NACOS-NILE",
    twitter: "https://x.com/NACOSNile"
  },
  {
    id: "sg",
    name: "Sheila Jato",
    role: "Secretary General",
    photo: "/excos-pics/sg.jpg",
    bio: "Managing seamless operations, communication pipelines, and institutional documentation across all NACOS Nile chapter activities.",
    quote: "Keeping the engines running smoothly.",
    department: "Information Technology",
    linkedin: "https://www.linkedin.com/company/nacos-nile",
    github: "https://github.com/NACOS-NILE",
    twitter: "https://x.com/NACOSNile"
  },
  {
    id: "fc",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    photo: "/excos-pics/fc.jpg",
    bio: "Ensuring transparent fiscal management, sponsorship distribution, and budget stewardship for all chapter projects and events.",
    quote: "Making the important financial decisions.",
    department: "Data Science",
    linkedin: "https://www.linkedin.com/company/nacos-nile",
    github: "https://github.com/NACOS-NILE",
    twitter: "https://x.com/NACOSNile"
  },
  {
    id: "pro",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    photo: "/excos-pics/pro.jpg",
    bio: "Crafting the brand narrative, amplifying chapter voices, and orchestrating media reach across Nile University and the wider tech ecosystem.",
    quote: "Applying creativity to communication.",
    department: "Cyber Security",
    linkedin: "https://www.linkedin.com/company/nacos-nile",
    github: "https://github.com/NACOS-NILE",
    twitter: "https://x.com/NACOSNile"
  },
  {
    id: "dtd",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development (DTD)",
    photo: "/excos-pics/dtd.jpg",
    bio: "Driving technical mastery, hands-on coding bootcamps, and developer workshops for all computing students at Nile.",
    quote: "Driving technical growth and leading coding workshops for Nile computing students.",
    department: "Software Engineering",
    linkedin: "https://www.linkedin.com/company/nacos-nile",
    github: "https://github.com/NACOS-NILE",
    twitter: "https://x.com/NACOSNile"
  },
  {
    id: "provost",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    photo: "/excos-pics/provost.jpg",
    bio: "Overseeing order, protocol, and smooth day-to-day operations during general meetings, tech symposiums, and elections.",
    quote: "Managing the day-to-day operations of NACOS Nile.",
    department: "Information Systems",
    linkedin: "https://www.linkedin.com/company/nacos-nile",
    github: "https://github.com/NACOS-NILE",
    twitter: "https://x.com/NACOSNile"
  },
  {
    id: "socials",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    photo: "/excos-pics/socials.jpg",
    bio: "Creating memorable social experiences, tech game nights, dinners, and networking mixers that unite our community.",
    quote: "Prioritizing social activities and events.",
    department: "Computer Science",
    linkedin: "https://www.linkedin.com/company/nacos-nile",
    github: "https://github.com/NACOS-NILE",
    twitter: "https://x.com/NACOSNile"
  },
  {
    id: "welfare",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    photo: "/excos-pics/welfare.jpg",
    bio: "Championing student mental wellness, academic support channels, and an inclusive, caring environment for every member.",
    quote: "Your well-being is my priority.",
    department: "Cyber Security",
    linkedin: "https://www.linkedin.com/company/nacos-nile",
    github: "https://github.com/NACOS-NILE",
    twitter: "https://x.com/NACOSNile"
  }
];
