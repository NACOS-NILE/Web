"use client";

const EXCOS = [
  { num: "02", role: "Vice President", name: "Abdullah Ali Ahmad", quote: "\"Advocating for student welfare and academic excellence.\"", img: "vp.jpg", initials: "AA" },
  { num: "03", role: "Secretary General", name: "Sheila Jato", quote: "\"Keeping the engines running smoothly.\"", img: "sg.jpg", initials: "SJ" },
  { num: "04", role: "Financial Secretary", name: "Amira Ibrahim", quote: "\"Making the important financial decisions.\"", img: "fc.jpg", initials: "AI" },
  { num: "05", role: "Public Relations Officer", name: "Elvis Francis", quote: "\"Applying creativity to communication.\"", img: "pro.jpg", initials: "EF" },
  { num: "06", role: "Director of Training & Development", name: "Ivoke Kamsi", quote: "\"Driving technical growth and leading coding workshops.\"", img: "dtd.jpg", initials: "IK" },
  { num: "07", role: "Provost", name: "Zubaida Abdulazeez", quote: "\"Managing the day-to-day operations of NACOS Nile.\"", img: "provost.jpg", initials: "ZA" },
  { num: "08", role: "Director of Socials", name: "Saidat Ahmed", quote: "\"Prioritizing social activities and events.\"", img: "socials.jpg", initials: "SA" },
  { num: "09", role: "Director of Welfare", name: "Danielle Ekunwe", quote: "\"Your well-being is my priority.\"", img: "welfare.jpg", initials: "DE" },
];

export default function Excosection() {
  return (
    <section className="excosection" id="excosection">
      <div className="container">
        <div className="excos-header reveal">
          <div className="section-label">NACOS Nile Leadership</div>
          <h2 className="excos-title">The Executive Council</h2>
          <p className="excos-subtitle">
            NACOSites leading with vision, service and excellence — the 2025/26 chapter executives.
          </p>
        </div>

        <div className="roster-strip">
          <span>NACOS Nile</span>
          <span className="dot" />
          <span>9 Officers</span>
          <span className="dot" />
          <span>Session 2025/26</span>
        </div>

        <div className="exco-featured">
          <div className="exco-featured-badge">Session 2025/26</div>
          <div className="exco-featured-avatar">
            <img
              src="/assets/excos-pics/president.jpg"
              width={160}
              height={160}
              loading="lazy"
              alt="Zikora Fortune Nwafor — President"
              onError={(e) => {
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                  parent.innerHTML = '<div style="width:100%;height:100%;background:#274193;display:flex;align-items:center;justify-content:center;font-size:1.75rem;font-weight:700">ZN</div>';
                }
              }}
            />
          </div>
          <div className="exco-featured-info">
            <div className="exco-featured-role">President · NACOS Nile Chapter</div>
            <h3 className="exco-featured-name">Zikora Fortune Nwafor</h3>
            <p className="exco-featured-quote">Leading with vision and service — &quot;Passionate about building active student communities.&quot;</p>
          </div>
        </div>

        <div className="excos-roster">
          {EXCOS.map((exco) => (
            <div key={exco.num} className="roster-row">
              <div className="roster-num">{exco.num}</div>
              <div className="roster-avatar">
                <img
                  src={`/assets/excos-pics/${exco.img}`}
                  width={96}
                  height={96}
                  loading="lazy"
                  alt={`${exco.name} — ${exco.role}`}
                  onError={(e) => {
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `<div style="width:100%;height:100%;background:#274193;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700">${exco.initials}</div>`;
                    }
                  }}
                />
              </div>
              <div className="roster-info">
                <div className="roster-role">{exco.role}</div>
                <div className="roster-name">{exco.name}</div>
              </div>
              <div className="roster-quote">{exco.quote}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
