import AboutSlideshow from "@/components/AboutSlideshow";

export default function About() {
  return (
    <section className="about section scroll-reveal" id="about">
      <div className="container about-grid">
        <div className="section-heading">
          <div className="eyebrow">
            <span />
            WHO WE ARE
          </div>

          <h2>
            More than a society.
            <br />
            <em>A community.</em>
          </h2>

          <p className="about-intro">
            A student community for people exploring computing,
            technology and the possibilities that come with learning
            together.
          </p>

          <a href="#disciplines" className="text-link">
            Explore the disciplines
            <span>→</span>
          </a>
        </div>

        <AboutSlideshow />
      </div>
    </section>
  );
}
