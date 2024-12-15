'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { AnimatedSpheres } from './AnimatedSpheres';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export function Scene() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSpheres />
        <Environment preset="sunset" />
      </Canvas>
    </Suspense>
  );
}