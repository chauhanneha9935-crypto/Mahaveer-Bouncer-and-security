import React, { useState } from 'react';

// Explicitly importing your verified files from your src/assets directory
import guard1 from '../assets/guard1.jpg';
import staff from '../assets/staff.jpeg';
import guard4 from '../assets/bodyguard1.avif'; 

export default function WhyChooseUs() {
  // Tracking state to hold information when an advantage card is actively selected
  const [activeAdvantage, setActiveAdvantage] = useState(null);

  const advantages = [
    { 
      title: "Background Verified Personnel", 
      desc: "Trained, uniformed and police-verified guards for static posts...",
      img: guard1,
      code: "AUTH-NOD-01",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      extendedInfo: {
        headline: "Police Verification & Vetting Protocol",
        detailedDesc: "Every field operative undergoes biometric check lines alongside deep permanent-address character mapping to establish uncompromised integrity on static assets.",
        metrics: [
          { label: "Vetting Window", value: "7 - 14 Days" },
          { label: "Acceptance Rate", value: "Top 15% Elite" }
        ],
        bulletPoints: ["Biometric Identification Audits", "State Criminal Registry Data Checks", "Previous Employment Reference Verification"]
      }
    },
    { 
      title: "Professionally Trained Staff", 
      desc: "Elite physical conflict de-escalation and advanced countermeasure metrics.",
      img: staff,
      code: "TRN-TACT-02",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      extendedInfo: {
        headline: "Advanced Physical Defense Training",
        detailedDesc: "Personnel complete a rigid physical defense program mapped to handle crowded event spaces, hostile de-escalation scenarios, and secure close-quarters shield movements.",
        metrics: [
          { label: "Initial Training", value: "100+ Hours" },
          { label: "Refresher Drills", value: "Every 90 Days" }
        ],
        bulletPoints: ["Psychological Under-Pressure Control", "Fire Safety & Basic Evacuation Blueprints", "Emergency First-Aid & Trauma Management"]
      }
    },
    { 
      title: "Quick Staff Deployment", 
      desc: "Instant standby networks engineered for immediate protective reinforcement.",
      img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80",
      code: "DEP-FAST-03",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      extendedInfo: {
        headline: "Rapid Mobilization Networks",
        detailedDesc: "We retain highly structured regional on-call pools to ensure short-notice deployment schedules can launch seamlessly whenever client assets require urgent relief or extra coverage.",
        metrics: [
          { label: "Emergency Dispatch", value: "< 3 Hours" },
          { label: "Standby Guard Pool", value: "24/7 Monitored" }
        ],
        bulletPoints: ["Pre-Mapped Transit Logistics Routes", "Instant Standby Squad Rotations", "Real-Time Digital Rota Sync Pipelines"]
      }
    },
    { 
      title: "24/7 Monitoring Support", 
      desc: "Continuous secure operations link lines feeding real-time situational logs.",
      img: guard4,
      code: "MON-LIVE-04",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 12-9m0 0a9.003 9.003 0 017.2 3.6M12 3a9.003 9.003 0 00-7.2 3.6M21 9.613a9 9 0 010 4.774M3 9.613a9 9 0 000 4.774M6 12.25h12" />
        </svg>
      ),
      extendedInfo: {
        headline: "Central Tactical Command Center",
        detailedDesc: "Our control operations room matches professional logistics management standards. Field supervisors coordinate hourly check-ins with deployed guards to verify optimal alertness.",
        metrics: [
          { label: "Comms Link Uptime", value: "99.98%" },
          { label: "Supervisor Audits", value: "Random Nightly" }
        ],
        bulletPoints: ["Geofenced Personnel Duty Tracking", "Encrypted Internal Radio Matrices", "Instant Incident Escalation Workflows"]
      }
    },
    { 
      title: "Uniformed Security Officers", 
      desc: "Polished, elite high-visibility protective uniforms to assert complete deterrence.",
      img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80",
      code: "UNI-FORM-05",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      extendedInfo: {
        headline: "Visual Command Turnout Protocol",
        detailedDesc: "A crisp turnout delivers visual authority on premise lines. Deployed personnel look sharp and are properly outfitted to integrate into administrative, upscale retail, or raw industrial landscapes.",
        metrics: [
          { label: "Dress Outfits", value: "Tactical / Corporate" },
          { label: "Compliance Audits", value: "Every Shift Change" }
        ],
        bulletPoints: ["High-Visibility Security Badge Panels", "Heavy Duty Load-Bearing Utility Gear", "Weatherproof Premium Command Apparel"]
      }
    },
    { 
      title: "Experienced Management", 
      desc: "Strategic operations directed by field veterans and corporate tactical specialists.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      code: "MNG-EXEC-06",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 16.5h1.5m3 0H15" />
        </svg>
      ),
      extendedInfo: {
        headline: "Strategic Asset Risk Assessment",
        detailedDesc: "Our core administrative leaders hold extensive domain experience in safety logistics. Clients receive customized infrastructure risk mapping and site surveys instead of generic guard tallies.",
        metrics: [
          { label: "Management Scope", value: "15+ Yrs Industry" },
          { label: "SLA Auditing", value: "Twice Monthly" }
        ],
        bulletPoints: ["Granular Asset Vulnerability Mapping", "Dedicated Single-Point Account Leads", "Continuous Post-Deployment System Audits"]
      }
    },
    { 
      title: "Affordable Pricing", 
      desc: "Transparent blueprints without dynamic surcharges or hidden modifications.",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      code: "VAL-COST-07",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.214.133a3.398 3.398 0 003.496 0l.214-.133m-3.924-4.551a3.398 3.398 0 012.924-2.186m2.924 2.186a3.398 3.398 0 01-2.924 2.186m0-7.142A3.398 3.398 0 009 5.618M12 3a3.398 3.398 0 012.924 2.618M12 21a3.398 3.398 0 01-2.924-2.618M12 21a3.398 3.398 0 002.924-2.618" />
        </svg>
      ),
      extendedInfo: {
        headline: "Fixed Cost Protection Integrity",
        detailedDesc: "We eliminate hidden middleman operational steps or surprise administrative adjustments from our billing sheets. Every quotation outlines guard allowances cleanly and comprehensively.",
        metrics: [
          { label: "Surge Fee Factors", value: "0% Absolute Zero" },
          { label: "Billing Formats", value: "Highly Transparent" }
        ],
        bulletPoints: ["No Last-Minute Holiday Premium Traps", "Itemized Operative Manpower Costs", "Custom Enterprise Tier Rates Available"]
      }
    },
    { 
      title: "Reliable & Trustworthy", 
      desc: "Maintaining strict structural accountability rules across all domestic teams.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
      code: "TRST-SYS-08",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21.75c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      extendedInfo: {
        headline: "Performance Service Level Agreements",
        detailedDesc: "Our contracts feature binding workforce replacement assurances. If a scheduled officer is absent due to transit delays or illness, an equivalent verified guard is instantly deployed.",
        metrics: [
          { label: "SLA Guard Present", value: "99.4% Verified" },
          { label: "Annual Client Retention", value: "96% Solid" }
        ],
        bulletPoints: ["Instant Reserve Replacement Call Lines", "Full Labor Regulatory Adherence Compliance", "Comprehensive Corporate Liability Coverage"]
      }
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#050505] text-neutral-100 relative overflow-hidden">
      {/* Centered Modal Zoom/Fade Entry Transition Animation */}
      <style>{`
        @keyframes modal-center-zoom {
          0% { transform: scale(0.92); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-modal-zoom { animation: modal-center-zoom 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER MATRICES */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Why <span className="text-amber-500">Choose Us</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl font-medium leading-relaxed">
            Setting the structural premium standard for protection, verification, and unprecedented deployment speed.
          </p>
        </div>

        {/* MULTI-COLUMN DESIGN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {advantages.map((adv, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveAdvantage(adv)}
              className="group relative rounded-3xl overflow-hidden border border-zinc-900 bg-[#0d0d0d] flex flex-col justify-end h-[400px] transition-all duration-300 hover:border-amber-500/30 shadow-2xl cursor-pointer"
            >
              {/* Clean Image Canvas Face */}
              <div className="absolute inset-0 z-0 block overflow-hidden">
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${
                    adv.img === guard1 || adv.img === guard4 || adv.img === staff ? 'opacity-90' : 'opacity-40'
                  }`}
                  style={{ backgroundImage: `url('${adv.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Foreground Card Elements */}
              <div className="relative z-20 text-left w-full p-6 select-none">
                
                {/* Brand Badges */}
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center mb-4 font-bold shadow-lg shadow-amber-500/20">
                  {adv.icon}
                </div>

                <h3 className="text-xl font-black tracking-tight text-white uppercase mb-2 group-hover:text-amber-500 transition-colors">
                  {adv.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-400 font-semibold leading-relaxed mb-4 line-clamp-2">
                  {adv.desc}
                </p>

                {/* Trigger Prompt Component */}
                <button 
                  type="button"
                  className="inline-flex text-amber-500 font-black tracking-wider text-xs uppercase items-center group-hover:text-amber-400 transition-colors bg-transparent border-none outline-none cursor-pointer"
                >
                  Learn more <span className="ml-1.5 transition-transform group-hover:translate-x-1.5">→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ====================================================
          FIXED: CENTERED TACTICAL READOUT COMMAND OVERLAY MODAL
         ==================================================== */}
      {activeAdvantage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 transition-opacity duration-300">
          {/* Backdrop Click Dismiss Wrapper */}
          <div className="absolute inset-0" onClick={() => setActiveAdvantage(null)}></div>
          
          {/* Center-Aligned Modal Window Face */}
          <div className="relative w-full max-w-lg bg-[#0d0d0d] border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-[0_25px_70px_-10px_rgba(0,0,0,0.9)] animate-modal-zoom text-left z-10 max-h-[90vh] overflow-y-auto">
            
            {/* Header Area Context */}
            <div className="flex justify-between items-start border-b border-zinc-800 pb-4 mb-6">
              <div>
                <span className="text-amber-500 font-mono text-[10px] font-black tracking-widest block">// PROFILE ID: {activeAdvantage.code}</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-1">{activeAdvantage.title}</h3>
              </div>
              <button 
                onClick={() => setActiveAdvantage(null)}
                className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center hover:text-white hover:border-amber-500/50 transition-colors cursor-pointer outline-none"
              >
                ✕
              </button>
            </div>

            {/* Specification Parameters */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono uppercase font-black tracking-widest text-zinc-500">Operational Breakdown</h4>
                <p className="text-sm text-zinc-300 font-semibold mt-2 leading-relaxed">
                  {activeAdvantage.extendedInfo ? activeAdvantage.extendedInfo.detailedDesc : activeAdvantage.desc}
                </p>
              </div>

              <div className="h-px bg-zinc-900"></div>

              {/* Performance Metrics Blocks */}
              {activeAdvantage.extendedInfo && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeAdvantage.extendedInfo.metrics.map((metric, mi) => (
                    <div key={mi} className="bg-neutral-950 p-4 rounded-2xl border border-zinc-900">
                      <h5 className="text-[9px] font-mono uppercase font-black tracking-wider text-amber-500/70">{metric.label}</h5>
                      <p className="text-xs font-bold text-white mt-1 uppercase">{metric.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Audit Checklists Layout */}
              {activeAdvantage.extendedInfo && (
                <div>
                  <h4 className="text-[10px] font-mono uppercase font-black tracking-widest text-zinc-500">System Verification Audit Guidelines</h4>
                  <ul className="mt-3 space-y-2">
                    {activeAdvantage.extendedInfo.bulletPoints.map((point, pi) => (
                      <li key={pi} className="text-xs font-semibold text-zinc-300 flex items-start">
                        <span className="text-amber-500 mr-2.5 font-black">▪</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Direct Booking Navigation Link Foot */}
            <div className="pt-6 mt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-end items-center gap-3">
              <button
                onClick={() => setActiveAdvantage(null)}
                className="w-full sm:w-auto h-12 px-6 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                Close View
              </button>
              <a 
                href="/inquiry"
                className="w-full sm:w-auto h-12 px-8 bg-amber-500 text-black flex items-center justify-center rounded-xl font-black text-xs uppercase tracking-widest hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/10 text-center"
              >
                Initiate Secure Deployment →
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}