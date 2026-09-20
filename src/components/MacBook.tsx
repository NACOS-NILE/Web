import { DISCIPLINES } from "@/lib/data";
import ScreenApp from "@/components/ScreenApps";

/**
 * A laptop, built out of four flat planes in CSS 3D: the lid, the deck it
 * hinges on, the front lip that gives the deck its thickness, and the anodised
 * back of the lid you only ever see while it is shut.
 *
 * No WebGL. The screen has to hold small type — a code editor, a terminal — and
 * a texture-mapped panel would resample all of it; keeping the display as live
 * DOM means every glyph is rendered by the text engine at the device's own
 * pixel density, which is the difference between "a laptop" and "a photo of
 * one". It also costs nothing to load, on a site whose only other dependency
 * is GSAP.
 *
 * Every angle here is a custom property so the parent can drive the hinge and
 * the camera from a single timeline — see DisciplineShowcase.tsx.
 */
export default function MacBook({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="mb-stage">
      <div className="mb-machine">
        {/* ------------------------------------------------------------ lid */}
        <div className="mb-lid">
          <div className="mb-glass">
            {/*
              All six screens stay mounted and stacked. The swap happens at the
              bottom of the hinge's travel, with the display facing away from
              the reader, so there is no budget for mounting a subtree and
              waiting a frame for it to lay out — it has to be ready before the
              lid comes back up.
            */}
            {DISCIPLINES.map((discipline, i) => (
              <div
                key={discipline.name}
                className="mb-pane"
                data-active={i === activeIndex ? "true" : "false"}
                style={{ "--mb-accent": discipline.accent } as React.CSSProperties}
              >
                <ScreenApp discipline={discipline} />
              </div>
            ))}

            {/* Camera housing. Sits above the panes so it reads as part of the
                bezel rather than part of whichever app is running. */}
            <span className="mb-notch" aria-hidden="true">
              <i className="mb-camera" />
            </span>

            {/* Two separate sheens: a fixed one that models the room, and a
                swept one the timeline fires as the lid opens. */}
            <span className="mb-sheen" aria-hidden="true" />
            <span className="mb-flare" aria-hidden="true" />
          </div>

          {/* The anodised outside of the lid, facing backwards. Hidden by
              backface-visibility until the machine turns far enough to show it,
              which the close-and-turn transition does every time. */}
          <div className="mb-lid-back">
            <span className="mb-brand">NACOS</span>
          </div>
        </div>

        {/* ----------------------------------------------------------- deck */}
        <div className="mb-deck">
          <span className="mb-hinge" aria-hidden="true" />
          <div className="mb-keyboard" aria-hidden="true">
            {KEY_ROWS.map((row, r) => (
              <div key={r} className="mb-key-row">
                {row.map((w, k) => (
                  <span key={k} className="mb-key" style={{ flexGrow: w }} />
                ))}
              </div>
            ))}
          </div>
          <span className="mb-trackpad" aria-hidden="true" />
        </div>

        {/* The front edge, which is what actually sells the thickness — a deck
            with no lip reads as a sticker lying on the floor. */}
        <div className="mb-front">
          <span className="mb-notch-grip" aria-hidden="true" />
        </div>

        {/* Contact shadow. A sibling rather than a box-shadow so it can lie flat
            on the "table" in the same 3D space as the deck. */}
        <span className="mb-shadow" aria-hidden="true" />
      </div>
    </div>
  );
}

/**
 * Relative key widths, row by row — a plain scaled-down Mac layout. Flex-grow
 * rather than percentages so the row always fills exactly, whatever rounding
 * the browser does at a given machine size.
 */
const KEY_ROWS: number[][] = [
  [1.55, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.55],
  [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5],
  [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.25],
  [2.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.9],
  [2.6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.4],
  [1.2, 1.2, 1.2, 6.6, 1.2, 1.2, 1.2],
];
