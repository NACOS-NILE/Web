export const ANIMATION_EASING = [0.16, 1, 0.3, 1]; // Custom sharp out-quart
export const ANIMATION_DURATION = 0.8;

export const SPRING_CONFIG = {
  default: { stiffness: 150, damping: 20 },
  bouncy: { stiffness: 300, damping: 25 },
  pulse: { stiffness: 20, damping: 10 },
  magnetic: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 }
};

export const STAGGER_DELAYS = {
  fast: 0.05,
  default: 0.15,
  slow: 0.3
};
