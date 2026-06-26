import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#05060a',
          900: '#0a0c18',
          800: '#111427',
          700: '#1a1d35',
        },
        accent: {
          indigo: '#7c5cff',
          'indigo-light': '#a78bfa',
          cyan: '#22d3ee',
          'cyan-light': '#67e8f9',
          amber: '#f59e0b',
          'amber-light': '#fde047',
          rose: '#fb7185',
          'rose-light': '#f472b6',
          sky: '#38bdf8',
          'sky-light': '#7dd3fc',
        },
        text: {
          primary: '#e7e9f0',
          secondary: '#8a91a6',
          muted: '#5a6077',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Geist"', '"Geist Fallback"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'hero-sub': ['clamp(1rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          from: { filter: 'brightness(1)' },
          to: { filter: 'brightness(1.3)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
