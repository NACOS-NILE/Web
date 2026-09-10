import type { SVGProps } from "react";

export function DisciplineIcon({ kind, ...props }: SVGProps<SVGSVGElement> & { kind: string }) {
  const paths: Record<string, string> = {
    CS: "M8 6 2 12l6 6M16 6l6 6-6 6M14 3l-4 18",
    SE: "M9 3h6l1 4 4 1v8l-4 1-1 4H9l-1-4-4-1V8l4-1 1-4ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
    CY: "M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6L12 2ZM8 12l3 3 5-6",
    IT: "M3 3h18v13H3V3ZM8 21h8M12 16v5",
    IS: "M9 2h6v6H9V2ZM2 16h6v6H2v-6ZM16 16h6v6h-6v-6ZM12 8v4M5 16v-4h14v4",
    DS: "M3 14h4v8H3v-8ZM10 8h4v14h-4V8ZM17 2h4v20h-4V2",
  };
  return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[kind] ?? paths.CS} /></svg>;
}
