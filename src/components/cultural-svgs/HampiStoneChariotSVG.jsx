import React, { useState } from 'react';

/**
 * Hampi Stone Chariot (ಕಲ್ಲಿನ ರಥ) - The architectural wonder of the Vijayanagara Empire 
 * at the Vittala Temple Complex in Hampi.
 * Features rotating carved wheels, stone elephant guardians, Dravidian sanctum spire, and floating dust motes.
 */
export default function HampiStoneChariotSVG({ className = "w-full max-w-lg h-auto", isInteractive = true }) {
  const [wheelRotation, setWheelRotation] = useState(true);

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Background Horizon Temple Glow */}
      <div className="absolute inset-x-8 bottom-12 h-36 bg-gradient-to-t from-[#c29b62]/20 via-[#b83b3e]/10 to-transparent blur-2xl rounded-full pointer-events-none" />

      <svg
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_32px_rgba(0,0,0,0.6)] cursor-pointer"
        onClick={() => isInteractive && setWheelRotation(!wheelRotation)}
      >
        <defs>
          <linearGradient id="graniteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e5c8" />
            <stop offset="40%" stopColor="#c7a77b" />
            <stop offset="75%" stopColor="#8d6e4b" />
            <stop offset="100%" stopColor="#4a3723" />
          </linearGradient>

          <linearGradient id="warmSun" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffedd5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c29b62" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="stoneBase" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8d6e4b" />
            <stop offset="100%" stopColor="#2c2217" />
          </linearGradient>

          <filter id="graniteBevel">
            <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#1e160e" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Ambient Evening Sun Rays over Kishkindha boulders */}
        <ellipse cx="250" cy="180" rx="190" ry="140" fill="url(#warmSun)" />

        {/* Floating Boulder Silhouettes in the distance */}
        <path d="M 20 370 Q 70 340 120 365 Q 160 380 200 375" stroke="#8d6e4b" strokeWidth="1" opacity="0.4" fill="none" />
        <path d="M 330 375 Q 380 345 430 365 Q 470 380 490 370" stroke="#8d6e4b" strokeWidth="1" opacity="0.4" fill="none" />

        {/* ================= CHARIOT BASE PLINTH (ಅಧಿಷ್ಠಾನ) ================= */}
        <g id="plinth" filter="url(#graniteBevel)">
          {/* Bottom stepped plinth */}
          <rect x="70" y="340" width="360" height="20" rx="3" fill="url(#stoneBase)" stroke="#c7a77b" strokeWidth="1.5" />
          {/* Carved frieze bands (battle scenes and floral creeper carvings) */}
          <rect x="90" y="325" width="320" height="15" fill="url(#graniteGrad)" stroke="#4a3723" strokeWidth="1" />
          {[105, 135, 165, 195, 225, 255, 285, 315, 345, 375].map((x, i) => (
            <rect key={i} x={x} y="327" width="18" height="11" rx="2" fill="#5a4128" opacity="0.75" />
          ))}
          {/* Main Upper Plinth */}
          <rect x="110" y="305" width="280" height="20" fill="url(#graniteGrad)" stroke="#4a3723" strokeWidth="1.5" />
          {/* Moulding Dentils */}
          {[120, 145, 170, 195, 220, 245, 270, 295, 320, 345, 370].map((x, i) => (
            <circle key={i} cx={x} cy="315" r="3" fill="#ffe7ba" />
          ))}
        </g>

        {/* ================= STONE ELEPHANT GUARDIANS AT FRONT ================= */}
        <g id="stone-elephants">
          {/* Left Elephant Guardian */}
          <path
            d="M 68 340 C 60 320 62 295 82 285 C 95 278 110 285 115 305 L 115 340 Z"
            fill="url(#graniteGrad)"
            stroke="#3d2a19"
            strokeWidth="1.5"
          />
          {/* Trunk curled upward */}
          <path
            d="M 66 312 C 55 315 48 300 56 290 C 64 282 72 295 72 305"
            stroke="url(#graniteGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          {/* Tusk */}
          <path d="M 66 310 L 52 305" stroke="#fff8dc" strokeWidth="2.5" strokeLinecap="round" />
          {/* Elephant Eye & Ear */}
          <circle cx="82" cy="292" r="2.5" fill="#1e160e" />
          <path d="M 88 288 C 96 288 98 302 90 308" stroke="#4a3723" strokeWidth="1.5" fill="none" />
        </g>

        {/* ================= SANCTUM MANDAPA (ಗರ್ಭಗೃಹ) ================= */}
        <g id="mandapa">
          {/* Four Musical Granite Pillars */}
          {/* Left Outer Pillar */}
          <rect x="135" y="195" width="16" height="110" fill="url(#graniteGrad)" stroke="#3d2a19" strokeWidth="1.5" />
          <rect x="131" y="192" width="24" height="6" fill="#ffe7ba" />
          <rect x="131" y="299" width="24" height="6" fill="#ffe7ba" />

          {/* Left Inner Pillar */}
          <rect x="195" y="195" width="14" height="110" fill="url(#graniteGrad)" stroke="#3d2a19" strokeWidth="1" />
          <rect x="192" y="192" width="20" height="6" fill="#ffe7ba" />
          <rect x="192" y="299" width="20" height="6" fill="#ffe7ba" />

          {/* Right Inner Pillar */}
          <rect x="290" y="195" width="14" height="110" fill="url(#graniteGrad)" stroke="#3d2a19" strokeWidth="1" />
          <rect x="287" y="192" width="20" height="6" fill="#ffe7ba" />
          <rect x="287" y="299" width="20" height="6" fill="#ffe7ba" />

          {/* Right Outer Pillar */}
          <rect x="350" y="195" width="16" height="110" fill="url(#graniteGrad)" stroke="#3d2a19" strokeWidth="1.5" />
          <rect x="346" y="192" width="24" height="6" fill="#ffe7ba" />
          <rect x="346" y="299" width="24" height="6" fill="#ffe7ba" />

          {/* Inner Garuda Shrine Sanctuary */}
          <rect x="215" y="215" width="70" height="90" rx="35 35 0 0" fill="#1b140d" stroke="#c7a77b" strokeWidth="1.5" />
          {/* Sanctum Glow / Akhanda Deepa Flame */}
          <ellipse cx="250" cy="265" rx="12" ry="16" fill="#f59e0b" opacity="0.8" className="animate-pulse" />
          <ellipse cx="250" cy="265" rx="6" ry="9" fill="#fef08a" />
        </g>

        {/* ================= DRAVIDIAN GOPURAM TOWER (ಶಿಖರ) ================= */}
        <g id="gopuram" filter="url(#graniteBevel)">
          {/* Overhanging Chhajja / Eaves with water spouts */}
          <path d="M 115 192 L 385 192 L 375 178 L 125 178 Z" fill="url(#graniteGrad)" stroke="#3d2a19" strokeWidth="1.5" />
          
          {/* First Tier of Tower */}
          <rect x="145" y="148" width="210" height="30" fill="url(#stoneBase)" stroke="#c7a77b" strokeWidth="1.5" />
          {/* Niche Sculptures (Kudu Arches) */}
          {[165, 205, 250, 295, 335].map((cx, i) => (
            <path key={i} d={`M ${cx - 10} 175 C ${cx - 10} 155 ${cx + 10} 155 ${cx + 10} 175 Z`} fill="#1e160e" stroke="#ffe7ba" strokeWidth="1" />
          ))}

          {/* Second Stepped Tier */}
          <rect x="175" y="118" width="150" height="30" fill="url(#graniteGrad)" stroke="#3d2a19" strokeWidth="1.5" />
          {[195, 230, 270, 305].map((cx, i) => (
            <path key={i} d={`M ${cx - 8} 145 C ${cx - 8} 128 ${cx + 8} 128 ${cx + 8} 145 Z`} fill="#1e160e" stroke="#ffe7ba" strokeWidth="1" />
          ))}

          {/* Third Stepped Tier */}
          <rect x="205" y="92" width="90" height="26" fill="url(#stoneBase)" stroke="#c7a77b" strokeWidth="1.5" />

          {/* Barrel Vault Canopy / Shikhara Roof */}
          <path
            d="M 210 92 C 210 55 290 55 290 92 Z"
            fill="url(#graniteGrad)"
            stroke="#3d2a19"
            strokeWidth="2"
          />

          {/* Golden Finial (ಕಲಶ - Kalasha) */}
          <path d="M 245 55 L 255 55 L 250 35 Z" fill="#ffd700" stroke="#b45309" strokeWidth="1.5" />
          <circle cx="250" cy="32" r="5" fill="#fef08a" stroke="#ffd700" strokeWidth="1" />
          {/* Radiant Kalasha Beacon */}
          <circle cx="250" cy="32" r="14" fill="#ffd700" opacity="0.3" className="animate-ping" style={{ animationDuration: '3s' }} />
        </g>

        {/* ================= FOUR MONOLITHIC CARVED ROTATING WHEELS (ಚಕ್ರಗಳು) ================= */}
        {/* Left Wheel */}
        <g
          id="left-wheel"
          className={wheelRotation ? "animate-spin" : ""}
          style={{
            animationDuration: '18s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            transformOrigin: '155px 345px'
          }}
        >
          {/* Outer Rim */}
          <circle cx="155" cy="345" r="44" fill="#3d2a19" stroke="url(#graniteGrad)" strokeWidth="8" />
          <circle cx="155" cy="345" r="38" stroke="#1b140d" strokeWidth="2" />
          <circle cx="155" cy="345" r="32" fill="#5a4128" stroke="#ffe7ba" strokeWidth="1" />
          {/* 16 Floral Lotus Spokes */}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg) => (
            <line
              key={deg}
              x1="155"
              y1="345"
              x2="155"
              y2="313"
              stroke="#ffe7ba"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${deg} 155 345)`}
            />
          ))}
          {/* Hub Axle & Floral Rosette */}
          <circle cx="155" cy="345" r="14" fill="url(#graniteGrad)" stroke="#1e160e" strokeWidth="2" />
          <circle cx="155" cy="345" r="5" fill="#ffd700" />
        </g>

        {/* Right Wheel */}
        <g
          id="right-wheel"
          className={wheelRotation ? "animate-spin" : ""}
          style={{
            animationDuration: '18s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            transformOrigin: '345px 345px'
          }}
        >
          {/* Outer Rim */}
          <circle cx="345" cy="345" r="44" fill="#3d2a19" stroke="url(#graniteGrad)" strokeWidth="8" />
          <circle cx="345" cy="345" r="38" stroke="#1b140d" strokeWidth="2" />
          <circle cx="345" cy="345" r="32" fill="#5a4128" stroke="#ffe7ba" strokeWidth="1" />
          {/* 16 Floral Lotus Spokes */}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg) => (
            <line
              key={deg}
              x1="345"
              y1="345"
              x2="345"
              y2="313"
              stroke="#ffe7ba"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${deg} 345 345)`}
            />
          ))}
          {/* Hub Axle & Floral Rosette */}
          <circle cx="345" cy="345" r="14" fill="url(#graniteGrad)" stroke="#1e160e" strokeWidth="2" />
          <circle cx="345" cy="345" r="5" fill="#ffd700" />
        </g>

        {/* Granite Ground Foundation */}
        <line x1="40" y1="389" x2="460" y2="389" stroke="#8d6e4b" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      </svg>

      {/* Cultural Caption Pill */}
      <div className="flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-[#181d26]/80 border border-[#c29b62]/30 text-[11px] font-mono text-[#e5c48b]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
        <span>ವಿಜಯನಗರ ಕಲ್ಲಿನ ರಥ • Hampi Stone Chariot (Click wheels to toggle rotation)</span>
      </div>
    </div>
  );
}
