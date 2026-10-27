import React from 'react';

/**
 * Yakshagana Kireeta (ಯಕ್ಷಗಾನ ಕಿರೀಟ) - The ornate royal headgear of coastal Karnataka's 
 * centuries-old dance-drama tradition (Tenkutittu & Badagutittu).
 * Features fan plumage, gold filigree, vermilion tilaka, and glittering ear wings (Karnapatra).
 */
export default function YakshaganaCrownSVG({ className = "w-full max-w-md h-auto" }) {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Radiant Aura */}
      <div className="absolute inset-x-6 top-10 h-44 bg-gradient-to-tr from-[#dc2626]/20 via-[#f59e0b]/25 to-transparent blur-3xl rounded-full pointer-events-none animate-pulse-slow" />

      <svg
        viewBox="0 0 460 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_16px_40px_rgba(220,38,38,0.3)]"
      >
        <defs>
          <linearGradient id="yakshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="30%" stopColor="#fde047" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <linearGradient id="yakshaRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>

          <linearGradient id="peacockTeal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>

          <filter id="crownShine">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ================= MASSIVE RADIATING PEACOCK FAN AUREOLE (ಬೆನ್ನಿನ ಪಾಗಡಿ) ================= */}
        <g id="aureole-fan" opacity="0.95">
          {/* Fan Background Rim */}
          <path
            d="M 60 260 C 60 120 130 50 230 50 C 330 50 400 120 400 260 Z"
            fill="url(#yakshaRed)"
            stroke="url(#yakshaGold)"
            strokeWidth="4"
          />

          {/* Radiating Fan Ribs (ಯಕ್ಷಗಾನ ಕಿರೀಟದ ಪಕಳೆಗಳು) */}
          {[
            { angle: -65, x: 230, y: 220 },
            { angle: -50, x: 230, y: 220 },
            { angle: -35, x: 230, y: 220 },
            { angle: -20, x: 230, y: 220 },
            { angle: 0, x: 230, y: 220 },
            { angle: 20, x: 230, y: 220 },
            { angle: 35, x: 230, y: 220 },
            { angle: 50, x: 230, y: 220 },
            { angle: 65, x: 230, y: 220 },
          ].map((rib, idx) => (
            <g key={idx} transform={`rotate(${rib.angle} ${rib.x} ${rib.y})`}>
              {/* Golden Lance Beam */}
              <path
                d="M 226 62 L 230 40 L 234 62 L 230 180 Z"
                fill="url(#yakshaGold)"
                stroke="#78350f"
                strokeWidth="1"
              />
              {/* Peacock Eye Feather Medallion */}
              <circle cx="230" cy="72" r="10" fill="#047857" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="230" cy="72" r="5" fill="#0284c7" />
              <circle cx="230" cy="72" r="2" fill="#fef08a" />
            </g>
          ))}

          {/* Outer Scallop Pearls */}
          {[80, 110, 145, 185, 230, 275, 315, 350, 380].map((cx, i) => (
            <circle key={i} cx={cx} cy={80 + Math.abs(cx - 230) * 0.45} r="6" fill="#fff" stroke="#d97706" strokeWidth="1.5" />
          ))}
        </g>

        {/* ================= TIERED GOLDEN KIREETA CONE (ಕಿರೀಟದ ಗೋಪುರ) ================= */}
        <g id="crown-core" filter="url(#crownShine)">
          {/* Top Pinnacle Jewel (ಕಲಶ) */}
          <path d="M 225 45 L 235 45 L 230 20 Z" fill="#fef08a" stroke="#b45309" strokeWidth="1.5" />
          <circle cx="230" cy="18" r="6" fill="#dc2626" stroke="#ffd700" strokeWidth="1.5" />
          <circle cx="230" cy="18" r="12" fill="#ffd700" opacity="0.3" className="animate-ping" style={{ animationDuration: '2.5s' }} />

          {/* Tier 1 - Topmost cone tier */}
          <path
            d="M 205 95 L 255 95 L 245 45 L 215 45 Z"
            fill="url(#yakshaGold)"
            stroke="#78350f"
            strokeWidth="2"
          />
          <circle cx="230" cy="70" r="6" fill="#dc2626" stroke="#fef08a" strokeWidth="1" />

          {/* Tier 2 - Middle cone tier */}
          <path
            d="M 185 155 L 275 155 L 260 95 L 200 95 Z"
            fill="url(#yakshaGold)"
            stroke="#78350f"
            strokeWidth="2"
          />
          {/* Mirror Glass Diamond Studs */}
          <polygon points="230,105 240,125 230,145 220,125" fill="#f87171" stroke="#fef08a" strokeWidth="1.5" />
          <circle cx="205" cy="125" r="5" fill="#38bdf8" stroke="#fff" strokeWidth="1" />
          <circle cx="255" cy="125" r="5" fill="#38bdf8" stroke="#fff" strokeWidth="1" />

          {/* Tier 3 - Broad lower cone tier */}
          <path
            d="M 165 220 L 295 220 L 280 155 L 180 155 Z"
            fill="url(#yakshaGold)"
            stroke="#78350f"
            strokeWidth="2"
          />
          {/* Ornate Red Floral Frieze */}
          <path d="M 180 185 Q 230 170 280 185 L 280 195 Q 230 180 180 195 Z" fill="url(#yakshaRed)" />
          {[195, 212, 230, 248, 265].map((x, i) => (
            <circle key={i} cx={x} cy="188" r="3.5" fill="#fffbeb" />
          ))}
        </g>

        {/* ================= WIDE EAR ORNAMENTS - KARNAPATRA (ಕರ್ಣಪತ್ರ) ================= */}
        {/* Left Winged Ear Plaque */}
        <g id="left-karnapatra">
          <path
            d="M 165 220 C 110 200 70 230 65 285 C 85 295 125 290 165 260 Z"
            fill="url(#yakshaGold)"
            stroke="#78350f"
            strokeWidth="2"
          />
          <circle cx="105" cy="255" r="14" fill="url(#yakshaRed)" stroke="#fef08a" strokeWidth="2" />
          <circle cx="105" cy="255" r="6" fill="#38bdf8" />
          {/* Dangling Pearl Strings */}
          <line x1="85" y1="285" x2="85" y2="305" stroke="#fef08a" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="105" y1="290" x2="105" y2="315" stroke="#fef08a" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="125" y1="285" x2="125" y2="305" stroke="#fef08a" strokeWidth="2" strokeDasharray="3 3" />
        </g>

        {/* Right Winged Ear Plaque */}
        <g id="right-karnapatra">
          <path
            d="M 295 220 C 350 200 390 230 395 285 C 375 295 335 290 295 260 Z"
            fill="url(#yakshaGold)"
            stroke="#78350f"
            strokeWidth="2"
          />
          <circle cx="355" cy="255" r="14" fill="url(#yakshaRed)" stroke="#fef08a" strokeWidth="2" />
          <circle cx="355" cy="255" r="6" fill="#38bdf8" />
          {/* Dangling Pearl Strings */}
          <line x1="335" y1="285" x2="335" y2="305" stroke="#fef08a" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="355" y1="290" x2="355" y2="315" stroke="#fef08a" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="375" y1="285" x2="375" y2="305" stroke="#fef08a" strokeWidth="2" strokeDasharray="3 3" />
        </g>

        {/* ================= FOREHEAD BAND & MUKHA VARNA (ಮುಖವರ್ಣಿಕೆ & ತಿಲಕ) ================= */}
        <g id="forehead-base">
          {/* Thick Arching Golden Forehead Band (ಹಣೆಪಟ್ಟಿ) */}
          <path
            d="M 150 235 Q 230 215 310 235 L 305 265 Q 230 250 155 265 Z"
            fill="url(#yakshaGold)"
            stroke="#78350f"
            strokeWidth="2"
          />
          {/* Row of Precious Rubies & Emeralds */}
          {[170, 190, 210, 230, 250, 270, 290].map((x, i) => (
            <circle
              key={i}
              cx={x}
              cy={248}
              r="4.5"
              fill={i % 2 === 0 ? "#dc2626" : "#059669"}
              stroke="#fff"
              strokeWidth="1"
            />
          ))}

          {/* Distinctive Yakshagana Tilaka Motif (ನಾಮ / ತಿಲಕ) */}
          {/* Outer White Curvature (ಚುಕ್ಕೆ / ಬಿಳಿ ರೇಖೆಗಳು) */}
          <path
            d="M 205 270 Q 230 255 255 270 Q 248 315 230 335 Q 212 315 205 270 Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
          {/* Inner Fiery Vermilion Tilaka */}
          <path
            d="M 215 274 Q 230 262 245 274 Q 240 310 230 325 Q 220 310 215 274 Z"
            fill="url(#yakshaRed)"
          />
          {/* Central Black Kasturi Tilaka Bindu */}
          <ellipse cx="230" cy="285" rx="3.5" ry="5.5" fill="#18181b" />
          {/* White Sacred Chutti dots around eye line */}
          {[200, 206, 214, 246, 254, 260].map((x, i) => (
            <circle key={i} cx={x} cy={315} r="2.5" fill="#ffffff" />
          ))}
        </g>
      </svg>

      {/* Cultural Caption Pill */}
      <div className="flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-[#181d26]/80 border border-[#dc2626]/40 text-[11px] font-mono text-[#fca5a5]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
        <span>ಕರಾವಳಿ ಯಕ್ಷಗಾನ ಕಿರೀಟ • The Majestic Yakshagana Crown of Karavali</span>
      </div>
    </div>
  );
}
