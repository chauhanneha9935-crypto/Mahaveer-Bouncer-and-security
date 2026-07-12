import React from 'react';

export default function Strengths() {
  const stats = [
    { label: "Security Personnel Deployed", count: "5000+" },
    { label: "Years of Experience", count: "12+" },
    { label: "Active Clients", count: "350+" },
    { label: "Events Secured", count: "1200+" },
    { label: "Cities Served", count: "45+" }
  ];

  return (
    <section className="py-16 bg-amber-500 text-slate-900 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="text-3xl md:text-4xl font-black mb-2 tracking-tight">{stat.count}</div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}