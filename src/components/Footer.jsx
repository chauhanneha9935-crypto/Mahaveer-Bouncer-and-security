import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t-2 border-white pt-16 pb-8 mt-auto relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-neutral-800/80">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4 group inline-flex">
            <img 
              src="/logo.png" 
              alt="Mahaveer Bouncer & Security Logo" 
              className="h-12 w-12 object-contain rounded-lg border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:border-amber-500/60 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]" 
            />
            <div className="flex flex-col text-left">
              <span className="text-lg font-black tracking-wider text-amber-500 leading-none group-hover:text-amber-400 transition-colors">MAHAVEER</span>
              <span className="text-[10px] tracking-[0.15em] text-zinc-500 font-bold uppercase mt-1">Bouncer & Security</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed font-semibold">
            Professional manpower solutions delivering certified, reliable, and elite protection services nationwide.
          </p>
          <div className="space-y-3 text-slate-300 text-sm font-semibold text-left">
            <p className="flex items-start"><span className="text-amber-500 font-bold mr-2">📍</span> Amethi, Uttar Pradesh, India</p>
            <p className="flex items-center"><span className="text-amber-500 font-bold mr-2">📞</span> +91 98765 43210</p>
            <p className="flex items-center"><span className="text-amber-500 font-bold mr-2">✉️</span> info@mahaveersecurity.com</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-base font-bold uppercase tracking-wider text-slate-200 mb-4">Our Location</h4>
          <div className="w-full h-40 bg-neutral-900/40 rounded-lg border border-neutral-800 flex items-center justify-center text-slate-500 text-sm overflow-hidden backdrop-blur-sm">
            <span className="p-4 text-center font-bold text-xs uppercase tracking-widest text-amber-500/60">Google Map Integration Area</span>
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold uppercase tracking-wider text-slate-200 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-400 font-semibold text-left">
            <li><Link to="/" className="hover:text-amber-500 transition-colors">Home Page</Link></li>
            <li><Link to="/services" className="hover:text-amber-500 transition-colors">Our Capabilities</Link></li>
            <li><Link to="/why-choose-us" className="hover:text-amber-500 transition-colors">Verification Standards</Link></li>
            <li><Link to="/inquiry" className="hover:text-amber-500 transition-colors">Instant Booking Form</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4 font-semibold">
        <p>&copy; {new Date().getFullYear()} Mahaveer Bouncer & Security Services. All rights reserved.</p>
        <p className="tracking-wide">
          Designed by{' '}
          <a 
            href="https://codewebx.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-500 hover:text-white transition-colors underline underline-offset-4"
          >
            CodeWebx
          </a>
        </p>
      </div>

      <a 
        href="https://wa.me/919876543210?text=Hi,%20I'm%20looking%20for%20security%20personnel." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-110 flex items-center justify-center border border-emerald-400/20"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.424 3.496 2.254 2.256 3.491 5.244 3.491 8.419 0 6.561-5.337 11.91-11.91 11.91-1.993-.001-3.952-.5-5.688-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.028 14.066.996 11.438.996c-5.44 0-9.865 4.369-9.87 9.799-.001 1.702.451 3.361 1.307 4.843l-.979 3.57 3.656-.962z"/>
        </svg>
      </a>
    </footer>
  );
}