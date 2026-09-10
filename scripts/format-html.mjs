/**
 * Breaks the single-line HTML that `next build` writes into `out/` across many
 * lines, without changing the document the browser actually builds.
 *
 * The constraint that shapes this file: the export is hydrated by React, and
 * React matches the server DOM node by node. `getNextHydratable` in
 * react-dom stops on any text node, so a newline placed *between* two tags
 * becomes a whitespace text node that React cannot match, and hydration fails
 * — the page then ships with dead event handlers and every `.reveal` block
 * stuck at `opacity: 0`. Conventional indenting is therefore not an option.
 *
 * Whitespace *inside* a tag is different: the HTML tokenizer eats it while
 * reading the tag, so it never becomes a node. So every line break here goes
 * between a tag name, its attributes and its closing `>` — one attribute per
 * line, indented by depth. The resulting DOM is identical, node for node and
 * attribute for attribute, to the one-line original.
 *
 * Usage: node scripts/format-html.mjs [dir]   (default: out)
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

const INDENT = "  ";

// Elements the HTML parser closes on its own.
const VOID = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

// Element bodies that must survive untouched: raw text, or whitespace-sensitive.
const OPAQUE = new Set(["script", "style", "pre", "textarea", "title"]);

/* ------------------------------- parsing ------------------------------- */

function parse(html) {
  const root = { type: "root", children: [] };
  const stack = [root];
  let i = 0;

  const push = (node) => stack[stack.length - 1].children.push(node);

  while (i < html.length) {
    const lt = html.indexOf("<", i);

    if (lt === -1) {
      if (i < html.length) push({ type: "text", value: html.slice(i) });
      break;
    }
    if (lt > i) push({ type: "text", value: html.slice(i, lt) });

    // Comment.
    if (html.startsWith("<!--", lt)) {
      const end = html.indexOf("-->", lt + 4);
      const stop = end === -1 ? html.length : end + 3;
      push({ type: "comment", value: html.slice(lt, stop) });
      i = stop;
      continue;
    }

    // Doctype or processing instruction.
    if (html.startsWith("<!", lt) || html.startsWith("<?", lt)) {
      const end = html.indexOf(">", lt);
      const stop = end === -1 ? html.length : end + 1;
      push({ type: "directive", value: html.slice(lt, stop) });
      i = stop;
      continue;
    }

    // Closing tag.
    if (html.startsWith("</", lt)) {
      const end = html.indexOf(">", lt);
      const stop = end === -1 ? html.length : end + 1;
      const tag = html
        .slice(lt + 2, end === -1 ? html.length : end)
        .trim()
        .toLowerCase();
      for (let d = stack.length - 1; d > 0; d--) {
        if (stack[d].tag === tag) {
          stack.length = d;
          break;
        }
      }
      i = stop;
      continue;
    }

    // Opening tag: find the `>` that is not inside a quoted attribute value.
    let j = lt + 1;
    let quote = null;
    while (j < html.length) {
      const c = html[j];
      if (quote) {
        if (c === quote) quote = null;
      } else if (c === '"' || c === "'") {
        quote = c;
      } else if (c === ">") {
        break;
      }
      j++;
    }
    if (j >= html.length) {
      push({ type: "text", value: html.slice(lt) });
      break;
    }

    const inner = html.slice(lt + 1, j);
    const selfClosed = inner.endsWith("/");
    const body = selfClosed ? inner.slice(0, -1) : inner;
    const nameEnd = body.search(/[\s/>]/);
    const tag = (nameEnd === -1 ? body : body.slice(0, nameEnd)).toLowerCase();
    const attrs = nameEnd === -1 ? "" : body.slice(nameEnd);
    i = j + 1;

    if (VOID.has(tag)) {
      push({ type: "element", tag, attrs, void: true, children: [] });
      continue;
    }

    // Copy opaque bodies straight through to the matching close tag.
    if (OPAQUE.has(tag) && !selfClosed) {
      const close = html.toLowerCase().indexOf(`</${tag}`, i);
      const contentEnd = close === -1 ? html.length : close;
      const after = close === -1 ? html.length : html.indexOf(">", close) + 1;
      push({
        type: "opaque",
        tag,
        attrs,
        content: html.slice(i, contentEnd),
        close: close === -1 ? `</${tag}>` : html.slice(close, after),
      });
      i = after;
      continue;
    }

    const node = { type: "element", tag, attrs, children: [] };
    push(node);
    if (!selfClosed) stack.push(node);
  }

  return root;
}

/* ----------------------------- serialising ----------------------------- */

/**
 * Splits a raw attribute string into individual `name="value"` chunks.
 * Values are never touched, only sliced out, so nothing is re-escaped.
 */
function splitAttrs(raw) {
  const attrs = [];
  let i = 0;

  while (i < raw.length) {
    while (i < raw.length && /\s/.test(raw[i])) i++;
    if (i >= raw.length) break;

    const start = i;
    while (i < raw.length && !/[\s=]/.test(raw[i])) i++; // attribute name
    while (i < raw.length && /\s/.test(raw[i])) i++;

    if (raw[i] === "=") {
      i++;
      while (i < raw.length && /\s/.test(raw[i])) i++;
      const quote = raw[i];
      if (quote === '"' || quote === "'") {
        i++;
        while (i < raw.length && raw[i] !== quote) i++;
        i++; // closing quote
      } else {
        while (i < raw.length && !/\s/.test(raw[i])) i++; // unquoted value
      }
    }
    attrs.push(raw.slice(start, i));
  }

  return attrs;
}

/**
 * Writes a start tag across as many lines as it has attributes. Every newline
 * lands between the tag name and an attribute, where the tokenizer discards it
 * — so no text node is ever created.
 *
 * The closing bracket stays welded to the last attribute rather than sitting on
 * its own line. Both parse identically, but a lone `>` at the start of a line
 * reads as a broken tag to anyone opening the file.
 */
function openTag(node, depth) {
  const attrs = splitAttrs(node.attrs);
  const end = node.void ? "/>" : ">";

  if (attrs.length === 0) {
    // The RSC payload scripts are tens of thousands of characters each. They
    // have no attributes to break on, so break after the tag name instead —
    // otherwise every one of them lands on a single unopenable line.
    return node.type === "opaque" ? `<${node.tag}\n${end}` : `<${node.tag}${end}`;
  }

  const pad = INDENT.repeat(depth + 1);
  const body = attrs.map((a) => pad + a).join("\n");
  // An unquoted final value would swallow the `/` of a void tag's `/>`.
  const gap = /["']$/.test(attrs[attrs.length - 1]) ? "" : " ";
  return `<${node.tag}\n${body}${gap}${end}`;
}

function emit(node, depth, buf) {
  switch (node.type) {
    case "text":
    case "comment":
    case "directive":
      buf.push(node.value);
      return;

    case "opaque":
      buf.push(openTag(node, depth), node.content, node.close);
      return;

    case "element":
      buf.push(openTag(node, depth));
      if (node.void) return;
      for (const child of node.children) emit(child, depth + 1, buf);
      // End tags are always written whole. `</div\n>` is legal but looks like
      // a truncated tag, and it buys no readability the start tags don't.
      buf.push(`</${node.tag}>`);
      return;

    default:
      for (const child of node.children) emit(child, depth, buf);
  }
}

export function formatHtml(html) {
  const buf = [];
  for (const child of parse(html).children) {
    // Whitespace outside <html> carries no meaning, and dropping it keeps a
    // second run over an already-formatted file a no-op.
    if (child.type === "text" && !child.value.trim()) continue;
    emit(child, 0, buf);
    // Whitespace before <html> is dropped by the parser, so the doctype can
    // safely sit on its own line. A trailing newline after </html> would not
    // be: the parser appends it to <body>, so the file deliberately ends at
    // the final `>`.
    if (child.type === "directive") buf.push("\n");
  }
  return buf.join("");
}

/* --------------------------------- cli --------------------------------- */

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_next") continue; // build chunks, not documents
      yield* htmlFiles(full);
    } else if (entry.name.endsWith(".html")) {
      yield full;
    }
  }
}

const dir = resolve(process.argv[2] ?? "out");
let count = 0;
for await (const file of htmlFiles(dir)) {
  const source = await readFile(file, "utf8");
  const formatted = formatHtml(source);
  await writeFile(file, formatted, "utf8");
  count += 1;
  const lines = (s) => s.split("\n").length;
  console.log(
    `formatted ${relative(process.cwd(), file)}  ` +
      `${lines(source)} -> ${lines(formatted)} lines`,
  );
}
console.log(`\n${count} file${count === 1 ? "" : "s"} formatted.`);
