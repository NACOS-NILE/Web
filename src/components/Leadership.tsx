import Image from "next/image";
import { executives } from "@/lib/content";

const presidencyRoles = new Set(["President", "Vice President", "Secretary General"]);

export function Leadership() {
  const presidency = executives.filter((person) => presidencyRoles.has(person.role));
  const directorate = executives.filter((person) => !presidencyRoles.has(person.role));

  const executiveNumber = (name: string) => {
    const index = executives.findIndex((person) => person.name === name);
    return String(index + 1).padStart(2, "0");
  };

  return (
    <section id="leadership" className="leadership section-pad">
      <div className="section-shell">
        <div className="section-heading leadership-heading">
          <p className="eyebrow">07 / Leadership</p>
          <h2>THE PEOPLE DOING THE WORK.</h2>
          <p>
            The executive council coordinates student welfare, training,
            communications, finance, social activity and the day to day work
            of the chapter.
          </p>
        </div>

        <div className="leadership-group leadership-group-presidency">
          <div className="leadership-group-head">
            <div>
              <span>01</span>
              <p>The Presidency</p>
            </div>
            <small>Chapter leadership and administration</small>
          </div>

          <div className="presidency-grid">
            {presidency.map((person) => {
              const isPresident = person.role === "President";

              return (
                <article
                  className={`presidency-card${isPresident ? " presidency-card-featured" : ""}`}
                  key={person.name}
                >
                  <div className="presidency-image">
                    <Image
                      src={person.image}
                      alt={`Portrait of ${person.name}, ${person.role}`}
                      fill
                      sizes="(max-width: 760px) 42vw, (max-width: 1200px) 30vw, 16vw"
                      style={{ objectPosition: person.position }}
                    />
                  </div>

                  <div className="presidency-copy">
                    <span className="leader-number">{executiveNumber(person.name)}</span>
                    <p>{person.role}</p>
                    <h3>{person.name}</h3>
                    <small>{person.bio}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="leadership-group leadership-group-directorate">
          <div className="leadership-group-head">
            <div>
              <span>02</span>
              <p>The Directorate</p>
            </div>
            <small>Training, welfare, finance, communications and student life</small>
          </div>

          <div className="directorate-grid">
            {directorate.map((person) => (
              <article className="director-card" key={person.name}>
                <div className="director-image">
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}, ${person.role}`}
                    fill
                    sizes="(max-width: 760px) 50vw, (max-width: 1200px) 33vw, 17vw"
                    style={{ objectPosition: person.position }}
                  />
                </div>

                <div className="director-copy">
                  <span>{executiveNumber(person.name)}</span>
                  <p>{person.role}</p>
                  <h3>{person.name}</h3>
                  <small>{person.bio}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
