import React, { useState } from 'react';
import { Sparkles, ArrowRight, Compass, MapPin } from 'lucide-react';
import HampiStoneChariotSVG from './cultural-svgs/HampiStoneChariotSVG';
import YakshaganaCrownSVG from './cultural-svgs/YakshaganaCrownSVG';
import MysorePalaceSVG from './cultural-svgs/MysorePalaceSVG';
import JogFallsNatureSVG from './cultural-svgs/JogFallsNatureSVG';

const HERO_THEMES = [
  {
    id: 'chariot',
    name: 'Hampi',
    kannada: 'ಹಂಪಿ',
    tagline: 'The Boulder Empire of Vijayanagara',
    component: HampiStoneChariotSVG
  },
  {
    id: 'yakshagana',
    name: 'Karavali',
    kannada: 'ಕರಾವಳಿ',
    tagline: 'Coastal Folklore & Celestial Yakshagana',
    component: YakshaganaCrownSVG
  },
  {
    id: 'palace',
    name: 'Mysuru',
    kannada: 'ಮೈಸೂರು',
    tagline: 'City of Palaces, Sandalwood & Silk',
    component: MysorePalaceSVG
  },
  {
    id: 'nature',
    name: 'Jog Falls',
    kannada: 'ಜೋಗ ಜಲಪಾತ',
    tagline: 'The Sacred Cascades of the Western Ghats',
    component: JogFallsNatureSVG
  }
];

export default function CulturalHero({ onExploreClick, onPlanClick, onMapClick }) {
  const [activeThemeIdx, setActiveThemeIdx] = useState(0);

  const activeTheme = HERO_THEMES[activeThemeIdx];
  const ActiveComponent = activeTheme.component;

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#080a0f] via-[#0d1017] to-[#080a0f]">
      {/* Background Subtle Ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#c29b62]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        
        {/* Left Column: Poetic & Minimal Typography */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          
          {/* Subtle Kannada Flag Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#14171f] border border-[#c29b62]/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
            <span className="w-2 h-2 rounded-full bg-[#eab308]" />
            <span className="text-xs font-serif font-bold text-[#fef08a] tracking-wider">
              ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <span className="block text-xl sm:text-2xl font-serif text-[#e5c48b]">
              ಕರುನಾಡಿನ ದಿವ್ಯ ಯಾತ್ರೆ
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold text-white tracking-wide leading-tight">
              The Sacred Karnataka Odyssey
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
            Immerse yourself in three millennia of living culture — from the sung granite boulders of Hampi and royal Mysore arches to misty coffee ghats and Arabian shores.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#c29b62] to-[#b83b3e] text-white font-semibold text-xs tracking-wider uppercase font-sans hover:brightness-110 shadow-glow-gold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Sanctuaries (ತಾಣಗಳು)</span>
            </button>

            <button
              onClick={onPlanClick}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#181d26] border border-[#c29b62]/30 text-[#e5c48b] hover:text-white hover:border-[#c29b62] font-semibold text-xs tracking-wider uppercase font-sans transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#c29b62]" />
              <span>Curate Itinerary (ಯೋಜನೆ)</span>
            </button>
          </div>

          {/* Minimal Cultural Selector */}
          <div className="pt-4 border-t border-slate-800/60">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {HERO_THEMES.map((theme, i) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveThemeIdx(i)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                    activeThemeIdx === i
                      ? 'bg-[#c29b62] text-black font-semibold shadow-glow-gold'
                      : 'bg-[#14171f] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {theme.kannada} • {theme.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Serene Cultural SVG Art */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="w-full max-w-md p-4 rounded-3xl bg-[#12151d]/70 border border-slate-800 shadow-2xl backdrop-blur-sm">
            <ActiveComponent />
            <p className="text-center text-[11px] font-mono text-slate-400 mt-2">
              {activeTheme.tagline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
