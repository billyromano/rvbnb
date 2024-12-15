'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { RVCustomizer } from './RVCustomizer';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import type { RVView } from '@/types/rv';

// Dynamically import the Scene component
const Scene = dynamic(() => import('./Scene').then(mod => mod.Scene), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export function RVExplorer() {
  const [color, setColor] = useState('#FFFFFF');
  const [view, setView] = useState<RVView>('exterior');

  return (
    <div className="relative h-[600px] w-full rounded-xl overflow-hidden bg-gray-900">
      <Scene color={color} view={view} />
      <RVCustomizer
        onColorChange={setColor}
        onViewChange={setView}
        currentView={view}
      />
    </div>
  );
}