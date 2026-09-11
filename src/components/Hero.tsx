import ParticleBackground from "@/components/ParticleBackground";
import TypingEffect from "@/components/TypingEffect";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-grid-lines" />
      <ParticleBackground />

      <div className="container">
        <div className="hero-eyebrow">
          Nile University of Nigeria Chapter · Est. 1993 National Movement
        </div>

        <h1 className="hero-title">
          <span className="line"><span>Towards</span></span>
          <span className="line"><span><span className="highlight">Advanced</span></span></span>
          <span className="line"><span>Computing.</span></span>
        </h1>

        <p className="hero-subtitle">
          <TypingEffect
            text="NACOS Nile — the Nile University chapter of Africa's largest computing student body. We develop. We create. We build capacity."
            speed={50}
            delay={1000}
          />
        </p>

        <div className="hero-actions">
          <a href="#community" className="btn-primary">
            Join NACOS
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#pillars" className="btn-secondary">
            What We Do
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-number">1M+</div>
          <div className="hero-stat-label">NACOSites Nationwide</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-number">250</div>
          <div className="hero-stat-label">Local Chapters</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-number">37</div>
          <div className="hero-stat-label">States + FCT</div>
        </div>
      </div>

      <div className="hero-flow">
        <div className="wave wave-1">
          <svg viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 200V80C240 120 480 40 720 80C960 120 1200 40 1440 80C1680 120 1920 40 2160 80C2400 120 2640 40 2880 80V200H0Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="wave wave-2">
          <svg viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 200V95C240 130 480 55 720 95C960 130 1200 55 1440 95C1680 130 1920 55 2160 95C2400 130 2640 55 2880 95V200H0Z" fill="#3b5cc9" />
          </svg>
        </div>
        <div className="wave wave-3">
          <svg viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 200V70C240 110 480 30 720 70C960 110 1200 30 1440 70C1680 110 1920 30 2160 70C2400 110 2640 30 2880 70V200H0Z" fill="#274193" />
          </svg>
        </div>
      </div>
    </section>
  );
}
