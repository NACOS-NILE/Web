"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { sCurvePath } from "./SplinePath";

// B8 fix: Pre-allocate THREE objects outside useFrame to eliminate GC pressure
const _pos = new THREE.Vector3();
const _lookTarget = new THREE.Vector3();
const _tangent = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _targetQuat = new THREE.Quaternion();
const _lookMatrix = new THREE.Matrix4();

export function SplineCamera({ scrollProgressRef }: { scrollProgressRef: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  
  useFrame(() => {
    const t = THREE.MathUtils.clamp(scrollProgressRef.current, 0.001, 0.999);
    
    // B8 fix: Reuse pre-allocated vectors via .copy() instead of new THREE.Vector3()
    sCurvePath.getPointAt(t, _pos);
    sCurvePath.getTangentAt(t, _tangent);
    
    // Smoothly lerp camera position
    camera.position.lerp(_pos, 0.1);
    
    // Look slightly ahead on the path
    _lookTarget.copy(_pos).add(_tangent);
    
    // Build rotation matrix and extract quaternion — no allocations
    _lookMatrix.lookAt(camera.position, _lookTarget, _up);
    _targetQuat.setFromRotationMatrix(_lookMatrix);
    camera.quaternion.slerp(_targetQuat, 0.1);
  });
  
  return null;
}
