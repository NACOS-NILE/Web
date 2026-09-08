import { disciplines } from "@/data/site";
export default function DisciplineMarquee(){const items=[...disciplines,...disciplines];return <div className="marquee" aria-hidden="true"><div className="marquee-track">{items.map((item,i)=><span key={`${item.title}-${i}`}>{item.title} <b>✦</b></span>)}</div></div>}
