import Image from "next/image";

const excos = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    image: "/excos-pics/president.jpg",
    bio: "Passionate about building active student communities.",
    badge: "Executive Head",
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    image: "/excos-pics/vp.jpg",
    bio: "Advocating for student welfare and academic excellence.",
    badge: "Executive Vice",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    image: "/excos-pics/sg.jpg",
    bio: "Keeping the engines running smoothly.",
    badge: "Administration",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    image: "/excos-pics/fc.jpg",
    bio: "Making the important financial decisions.",
    badge: "Finance & Treasury",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    image: "/excos-pics/pro.jpg",
    bio: "Applying creativity to communication.",
    badge: "Communications",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development (DTD)",
    image: "/excos-pics/dtd.jpg",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
    badge: "Technical Director",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    image: "/excos-pics/provost.jpg",
    bio: "Managing the day-to-day operations of NACOS Nile.",
    badge: "Operations",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    image: "/excos-pics/socials.jpg",
    bio: "Prioritizing social activities and events.",
    badge: "Student Life",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    image: "/excos-pics/welfare.jpg",
    bio: "Your well-being is my priority.",
    badge: "Student Support",
  },
];

export default function ExcoSection() {
  return (
    <section id="leadership" className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-700/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
            <span>EXECUTIVE COUNCIL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Meet the Leaders Guiding NACOS Nile
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Dedicated student leaders committed to serving, representing, and elevating every computing student at Nile University of Nigeria.
          </p>
        </div>

        {/* Exco Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {excos.map((exco) => (
            <div
              key={exco.name}
              className="glass-card rounded-2xl overflow-hidden glass-card-hover border border-blue-900/30 group flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-[4/4] bg-[#0c142b] overflow-hidden">
                <Image
                  src={exco.image}
                  alt={`${exco.name} - ${exco.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#060b18]/80 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                    {exco.badge}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-[#070e24]/70">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {exco.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mb-3">{exco.role}</p>
                  <blockquote className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-blue-500/40 pl-3">
                    &ldquo;{exco.bio}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span>Nile University Chapter</span>
                  <span className="text-blue-400/80 font-mono text-[11px]">NACOS EXCO</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
