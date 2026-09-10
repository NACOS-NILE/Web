import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

export const RippleCardMaterial = shaderMaterial(
  {
    uTexture: new THREE.Texture(),
    uAlphaMap: new THREE.Texture(),
    uRippleOrigin: new THREE.Vector2(0.5, 0.5),
    uRippleStartTime: -9999.0,
    uTime: 0,
    uHover: 0,
    uBendDir: 0.0, // Amount and direction to bend vertices
  },
  // vertex shader
  `
    varying vec2 vUv;
    uniform float uBendDir;
    uniform vec2 uRippleOrigin;
    uniform float uRippleStartTime;
    uniform float uTime;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // 1. Spline curvature bend (static per card)
      // Bend the plane based on local X position (parabola) matching the path's curvature
      pos.z += pos.x * pos.x * uBendDir;

      // 2. Ripple displacement (dynamic, active on hover)
      float timeSinceRipple = uTime - uRippleStartTime;
      if (timeSinceRipple > 0.0 && timeSinceRipple < 2.0) {
        float dist = distance(uv, uRippleOrigin);
        float rippleRadius = timeSinceRipple * 0.8;
        float rippleWidth = 0.15;
        
        // expanding wave ring
        float ripple = sin((dist - rippleRadius) * 20.0) * exp(-abs(dist - rippleRadius) / rippleWidth);
        float decay = exp(-timeSinceRipple * 3.0);
        
        pos += normal * ripple * decay * 0.15;
      }

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // fragment shader
  `
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform sampler2D uAlphaMap;
    uniform vec2 uRippleOrigin;
    uniform float uRippleStartTime;
    uniform float uTime;
    uniform float uHover;

    void main() {
      vec2 uv = vUv;
      
      // Fragment UV distortion for a liquid look
      float timeSinceRipple = uTime - uRippleStartTime;
      if (timeSinceRipple > 0.0 && timeSinceRipple < 2.0) {
        float dist = distance(uv, uRippleOrigin);
        float rippleRadius = timeSinceRipple * 0.8;
        float rippleWidth = 0.15;
        
        float ripple = sin((dist - rippleRadius) * 20.0) * exp(-abs(dist - rippleRadius) / rippleWidth);
        float decay = exp(-timeSinceRipple * 3.0);
        
        // distort UV slightly toward the ripple origin
        uv += normalize(uv - uRippleOrigin + 0.0001) * ripple * decay * 0.05;
      }
      
      vec4 tex = texture2D(uTexture, uv);
      vec4 alpha = texture2D(uAlphaMap, vUv);
      
      if (alpha.r < 0.1) discard; 
      
      float brightness = mix(0.5, 1.0, uHover);
      gl_FragColor = vec4(tex.rgb * brightness, alpha.r);
    }
  `
);
