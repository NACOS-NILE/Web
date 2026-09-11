import Image from "next/image";

const excos = [
  {
    photo: "/excos-pics/president.jpg",
    name: "Zikora Fortune Nwafor",
    role: "President",
    bio: "Passionate about building active student communities.",
  },
  {
    photo: "/excos-pics/vp.jpg",
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    bio: "Advocating for student welfare and academic excellence.",
  },
  {
    photo: "/excos-pics/sg.jpg",
    name: "Sheila Jato",
    role: "Secretary General",
    bio: "Keeping the engines running smoothly.",
  },
  {
    photo: "/excos-pics/fc.jpg",
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    bio: "Making the important financial decisions.",
  },
  {
    photo: "/excos-pics/pro.jpg",
    name: "Elvis Francis",
    role: "Public Relations Officer",
    bio: "Applying creativity to communication.",
  },
  {
    photo: "/excos-pics/dtd.jpg",
    name: "Ivoke Kamsi",
    role: "Director of Training & Development",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
  },
  {
    photo: "/excos-pics/provost.jpg",
    name: "Zubaida Abdulazeez",
    role: "Provost",
    bio: "Managing the day-to-day operations of NACOS Nile.",
  },
  {
    photo: "/excos-pics/socials.jpg",
    name: "Saidat Ahmed",
    role: "Director of Socials",
    bio: "Prioritizing social activities and events.",
  },
  {
    photo: "/excos-pics/welfare.jpg",
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    bio: "Your well-being is my priority.",
  },
];

export default function Excos() {
  const president = excos[0];
  const rest = excos.slice(1);

  return (
    <section id="excos" className="section-padding bg-gray-50" aria-label="Executive Council">
      <div className="container-nacos">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Our Leaders</p>
          <h2 className="section-heading text-balance">
            Meet the Executive Council.
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            A dedicated team of student leaders working to serve the NACOS
            Nile community and drive meaningful impact across every computing
            discipline.
          </p>
        </div>

        {/* Featured President */}
        <div className="mb-8">
          <div className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:border-nacos-300 transition-all duration-300">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Photo */}
              <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto md:min-h-[320px] bg-nacos-100">
                <Image
                  src={president.photo}
                  alt={`Portrait of ${president.name}, ${president.role} of NACOS Nile`}
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              {/* Info */}
              <div className="md:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-nacos-500 mb-3">
                  President
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-nacos-900 mb-3">
                  {president.name}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  {president.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other excos grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((exco) => (
            <div
              key={exco.name}
              className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:border-nacos-300 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] bg-nacos-100 overflow-hidden">
                <Image
                  src={exco.photo}
                  alt={`Portrait of ${exco.name}, ${exco.role} of NACOS Nile`}
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
              {/* Info */}
              <div className="p-5">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-nacos-500 mb-1.5 block">
                  {exco.role}
                </span>
                <h3 className="text-sm font-bold text-nacos-900 mb-1.5 leading-snug">
                  {exco.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {exco.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}