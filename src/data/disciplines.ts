export interface Discipline {
  id: string;
  name: string;
  shortCode: string;
  badge: string;
  tagline: string;
  description: string;
  coreTopics: string[];
  careerPaths: string[];
  featuredTech: string[];
  colorGradient: string;
  borderColor: string;
}

export const DISCIPLINES: Discipline[] = [
  {
    id: "cs",
    name: "Computer Science",
    shortCode: "CSC",
    badge: "Algorithms & Foundations",
    tagline: "Exploring the theoretical and algorithmic foundations of modern computation.",
    description: "Computer Science at Nile University provides deep training in algorithmic problem-solving, discrete mathematics, artificial intelligence, compiler design, and scalable systems.",
    coreTopics: ["Data Structures & Algorithms", "Operating Systems", "Artificial Intelligence & ML", "Computer Architecture", "Theory of Computation"],
    careerPaths: ["Algorithm Engineer", "AI Researcher", "Systems Architect", "Backend Specialist", "Academic Researcher"],
    featuredTech: ["C++", "Python", "Rust", "Java", "Linux"],
    colorGradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    borderColor: "border-blue-500/30"
  },
  {
    id: "se",
    name: "Software Engineering",
    shortCode: "SEN",
    badge: "Full-Stack & Architecture",
    tagline: "Architecting resilient, production-grade software applications at scale.",
    description: "Focusing on the engineering lifecycle, design patterns, microservices architecture, CI/CD pipelines, and creating user-centric software products that solve real-world problems.",
    coreTopics: ["Software Architecture", "Web & Mobile Engineering", "Cloud Computing & DevOps", "Design Patterns", "Agile & Quality Assurance"],
    careerPaths: ["Full-Stack Engineer", "Cloud Solutions Architect", "DevOps Engineer", "Mobile Developer", "Engineering Manager"],
    featuredTech: ["TypeScript", "Next.js", "Docker", "Kubernetes", "PostgreSQL"],
    colorGradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    borderColor: "border-cyan-500/30"
  },
  {
    id: "cyber",
    name: "Cyber Security",
    shortCode: "CYB",
    badge: "Defense & Cryptography",
    tagline: "Defending digital frontiers against modern cyber threats and intrusions.",
    description: "Equipping students with defensive operations, ethical hacking, digital forensics, network security protocols, threat hunting, and modern cryptographic implementations.",
    coreTopics: ["Ethical Hacking & Penetration Testing", "Cryptography & PKI", "Network Defense & Firewalls", "Digital Forensics & Incident Response", "Cloud Security"],
    careerPaths: ["Security Analyst", "Penetration Tester", "SOC Analyst", "Security Architect", "Forensics Investigator"],
    featuredTech: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Python"],
    colorGradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    borderColor: "border-emerald-500/30"
  },
  {
    id: "it",
    name: "Information Technology",
    shortCode: "IFT",
    badge: "Infrastructure & Networks",
    tagline: "Empowering modern enterprise infrastructure, networks, and cloud solutions.",
    description: "Mastering enterprise network engineering, server virtualization, IT automation, systems administration, and robust communications infrastructure.",
    coreTopics: ["Enterprise Networking (Cisco/CCNA)", "Cloud & Virtualization", "System Administration", "IT Service Management", "IoT Infrastructure"],
    careerPaths: ["Network Engineer", "Systems Administrator", "Cloud Operations Specialist", "IT Consultant", "Infrastructure Lead"],
    featuredTech: ["Cisco IOS", "AWS / Azure", "Terraform", "Ansible", "Linux Server"],
    colorGradient: "from-blue-600/20 via-sky-600/10 to-transparent",
    borderColor: "border-blue-500/30"
  },
  {
    id: "is",
    name: "Information Systems",
    shortCode: "IFS",
    badge: "Business & Digital Strategy",
    tagline: "Bridging business strategy, enterprise systems, and digital transformation.",
    description: "Harnessing technology to optimize business workflows, enterprise resource planning (ERP), data governance, business intelligence, and digital product strategy.",
    coreTopics: ["Enterprise Systems & ERP", "Business Intelligence", "Database Management", "Product Management", "IT Governance & Compliance"],
    careerPaths: ["Product Manager", "Business Analyst", "ERP Consultant", "IT Project Manager", "Digital Transformation Specialist"],
    featuredTech: ["SAP", "Power BI", "SQL Server", "Jira", "Tableau"],
    colorGradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    borderColor: "border-amber-500/30"
  },
  {
    id: "ds",
    name: "Data Science",
    shortCode: "DAT",
    badge: "Analytics & Machine Learning",
    tagline: "Transforming complex datasets into actionable intelligence and predictive models.",
    description: "Combining statistical analysis, deep learning, big data pipelines, NLP, and neural networks to unlock profound insights and automated intelligence.",
    coreTopics: ["Machine Learning & Deep Learning", "Statistical Modeling", "Big Data Engineering", "Data Visualization", "Natural Language Processing"],
    careerPaths: ["Data Scientist", "Machine Learning Engineer", "Data Engineer", "Quantitative Analyst", "BI Developer"],
    featuredTech: ["PyTorch", "TensorFlow", "Pandas / NumPy", "Apache Spark", "Scikit-Learn"],
    colorGradient: "from-fuchsia-600/20 via-pink-600/10 to-transparent",
    borderColor: "border-fuchsia-500/30"
  }
];
