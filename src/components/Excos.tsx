import Image from "next/image";

const leaders = [
  { name: "Zikora Fortune Nwafor", role: "President", photo: "president" },
  { name: "Abdullah Ali Ahmad", role: "Vice President", photo: "vp" },
];

const officers = [
  { name: "Sheila Jato", role: "Secretary General", photo: "sg" },
  { name: "Amira Ibrahim", role: "Financial Secretary", photo: "fc" },
  { name: "Elvis Francis", role: "Public Relations Officer", photo: "pro" },
];

const directors = [
  { name: "Ivoke Kamsi", role: "Director of Training & Development", photo: "dtd" },
  { name: "Zubaida Abdulazeez", role: "Provost", photo: "provost" },
  { name: "Saidat Ahmed", role: "Director of Socials", photo: "socials" },
  { name: "Danielle Ekunwe", role: "Director of Welfare", photo: "welfare" },
];

type Member = { name: string; role: string; photo: string };

function MemberCard({ m, featured }: { m: Member; featured?: boolean }) {
  return (
    <article className={`member ${featured ? "member-featured" : ""}`}>
      <div className="member-photo">
        <Image
          src={`/excos-pics/${m.photo}.jpg`}
          alt={`${m.name}, ${m.role}`}
          fill
          sizes={
            featured
              ? "(max-width: 760px) 100vw, 50vw"
              : "(max-width: 760px) 44vw, (max-width: 1100px) 30vw, 22vw"
          }
        />
      </div>
      <div className="member-info">
        <h3>{m.name}</h3>
        <p>{m.role}</p>
      </div>
    </article>
  );
}

export function Excos() {
  return (
    <section id="excos" className="section-wrap council">
      <h2>Students like you.<br /><span>Showing up for you.</span></h2>
      <p className="section-copy">
        The people keeping NACOS Nile running — from organising hackathons to
        making sure your dues actually go somewhere.
      </p>
      <div className="member-row member-row-leaders">
        {leaders.map((m) => <MemberCard m={m} featured key={m.name} />)}
      </div>
      <div className="member-row member-row-officers">
        {officers.map((m) => <MemberCard m={m} key={m.name} />)}
      </div>
      <div className="member-row member-row-directors">
        {directors.map((m) => <MemberCard m={m} key={m.name} />)}
      </div>
    </section>
  );
}
