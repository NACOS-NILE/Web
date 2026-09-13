const disciplines = [
  {
    code: "CSC",
    name: "Computer Science",
    copy: "Algorithms, data structures, operating systems — the foundations everything else is built on.",
  },
  {
    code: "SEN",
    name: "Software Engineering",
    copy: "Building systems people actually use. Design patterns, version control, and shipping code that doesn't break.",
  },
  {
    code: "CYB",
    name: "Cyber Security",
    copy: "Penetration testing, network defence, cryptography. Keeping systems safe when they really don't want to be.",
  },
  {
    code: "IFT",
    name: "Information Technology",
    copy: "Networking, cloud infrastructure, and the plumbing that keeps the internet running.",
  },
  {
    code: "IFS",
    name: "Information Systems",
    copy: "Where business meets technology — databases, system analysis, and making data work for decisions.",
  },
  {
    code: "DTS",
    name: "Data Science",
    copy: "Statistics, machine learning, and visualisation. Finding patterns in noise and turning them into something useful.",
  },
];

export function About() {
  return (
    <section id="about" className="about section-wrap">
      <div className="about-intro">
        <p className="eyebrow">A CAMPUS. A COMMUNITY. COUNTLESS POSSIBILITIES.</p>
        <h2>
          More than a course.<br />A whole world of <span>possibility.</span>
        </h2>
        <p>
          NACOS Nile exists to make sure computing students at Nile University
          don&rsquo;t figure things out alone. We run workshops, connect people across
          departments, and build the kind of community that lasts beyond
          graduation.
        </p>
        <p>
          Whether you&rsquo;re debugging your first C program or deploying your final-year
          project, there&rsquo;s someone here who&rsquo;s been through it and will help you
          get there.
        </p>
      </div>
      <div id="disciplines" className="disciplines">
        <div className="disciplines-title">
          <h3>Six disciplines. One community.</h3>
          <span>Find where you belong</span>
        </div>
        <div className="discipline-grid">
          {disciplines.map((d) => (
            <details key={d.code} className="discipline">
              <summary>
                <span className="discipline-code">{d.code}</span>
                <span>{d.name}</span>
                <span className="expand" aria-hidden="true">+</span>
              </summary>
              <p>{d.copy}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
