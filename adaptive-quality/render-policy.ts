import { tierDpr, type QualityTier } from './quality';
import type { RenderEnvironment } from './worker-protocol';

/** A decorative background gets a bounded budget, including on Retina/4K screens. */
export function renderBudget(tier: QualityTier, environment: RenderEnvironment, maxDimension = 8192) {
  const saving = environment.powerReason !== null;
  const low = tier === 'low' || saving;
  const fps = saving ? 15 : low ? 20 : 30;
  const pixelBudget = low ? 750_000 : 2_000_000;
  const width = Math.max(1, environment.width);
  const height = Math.max(1, environment.height);
  const scale = Math.min(
    tierDpr(low ? 'low' : 'high', environment.dpr),
    Math.sqrt(pixelBudget / (width * height)),
    maxDimension / width,
    maxDimension / height,
  );
  return {
    fps,
    size: [Math.max(1, Math.floor(width * scale)), Math.max(1, Math.floor(height * scale))] as const,
    active: environment.visible && !environment.reducedMotion && environment.width > 0 && environment.height > 0,
  };
}
