import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Why Us', path: '/why-choose-us' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Inquiry', path: '/inquiry' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-zinc-900 text-white shadow-xl shadow-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO AND BRANDING SECTION */}
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="flex-shrink-0 flex items-center gap-4" 
          >
            <img 
              src="/logo.png" 
              alt="Mahaveer Bouncer & Security Logo" 
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-xl border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-105 hover:border-amber-500/70 hover:shadow-[0_0_25px_rgba(245,158,11,0.55)]" 
            />
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-2xl md:text-3xl font-black tracking-wider text-amber-500 leading-none">MAHAVEER</span>
              <span className="text-[9px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500 font-bold uppercase mt-1 sm:mt-2">Bouncer & Security</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-neutral-900/40 p-1.5 rounded-full border border-zinc-800/40 relative font-medium">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-5 py-2 text-sm font-black tracking-wide rounded-full transition-all duration-300 z-10 select-none uppercase ${
                    isActive ? 'text-black' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span 
                      className="absolute inset-0 bg-amber-500 rounded-full z-[-1] shadow-[0_0_20px_rgba(245,158,11,0.45)]"
                      style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Contact Action Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/contact" 
              className="bg-amber-500 text-black px-5 py-2.5 rounded-lg font-black hover:bg-amber-600 transition-all shadow-md shadow-amber-500/10 text-xs uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white focus:outline-none p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden bg-[#050505] border-b border-zinc-900 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-black uppercase tracking-wide rounded-xl transition-all ${
                  isActive 
                    ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.2)]' 
                    : 'text-zinc-400 hover:bg-neutral-900/50 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="block text-center bg-amber-500 text-black py-3 rounded-lg font-black hover:bg-amber-600 transition-all text-sm uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}