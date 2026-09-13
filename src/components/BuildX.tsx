const points = [
  "Multiple teams can now form from the same school",
  "Any NACOSite can start a team",
  "All members of a team must be from the same school",
];

export function BuildX() {
  return (
    <section id="buildx" className="buildx">
      <div className="section-wrap">
        <p className="eyebrow">REGISTRATION EXTENDED</p>
        <h2>BuildX Nigeria 2026</h2>
        <p className="section-copy">
          Registration has been extended, and the team rule just changed:
          it&rsquo;s no longer one team per school. Any NACOSite can start a
          team, and your school can field as many as you can put together.
        </p>
        <ul className="buildx-points">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="buildx-actions">
          <a
            className="button button-light"
            href="https://hack.nacos.org.ng/BuildXNACOS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register your team <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link text-link-light"
            href="https://wa.me/2349074698186"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact the DTD to join a team <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
