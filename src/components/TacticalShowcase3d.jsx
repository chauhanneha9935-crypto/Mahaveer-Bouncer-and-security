import React, { useState } from 'react';

export default function TacticalShowcase3D() {
  const [activeCard, setActiveCard] = useState(null);

  const tacticalUnits = [
    {
      id: 'guards',
      title: 'Armed Security Guards',
      tag: 'Industrial & Office',
      desc: 'Certified personnel engineered for infrastructure hardening, quick deployment, and round-the-clock facility monitoring.',
      img: 'https://ik.imagekit.io/tqlzfrmoqb/guard1.jpg',
      accent: 'border-amber-500/40 shadow-amber-500/10'
    },
    {
      id: 'bouncers',
      title: 'Tactical Bouncer Units',
      tag: 'Crowd & Event Elite',
      desc: 'Elite protection professionals specialized in high-capacity event security, de-escalation protocols, and risk mitigation.',
      img: 'https://ik.imagekit.io/tqlzfrmoqb/tactical_bouncer_unit.png',
      accent: 'border-amber-500/40 shadow-amber-500/10'
    },
    {
      id: 'vip',
      title: 'Close Protection Officers',
      tag: 'VIP Bodyguards',
      desc: 'Discreet, background-verified personal security details custom-tailored for celebrity protection and executive deployment.',
      img: 'https://ik.imagekit.io/tqlzfrmoqb/bodyguard1.avif',
      accent: 'border-amber-500/40 shadow-amber-500/10'
    }
  ];

  return (
    <section className="py-24 bg-neutral-950 text-white overflow-hidden" style={{ perspective: '1200px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0 text-left mb-24 border-b border-neutral-900 pb-12">
          <div>
             <div className="text-3xl sm:text-4xl font-black text-amber-500 tracking-tight">5K+</div> 
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-1">GUARDS</div>
          </div>
          <div className="border-l border-neutral-900 pl-6">
            <div className="text-3xl sm:text-4xl font-black text-amber-500 tracking-tight">15+</div>
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-1">YEARS</div>
          </div>
          <div className="border-l border-neutral-900 pl-6">
            <div className="text-3xl sm:text-4xl font-black text-amber-500 tracking-tight">42</div>
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-1">CITIES</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-28 text-left">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">ABOUT MAHAVEER</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight">
              Trusted security, delivered with discipline.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-neutral-400 text-sm sm:text-base font-semibold leading-relaxed pt-1">
              We are a trusted provider of trained and police-verified security professionals for residential, commercial, industrial and event environments — backed by relentless training and on-ground supervision.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">Elite Deployment Units</h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-xs sm:text-sm font-semibold">Tap on any tactical operational card to preview multi-axis structural depth projections.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 max-w-sm md:max-w-none mx-auto justify-center">
          {tacticalUnits.map((unit) => (
            <div 
              key={unit.id}
              onClick={() => setActiveCard(activeCard === unit.id ? null : unit.id)}
              className={`relative h-[26rem] sm:h-[28rem] w-full rounded-2xl cursor-pointer select-none group transform-gpu transition-all duration-500 ease-out [transform-style:preserve-3d] ${
                activeCard === unit.id 
                  ? '[transform:rotateX(15deg)_rotateY(-8deg)_scale(0.96)] ring-2 ring-amber-500/40' 
                  : '[transform:rotateX(6deg)_rotateY(-8deg)] md:[transform:rotateX(12deg)_rotateY(-15deg)] hover:[transform:rotateX(4deg)_rotateY(-3deg)_scale(1.02)]'
              }`}
            >
              <div className="absolute inset-0 bg-black/95 rounded-2xl filter blur-xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-[#060f21] rounded-2xl border border-neutral-800 [transform:translateZ(-10px)]"></div>
              <div className="absolute inset-0 bg-neutral-950 rounded-2xl border border-neutral-800 [transform:translateZ(-18px)]"></div>

              <div className={`absolute inset-0 rounded-2xl bg-cover bg-center border-2 ${unit.accent} overflow-hidden`}>
                <div className="absolute inset-0 bg-cover bg-center opacity-85 group-hover:opacity-100 transition-all" style={{ backgroundImage: `url('${unit.img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-95"></div>
                <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:animate-shine"></div>

                <div className="absolute bottom-6 left-6 right-6 text-left [transform:translateZ(30px)] transform-gpu transition-transform duration-500">
                  <span className="text-amber-500 text-xs font-black tracking-widest uppercase block mb-1">{unit.tag}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">{unit.title}</h3>
                  <p className="text-neutral-300 text-[11px] sm:text-xs font-semibold leading-relaxed opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">{unit.desc}</p>
                </div>
                <div className="absolute top-4 right-4 border border-neutral-700 bg-neutral-900/90 text-amber-500 w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shadow-xl [transform:translateZ(15px)]">⚙️</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}