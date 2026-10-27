import React, { useState } from 'react';
import { KARNATAKA_DESTINATIONS } from '../data/destinations';
import { Sparkles, MapPin, Eye, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Sanctuaries (ಎಲ್ಲವೂ)' },
  { id: 'Heritage & History', label: 'Heritage & Empires (ಪರಂಪರೆ)' },
  { id: 'Mountains & Wilderness', label: 'Hills & Coffee (ಮಲೆನಾಡು)' },
  { id: 'Coast & Slow Living', label: 'Beaches & Ocean (ಕರಾವಳಿ)' }
];

export default function DestinationsGrid({ onSelectDestination }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? KARNATAKA_DESTINATIONS
    : KARNATAKA_DESTINATIONS.filter(d => d.category === activeCategory);

  return (
    <section id="destinations" className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181d26] border border-[#c29b62]/30 text-[#e5c48b] text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#c29b62]" />
            <span>ಕರುನಾಡಿನ ತಾಣಗಳು • Curated Sanctuaries</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-white">
            Sacred Karnataka Destinations
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1 max-w-md">
            Click any destination card to discover its ancient lore, architecture, and signature regional delicacies.
          </p>
        </div>

        {/* Clean Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#c29b62] text-black border-[#c29b62] font-semibold shadow-glow-gold'
                  : 'bg-[#14171f] text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination && onSelectDestination(dest)}
            className="group rounded-3xl bg-[#12151d] border border-slate-800 hover:border-[#c29b62]/60 transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:-translate-y-1.5 flex flex-col"
          >
            {/* Image Banner */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={dest.heroImage}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12151d] via-transparent to-black/30" />
              
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#e5c48b] bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                  {dest.region}
                </span>
              </div>

              <div className="absolute bottom-3 right-4">
                <span className="text-xs font-serif text-[#fde047] drop-shadow">
                  {dest.kannadaName}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-xl font-cinzel font-bold text-white group-hover:text-[#e5c48b] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-[#c29b62] font-mono mt-0.5">
                  {dest.tagline}
                </p>
                <p className="text-xs text-slate-300 font-sans line-clamp-2 mt-2 leading-relaxed">
                  {dest.description}
                </p>
              </div>

              {/* Bottom Quick Specs */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-sans text-[11px]">
                  Best: {dest.bestSeason}
                </span>
                <span className="text-[#e5c48b] font-mono font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
