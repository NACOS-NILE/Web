const programs = [
  {
    label: "LEARN BY DOING",
    title: "Bootcamps & workshops",
    copy: "Week-long dives into specific tools and languages — React, Python, Figma, whatever students actually need. Led by people in the department who've shipped real projects.",
  },
  {
    label: "MAKE SOMETHING MATTER",
    title: "Hackathons & Tech Week",
    copy: "48 hours. A team. A problem statement. Build something from scratch and present it to people who work in the industry. Past projects have gone on to become startup MVPs.",
  },
  {
    label: "FIND YOUR NEXT STEP",
    title: "Mentorship & career talks",
    copy: "Software engineers, data scientists, and security analysts who graduated from Nile come back to talk about what actually matters — portfolios, interviews, and the first year on the job.",
  },
  {
    label: "FIGURE IT OUT TOGETHER",
    title: "Tutorials & study groups",
    copy: "Calculus at 8am is survivable when you know who to text at midnight. Peer-led sessions for the modules that don't click the first time through.",
  },
];

export function Initiatives() {
  return (
    <section id="events" className="programs">
      <div className="section-wrap">
        <p className="eyebrow">OUTSIDE THE LECTURE HALL</p>
        <h2>
          Less watching.<br />
          <span>More doing.</span>
        </h2>
        <p className="section-copy">
          The stuff that actually makes you better at what you&rsquo;re studying.
        </p>
        <div className="program-grid">
          {programs.map((p, i) => (
            <a href="#community" className="program" key={p.title}>
              <span className="program-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="program-body">
                <span className="program-label">{p.label}</span>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="program-note">
          Event dates and registration will be shared through the community channels.
        </p>
      </div>
    </section>
  );
}
