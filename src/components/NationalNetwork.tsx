const nationalFacts = [
  { value: "1M+", label: "members reported nationally" },
  { value: "250+", label: "local chapters" },
  { value: "6", label: "geopolitical zones" },
] as const;

export function NationalNetwork() {
  return (
    <section id="network" className="national-network section-pad" aria-labelledby="national-network-title">
      <div className="section-shell national-network-shell">
        <div className="national-network-copy">
          <p className="eyebrow light">02 / The wider network</p>
          <h2 id="national-network-title">ONE NILE CHAPTER. PART OF SOMETHING MUCH BIGGER.</h2>
          <p>
            NACOS National is the umbrella body for computing and IT related students across Nigeria.
            Its official site reports about one million members in more than 250 local chapters across
            the country&apos;s six geopolitical zones.
          </p>
          <a href="https://nacos.org.ng/" target="_blank" rel="noreferrer">
            Visit NACOS National <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="national-facts" aria-label="NACOS National figures">
          {nationalFacts.map((fact, index) => (
            <div className="national-fact" key={fact.label}>
              <span>0{index + 1}</span>
              <strong>{fact.value}</strong>
              <p>{fact.label}</p>
            </div>
          ))}
        </div>

        <div className="national-network-note">
          <span>NACOS NATIONAL</span>
          <p>Towards Advanced Computing</p>
        </div>
      </div>
    </section>
  );
}
