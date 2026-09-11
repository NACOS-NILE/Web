import ExcoCard from "@/components/ExcoCard";
import { excos } from "@/data/content";

const { president, ...rest } = excos;
const council = Object.values(rest);

export default function Excos() {
  return (
    <section className="excos section scroll-reveal" id="excos">
      <div className="container">
        <div className="section-top excos-heading">
          <div>
            <div className="eyebrow">
              <span />
              LEADERSHIP
            </div>

            <h2>
              Meet the people
              <br />
              <em>behind NACOS Nile.</em>
            </h2>
          </div>

          <p>
            The executive council helping to build a stronger computing
            community at Nile University.
          </p>
        </div>

        <div className="leadership-editorial">
          <div className="president-panel">
            <ExcoCard person={president} size="large" />
          </div>

          <div className="exco-grid">
            {council.map((person) => (
              <ExcoCard key={person.role} person={person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
