import React from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const RVControls: React.FC = () => {
  const { camera } = useThree();

  return (
    <OrbitControls
      camera={camera}
      enableZoom={true}
      minDistance={5}
      maxDistance={15}
      enablePan={false}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
    />
  );
};