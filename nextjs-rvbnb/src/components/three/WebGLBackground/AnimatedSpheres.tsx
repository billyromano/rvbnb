'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function AnimatedSpheres() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 50 }).map((_, i) => (
        <Sphere
          key={i}
          position={[
            Math.random() * 20 - 10,
            Math.random() * 20 - 10,
            Math.random() * 20 - 10,
          ]}
          scale={0.1}
        >
          <meshStandardMaterial
            color={new THREE.Color(0.1, 0.3, 0.8)}
            transparent
            opacity={0.6}
          />
        </Sphere>
      ))}
    </group>
  );
}