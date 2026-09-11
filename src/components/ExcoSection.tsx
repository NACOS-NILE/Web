import { excos } from "@/data/site";
import ExcoCard from "./ExcoCard";

export default function ExcoSection() {
  return <section className="section exco-section technical-grid" id="excos"><div className="page-shell"><div className="exco-heading"><div><p className="section-label">04 / PEOPLE BEHIND THE NETWORK</p><h2>Meet the <em>Excos.</em></h2></div><p>A dedicated team of student leaders working to create opportunities, support the community and drive the vision of NACOS Nile.</p><span className="leaders-label" aria-hidden="true">OUR LEADERS</span></div><div className="exco-grid">{excos.map((exco) => <ExcoCard key={exco.number} exco={exco} />)}</div><div className="exco-footer" aria-hidden="true"><div><i />STUDENT LEADERS. A STRONGER COMMUNITY.</div><div><b>09 TEAM MEMBERS</b><i /></div></div></div></section>;
}
