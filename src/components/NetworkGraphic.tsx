import { disciplines } from "@/data/site";
export default function NetworkGraphic({ compact = false }: { compact?: boolean }) {
  const positions = compact ? [[18,25],[76,18],[84,62],[17,77],[51,88],[47,10]] : [[16,22],[70,14],[88,47],[72,82],[22,80],[9,52]];
  return <div className={`network-graphic ${compact ? "network-compact" : ""}`} aria-hidden="true"><div className="network-grid"/><svg viewBox="0 0 100 100" preserveAspectRatio="none">{positions.map(([x,y],i)=><line key={i} x1="50" y1="50" x2={x} y2={y}/>)}<circle cx="50" cy="50" r="19" className="orbit"/></svg><div className="network-center">NACOS<span>CONNECTED</span></div>{positions.map(([x,y],i)=><div className="network-node" key={disciplines[i].title} style={{left:`${x}%`,top:`${y}%`,animationDelay:`${i*-.7}s`}}><i/><span>{disciplines[i].title}</span></div>)}{!compact&&<div className="network-meta"><span>NETWORK / 001</span><span>STATUS / ACTIVE</span><span>ABUJA / NG</span></div>}</div>;
}
