'use client';

import dynamic from 'next/dynamic';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// Dynamically import the Scene component to avoid SSR issues with Three.js
const Scene = dynamic(() => import('./Scene').then(mod => mod.Scene), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export function WebGLBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Scene />
    </div>
  );
}