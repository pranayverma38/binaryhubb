import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1430px',
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
        instrument: ["'Instrument Serif', system-ui"],
      },
      colors: {
        primary: '#12D8CC',
        secondary: '#181818',
        backgroundBody: '#EDF0F5',
        black: '#181818',
        colorText: '#181818b3',
        dark: {
          DEFAULT: '#151515',
          100: '#ffffffb3',
          200: '#212220',
          300: '#191A17',
          gradient: '#191917',
        },
      },
      borderColor: {
        DEFAULT: '#1818181a',
        dark: '#edf0f51a',
      },
      cursor: {
        fancy: 'url(/images/cursor.svg), default',
        pause: 'url(/images/pause.png), default',
      },
      backgroundImage: {
        'ai-gradient-bg': "url('/images/ai-transition.png')",
      },
      transitionTimingFunction: {
        'faq-body-transition': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'smooth-cubic-bezier': 'cubic-bezier(0.65, 0.05, 0, 1)',
        'team-bezier': 'cubic-bezier(.21,.25,.76,.71)',
      },
      boxShadow: {
        nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
        box: ' 0px 5px 50px 0px rgba(0, 0, 0, 0.07)',
      },
      keyframes: {
        'dots-breathe': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '0.9',
          },
          '25%': {
            transform: 'translateY(-3px) scale(1.07)',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(0) scale(0.96)',
            opacity: '0.8',
          },
          '75%': {
            transform: 'translateY(3px) scale(1.05)',
            opacity: '0.95',
          },
        },
        'dots-wave': {
          '0%': {
            transform: 'translateY(14px) scale(0.75)',
            opacity: '0.15',
          },
          '40%': {
            transform: 'translateY(-10px) scale(1.12)',
            opacity: '1',
          },
          '80%': {
            transform: 'translateY(4px) scale(0.98)',
            opacity: '0.85',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '0.95',
          },
        },
      },
      animation: {
        'dots-breathe': 'dots-breathe 4s ease-in-out infinite',
        'dots-wave': 'dots-wave 0.9s ease-out forwards',
      },
    },
  },
  safelist: [
    {
      pattern: /scale-/,
    },
  ],
  plugins: [],
} satisfies Config
