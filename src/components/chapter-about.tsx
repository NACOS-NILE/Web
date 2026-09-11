import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const disciplines = [
  "Computer Science",
  "Software Engineering",
  "Cyber Security",
  "Information Technology",
  "Information Systems",
  "Data Science",
];

export function ChapterAbout() {
  return (
    <section id="about" className="chapter-about" aria-labelledby="about-title">
      <div className="chapter-about-inner">
        <div className="chapter-about-intro">
          <h2 id="about-title">
            Six disciplines.
            <br />
            One community.
          </h2>
          <p>
            We’re the Nile University chapter of the Nigeria Association of
            Computing Students (NACOS), connecting students across computing to
            learn, build, and grow together.
          </p>
        </div>

        <div className="chapter-about-purpose">
          <div>
            <h3>Our mission</h3>
            <p>
              Help students develop practical skills, share knowledge, and
              connect with opportunities in technology.
            </p>
          </div>
          <div>
            <h3>Our vision</h3>
            <p>
              A community of skilled, collaborative computing professionals
              shaping technology in Nigeria and beyond.
            </p>
          </div>
        </div>

        <div className="chapter-about-disciplines">
          <h3>Our core disciplines</h3>
          <ScrollVelocityContainer className="discipline-velocity">
            <ScrollVelocityRow baseVelocity={2.5} direction={1}>
              {disciplines.slice(0, 3).map((discipline) => (
                <span className="discipline-velocity-item" key={discipline}>
                  {discipline}
                </span>
              ))}
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={2.5} direction={-1}>
              {disciplines.slice(3).map((discipline) => (
                <span className="discipline-velocity-item" key={discipline}>
                  {discipline}
                </span>
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </div>
    </section>
  );
}
