import { CountUp } from "./CountUp";
import { ecosystem, nationalFacts } from "@/lib/content";

export function Ecosystem() {
  return (
    <section id="network" className="ecosystem section-pad" aria-labelledby="ecosystem-title">
      <div className="section-shell">
        <div className="ecosystem-heading ecosystem-heading-v4">
          <div>
            <p className="eyebrow light">02 / The wider network</p>
            <h2 id="ecosystem-title">FROM CAMPUS TO A NATIONAL COMPUTING COMMUNITY.</h2>
          </div>
          <p>NACOS Nile is the local chapter at Nile University. NACOS National connects local chapters across Nigeria and identifies the Nigeria Computer Society as its parent professional body.</p>
        </div>

        <div className="national-scale national-scale-v4" aria-label="Figures reported by NACOS National">
          <div className="national-scale-intro">
            <span>Reported by NACOS National</span>
            <p>A sense of the wider association that local chapters belong to.</p>
          </div>
          {nationalFacts.map((fact, index) => (
            <div className="national-fact" key={fact.label}>
              <span>0{index + 1}</span>
              <strong><CountUp end={fact.value} suffix={fact.suffix} /></strong>
              <p>{fact.label}</p>
            </div>
          ))}
        </div>

        <div className="ecosystem-flow-v4">
          {ecosystem.map((item, index) => (
            <a className="ecosystem-flow-item" href={item.href} target="_blank" rel="noreferrer" key={item.name}>
              <span className="ecosystem-number">0{index + 1}</span>
              <div>
                <small>{item.role}</small>
                <h3>{item.name}</h3>
                <p>{item.copy}</p>
              </div>
              <span className="ecosystem-flow-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <div className="ecosystem-proof">
          <span>How it connects</span>
          <p>The chapter&apos;s official site documents its 2023 establishment and WhatsApp student community. Its LinkedIn page documents workshops and collaboration with NUN Women In Tech. NACOS National documents its parent relationship with NCS.</p>
        </div>
      </div>
    </section>
  );
}
