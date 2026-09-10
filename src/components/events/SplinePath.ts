import * as THREE from "three";

// --- Define the S-Curve Path ---
// We create a CatmullRomCurve3 that snakes left and right (Z) as X increases.
const numPoints = 20;
const spacing = 12; // Spread out path significantly
const waveAmplitude = 3; 
const waveFrequency = 0.1; // Gentle curve

const pathPoints = [];
for (let i = 0; i < numPoints; i++) {
  const x = i * spacing;
  const z = Math.sin(x * waveFrequency) * waveAmplitude;
  pathPoints.push(new THREE.Vector3(x, 0, z));
}

export const sCurvePath = new THREE.CatmullRomCurve3(pathPoints);
