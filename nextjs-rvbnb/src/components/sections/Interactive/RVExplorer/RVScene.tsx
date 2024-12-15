'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { RVModel } from './RVModel';
import { RVControls } from './RVControls';
import { RVCustomizer } from './RVCustomizer';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import type { RVView } from '@/types/rv';

export function RVScene() {
  const [color, setColor] = useState('#FFFFFF');
  const [view, setView] = useState<RVView>('exterior');

  return (
    <div className="relative h-[600px] w-full rounded-xl overflow-hidden bg-gray-900">
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
      
      <RVCustomizer
        onColorChange={setColor}
        onViewChange={setView}
        currentView={view}
      />
    </div>
  );
}