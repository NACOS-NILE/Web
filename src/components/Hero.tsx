import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src="/nacos-students-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-content section-wrap">
        <p className="eyebrow">NIGERIA ASSOCIATION OF COMPUTING STUDENTS</p>
        <h1 id="hero-title">
          Where Nile&rsquo;s<br />
          computing students<br />
          <span>come together.</span>
        </h1>
        <p className="hero-desc">
          Six disciplines. One community. Workshops, hackathons, study groups,
          and the people who make university worth showing up for.
        </p>
        <div className="hero-actions">
          <a className="button button-light" href="#community">
            Join the community <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link text-link-light" href="#events">
            See what we do <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
