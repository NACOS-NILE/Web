import { excos } from "@/lib/excos";
import ExcoCard from "./ExcoCard";

export default function Excos() {
  return (
    <section id="excos" className="border-b border-border-hairline bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-nacos-navy sm:text-4xl">
            The Executive Council
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-body">
            Nine students elected to run NACOS Nile day to day.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {excos.map((exco) => (
            <ExcoCard key={exco.name} exco={exco} />
          ))}
        </div>
      </div>
    </section>
  );
}
