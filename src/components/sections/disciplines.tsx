import { disciplines } from "@/content/disciplines";

export function Disciplines() {
  return (
    <section
      id="disciplines"
      className="relative z-[2] border-y border-white/[.07] bg-surface/55 backdrop-blur-[6px]"
    >
      <div className="mx-auto w-[min(100%-2.5rem,1240px)]">
        <ul className="disc-strip">
          {disciplines.map((d) => (
            <li
              key={d.code}
              className="p-[1.15rem_.9rem] transition-colors duration-200 [transition-timing-function:var(--ease)] hover:bg-signal/[.07]"
            >
              <span className="font-mono mb-[.4rem] block text-[.62rem] tracking-[.12em] text-signal">
                {d.code}
              </span>
              <span className="text-[.86rem] font-medium leading-[1.25] text-[#C9D5EC]">{d.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
