# Hero WebGPU background

The hero uses the blue field shaders originally pulled from the vgpu 0.4.0
`adaptive-quality` example. The rendering integration now runs in a dedicated
module worker.

## Ownership and lifecycle

- `renderer.ts` is a small main-thread bridge. It transfers the decorative canvas
  once with `transferControlToOffscreen()`, then sends only changes to size,
  visibility, motion preference, power signals, and quality preference.
- `renderer.worker.ts` owns WebGPU initialization, shader compilation, scene
  resources, frame scheduling, resizing, and frame-health monitoring. No bitmap
  copies or per-frame messages cross to the main thread. GPU benchmarks and
  their external CDN requests are no longer used by the hero.
- The worker requests a `low-power` GPU adapter. This is a browser hint, not a
  guarantee that a specific GPU is selected.
- IntersectionObserver, Page Visibility, pagehide/pageshow, and reduced motion
  stop frame scheduling. An initially hidden hero delays GPU initialization until
  visible. ResizeObserver and a DPR media query forward coalesced size changes;
  the worker applies only changed physical dimensions before drawing.
- At most one GPU frame is in flight. Animation uses elapsed active time, and
  resumes without counting time spent hidden. Frame-health checks account for
  the intentional FPS cap.
- The React wrapper creates a fresh canvas for each effect, including Strict Mode
  and Fast Refresh. Disposal removes observers/listeners, cancels scheduled work,
  destroys the scene/device in the worker, and terminates the worker. A one-second
  termination fallback handles unresponsive workers. Late initialization is guarded.
- Unsupported worker WebGPU, initialization errors, runtime errors, and device
  loss reveal the existing CSS background. Reduced motion uses the static
  background without starting the worker.

## Render budgets and power signals

| Mode | Maximum FPS | Pixel budget | Scene |
| --- | ---: | ---: | --- |
| High | 30 | 2,000,000 | 48 march steps, HDR and bloom |
| Low | 20 | 750,000 | 16 steps, direct tone mapping, no bloom |
| Power saving | 15 | 750,000 | Auto selects Low |
| Hidden / reduced motion | 0 | — | No frames submitted |

Resolution also respects tier DPR (High up to 2; Low up to 1) and the GPU's
maximum texture dimension. Large displays can render below native CSS resolution
to stay inside the pixel budget.

The web does not expose a universal OS power-saving-mode flag. The bridge uses
these optional, event-driven signals:

- Battery at or below 30% while discharging requests Low and the 15 FPS budget.
  Charging/level changes update that budget immediately.
- `navigator.connection.saveData` requests the same conservative budget. Data
  Saver is a resource preference, not proof of OS battery saver being enabled.
- Devices reporting at most four logical cores or at most 4 GB of device memory
  start Auto in Low. Unknown hardware keeps the normal bounded budget.
- Sustained poor frame health downgrades Auto to Low. Browser throttling continues
  to apply because the worker schedules through `requestAnimationFrame`.

Missing or rejected battery/network APIs never prevent rendering. Auto starts
High unless a constraint is already known, and downgrades only once per Auto
selection to avoid rebuilding expensive resources repeatedly. When a power
signal clears, the frame cap returns to the current tier's normal cap; Auto stays
Low. Explicit quality choices retain their scene tier but still obey power FPS
and resolution limits. The homepage uses Auto.

Browser references: [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery),
[Chrome Energy Saver](https://developer.chrome.com/blog/memory-and-energy-saver-mode),
and [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas).

## Validation

```sh
node --test adaptive-quality/renderer.test.mjs
npm run lint
npm run build
```

The deterministic tests execute the actual TypeScript policy/controller/worker
with mock browser scheduling and GPU boundaries. They cover bounded allocations,
frame caps, lazy startup, pause/resume, live power changes, reduced motion,
backpressure, performance downgrade, device loss, and late initialization cleanup.
TypeScript is already a project dependency; no extra test runner is required.

`next.config.ts` loads WGSL source strings for both Turbopack and webpack. The
production build emits the worker and its shaders as static chunks, compatible
with the existing static export. `tsconfig.json` excludes generated `out` files
so subsequent builds do not type-check emitted worker source as app code.
WebGPU requires HTTPS or localhost.

The remaining `index.tsx` and `quality-signals.ts` are example/reference code; the
homepage uses `src/components/adaptive-quality-hero.tsx` and the worker bridge.
