export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  dept: string;
  year: string;
  image: string;
  col: number; // 1 to 7
  aspect?: "square" | "portrait" | "tall";
}

export const testimonials: Testimonial[] = [
  {
    id: "halima",
    name: "Halima Bello",
    // Placeholder persona (random Nigerian name + dept, per the user) for a
    // new photo — replaces the old "fatima" entry.
    role: "UI/UX Designer",
    dept: "Information Technology",
    year: "300 Level",
    image: "/tetimonial-pics/uk2.webp",
    quote: "Redesigning the guild's own tools taught me more about real-world UX constraints than any classroom project ever could.",
    col: 1,
    aspect: "portrait",
  },
  {
    id: "tobenna",
    name: "Tobenna Chukwu",
    // Placeholder persona — replaces the old "david" entry.
    role: "Systems Engineer",
    dept: "Computer Science",
    year: "Final Year",
    image: "/tetimonial-pics/uk1.webp",
    quote: "Debugging production issues alongside senior engineers during NACOS sprints sharpened my systems thinking faster than four years of lectures.",
    col: 1,
    aspect: "square",
  },
  {
    id: "zikora",
    // Photo is the real President's headshot (see excos.ts) — name has to
    // match the actual person, not a placeholder.
    name: "Zikora Fortune Nwafor",
    role: "President",
    dept: "Software Engineering",
    year: "Alumni",
    image: "/excos-pics/president.webp",
    quote: "NACOS Nile bridged the gap between classroom theory and building production software. An incredible guild pushing African tech forward.",
    col: 2,
    aspect: "square",
  },
  {
    id: "chinedu",
    name: "Chinedu Uduma Iroha",
    role: "Vice President",
    dept: "Software Engineering",
    year: "Final Year",
    image: "/tetimonial-pics/chinedu.webp",
    quote: "Building real systems alongside peer engineers gave me the technical maturity and execution speed to ship production products.",
    col: 2,
    aspect: "square",
  },
  {
    id: "elvis",
    // Photo is the real PRO's headshot — name/dept corrected to match.
    name: "Elvis Francis",
    role: "PRO",
    dept: "Software Engineering",
    year: "400 Level",
    image: "/excos-pics/pro.webp",
    quote: "From intense CTF competitions to threat modeling workshops, NACOS prepares you for the security realities of industry.",
    col: 3,
    aspect: "tall",
  },
  {
    id: "zubaida",
    // Photo is the real Provost's headshot — name corrected to match.
    name: "Zubaida Abdulazeez",
    role: "Provost",
    dept: "Computer Science",
    year: "300 Level",
    image: "/excos-pics/provost.webp",
    quote: "The hackathons and developer masterclasses gave me the execution muscle and portfolio to land my first engineering internship.",
    col: 4,
    aspect: "square",
  },
  {
    id: "folasade",
    name: "Folasade Adeyemi",
    // Placeholder persona — replaces the old "zainab" entry.
    role: "Security Analyst",
    dept: "Cyber Security",
    year: "400 Level",
    image: "/tetimonial-pics/uk3.webp",
    quote: "Our capture-the-flag nights turned abstract security theory into instincts I now rely on daily.",
    col: 4,
    aspect: "square",
  },
  {
    id: "saidat",
    // Photo is the real Director of Socials' headshot — name/role/dept
    // corrected to match.
    name: "Saidat Ahmed",
    role: "Director of Socials",
    dept: "Computer Science",
    year: "300 Level",
    image: "/excos-pics/socials.webp",
    quote: "The lifelong friendships and late-night hackathon memories formed within NACOS make studying computing at Nile unforgettable.",
    col: 5,
    aspect: "tall",
  },
  {
    id: "amira",
    // Photo is the real Financial Secretary's headshot — name/role/dept
    // corrected to match.
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    dept: "Software Engineering",
    year: "Final Year",
    image: "/excos-pics/fc.webp",
    quote: "Managing guild budgets, technical initiatives, and operations taught me executive execution and organizational discipline.",
    col: 6,
    aspect: "tall",
  },
  {
    id: "ngozi",
    name: "Ngozi Eze",
    // Placeholder persona — replaces the old "aisha" entry.
    role: "Data Analyst",
    dept: "Data Science",
    year: "300 Level",
    image: "/tetimonial-pics/uk5.webp",
    quote: "Working with real campus datasets during NACOS data challenges showed me what data science actually looks like outside a textbook.",
    col: 7,
    aspect: "portrait",
  },
  {
    id: "omodot",
    name: "Abraham Omodot",
    // Replaces the old "khalil" entry. Role/quote are a placeholder best
    // guess (dept + year came from the user, role and quote didn't) —
    // matches the tone of the other non-exco entries (e.g. aisha), swap in
    // real wording anytime.
    role: "Open Source Contributor",
    dept: "Software Engineering",
    year: "Final Year",
    image: "/tetimonial-pics/omodot.webp",
    quote: "Working through NACOS's project sprints and mentorship sessions pushed my engineering skills further than any single course could.",
    col: 7,
    aspect: "square",
  },
];
