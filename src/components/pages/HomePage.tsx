import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { HeroScene } from '../../scenes/HeroScene';
import { HeroOverlay } from '../ui/HeroOverlay';

const HomePage: React.FC = () => {
  return (
    <div className="relative h-screen" style={{ zIndex: 0 }}>
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }} className="absolute inset-0" style={{ zIndex: 2 }}>
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 3 }}>
        <HeroOverlay />
      </div>
    </div>
  );
};

export default HomePage;
