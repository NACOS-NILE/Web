import AnimatedStat from "@/components/AnimatedStat";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" />
      <div className="hero-logo-bg" aria-hidden="true" />
      <div className="hero-overlay" />

      <div className="hero-content container">
        <div className="hero-copy">
          <div className="eyebrow light">
            <span />
            NACOS NILE UNIVERSITY
          </div>

          <h1>
            Where computing
            <br />
            minds <em>come together.</em>
          </h1>

          <p>
            A community of students building skills, sharing ideas and
            shaping the future of technology at Nile University.
          </p>

          <div className="hero-actions">
            <a href="#community" className="button button-light">
              Join the Community
              <span>→</span>
            </a>

            <a href="#about" className="button button-outline">
              Discover NACOS
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <AnimatedStat value="06" label="Computing Disciplines" />
          <AnimatedStat value="2500+" label="Students" />
          <AnimatedStat value="∞" label="Possibilities" />
        </div>
      </div>
    </section>
  );
}
