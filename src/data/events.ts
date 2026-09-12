// Typed wrapper around events.json (the actual data excos edit) for the
// "Events" section (EventsSection). Keep this file itself edit-free —
// add/change/remove events in events.json instead; it's plain JSON with no
// code in it, on purpose, so a non-developer exco can open it and edit an
// entry without touching a .tsx file.
import rawEvents from "./events.json";

// events.json intentionally does NOT carry `month`/`day` fields — they're
// derived below from `dateISO` instead, so there's only one date to edit
// per event, not two redundant ones that could drift out of sync. This
// derivation deliberately never touches the `Date` object: `new
// Date("2026-10-18")` parses as UTC midnight, and formatting that in a
// negative-UTC-offset timezone (the browser's, or the build server's) can
// print the previous day. Plain string-splitting sidesteps that entirely.
const MONTH_ABBR = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

function deriveDateLabel(dateISO: string): { month: string; day: string } {
  const [, m, d] = dateISO.split("-");
  return { month: MONTH_ABBR[Number(m) - 1] ?? "", day: d ?? "" };
}

export interface RawEventItem {
  id: string;
  title: string;
  dateISO: string; // "YYYY-MM-DD" — the only date field to edit
  time: string;
  location: string;
  tag: string;
  description: string;
  image: string; // full photo URL
  ctaLabel?: string;
  ctaHref?: string; // defaults to the WhatsApp community link if omitted
}

export interface EventItem extends RawEventItem {
  month: string; // derived, e.g. "OCT"
  day: string; // derived, e.g. "18"
}

export const events: EventItem[] = (rawEvents as RawEventItem[]).map((e) => ({
  ...e,
  ...deriveDateLabel(e.dateISO),
}));
