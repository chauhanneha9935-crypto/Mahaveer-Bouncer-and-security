import React from 'react';
import Hero from '../components/Hero'; 
import About from '../components/About';
import TacticalShowcase3D from '../components/TacticalShowcase3D';
import Strengths from '../components/Strengths'; // Assuming Strengths is also in components

export default function HomePage() {
  return (
    <>
      <Hero /> 
      <About />
      <TacticalShowcase3D />
      <Strengths />
    </>
  );
}