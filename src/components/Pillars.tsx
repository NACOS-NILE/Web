export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="container">
        <div className="pillars-header reveal">
          <div className="section-label">What We Do</div>
          <h2 className="pillars-title">We Help Computing Students Grow Exponentially</h2>
          <p className="pillars-subtitle">
            Rooted in the{" "}
            <a
              href="/assets/NACOS-Mandate-Constitution.pdf"
              download="NACOS Constitution.pdf"
              className="mandate-link"
            >
              NACOS national mandate
            </a>
            , our chapter delivers programs that build real, lasting capacity.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-num">01</div>
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3 className="pillar-name">Seminars &amp; Bootcamps</h3>
            <p className="pillar-desc">Practical and theoretical training in programming, web, mobile, cloud and emerging technologies.</p>
          </div>

          <div className="pillar-card featured">
            <div className="pillar-num">02</div>
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 className="pillar-name">Hackathons &amp; Competitions</h3>
            <p className="pillar-desc">Hackathons and competitions that turn fast ideas into working prototypes — including our annual Tech Week.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">03</div>
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="pillar-name">Computing Education</h3>
            <p className="pillar-desc">Access to technical content — programming, networking, cyber security, data science, UI/UX and more.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
