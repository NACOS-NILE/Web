import Image from "next/image";

interface ExcoCardProps {
  photo: string;
  name: string;
  role: string;
  quote: string;
}

export function ExcoCard({ photo, name, role, quote }: ExcoCardProps) {
  return (
    <article
      data-cursor="surface"
      className="exco-card overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
        <Image
          src={photo}
          alt={`${name}, ${role} of NACOS Nile`}
          className="object-cover"
          loading="lazy"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">{role}</p>
        <h3 className="mt-2 text-lg font-semibold">{name}</h3>
        <p className="mt-2 text-xs italic leading-6 text-muted-foreground">&ldquo;{quote}&rdquo;</p>
      </div>
    </article>
  );
}
