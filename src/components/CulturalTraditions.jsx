import React from 'react';
import { Sparkles, Award, Palette, Landmark } from 'lucide-react';
import GandaberundaEmblem from './cultural-svgs/GandaberundaEmblem';

export default function CulturalTraditions() {
  return (
    <section id="heritage" className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181d26] border border-[#c29b62]/30 text-[#e5c48b] text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#c29b62]" />
          <span>ಕನ್ನಡ ಸಂಸ್ಕೃತಿ • Living Heritage</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-white">
          Treasures of Karunadu
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-sans">
          Centuries of royal patronage, world-renowned handicrafts, and theatrical arts that define Karnataka’s soul.
        </p>
      </div>

      {/* 3 Balanced, Elegant Heritage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: The Royal State Emblem */}
        <div className="p-6 rounded-3xl bg-[#12151d] border border-slate-800 hover:border-[#c29b62]/50 transition-all duration-300 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e5c48b] bg-[#c29b62]/20 px-2.5 py-0.5 rounded-full">
                ರಾಜ್ಯ ಲಾಂಛನ • State Emblem
              </span>
              <Landmark className="w-4 h-4 text-[#c29b62]" />
            </div>
            
            <div className="flex justify-center py-2">
              <GandaberundaEmblem className="w-24 h-24" glowing={false} />
            </div>

            <h3 className="text-xl font-cinzel font-bold text-white text-center">
              The Gandaberunda (ಗಂಡಭೇರುಂಡ)
            </h3>
            
            <p className="text-xs text-slate-300 font-sans text-center leading-relaxed">
              The mythical two-headed eagle of Vijayanagara and the Mysore Kingdom, symbolizing courage, wisdom, and royal protection.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-[#181d26] border border-slate-800/80 text-[11px] text-slate-400 font-sans text-center">
            Inscribed on ancient gold pagodas across Karunadu
          </div>
        </div>

        {/* Card 2: Iconic Folk Arts */}
        <div className="p-6 rounded-3xl bg-[#12151d] border border-slate-800 hover:border-[#c29b62]/50 transition-all duration-300 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#dc2626] bg-[#dc2626]/20 px-2.5 py-0.5 rounded-full">
                ಜಾನಪದ ಕಲೆಗಳು • Folk Arts
              </span>
              <Palette className="w-4 h-4 text-[#dc2626]" />
            </div>

            <h3 className="text-xl font-cinzel font-bold text-white pt-2">
              Yakshagana & Dollu Kunitha
            </h3>

            <div className="space-y-3 text-xs text-slate-300 font-sans">
              <div className="p-3 rounded-2xl bg-[#181d26] border border-slate-800 space-y-1">
                <span className="font-semibold text-white block">🎭 Yakshagana (ಯಕ್ಷಗಾನ)</span>
                <p className="text-slate-400 text-[11px]">All-night coastal dance-drama featuring ornate crowns, chande drum beats, and epic Ramayana lore.</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#181d26] border border-slate-800 space-y-1">
                <span className="font-semibold text-white block">🥁 Dollu Kunitha (ಡೊಳ್ಳು ಕುಣಿತ)</span>
                <p className="text-slate-400 text-[11px]">High-energy martial drum dance performed with thunderous rhythm and acrobatics.</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#181d26] border border-slate-800/80 text-[11px] text-slate-400 font-sans text-center">
            Performed across temple fairs & coastal paddy harvest festivals
          </div>
        </div>

        {/* Card 3: GI Tagged Treasures */}
        <div className="p-6 rounded-3xl bg-[#12151d] border border-slate-800 hover:border-[#c29b62]/50 transition-all duration-300 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#f59e0b] bg-[#f59e0b]/20 px-2.5 py-0.5 rounded-full">
                ಜಿ.ಐ. ಮುದ್ರೆಗಳು • GI Crafts
              </span>
              <Award className="w-4 h-4 text-[#f59e0b]" />
            </div>

            <h3 className="text-xl font-cinzel font-bold text-white pt-2">
              Crafts of the Royalty
            </h3>

            <div className="space-y-2.5 text-xs text-slate-300 font-sans">
              <div className="flex items-start gap-2.5">
                <span className="text-lg">🧵</span>
                <div>
                  <span className="font-semibold text-white block">Mysore Silk (ಮೈಸೂರು ರೇಷ್ಮೆ)</span>
                  <span className="text-slate-400 text-[11px]">Woven with pure gold and silver zari threads.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-lg">🪵</span>
                <div>
                  <span className="font-semibold text-white block">Channapatna Toys (ಗೊಂಬೆಗಳು)</span>
                  <span className="text-slate-400 text-[11px]">Natural lacquer wooden toys crafted since Tipu Sultan's era.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-lg">☕</span>
                <div>
                  <span className="font-semibold text-white block">Coorg Arabica Coffee (ಕಾಫಿ)</span>
                  <span className="text-slate-400 text-[11px]">Shade-grown coffee with notes of wild honey and cocoa.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#181d26] border border-slate-800/80 text-[11px] text-slate-400 font-sans text-center">
            Certified Geographical Indication (GI) protected crafts
          </div>
        </div>
      </div>
    </section>
  );
}
