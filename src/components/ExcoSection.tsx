import Image from "next/image";

interface ExcoMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const excos: ExcoMember[] = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    bio: "Passionate about building active student communities.",
    image: "/excos-pics/president.jpg",
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    bio: "Advocating for student welfare and academic excellence.",
    image: "/excos-pics/vp.jpg",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    bio: "Keeping the engines running smoothly.",
    image: "/excos-pics/sg.jpg",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    bio: "Making the important financial decisions.",
    image: "/excos-pics/fc.jpg",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    bio: "Applying creativity to communication.",
    image: "/excos-pics/pro.jpg",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Dev (DTD)",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
    image: "/excos-pics/dtd.jpg",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    bio: "Managing the day-to-day operations of NACOS Nile.",
    image: "/excos-pics/provost.jpg",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    bio: "Prioritizing social activities and events.",
    image: "/excos-pics/socials.jpg",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    bio: "Your well-being is my priority.",
    image: "/excos-pics/welfare.jpg",
  },
];

export default function ExcoSection() {
  return (
    <section id="excos" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">
            Leadership
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Executive Council (Excos)
          </p>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Meet the student executives piloting the affairs of the NACOS Nile Chapter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {excos.map((member) => (
            <div
              key={member.name}
              className="bg-[#0d1733]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all flex flex-col"
            >
              <div className="relative h-64 w-full bg-slate-800">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name} - ${member.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                  {member.role}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                <p className="text-sm text-gray-300 italic flex-grow">
                  &ldquo;{member.bio}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}