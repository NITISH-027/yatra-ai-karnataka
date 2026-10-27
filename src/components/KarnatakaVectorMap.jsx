import React, { useState } from 'react';
import { MapPin, Navigation, Eye, Sparkles, Compass, Shield, Check } from 'lucide-react';
import { KARNATAKA_DESTINATIONS } from '../data/destinations';

export const CULTURAL_PINS = [
  {
    id: "hampi",
    name: "Hampi (Vijayanagara)",
    kannada: "ಹಂಪಿ",
    region: "Central Karnataka",
    category: "Heritage",
    cx: 310,
    cy: 235,
    tagline: "The Golden Capital of Boulder & Stone",
    accent: "#c29b62",
    icon: "🏛️"
  },
  {
    id: "badami",
    name: "Badami & Pattadakal",
    kannada: "ಬಾದಾಮಿ",
    region: "North Karnataka",
    category: "Heritage",
    cx: 245,
    cy: 165,
    tagline: "Red Sandstone Rock-Cut Sanctums",
    accent: "#b83b3e",
    icon: "🪨"
  },
  {
    id: "gokarna",
    name: "Gokarna & Karwar",
    kannada: "ಗೋಕರ್ಣ",
    region: "Coastal Karnataka",
    category: "Coast",
    cx: 110,
    cy: 285,
    tagline: "Sacred Shores & Crescent Cliffs",
    accent: "#0ea5e9",
    icon: "🏖️"
  },
  {
    id: "chikmagalur",
    name: "Chikmagalur",
    kannada: "ಚಿಕ್ಕಮಗಳೂರು",
    region: "Western Ghats",
    category: "Nature",
    cx: 240,
    cy: 370,
    tagline: "The Shola Highlands & Coffee Mist",
    accent: "#10b981",
    icon: "☕"
  },
  {
    id: "coorg",
    name: "Coorg (Kodagu)",
    kannada: "ಕೊಡಗು",
    region: "Western Ghats",
    category: "Nature",
    cx: 235,
    cy: 440,
    tagline: "The Scotland of India & Coffee Highlands",
    accent: "#059669",
    icon: "🌿"
  },
  {
    id: "mysore",
    name: "Mysuru",
    kannada: "ಮೈಸೂರು",
    region: "South Karnataka",
    category: "Heritage",
    cx: 320,
    cy: 450,
    tagline: "City of Palaces, Sandalwood & Silk",
    accent: "#f59e0b",
    icon: "👑"
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    kannada: "ಬೆಂಗಳೂರು",
    region: "South Karnataka",
    category: "Urban & Garden",
    cx: 380,
    cy: 430,
    tagline: "The Silicon Plateau & Garden City",
    accent: "#8b5cf6",
    icon: "🌆"
  },
  {
    id: "bijapur",
    name: "Vijayapura (Bijapur)",
    kannada: "ವಿಜಯಪುರ",
    region: "North Karnataka",
    category: "Heritage",
    cx: 255,
    cy: 90,
    tagline: "Gol Gumbaz & Whispering Galleries",
    accent: "#f97316",
    icon: "🕌"
  },
  {
    id: "murudeshwara",
    name: "Murudeshwara & Udupi",
    kannada: "ಮುರುಡೇಶ್ವರ & ಉಡುಪಿ",
    region: "Coastal Karnataka",
    category: "Coast",
    cx: 140,
    cy: 350,
    tagline: "Gigantic Shiva Statue & Temple Cuisine",
    accent: "#06b6d4",
    icon: "🔱"
  },
  {
    id: "belur",
    name: "Belur & Halebidu",
    kannada: "ಬೇಲೂರು & ಹಳೇಬೀಡು",
    region: "Hoysala Heritage",
    cx: 265,
    cy: 395,
    tagline: "Intricate Hoysala Soapstone Poetry",
    accent: "#eab308",
    icon: "✨"
  }
];

export default function KarnatakaVectorMap({ onSelectDestination, selectedDestId }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredPin, setHoveredPin] = useState(null);

  const categories = [
    { id: 'all', label: 'All Regions (ಎಲ್ಲವೂ)', icon: Compass },
    { id: 'Heritage', label: 'Heritage (ಪರಂಪರೆ)', icon: Shield },
    { id: 'Nature', label: 'Nature & Hills (ಮಲೆನಾಡು)', icon: Sparkles },
    { id: 'Coast', label: 'Coast (ಕರಾವಳಿ)', icon: Navigation }
  ];

  const filteredPins = activeCategory === 'all'
    ? CULTURAL_PINS
    : CULTURAL_PINS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-[#12151d] border border-[#c29b62]/30 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
      {/* Decorative Traditional Corner Motifs */}
      <div className="absolute top-3 left-3 text-[#c29b62]/20 font-serif text-2xl select-none">❖</div>
      <div className="absolute top-3 right-3 text-[#c29b62]/20 font-serif text-2xl select-none">❖</div>
      <div className="absolute bottom-3 left-3 text-[#c29b62]/20 font-serif text-2xl select-none">❖</div>
      <div className="absolute bottom-3 right-3 text-[#c29b62]/20 font-serif text-2xl select-none">❖</div>

      {/* Header & Category Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#e5c48b] bg-[#c29b62]/20 px-2.5 py-0.5 rounded-full border border-[#c29b62]/40">
              ಕರ್ನಾಟಕ ನಕ್ಷೆ • Interactive Vector Map
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white mt-1">
            Cultural Geographies of Karunadu
          </h3>
          <p className="text-xs text-slate-400 font-sans">
            Touch or hover over sacred pins to explore waypoints, distances, and historical lore.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#c29b62] text-black font-semibold shadow-glow-gold'
                    : 'bg-[#181d26] text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Graphic & Details Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4 items-center">
        {/* SVG Karnataka Map Area */}
        <div className="lg:col-span-7 flex justify-center items-center relative py-4">
          <svg
            viewBox="0 0 500 550"
            className="w-full max-w-[440px] h-auto drop-shadow-[0_12px_30px_rgba(0,0,0,0.8)]"
          >
            <defs>
              <linearGradient id="karnatakaLandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e2433" />
                <stop offset="50%" stopColor="#181d29" />
                <stop offset="100%" stopColor="#0f131a" />
              </linearGradient>

              <linearGradient id="coastalGhatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                <stop offset="40%" stopColor="#059669" stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Arabian Sea Coastline Backdrop (ಅರಬ್ಬೀ ಸಮುದ್ರ) */}
            <path
              d="M 50 160 C 40 230 75 320 120 420 L 50 420 L 50 160 Z"
              fill="url(#coastalGhatGrad)"
              opacity="0.7"
            />
            <text x="60" y="270" fill="#38bdf8" fontSize="10" fontFamily="sans-serif" opacity="0.4" transform="rotate(-75 60 270)">
              ARABIAN SEA • ಅರಬ್ಬೀ ಸಮುದ್ರ
            </text>

            {/* Authentic Vector Contour of Karnataka State */}
            <path
              d="M 230 40 
                 C 260 40 290 60 300 85 
                 C 320 100 350 120 340 160 
                 C 335 185 365 210 375 250 
                 C 385 285 410 320 400 365 
                 C 390 405 415 440 375 475 
                 C 340 505 300 515 270 510 
                 C 240 505 210 470 200 440 
                 C 190 415 150 400 135 365 
                 C 115 320 95 260 110 215 
                 C 120 180 155 170 170 140 
                 C 185 110 200 60 230 40 Z"
              fill="url(#karnatakaLandGrad)"
              stroke="#c29b62"
              strokeWidth="2"
              strokeDasharray="none"
              className="drop-shadow-lg"
            />

            {/* Internal Regional Boundary Accent Lines */}
            {/* Karavali Coastal Belt */}
            <path
              d="M 125 185 C 130 240 145 310 165 375"
              stroke="#0ea5e9"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.4"
            />
            {/* Western Ghats Ridge Line */}
            <path
              d="M 170 200 C 190 270 215 350 240 430"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.4"
            />
            {/* Tungabhadra & Krishna River Paths */}
            <path
              d="M 155 180 Q 240 190 310 220 Q 360 230 380 250"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="2 3"
              opacity="0.5"
            />
            <path
              d="M 210 440 Q 270 455 330 460 Q 370 465 385 480"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="2 3"
              opacity="0.5"
            />

            {/* Connecting Sacred Expedition Trails between Waypoints */}
            <path
              d="M 245 165 Q 275 200 310 235 Q 275 300 240 370 Q 235 405 235 440 Q 275 445 320 450 Q 350 440 380 430"
              stroke="#e5c48b"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              opacity="0.45"
            />

            {/* Interactive Pins */}
            {filteredPins.map((pin) => {
              const isSelected = selectedDestId === pin.id;
              const isHovered = hoveredPin?.id === pin.id;

              return (
                <g
                  key={pin.id}
                  className="cursor-pointer transition-transform duration-300"
                  onClick={() => {
                    const matchedDest = KARNATAKA_DESTINATIONS.find(d => d.id === pin.id);
                    if (matchedDest && onSelectDestination) {
                      onSelectDestination(matchedDest);
                    }
                  }}
                  onMouseEnter={() => setHoveredPin(pin)}
                  onMouseLeave={() => setHoveredPin(null)}
                >
                  {/* Ping Ring for Selected or Hovered Pin */}
                  {(isSelected || isHovered) && (
                    <circle
                      cx={pin.cx}
                      cy={pin.cy}
                      r="16"
                      fill={pin.accent}
                      opacity="0.35"
                      className="animate-ping"
                    />
                  )}

                  {/* Outer Pin Halo */}
                  <circle
                    cx={pin.cx}
                    cy={pin.cy}
                    r={isSelected || isHovered ? "11" : "8"}
                    fill="#0a0b0e"
                    stroke={pin.accent}
                    strokeWidth="2.5"
                  />

                  {/* Inner Pin Core */}
                  <circle
                    cx={pin.cx}
                    cy={pin.cy}
                    r={isSelected || isHovered ? "5" : "3.5"}
                    fill={pin.accent}
                  />

                  {/* Pin Text Label */}
                  <text
                    x={pin.cx + 12}
                    y={pin.cy + 4}
                    fill={isSelected || isHovered ? "#fff" : "#cbd5e1"}
                    fontSize={isSelected || isHovered ? "11" : "9"}
                    fontWeight={isSelected || isHovered ? "bold" : "normal"}
                    fontFamily="sans-serif"
                    className="drop-shadow-md select-none"
                  >
                    {pin.kannada} ({pin.name.split(' ')[0]})
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected / Hovered Destination Spotlight Panel */}
        <div className="lg:col-span-5 bg-[#181d26] border border-slate-800 rounded-2xl p-5 space-y-4">
          {(() => {
            const activeItem = hoveredPin || CULTURAL_PINS.find(p => p.id === selectedDestId) || CULTURAL_PINS[0];
            const destData = KARNATAKA_DESTINATIONS.find(d => d.id === activeItem.id);

            return (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#e5c48b] bg-[#c29b62]/15 px-2.5 py-0.5 rounded-full border border-[#c29b62]/30">
                    {activeItem.region}
                  </span>
                  <span className="text-xl">{activeItem.icon}</span>
                </div>

                <div>
                  <h4 className="text-2xl font-cinzel font-bold text-white">
                    {activeItem.name}
                  </h4>
                  <p className="text-sm text-[#e5c48b] font-serif italic">
                    {activeItem.kannada} — {activeItem.tagline}
                  </p>
                </div>

                {destData && (
                  <>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
                      {destData.description}
                    </p>

                    {/* Top Highlights Preview */}
                    <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                        Sacred Landmark Highlights:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300 font-sans">
                        {destData.highlights.slice(0, 2).map((hl, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c29b62]" />
                            <span className="font-semibold text-slate-200">{hl.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Signature Cuisines Pill */}
                    <div className="p-2.5 rounded-xl bg-[#12151d] border border-slate-800 text-xs">
                      <span className="text-[10px] font-mono text-[#e5c48b] block uppercase">Authentic Taste:</span>
                      <span className="text-slate-200 font-sans">
                        {destData.cuisine.map(c => c.name).join(' • ')}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => onSelectDestination && onSelectDestination(destData)}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#c29b62] to-[#b83b3e] text-white font-semibold text-xs tracking-wider uppercase font-sans hover:brightness-110 shadow-glow-gold transition-all flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Full Destination Dossier (ವಿವರಣೆ)</span>
                    </button>
                  </>
                )}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
