import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Expanded asset pipeline featuring Indian bodyguard and elite tactical operations imagery
  const automaticSliderImages = [
    {
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
      title: 'VIP Escort Formations',
      tag: 'Close Protection'
    },
    {
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      title: 'Strategic Reconnaissance',
      tag: 'Tactical Route Sweep'
    },
    {
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      title: 'Corporate Command Matrix',
      tag: 'Perimeter Hardening'
    },
    {
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      title: 'Venue Perimeter Hardening',
      tag: 'Crowd Control Operations'
    }
  ];

  const filters = [
    { label: 'All Operations', value: 'all' },
    { label: 'Close Protection', value: 'cp' },
    { label: 'Perimeter Hardening', value: 'sec' },
    { label: 'Crowd Command', value: 'cc' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'cp',
      title: 'VIP Escort Transit Protocol',
      desc: 'Elite personal protection details establishing a high-shield perimeter during VIP transit sweeps.',
      img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
      size: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 2,
      category: 'sec',
      title: 'Asset Hardening',
      desc: 'Uniformed security officers executing access matrix logs and perimeter fence line audits.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      size: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 3,
      category: 'cc',
      title: 'Mass Arena Control',
      desc: 'Tactical event bouncers managing main stage barricades and high-capacity entry lines.',
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      size: 'md:col-span-1 md:row-span-2'
    },
    {
      id: 4,
      category: 'cp',
      title: 'Tactical Advance Recon',
      desc: 'Close Protection Officers mapping safe corridors and exit strategies prior to asset arrival.',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      size: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 5,
      category: 'sec',
      title: '24/7 Command Center',
      desc: 'Real-time internal logistics feeding live surveillance feeds to field units.',
      img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
      size: 'md:col-span-2 md:row-span-1'
    },
    {
      id: 6,
      category: 'cc',
      title: 'Event Lockdown Matrix',
      desc: 'Pre-vetted event staff implementing deep guest-list logging checkpoints.',
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      size: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 7,
      category: 'cp',
      title: 'Urban Convoy Escort',
      desc: 'Multi-vehicle coordinated routing designed to mitigate high-density metropolitan threat sectors.',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
      size: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 8,
      category: 'sec',
      title: 'Facility Countermeasure',
      desc: 'Heavy industrial manufacturing layout monitoring, checking physical asset locks and access routes.',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      size: 'md:col-span-2 md:row-span-1'
    }
  ];

  // Automatic slide interval trigger engine
  useEffect(() => {
    const autoSlider = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % automaticSliderImages.length);
    }, 3500);

    return () => clearInterval(autoSlider);
  }, [automaticSliderImages.length]);

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#050505] text-neutral-100 relative overflow-hidden border-b-2 border-zinc-900">
      <style>{`
        @keyframes modal-center-zoom {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-modal-zoom { animation: modal-center-zoom 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-left mb-12">
          <span className="text-amber-500 text-xs font-black tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded border border-amber-500/20 shadow-sm">
            Deployment Records
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">
            Operations <span className="text-amber-500">Gallery</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-2 font-medium max-w-xl">
            Visual logs tracking elite close protection routing, venue lockdowns, and tactical asset deployments.
          </p>
        </div>

        {/* AUTOMATIC HIGH-IMPACT HERO CAROUSEL */}
        <div className="w-full h-[260px] sm:h-[400px] rounded-3xl overflow-hidden relative border border-zinc-900 shadow-2xl mb-16 group">
          {automaticSliderImages.map((slide, slideIdx) => (
            <div
              key={slideIdx}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out block
                ${slideIdx === carouselIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}
              `}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-left max-w-md select-none">
                <span className="text-[8px] sm:text-[10px] font-mono font-black text-amber-500 tracking-widest uppercase bg-black/60 px-2 py-1 sm:px-3 sm:py-1.5 rounded border border-zinc-800">
                  // LIVE STREAM: {slide.tag}
                </span>
                <h3 className="text-xl md:text-4xl font-black text-white uppercase tracking-tight mt-2 sm:mt-3">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center space-x-2 z-20">
            {automaticSliderImages.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCarouselIndex(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 outline-none cursor-pointer border-none
                  ${dotIdx === carouselIndex ? 'w-6 sm:w-8 bg-amber-500' : 'w-1.5 sm:w-2 bg-zinc-700 hover:bg-zinc-500'}
                `}
              />
            ))}
          </div>
        </div>

        {/* FILTER SELECTION MATRIX BAR */}
        <div className="flex flex-wrap items-center gap-2 bg-neutral-900/40 p-1.5 rounded-2xl border border-zinc-800/60 backdrop-blur-sm mb-10 w-max max-w-full">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-black tracking-wider uppercase rounded-xl transition-all duration-300 select-none cursor-pointer outline-none border-none
                ${activeFilter === filter.value 
                  ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid: Compact uniform square grid resembling mobile view sizing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-xl overflow-hidden bg-[#0d0d0d] border border-zinc-900 cursor-pointer shadow-lg transition-all duration-500 hover:border-amber-500/40 aspect-square w-full"
            >
              <div className="absolute inset-0 block overflow-hidden z-0">
                <div
                  className="absolute inset-0 bg-cover bg-center filter grayscale opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-95"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-black/10 group-hover:via-transparent transition-all duration-500"></div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 z-10 text-left select-none pointer-events-none transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[6px] sm:text-[8px] font-mono font-black text-amber-500 tracking-widest uppercase bg-amber-500/10 px-1 py-0.5 rounded border border-amber-500/20 backdrop-blur-sm">
                  {item.category === 'cp' ? 'Close Protection' : item.category === 'sec' ? 'Hardened Asset' : 'Crowd Command'}
                </span>
                <h3 className="text-[10px] sm:text-xs font-black text-white uppercase tracking-tight mt-1 group-hover:text-amber-500 transition-colors line-clamp-1">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t sm:border-t-2 border-r sm:border-r-2 border-transparent group-hover:border-amber-500/30 rounded-tr-xl transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b sm:border-b-2 border-l sm:border-l-2 border-transparent group-hover:border-amber-500/30 rounded-bl-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>

      {/* CENTERED TACTICAL PREVIEW MODAL OVERLAY */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 transition-opacity duration-300">
          <div className="absolute inset-0" onClick={() => setSelectedImage(null)}></div>
          
          <div className="relative w-full max-w-3xl bg-[#0d0d0d] border border-zinc-800 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] animate-modal-zoom text-left z-10">
            
            <div className="relative aspect-video w-full bg-black block overflow-hidden border-b border-zinc-900">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${selectedImage.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80"></div>
              
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/60 border border-zinc-800 text-zinc-400 flex items-center justify-center hover:text-white hover:border-amber-500/50 backdrop-blur-md transition-colors cursor-pointer outline-none border-none"
              >
                ✕
              </button>
            </div>

            <div className="p-6 md:p-8 bg-[#0d0d0d]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-amber-500 font-mono text-[10px] font-black tracking-widest block uppercase">// LOG REF: OP-GRID-0{selectedImage.id}</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-1">{selectedImage.title}</h3>
                  <p className="text-sm text-zinc-400 font-semibold mt-2 leading-relaxed max-w-2xl">{selectedImage.desc}</p>
                </div>
                
                <a 
                  href="/inquiry"
                  className="w-full sm:w-auto h-12 px-6 bg-amber-500 text-black flex items-center justify-center rounded-xl font-black text-xs uppercase tracking-widest hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/10 text-center whitespace-nowrap self-end sm:self-center"
                >
                  Book Protection Detail
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}