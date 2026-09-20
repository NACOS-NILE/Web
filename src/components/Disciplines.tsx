import DisciplineShowcase from "@/components/DisciplineShowcase";
import SectionHeading from "@/components/SectionHeading";

export default function Disciplines() {
  return (
    <section
      id="disciplines"
      aria-labelledby="disciplines-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-28 dark:bg-brand-950"
    >
      {/* A faint grid, so the machine is standing on something rather than
          floating in white space. Masked to a soft pool under the laptop. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_55%_at_65%_60%,#000,transparent)] opacity-[0.5] dark:opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, currentColor 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, currentColor 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: "var(--color-brand-600)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="disciplines-heading"
          eyebrow="Six disciplines"
          title="Different courses, one community"
          description="Whatever is printed on your course form, you belong here. These are the programmes NACOS Nile represents at Nile University."
        />

        <DisciplineShowcase />
      </div>
    </section>
  );
}
