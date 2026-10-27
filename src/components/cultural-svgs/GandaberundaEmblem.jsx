import React from 'react';

/**
 * Gandaberunda (ಗಂಡಭೇರುಂಡ) - The ancient two-headed eagle crest of the Vijayanagara Empire 
 * and the official state emblem of Karnataka.
 */
export default function GandaberundaEmblem({ className = "w-48 h-48", glowing = true }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient Radial Golden Glow */}
      {glowing && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#c29b62]/20 via-[#e5c48b]/15 to-transparent blur-2xl animate-pulse-slow pointer-events-none" />
      )}

      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_8px_24px_rgba(194,155,98,0.35)]"
      >
        <defs>
          {/* Gradients for royal gold & crimson */}
          <linearGradient id="goldFeatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3d1" />
            <stop offset="40%" stopColor="#e5c48b" />
            <stop offset="80%" stopColor="#c29b62" />
            <stop offset="100%" stopColor="#7a5523" />
          </linearGradient>

          <linearGradient id="crimsonCenterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff4d4f" />
            <stop offset="50%" stopColor="#b82428" />
            <stop offset="100%" stopColor="#5c0e11" />
          </linearGradient>

          <linearGradient id="royalHalo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c29b62" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#e5c48b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c29b62" stopOpacity="0.1" />
          </linearGradient>

          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circular Aureole with Kannada Inscription Motif */}
        <circle
          cx="200"
          cy="200"
          r="185"
          stroke="url(#royalHalo)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <circle
          cx="200"
          cy="200"
          r="170"
          stroke="url(#goldFeatherGrad)"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Royal Crest Halo Rays */}
        <g opacity="0.35" className="animate-spin" style={{ animationDuration: '60s', transformOrigin: '200px 200px' }}>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="200"
              y1="25"
              x2="200"
              y2="42"
              stroke="#e5c48b"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${deg} 200 200)`}
            />
          ))}
        </g>

        {/* Crown - Central Royal Kireeta */}
        <g id="crown" filter="url(#goldGlow)">
          <path
            d="M 180 82 L 200 48 L 220 82 L 236 68 L 228 102 L 172 102 L 164 68 Z"
            fill="url(#goldFeatherGrad)"
            stroke="#452605"
            strokeWidth="1.5"
          />
          {/* Jewel on Crown */}
          <circle cx="200" cy="74" r="5" fill="url(#crimsonCenterGrad)" stroke="#ffd700" strokeWidth="1" />
          <circle cx="184" cy="86" r="3" fill="#38bdf8" />
          <circle cx="216" cy="86" r="3" fill="#38bdf8" />
        </g>

        {/* Left Head (Beak facing Left) */}
        <g id="left-head">
          {/* Neck Left */}
          <path
            d="M 185 130 C 175 110 155 102 135 110 C 120 116 112 128 120 142 C 128 152 145 158 175 158 Z"
            fill="url(#goldFeatherGrad)"
            stroke="#5c3809"
            strokeWidth="1.5"
          />
          {/* Curved Beak Left */}
          <path
            d="M 125 120 C 105 120 90 128 85 140 C 95 142 110 138 122 135 Z"
            fill="#ffcc00"
            stroke="#7a4b08"
            strokeWidth="1.5"
          />
          {/* Left Eye */}
          <circle cx="132" cy="122" r="3.5" fill="#1e1b18" />
          <circle cx="131" cy="121" r="1.2" fill="#ffffff" />
          {/* Left Crest Feather */}
          <path
            d="M 145 105 C 135 90 122 92 120 98 C 128 100 135 104 140 109 Z"
            fill="url(#crimsonCenterGrad)"
          />
        </g>

        {/* Right Head (Beak facing Right) */}
        <g id="right-head">
          {/* Neck Right */}
          <path
            d="M 215 130 C 225 110 245 102 265 110 C 280 116 288 128 280 142 C 272 152 255 158 225 158 Z"
            fill="url(#goldFeatherGrad)"
            stroke="#5c3809"
            strokeWidth="1.5"
          />
          {/* Curved Beak Right */}
          <path
            d="M 275 120 C 295 120 310 128 315 140 C 305 142 290 138 278 135 Z"
            fill="#ffcc00"
            stroke="#7a4b08"
            strokeWidth="1.5"
          />
          {/* Right Eye */}
          <circle cx="268" cy="122" r="3.5" fill="#1e1b18" />
          <circle cx="269" cy="121" r="1.2" fill="#ffffff" />
          {/* Right Crest Feather */}
          <path
            d="M 255 105 C 265 90 278 92 280 98 C 272 100 265 104 260 109 Z"
            fill="url(#crimsonCenterGrad)"
          />
        </g>

        {/* Left Magnificent Wing */}
        <g id="left-wing">
          {/* Upper Tier */}
          <path
            d="M 155 160 C 110 140 60 145 35 185 C 55 190 85 185 115 195 C 135 202 150 215 155 225 Z"
            fill="url(#goldFeatherGrad)"
            stroke="#5c3809"
            strokeWidth="1.5"
          />
          {/* Primary Feathers */}
          <path
            d="M 140 190 C 95 180 40 195 20 235 C 45 235 75 225 110 230 C 130 233 145 245 150 255 Z"
            fill="url(#goldFeatherGrad)"
            stroke="#5c3809"
            strokeWidth="1.5"
          />
          {/* Secondary Feathers */}
          <path
            d="M 135 230 C 90 225 45 250 30 285 C 55 280 85 265 120 265 C 135 265 145 272 152 280 Z"
            fill="url(#goldFeatherGrad)"
            stroke="#5c3809"
            strokeWidth="1.5"
          />
          {/* Wing Tip Accents */}
          <circle cx="40" cy="190" r="3" fill="#ff4d4f" />
          <circle cx="26" cy="240" r="3" fill="#ff4d4f" />
          <circle cx="36" cy="285" r="3" fill="#ff4d4f" />
        </g>

        {/* Right Magnificent Wing */}
        <g id="right-wing">
          {/* Upper Tier */}
          <path
            d="M 245 160 C 290 140 340 145 365 185 C 345 190 315 185 285 195 C 265 202 250 215 245 225 Z"
            fill="url(#goldFeatherGrad)"
            stroke="#5c3809"
            strokeWidth="1.5"
          />
          {/* Primary Feathers */}
          <path
            d="M 260 190 C 305 180 360 195 380 235 C 355 235 325 225 290 230 C 270 233 255 245 250 255 Z"
            fill="url(#goldFeatherGrad)"
            stroke="#5c3809"
            strokeWidth="1.5"
          />
          {/* Secondary Feathers */}
          <path
            d="M 265 230 C 310 225 355 250 370 285 C 345 280 315 265 280 265 C 265 265 255 272 248 280 Z"
            fill="url(#goldFeatherGrad)"
            stroke="#5c3809"
            strokeWidth="1.5"
          />
          {/* Wing Tip Accents */}
          <circle cx="360" cy="190" r="3" fill="#ff4d4f" />
          <circle cx="374" cy="240" r="3" fill="#ff4d4f" />
          <circle cx="364" cy="285" r="3" fill="#ff4d4f" />
        </g>

        {/* Central Royal Shield & Torso */}
        <g id="torso">
          <ellipse cx="200" cy="210" rx="42" ry="58" fill="#14171f" stroke="url(#goldFeatherGrad)" strokeWidth="3" />
          
          {/* Karnataka Flag Red & Yellow Motif within Heart of the Emblem */}
          <path
            d="M 168 185 Q 200 175 232 185 L 232 210 Q 200 205 168 210 Z"
            fill="url(#crimsonCenterGrad)"
          />
          <path
            d="M 168 210 Q 200 205 232 210 L 226 242 Q 200 255 174 242 Z"
            fill="#eab308"
          />

          {/* Center Royal Medallion */}
          <circle cx="200" cy="208" r="14" fill="#14171f" stroke="#e5c48b" strokeWidth="2" />
          <polygon points="200,198 203,205 210,208 203,211 200,218 197,211 190,208 197,205" fill="#fef08a" />
        </g>

        {/* Powerful Talons (Grasping Royal Pearls) */}
        <g id="talons" stroke="#5c3809" strokeWidth="2">
          {/* Left Foot */}
          <path d="M 175 265 L 160 300 M 175 265 L 175 305 M 175 265 L 190 300" stroke="#ffcc00" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="160" cy="305" r="4" fill="#ffffff" stroke="#c29b62" />
          <circle cx="175" cy="310" r="4" fill="#ffffff" stroke="#c29b62" />
          <circle cx="190" cy="305" r="4" fill="#ffffff" stroke="#c29b62" />

          {/* Right Foot */}
          <path d="M 225 265 L 210 300 M 225 265 L 225 305 M 225 265 L 240 300" stroke="#ffcc00" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="210" cy="305" r="4" fill="#ffffff" stroke="#c29b62" />
          <circle cx="225" cy="310" r="4" fill="#ffffff" stroke="#c29b62" />
          <circle cx="240" cy="305" r="4" fill="#ffffff" stroke="#c29b62" />
        </g>

        {/* Fan Tail Feathers */}
        <g id="tail">
          <path d="M 185 265 L 165 345 L 182 340 L 200 360 L 218 340 L 235 345 L 215 265 Z" fill="url(#goldFeatherGrad)" stroke="#5c3809" strokeWidth="1.5" />
          <circle cx="168" cy="342" r="3" fill="#ff4d4f" />
          <circle cx="200" cy="355" r="4" fill="#ff4d4f" />
          <circle cx="232" cy="342" r="3" fill="#ff4d4f" />
        </g>

        {/* Base Banner Inscription: "ಸರ್ವೇ ಭವಂತು ಸುಖಿನಃ / ಕರ್ನಾಟಕ" */}
        <path
          d="M 120 375 Q 200 388 280 375 L 272 388 Q 200 400 128 388 Z"
          fill="url(#goldFeatherGrad)"
        />
      </svg>
    </div>
  );
}
