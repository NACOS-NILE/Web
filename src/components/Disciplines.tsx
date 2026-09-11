import DisciplineExplorer from "@/components/DisciplineExplorer";

export default function Disciplines() {
  return (
    <section
      className="disciplines section scroll-reveal"
      id="disciplines"
    >
      <div className="container">
        <div className="section-top">
          <div>
            <div className="eyebrow">
              <span />
              THE COMPUTING COMMUNITY
            </div>

            <h2>
              Six disciplines.
              <br />
              <em>One shared space.</em>
            </h2>
          </div>

          <p>
            Different paths through computing, connected by one student
            community. Explore what each discipline is about.
          </p>
        </div>

        <DisciplineExplorer />
      </div>
    </section>
  );
}
