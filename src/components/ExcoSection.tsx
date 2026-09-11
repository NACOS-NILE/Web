import Image from "next/image";

const excos = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    image: "/excos-pics/president.jpg",
    bio: "Leading community initiatives, industry partnerships, and student advocacy across the faculty.",
    objectPosition: "object-top",
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    image: "/excos-pics/vp.jpg",
    bio: "Overseeing student academic welfare, departmental coordination, and project execution.",
    objectPosition: "object-top",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    image: "/excos-pics/sg.jpg",
    bio: "Managing chapter documentation, meeting administration, and inter-level student communications.",
    objectPosition: "object-top",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    image: "/excos-pics/fc.jpg",
    bio: "Directing treasury, budgeting, sponsorships, and transparent departmental accounting.",
    objectPosition: "object-top",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    image: "/excos-pics/pro.jpg",
    bio: "Handling external relations, announcements, event broadcasts, and media outreach.",
    objectPosition: "object-top",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    image: "/excos-pics/dtd.jpg",
    bio: "Curating hands-on workshops, peer tutorial circles, and hackathon technical prep.",
    objectPosition: "object-top",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    image: "/excos-pics/provost.jpg",
    bio: "Ensuring discipline, adherence to constitution, and smooth logistics during faculty events.",
    objectPosition: "object-[center_20%]",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    image: "/excos-pics/socials.jpg",
    bio: "Organizing social mixers, tech dinners, gaming competitions, and community gatherings.",
    objectPosition: "object-[center_25%]",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    image: "/excos-pics/welfare.jpg",
    bio: "Dedicated to student health, wellbeing, academic aid, and inclusive student support.",
    objectPosition: "object-top",
  },
];

export default function ExcoSection() {
  return (
    <section id="excos" className="py-28 relative scroll-mt-16 bg-[#070e24]/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Meet the Executive Team
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Your elected student representatives working to support computing students at Nile University of Nigeria.
          </p>
        </div>

        {/* Exco Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {excos.map((exco) => (
            <div
              key={exco.name}
              className="glass-card rounded-2xl overflow-hidden glass-card-hover border border-slate-800 hover:border-blue-500/50 group flex flex-col justify-between"
            >
              {/* Photo Area with consistent aspect ratio and custom focal points */}
              <div className="relative w-full aspect-[4/3.8] bg-[#0c142b] overflow-hidden">
                <Image
                  src={exco.image}
                  alt={`${exco.name} - ${exco.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover ${exco.objectPosition} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091024] via-transparent to-transparent opacity-90" />
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {exco.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mb-3">{exco.role}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exco.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Nile University of Nigeria</span>
                  <span className="text-blue-400 font-mono text-[11px]">NACOS Nile</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
