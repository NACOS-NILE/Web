const stats = [
  { value: "2023", label: "Chapter founded", accent: true },
  { value: "6", label: "Computing disciplines" },
  { value: "9", label: "Executive council members" },
  { value: "4", label: "Recurring program types" },
];

export default function StatsBar() {
  return (
    <div className="border-b border-border-hairline bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p
              className={`text-3xl font-semibold tracking-tight ${
                stat.accent ? "text-nacos-green" : "text-nacos-navy"
              }`}
            >
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
