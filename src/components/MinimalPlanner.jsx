import React, { useState, useRef } from 'react';
import { 
  Sparkles, Calendar, MapPin, Compass, IndianRupee, 
  Clock, ArrowRight, Check, Printer, Copy, Sun, Moon, Coffee, Lightbulb, CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

const ORIGIN_CITIES = ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi'];
const DURATIONS = [
  { days: 3, label: '3 Days', desc: 'Weekend Getaway (ವೀಕೆಂಡ್ ಯಾತ್ರೆ)' },
  { days: 5, label: '5 Days', desc: 'Classic Circuit (ಸಮಗ್ರ ವಲಯ)' },
  { days: 7, label: '7 Days', desc: 'Deep Heritage (ಆಳವಾದ ಪಯಣ)' },
  { days: 10, label: '10 Days', desc: 'Grand Odyssey (ಮಹಾ ಯಾತ್ರೆ)' }
];

const INTEREST_THEMES = [
  { id: 'heritage', label: 'Ancient Temples & Empires', kannada: 'ವಾಸ್ತುಶಿಲ್ಪ & ಪರಂಪರೆ', icon: '🏛️' },
  { id: 'mountains', label: 'Coffee Hills & Rainforests', kannada: 'ಮಲೆನಾಡು & ಗಿರಿಧಾಮ', icon: '☕' },
  { id: 'beaches', label: 'Pristine Karavali Coast', kannada: 'ಕರಾವಳಿ & ತೀರ', icon: '🏖️' },
  { id: 'spiritual', label: 'Sacred Sanctums & Lore', kannada: 'ಪುಣ್ಯಕ್ಷೇತ್ರಗಳು', icon: '🔱' }
];

export default function MinimalPlanner({ 
  itinerary, 
  onGenerateItinerary, 
  selectedCity, 
  setSelectedCity,
  selectedDays, 
  setSelectedDays,
  selectedTheme, 
  setSelectedTheme 
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Call generation
    onGenerateItinerary({
      origin: selectedCity,
      days: selectedDays,
      interests: [selectedTheme, selectedTheme === 'heritage' ? 'mountains' : 'heritage']
    });

    setTimeout(() => {
      setIsGenerating(false);

      // Smooth scroll directly to the generated itinerary result so user sees it right away
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#c29b62', '#e5c48b', '#dc2626', '#f59e0b']
        });
      } catch (e) {}
    }, 350);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    if (!itinerary) return;
    const text = `✨ YATRA KARNATAKA ITINERARY ✨\n` +
      `Trip: ${itinerary.title}\n` +
      `From: ${selectedCity} (${selectedDays} Days)\n` +
      `Estimated Route: ~${itinerary.estimatedKm} km\n\n` +
      itinerary.days.map(d => 
        `Day ${d.dayNumber}: ${d.title}\n` +
        `• Morning: ${d.morningActivity}\n` +
        `• Afternoon: ${d.afternoonActivity}\n` +
        `• Evening: ${d.eveningActivity}\n` +
        `• Taste: ${d.foodRecommendation}\n`
      ).join('\n') +
      `\nPlan crafted with Yatra AI • ಕರುನಾಡು ಯಾತ್ರೆ`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="planner" className="w-full max-w-5xl mx-auto space-y-10">
      
      {/* Planner Header */}
      <div className="text-center space-y-2.5 no-print">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181d26] border border-[#c29b62]/30 text-[#e5c48b] text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#c29b62]" />
          <span>ಬುದ್ಧಿವಂತ ಯಾತ್ರಾ ಯೋಜನೆ • AI Trip Planner</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-white">
          Curate Your Karnataka Journey
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-lg mx-auto">
          Select your departure city, trip duration, and interest. We immediately synthesize an authentic, day-by-day Karnataka expedition.
        </p>
      </div>

      {/* 3-Step Controls Card */}
      <div id="planner-controls" className="p-6 sm:p-8 rounded-3xl bg-[#12151d] border border-slate-800 shadow-xl space-y-7 no-print">
        
        {/* Step 1: Starting Hub */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono uppercase tracking-wider text-[#e5c48b] block font-semibold">
            1. Starting Hub (ಪ್ರಾರಂಭ ಸ್ಥಳ)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ORIGIN_CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`py-3 px-4 rounded-2xl text-xs font-medium transition-all duration-200 border text-center ${
                  selectedCity === city
                    ? 'bg-[#c29b62] text-black border-[#c29b62] font-semibold shadow-glow-gold'
                    : 'bg-[#181d26] text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Duration */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono uppercase tracking-wider text-[#e5c48b] block font-semibold">
            2. Duration (ದಿನಗಳ ಸಂಖ್ಯೆ)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DURATIONS.map((dur) => (
              <button
                key={dur.days}
                onClick={() => setSelectedDays(dur.days)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border ${
                  selectedDays === dur.days
                    ? 'bg-[#c29b62]/15 border-[#c29b62] text-[#e5c48b]'
                    : 'bg-[#181d26] border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="block font-bold text-sm text-white">{dur.label}</span>
                <span className="block text-[11px] text-slate-400 font-sans mt-0.5">{dur.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Travel Essence */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono uppercase tracking-wider text-[#e5c48b] block font-semibold">
            3. Travel Essence (ಆಸಕ್ತಿ ವಿಷಯ)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {INTEREST_THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex items-center gap-3 ${
                  selectedTheme === theme.id
                    ? 'bg-[#c29b62]/20 border-[#c29b62] text-[#e5c48b] shadow-md'
                    : 'bg-[#181d26] border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="text-2xl">{theme.icon}</span>
                <div>
                  <span className="block font-semibold text-xs text-white">{theme.label}</span>
                  <span className="block text-[10px] text-[#e5c48b] font-serif">{theme.kannada}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#c29b62] to-[#b83b3e] text-white font-bold text-xs sm:text-sm tracking-wider uppercase font-sans hover:brightness-110 shadow-glow-gold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isGenerating ? "Synthesizing Expedition..." : "Generate Custom Itinerary (ಯೋಜನೆ ರಚಿಸಿ)"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Generated Itinerary Section (Tagged with #printable-itinerary for isolated print) */}
      {itinerary && (
        <div ref={resultRef} id="printable-itinerary" className="space-y-6 pt-2 animate-fadeIn">
          
          {/* Header Strip */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#14171f] border border-[#c29b62]/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#e5c48b] bg-[#c29b62]/20 px-3 py-0.5 rounded-full border border-[#c29b62]/30">
                  {selectedCity} departure • {selectedDays} Days
                </span>
                <span className="text-xs font-serif text-[#fde047]">
                  ಕರ್ನಾಟಕ ಯಾತ್ರೆ
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
                {itinerary.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                Estimated Distance: ~{itinerary.estimatedKm} km • Approx Budget: ₹{itinerary.perPersonBudget?.toLocaleString('en-IN')} / person
              </p>
            </div>

            {/* Print & Copy Controls */}
            <div className="flex items-center gap-2.5 shrink-0 no-print">
              <button
                onClick={handleCopySummary}
                className="px-4 py-2.5 rounded-xl bg-[#181d26] border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white text-xs font-mono flex items-center gap-2 transition-colors"
                title="Copy itinerary text"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#c29b62]" />}
                <span>{copied ? "Copied!" : "Copy Summary"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-xl bg-[#c29b62] hover:bg-[#dfbe86] text-black font-semibold text-xs font-mono flex items-center gap-2 transition-all shadow-md"
                title="Print only this itinerary"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Plan</span>
              </button>
            </div>
          </div>

          {/* Day-by-Day Cards */}
          <div className="space-y-4">
            {itinerary.days?.map((day, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-[#12151d] border border-slate-800 space-y-4 shadow-md"
              >
                {/* Day Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-[#c29b62]/15 border border-[#c29b62]/40 text-[#e5c48b] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      Day {day.dayNumber || idx + 1}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-cinzel font-bold text-white">
                        {day.title}
                      </h4>
                      <span className="text-xs font-serif text-[#e5c48b]">
                        {day.kannadaName && `${day.kannadaName} • `}{day.location}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-[#181d26] px-2.5 py-1 rounded-lg border border-slate-800/60 self-start sm:self-auto">
                    {day.transitInfo}
                  </span>
                </div>

                {/* 3-Time Block: Morning, Afternoon, Evening */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
                  
                  {/* Morning Block */}
                  <div className="p-4 rounded-2xl bg-[#181d26] border border-slate-800/60 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#e5c48b] font-mono text-[10px] uppercase font-semibold">
                      <Sun className="w-3.5 h-3.5 text-[#e5c48b]" />
                      <span>Morning (ಮುಂಜಾನೆ)</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      {day.morningActivity}
                    </p>
                  </div>

                  {/* Afternoon Block */}
                  <div className="p-4 rounded-2xl bg-[#181d26] border border-slate-800/60 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#f59e0b] font-mono text-[10px] uppercase font-semibold">
                      <Coffee className="w-3.5 h-3.5 text-[#f59e0b]" />
                      <span>Afternoon & Cuisine (ಮಧ್ಯಾಹ್ನ)</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      {day.afternoonActivity}
                    </p>
                  </div>

                  {/* Evening Block */}
                  <div className="p-4 rounded-2xl bg-[#181d26] border border-slate-800/60 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#38bdf8] font-mono text-[10px] uppercase font-semibold">
                      <Moon className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>Evening (ಸಂಜೆ)</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      {day.eveningActivity}
                    </p>
                  </div>
                </div>

                {/* Culinary Recommendation & Traveler Tip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  {day.foodRecommendation && (
                    <div className="p-3 rounded-xl bg-[#181d26]/70 border border-slate-800 flex items-start gap-2.5">
                      <span className="text-base shrink-0">🍲</span>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#e5c48b] block font-semibold">Authentic Dish:</span>
                        <span className="text-slate-300 font-sans">{day.foodRecommendation}</span>
                      </div>
                    </div>
                  )}

                  {day.tip && (
                    <div className="p-3 rounded-xl bg-[#181d26]/70 border border-slate-800 flex items-start gap-2.5">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-mono uppercase text-amber-400 block font-semibold">Local Tip:</span>
                        <span className="text-slate-300 font-sans">{day.tip}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
