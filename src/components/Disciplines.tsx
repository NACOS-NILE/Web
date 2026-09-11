import { disciplines } from "@/lib/content";

export function Disciplines() {
  return (
    <section id="disciplines" className="disciplines section-pad">
      <div className="section-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">03 / Disciplines</p>
            <h2>SIX PATHS. ONE FACULTY.</h2>
          </div>
          <p>Nile University&apos;s Faculty of Computing brings these six areas together. NACOS gives the students inside them a shared community beyond the timetable.</p>
        </div>

        <div className="discipline-grid-v4">
          {disciplines.map((item) => (
            <article className="discipline-card-v4" key={item.name}>
              <div className="discipline-card-top">
                <span>{item.code}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.short}</p>
              <div className="discipline-note-v4">{item.note}</div>
            </article>
          ))}
        </div>

        <a className="faculty-link-v4" href="https://nileuniversity.edu.ng/faculties/faculty-of-computing-studies/" target="_blank" rel="noreferrer">
          <span>Official Faculty of Computing Studies</span><span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
