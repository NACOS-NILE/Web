import Image from "next/image";
import {
  programs,
  socialLinks,
  chapterEmail,
  communityEmailHref,
} from "@/data/content";
import { Arrow } from "./Arrow";
import { DisciplineIcon } from "./DisciplineIcon";
import {
  LinkedInIcon,
  InstagramIcon,
  XTwitterIcon,
  MailIcon,
  WhatsAppIcon,
  IdCardIcon,
  UserIcon,
  MapPinIcon,
} from "./Icons";
export function About() {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="about section-space"
      aria-labelledby="about-title"
    >
      <div className="wrap about-composition">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">THIS IS NACOS NILE</p>
          <div>
            <h2 id="about-title">
              University is better
              <br />
              when you <span className="blue-text">find your people.</span>
            </h2>
          </div>
        </div>
        <div className="about-bottom" data-reveal>
          <div className="about-identity">
            <Image src="/logo.svg" alt="NACOS Nile" width={160} height={76} />
            <p>
              Your computing
              <br />
              community at Nile.
            </p>
          </div>
          <div>
            <p className="lead">
              We’re the Nile University chapter of the Nigeria Association of
              Computing Students.
            </p>
            <p>
              We bring computing students together to learn new skills, build
              projects and support each other. From your first workshop to your
              next big idea, there’s a place for you here.
            </p>
            <a className="text-link dark-link" href="#team">
              Meet the Team <Arrow diagonal />
            </a>
          </div>
        </div>
        <figure className="about-photo" data-reveal>
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="/community/about-group-mobile.webp"
              type="image/webp"
            />
            <img
              src="/community/about-group.webp"
              alt="NACOS Nile computing students gathered together at a community event"
              width={900}
              height={600}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "auto" }}
            />
          </picture>
          <figcaption><strong>Built by students. For students.</strong><span>NACOS Nile Community</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
export function Programs() {
  return (
    <section
      id="programs"
      tabIndex={-1}
      className="programs section-space"
      aria-labelledby="program-title"
    >
      <div className="wrap">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">MORE THAN THE CLASSROOM</p>
          <div>
            <h2 id="program-title">
              <span className="program-study">Don’t just study it.</span>
              <span className="light-blue-text">Get into it.</span>
            </h2>
            <p>
              Small starts, shared ideas, hands-on experience.
              <br />
              Here’s what we come together to do.
            </p>
          </div>
        </div>
        <div className="program-rows" data-reveal-stagger>
          {programs.map((program, index) => (
            <details
              className="program-row"
              key={program.word}
              name="programs"
              open={index === 0}
              data-reveal
            >
              <summary>
                <DisciplineIcon kind={["IT", "CS", "IS", "DS"][index]} className="program-icon" />
                <h3>
                  {program.word}
                  <span>.</span>
                </h3>
                <span className="program-title">{program.title}</span>
                <span className="expand-icon" aria-hidden="true" />
              </summary>
              <div className="program-content">
                <p>{program.description}</p>
                <div>
                  <div className="program-tags">
                    {program.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p className="program-detail">{program.detail}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
        <div id="events" tabIndex={-1} className="events-note">
          <div>
            <p className="eyebrow">THE NEXT CHAPTER</p>
            <h3>Keep a little room in your calendar.</h3>
            <p>Event dates will be shared here when they’re confirmed.</p>
          </div>
          <a className="text-link" href="#community">
            Get event updates <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}
export function Community() {
  return (
    <section
      id="community"
      tabIndex={-1}
      className="community"
      aria-labelledby="community-title"
    >
      <div className="wrap">
        <div className="community-top">
          <p className="eyebrow">JOIN THE COMMUNITY</p>
          <span className="mono">LEARN • BUILD • GROW</span>
        </div>
        <div className="community-heading" data-reveal>
          <h2 id="community-title">
            Come curious.
            <br />
            Leave <span>connected.</span>
          </h2>
          <a href="#community-routes" className="community-arrow" aria-label="Explore community access routes">
            ↗
          </a>
        </div>
        <p className="community-intro">
          Join our WhatsApp community. We verify members to keep it a safe space
          for NACOS students.
        </p>
        <div className="community-routes" id="community-routes" data-reveal-stagger>
          <article>
            <span className="route-icon" aria-hidden="true">
              <WhatsAppIcon width="24" height="24" />
            </span>
            <p className="eyebrow">THROUGH YOUR COURSE REP</p>
            <h3>Start with someone you know.</h3>
            <p>Ask your course representative for the community invite link.</p>
            <p className="community-note">
              Please don’t share the invitation with non-NACOS members.
            </p>
          </article>
          <article>
            <span className="route-icon" aria-hidden="true">
              <MailIcon width="24" height="24" />
            </span>
            <p className="eyebrow">THROUGH YOUR STUDENT EMAIL</p>
            <h3>Request access by email.</h3>
            <p>
              Send from your Outlook student email to{" "}
              <a href={`mailto:${chapterEmail}`}>{chapterEmail}</a>. Include:
            </p>
            <ul className="community-checklist">
              <li>
                <UserIcon className="checklist-icon" aria-hidden="true" />
                <span>Full Name</span>
              </li>
              <li>
                <IdCardIcon className="checklist-icon" aria-hidden="true" />
                <span>Student ID</span>
              </li>
              <li>
                <WhatsAppIcon className="checklist-icon" aria-hidden="true" />
                <span>WhatsApp Phone Number</span>
              </li>
            </ul>
            <a className="button button-white" href={communityEmailHref}>
              <MailIcon aria-hidden="true" />
              <span>Request Access by Email</span>
            </a>
          </article>
        </div>
        <div className="community-public">
          <p>Follow along, wherever you are.</p>
          <div className="community-socials" data-reveal-stagger>
            {socialLinks.map((link) => {
              const Icon = link.label.includes("LinkedIn")
                ? LinkedInIcon
                : link.label.includes("Instagram")
                ? InstagramIcon
                : XTwitterIcon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`NACOS Nile on ${link.label}`}
                >
                  <Icon aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="wrap">
        <div className="footer-main">
          <div>
            <a className="brand" href="#home">
              <Image
                src="/logo.svg"
                width={80}
                height={38}
                alt="NACOS Nile logo"
                className="footer-brand-logo"
              />
              <span>
                NACOS <b>Nile</b>
                <small>LEARN • BUILD • GROW</small>
              </span>
            </a>
            <p>
              The digital home for
              <br />
              Nile’s computing community.
            </p>
          </div>
          <div>
            <p className="eyebrow">EXPLORE</p>
            <a href="#about">About NACOS Nile</a>
            <a href="#disciplines">Computing disciplines</a>
            <a href="#programs">Programs & activities</a>
            <a href="#team">Executive council</a>
          </div>
          <div>
            <p className="eyebrow">STUDENT RESOURCES</p>
            <a href="#dues">Pay Dues</a>
            <a href="#life">Community photos</a>
            <a href="#events">Event updates</a>
            <a href="#programs">Workshops & study groups</a>
            <a href="#community">Community information</a>
          </div>
          <div>
            <p className="eyebrow">FIND US</p>
            <address>
              <MapPinIcon aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: 6, color: "#6cb6ff" }} />
              Nile University of Nigeria
              <br />
              Abuja, FCT, Nigeria
            </address>
            <a href={`mailto:${chapterEmail}`}>
              <MailIcon aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: 6, color: "#6cb6ff" }} />
              {chapterEmail}
            </a>
            <a className="back-top" href="#home">
              Back to top ↑
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NACOS Nile. All rights reserved.</p>
          <p>
            Designed & built by{" "}
            <a
              href="https://github.com/JesseDev454"
              target="_blank"
              rel="noopener noreferrer"
            >
              JesseDev454 <Arrow diagonal />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
