import Image from "next/image";

const executives = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    image: "/excos-pics/president.jpg",
    bio: "Passionate about building active student communities.",
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    image: "/excos-pics/vp.jpg",
    bio: "Advocating for student welfare and academic excellence.",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    image: "/excos-pics/sg.jpg",
    bio: "Keeping the engines running smoothly.",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    image: "/excos-pics/fc.jpg",
    bio: "Making the important financial decisions.",
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    image: "/excos-pics/pro.jpg",
    bio: "Applying creativity to communication.",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development (DTD)",
    image: "/excos-pics/dtd.jpg",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    image: "/excos-pics/provost.jpg",
    bio: "Managing the day-to-day operations of NACOS Nile.",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    image: "/excos-pics/socials.jpg",
    bio: "Prioritizing social activities and events.",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    image: "/excos-pics/welfare.jpg",
    bio: "Your well-being is my priority.",
  },
];

export default function Excos() {
  return (
    <section id="excos" className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#274193]/15 bg-[#274193]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#274193]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#274193]" />
            Leadership
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0d1733] md:text-5xl">
            Meet the Executive Council
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Meet the student leaders driving the NACOS Nile community forward
            through collaboration, innovation, and student engagement.
          </p>
        </div>

        {/* Executive cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((executive) => (
            <article
              key={executive.name}
              className="group overflow-hidden rounded-2xl border border-[#dfe7f7] bg-white shadow-[0_10px_30px_rgba(39,65,147,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#274193]/30 hover:shadow-[0_18px_40px_rgba(39,65,147,0.12)]"
            >
              {/* Photo */}
              <div className="relative aspect-[4/4.2] overflow-hidden bg-[#eef3ff]">
                <Image
                  src={executive.image}
                  alt={`${executive.name} - ${executive.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="mb-4 h-1 w-10 rounded-full bg-[#274193] transition-all duration-300 group-hover:w-14" />

                <h3 className="text-lg font-semibold text-[#0d1733]">
                  {executive.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#274193]">
                  {executive.role}
                </p>

                      <p className="mt-3 text-sm italic leading-relaxed text-slate-500">
                          &quot;{executive.bio}&quot;
                      </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}