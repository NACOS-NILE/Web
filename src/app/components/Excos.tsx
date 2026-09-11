import Image from "next/image";

const executives = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    image: "/excos-pics/president.jpg",
    description: "Passionate about building active student communities.",
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    image: "/excos-pics/vp.jpg",
    description: "Advocating for student welfare and academic excellence.",
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    image: "/excos-pics/sg.jpg",
    description: "Keeping the engines running smoothly.",
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    image: "/excos-pics/fc.jpg",
    description: "Making the important financial decisions.",
  },
  {
    name: "Elvis Francis",
    role: "PRO",
    image: "/excos-pics/pro.jpg",
    description: "Applying creativity to communication.",
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    image: "/excos-pics/dtd.jpg",
    description:
      "Driving technical growth and leading coding workshops for Nile computing students.",
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    image: "/excos-pics/provost.jpg",
    description: "Managing the day-to-day operations of NACOS Nile.",
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    image: "/excos-pics/socials.jpg",
    description: "Prioritizing social activities and events.",
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    image: "/excos-pics/welfare.jpg",
    description: "Your well-being is my priority.",
  },
];

export default function Excos() {
  return (
    <section
      id="excos"
      aria-labelledby="excos-heading"
      className="relative overflow-hidden bg-[#0d1733] py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-0 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Leadership
            </span>
          </div>

          <h2
            id="excos-heading"
            className="text-balance text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
          >
            Meet the team behind
            <span className="block text-slate-400">
              NACOS Nile.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            The executive council helps shape the NACOS Nile experience,
            supporting students, driving initiatives, and building a stronger
            computing community.
          </p>
        </div>

        {/* Executive grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((executive, index) => (
            <article
              key={executive.name}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-blue-950/20 ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#17264a]">
                <Image
                  src={executive.image}
                  alt={`${executive.name}, ${executive.role}`}
                  fill
                  className={`object-cover object-center grayscale-[15%] transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0 ${
  executive.role === "Director of Socials"
    ? "-rotate-90"
    : executive.role === "Provost"
      ? "rotate-90"
      : ""
}`}
                />

                {/* Photo overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0d1733] via-transparent to-transparent opacity-80"
                />

                <span
  className={`absolute left-5 rounded-full border border-white/10 bg-[#0d1733]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-200 backdrop-blur-md ${
    executive.role === "Director of Training & Development"
      ? "top-auto bottom-5"
      : "top-5"
  }`}
>
  {executive.role}
</span>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {executive.name}
                </h3>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-blue-300">
                  {executive.role}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {executive.description}
                </p>

                <div
                  aria-hidden="true"
                  className="mt-5 h-px w-10 bg-blue-500/30 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-400/60"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}