import React, { useState, useEffect, useRef } from 'react';

// Explicitly importing your verified files from src/assets/
import guard1 from '../assets/guard1.jpg';
import guard2 from '../assets/guard2.jpg';
import guard3 from '../assets/bodyguard3.png';
import guard4 from '../assets/bodyguard1.avif';
import guard5 from '../assets/bodyguard2.png';

// Verbatim reference placeholder tracking file name configuration:
// "WhatsApp Video 2026-06-19 at 12.27.04 PM_2.mp4"

export default function Hero() {
  const [topActiveSlide, setTopActiveSlide] = useState(2); // Center initial index (guard3)
  const videoRef = useRef(null);

  // Pipeline containing your 5 verified working assets
  const fullScreenBodyguards = [guard1, guard2, guard3, guard4, guard5];

  // Engine 1: Controls the Top Portrait 3D Carousel automatic interval progression
  useEffect(() => {
    const topCarouselTimer = setInterval(() => {
      setTopActiveSlide((prev) => (prev + 1) % fullScreenBodyguards.length);
    }, 2000); // Cycles the top portrait images seamlessly every 2 seconds

    return () => clearInterval(topCarouselTimer);
  }, [fullScreenBodyguards.length]);

  // Operational Navigation triggers for the top layout row slider structure
  const handlePrevTop = () => {
    setTopActiveSlide((prev) => (prev === 0 ? fullScreenBodyguards.length - 1 : prev - 1));
  };

  const handleNextTop = () => {
    setTopActiveSlide((prev) => (prev === fullScreenBodyguards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] text-white overflow-hidden pt-24 pb-16"
      style={{ perspective: '1200px' }}
    >
      {/* Background Precision Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none"></div>
      
      {/* Deep Tactical Ambient Light Flares */}
      <div className="absolute top-[20%] left-[5%] w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[25%] right-[5%] w-[32rem] h-[32rem] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full flex flex-col space-y-16 md:space-y-24">
        
        {/* ====================================================
            TOP SECTION: ELEVATED PORTRAIT 3D CAROUSEL ROW MODULE
           ==================================================== */}
        <div className="w-full flex flex-col items-center select-none overflow-hidden py-10 relative">
          
          {/* Main Display Row Layout wrapper matching depth mechanics */}
          <div className="relative flex items-center justify-center w-full h-[60vh] md:h-[75vh]">
            {fullScreenBodyguards.map((imgSrc, idx) => {
              // Calculate index delta displacement for spacing offsets
              let offset = idx - topActiveSlide;
              
              // Handle infinite carousel wrapper loop offsets math
              if (offset < -2) offset += fullScreenBodyguards.length;
              if (offset > 2) offset -= fullScreenBodyguards.length;

              const isVisible = Math.abs(offset) <= 2; // Show active center plus 2 left, 2 right cards
              const isActive = offset === 0;

              if (!isVisible) return null;

              return (
                <div
                  key={idx}
                  onClick={() => setTopActiveSlide(idx)}
                  className="absolute transition-all duration-700 ease-out border bg-neutral-950/20 border-transparent shadow-none cursor-pointer"
                  style={{
                    width: isActive ? '100vw' : '25vw',
                    height: '100%',
                    maxWidth: isActive ? '100%' : '320px',
                    transform: `translateX(${offset * 110}%) scale(${isActive ? 1 : 0.82}) translateZ(${isActive ? '0px' : '-160px'})`,
                    zIndex: isActive ? 30 : 20 - Math.abs(offset),
                    opacity: isActive ? 1 : 0.25,
                    transition: 'all 0.8s cubic-bezier(0.2, 1, 0.2, 1)'
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-1000"
                    style={{ backgroundImage: `url('${imgSrc}')` }}
                  ></div>
                  
                  {/* Luxury Ambient Contrast Shading Tints */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-70'}`}></div>

                  {/* Active Highlight Corner Glow Bars */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_20px_#f59e0b]"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Core Layout Navigation Direction Controllers */}
          <div className="flex items-center space-x-6 mt-8 z-30">
            <button 
              onClick={handlePrevTop}
              className="w-12 h-12 rounded-full border border-zinc-800 bg-neutral-950/80 text-white flex items-center justify-center hover:border-amber-500/50 hover:text-amber-400 transition-all active:scale-95 cursor-pointer"
            >
              ←
            </button>
            <button 
              onClick={handleNextTop}
              className="w-12 h-12 rounded-full border border-zinc-800 bg-neutral-950/80 text-white flex items-center justify-center hover:border-amber-500/50 hover:text-amber-400 transition-all active:scale-95 cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        {/* ====================================================
            MAIN HERO BASE GRID
           ==================================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: PRIMARY TYPOGRAPHY HEADLINES */}
          <div className="flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-1 lg:col-span-7">
            <div className="self-center lg:self-start border border-amber-500/30 bg-[#161107] px-5 py-2 rounded-full font-bold tracking-widest text-xs text-amber-400 uppercase shadow-[0_0_15px_rgba(245,158,11,0.05)]">
              PAN-INDIA DEPLOYMENT • 24x7
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight select-none text-white">
              Professional Security <br /> Solutions for <span className="text-amber-500">Every <br /> Need</span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-semibold">
              Highly trained Security Guards, Bouncers, Event Staff, VIP Protection & Corporate Security — verified, uniformed and ready to deploy.
            </p>
            
            {/* Action Buttons Container */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2 w-full max-w-xs sm:max-w-md mx-auto lg:mx-0">
              
              {/* PRIMARY INTERACTIVE CLICK ACTION */}
              <a href="/inquiry" className="group relative w-full sm:w-auto rounded-xl bg-neutral-900 font-medium text-white uppercase tracking-wider text-xs sm:text-sm transition-all duration-100 h-14 flex-1">
                <span className="absolute inset-0 w-full h-full rounded-xl bg-neutral-950 transform translate-y-1 group-hover:translate-y-1.5 group-active:translate-y-0 transition-transform"></span>
                <span className="relative block px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-700 transform -translate-y-0.5 group-hover:-translate-y-1 group-active:translate-y-0 transition-transform text-center whitespace-nowrap hover:text-amber-400 transition-colors">
                  Request Security Staff →
                </span>
              </a>

              {/* SECONDARY NAVIGATION LINK */}
              <a href="/services" className="group relative w-full sm:w-auto rounded-xl bg-neutral-900 font-medium text-white uppercase tracking-wider text-xs sm:text-sm transition-all duration-100 h-14 flex-1">
                <span className="absolute inset-0 w-full h-full rounded-xl bg-neutral-950 transform translate-y-1 group-hover:translate-y-1.5 group-active:translate-y-0 transition-transform"></span>
                <span className="relative block px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-700 transform -translate-y-0.5 group-hover:-translate-y-1 group-active:translate-y-0 transition-transform text-center whitespace-nowrap hover:text-amber-400 transition-colors">
                  Explore Services
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: RADAR NAVIGATION HUB WITH PROTECTION LOOP */}
          <div className="flex items-center justify-center order-2 lg:order-2 lg:col-span-5 w-full">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center select-none group">
              
              <div className="absolute w-[100%] h-[100%] border border-zinc-900 rounded-full pointer-events-none"></div>
              <div className="absolute w-[82%] h-[82%] border border-zinc-900/60 rounded-full pointer-events-none"></div>
              <div className="absolute w-[64%] h-[64%] border border-dashed border-zinc-900/40 rounded-full pointer-events-none"></div>

              {/* Core 3D Interactive Video Display Window */}
              <div 
                className="relative w-56 h-72 sm:w-72 sm:h-[24rem] rounded-2xl bg-neutral-950 transform-gpu [transform-style:preserve-3d] z-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-amber-500/20 [transform:rotateX(14deg)_rotateY(-18deg)] hover:[transform:rotateX(4deg)_rotateY(-4deg)_scale(1.02)] transition-all duration-500 ease-out"
              >
                {/* 
                  UPDATED TACTICAL VIDEO STREAM:
                  Replaces static screenshot frames directly with the customized close protection loop.
                */}
                <video
                  ref={videoRef}
                  src="https://v.ftcdn.net/09/08/94/39/700_F_908943960_8i2E96ZqXy1p01vjG9n8p3w8B9N6mXyW_ST.mp4"
                  poster={guard4}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-85"
                />

                <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:animate-[shine_1.6s_ease-in-out]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/10 to-transparent opacity-85 rounded-2xl"></div>

                {/* HUD Viewport Labels */}
                <div className="absolute bottom-6 left-5 right-5 text-left [transform:translateZ(25px)] transform-gpu transition-transform duration-500">
                  <div className="text-amber-400 text-[10px] font-black tracking-widest uppercase mb-0.5 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Live Operations Stream</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-black text-white uppercase tracking-tight">Active Deployment</h3>
                  <p className="text-zinc-400 text-[10px] sm:text-[11px] mt-0.5 font-semibold">Real-time close protection channel feed.</p>
                </div>

                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/60 px-2.5 py-1 rounded border border-neutral-800 backdrop-blur-sm [transform:translateZ(10px)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></div>
                  <span className="text-[9px] font-mono font-black text-zinc-300 tracking-wider uppercase">REC • CAM-01</span>
                </div>

                <div className="absolute inset-2 rounded-xl border border-amber-500/10 pointer-events-none [transform:translateZ(15px)] transition-all duration-500 group-hover:border-amber-500/30"></div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}