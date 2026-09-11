export type ExcoMember = {
  photo: string; // path inside /public, e.g. /excos-pics/president.jpg
  name: string;
  role: string;
  bio: string;
};

export const presidencyMembers: ExcoMember[] = [
  {
    photo: "/excos-pics/president.png",
    name: "Zikora Fortune Nwafor",
    role: "President",
    bio: "Passionate about building active student communities.",
  },
  {
    photo: "/excos-pics/vice president.png",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    bio: "Advocating for student welfare and academic excellence.",
  },
  {
    photo: "/excos-pics/secretary.png",
    name: "Sheila Jato",
    role: "Secretary General",
    bio: "Keeping the engines running smoothly.",
  },
];

export const directorateMembers: ExcoMember[] = [
  {
    photo: "/excos-pics/fc.png",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    bio: "Making the important financial decisions.",
  },
  {
    photo: "/excos-pics/elvis.png",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    bio: "Applying creativity to communication.",
  },
  {
    photo: "/excos-pics/dtd.png",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development (DTD)",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
  },
  {
    photo: "/excos-pics/provost.png",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    bio: "Managing the day-to-day operations of NACOS Nile.",
  },
  {
    photo: "/excos-pics/socials.png",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    bio: "Prioritizing social activities and events.",
  },
  {
    photo: "/excos-pics/welfare.png",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    bio: "Your well-being is my priority.",
  },
];

export const excoMembers: ExcoMember[] = [
  ...presidencyMembers,
  ...directorateMembers,
];
