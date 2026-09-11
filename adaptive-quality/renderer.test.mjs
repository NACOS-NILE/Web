import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

// Exercise the actual TypeScript modules with deterministic browser/GPU seams.
// No DOM, physical GPU, shader compiler, or additional test dependency required.
const directory = path.dirname(fileURLToPath(import.meta.url));
function loader(globals = {}, mocks = {}) {
  const context = vm.createContext({ console, ...globals });
  const cache = new Map();
  return function load(name) {
    if (name in mocks) return mocks[name];
    if (cache.has(name)) return cache.get(name).exports;
    const record = { exports: {} };
    cache.set(name, record);
    const source = readFileSync(path.join(directory, `${name}.ts`), 'utf8');
    const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
    const execute = new vm.Script(`(function(require, module, exports) { ${outputText}\n})`, { filename: `${name}.ts` }).runInContext(context);
    execute(load, record, record.exports);
    return record.exports;
  };
}
const baseline = { width: 1920, height: 1080, dpr: 2, visible: true, reducedMotion: false, powerReason: null, constrainedDevice: false };
const { renderBudget } = loader()('./render-policy');
const flush = () => new Promise(resolve => setImmediate(resolve));

test('render budget bounds Retina/4K allocation and respects device texture limits', () => {
  for (const powerReason of [null, 'battery', 'data-saver']) {
    for (const tier of ['high', 'low']) {
      const { size } = renderBudget(tier, { ...baseline, width: 7680, height: 4320, dpr: 3, powerReason }, 1024);
      assert.ok(size[0] <= 1024 && size[1] <= 1024);
      assert.ok(size[0] * size[1] <= (tier === 'low' || powerReason ? 750000 : 2000000));
      assert.ok(Math.abs(size[0] / size[1] - 16 / 9) < 0.01);
    }
  }
});

test('power saving caps even forced High; hidden, reduced-motion, and zero-size heroes are idle', () => {
  assert.equal(renderBudget('high', baseline).fps, 30);
  assert.equal(renderBudget('low', baseline).fps, 20);
  assert.equal(renderBudget('high', { ...baseline, powerReason: 'battery' }).fps, 15);
  assert.equal(renderBudget('high', { ...baseline, powerReason: 'data-saver' }).fps, 15);
  for (const change of [{ visible: false }, { reducedMotion: true }, { width: 0 }, { height: 0 }]) {
    assert.equal(renderBudget('high', { ...baseline, ...change }).active, false);
  }
});

function workerHarness({ deferGpu = false, deferFrames = false } = {}) {
  let id = 0;
  let completeGpu;
  const callbacks = new Map();
  const events = [];
  const renders = [];
  const scenes = [];
  const frameCompletions = [];
  let gpuRequests = 0;
  let destroyed = 0;
  let lost;
  const gpu = { gpu: { limits: { maxTextureDimension2D: 8192 }, lost: new Promise(resolve => { lost = resolve; }) }, onError() {}, dispose() { destroyed++; } };
  const scope = {
    postMessage(event) { events.push(event); },
    requestAnimationFrame(callback) { callbacks.set(++id, callback); return id; },
    cancelAnimationFrame(key) { callbacks.delete(key); },
    close() {},
  };
  const load = loader({ self: scope }, {
    vgpu: {
      init(options) {
        gpuRequests++;
        assert.equal(options.powerPreference, 'low-power');
        return deferGpu ? new Promise(resolve => { completeGpu = () => resolve(gpu); }) : Promise.resolve(gpu);
      },
      surface(_gpu, _canvas, options) { return { size: options.size, resize(size) { this.size = size; } }; },
      frame(_gpu, callback) {
        callback({});
        return { done: deferFrames ? new Promise(resolve => frameCompletions.push(resolve)) : Promise.resolve() };
      },
    },
    './scene': {
      createScene(_gpu, output, tier) {
        const scene = { tier, destroyed: false, async prepare() {}, resize() {}, render(_frame, time) { renders.push({ time, tier, size: output.size }); }, destroy() { scene.destroyed = true; } };
        scenes.push(scene);
        return scene;
      },
    },
  });
  load('./renderer.worker');
  return {
    events, renders, scenes, callbacks, frameCompletions,
    get gpuRequests() { return gpuRequests; },
    get destroyed() { return destroyed; },
    completeGpu() { completeGpu(); },
    loseGpu() { lost({ message: 'test device loss' }); },
    send(data) { scope.onmessage({ data }); },
    start(environment = baseline) { scope.onmessage({ data: { type: 'init', canvas: {}, preference: 'auto', environment } }); },
    async tick(time) {
      const current = [...callbacks.values()];
      callbacks.clear();
      for (const callback of current) callback(time);
      await flush();
    },
  };
}

test('worker lazily initializes only when visible and renders with no main-thread frame messages', async () => {
  const h = workerHarness();
  h.start({ ...baseline, visible: false });
  await flush();
  assert.equal(h.gpuRequests, 0);
  h.send({ type: 'environment', environment: baseline });
  await flush();
  assert.equal(h.gpuRequests, 1);
  for (let i = 0; i < 120; i++) await h.tick(i * 1000 / 60);
  assert.ok(h.renders.length >= 59 && h.renders.length <= 61);
  assert.equal(h.events.filter(event => event.type === 'ready').length, 1);
  assert.ok(h.events.length < 5, 'no per-frame messages');
  assert.equal(h.scenes.length, 1, 'intentional FPS cap must not trigger a health downgrade');
  h.send({ type: 'environment', environment: { ...baseline, visible: false } });
  await flush();
  assert.equal(h.callbacks.size, 0);
  const lastTime = h.renders.at(-1).time;
  h.send({ type: 'environment', environment: baseline });
  await flush();
  await h.tick(100000);
  assert.ok(h.renders.at(-1).time - lastTime < 1 / 30, 'resume excludes hidden time; only an unpresented active tick can remain');
});

test('known power constraint starts Low; live changes lower cost and pause for reduced motion', async () => {
  const h = workerHarness();
  h.start({ ...baseline, powerReason: 'battery' });
  await flush();
  assert.deepEqual(h.scenes.map(scene => scene.tier), ['low']);
  for (let i = 0; i < 120; i++) await h.tick(i * 1000 / 60);
  assert.ok(h.renders.length >= 29 && h.renders.length <= 31);
  h.send({ type: 'environment', environment: { ...baseline, reducedMotion: true } });
  await flush();
  assert.equal(h.callbacks.size, 0);

  const live = workerHarness();
  live.start();
  await flush();
  await live.tick(0);
  live.send({ type: 'environment', environment: { ...baseline, powerReason: 'data-saver' } });
  await flush();
  await live.tick(100);
  assert.equal(live.scenes[0].destroyed, true);
  assert.equal(live.renders.at(-1).tier, 'low');
  assert.equal(live.events.filter(event => event.type === 'state').at(-1).state.reason, 'data-saver');
});

test('GPU backpressure prevents queue growth and ready waits for a completed frame', async () => {
  const h = workerHarness({ deferFrames: true });
  h.start();
  await flush();
  for (let i = 0; i < 20; i++) await h.tick(i * 1000 / 60);
  assert.equal(h.renders.length, 1);
  assert.equal(h.events.some(event => event.type === 'ready'), false);
  h.frameCompletions.shift()();
  await flush();
  assert.equal(h.events.some(event => event.type === 'ready'), true);
  await h.tick(400);
  assert.equal(h.renders.length, 2);
});

test('sustained poor frame health downgrades while ordinary capped animation does not', async () => {
  const h = workerHarness();
  h.start();
  await flush();
  for (let i = 0; i < 60; i++) await h.tick(i * 100);
  assert.equal(h.scenes.at(-1).tier, 'low');
  assert.equal(h.events.filter(event => event.type === 'state').at(-1).state.reason, 'frame-health');
});

test('cleanup stops scheduling and destroys resources, including late GPU initialization', async () => {
  const h = workerHarness();
  h.start();
  await flush();
  h.send({ type: 'dispose' });
  assert.equal(h.callbacks.size, 0);
  assert.equal(h.destroyed, 1);
  assert.equal(h.scenes.every(scene => scene.destroyed), true);
  h.send({ type: 'environment', environment: baseline });
  await flush();
  assert.equal(h.callbacks.size, 0);

  const late = workerHarness({ deferGpu: true });
  late.start();
  late.send({ type: 'dispose' });
  late.completeGpu();
  await flush();
  assert.equal(late.destroyed, 1);
  assert.equal(late.scenes.length, 0);
});

test('device loss reports failure and stops GPU work', async () => {
  const h = workerHarness();
  h.start();
  await flush();
  h.loseGpu();
  await flush();
  assert.equal(h.callbacks.size, 0);
  assert.equal(h.destroyed, 1);
  assert.equal(h.events.at(-1).type, 'error');
});
