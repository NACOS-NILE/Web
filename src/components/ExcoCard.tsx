import Image from "next/image";
import type { Exco } from "@/data/content";

export default function ExcoCard({
  person,
  size = "normal",
}: {
  person: Exco;
  size?: "large" | "normal";
}) {
  return (
    <article className={`exco-card ${size === "large" ? "exco-large" : ""}`}>
      <div className="exco-image">
        <Image
          src={person.image}
          alt={`${person.name} - ${person.role}`}
          fill
          sizes={
            size === "large"
              ? "(max-width: 650px) 310px, 390px"
              : "(max-width: 650px) 45vw, 190px"
          }
        />
      </div>

      <div className="exco-info">
        <span>{person.role}</span>
        <h3>{person.name}</h3>
        <p>{person.description}</p>
      </div>
    </article>
  );
}
