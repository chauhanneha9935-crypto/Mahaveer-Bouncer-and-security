import React, { useState } from 'react';

export default function Gallery() {
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { label: 'All Operations', value: 'all' },
    { label: 'Close Protection', value: 'cp' },
    { label: 'Perimeter Hardening', value: 'sec' },
    { label: 'Crowd Command', value: 'cc' }
  ];

  // Updated galleryItems using ImageKit URLs
  const galleryItems = [
    { id: 1, category: 'cp', title: 'VIP Escort Transit', desc: 'Elite personal protection details establishing a high-shield perimeter during VIP transit sweeps.', img: 'https://ik.imagekit.io/tqlzfrmoqb/bodyguard2.png' },
    { id: 2, category: 'sec', title: 'Asset Hardening', desc: 'Uniformed security officers executing access matrix logs and perimeter fence line audits.', img: 'https://ik.imagekit.io/tqlzfrmoqb/office_security.png' },
    { id: 3, category: 'cc', title: 'Mass Arena Control', desc: 'Tactical event bouncers managing main stage barricades and high-capacity entry lines.', img: 'https://ik.imagekit.io/tqlzfrmoqb/club_lounge_bouncers.png' },
    { id: 4, category: 'cp', title: 'Tactical Advance Recon', desc: 'Close Protection Officers mapping safe corridors and exit strategies.', img: 'https://ik.imagekit.io/tqlzfrmoqb/quick_deployment.png' },
    { id: 5, category: 'sec', title: '24/7 Command Center', desc: 'Real-time internal logistics feeding live surveillance feeds to field units.', img: 'https://ik.imagekit.io/tqlzfrmoqb/support_24x7.png' },
    { id: 6, category: 'cc', title: 'Event Lockdown Matrix', desc: 'Pre-vetted event staff implementing deep guest-list logging checkpoints.', img: 'https://ik.imagekit.io/tqlzfrmoqb/trained_professionals.png' },
    { id: 7, category: 'cp', title: 'Urban Convoy Escort', desc: 'Multi-vehicle coordinated routing designed to mitigate high-density threat sectors.', img: 'https://ik.imagekit.io/tqlzfrmoqb/bodyguard1.avif' },
    { id: 8, category: 'sec', title: 'Facility Countermeasure', desc: 'Heavy industrial manufacturing layout monitoring, checking physical asset locks.', img: 'https://ik.imagekit.io/tqlzfrmoqb/industrial_security.png' }
  ];

  const filteredItems = activeFilter === 'all' ? galleryItems : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#050505] text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            Operations <span className="text-amber-500">Gallery</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map(filter => (
            <button 
              key={filter.value} 
              onClick={() => setActiveFilter(filter.value)} 
              className={`px-5 py-2 uppercase text-xs font-black tracking-widest rounded-full transition-all border ${activeFilter === filter.value ? 'bg-amber-500 text-black border-amber-500' : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-amber-500'}`}
            >
              {filter.label.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer border border-zinc-800 hover:border-amber-500 transition-all duration-500"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-black text-lg uppercase tracking-wider">{item.title}</h3>
                  <p className="text-amber-500 text-xs font-bold uppercase mt-1">View Details →</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedImage(null)}>
           <div className="relative max-w-xl w-full bg-[#0d0d0d] p-6 rounded-3xl" onClick={e => e.stopPropagation()}>
             <img 
               src={selectedImage.img} 
               className="w-full h-auto max-h-[60vh] object-contain rounded-xl" 
               alt="Detailed View" 
             />
             <div className="mt-6">
               <h3 className="text-white font-black text-xl uppercase tracking-tight">{selectedImage.title}</h3>
               <p className="text-zinc-400 mt-2 text-sm leading-relaxed">{selectedImage.desc}</p>
             </div>
             <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-zinc-400 hover:text-white text-2xl">✕</button>
           </div>
        </div>
      )}
    </section>
  );
}