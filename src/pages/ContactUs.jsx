import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'bouncer',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Action implementation for form data submission pipeline
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    /* FIXED: Drawn a solid dark zinc-900 baseline separator border to frame the top entry line of your global footer */
    <section id="contact-us" className="pt-10 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 bg-[#0a0a0a] text-neutral-100 relative overflow-hidden border-b-2 border-zinc-900">
      {/* Background Precision Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>
      
      {/* Soft Luxury Ambient Gold Lighting Blips */}
      <div className="absolute top-1/4 left-[-10%] w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[45rem] h-[45rem] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ====================================================
            SECTION HEADER
           ==================================================== */}
        <div className="text-center mb-20">
          <span className="text-amber-500 text-xs font-black tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded border border-amber-500/20 shadow-sm">
            Secure Communications
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">
            Contact Command Center
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-2 font-semibold max-w-xl mx-auto">
            Get in direct touch with our deployment branch for immediate tactical security allocations.
          </p>
          <div className="h-0.5 w-16 bg-amber-500 mx-auto mt-4 rounded-full shadow-[0_0_8px_#f59e0b]"></div>
        </div>

        {/* ====================================================
            MAIN TWO-COLUMN CONTROLLER SYSTEM
           ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: DIRECT METRICS & CHANNELS */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* BOLD WHITE BORDER SYSTEM (Left Panel Face) */}
            <div className="border-2 border-white bg-[#111111]/60 p-8 rounded-2xl relative overflow-hidden group shadow-2xl">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 shadow-[0_0_15px_#f59e0b]"></div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6">HQ Headquarters</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-amber-500 flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-black text-zinc-500 tracking-wider uppercase">Deployment Hub</h4>
                    <p className="text-sm font-semibold text-zinc-300 mt-1 leading-relaxed">
                      Mahaveer Complex, Main Operations Wing,<br />
                      Amethi, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-amber-500 flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-black text-zinc-500 tracking-wider uppercase">Hotline Support</h4>
                    <p className="text-sm font-bold text-zinc-300 mt-1 hover:text-amber-400 transition-colors">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-amber-500 flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-black text-zinc-500 tracking-wider uppercase">Secure Link</h4>
                    <p className="text-sm font-bold text-zinc-300 mt-1 hover:text-amber-400 transition-colors">
                      ops@mahaveersecurity.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LIVE SYSTEM RADAR GRAPHIC CONSOLE */}
            <div className="border border-zinc-900 bg-black/40 p-6 rounded-2xl flex items-center justify-between text-left relative overflow-hidden">
              <div className="flex items-center space-x-4">
                <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                  <span className="w-full h-full rounded-full bg-emerald-500 animate-ping absolute"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 relative"></span>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-white tracking-wider">All Systems Operational</h4>
                  <p className="text-[11px] text-zinc-500 font-semibold mt-0.5">Rapid dispatch line remains live for emergency response profiles.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-TECH INQUIRY SUBMISSION LAYER */}
          <div className="lg:col-span-7 w-full" style={{ perspective: '1200px' }}>
            {/* FIXED: Replaced border-zinc-900 with border-2 border-white to draw the exact matching parameters border */}
            <div className="relative rounded-3xl transform-gpu transition-all duration-500 [transform-style:preserve-3d] [transform:rotateX(4deg)_rotateY(-3deg)] bg-neutral-950 border-2 border-white shadow-[0_30px_70px_rgba(0,0,0,0.8)] p-8 md:p-10">
              
              {submitted ? (
                <div className="h-[416px] flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    ✓
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white">Transmission Received</h3>
                  <p className="text-xs text-zinc-400 max-w-xs font-semibold leading-relaxed">
                    Your parameters have reached the deployment desk. An agent will verify scheduling matrices shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">FullName</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full h-12 bg-[#111111] border border-zinc-800 rounded-xl px-4 text-sm font-semibold text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Comms Line (Phone)</label>
                      <input 
                        type="text" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full h-12 bg-[#111111] border border-zinc-800 rounded-xl px-4 text-sm font-semibold text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full h-12 bg-[#111111] border border-zinc-800 rounded-xl px-4 text-sm font-semibold text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="ops@client.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Tactical Asset Category</label>
                    <select 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                      className="w-full h-12 bg-[#111111] border border-zinc-800 rounded-xl px-4 text-sm font-bold text-amber-500 focus:outline-none focus:border-amber-500/50 transition-colors cursor-pointer appearance-none"
                    >
                      <option value="bouncer">Elite Tactical Bouncer Units</option>
                      <option value="guard">Armed Security Guard Detachments</option>
                      <option value="vip">Close Protection Officers (VIP Bodyguard)</option>
                      <option value="event">Mass High-Capacity Event Protection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase mb-2">Deployment Specifications</label>
                    <textarea 
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#111111] border border-zinc-800 rounded-xl p-4 text-sm font-semibold text-white focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                      placeholder="Specify location data, staff scale requirements, and layout parameters..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full h-14 rounded-xl bg-amber-500 text-slate-950 font-black tracking-widest text-xs uppercase shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:bg-amber-600 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    Transmitting Parameters Dispatch →
                  </button>
                </form>
              )}

              {/* Edge Vector Target Lines */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500/40 rounded-tr-xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500/40 rounded-bl-xl pointer-events-none"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}