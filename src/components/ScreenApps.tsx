import type { Discipline } from "@/lib/data";

/**
 * The six mock interfaces that boot on the laptop display, one per programme.
 *
 * Everything here is decoration — the programme's real name and description sit
 * in the selector beside the machine, as readable text at a readable size — so
 * the whole tree is hidden from assistive technology by its container in
 * MacBook.tsx. That is also why none of it uses images: at this scale a
 * screenshot would be an unreadable smear and a second network round trip,
 * whereas a few dozen divs sized in `em` stay crisp at any machine width.
 *
 * Sizing rule for this file: no pixel values. `.mb-glass` sets a font-size
 * derived from the machine's width, so `em` here means "a fixed fraction of the
 * screen" and every mock scales with the laptop from phone to desktop.
 */

/* -------------------------------------------------------------- primitives */

/** A run of coloured code text. `t` picks the token colour. */
function T({ t, children }: { t?: string; children: React.ReactNode }) {
  return <span className={t ? `mb-t-${t}` : undefined}>{children}</span>;
}

/** A horizontal meter. `v` is 0–1. */
function Bar({ v, tone = "accent" }: { v: number; tone?: "accent" | "mute" }) {
  return (
    <span className="mb-bar">
      <span className={`mb-bar-fill mb-bar-${tone}`} style={{ width: `${v * 100}%` }} />
    </span>
  );
}

/* ------------------------------------------------------------- the screens */

function Editor() {
  return (
    <div className="mb-editor">
      {/* Must match the number of lines in the block below, or the numbers
          drift out of step with the code they belong to. */}
      <div className="mb-gutter">
        {Array.from({ length: 13 }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
      <pre className="mb-code">
        <code>
          <T t="c"># breadth-first search over the campus graph</T>
          {"\n"}
          <T t="k">from</T> collections <T t="k">import</T> deque{"\n"}
          {"\n"}
          <T t="k">def</T> <T t="f">shortest_path</T>(graph, start, goal):{"\n"}
          {"    "}seen, queue = {"{"}start{"}"}, <T t="f">deque</T>([[start]]){"\n"}
          {"\n"}
          {"    "}
          <T t="k">while</T> queue:{"\n"}
          {"        "}path = queue.<T t="f">popleft</T>(){"\n"}
          {"        "}
          <T t="k">if</T> path[<T t="n">-1</T>] == goal:{"\n"}
          {"            "}
          <T t="k">return</T> path{"\n"}
          {"        "}
          <T t="k">for</T> node <T t="k">in</T> graph[path[<T t="n">-1</T>]] - seen:{"\n"}
          {"            "}seen.<T t="f">add</T>(node){"\n"}
          {"            "}queue.<T t="f">append</T>(path + [node])
        </code>
      </pre>
      <div className="mb-statusbar">
        <span>
          <i className="mb-dot mb-dot-live" /> Python 3.12
        </span>
        <span>O(V + E)</span>
        <span>Ln 13, Col 38</span>
      </div>
    </div>
  );
}

function Pipeline() {
  const stages: [string, number, string][] = [
    ["Install dependencies", 1, "12s"],
    ["Type-check & lint", 1, "31s"],
    ["Unit + integration tests", 1, "1m 04s"],
    ["Build container image", 0.68, "running"],
    ["Deploy to production", 0, "queued"],
  ];

  return (
    <div className="mb-pipeline">
      <div className="mb-pipe-head">
        <span className="mb-chip">
          <i className="mb-dot mb-dot-live" /> main
        </span>
        <span className="mb-mono">a1f9c04</span>
        <span className="mb-dim">“fix: debounce the search input”</span>
      </div>
      <ol className="mb-stages">
        {stages.map(([label, v, meta]) => (
          <li key={label} className="mb-step" data-state={v === 1 ? "done" : v > 0 ? "run" : "wait"}>
            <span className="mb-step-mark" aria-hidden="true" />
            <span className="mb-step-label">{label}</span>
            <Bar v={v} tone={v === 1 ? "mute" : "accent"} />
            <span className="mb-dim mb-mono">{meta}</span>
          </li>
        ))}
      </ol>
      <div className="mb-statusbar">
        <span>3 of 5 stages green</span>
        <span>estimated 2m 10s</span>
      </div>
    </div>
  );
}

function Terminal() {
  return (
    <div className="mb-terminal">
      <pre className="mb-code">
        <code>
          <T t="p">$</T> nmap -sV --top-ports 20 10.0.4.17{"\n"}
          <T t="dim">Starting scan — 20 ports, 1 host up</T>
          {"\n"}
          {"\n"}
          <T t="dim">PORT </T>
          <T t="dim">STATE </T>
          <T t="dim">SERVICE</T>
          {"\n"}
          <T t="p">22/tcp </T>
          <T t="ok">open </T>
          ssh OpenSSH 9.6{"\n"}
          <T t="p">443/tcp</T> <T t="ok">open </T>
          https nginx 1.27{"\n"}
          <T t="p">8080/tcp</T> <T t="warn">open </T>
          http-proxy <T t="warn">← unauthenticated</T>
          {"\n"}
          {"\n"}
          <T t="p">$</T> ./harden.sh --profile campus{"\n"}
          <T t="ok">✓</T> firewall rules applied{"\n"}
          <T t="ok">✓</T> proxy moved behind SSO{"\n"}
          <T t="p">$</T> <span className="mb-caret" />
        </code>
      </pre>
      <div className="mb-statusbar">
        <span>
          <i className="mb-dot mb-dot-live" /> 1 finding resolved
        </span>
        <span>exposure 8.1 → 2.4</span>
      </div>
    </div>
  );
}

function Console() {
  const nodes = [0.82, 0.41, 0.67, 0.94, 0.23, 0.58, 0.76, 0.35, 0.61, 0.88, 0.44, 0.52];

  return (
    <div className="mb-console">
      <div className="mb-tiles">
        {[
          ["Uptime", "99.98%"],
          ["p95 latency", "42ms"],
          ["Nodes", "12 / 12"],
        ].map(([k, v]) => (
          <div key={k} className="mb-tile">
            <span className="mb-dim">{k}</span>
            <strong>{v}</strong>
          </div>
        ))}
      </div>
      <div className="mb-rack">
        {nodes.map((v, i) => (
          <span key={i} className="mb-rack-slot">
            <span className="mb-rack-fill" style={{ height: `${v * 100}%` }} />
          </span>
        ))}
      </div>
      <ul className="mb-log">
        <li>
          <i className="mb-dot mb-dot-live" /> lecture-hall-ap-04 back online
        </li>
        <li>
          <i className="mb-dot" /> nightly backup verified — 1.4 TB
        </li>
        <li>
          <i className="mb-dot" /> certificate renewed for portal.nile
        </li>
      </ul>
    </div>
  );
}

function Schema() {
  return (
    <div className="mb-schema">
      <div className="mb-erd">
        <div className="mb-entity" style={{ gridArea: "a" }}>
          <span className="mb-entity-head">student</span>
          <span>matric_no</span>
          <span>programme_id</span>
          <span>level</span>
        </div>
        <div className="mb-entity" style={{ gridArea: "b" }}>
          <span className="mb-entity-head">programme</span>
          <span>programme_id</span>
          <span>faculty</span>
        </div>
        <div className="mb-entity" style={{ gridArea: "c" }}>
          <span className="mb-entity-head">enrolment</span>
          <span>matric_no</span>
          <span>course_code</span>
          <span>session</span>
        </div>
        {/* Straight rules rather than an SVG: one pixel of border stays exactly
            one pixel at every machine size, where a stretched viewBox would not. */}
        <span className="mb-link mb-link-1" aria-hidden="true" />
        <span className="mb-link mb-link-2" aria-hidden="true" />
        <span className="mb-rel mb-rel-1" aria-hidden="true">
          1 — ∞
        </span>
      </div>
      <div className="mb-statusbar">
        <span>3 entities · 2 relations</span>
        <span>3rd normal form</span>
      </div>
    </div>
  );
}

function Notebook() {
  const series = [0.32, 0.48, 0.41, 0.63, 0.57, 0.79, 0.71, 0.88, 0.94];

  return (
    <div className="mb-notebook">
      <div className="mb-cell">
        <span className="mb-cell-tag">In [4]</span>
        <pre className="mb-code">
          <code>
            model.<T t="f">fit</T>(X_train, y_train){"\n"}
            <T t="f">plot</T>(history.<T t="p">accuracy</T>)
          </code>
        </pre>
      </div>
      <div className="mb-chart">
        {series.map((v, i) => (
          <span key={i} className="mb-col" style={{ height: `${v * 100}%` }} />
        ))}
        <span className="mb-trend" aria-hidden="true" />
      </div>
      <div className="mb-statusbar">
        <span>
          <i className="mb-dot mb-dot-live" /> val_accuracy 0.94
        </span>
        <span>epoch 9 / 9</span>
      </div>
    </div>
  );
}

const SCREENS: Record<Discipline["screen"], () => React.JSX.Element> = {
  editor: Editor,
  pipeline: Pipeline,
  terminal: Terminal,
  console: Console,
  schema: Schema,
  notebook: Notebook,
};

/** The mock window — chrome plus whichever interface this programme boots. */
export default function ScreenApp({ discipline }: { discipline: Discipline }) {
  const Body = SCREENS[discipline.screen];

  return (
    <div className="mb-app">
      <div className="mb-titlebar">
        <span className="mb-lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="mb-title mb-mono">{discipline.file}</span>
        <span className="mb-title-meta mb-mono">{discipline.code}</span>
      </div>
      <div className="mb-appbody">
        <Body />
      </div>
    </div>
  );
}
