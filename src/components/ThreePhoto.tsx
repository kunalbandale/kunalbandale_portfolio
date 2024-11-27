import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

function PhotoMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <circleGeometry args={[1, 32]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function ThreePhoto() {
  return (
    <div className="w-32 h-32 mx-auto mb-8">
      <Canvas>
        <ambientLight intensity={1} />
        <PhotoMesh />
      </Canvas>
    </div>
  );
}