import React from 'react';

/**
 * Jog Falls & Western Ghats (ಜೋಗ ಜಲಪಾತ & ಸಹ್ಯಾದ್ರಿ) - India's untamed segmented waterfall 
 * in the heart of Malenadu.
 * Features the 4 legendary cascades: Raja (ರಾಜ), Roarer (ರೋರರ್), Rocket (ರಾಕೆಟ್), Rani (ರಾಣಿ),
 * animated falling water gradients, rising misty spray, and lush coffee-clad slopes.
 */
export default function JogFallsNatureSVG({ className = "w-full max-w-lg h-auto" }) {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Emerald Rainforest Mist Glow */}
      <div className="absolute inset-x-8 bottom-8 h-40 bg-gradient-to-t from-[#10b981]/25 via-[#0284c7]/20 to-transparent blur-3xl rounded-full pointer-events-none" />

      <svg
        viewBox="0 0 520 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_16px_40px_rgba(2,132,199,0.3)]"
      >
        <defs>
          <linearGradient id="gorgeBasalt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="lushMoss" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="60%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>

          <linearGradient id="waterFlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="30%" stopColor="#38bdf8" />
            <stop offset="70%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          <filter id="mistBlur">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Western Ghats Sky and Distant Sahyadri Peaks */}
        <path d="M 0 140 Q 120 70 260 110 Q 380 60 520 130 L 520 400 L 0 400 Z" fill="#0f172a" opacity="0.6" />
        <path d="M 40 120 Q 150 80 280 120 Q 420 70 520 115" stroke="#334155" strokeWidth="2" fill="none" opacity="0.5" />

        {/* Sharavathi River Canyon Gorge Cliffs (ಕಣಿವೆಯ ಬಂಡೆಗಳು) */}
        {/* Left Dark Basalt Cliff */}
        <path
          d="M 0 100 L 160 100 C 150 160 130 240 100 340 L 0 360 Z"
          fill="url(#gorgeBasalt)"
          stroke="#475569"
          strokeWidth="1.5"
        />
        {/* Moss Overgrowth on Left Cliff */}
        <path d="M 0 100 Q 60 125 155 100 L 140 135 Q 70 145 0 125 Z" fill="url(#lushMoss)" />
        <path d="M 20 150 Q 80 170 125 160 L 115 190 Q 50 195 20 170 Z" fill="url(#lushMoss)" opacity="0.8" />

        {/* Central Cliff Divider between Raja & Roarer */}
        <path
          d="M 230 105 L 290 105 C 280 180 270 260 260 340 L 220 340 C 235 250 240 170 230 105 Z"
          fill="url(#gorgeBasalt)"
          stroke="#475569"
          strokeWidth="1.5"
        />
        <path d="M 232 105 Q 260 118 288 105 L 282 130 Q 260 135 235 125 Z" fill="url(#lushMoss)" />

        {/* Right Cliff Face (Supporting Rocket & Rani) */}
        <path
          d="M 370 105 L 520 105 L 520 360 L 440 340 C 420 250 400 170 370 105 Z"
          fill="url(#gorgeBasalt)"
          stroke="#475569"
          strokeWidth="1.5"
        />
        <path d="M 375 105 Q 440 125 520 105 L 520 130 Q 450 145 385 125 Z" fill="url(#lushMoss)" />

        {/* ================= THE FOUR LEGENDARY WATERFALL CASCADES ================= */}

        {/* 1. RAJA (ರಾಜ) - The Grand Unbroken Column of Water (Left Plunge, 830 ft) */}
        <g id="cascade-raja">
          {/* Main Torrents with animated dasharray */}
          <path
            d="M 165 102 C 175 170 180 250 185 340"
            stroke="url(#waterFlow)"
            strokeWidth="32"
            strokeLinecap="round"
            className="animate-pulse"
          />
          <path
            d="M 165 102 C 175 170 180 250 185 340"
            stroke="#ffffff"
            strokeWidth="12"
            strokeDasharray="14 12"
            strokeLinecap="round"
          />
          <path
            d="M 152 104 C 160 180 168 260 172 340"
            stroke="#e0f2fe"
            strokeWidth="6"
            strokeDasharray="8 8"
          />
        </g>

        {/* 2. ROARER (ರೋರರ್) - The Gushing Torrent that strikes rock at 45 degrees */}
        <g id="cascade-roarer">
          <path
            d="M 215 104 C 210 160 215 210 235 250 L 210 340"
            stroke="url(#waterFlow)"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            d="M 215 104 C 210 160 215 210 235 250 L 210 340"
            stroke="#ffffff"
            strokeWidth="8"
            strokeDasharray="10 10"
          />
        </g>

        {/* 3. ROCKET (ರಾಕೆಟ್) - High-speed jets shooting down from narrow opening */}
        <g id="cascade-rocket">
          <path
            d="M 310 105 C 320 170 330 250 340 340"
            stroke="url(#waterFlow)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M 310 105 C 320 170 330 250 340 340"
            stroke="#ffffff"
            strokeWidth="6"
            strokeDasharray="6 6"
          />
        </g>

        {/* 4. RANI (ರಾಣಿ - The Lady) - Gentle dancing white sheet of foam */}
        <g id="cascade-rani">
          <path
            d="M 345 106 C 365 170 380 250 405 340"
            stroke="url(#waterFlow)"
            strokeWidth="20"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 345 106 C 365 170 380 250 405 340"
            stroke="#ffffff"
            strokeWidth="8"
            strokeDasharray="12 8"
            opacity="0.9"
          />
        </g>

        {/* ================= RIVER POOL & THUNDEROUS MIST (ಧೂಳು ಮಂಜು) ================= */}
        {/* River Pool Base */}
        <ellipse cx="260" cy="355" rx="230" ry="25" fill="#0284c7" opacity="0.8" />
        <ellipse cx="260" cy="355" rx="200" ry="16" fill="#38bdf8" opacity="0.6" />

        {/* Swirling Rising Vapor Mist Cloud */}
        <ellipse cx="185" cy="335" rx="75" ry="32" fill="#ffffff" opacity="0.45" filter="url(#mistBlur)" className="animate-pulse" />
        <ellipse cx="340" cy="335" rx="85" ry="30" fill="#ffffff" opacity="0.45" filter="url(#mistBlur)" className="animate-pulse" />
        <ellipse cx="260" cy="340" rx="120" ry="28" fill="#e0f2fe" opacity="0.5" filter="url(#mistBlur)" />

        {/* Shola Forest Fern Foliage along foreground border */}
        {[30, 80, 130, 390, 440, 480].map((x, i) => (
          <path
            key={i}
            d={`M ${x} 385 Q ${x + 10} 350 ${x + 20} 340 Q ${x + 15} 360 ${x + 30} 385 Z`}
            fill="#059669"
            stroke="#047857"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Cultural Caption Pill */}
      <div className="flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-[#181d26]/80 border border-[#0284c7]/40 text-[11px] font-mono text-[#7dd3fc]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
        <span>ಜೋಗ ಜಲಪಾತ • Jog Falls (The 4 Sacred Cascades: Raja, Roarer, Rocket, Rani)</span>
      </div>
    </div>
  );
}
