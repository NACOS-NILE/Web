const disciplines = [
  "Computer Science",
  "Software Engineering",
  "Cyber Security",
  "Information Technology",
  "Information Systems",
  "Data Science",
];

const initiatives = [
  {
    title: "Coding Bootcamps & Workshops",
    description:
      "Hands-on workshops that turn curiosity into practical software skills and confidence.",
  },
  {
    title: "Hackathons & Tech Week",
    description:
      "Creative problem-solving challenges that connect students with technology, teamwork, and innovation.",
  },
  {
    title: "Mentorship & Career Talks",
    description:
      "Real-world guidance from experienced professionals and senior peers across the tech ecosystem.",
  },
];

const excos = [
  { name: "Zikora Fortune Nwafor", role: "President", image: "/excos-pics/president.jpg" },
  { name: "Abdullah Ali Ahmad", role: "Vice President", image: "/excos-pics/vp.jpg" },
  { name: "Sheila Jato", role: "Secretary General", image: "/excos-pics/sg.jpg" },
  { name: "Amira Ibrahim", role: "Financial Secretary", image: "/excos-pics/fc.jpg" },
  { name: "Elvis Francis", role: "Public Relations Officer", image: "/excos-pics/pro.jpg" },
  { name: "Ivoke Kamsi", role: "DTD", image: "/excos-pics/dtd.jpg" },
  { name: "Zubaida Abdulazeez", role: "Provost", image: "/excos-pics/provost.jpg" },
  { name: "Saidat Ahmed", role: "Director of Socials", image: "/excos-pics/socials.jpg" },
  { name: "Danielle Ekunwe", role: "Director of Welfare", image: "/excos-pics/welfare.jpg" },
];


export default function Body() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <section id="disciplines" className="w-full py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Disciplines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {disciplines.map((discipline) => (
              <div
                key={discipline}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold">{discipline}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="initiatives" className="w-full py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Initiatives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                <p>{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="excos" className="w-full py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Excos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {excos.map((exco) => (
              <div
                key={exco.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              >
                <img
                  src={exco.image}
                  alt={exco.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{exco.name}</h3>
                <p className="text-gray-600">{exco.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}