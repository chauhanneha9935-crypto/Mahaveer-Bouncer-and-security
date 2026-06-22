import React from 'react';
import Hero from './Hero'; 
import About from './About';
import TacticalShowcase3D from './TacticalShowcase3D';
import Strengths from './Strengths';

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