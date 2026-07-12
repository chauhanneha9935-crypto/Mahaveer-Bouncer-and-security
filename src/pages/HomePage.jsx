import React from 'react';
import Hero from '../components/Hero'; 
import About from '../components/About';
import TacticalShowcase3D from '../components/TacticalShowcase3D';
import Achievements from '../components/Achievements'; // Assuming Strengths is also in components

export default function HomePage() {
  return (
    <>
      <Hero /> 
      <About />
      <TacticalShowcase3D />
      <Achievements />
    </>
  );
}