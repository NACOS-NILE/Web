export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className={`arrow${diagonal ? " diagonal" : ""}`}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12h15M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
