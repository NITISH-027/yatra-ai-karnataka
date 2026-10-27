import React, { useState } from 'react';
import { 
  Compass, MapPin, Calendar, Clock, DollarSign, Download, Share2, 
  Sparkles, CheckCircle, Coffee, Utensils, Bed, Car, Eye, ChevronRight 
} from 'lucide-react';
import { KARNATAKA_DESTINATIONS } from '../data/destinations';

export default function ItineraryResult({
  itinerary,
  params,
  onSelectDestination
}) {
  const [copied, setCopied] = useState(false);

  if (!itinerary) return null;

  const {
    title,
    themeTag,
    kannadaMotto,
    summary,
    days,
    budgetBreakdown,
    totalBudget,
    perPersonBudget,
    featuredDestinations
  } = itinerary;

  const handleShare = () => {
    const text = `Explore my Karnataka Yatra: ${title} (${params.durationDays} Days, ${params.originCity} to Karnataka)! Generated with Yatra AI.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div id="itinerary-result" className="space-y-12 animate-fadeIn pt-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 glass-panel-gold border border-[#c29b62]/40 shadow-glow-gold">
        {/* Background Accent glow */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#c29b62]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-[#8e282a]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-[#c29b62]/20 text-[#e5c48b] border border-[#c29b62]/40">
              {themeTag}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Origin: <strong className="text-white">{params.originCity}</strong> • {params.durationDays} Days • {params.travelersCount} Traveler{params.travelersCount > 1 ? 's' : ''}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-wide">
            {title}
          </h2>

          <p className="text-sm sm:text-base font-serif italic text-[#dfbe86]">
            "{kannadaMotto}"
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-sans">
            {summary}
          </p>

          {/* Quick Destination Pill Jump */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-1">Enroute stops:</span>
            {featuredDestinations.map(dest => (
              <button
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181d26] hover:bg-[#c29b62]/20 border border-slate-700 hover:border-[#c29b62] text-xs font-medium text-slate-200 hover:text-[#e5c48b] transition-all"
              >
                <MapPin className="w-3 h-3 text-[#c29b62]" />
                <span>{dest.name.split(' ')[0]}</span>
                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap gap-3">
            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-white flex items-center gap-2 transition-colors"
            >
              <Share2 className="w-4 h-4 text-[#c29b62]" />
              <span>{copied ? "Copied Link!" : "Share Itinerary"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-white flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4 text-[#c29b62]" />
              <span>Print / Save Route</span>
            </button>
          </div>
        </div>
      </div>

      {/* Day by Day Chronicle */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c29b62] block mb-1">
            Act IV — The Day-by-Day Chronicle
          </span>
          <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white tracking-wide">
            Your Custom Journey Timeline
          </h3>
        </div>

        <div className="space-y-6">
          {days.map((day) => {
            const destData = KARNATAKA_DESTINATIONS.find(d => d.id === day.destId) || KARNATAKA_DESTINATIONS[0];

            return (
              <div
                key={day.dayNumber}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#14171f]/90 border border-slate-800 hover:border-[#c29b62]/60 transition-all duration-300 space-y-5"
              >
                {/* Day Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-xl bg-[#c29b62]/10 border border-[#c29b62]/40 text-[#e5c48b] flex flex-col items-center justify-center font-mono font-bold">
                      <span className="text-[10px] tracking-widest text-[#c29b62]">DAY</span>
                      <span className="text-lg leading-none">{String(day.dayNumber).padStart(2, '0')}</span>
                    </span>
                    <div>
                      <h4 className="text-xl font-cinzel font-bold text-white group-hover:text-[#e5c48b] transition-colors">
                        {day.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-sans flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#c29b62]" />
                        <span>{day.location}</span>
                        <span>•</span>
                        <span className="text-[#c29b62]/90">{day.distance}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectDestination(destData)}
                    className="self-start sm:self-center flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-[#c29b62]/20 border border-slate-700 text-[#e5c48b] transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Explore {destData.name.split(' ')[0]}</span>
                  </button>
                </div>

                {/* Day Time Schedule Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Morning */}
                  <div className="p-4 rounded-xl bg-[#181d26] border border-slate-800/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-[#e5c48b] text-xs font-mono uppercase font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#e5c48b]" />
                      <span>Morning (Dawn to Midday)</span>
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {day.morning}
                    </p>
                  </div>

                  {/* Afternoon */}
                  <div className="p-4 rounded-xl bg-[#181d26] border border-slate-800/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-500 text-xs font-mono uppercase font-semibold">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>Afternoon (Cultural & Rest)</span>
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {day.afternoon}
                    </p>
                  </div>

                  {/* Golden Hour & Evening */}
                  <div className="p-4 rounded-xl bg-[#181d26] border border-slate-800/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-orange-400 text-xs font-mono uppercase font-semibold">
                      <span className="w-2 h-2 rounded-full bg-orange-400" />
                      <span>Sunset & Evening Aarti</span>
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {day.evening}
                    </p>
                  </div>
                </div>

                {/* Local Gastronomy & Travel Wisdom */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <div className="flex-1 flex items-start gap-2.5 p-3 rounded-xl bg-[#12151c] border border-slate-800 text-xs">
                    <Utensils className="w-4 h-4 text-[#c29b62] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-sans">Flavors of the Soil:</strong>
                      <span className="text-slate-400 font-sans">{day.foodRecommendation}</span>
                    </div>
                  </div>

                  <div className="flex-1 flex items-start gap-2.5 p-3 rounded-xl bg-[#12151c] border border-slate-800 text-xs">
                    <Sparkles className="w-4 h-4 text-[#e5c48b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-sans">Sage Advice:</strong>
                      <span className="text-slate-400 font-sans">{day.tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Act V: Cost Breakdown & Logistics */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c29b62] block mb-1">
            Act V — Expedition Treasury
          </span>
          <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white tracking-wide">
            Estimated Cost Breakdown
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Projected expenditures balanced against your budget of {formatCurrency(totalBudget)} for {params.travelersCount} traveler{params.travelersCount > 1 ? 's' : ''}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Stays */}
          <div className="p-5 rounded-2xl bg-[#14171f] border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-[#c29b62]" />
                Heritage Stays
              </span>
              <span>42%</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">
              {formatCurrency(budgetBreakdown.stays)}
            </div>
            <p className="text-[11px] text-slate-400 font-sans">
              Boutique planters' bungalows, stone havelis & eco-resorts.
            </p>
          </div>

          {/* Transport */}
          <div className="p-5 rounded-2xl bg-[#14171f] border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#c29b62]" />
                Private Transport
              </span>
              <span>26%</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">
              {formatCurrency(budgetBreakdown.transport)}
            </div>
            <p className="text-[11px] text-slate-400 font-sans">
              Dedicated vehicle, toll routes, Ghat fuel & coracle boats.
            </p>
          </div>

          {/* Dining */}
          <div className="p-5 rounded-2xl bg-[#14171f] border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Coffee className="w-4 h-4 text-[#c29b62]" />
                Authentic Dining
              </span>
              <span>18%</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">
              {formatCurrency(budgetBreakdown.food)}
            </div>
            <p className="text-[11px] text-slate-400 font-sans">
              Traditional Jolada Rotti, Kodava curries & filter coffee stops.
            </p>
          </div>

          {/* Experiences & Permits */}
          <div className="p-5 rounded-2xl bg-[#14171f] border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#c29b62]" />
                Guided Walks & Entry
              </span>
              <span>14%</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">
              {formatCurrency(budgetBreakdown.experiences)}
            </div>
            <p className="text-[11px] text-slate-400 font-sans">
              Archaeological guides, plantation passes & safari permits.
            </p>
          </div>
        </div>

        {/* Total Summary Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-[#181d26] via-[#1c2230] to-[#181d26] border border-[#c29b62]/30">
          <div>
            <span className="text-xs font-mono uppercase text-[#c29b62] block">Comprehensive Estimate</span>
            <span className="text-2xl sm:text-3xl font-bold font-cinzel text-white">
              Total: {formatCurrency(totalBudget)}
            </span>
          </div>
          <div className="text-right mt-3 sm:mt-0 font-mono text-xs text-slate-400">
            <span>Approx. </span>
            <strong className="text-[#e5c48b] text-base font-bold">{formatCurrency(perPersonBudget)}</strong>
            <span> per traveler</span>
          </div>
        </div>
      </div>
    </div>
  );
}
