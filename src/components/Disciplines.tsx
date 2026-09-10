export default function Disciplines() {
  const list = [
    { id: "01", icon: "{ }", title: "Computer Science", desc: "Foundations, algorithms, systems and the ideas behind modern computing." },
    { id: "02", icon: "</>", title: "Software Engineering", desc: "Turn problems into reliable, scalable software that people can use." },
    { id: "03", icon: "⌁", title: "Cyber Security", desc: "Think defensively, understand threats and build more secure digital systems." },
    { id: "04", icon: "▦", title: "Information Technology", desc: "Connect people, infrastructure and technology to keep organisations moving." },
    { id: "05", icon: "◌", title: "Information Systems", desc: "Bridge technology, processes and people to solve real organisational needs." },
    { id: "06", icon: "∿", title: "Data Science", desc: "Explore data, find patterns and turn information into better decisions." },
  ];

  return (
    <section className="py-28 bg-[#f3f6fb]" id="disciplines">
      <div className="max-w-[1180px] w-[calc(100%-40px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[0.72rem] font-bold tracking-[0.18em] text-[#667085] uppercase mb-2">02 / DISCIPLINES</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0f172a]">Find your <span className="text-[#274193]">technical lane.</span></h2>
          </div>
          <p className="text-[#667085] max-w-xs">Six disciplines. Different strengths. One community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((item) => (
            <article key={item.id} className="relative p-7 rounded-2xl bg-white border border-[rgba(39,65,147,0.09)] hover:-translate-y-1.5 transition-transform shadow-xs">
              <span className="absolute top-6 right-6 text-xs font-bold text-[#a0aac0]">{item.id}</span>
              <div className="w-12 h-12 rounded-xl bg-[#edf3ff] text-[#274193] font-bold flex items-center justify-center mb-12">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">{item.title}</h3>
              <p className="text-sm text-[#667085]">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}