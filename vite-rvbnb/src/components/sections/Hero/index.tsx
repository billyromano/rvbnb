import React from 'react';
import { HeroContent } from './HeroContent';
import { WebGLBackground } from '../../three/WebGLBackground';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <WebGLBackground />
      <HeroContent />
    </div>
  );
};