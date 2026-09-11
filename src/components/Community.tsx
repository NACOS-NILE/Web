import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const channels = [
  { name: "WhatsApp", href: "https://chat.whatsapp.com/GTEBlVipC7jFMZzyg2Xte1?mode=ems_copy_t" },
  { name: "Discord", href: "#community" },
  { name: "Telegram", href: "#community" },
  { name: "Instagram", href: "https://www.instagram.com/nacosnileuni?stkn=YzdwdmZtYWt1NXVz" },
  { name: "X", href: "https://x.com/nacosnileuni?s=11" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/" },
];

export default function Community(){return <section className="section community" id="community"><div className="page-shell"><p className="section-label light">05 / COMMUNITY</p><div className="community-head"><h2>DON’T JUST WATCH.<br/><em>PLUG IN.</em></h2><div><p>Join the conversations, meet fellow builders, share ideas and stay updated on everything happening in NACOS Nile.</p><a className="button button-light" href="#community">Join the community</a></div></div><div className="channel-list">{channels.map((channel,index)=>{const external=channel.href.startsWith("https://");return <a key={channel.name} href={channel.href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}><span>0{index+1}</span><strong>{channel.name}</strong>{external ? <FiArrowUpRight aria-hidden="true" /> : <FiArrowRight aria-hidden="true" />}</a>})}</div></div></section>}
