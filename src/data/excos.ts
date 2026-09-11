export interface ExcoMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  isFeatured?: boolean;
}

export const EXCO_MEMBERS: ExcoMember[] = [
  {
    id: "1",
    name: "Zikora Fortune Nwafor",
    role: "PRESIDENT",
    quote: "“Passionate about building active student communities.”",
    image: "/excos-pics/president.jpg",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Abdullah Ali Ahmad",
    role: "VICE PRESIDENT",
    quote: "“Advocating for student welfare and academic excellence.”",
    image: "/excos-pics/vp.jpg",
  },
  {
    id: "3",
    name: "Sheila Jato",
    role: "SECRETARY GENERAL",
    quote: "“Keeping the engines running smoothly.”",
    image: "/excos-pics/sg.jpg",
  },
  {
    id: "4",
    name: "Amira Ibrahim",
    role: "FINANCIAL SECRETARY",
    quote: "“Making the important financial decisions.”",
    image: "/excos-pics/fc.jpg",
  },
  {
    id: "5",
    name: "Elvis Francis",
    role: "PRO",
    quote: "“Applying creativity to communication.”",
    image: "/excos-pics/pro.jpg",
  },
  {
    id: "6",
    name: "Ivoke Kamsi",
    role: "DTD",
    quote: "“Driving technical growth and leading coding workshops for Nile computing students.”",
    image: "/excos-pics/dtd.jpg",
  },
  {
    id: "7",
    name: "Zubaida Abdulazeez",
    role: "PROVOST",
    quote: "“Managing the day-to-day operations of NACOS Nile.”",
    image: "/excos-pics/provost.jpg",
  },
  {
    id: "8",
    name: "Saidat Ahmed",
    role: "DIRECTOR OF SOCIALS",
    quote: "“Prioritizing social activities and events.”",
    image: "/excos-pics/socials.jpg",
  },
  {
    id: "9",
    name: "Danielle Ekunwe",
    role: "DIRECTOR OF WELFARE",
    quote: "“Your well-being is my priority.”",
    image: "/excos-pics/welfare.jpg",
  },
];