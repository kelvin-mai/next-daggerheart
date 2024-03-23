import type { Config } from 'tailwindcss';

import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Barlow'],
        barlow: ['var(--font-barlow)'],
        'eveleth-clean': ['var(--font-eveleth-clean)'],
      },
      fontSize: {
        'card-title': ['26px', { lineHeight: '22px' }],
        'card-content': [
          '14px',
          {
            lineHeight: '1.1',
          },
        ],
      },
      objectPosition: {
        'center-top': 'center top',
      },
      colors: {
        dh: {
          base: '#1E184D',
          'dark-blue': '#0a0f21',
          purple: '#1e184d',
          'purple-light': '#38227b',
          gold: '#f3c267',
          'gold-light': '#fef790',
          'gold-dark': '#e38c3e',
          teal: '#81ccc3',
          blue: '#2878be',
          'off-white': '#F2F3F4',
          gray: '#d8d8d6',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config;

export default config;
