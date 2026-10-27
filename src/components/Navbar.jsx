import React, { useState } from 'react';
import { Compass, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ 
  onScrollToHero,
  onScrollToDestinations, 
  onScrollToMap, 
  onScrollToHeritage,
  onScrollToPlanner
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (callback) => {
    setMobileMenuOpen(false);
    if (callback) callback();
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#080a0f]/90 backdrop-blur-md border-b border-slate-800/80 py-3 px-4 sm:px-6 transition-all no-print">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Clean Logo */}
        <div 
          onClick={() => handleNav(onScrollToHero)}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl border border-[#c29b62]/40 bg-[#12151d] flex items-center justify-center group-hover:border-[#c29b62] transition-colors">
            <Compass className="w-4 h-4 text-[#e5c48b]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-base tracking-[0.15em] text-white font-bold uppercase">
                Yatra AI
              </span>
              <span className="text-[10px] font-serif px-1.5 py-0.2 rounded bg-[#c29b62]/20 text-[#fde047] border border-[#c29b62]/30">
                ಕರ್ನಾಟಕ
              </span>
            </div>
          </div>
        </div>

        {/* Clean Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider text-slate-300">
          <button
            onClick={() => handleNav(onScrollToDestinations)}
            className="hover:text-[#e5c48b] transition-colors"
          >
            Sanctuaries (ತಾಣಗಳು)
          </button>

          <button
            onClick={() => handleNav(onScrollToMap)}
            className="hover:text-[#e5c48b] transition-colors"
          >
            Vector Map (ನಕ್ಷೆ)
          </button>

          <button
            onClick={() => handleNav(onScrollToHeritage)}
            className="hover:text-[#e5c48b] transition-colors"
          >
            Heritage (ಸಂಸ್ಕೃತಿ)
          </button>

          <button
            onClick={() => handleNav(onScrollToPlanner)}
            className="hover:text-[#e5c48b] transition-colors"
          >
            Plan Yatra (ಯೋಜನೆ)
          </button>
        </div>

        {/* Action Controls & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Primary CTA */}
          <button
            onClick={() => handleNav(onScrollToPlanner)}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#c29b62] text-black font-semibold text-xs tracking-wider uppercase font-sans hover:brightness-110 transition-all hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Plan Expedition</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#14171f] border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-2 px-2 border-t border-slate-800 mt-3 space-y-2 animate-fadeIn font-mono text-xs uppercase">
          <button
            onClick={() => handleNav(onScrollToDestinations)}
            className="w-full text-left p-2.5 rounded-xl text-slate-300 hover:bg-[#14171f] hover:text-[#e5c48b]"
          >
            Sanctuaries (ತಾಣಗಳು)
          </button>
          <button
            onClick={() => handleNav(onScrollToMap)}
            className="w-full text-left p-2.5 rounded-xl text-slate-300 hover:bg-[#14171f] hover:text-[#e5c48b]"
          >
            Vector Map (ನಕ್ಷೆ)
          </button>
          <button
            onClick={() => handleNav(onScrollToHeritage)}
            className="w-full text-left p-2.5 rounded-xl text-slate-300 hover:bg-[#14171f] hover:text-[#e5c48b]"
          >
            Heritage (ಸಂಸ್ಕೃತಿ)
          </button>
          <button
            onClick={() => handleNav(onScrollToPlanner)}
            className="w-full text-left p-2.5 rounded-xl text-slate-300 hover:bg-[#14171f] hover:text-[#e5c48b]"
          >
            Plan Yatra (ಯೋಜನೆ)
          </button>
        </div>
      )}
    </nav>
  );
}
