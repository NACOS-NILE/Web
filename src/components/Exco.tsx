import Image from "next/image";

const executives = [
  {
    image: "president.jpg",
    name: "Zikora Fortune Nwafor",
    role: "President",
    bio: "Passionate about building active student communities.",
  },
  {
    image: "vp.jpg",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    bio: "Advocating for student welfare and academic excellence.",
  },
  {
    image: "sg.jpg",
    name: "Sheila Jato",
    role: "Secretary General",
    bio: "Keeping the engines running smoothly.",
  },
  {
    image: "fc.jpg",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    bio: "Making the important financial decisions.",
  },
  {
    image: "pro.jpg",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    bio: "Applying creativity to communication.",
  },
  {
    image: "dtd.jpg",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
  },
  {
    image: "provost.jpg",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    bio: "Managing the day-to-day operations of NACOS Nile.",
  },
  {
    image: "socials.jpg",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    bio: "Prioritizing social activities and events.",
  },
  {
    image: "welfare.jpg",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    bio: "Your well-being is my priority.",
  },
];

export default function Exco() {
  return (
    <section
      id="excos"
      className="bg-white px-6 py-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#274193]">
              Meet the team
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0d1733] sm:text-5xl">
              The people behind
              <span className="block text-slate-400">
                NACOS Nile.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Meet the Executive Council working to make the NACOS Nile
            experience better for every computing student.
          </p>

        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {executives.map((person) => (
            <article
              key={person.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                <Image
                  src={`/excos-pics/${person.image}`}
                  alt={`${person.name}, ${person.role}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1733]/70 via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                    {person.role}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0d1733]">
                  {person.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {person.bio}
                </p>
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
