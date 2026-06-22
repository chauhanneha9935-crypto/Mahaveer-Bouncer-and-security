import React, { useState } from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Headset,
  Rocket,
  MapPinned,
} from "lucide-react";

export default function Overview() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const highlights = [
    {
      title: "Trained Professionals",
      desc: "Elite bouncers and security operators rigorously trained in tactical defensive maneuvers, crowd control, and de-escalation protocols.",
      icon: ShieldCheck,
      bgImg:
        "https://images.unsplash.com/photo-1579208575657-c595a05393b7?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Verified Staff",
      desc: "Complete peace of mind with 100% background-verified, police-cleared, and stringently vetted personnel details.",
      icon: BadgeCheck,
      bgImg:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "24×7 Support",
      desc: "Our tactical command operations center runs around the clock, providing instant assistance and continuous field monitoring.",
      icon: Headset,
      bgImg:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Quick Deployment",
      desc: "Rapid deployment infrastructure capable of positioning defensive security details at your location on short strategic notice.",
      icon: Rocket,
      bgImg:
        "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "PAN India Service Network",
      desc: "Extensive protection coverage spanning major commercial hubs, high-profile events, and industrial sectors across the nation.",
      icon: MapPinned,
      bgImg:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section
      className="py-24 bg-[#050505] text-neutral-100 overflow-hidden border-b border-zinc-900"
      style={{ perspective: "1200px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-left mb-16">
          <span className="text-amber-500 text-xs font-black tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded border border-amber-500/20 shadow-sm">
            Corporate Profile
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-4">
            About Our Company
          </h2>

          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mt-4 font-semibold leading-relaxed">
            We are a premier, trusted security service provider delivering
            elite, military-grade protection frameworks across residential,
            commercial, industrial, and high-tier event sectors.
          </p>
        </div>

        {/* Responsive 3D Tactical Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transform-gpu [transform:rotateX(2deg)]">
          {highlights.map((item, index) => {
            const isSelected = activeCardIndex === index;
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => setActiveCardIndex(index)}
                className={`group relative p-8 rounded-3xl overflow-hidden border bg-[#0d0d0d] flex flex-col justify-end min-h-[280px] transition-all duration-300 shadow-2xl cursor-pointer select-none
                  ${
                    isSelected
                      ? "border-white shadow-[0_0_25px_rgba(255,255,255,0.2)] scale-[0.99]"
                      : "border-zinc-900 hover:border-amber-500/30"
                  }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105
                      ${
                        isSelected
                          ? "opacity-40 grayscale-0 scale-105"
                          : "opacity-25 grayscale group-hover:grayscale-0 group-hover:opacity-40"
                      }`}
                    style={{
                      backgroundImage: `url(${item.bgImg})`,
                    }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                </div>

                {/* Foreground Content */}
                <div className="relative z-20 text-left w-full">
                  {/* Icon Badge */}
                  <div
                    className={`w-14 h-14 bg-zinc-950 border flex items-center justify-center rounded-xl mb-5 shadow-lg shadow-black/80 transition-all duration-300
                      ${
                        isSelected
                          ? "border-white text-white"
                          : "border-zinc-800 text-amber-500 group-hover:border-amber-500"
                      }`}
                  >
                    <Icon size={28} strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-amber-500 tracking-tight uppercase mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>

                {/* Corner Accents */}
                <div
                  className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-3xl transition-all duration-300
                    ${
                      isSelected
                        ? "border-white/60"
                        : "border-transparent group-hover:border-amber-500/30"
                    }`}
                />

                <div
                  className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-3xl transition-all duration-300
                    ${
                      isSelected
                        ? "border-white/60"
                        : "border-transparent group-hover:border-amber-500/30"
                    }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}