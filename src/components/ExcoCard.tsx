import Image from "next/image";
import type { ExcoMember } from "@/data/exco";

export default function ExcoCard({
  member,
}: {
  member: ExcoMember;
  accent?: string;
}) {
  return (
    <article className="group flex flex-col">
      <div className="relative pt-6">
        <div className="relative aspect-square w-full">
          {/* Background card */}
          <div className="absolute inset-0 rounded-2xl bg-[#E5ECFB] dark:bg-[#1B293E]" />

          {/* Pop-out image: extends above top edge and clips at bottom rounded corners */}
          <div className="absolute inset-x-0 -top-[25%] bottom-0 overflow-hidden rounded-b-lg">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={`${member.name}, ${member.role}`}
                fill
                className="object-cover object-bottom transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[#274193]/40 dark:text-white/40">
                <span className="font-display text-3xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .filter(Boolean)
                    .slice(0, 2)
                    .join("")}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="mt-4 font-body text-xs font-semibold text-[var(--color-primary)] dark:text-[var(--color-accent)] sm:text-sm">
        {member.role}
      </p>
      <h3 className="font-body text-[20px] font-normal text-[var(--color-ink)] sm:text-[20px]">
        {member.name}
      </h3>
      {member.bio && (
        <p className="mt-1.5 font-body text-xs leading-relaxed text-[var(--color-ink-muted)] sm:text-sm">
          {member.bio}
        </p>
      )}
    </article>
  );
}
