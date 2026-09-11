export const disciplines = [
  {
    code: "01",
    name: "Computer Science",
    short: "Algorithms, systems and the ideas behind modern computing.",
    note: "Build strong foundations in problem solving, software and computation.",
  },
  {
    code: "02",
    name: "Software Engineering",
    short: "Design and ship software that can survive real use.",
    note: "Move from an idea to a reliable product with teams, tools and good engineering practice.",
  },
  {
    code: "03",
    name: "Cyber Security",
    short: "Protect people, systems, networks and data.",
    note: "Study threats, controls and the thinking required to defend critical digital systems.",
  },
  {
    code: "04",
    name: "Information Technology",
    short: "Keep the infrastructure behind digital work running.",
    note: "Work across networks, systems, support and the technology organisations depend on.",
  },
  {
    code: "05",
    name: "Information Systems",
    short: "Connect technology with the way organisations work.",
    note: "Use systems, information and business thinking to improve decisions and operations.",
  },
  {
    code: "06",
    name: "Data Science",
    short: "Turn data into useful evidence and decisions.",
    note: "Work with statistics, computation and machine learning to find patterns that matter.",
  },
] as const;

export const activity = [
  {
    index: "01",
    type: "Technical workshop",
    title: "Prompt Engineering + Web Development",
    detail:
      "NACOS Nile's second technical workshop introduced a five step prompting framework, then moved into a practical portfolio website build using AI assisted development tools.",
    sourceLabel: "NACOS Nile on LinkedIn",
    sourceUrl: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/posts/?feedView=all",
  },
  {
    index: "02",
    type: "Workshop collaboration",
    title: "Introduction to AI + Machine Learning",
    detail:
      "A collaboration with NUN Women In Tech covered AI and machine learning fundamentals, linear regression and a small hands on model building exercise.",
    sourceLabel: "NACOS Nile on LinkedIn",
    sourceUrl: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/posts/?feedView=all",
  },
  {
    index: "03",
    type: "Community summit",
    title: "Cyber Smart Women Summit",
    detail:
      "The 2025 summit brought students and technology leaders together around digital identity, cyber safety, career growth and women leading in technology.",
    sourceLabel: "NACOS Nile on LinkedIn",
    sourceUrl: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/posts/?feedView=all",
  },
] as const;

export const executives = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    bio: "Passionate about building active student communities.",
    image: "/excos-pics/president.jpg",
    position: "50% 30%",
    featured: true,
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    bio: "Advocating for student welfare and academic excellence.",
    image: "/excos-pics/vp.jpg",
    position: "50% 32%",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    bio: "Keeping the engines running smoothly.",
    image: "/excos-pics/sg.jpg",
    position: "50% 34%",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    bio: "Making the important financial decisions.",
    image: "/excos-pics/fc.jpg",
    position: "50% 28%",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    bio: "Applying creativity to communication.",
    image: "/excos-pics/pro.jpg",
    position: "50% 30%",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
    image: "/excos-pics/dtd.jpg",
    position: "50% 26%",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    bio: "Managing the day to day operations of NACOS Nile.",
    image: "/excos-pics/provost-corrected.jpg",
    position: "50% 44%",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    bio: "Prioritizing social activities and events.",
    image: "/excos-pics/socials-corrected.jpg",
    position: "50% 45%",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    bio: "Your well-being is my priority.",
    image: "/excos-pics/welfare.jpg",
    position: "50% 30%",
  },
] as const;

export const institutionalLinks = [
  {
    name: "Nile University",
    role: "Host institution",
    logo: "https://nunhr.nileuniversity.edu.ng/_app/immutable/assets/nile-logo.CBuOKPpg.webp",
    href: "https://nileuniversity.edu.ng/",
  },
  {
    name: "NACOS National",
    role: "National association",
    logo: "https://nacos.org.ng/images/NNL.png",
    href: "https://nacos.org.ng/",
  },
  {
    name: "Nigeria Computer Society",
    role: "Parent body of NACOS National",
    logo: "https://www.ncs.org.ng/wp-content/uploads/2017/06/cropped-NCS_LOGO-7.jpg",
    href: "https://www.ncs.org.ng/",
  },
  {
    name: "Honoris United Universities",
    role: "Nile University network",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Honoris_United_Universities%27_Logo.jpg",
    href: "https://nileuniversity.edu.ng/honoris-united-universities/",
  },
] as const;

export const ecosystem = [
  {
    name: "NACOS Nile University Chapter",
    role: "Campus",
    copy: "The official computing students organisation at Nile University. The chapter says it was formally established in 2023.",
    href: "https://nacos-nile-website.vercel.app/",
  },
  {
    name: "Faculty of Computing Studies",
    role: "Academic home",
    copy: "The faculty brings together the six computing areas represented across this site and provides the chapter's campus base.",
    href: "https://nileuniversity.edu.ng/faculties/faculty-of-computing-studies/",
  },
  {
    name: "NACOS National",
    role: "National",
    copy: "The national association connects local chapters across Nigerian tertiary institutions and coordinates activity across six geopolitical zones.",
    href: "https://nacos.org.ng/association",
  },
  {
    name: "Nigeria Computer Society",
    role: "Profession",
    copy: "NACOS National states that the Nigeria Computer Society endorsed NACOS as its parent organisation.",
    href: "https://www.ncs.org.ng/",
  },
  {
    name: "NUN Women In Tech",
    role: "Verified collaborator",
    copy: "NACOS Nile publicly documented a joint introductory AI and machine learning workshop with the campus Women In Tech community.",
    href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/posts/?feedView=all",
  },
] as const;

export const nationalFacts = [
  { value: 1000000, suffix: "+", label: "Members reported nationally" },
  { value: 250, suffix: "+", label: "Local chapters" },
  { value: 6, suffix: "", label: "Geopolitical zones" },
] as const;

export const socialLinks = [
  { label: "Instagram", handle: "@nacosnileuni", href: "https://www.instagram.com/nacosnileuni", icon: "/brand-icons/instagram.svg" },
  { label: "TikTok", handle: "@nacosnileuni", href: "https://www.tiktok.com/@nacosnileuni", icon: "/brand-icons/tiktok.svg" },
  { label: "LinkedIn", handle: "NACOS Nile University", href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/posts/?feedView=all", icon: "/brand-icons/linkedin.svg" },
  { label: "X", handle: "@NacosNileUni", href: "https://x.com/NacosNileUni", icon: "/brand-icons/x-twitter.svg" },
  { label: "WhatsApp", handle: "Official student community", href: "https://nacos-nile-website.vercel.app/community", icon: "/brand-icons/whatsapp.svg" },
  { label: "Email", handle: "nacosnile@gmail.com", href: "mailto:nacosnile@gmail.com", icon: "/brand-icons/email.svg" },
  { label: "Discord", handle: "Coming soon", href: null, icon: "/brand-icons/discord.svg", comingSoon: true },
  { label: "Telegram", handle: "Coming soon", href: null, icon: "/brand-icons/telegram.svg", comingSoon: true },
] as const;

export const accessLinks = [
  {
    number: "01",
    title: "Student Hub",
    copy: "Resources and the NACOS Nile events calendar in one place.",
    href: "https://app.notion.com/p/NACOS-NILE-CHAPTER-2e2374d50eeb81969ab6cb677eeb44a8",
    tag: "Notion",
  },
  {
    number: "02",
    title: "Community",
    copy: "Use the official chapter page to request access to the verified WhatsApp community.",
    href: "https://nacos-nile-website.vercel.app/community",
    tag: "Official hub",
  },
  {
    number: "03",
    title: "Constitution",
    copy: "Read the association constitution and understand how NACOS is organised.",
    href: "https://nacos-nile-website.vercel.app/files/nacos%20nile%20constitution.pdf",
    tag: "PDF",
  },
  {
    number: "04",
    title: "Academic Calendar",
    copy: "Open the academic calendar currently linked from the official NACOS Nile site.",
    href: "https://nacos-nile-website.vercel.app/files/2025-26%20Academic%20Calendar.pdf",
    tag: "PDF",
  },
  {
    number: "05",
    title: "Chapter Gallery",
    copy: "Open the gallery linked from the official NACOS Nile website and revisit past chapter moments.",
    href: "https://nacos-nile-website.vercel.app/gallery",
    tag: "Photos",
  },
  {
    number: "06",
    title: "Official Chapter Hub",
    copy: "Visit the current NACOS Nile website for dues, FAQs and chapter updates.",
    href: "https://nacos-nile-website.vercel.app/",
    tag: "Website",
  },
  {
    number: "07",
    title: "NACOS National",
    copy: "Explore the national association, events and the wider network of local chapters.",
    href: "https://nacos.org.ng/",
    tag: "National",
  },
] as const;
