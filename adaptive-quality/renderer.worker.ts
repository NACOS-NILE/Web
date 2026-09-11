/// <reference lib="webworker" />

import { frame, init, surface, type Gpu, type Surface } from 'vgpu';
import { createFrameHealthMonitor } from './frame-health';
import { createQualityController, type QualityController } from './quality-controller';
import type { QualityPreference } from './quality';
import { renderBudget } from './render-policy';
import { createScene, type Scene } from './scene';
import type { RenderEnvironment, RendererCommand, RendererEvent } from './worker-protocol';

const worker = self as unknown as DedicatedWorkerGlobalScope;
let gpu: Gpu | undefined;
let output: Surface | undefined;
let controller: QualityController<Scene> | undefined;
let environment: RenderEnvironment;
let preference: QualityPreference = 'auto';
let daylight = false;
let disposed = false;
let initializing = false;
let canvas: OffscreenCanvas | undefined;
let animationFrame: number | undefined;
let inFlight = false;
let presented = false;
let lastTick: number | undefined;
let nextFrame = 0;
let time = 0;
const health = createFrameHealthMonitor();

const send = (message: RendererEvent) => worker.postMessage(message);
const budget = () => renderBudget(controller?.state.effective ?? 'high', environment, gpu?.gpu.limits.maxTextureDimension2D);

function stop() {
  if (animationFrame !== undefined) worker.cancelAnimationFrame(animationFrame);
  animationFrame = undefined;
  lastTick = undefined;
  nextFrame = 0;
  health.reset();
}

function dispose() {
  if (disposed) return;
  disposed = true;
  stop();
  controller?.destroy();
  gpu?.dispose();
}

function fail(error: unknown) {
  if (disposed) return;
  send({ type: 'error', message: error instanceof Error ? error.message : String(error) });
  dispose();
}

function schedule() {
  if (disposed || !controller?.active || !budget().active || animationFrame !== undefined) return;
  animationFrame = worker.requestAnimationFrame(tick);
}

function resize() {
  if (!output || !controller?.active || !budget().active) return;
  const { size } = budget();
  if (output.size[0] === size[0] && output.size[1] === size[1]) return;
  output.resize(size);
  controller.active.resize(size);
  health.reset();
}

function tick(now: number) {
  animationFrame = undefined;
  if (disposed || !gpu || !controller?.active || !budget().active) return;
  try {
    const { fps } = budget();
    const deltaMs = lastTick === undefined ? 0 : now - lastTick;
    lastTick = now;
    // Time is elapsed active time, so throttling never changes animation speed.
    time += Math.min(deltaMs, 100) / 1000;
    const rendered = !inFlight && now >= nextFrame - 0.5;
    if (rendered) {
      resize();
      const submitted = frame(gpu, (current) => controller!.active!.render(current, time));
      // Never queue another GPU frame while the previous one is unfinished.
      inFlight = true;
      void submitted.done.then(() => {
        inFlight = false;
        if (!disposed && !presented) {
          presented = true;
          send({ type: 'ready' });
        }
      }).catch(fail);
      const interval = 1000 / fps;
      nextFrame = nextFrame === 0 || now - nextFrame > interval ? now + interval : nextFrame + interval;
    }
    const status = health.record({ deltaMs, rendered, targetFps: fps, active: controller.state.preference === 'auto' && controller.state.effective === 'high' });
    if (status.downgrade) void controller.downgrade('frame-health').catch(fail);
    schedule();
  } catch (error) {
    fail(error);
  }
}

async function initialize() {
  if (initializing || gpu || disposed || !canvas || !budget().active) return;
  initializing = true;
  // Prefer the integrated/low-power adapter even when no battery API is exposed.
  const created = await init({ powerPreference: 'low-power' });
  if (disposed) { created.dispose(); return; }
  gpu = created;
  gpu.onError(fail);
  void gpu.gpu.lost.then((info) => fail(new Error(`WebGPU device lost: ${info.message}`)));
  const initialDowngrade = environment.powerReason ?? (environment.constrainedDevice ? 'gpu-tier' : undefined);
  const initialTier = preference === 'low' || (preference === 'auto' && initialDowngrade) ? 'low' : 'high';
  output = surface(gpu, canvas, { autoResize: false, dpr: 1, size: renderBudget(initialTier, environment, gpu.gpu.limits.maxTextureDimension2D).size });
  controller = createQualityController({
    initialPreference: preference,
    initialDowngrade,
    createTier: (tier) => createScene(gpu!, output!, tier, daylight),
    onActivate(tier, scene) {
      const { size } = renderBudget(tier, environment, gpu!.gpu.limits.maxTextureDimension2D);
      output!.resize(size);
      scene.resize(size);
      health.reset();
    },
  });
  controller.subscribe((state) => send({ type: 'state', state }));
  await controller.ready;
  if (disposed) return;
  await applyConstraint();
  schedule();
}

async function applyConstraint() {
  const reason = environment.powerReason ?? (environment.constrainedDevice ? 'gpu-tier' : undefined);
  if (reason) await controller?.downgrade(reason);
}

worker.onmessage = (event: MessageEvent<RendererCommand>) => {
  const message = event.data;
  if (message.type === 'dispose') {
    dispose();
    send({ type: 'disposed' });
    worker.close();
    return;
  }
  if (disposed) return;
  if (message.type === 'init') {
    canvas = message.canvas;
    environment = message.environment;
    preference = message.preference;
    daylight = message.daylight ?? false;
    void initialize().catch(fail);
  } else if (message.type === 'environment') {
    environment = message.environment;
    stop();
    void (async () => {
      await initialize();
      await applyConstraint();
      schedule();
    })().catch(fail);
  } else if (message.type === 'preference') {
    preference = message.preference;
    void (async () => {
      await controller?.setPreference(preference);
      await applyConstraint();
      send({ type: 'preference-applied', id: message.id });
      schedule();
    })().catch(fail);
  }
};
