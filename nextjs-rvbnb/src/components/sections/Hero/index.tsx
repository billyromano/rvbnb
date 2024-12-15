'use client';

import { HeroContent } from './HeroContent';
import { WebGLBackground } from '@/components/three/WebGLBackground';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <WebGLBackground />
      <HeroContent />
    </div>
  );
}