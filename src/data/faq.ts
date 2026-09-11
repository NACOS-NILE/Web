export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Membership" | "Events" | "Academic";
}

export const FAQS: FAQItem[] = [
  {
    question: "Who is eligible to join NACOS Nile Chapter?",
    answer: "Every student enrolled in any computing department (Computer Science, Software Engineering, Cyber Security, Information Technology, Information Systems, and Data Science) at Nile University of Nigeria is automatically a member of NACOS Nile.",
    category: "General"
  },
  {
    question: "How do I pay my departmental dues or claim a waiver?",
    answer: "Departmental dues are processed through the Financial Secretary's portal or at designated NACOS help desks during registration week. Students who place in official NACOS competitions (like the Website Competition!) receive full or partial dues waivers.",
    category: "Membership"
  },
  {
    question: "Can beginners with no coding experience participate in workshops?",
    answer: "Absolutely! Our Directorate of Training & Development (DTD) runs tiered tracks ranging from zero-to-one introductory bootcamps to advanced systems design, ensuring everyone has a supported learning path.",
    category: "Academic"
  },
  {
    question: "How can I pitch an idea or join the executive committee / sub-committees?",
    answer: "Sub-committee recruitments open at the start of each academic session. You can also join our Discord or reach out directly to any executive council member to propose workshops, initiatives, or partnerships.",
    category: "General"
  },
  {
    question: "When does the Nile Annual Tech Week and Hackathon occur?",
    answer: "Nile Tech Week is typically hosted during the second semester. It features coding hackathons, esports tournaments, project showcases, and keynote speeches from industry leaders.",
    category: "Events"
  }
];

export interface StudentResource {
  title: string;
  description: string;
  link: string;
  tag: string;
  iconName: string;
}

export const STUDENT_RESOURCES: StudentResource[] = [
  {
    title: "Course Material Archive",
    description: "Access curated lecture notes, past exam questions, and lab guides for 100L - 400L computing courses.",
    link: "https://t.me/nacos_nile",
    tag: "Study Vault",
    iconName: "FolderGit2"
  },
  {
    title: "GitHub Student Developer Pack",
    description: "Unlock thousands of dollars in free developer tools, cloud hosting (AWS/DigitalOcean), and domain credits.",
    link: "https://education.github.com/pack",
    tag: "Free Tools",
    iconName: "Terminal"
  },
  {
    title: "Nile University Student Portal",
    description: "Direct link to course registration, semester results, and university fee clearances.",
    link: "https://sis.nileuniversity.edu.ng",
    tag: "University Portal",
    iconName: "ExternalLink"
  },
  {
    title: "NACOS National Secretariat",
    description: "Connect with the national body of the Nigeria Association of Computing Students across 300+ institutions.",
    link: "https://nacos.org.ng",
    tag: "National Body",
    iconName: "Globe"
  }
];
