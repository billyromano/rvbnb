'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { RVModel } from './RVModel';
import { RVControls } from './RVControls';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import type { RVView } from '@/types/rv';

interface RVSceneProps {
  color: string;
  view: RVView;
}

export function Scene({ color, view }: RVSceneProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera
          makeDefault
          position={view === 'exterior' ? [5, 3, 5] : [0, 0, 0]}
          fov={50}
        />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <RVModel color={color} view={view} />
        <RVControls />
        
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.5}
          far={4.5}
        />
        
        <Environment preset="sunset" />
      </Canvas>
    </Suspense>
  );
}