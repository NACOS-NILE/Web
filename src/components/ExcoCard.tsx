import Image from "next/image";

type Exco = { number: string; name: string; role: string; image: string; bio: string; featured?: boolean };

export default function ExcoCard({ exco }: { exco: Exco }) {
  return <article className={`exco-card exco-${exco.number} ${exco.featured ? "featured" : ""}`}><div className="exco-card-copy"><p><span>{exco.role}</span> / {exco.number}</p><h3>{exco.name}</h3><div className="exco-bio">“{exco.bio}”</div><span className="exco-arrow" aria-hidden="true">↗</span></div><div className="exco-image"><Image src={exco.image} alt={`${exco.name}, ${exco.role}`} fill sizes="(max-width: 700px) 42vw, (max-width: 1199px) 50vw, 16vw" /></div></article>;
}
