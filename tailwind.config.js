/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yatra: {
          dark: '#0a0b0e',
          darker: '#060709',
          slate: '#14171f',
          surface: '#181d26',
          card: 'rgba(24, 29, 38, 0.75)',
          stone: '#242a38',
          gold: '#c29b62',
          'gold-light': '#e5c48b',
          'gold-dark': '#8e6c3a',
          crimson: '#8e282a',
          'crimson-light': '#c53c40',
          amber: '#d97706',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(194, 155, 98, 0.3)',
        'glow-crimson': '0 0 35px -5px rgba(142, 40, 42, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
