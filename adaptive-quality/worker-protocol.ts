import type { QualityPreference, QualityState } from './quality';

export interface RenderEnvironment {
  readonly width: number;
  readonly height: number;
  readonly dpr: number;
  readonly visible: boolean;
  readonly reducedMotion: boolean;
  readonly powerReason: 'battery' | 'data-saver' | null;
  readonly constrainedDevice: boolean;
}

export type RendererCommand =
  | { type: 'init'; canvas: OffscreenCanvas; environment: RenderEnvironment; preference: QualityPreference; daylight?: boolean }
  | { type: 'environment'; environment: RenderEnvironment }
  | { type: 'preference'; preference: QualityPreference; id: number }
  | { type: 'dispose' };

export type RendererEvent =
  | { type: 'ready' }
  | { type: 'state'; state: QualityState }
  | { type: 'preference-applied'; id: number }
  | { type: 'error'; message: string }
  | { type: 'disposed' };
