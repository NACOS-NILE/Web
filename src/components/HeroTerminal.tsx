"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import HeroWelcome from "@/components/HeroWelcome";

type Token = readonly [text: string, kind: string];

/** The declaration that types itself out. The `join(...)` call is separate — it
 *  is the interactive line, so it is not part of the typed stream. */
const CODE_LINES: readonly { indent: number; tokens: readonly Token[] }[] = [
  { indent: 0, tokens: [["const ", "kw"], ["chapter", "var"], [" = ", "op"], ["{", "punc"]] },
  { indent: 1, tokens: [["name", "prop"], [": ", "op"], ['"NACOS Nile"', "str"], [",", "punc"]] },
  { indent: 1, tokens: [["campus", "prop"], [": ", "op"], ['"Abuja, FCT"', "str"], [",", "punc"]] },
  { indent: 1, tokens: [["disciplines", "prop"], [": ", "op"], ["6", "num"], [",", "punc"]] },
  {
    indent: 1,
    tokens: [
      ["builds", "prop"],
      [": ", "op"],
      ["[", "punc"],
      ['"people"', "str"],
      [", ", "punc"],
      ['"products"', "str"],
      ["],", "punc"],
    ],
  },
  { indent: 0, tokens: [["};", "punc"]] },
  { indent: 0, tokens: [[" ", "punc"]] },
];

const TOKEN_CLASS: Record<string, string> = {
  kw: "text-fuchsia-300",
  var: "text-sky-200",
  prop: "text-brand-200",
  op: "text-slate-400",
  str: "text-emerald-300",
  num: "text-amber-300",
  fn: "text-sky-300",
  punc: "text-slate-400",
  cmt: "text-slate-500 italic",
};

const LINES = CODE_LINES.map((line) => ({
  indent: "  ".repeat(line.indent),
  tokens: line.tokens,
}));

// Every character in the block, plus one per line break, so the typewriter can
// walk a single cursor across the whole thing.
const TOTAL = LINES.reduce(
  (n, l) => n + l.indent.length + l.tokens.reduce((m, [t]) => m + t.length, 0) + 1,
  0,
);

const CHARS_PER_SECOND = 90;
const MAX_NAME = 24;

/**
 * Capitalises only the words a visitor typed entirely in lower case, so
 * "amira ibrahim" reads back as "Amira Ibrahim" while "McDonald", "O'Brien"
 * and initials survive exactly as they were entered. Guessing harder than this
 * gets somebody's name wrong, which is the one thing a welcome must not do.
 */
function presentable(name: string) {
  return name
    .split(/\s+/)
    .map((word) => (word && word === word.toLowerCase() ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");
}

/** Slices the block down to the first `count` characters, keeping token colours. */
function typedTo(count: number) {
  const out: { indent: string; tokens: Token[] }[] = [];
  let left = count;

  for (const line of LINES) {
    if (left <= 0) break;
    const indent = line.indent.slice(0, left);
    left -= indent.length;

    const tokens: Token[] = [];
    for (const [text, kind] of line.tokens) {
      if (left <= 0) break;
      tokens.push([text.slice(0, left), kind]);
      left -= text.length;
    }

    out.push({ indent, tokens });
    left -= 1; // the line break
  }

  return out;
}

// useLayoutEffect would warn during the server render of this client component.
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function HeroTerminal() {
  // Starts complete so the server-rendered markup is the finished block: right
  // for search engines, and right for anyone whose JavaScript never arrives.
  const [count, setCount] = useState(TOTAL);
  const [typing, setTyping] = useState(false);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState<string | null>(null);
  // Separate from `greeting`: the card comes and goes, the comment line it
  // leaves behind stays. Bumped on every submit so pressing enter twice
  // replays the animation instead of doing nothing.
  const [celebration, setCelebration] = useState(0);

  // Rewind before the browser paints, so the finished block is never flashed
  // on screen for a frame before the typing starts.
  useIsomorphicLayoutEffect(() => {
    const armed = document.documentElement.classList.contains("anim-armed");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (armed && !still) {
      setCount(0);
      setTyping(true);
    }
  }, []);

  // Driven off `typing` rather off `count`: `count` changes on nearly every
  // frame, so depending on it would tear down and restart the loop mid-run and
  // keep resetting its clock.
  useEffect(() => {
    if (!typing) return;

    let frame = 0;
    let start: number | null = null;
    const step = (now: number) => {
      start ??= now;
      const typed = Math.floor(((now - start) / 1000) * CHARS_PER_SECOND);
      if (typed >= TOTAL) {
        setCount(TOTAL);
        setTyping(false);
        return;
      }
      setCount(typed);
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [typing]);

  const done = count >= TOTAL;

  const endCelebration = useCallback(() => setCelebration(0), []);

  return (
    <div className="relative">
      <pre className="overflow-x-auto px-5 pt-5 pb-10 font-mono text-[13px] leading-7 sm:text-sm">
        <code>
          {typedTo(count).map((line, i) => (
            <span key={i} className="block whitespace-pre">
              {line.indent}
              {line.tokens.map(([text, kind], j) => (
                <span key={j} className={TOKEN_CLASS[kind]}>
                  {text}
                </span>
              ))}
            </span>
          ))}

          {/*
            The interactive line. It only appears once the declaration has
            finished typing, so the invitation to type lands after the code has
            introduced itself rather than competing with it.
          */}
          {done ? (
            <span className="block whitespace-pre">
              <form
                className="group inline"
                onSubmit={(e) => {
                  e.preventDefault();
                  const clean = presentable(name.trim());
                  if (!clean) return;
                  setGreeting(clean);
                  setCelebration((n) => n + 1);
                }}
              >
                <label htmlFor="hero-join" className="sr-only">
                  Type your name to join the chapter
                </label>
                <span className={TOKEN_CLASS.fn}>join</span>
                <span className={TOKEN_CLASS.punc}>(</span>
                <span className={TOKEN_CLASS.str}>&quot;</span>
                {/*
                  The resting cursor, standing exactly where the browser will
                  put its own: focusing the field swaps one blinking bar for
                  another in the same spot rather than moving it.

                  Hidden by `:focus-within` rather than by a focus handler,
                  because the browser withholds focus events while its window
                  is in the background — and a state flag that never flips
                  would leave two carets stacked in the same place.
                */}
                {name ? null : (
                  <span
                    aria-hidden="true"
                    className="hero-caret inline-block h-[1.05em] w-[3px] translate-y-[0.2em] rounded-[1px] bg-emerald-300 group-focus-within:hidden"
                  />
                )}
                <input
                  id="hero-join"
                  value={name}
                  maxLength={MAX_NAME}
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="your name"
                  onChange={(e) => {
                    setName(e.target.value);
                    setGreeting(null);
                    // Typing behind the card would be invisible, so getting back
                    // to the keyboard is itself the dismissal.
                    setCelebration(0);
                  }}
                  // Sized to its content so the closing quote always sits snug
                  // against the last character, like real code.
                  style={{ width: `${Math.max(name.length || 9, 4)}ch` }}
                  className="bg-transparent p-0 font-mono text-emerald-300 caret-emerald-300 placeholder:text-emerald-300/40 focus:outline-none"
                />
                <span className={TOKEN_CLASS.str}>&quot;</span>
                <span className={TOKEN_CLASS.punc}>);</span>
                <span className={TOKEN_CLASS.cmt}>
                  {greeting ? "" : name.trim() ? "  // press enter" : "  // everyone is welcome"}
                </span>
              </form>
            </span>
          ) : null}

          {/* The record the card leaves behind. The card itself is the live
              region, so this must not announce the same thing a second time. */}
          <span className="block whitespace-pre">
            {greeting ? (
              <span className={TOKEN_CLASS.cmt}>{`// welcome to NACOS Nile, ${greeting}`}</span>
            ) : null}
          </span>
        </code>
      </pre>

      {celebration > 0 && greeting ? (
        <HeroWelcome key={celebration} name={greeting} onDone={endCelebration} />
      ) : null}
    </div>
  );
}
