import Image from "next/image";
import { institutionalLinks } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-lines" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-community-media" aria-hidden="true">
        <Image
          src="/gallery/hero-community.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 960px) 100vw, 58vw"
          quality={75}
        />
      </div>

      <div className="hero-shell">
        <div className="hero-kicker">
          <span>Nigeria Association of Computing Students</span>
          <span>Nile University Chapter</span>
          <span>Established 2023</span>
        </div>

        <div className="hero-title-wrap hero-title-v5">
          <h1>
            <span>COMPUTING</span>
            <span>IS BETTER</span>
            <span>TOGETHER.</span>
          </h1>
        </div>

        <div className="institutional-rail" aria-label="Institutional network around NACOS Nile">
          <div className="institutional-intro">
            <span>Institutional network</span>
            <p>Campus, national and professional links.</p>
          </div>
          {institutionalLinks.map((item) => (
            <a
              className="institutional-item"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.name}
            >
              <span className="institutional-logo-wrap">
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={112}
                  height={72}
                  sizes="112px"
                  unoptimized
                />
              </span>
              <span className="institutional-copy">
                <small>{item.role}</small>
                <strong>{item.name}</strong>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
