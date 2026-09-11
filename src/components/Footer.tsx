import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer id="community" className="footer footer-compact">
      <div className="footer-shell">
        <div className="footer-compact-top">
          <div>
            <p className="eyebrow light">09 / Community</p>
            <h2>STAY CLOSE TO WHAT NACOS IS DOING.</h2>
          </div>

          <div className="footer-compact-action">
            <p>
              Use the community button at the bottom right for verified social channels,
              or go straight to the official student community.
            </p>
            <a
              href="https://nacos-nile-website.vercel.app/community"
              target="_blank"
              rel="noreferrer"
            >
              Join the official community <span>↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom footer-bottom-compact">
          <Mark />

          <div className="address">
            <span>Faculty of Computing Studies</span>
            <span>Nile University of Nigeria</span>
            <span>Plot 681, Jabi Airport Bypass, Abuja FCT</span>
          </div>

          <div className="source-links">
            <span>Official sources</span>
            <a href="https://nacos-nile-website.vercel.app/" target="_blank" rel="noreferrer">Chapter website ↗</a>
            <a href="https://nileuniversity.edu.ng/faculties/faculty-of-computing-studies/" target="_blank" rel="noreferrer">Faculty of Computing ↗</a>
            <a href="https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/posts/?feedView=all" target="_blank" rel="noreferrer">Chapter LinkedIn ↗</a>
            <a href="https://nacos.org.ng/" target="_blank" rel="noreferrer">NACOS National ↗</a>
          </div>
        </div>

        <div className="legal">
          <span>© 2026 NACOS Nile Chapter</span>
          <span className="creator-credit">Designed and developed by Lloyd Akhigbe <b>241090038</b> and Ephraim Ofoli <b>241030026</b></span>
          <span>Networking The World.</span>
        </div>
      </div>
    </footer>
  );
}
