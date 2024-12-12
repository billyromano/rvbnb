import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RVModelProps {
  color: string;
  view: 'exterior' | 'interior';
}

export const RVModel: React.FC<RVModelProps> = ({ color, view }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {view === 'exterior' ? (
        <group position={[0, 0, 0]}>
          {/* RV body */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[4, 2.2, 8]} />
            <meshPhysicalMaterial 
              color={color} 
              metalness={0.6}
              roughness={0.2}
              clearcoat={0.5}
              clearcoatRoughness={0.1}
            />
          </mesh>
          
          {/* Windows */}
          {[[-1.5, 0.5, -2], [1.5, 0.5, -2], [-1.5, 0.5, 0], [1.5, 0.5, 0]].map((pos, i) => (
            <mesh key={i} position={pos} castShadow>
              <boxGeometry args={[0.8, 0.8, 0.1]} />
              <meshPhysicalMaterial
                color="#87CEEB"
                transmission={0.9}
                thickness={0.5}
                roughness={0}
                ior={1.5}
              />
            </mesh>
          ))}
          
          {/* Wheels */}
          {[[-2, -1, 2], [2, -1, 2], [-2, -1, -2], [2, -1, -2]].map((pos, i) => (
            <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.7, 0.7, 0.5, 32]} />
              <meshStandardMaterial color="#1a1a1a" />
            </mesh>
          ))}
        </group>
      ) : (
        <group position={[0, 0, 0]}>
          {/* Interior walls */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3.8, 1.8, 7.8]} />
            <meshStandardMaterial 
              color="#f5f5f5" 
              side={THREE.BackSide}
            />
          </mesh>
          
          {/* Furniture */}
          <mesh position={[-1.5, -0.5, -2]} castShadow>
            <boxGeometry args={[0.8, 1, 2]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          
          <mesh position={[1.5, -0.5, 1]} castShadow>
            <boxGeometry args={[0.8, 0.4, 1]} />
            <meshStandardMaterial color="#A0522D" />
          </mesh>
        </group>
      )}
    </group>
  );
};