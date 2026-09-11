import Image from "next/image";

export function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="mark" aria-label="NACOS Nile University Chapter">
      <span className="mark-logo"><Image src="/logo-512.png" alt="" width={40} height={40} priority /></span>
      {!compact && (
        <span className="mark-copy">
          <strong>NACOS NILE</strong>
          <span>Nile University of Nigeria</span>
        </span>
      )}
    </span>
  );
}
