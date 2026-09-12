import { Arrow } from "./Arrow";
import { OrbitalNetwork } from "./OrbitalNetwork";
import { EarthHorizon } from "./EarthHorizon";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <EarthHorizon variant="hero" />
      <div className="wrap hero-inner">
        <div className="hero-topline">
          <span className="eyebrow">
            <i className="status-dot" /> Built at Nile. Connected to the world.
          </span>
          <span className="mono hero-coordinate">
            ABUJA, NG / COMPUTING COMMUNITY
          </span>
        </div>
        <div className="hero-composition">
          <div className="hero-copy">
            <h1 id="hero-title" aria-label="Learn. Build. Grow.">
              <span>
                <span>
                  Learn<span className="period">.</span>
                </span>
              </span>
              <span>
                <span>
                  Build<span className="period">.</span>
                </span>
              </span>
              <span>
                <span className="grow-word">
                  Grow<span className="period">.</span>
                </span>
              </span>
            </h1>
            <p className="hero-description">
              Your tech community at Nile.
              <br />A home for Nile’s computing students.
            </p>
            <div className="hero-actions">
              <a className="button button-blue" href="#community">
                Join Community <Arrow diagonal />
              </a>
              <a className="text-link" href="#programs">
                Explore Programs <Arrow />
              </a>
            </div>
            <p className="hero-community-note">
              <strong>6</strong> computing disciplines <span />{" "}
              <strong>1</strong> community
            </p>
          </div>
          <OrbitalNetwork />
        </div>
        <div className="hero-bottom">
          <a href="#about" className="scroll-cue">
            <span>↓</span> A little further. A lot to discover.
          </a>
          <span className="mono">STUDENT IDEAS. SHARED AMBITION.</span>
        </div>
      </div>
    </section>
  );
}
