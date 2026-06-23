import React, { useState } from 'react';

// Import local assets for Security Guard Services
import residentialSecurityImg from '../assets/residential_security.png';
import apartmentSecurityImg from '../assets/apartment_security.png';
import officeSecurityImg from '../assets/office_security.png';
import industrialSecurityImg from '../assets/industrial_security.png';
import warehouseSecurityImg from '../assets/warehouse_security.png';

// Import local assets for Bouncer Services
import clubLoungeBouncersImg from '../assets/club_lounge_bouncers.png';
import hotelBouncersImg from '../assets/hotel_bouncers.png';
import eventBouncersImg from '../assets/staff.jpeg';
import vipEventSecurityImg from '../assets/verified_staff.png';

// Import local assets for Personal Protection
import bodyguardsImg from '../assets/bodyguard1.avif';
import vipSecurityImg from '../assets/quick_deployment.png';
import celebrityProtectionImg from '../assets/bodyguard2.png';
import executiveProtectionImg from '../assets/bodyguard3.png';

// Import local assets for Event Security
import concertSecurityImg from '../assets/verified_staff.png';
import weddingSecurityImg from '../assets/guard1.jpg';
import politicalEventSecurityImg from '../assets/political.jpeg';
import corporateEventSecurityImg from '../assets/trained_professionals.png';

export default function Services() {
  // Modal tracking state for deep asset informational sheets
  const [selectedAsset, setSelectedAsset] = useState(null);

  const sections = [
    {
      category: "Security Guard Services",
      tagline: "Static and perimeter facility hardening systems",
      subItems: [
        {
          name: "Residential Security",
          desc: "Dedicated protection protocols designed for private estates, ensuring secure gate control and continuous access management.",
          img: residentialSecurityImg,
          specs: { threatLevel: "Low to Medium", responseTime: "< 5 Mins", loadout: "Radio Comms, Patrol Baton, Flashlight", protocols: "24/7 Perimeter Patrols, Visitor Logs, Vehicle Gate Vetting" }
        },
        {
          name: "Apartment Security",
          desc: "Multi-family residential protection setups handling visitor logging, vehicle verification, and localized foot patrols.",
          img: apartmentSecurityImg,
          specs: { threatLevel: "Low", responseTime: "< 7 Mins", loadout: "CCTV Matrix Monitor, Logging Terminal", protocols: "Roving Patrols, Parking Registry, Resident Escalation Support" }
        },
        {
          name: "Office Security",
          desc: "Corporate reception guarding, badge management access matrices, and intellectual asset tracking systems.",
          img: officeSecurityImg,
          specs: { threatLevel: "Medium", responseTime: "< 3 Mins", loadout: "Access Badge Scanner, Panic Line Matrix", protocols: "Front Desk Screening, Tailgating Prevention, Courier Isolation Vetting" }
        },
        {
          name: "Industrial Security",
          desc: "Heavy factory deployment focused on gate inventory safety, machinery protection, and emergency hazard response.",
          img: industrialSecurityImg,
          specs: { threatLevel: "High Risk Asset", responseTime: "< 4 Mins", loadout: "High-Vis Tactical, Fire Suppress Tools", protocols: "Material Outward/Inward Audit, HSE Compliance Enforcement, Emergency Muster Guarding" }
        },
        {
          name: "Warehouse Security",
          desc: "Logistics asset monitoring, loading dock double-verification checkpoints, and 24/7 internal theft prevention.",
          img: warehouseSecurityImg,
          specs: { threatLevel: "Medium Risk Asset", responseTime: "< 6 Mins", loadout: "RFID Hand Scanner, Cargo Seals Audit Kit", protocols: "Seal Audit Checks, Loading Bay Surveillance, Anti-Pilferage Perimeter Scans" }
        }
      ]
    },
    {
      category: "Bouncer Services",
      tagline: "High-tier crowd command and conflict management",
      subItems: [
        {
          name: "Club & Lounge Bouncers",
          desc: "Elite hospitality crowd filtering, age verification checks, and rapid internal de-escalation solutions.",
          img: clubLoungeBouncersImg,
          specs: { threatLevel: "High Volatility", responseTime: "Instantaneous", loadout: "Earpiece Comms, Concealed Protective Vest", protocols: "ID Authentication Vetting, Hostile Eviction, Dynamic Crowd Density Control" }
        },
        {
          name: "Hotel Bouncers",
          desc: "Polished protection presence maintained across luxury lobbies, parking bays, and VIP guest entry zones.",
          img: hotelBouncersImg,
          specs: { threatLevel: "Low to Medium", responseTime: "< 2 Mins", loadout: "Premium Concealed Suit Kit, Radio Set", protocols: "Discreet VIP Escorts, Front Drive Cleared Lanes, Guest Asset Safeguarding" }
        },
        {
          name: "Event Bouncers",
          desc: "Physical perimeter support details keeping large corporate gatherings or private parties fully locked down.",
          img: eventBouncersImg,
          specs: { threatLevel: "Medium Volatility", responseTime: "< 1 Min", loadout: "Event-Spec High-Vis, Metal Wand Scanner", protocols: "Perimeter Integrity Checks, Stage Containment, Ticket Fraud Suppression" }
        },
        {
          name: "VIP Event Security",
          desc: "High-tier protective parameters built around exclusive private guest lists and multi-agency routing check lines.",
          img: vipEventSecurityImg,
          specs: { threatLevel: "Extreme Profile", responseTime: "Instantaneous", loadout: "Full Tact Suit, Intercom Link, Wand Scanner", protocols: "Black-List Cross Referencing, Media Stand-Off Lines, Anti-Espionage Room Sweeps" }
        }
      ]
    },
    {
      category: "Personal Protection",
      tagline: "Discreet Close Protection Officers (CPOs)",
      subItems: [
        {
          name: "Bodyguards",
          desc: "Dedicated personal defense escorts handling physical threat detection, close shield routing, and direct line transit safety.",
          img: bodyguardsImg,
          specs: { threatLevel: "High Threat Matrix", responseTime: "Instantaneous", loadout: "Concealed Armored Shield Vest, Sat Comms", protocols: "Transit Counter-Surveillance, Pre-Route Reconnaissance, High-Shield Evacuation Maps" }
        },
        {
          name: "VIP Security",
          desc: "Comprehensive protection assets tailored to handle high-profile executive travel logistics and residential sweeps.",
          img: vipSecurityImg,
          specs: { threatLevel: "Medium to High", responseTime: "< 1 Min", loadout: "Encrypted Communication Array, First-Aid Kit", protocols: "Tactical Advance Planning, Guest Screening, Secure Corridor Management" }
        },
        {
          name: "Celebrity Protection",
          desc: "Media management boundaries, aggressive crowd stand-off barriers, and dynamic back-door exit routing strategies.",
          img: celebrityProtectionImg,
          specs: { threatLevel: "High Volatility", responseTime: "Instantaneous", loadout: "Crowd Control Kit, Disruption Deflectors", protocols: "Perimeter Buffer Zones, Anti-Paparazzi Shields, Crisis Extraction Strategies" }
        },
        {
          name: "Executive Protection",
          desc: "Discreet corporate protection engineered for multinational directors, corporate board teams, and sensitive trade journeys.",
          img: executiveProtectionImg,
          specs: { threatLevel: "Corporate Espionage Target", responseTime: "< 2 Mins", loadout: "Low-Profile Armor Outfitting, Intercom Subsystems", protocols: "Sweeping Meeting Rooms, Corporate Itinerary Threat Vetting, Safe-Haven Route Plans" }
        }
      ]
    },
    {
      category: "Event Security",
      tagline: "Dynamic high-capacity arena and event defense maps",
      subItems: [
        {
          name: "Concert Security",
          desc: "Massive stage-front barricade management teams, emergency crowd exit control maps, and stadium ticket-gate screening.",
          img: concertSecurityImg,
          specs: { threatLevel: "Crowd Surge Risk", responseTime: "< 1 Min", loadout: "High-Output Comms, Barrier Interlocks", protocols: "Pit Management, Turnstile Inspection Matrices, Emergency Muster Direction" }
        },
        {
          name: "Wedding Security",
          desc: "Polished, welcoming security staff deployed to eliminate gate crashers, monitor gift vaults, and manage guest traffic.",
          img: weddingSecurityImg,
          specs: { threatLevel: "Low Risk", responseTime: "< 3 Mins", loadout: "Formal Attire Dress-Code Kit, Discreet Comms", protocols: "Guest-List Verification Checks, Gift Vault Guarding, Valet Parking Overwatches" }
        },
        {
          name: "Political Event Security",
          desc: "High-alert multi-tier stage perimeters, active line sweeps, and coordinated local logistics asset integrations.",
          img: politicalEventSecurityImg,
          specs: { threatLevel: "Extreme Profile", responseTime: "Instantaneous", loadout: "Full Spectrum Counter-Tactical Outfitting", protocols: "Multi-Agency Coordination, Stage-Zone Sterilization, Crowd Line Screening Checks" }
        },
        {
          name: "Corporate Event Security",
          desc: "Secure media non-disclosure monitoring, shareholder assembly room lockdowns, and executive hospitality coverage.",
          img: corporateEventSecurityImg,
          specs: { threatLevel: "Medium Profile", responseTime: "< 2 Mins", loadout: "NDI Verification Hardware, Access Control Badge Hubs", protocols: "Media Exclusion Vetting, Executive Suite Lockdown Matrices, Guest Credentials Audits" }
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-neutral-100 relative overflow-hidden">
      {/* Centered Modal Zoom/Fade Animation Styles */}
      <style>{`
        @keyframes modal-center-zoom {
          0% { transform: scale(0.92); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-modal-zoom { animation: modal-center-zoom 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* Background Matrix Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none"></div>

      {/* Subtle Radial Lighting Highlights */}
      <div className="absolute top-20 left-[-10%] w-[35rem] h-[35rem] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-[-10%] w-[40rem] h-[40rem] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Sector Index Header */}
        <div className="text-center mb-20">
          <span className="text-amber-500 text-xs font-black tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded border border-amber-500/20 shadow-sm">
            Operations Index
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.7)' }}>
            OUR SERVICE CATEGORIES
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_#f59e0b]"></div>
        </div>

        {/* Categories Pipeline */}
        <div className="space-y-32">
          {sections.map((sec, secIdx) => (
            <div key={secIdx} className="relative">

              {/* Category Sidebar Header */}
              <div className="border-b border-neutral-800 pb-4 mb-14 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight flex items-center">
                  <span className="text-amber-500 mr-3 text-sm font-mono bg-neutral-900 border border-neutral-800 px-2 py-1 rounded">0{secIdx + 1}</span>
                  {sec.category}
                </h3>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-neutral-900/80 px-3 py-1.5 rounded border border-neutral-800 backdrop-blur-sm">
                  {sec.tagline}
                </span>
              </div>

              {/* FIXED: Swapped grid-cols-1 on phone for grid-cols-2 to force dual-column layouts in mobile viewports */}
              <div
                className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-10 items-stretch"
                style={{ perspective: '1200px' }}
              >
                {sec.subItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedAsset({ ...item, code: `UNIT 0${secIdx + 1}-0${index + 1}` })}
                    className="
                      group relative rounded-2xl cursor-pointer select-none h-full flex flex-col
                      transform-gpu transition-all duration-500 ease-out [transform-style:preserve-3d]
                      [transform:rotateX(4deg)_rotateY(-4deg)]
                      hover:[transform:rotateX(8deg)_rotateY(-2deg)_translateY(-4px)]
                    "
                  >
                    <div className="absolute inset-0 bg-black/95 rounded-2xl filter blur-xl transform translate-x-2 translate-y-2 -z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                    <div className="absolute inset-0 bg-neutral-950 rounded-2xl border border-neutral-900 [transform:translateZ(-12px)] transition-colors group-hover:border-amber-500/30"></div>

                    {/* Card Container Face */}
                    <div className="h-full bg-neutral-900 border border-neutral-800/90 rounded-2xl overflow-hidden flex flex-col justify-between [transform:translateZ(0px)] group-hover:border-amber-500/40 transition-colors duration-300 pb-4 sm:pb-6">

                      {/* Image Mask Viewport */}
                      <div className="relative h-28 sm:h-48 w-full overflow-hidden bg-black border-b border-neutral-800/80 [transform-style:preserve-3d]">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105 [transform:translateZ(-6px)]"
                          style={{ backgroundImage: `url('${item.img}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>

                        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-neutral-950 text-amber-500 font-mono font-bold border border-neutral-800 text-[8px] sm:text-[10px] tracking-wider px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded shadow-lg [transform:translateZ(18px)]">
                          U-0{secIdx + 1}-0{index + 1}
                        </div>
                      </div>

                      {/* Content Blocks */}
                      <div className="p-3 sm:p-6 flex-grow flex flex-col justify-start text-left">
                        <h4 className="text-xs sm:text-lg font-black uppercase tracking-tight text-white mb-1 sm:mb-2 group-hover:text-amber-500 transition-colors line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-[10px] sm:text-sm text-neutral-400 leading-normal sm:leading-relaxed font-semibold mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                          {item.desc}
                        </p>

                        <button
                          type="button"
                          className="mt-auto inline-flex text-amber-500 font-black tracking-wider text-[9px] sm:text-xs uppercase items-center group-hover:text-amber-400 transition-colors cursor-pointer bg-transparent border-none outline-none"
                        >
                          Details <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </button>
                      </div>

                      {/* Operational Metrics Substripe */}
                      <div className="mx-3 sm:mx-6 pb-0.5 pt-2 flex items-center justify-between text-[8px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest text-neutral-500 border-t border-neutral-800/40 bg-black/5">
                        <span className="hidden sm:inline">Ready</span>
                        <span className="inline sm:hidden">Ready</span>
                        <span className="text-emerald-400 flex items-center bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 text-[7px] sm:text-[9px]">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 mr-1 sm:mr-1.5 animate-pulse"></span>
                          Active
                        </span>
                      </div>

                    </div>

                    {/* Framing Accents */}
                    <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-r sm:border-t-2 sm:border-r-2 border-transparent group-hover:border-amber-500/40 rounded-tr-2xl transition-all"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-l sm:border-b-2 sm:border-l-2 border-transparent group-hover:border-amber-500/40 rounded-bl-2xl transition-all"></div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Center-Aligned Tactical Data Specification Modal */}
      {selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 transition-opacity duration-300">
          <div className="absolute inset-0" onClick={() => setSelectedAsset(null)}></div>

          <div className="relative w-full max-w-lg bg-[#0d0d0d] border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-[0_25px_70px_-10px_rgba(0,0,0,0.9)] animate-modal-zoom text-left z-10 max-h-[90vh] overflow-y-auto">

            <div className="flex justify-between items-start border-b border-zinc-800 pb-4 mb-6">
              <div>
                <span className="text-amber-500 font-mono text-[10px] font-black tracking-widest block">// SECURITY CONFIG: {selectedAsset.code}</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-1">{selectedAsset.name}</h3>
              </div>
              <button
                onClick={() => setSelectedAsset(null)}
                className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center hover:text-white hover:border-amber-500/50 transition-colors cursor-pointer outline-none border-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-mono uppercase font-black tracking-widest text-zinc-500">Operation Blueprint</h4>
                <p className="text-sm text-zinc-300 font-semibold mt-2 leading-relaxed">{selectedAsset.desc}</p>
              </div>

              <div className="h-px bg-zinc-900"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-950 p-4 rounded-2xl border border-zinc-900">
                  <h5 className="text-[9px] font-mono uppercase font-black tracking-wider text-amber-500/70">Threat Index Matrix</h5>
                  <p className="text-xs font-bold text-white mt-1 uppercase">{selectedAsset.specs.threatLevel}</p>
                </div>
                <div className="bg-neutral-950 p-4 rounded-2xl border border-zinc-900">
                  <h5 className="text-[9px] font-mono uppercase font-black tracking-wider text-amber-500/70">Dispatch Allocation</h5>
                  <p className="text-xs font-bold text-white mt-1 uppercase">{selectedAsset.specs.responseTime}</p>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase font-black tracking-widest text-zinc-500">Standard Gear & Equipment Outfitting</h4>
                <p className="text-xs text-zinc-400 font-bold mt-2 bg-neutral-950 p-3 rounded-xl border border-zinc-900 leading-normal">
                  ⚙️ {selectedAsset.specs.loadout}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase font-black tracking-widest text-zinc-500">Core Operational Guard Rules</h4>
                <ul className="mt-3 space-y-2">
                  {selectedAsset.specs.protocols.split(', ').map((protocol, pi) => (
                    <li key={pi} className="text-xs font-semibold text-zinc-300 flex items-start">
                      <span className="text-amber-500 mr-2.5 font-black">▪</span> {protocol}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-end items-center gap-3">
              <button
                onClick={() => setSelectedAsset(null)}
                className="w-full sm:w-auto h-12 px-6 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer border-none"
              >
                Close View
              </button>
              <a
                href="/inquiry"
                className="w-full sm:w-auto h-12 px-8 bg-amber-500 text-black flex items-center justify-center rounded-xl font-black text-xs uppercase tracking-widest hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/10 text-center"
              >
                Request Asset Allocation →
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}