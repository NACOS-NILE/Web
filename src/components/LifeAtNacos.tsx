import Image from "next/image";
import { Arrow } from "./Arrow";
import { AcademicCapIcon, CodeIcon, UserGroupIcon } from "./Icons";

export function LifeAtNacos() {
  return (
    <section
      id="life"
      tabIndex={-1}
      className="life section-space"
      aria-labelledby="life-title"
    >
      <div className="wrap">
        <div className="section-heading life-heading" data-reveal>
          <div className="life-heading-top">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              THE MOMENTS IN BETWEEN
            </p>
            <div className="life-header-kicker desktop-only" aria-hidden="true">
              <span>STUDENTS</span> × <span>TECHNOLOGY</span> × <span>COMMUNITY</span>
              <br />
              <small>A BRIGHTER TOMORROW</small>
            </div>
          </div>
          <div>
            <h2 id="life-title">
              Life at <span className="blue-text">NACOS.</span>
            </h2>
            <p>
              More than code. A community of curious minds, lasting friendships, and real impact.
            </p>
          </div>
        </div>

        {/* 3 Signature Pillar Cards */}
        <div className="life-pillars-grid" data-reveal-stagger>
          {/* Card 1: Where we learn */}
          <article className="life-pillar-card" data-reveal>
            <div className="life-pillar-media">
              <Image
                src="/community/workshop-attendees.jpg"
                alt="Students attending a NACOS Nile workshop"
                width={1200}
                height={500}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="life-pillar-img"
              />
              <div className="life-card-top-badges" aria-hidden="true">
                <span className="badge-left">Ideas · Students · Impact</span>
                <span className="badge-right">Better Builders Brighter Nigeria •</span>
              </div>
              <div className="life-card-overlay">
                <div className="life-card-info">
                  <div className="life-card-icon-wrap" aria-hidden="true">
                    <AcademicCapIcon />
                  </div>
                  <div>
                    <h3>Where we <span className="blue-text">learn.</span></h3>
                    <p>Workshops. Mentorship. New perspectives.</p>
                  </div>
                </div>
                <a href="#programs" className="life-card-arrow" aria-label="Explore learning programs">
                  <Arrow diagonal={false} />
                </a>
              </div>
            </div>
          </article>

          {/* Card 2: Where we build */}
          <article className="life-pillar-card" data-reveal>
            <div className="life-pillar-media">
              <Image
                src="/community/workshop-presenter.webp"
                alt="A NACOS Nile workshop presenter demonstrating a technical tool on a projected screen"
                width={1200}
                height={500}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="life-pillar-img"
              />
              <div className="life-card-top-badges" aria-hidden="true">
                <span className="badge-left">Good Software A Brighter Nigeria •</span>
                <span className="badge-right">&lt;/&gt; STUDENTS BUILD TOMORROW</span>
              </div>
              <div className="life-card-overlay">
                <div className="life-card-info">
                  <div className="life-card-icon-wrap" aria-hidden="true">
                    <CodeIcon />
                  </div>
                  <div>
                    <h3>Where we <span className="blue-text">build.</span></h3>
                    <p>Hackathons. Projects. Real-world impact.</p>
                  </div>
                </div>
                <a href="#programs" className="life-card-arrow" aria-label="Explore build initiatives">
                  <Arrow diagonal={false} />
                </a>
              </div>
            </div>
          </article>

          {/* Card 3: Where we connect */}
          <article className="life-pillar-card" data-reveal>
            <div className="life-pillar-media">
              <Image
                src="/community/friendship.jpg"
                alt="NACOS Nile computing students smiling and connecting together outdoors"
                width={1200}
                height={500}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="life-pillar-img"
              />
              <div className="life-card-top-badges" aria-hidden="true">
                <span className="badge-left">SAME PASSION BRIGHTER TOMORROW</span>
                <span className="badge-right">People · Code · Progress •</span>
              </div>
              <div className="life-card-overlay">
                <div className="life-card-info">
                  <div className="life-card-icon-wrap" aria-hidden="true">
                    <UserGroupIcon />
                  </div>
                  <div>
                    <h3>Where we <span className="blue-text">connect.</span></h3>
                    <p>Friends. Ideas. A stronger tomorrow.</p>
                  </div>
                </div>
                <a href="#community" className="life-card-arrow" aria-label="Join our community">
                  <Arrow diagonal={false} />
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Action Button */}
        <div className="life-cta-row" data-reveal>
          <a href="#community" className="button button-blue life-cta-btn">
            <span>Be Part of It</span>
            <Arrow diagonal={false} />
          </a>
        </div>

        {/* Section Divider */}
        <div className="section-divider-banner" aria-hidden="true">
          <span className="divider-line" />
          <span className="divider-label">SAME PEOPLE. A BRIGHTER TOMORROW.</span>
          <span className="divider-line" />
        </div>


      </div>
    </section>
  );
}
