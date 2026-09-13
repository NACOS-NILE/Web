import Image from "next/image";

const links = [
  ["about", "About"],
  ["disciplines", "Disciplines"],
  ["events", "Events"],
  ["excos", "Excos"],
  ["community", "Community"],
  ["dues", "Dues"],
];

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="section-wrap footer-top">
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="NACOS Nile home">
            <Image src="/logo.svg" alt="" width={64} height={31} style={{ height: "auto" }} />
            <span>NACOS<span className="brand-sub">NILE UNIVERSITY</span></span>
          </a>
          <p>
            Nigeria Association of Computing Students
            <br />
            Nile University of Nigeria, Abuja, FCT.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <div className="footer-col">
            <h4>Quick links</h4>
            <ul>
              {links.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>Email — coming soon</li>
              <li>
                <a href="https://twitter.com/NACOSNile" target="_blank" rel="noopener noreferrer">
                  @NACOSNile on X
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/EXBkX1Gq1k80apkd9Pp1y1?s=cl&p=a&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reach us on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <a href="#top" className="footer-back">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
      <div className="section-wrap footer-bottom">
        <span>© {new Date().getFullYear()} NACOS Nile. All rights reserved.</span>
        <span>Built for students. By students.</span>
      </div>
    </footer>
  );
}
