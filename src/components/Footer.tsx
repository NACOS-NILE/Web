const links=["About","Disciplines","Programs","Excos","Community"];
const socials = [
  { name: "Instagram", href: "https://www.instagram.com/nacosnileuni?stkn=YzdwdmZtYWt1NXVz" },
  { name: "X", href: "https://x.com/nacosnileuni?s=11" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/" },
];
export default function Footer(){return <footer><div className="page-shell footer-grid"><div><strong>NACOS Nile</strong><p>Nigeria Association of Computing Students<br/>Nile University of Nigeria<br/>Abuja, FCT</p></div><nav aria-label="Footer navigation"><span>QUICK LINKS</span>{links.map(link=><a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav><nav aria-label="Social links"><span>SOCIALS</span>{socials.map(link=><a key={link.name} href={link.href} target="_blank" rel="noreferrer">{link.name}</a>)}</nav></div><div className="page-shell footer-bottom"><span>© 2026 NACOS Nile</span><span>Designed &amp; built for NACOS Nile</span></div></footer>}
