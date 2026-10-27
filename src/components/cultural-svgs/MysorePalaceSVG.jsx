import React, { useState } from 'react';

/**
 * Mysore Palace (ಮೈಸೂರು ಅಂಬಾ ವಿಲಾಸ ಅರಮನೆ) - The royal cultural seat of the Wodeyars.
 * Features Indo-Saracenic domed chhatris, arches, royal towers, and interactive 100,000-bulb illumination mode!
 */
export default function MysorePalaceSVG({ className = "w-full max-w-lg h-auto" }) {
  const [isIlluminated, setIsIlluminated] = useState(true);

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Golden Palace Glow */}
      <div className={`absolute inset-x-4 bottom-10 h-36 bg-gradient-to-t ${isIlluminated ? 'from-[#f59e0b]/30 via-[#c29b62]/20' : 'from-slate-800/20'} to-transparent blur-3xl rounded-full transition-all duration-700 pointer-events-none`} />

      <svg
        viewBox="0 0 540 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_16px_40px_rgba(0,0,0,0.7)] cursor-pointer"
        onClick={() => setIsIlluminated(!isIlluminated)}
      >
        <defs>
          <linearGradient id="palaceSandstone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#996515" />
            <stop offset="100%" stopColor="#4a3723" />
          </linearGradient>

          <linearGradient id="palaceDomePink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="40%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>

          <linearGradient id="palaceGoldDome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <filter id="bulbGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Moon & Royal Sky */}
        <ellipse cx="270" cy="180" rx="230" ry="140" fill={isIlluminated ? "rgba(245,158,11,0.06)" : "rgba(30,41,59,0.3)"} />

        {/* ================= LOWER PALACE GROUND & FORECOURT ================= */}
        <rect x="20" y="320" width="500" height="24" rx="2" fill="#1c1917" stroke="#78350f" strokeWidth="1.5" />
        <line x1="10" y1="344" x2="530" y2="344" stroke="#c29b62" strokeWidth="2" opacity="0.6" />

        {/* ================= LOWER ARCADE (THE GRAND ARCHES) ================= */}
        {/* Main Base Structure */}
        <rect x="50" y="240" width="440" height="80" fill="url(#palaceSandstone)" stroke="#292524" strokeWidth="2" />
        
        {/* Central Entrance Gateway Arch (ದೊಡ್ಡ ದ್ವಾರ) */}
        <path
          d="M 235 320 L 235 260 C 235 240 305 240 305 260 L 305 320 Z"
          fill="#0c0a09"
          stroke="#eab308"
          strokeWidth="2"
        />
        {/* Cusped Mughal Arch Inner Curve */}
        <path
          d="M 245 320 L 245 270 Q 270 250 295 270 L 295 320 Z"
          fill="#1c1917"
          stroke="#fef08a"
          strokeWidth="1.5"
        />

        {/* Flanking Ground Floor Arches */}
        {[80, 120, 160, 200, 340, 380, 420, 460].map((x, i) => (
          <g key={i}>
            <path
              d={`M ${x - 14} 320 L ${x - 14} 275 C ${x - 14} 255 ${x + 14} 255 ${x + 14} 275 L ${x + 14} 320 Z`}
              fill="#0c0a09"
              stroke="#ca8a04"
              strokeWidth="1"
            />
          </g>
        ))}

        {/* ================= SECOND FLOOR ROYAL DURBAR HALL BALCONY ================= */}
        <rect x="65" y="180" width="410" height="60" fill="url(#palaceSandstone)" stroke="#292524" strokeWidth="2" />
        
        {/* Balcony Railing (ಜಾಲಂಧ್ರ ಕೆತ್ತನೆ) */}
        <rect x="60" y="234" width="420" height="8" fill="#eab308" />
        {[75, 105, 135, 165, 195, 225, 255, 285, 315, 345, 375, 405, 435, 465].map((x, i) => (
          <circle key={i} cx={x} cy="238" r="2.5" fill="#451a03" />
        ))}

        {/* Upper Balcony Ornate Cusped Arches */}
        {[95, 140, 185, 230, 270, 310, 355, 400, 445].map((x, i) => (
          <path
            key={i}
            d={`M ${x - 16} 234 L ${x - 16} 200 Q ${x} 185 ${x + 16} 200 L ${x + 16} 234 Z`}
            fill="#1c1917"
            stroke="#fde047"
            strokeWidth="1.2"
          />
        ))}

        {/* ================= CENTRAL CLOCK TOWER & GRAND FIVE-STORY DOME ================= */}
        {/* Central Tower Body */}
        <rect x="220" y="115" width="100" height="65" fill="url(#palaceSandstone)" stroke="#292524" strokeWidth="2" />
        
        {/* Grand Palace Clock Face */}
        <circle cx="270" cy="148" r="16" fill="#fef08a" stroke="#78350f" strokeWidth="2" />
        <circle cx="270" cy="148" r="13" fill="#ffffff" />
        <line x1="270" y1="148" x2="270" y2="139" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
        <line x1="270" y1="148" x2="276" y2="148" stroke="#1c1917" strokeWidth="1.5" strokeLinecap="round" />

        {/* Tower Eaves / Chhajja */}
        <path d="M 210 115 L 330 115 L 320 102 L 220 102 Z" fill="#d97706" stroke="#451a03" strokeWidth="1.5" />

        {/* Grand Central Gold Bulbous Dome (ಪ್ರಧಾನ ಗುಮ್ಮಟ) */}
        <path
          d="M 230 102 C 230 50 250 35 270 25 C 290 35 310 50 310 102 Z"
          fill="url(#palaceGoldDome)"
          stroke="#78350f"
          strokeWidth="2"
        />
        {/* Gold Finial (ಕಲಶ) atop Dome */}
        <path d="M 268 25 L 272 25 L 270 8 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
        <circle cx="270" cy="6" r="4" fill="#ffd700" />
        {/* Royal Wodeyar Crimson Flag flying atop tower */}
        <path d="M 270 8 L 270 0 L 292 4 L 270 8" fill="#dc2626" />

        {/* ================= CORNER CHHATRIS (ನಾಲ್ಕು ಮೂಲೆಗಳ ಮಂಟಪಗಳು) ================= */}
        {/* Left Octagonal Chhatri */}
        <g id="left-chhatri">
          <rect x="42" y="140" width="36" height="40" fill="url(#palaceSandstone)" stroke="#292524" strokeWidth="1.5" />
          <path d="M 38 140 C 38 110 50 95 60 90 C 70 95 82 110 82 140 Z" fill="url(#palaceDomePink)" stroke="#7f1d1d" strokeWidth="1.5" />
          <path d="M 58 90 L 62 90 L 60 76 Z" fill="#fef08a" stroke="#b45309" strokeWidth="1" />
        </g>

        {/* Left Intermediate Chhatri */}
        <g id="left-mid-chhatri">
          <rect x="150" y="150" width="28" height="30" fill="url(#palaceSandstone)" stroke="#292524" strokeWidth="1" />
          <path d="M 148 150 C 148 128 158 116 164 112 C 170 116 180 128 180 150 Z" fill="url(#palaceDomePink)" stroke="#7f1d1d" strokeWidth="1.2" />
          <path d="M 163 112 L 165 112 L 164 100 Z" fill="#fef08a" stroke="#b45309" strokeWidth="1" />
        </g>

        {/* Right Intermediate Chhatri */}
        <g id="right-mid-chhatri">
          <rect x="362" y="150" width="28" height="30" fill="url(#palaceSandstone)" stroke="#292524" strokeWidth="1" />
          <path d="M 360 150 C 360 128 370 116 376 112 C 382 116 392 128 392 150 Z" fill="url(#palaceDomePink)" stroke="#7f1d1d" strokeWidth="1.2" />
          <path d="M 375 112 L 377 112 L 376 100 Z" fill="#fef08a" stroke="#b45309" strokeWidth="1" />
        </g>

        {/* Right Octagonal Chhatri */}
        <g id="right-chhatri">
          <rect x="462" y="140" width="36" height="40" fill="url(#palaceSandstone)" stroke="#292524" strokeWidth="1.5" />
          <path d="M 458 140 C 458 110 470 95 480 90 C 490 95 502 110 502 140 Z" fill="url(#palaceDomePink)" stroke="#7f1d1d" strokeWidth="1.5" />
          <path d="M 478 90 L 482 90 L 480 76 Z" fill="#fef08a" stroke="#b45309" strokeWidth="1" />
        </g>

        {/* ================= 100,000 BULB ILLUMINATION OVERLAY (ದೀಪಾಲಂಕಾರ) ================= */}
        {isIlluminated && (
          <g id="incandescent-bulbs" filter="url(#bulbGlow)">
            {/* Outline Bulbs on Ground Floor */}
            {[55, 75, 95, 115, 135, 155, 175, 195, 215, 235, 255, 275, 295, 315, 335, 355, 375, 395, 415, 435, 455, 475, 485].map((x, i) => (
              <circle key={i} cx={x} cy="320" r="2.2" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1" />
            ))}

            {/* Bulbs on Mid Balcony Cornice */}
            {[65, 85, 105, 125, 145, 165, 185, 205, 225, 245, 265, 285, 305, 325, 345, 365, 385, 405, 425, 445, 465, 475].map((x, i) => (
              <circle key={i} cx={x} cy="240" r="2.2" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1" />
            ))}

            {/* Bulbs on Roofline */}
            {[70, 95, 120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370, 395, 420, 445, 470].map((x, i) => (
              <circle key={i} cx={x} cy="180" r="2.2" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1" />
            ))}

            {/* Bulbs Tracing Grand Central Dome Curvature */}
            {[
              { x: 232, y: 95 }, { x: 236, y: 78 }, { x: 244, y: 62 }, { x: 255, y: 48 }, { x: 270, y: 28 },
              { x: 285, y: 48 }, { x: 296, y: 62 }, { x: 304, y: 78 }, { x: 308, y: 95 }
            ].map((pt, i) => (
              <circle key={i} cx={pt.x} cy={pt.y} r="2.8" fill="#ffffff" stroke="#fde047" strokeWidth="1.5" className="animate-pulse" />
            ))}

            {/* Bulbs Tracing Left & Right Domes */}
            {[
              { x: 42, y: 130 }, { x: 50, y: 108 }, { x: 60, y: 94 }, { x: 70, y: 108 }, { x: 78, y: 130 },
              { x: 462, y: 130 }, { x: 470, y: 108 }, { x: 480, y: 94 }, { x: 490, y: 108 }, { x: 498, y: 130 }
            ].map((pt, i) => (
              <circle key={i} cx={pt.x} cy={pt.y} r="2.2" fill="#ffffff" stroke="#fde047" strokeWidth="1" />
            ))}
          </g>
        )}
      </svg>

      {/* Cultural Caption Pill */}
      <div className="flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-[#181d26]/80 border border-[#f59e0b]/30 text-[11px] font-mono text-[#fde047]">
        <span className={`w-1.5 h-1.5 rounded-full ${isIlluminated ? 'bg-[#f59e0b] animate-ping' : 'bg-slate-500'}`} />
        <span>ಮೈಸೂರು ಅರಮನೆ • Mysore Palace ({isIlluminated ? "Sunday 100,000 Bulb Illumination Active" : "Click to Light Up Palace"})</span>
      </div>
    </div>
  );
}
