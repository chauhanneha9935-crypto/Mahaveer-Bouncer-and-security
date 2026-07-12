import React from 'react';
import Hero from '../components/Hero'; 
import About from '../components/About';
import TacticalShowcase3d from '../components/TacticalShowcase3d';
import Achievements from '../components/Achievements'; // Assuming Strengths is also in components

export default function HomePage() {
  return (
    <>
      <Hero /> 
      <About />
      <TacticalShowcase3d />
      <Achievements />
    </>
  );
}