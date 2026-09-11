import Image from "next/image";
import { EXCO_MEMBERS } from "@/data/excos";

export default function Excos() {
  return (
    <section className="py-28 bg-[#f3f6fb]" id="excos">
      <div className="max-w-[1180px] w-[calc(100%-40px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[0.72rem] font-bold tracking-[0.18em] text-[#667085] uppercase mb-2">04 / EXECUTIVE COUNCIL</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0f172a]">Meet the people <span className="text-[#274193]">moving us forward.</span></h2>
          </div>
          <p className="text-[#667085] max-w-xs">Student leaders building a more active, connected NACOS Nile.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXCO_MEMBERS.map((member) => (
            <article
              key={member.id}
              className={`rounded-3xl bg-white overflow-hidden border border-[rgba(39,65,147,0.09)] hover:-translate-y-1.5 transition-transform ${
                member.isFeatured ? "shadow-xl" : ""
              }`}
            >
              <div className="relative aspect-[1/0.92] bg-gradient-to-br from-[#dfe8f8] to-[#b8c8e5]">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[0.56rem] font-bold text-white bg-[#0d1733]/80 backdrop-blur-md border border-white/10 tracking-widest">
                  {member.role}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#0f172a]">{member.name}</h3>
                <p className="text-xs text-[#667085] mt-1">{member.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}