// Sunlit cumulus, ray-marched through a drifting three-dimensional cloud layer.
// Display-ready output: daylight does not need the nighttime bloom pipeline.
struct Params {
  time: f32,
  aspect: f32,
  steps: u32,
  tonemap: u32,
}

@group(0) @binding(0) var<uniform> params: Params;

fn hash(p: vec3f) -> f32 {
  let q = fract(p * vec3f(0.1031, 0.1030, 0.0973));
  let r = q + dot(q, q.yxz + 33.33);
  return fract((r.x + r.y) * r.z);
}

fn noise(p: vec3f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  let a = mix(hash(i), hash(i + vec3f(1.0, 0.0, 0.0)), u.x);
  let b = mix(hash(i + vec3f(0.0, 1.0, 0.0)), hash(i + vec3f(1.0, 1.0, 0.0)), u.x);
  let c = mix(hash(i + vec3f(0.0, 0.0, 1.0)), hash(i + vec3f(1.0, 0.0, 1.0)), u.x);
  let d = mix(hash(i + vec3f(0.0, 1.0, 1.0)), hash(i + vec3f(1.0, 1.0, 1.0)), u.x);
  return mix(mix(a, b, u.y), mix(c, d, u.y), u.z);
}

fn density(p: vec3f) -> f32 {
  let shape = noise(p) * 0.52 + noise(p * 2.03 + 11.7) * 0.26
    + noise(p * 4.07 + 23.1) * 0.13 + noise(p * 8.13 + 41.3) * 0.06
    + noise(p * 16.27 + 59.2) * 0.03;
  // A finite cloud layer gives the silhouettes volume rather than flat noise.
  let layer = smoothstep(0.0, 0.45, p.z) * (1.0 - smoothstep(2.0, 3.0, p.z));
  return smoothstep(0.52, 0.62, shape) * layer * 3.6;
}

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let screen = vec2f((uv.x - 0.5) * params.aspect, 0.5 - uv.y);
  let sunDistance = length(screen - vec2f(params.aspect * 0.34, 0.34));
  let sunlight = exp(-sunDistance * sunDistance * 4.0);
  var sky = mix(vec3f(0.36, 0.68, 0.92), vec3f(0.79, 0.89, 0.97), uv.y);
  sky = mix(sky, vec3f(1.0, 0.94, 0.80), sunlight * 0.36);

  let steps = max(params.steps, 4u);
  let stepSize = 3.0 / f32(steps);
  let drift = vec2f(params.time * 0.035, params.time * 0.006);
  let lightDirection = normalize(vec3f(0.65, 0.8, -0.5));
  var transmittance = 1.0;
  var accumulated = vec3f(0.0);
  for (var i = 0u; i < steps; i++) {
    let depth = (f32(i) + 0.5) * stepSize;
    let p = vec3f(screen * 4.2 + drift + vec2f(3.1, 7.4), depth);
    let d = density(p);
    if (d > 0.001) {
      let shade = density(p + lightDirection * 0.35);
      let illumination = exp(-shade * 0.85);
      let cloud = mix(vec3f(0.58, 0.72, 0.84), vec3f(1.0, 0.98, 0.93), illumination);
      let opacity = 1.0 - exp(-d * stepSize * 2.2);
      accumulated += transmittance * opacity * cloud;
      transmittance *= 1.0 - opacity;
      if (transmittance < 0.015) { break; }
    }
  }
  return vec4f(accumulated + sky * transmittance, 1.0);
}
