import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface RVModelProps {
  color: string;
  view: 'exterior' | 'interior';
}

export const RVModel: React.FC<RVModelProps> = ({ color, view }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Enhanced floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Smooth rotation when hovered
      if (hovered) {
        meshRef.current.rotation.y += 0.003;
      }
    }
  });

  return (
    <group 
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {view === 'exterior' ? (
        <group position={[0, 0, 0]}>
          {/* Enhanced RV body with more details */}
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
          
          {/* Enhanced windows with realistic glass effect */}
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
          
          {/* Enhanced wheels with detailed rims and tires */}
          {[[-2, -1, 2], [2, -1, 2], [-2, -1, -2], [2, -1, -2]].map((pos, i) => (
            <group key={i} position={pos}>
              {/* Tire */}
              <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.7, 0.7, 0.5, 32]} />
                <meshStandardMaterial 
                  color="#1a1a1a"
                  roughness={0.8}
                  metalness={0.1}
                />
              </mesh>
              {/* Rim */}
              <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                <torusGeometry args={[0.7, 0.1, 16, 32]} />
                <meshStandardMaterial 
                  color="#C0C0C0"
                  metalness={0.9}
                  roughness={0.1}
                />
              </mesh>
              {/* Hub cap */}
              <mesh position={[0, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                <circleGeometry args={[0.3, 32]} />
                <meshStandardMaterial 
                  color="#A0A0A0"
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
            </group>
          ))}

          {/* Add roof details */}
          <mesh position={[0, 1.2, 0]} castShadow>
            <boxGeometry args={[3.8, 0.1, 7.8]} />
            <meshStandardMaterial color="#D3D3D3" />
          </mesh>

          {/* Add front grill */}
          <mesh position={[0, 0, 4]} castShadow>
            <boxGeometry args={[3.8, 0.8, 0.1]} />
            <meshStandardMaterial 
              color="#2F4F4F"
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
        </group>
      ) : (
        <group position={[0, 0, 0]}>
          {/* Enhanced interior with more details */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3.8, 1.8, 7.8]} />
            <meshStandardMaterial 
              color="#f5f5f5" 
              side={THREE.BackSide}
              metalness={0.1}
              roughness={0.8}
            />
          </mesh>
          
          {/* Kitchen area */}
          <mesh position={[-1.5, -0.5, -2]} castShadow>
            <boxGeometry args={[0.8, 1, 2]} />
            <meshStandardMaterial 
              color="#8B4513"
              roughness={0.7}
            />
          </mesh>
          
          {/* Seating area */}
          <mesh position={[1.5, -0.5, 1]} castShadow>
            <boxGeometry args={[0.8, 0.4, 1]} />
            <meshStandardMaterial 
              color="#A0522D"
              roughness={0.9}
            />
          </mesh>

          {/* Add bed area */}
          <mesh position={[0, -0.5, -3]} castShadow>
            <boxGeometry args={[2, 0.4, 2]} />
            <meshStandardMaterial 
              color="#DEB887"
              roughness={0.8}
            />
          </mesh>

          {/* Add overhead storage */}
          {[[-1.8, 0.7, 0], [1.8, 0.7, 0]].map((pos, i) => (
            <mesh key={i} position={pos} castShadow>
              <boxGeometry args={[0.3, 0.4, 4]} />
              <meshStandardMaterial 
                color="#D2691E"
                roughness={0.7}
              />
            </mesh>
          ))}
        </group>
      )}
    </group>
  );
};