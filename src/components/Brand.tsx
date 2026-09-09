import Image from "next/image";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#home"
      className="group flex items-center gap-3 transition-transform duration-150 ease-[cubic-bezier(.16,1,.3,1)] active:scale-95"
    >
      <Image
        src="/logo.svg"
        alt="NACOS Nile — Nigeria Association of Computing Students, Nile University Chapter"
        className={compact ? "h-9 w-auto shrink-0" : "h-10 w-auto shrink-0 md:h-11"}
        width={80}
        height={38}
        priority
      />
      <span className="text-[17px] font-extrabold leading-none tracking-[-0.04em]">
        NACOS
        <span className="text-muted-foreground transition-colors duration-500 group-hover:text-primary">
          NILE
        </span>
      </span>
    </a>
  );
}
