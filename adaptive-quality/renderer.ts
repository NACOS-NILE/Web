import type { QualityPreference, QualityState } from './quality';
import type { RenderEnvironment, RendererCommand, RendererEvent } from './worker-protocol';

interface BatteryManagerLike extends EventTarget {
  readonly charging: boolean;
  readonly level: number;
}
interface ConnectionLike extends EventTarget { readonly saveData?: boolean }
interface PowerNavigator extends Navigator {
  getBattery?(): Promise<BatteryManagerLike>;
  readonly connection?: ConnectionLike;
  readonly deviceMemory?: number;
}

export interface RendererOptions {
  readonly canvas: HTMLCanvasElement;
  readonly initialPreference?: QualityPreference;
  readonly daylight?: boolean;
  readonly onError?: (error: unknown) => void;
}

export interface Renderer {
  /** Resolves after the first GPU frame completes, or on cancellation. */
  readonly ready: Promise<void>;
  getState(): QualityState;
  subscribe(listener: (state: QualityState) => void): () => void;
  setPreference(preference: QualityPreference): Promise<void>;
  dispose(): void;
}

/** Main-thread bridge only: no shaders, GPU probing, render loop, or frame messages. */
export function createRenderer(options: RendererOptions): Renderer {
  const { canvas } = options;
  const nav = navigator as PowerNavigator;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let disposed = false;
  let worker: Worker | undefined;
  let battery: BatteryManagerLike | undefined;
  let resizeObserver: ResizeObserver | undefined;
  let intersectionObserver: IntersectionObserver | undefined;
  let dprQuery: MediaQueryList | undefined;
  let resizeFrame = 0;
  let pageHidden = false;
  let inViewport = false;
  let lastEnvironment = '';
  let requestId = 0;
  const pending = new Map<number, () => void>();
  let preference = options.initialPreference ?? 'auto';
  let state: QualityState = { preference, effective: preference === 'low' ? 'low' : 'high', reason: preference === 'auto' ? 'initial' : 'forced' };
  const listeners = new Set<(state: QualityState) => void>();
  let resolveReady!: () => void;
  let rejectReady!: (error: unknown) => void;
  const ready = new Promise<void>((resolve, reject) => { resolveReady = resolve; rejectReady = reject; });

  const send = (message: RendererCommand) => worker?.postMessage(message);
  const environment = (): RenderEnvironment => {
    const { width, height } = canvas.getBoundingClientRect();
    return {
      width, height, dpr: window.devicePixelRatio || 1,
      visible: !pageHidden && document.visibilityState === 'visible' && inViewport,
      reducedMotion: motion.matches,
      // Low battery is a heuristic; the web has no universal OS saver-mode API.
      powerReason: nav.connection?.saveData ? 'data-saver'
        : battery?.charging === false && Number.isFinite(battery.level) && battery.level <= 0.3 ? 'battery' : null,
      constrainedDevice: (nav.hardwareConcurrency > 0 && nav.hardwareConcurrency <= 4)
        || (nav.deviceMemory !== undefined && nav.deviceMemory <= 4),
    };
  };
  const update = () => {
    if (disposed) return;
    const next = environment();
    const key = JSON.stringify(next);
    if (lastEnvironment === key) return;
    lastEnvironment = key;
    send({ type: 'environment', environment: next });
  };
  const measure = () => {
    if (disposed || resizeFrame) return;
    resizeFrame = requestAnimationFrame(() => { resizeFrame = 0; update(); });
  };
  const watchDpr = () => {
    dprQuery?.removeEventListener('change', watchDpr);
    dprQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
    dprQuery.addEventListener('change', watchDpr);
    measure();
  };
  const onPageHide = () => { pageHidden = true; update(); };
  const onPageShow = () => { pageHidden = false; update(); };

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeObserver?.disconnect();
    intersectionObserver?.disconnect();
    dprQuery?.removeEventListener('change', watchDpr);
    window.removeEventListener('resize', measure);
    window.removeEventListener('pagehide', onPageHide);
    window.removeEventListener('pageshow', onPageShow);
    document.removeEventListener('visibilitychange', update);
    motion.removeEventListener('change', update);
    nav.connection?.removeEventListener('change', update);
    battery?.removeEventListener('levelchange', update);
    battery?.removeEventListener('chargingchange', update);
    listeners.clear();
    for (const resolve of pending.values()) resolve();
    pending.clear();
    resolveReady();
    if (worker) {
      const retiring = worker;
      worker = undefined;
      // Give the worker a chance to explicitly destroy the device, then terminate
      // even if GPU initialization is stuck or the worker is unresponsive.
      const timeout = setTimeout(() => retiring.terminate(), 1000);
      retiring.onmessage = (event: MessageEvent<RendererEvent>) => {
        if (event.data.type === 'disposed') {
          clearTimeout(timeout);
          retiring.terminate();
        }
      };
      retiring.onerror = null;
      retiring.onmessageerror = null;
      retiring.postMessage({ type: 'dispose' } satisfies RendererCommand);
    }
  };
  const fail = (error: unknown) => {
    if (disposed) return;
    rejectReady(error);
    dispose();
    options.onError?.(error);
  };

  // Deferral makes React Strict Mode's setup/cleanup/setup cycle safe: its
  // cancelled setup never transfers the canvas (a one-way, one-time operation).
  queueMicrotask(() => {
    if (disposed) return;
    try {
      if (!navigator.gpu || typeof Worker === 'undefined' || !canvas.transferControlToOffscreen) {
        throw new Error('Worker WebGPU rendering is unavailable');
      }
      worker = new Worker(new URL('./renderer.worker.ts', import.meta.url), { type: 'module', name: 'hero-webgpu' });
      worker.onmessage = (event: MessageEvent<RendererEvent>) => {
        if (disposed) return;
        const message = event.data;
        if (message.type === 'ready') resolveReady();
        else if (message.type === 'state') {
          state = message.state;
          for (const listener of listeners) listener(state);
        } else if (message.type === 'error') fail(new Error(message.message));
        else if (message.type === 'preference-applied') {
          pending.get(message.id)?.();
          pending.delete(message.id);
        }
      };
      worker.onerror = (event) => { event.preventDefault(); fail(new Error(event.message || 'Hero worker failed')); };
      worker.onmessageerror = () => fail(new Error('Hero worker message could not be decoded'));
      const rect = canvas.getBoundingClientRect();
      inViewport = rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
      const initial = environment();
      lastEnvironment = JSON.stringify(initial);
      const offscreen = canvas.transferControlToOffscreen();
      worker.postMessage({ type: 'init', canvas: offscreen, preference, daylight: options.daylight ?? false, environment: initial } satisfies RendererCommand, [offscreen]);

      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(canvas);
      intersectionObserver = new IntersectionObserver(([entry]) => {
        inViewport = entry.isIntersecting;
        update();
      });
      intersectionObserver.observe(canvas);
      watchDpr();
      window.addEventListener('resize', measure);
      window.addEventListener('pagehide', onPageHide);
      window.addEventListener('pageshow', onPageShow);
      document.addEventListener('visibilitychange', update);
      motion.addEventListener('change', update);
      nav.connection?.addEventListener('change', update);
      // Event-driven and optional: unsupported/rejected battery access never blocks paint.
      void Promise.resolve().then(() => nav.getBattery?.()).then((manager) => {
        if (disposed || !manager) return;
        battery = manager;
        battery.addEventListener('levelchange', update);
        battery.addEventListener('chargingchange', update);
        update();
      }).catch(() => {});
    } catch (error) {
      fail(error);
    }
  });

  return {
    ready,
    getState: () => state,
    subscribe(listener) { listeners.add(listener); return () => { listeners.delete(listener); }; },
    setPreference(next) {
      if (disposed) return Promise.resolve();
      preference = next;
      if (!worker) return Promise.resolve();
      const id = ++requestId;
      return new Promise<void>((resolve) => {
        pending.set(id, resolve);
        send({ type: 'preference', preference: next, id });
      });
    },
    dispose,
  };
}
