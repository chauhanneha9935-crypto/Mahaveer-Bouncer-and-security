import { useState, useEffect } from 'react';

export default function Hero() {
  const [topActiveSlide, setTopActiveSlide] = useState(2);
  const [activeStreamIdx, setActiveStreamIdx] = useState(0);
  const [timecode, setTimecode] = useState('00:00:00:00');

  const fullScreenBodyguards = [
    'https://ik.imagekit.io/tqlzfrmoqb/guard1.jpg',
    'https://ik.imagekit.io/tqlzfrmoqb/guard2.jpg',
    'https://ik.imagekit.io/tqlzfrmoqb/bodyguard3.png',
    'https://ik.imagekit.io/tqlzfrmoqb/bodyguard1.avif',
    'https://ik.imagekit.io/tqlzfrmoqb/bodyguard2.png'
  ];

  const streamImages = [
    'https://ik.imagekit.io/tqlzfrmoqb/guard1.jpg',
    'https://ik.imagekit.io/tqlzfrmoqb/guard2.jpg',
    'https://ik.imagekit.io/tqlzfrmoqb/bodyguard3.png',
    'https://ik.imagekit.io/tqlzfrmoqb/bodyguard1.avif',
    'https://ik.imagekit.io/tqlzfrmoqb/bodyguard2.png',
    'https://ik.imagekit.io/tqlzfrmoqb/tactical_bouncer_unit.png',
    'https://ik.imagekit.io/tqlzfrmoqb/trained_professionals.png',
    'https://ik.imagekit.io/tqlzfrmoqb/verified_staff.png'
  ];

  // Stream slide transition
  useEffect(() => {
    const streamTimer = setInterval(() => {
      setActiveStreamIdx((prev) => (prev + 1) % streamImages.length);
    }, 5000);
    return () => clearInterval(streamTimer);
  }, [streamImages.length]);

  // Timecode counter
  useEffect(() => {
    let startTime = Date.now();
    const tcTimer = setInterval(() => {
      const elapsedMs = Date.now() - startTime;
      const totalFrames = Math.floor(elapsedMs / 33.33);
      const f = totalFrames % 30;
      const s = Math.floor(totalFrames / 30) % 60;
      const m = Math.floor(totalFrames / 1800) % 60;
      const h = Math.floor(totalFrames / 108000) % 24;
      
      const pad = (n) => n.toString().padStart(2, '0');
      setTimecode(`${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`);
    }, 33);
    return () => clearInterval(tcTimer);
  }, []);

  // Top Carousel Engine
  useEffect(() => {
    const topCarouselTimer = setInterval(() => {
      setTopActiveSlide((prev) => (prev + 1) % fullScreenBodyguards.length);
    }, 2000);
    return () => clearInterval(topCarouselTimer);
  }, [fullScreenBodyguards.length]);

  const handlePrevTop = () => {
    setTopActiveSlide((prev) => (prev === 0 ? fullScreenBodyguards.length - 1 : prev - 1));
  };

  const handleNextTop = () => {
    setTopActiveSlide((prev) => (prev === fullScreenBodyguards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] text-white overflow-hidden pt-20 sm:pt-20 pb-10 sm:pb-16" style={{ perspective: '1200px' }}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[5%] w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[25%] right-[5%] w-[32rem] h-[32rem] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full flex flex-col space-y-8 sm:space-y-14 md:space-y-24">
        <div className="w-full flex flex-col items-center select-none overflow-hidden pt-0 pb-4 sm:pt-2 sm:pb-8 md:pt-4 md:pb-10 relative">
          <div className="relative flex items-center justify-center w-full h-[48vh] sm:h-[60vh] md:h-[75vh]">
            {fullScreenBodyguards.map((imgSrc, idx) => {
              let offset = idx - topActiveSlide;
              if (offset < -2) offset += fullScreenBodyguards.length;
              if (offset > 2) offset -= fullScreenBodyguards.length;
              const isVisible = Math.abs(offset) <= 2;
              const isActive = offset === 0;
              if (!isVisible) return null;
              return (
                <div key={idx} onClick={() => setTopActiveSlide(idx)} className="absolute transition-all duration-700 ease-out border bg-neutral-950/20 border-transparent shadow-none cursor-pointer" style={{ width: isActive ? '100vw' : '25vw', height: '100%', maxWidth: isActive ? '100%' : '320px', transform: `translateX(${offset * 110}%) scale(${isActive ? 1 : 0.82}) translateZ(${isActive ? '0px' : '-160px'})`, zIndex: isActive ? 30 : 20 - Math.abs(offset), opacity: isActive ? 1 : 0.25, transition: 'all 0.8s cubic-bezier(0.2, 1, 0.2, 1)' }}>
                  <div className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-1000" style={{ backgroundImage: `url('${imgSrc}')` }}></div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-70'}`}></div>
                  {isActive && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_20px_#f59e0b]"></div>}
                </div>
              );
            })}
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6 mt-4 sm:mt-6 md:mt-8 z-30">
            <button onClick={handlePrevTop} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-800 bg-neutral-950/80 text-white flex items-center justify-center hover:border-amber-500/50 hover:text-amber-400 transition-all active:scale-95 cursor-pointer">←</button>
            <button onClick={handleNextTop} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-800 bg-neutral-950/80 text-white flex items-center justify-center hover:border-amber-500/50 hover:text-amber-400 transition-all active:scale-95 cursor-pointer">→</button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:order-1 lg:col-span-7">
            <div className="self-center lg:self-start border border-amber-500/30 bg-[#161107] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full font-bold tracking-wider sm:tracking-widest text-[10px] sm:text-xs text-amber-400 uppercase shadow-[0_0_15px_rgba(245,158,11,0.05)]">PAN-INDIA DEPLOYMENT • 24x7</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight select-none text-white">Professional Security <br /> Solutions for <span className="text-amber-500">Every <br /> Need</span></h1>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-semibold px-2 sm:px-0">Highly trained Security Guards, Bouncers, Event Staff, VIP Protection & Corporate Security — verified, uniformed and ready to deploy.</p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full max-w-xs sm:max-w-md mx-auto lg:mx-0">
              <a href="/inquiry" className="group relative w-full sm:w-auto rounded-xl bg-neutral-900 font-medium text-white uppercase tracking-wider text-xs sm:text-sm transition-all duration-100 h-14 flex-1">
                <span className="absolute inset-0 w-full h-full rounded-xl bg-neutral-950 transform translate-y-1 group-hover:translate-y-1.5 group-active:translate-y-0 transition-transform"></span>
                <span className="relative block px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-700 transform -translate-y-0.5 group-hover:-translate-y-1 group-active:translate-y-0 transition-transform text-center whitespace-nowrap hover:text-amber-400 transition-colors">Request Security Staff →</span>
              </a>
              <a href="/services" className="group relative w-full sm:w-auto rounded-xl bg-neutral-900 font-medium text-white uppercase tracking-wider text-xs sm:text-sm transition-all duration-100 h-14 flex-1">
                <span className="absolute inset-0 w-full h-full rounded-xl bg-neutral-950 transform translate-y-1 group-hover:translate-y-1.5 group-active:translate-y-0 transition-transform"></span>
                <span className="relative block px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-700 transform -translate-y-0.5 group-hover:-translate-y-1 group-active:translate-y-0 transition-transform text-center whitespace-nowrap hover:text-amber-400 transition-colors">Explore Services</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center order-2 lg:order-2 lg:col-span-5 w-full">
            <div className="relative w-full max-w-[310px] sm:max-w-[420px] aspect-square flex items-center justify-center select-none group">
              <div className="absolute w-[100%] h-[100%] border border-zinc-900 rounded-full pointer-events-none"></div>
              <div className="absolute w-[82%] h-[82%] border border-zinc-900/60 rounded-full pointer-events-none"></div>
              <div className="absolute w-[64%] h-[64%] border border-dashed border-zinc-900/40 rounded-full pointer-events-none"></div>
              <div className="relative w-56 h-72 sm:w-72 sm:h-[24rem] rounded-2xl bg-neutral-950 transform-gpu [transform-style:preserve-3d] z-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-amber-500/20 [transform:rotateX(14deg)_rotateY(-18deg)] hover:[transform:rotateX(4deg)_rotateY(-4deg)_scale(1.02)] transition-all duration-500 ease-out overflow-hidden">
                <style>{`
                  @keyframes kenburns-pan-zoom { 0% { transform: scale(1.02) translate(0, 0); } 50% { transform: scale(1.15) translate(-1.5%, 1%); } 100% { transform: scale(1.02) translate(0, 0); } }
                  .animate-kenburns-active { animation: kenburns-pan-zoom 12s ease-in-out infinite; }
                  @keyframes scanline-vertical { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
                  .animate-vertical-scanline { animation: scanline-vertical 8s linear infinite; }
                  @keyframes tracking-frame { 0% { transform: translate(-50%, -50%) translate(-6px, -4px); } 100% { transform: translate(-50%, -50%) translate(-6px, -4px); } }
                  .animate-tracking-hud { animation: tracking-frame 14s ease-in-out infinite; }
                `}</style>
                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-neutral-950/90 select-none">
                  {streamImages.map((imgSrc, idx) => (
                    <div key={idx} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${idx === activeStreamIdx ? 'opacity-80 animate-kenburns-active' : 'opacity-0'}`} style={{ backgroundImage: `url('${imgSrc}')` }} />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/10 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(10,220,10,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,220,10,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <div className="absolute left-0 right-0 h-[2px] bg-emerald-500/15 top-0 animate-vertical-scanline" />
                  <div className="absolute top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-36 border border-transparent animate-tracking-hud z-20">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-400" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-emerald-400" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-emerald-400" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-400" />
                  </div>
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <div className="flex items-center space-x-2 bg-black/60 px-2 py-0.5 rounded border border-neutral-800 backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                      <span className="text-[8px] font-mono font-black text-zinc-300 tracking-wider uppercase">REC • CAM-01</span>
                    </div>
                    <div className="flex flex-col items-end text-right font-mono bg-black/60 px-2.5 py-0.5 rounded border border-neutral-800 backdrop-blur-sm">
                      <span className="text-amber-500 text-[9px] font-bold tracking-wider">{timecode}</span>
                      <span className="text-emerald-500 text-[7px] tracking-widest font-semibold uppercase">LIVE OPERATIONAL FEED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}