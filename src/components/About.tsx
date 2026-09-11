export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-label">About NACOS Nile</div>
            <h2 className="about-title">The Largest and Most Organised Student Body in Africa</h2>
            <p className="about-text">
              NACOS is the umbrella body for students studying <span className="about-strong">Computer Science, Software Engineering, Cyber Security, Information Technology, Information Systems and Data Science</span> across Nigeria — present in almost all tertiary institutions, in every state and the FCT, across all six geo-political zones.
            </p>
            <p className="about-text">
              The <span className="about-strong">NACOS Nile chapter</span> carries that legacy at Nile University of Nigeria. We are NACOSites — students who develop, create, and build capacity, from Abuja to the world.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="about-feature-text">6 Computing Disciplines United</div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div className="about-feature-text">33+ Years of Legacy Since 1993</div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="about-feature-text">Certifications &amp; Achievements</div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="about-feature-text">National Recognition &amp; Support</div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-visual-card">
              <div className="about-visual-quote">
                One million computing minds, organised into one force for the advancement of computing in Nigeria.
              </div>
              <div className="about-visual-footer">
                <div className="about-visual-motto">Towards Advanced Computing</div>
                <div className="about-visual-author">The NACOS Creed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
