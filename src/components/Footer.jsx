import React from 'react';
import { Compass, Heart, Landmark, Sparkles, Phone, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer({ onScrollToTop }) {
  return (
    <footer className="relative bg-[#06070a] border-t border-[#c29b62]/30 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Poet Quote Banner - Adikavi Pampa */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#14171f] via-[#1a1e28] to-[#14171f] border border-[#c29b62]/40 text-center space-y-3 shadow-glow-gold relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c29b62]/10 rounded-full blur-2xl pointer-events-none" />
          
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e5c48b] block">
            ಆದಿಕವಿ ಪಂಪ • Adikavi Pampa (10th Century CE)
          </span>
          <p className="text-base sm:text-xl font-cinzel text-white italic max-w-3xl mx-auto leading-relaxed">
            "ಚಾಗದ ಭೋಗದಕ್ಕರದ ಗೇಯದ ಗೊಟ್ಟಿಯಲಂಪಿನಿಂಪಿನಾ ಗಾರಮನೆ ಪುಟ್ಟಲ್ ಮಾನವರಾಗಿಯೆ ಮಾನಸರಾಗಿಯೇಂ ಪೆರ್ಮೆಯೆ!"
          </p>
          <p className="text-xs text-[#dfbe86] font-sans max-w-xl mx-auto">
            "To be born as a human being in this blessed garden of fine arts, poetry, charity, and joyful fellowship in Karnataka is the supreme privilege of existence."
          </p>
        </div>

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-4">
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl border border-[#c29b62]/40 bg-[#14171f] flex items-center justify-center shadow-glow-gold">
                <Compass className="w-5 h-5 text-[#c29b62]" />
              </div>
              <div>
                <span className="font-cinzel text-lg tracking-[0.2em] text-[#e5c48b] font-bold block uppercase">
                  Yatra AI • ಕರ್ನಾಟಕ
                </span>
                <span className="text-[10px] tracking-[0.2em] text-slate-400 font-mono block">
                  SACRED TRAVEL COMPANION
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300 max-w-md leading-relaxed font-sans">
              An intelligent, interactive cultural expedition portal celebrating Karnataka’s four-thousand-year heritage, stone temple poetry, mist-clad Western Ghats, and Karavali shores.
            </p>
            <div className="text-xs font-mono text-[#fde047] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
              <span>ಒಂದು ರಾಜ್ಯ. ಹಲವು ಜಗತ್ತು. — One State. Many Worlds.</span>
            </div>
          </div>

          {/* Col 2: Signature Circuits */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#e5c48b]">
              Cultural Circuits (ಯಾತ್ರಾ ಮಾರ್ಗಗಳು)
            </h4>
            <ul className="text-xs space-y-2 text-slate-300">
              <li className="hover:text-[#e5c48b] transition-colors cursor-pointer">❖ Vijayanagara Boulder Empire (Hampi)</li>
              <li className="hover:text-[#e5c48b] transition-colors cursor-pointer">❖ Chalukyan Rock-Cut Sanctums (Badami)</li>
              <li className="hover:text-[#e5c48b] transition-colors cursor-pointer">❖ Misty Malnad Coffee Highlands (Coorg)</li>
              <li className="hover:text-[#e5c48b] transition-colors cursor-pointer">❖ Karavali Sacred Coast (Gokarna & Udupi)</li>
              <li className="hover:text-[#e5c48b] transition-colors cursor-pointer">❖ Royal Mysuru & Chamundi Spire</li>
            </ul>
          </div>

          {/* Col 3: Tourist Helpline & Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#e5c48b]">
              Traveler's Assistance (ಸಹಾಯವಾಣಿ)
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c29b62]" />
                <span>KSTDC Toll-Free: 1800-425-4666</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Karnataka Police Helpline: 112</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onScrollToTop}
                  className="px-4 py-2 rounded-xl bg-[#181d26] border border-[#c29b62]/40 text-[#e5c48b] hover:text-white text-xs font-mono flex items-center gap-2 transition-all hover:scale-105"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to Top (ಮೇಲಕ್ಕೆ)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} YATRA AI — Dedicated to Karnataka Tourism, living Kannada culture & wanderers.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#dc2626] fill-[#dc2626]" />
            <span>for Karunadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
