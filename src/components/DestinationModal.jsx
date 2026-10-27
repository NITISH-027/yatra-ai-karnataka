import React from 'react';
import { X, MapPin, Calendar, Clock, Sparkles, Utensils, Compass, Info, CheckCircle2 } from 'lucide-react';

export default function DestinationModal({ destination, onClose }) {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Background dismissal */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#14171f] border border-[#c29b62]/40 rounded-3xl shadow-2xl z-10 text-slate-200">
        {/* Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14171f] via-[#14171f]/50 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/80 flex items-center justify-center backdrop-blur-md transition-all hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Heading overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e5c48b] bg-[#c29b62]/20 px-3 py-0.5 rounded-full border border-[#c29b62]/40 backdrop-blur-md">
                {destination.category}
              </span>
              <span className="text-sm font-sans text-slate-300">
                {destination.region}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white tracking-wide drop-shadow-md">
              {destination.name}
            </h2>
            <p className="text-sm text-[#e5c48b] italic font-serif mt-1">
              {destination.kannadaName} — {destination.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#1a1e28] border border-slate-800 text-xs font-sans">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#c29b62]" />
              <div>
                <span className="text-slate-400 block text-[10px] font-mono uppercase">Best Season</span>
                <span className="text-white font-medium">{destination.bestSeason}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#c29b62]" />
              <div>
                <span className="text-slate-400 block text-[10px] font-mono uppercase">Ideal Span</span>
                <span className="text-white font-medium">{destination.idealDays} Days</span>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-[#c29b62]" />
              <div>
                <span className="text-slate-400 block text-[10px] font-mono uppercase">Terrain</span>
                <span className="text-white font-medium">{destination.tags[0]}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#c29b62] mb-2 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Overview & Significance
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {destination.description}
            </p>
          </div>

          {/* Lore & Mythology */}
          {destination.lore && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#8e282a]/20 via-[#1a1e28] to-[#14171f] border border-[#8e282a]/30">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#f59e0b] mb-1.5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Living Lore & Historical Memory
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 italic font-serif leading-relaxed">
                "{destination.lore}"
              </p>
            </div>
          )}

          {/* Highlights */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#c29b62] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Curated Highlights & Encounters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {destination.highlights.map((h, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#181d26] border border-slate-800 space-y-1">
                  <h5 className="text-xs font-bold text-white font-sans flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c29b62]" />
                    {h.title}
                  </h5>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Authentic Cuisine */}
          {destination.cuisine && destination.cuisine.length > 0 && (
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-[#c29b62] mb-3 flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                Epicurean Flavors of the Soil
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.cuisine.map((food, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#181d26]/80 border border-slate-800/80">
                    <span className="text-xs font-semibold text-[#e5c48b] block">{food.name}</span>
                    <span className="text-xs text-slate-400">{food.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#c29b62] hover:bg-[#dfbe86] text-slate-950 font-semibold text-xs tracking-wider uppercase font-sans transition-colors"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
