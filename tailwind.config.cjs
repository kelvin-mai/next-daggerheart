const flattenColorPalette = (colors) =>
  Object.assign(
    {},
    ...Object.entries(
      colors !== null && colors !== void 0 ? colors : {},
    ).flatMap(([color, values]) =>
      typeof values == 'object'
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
          }))
        : [
            {
              [`${color}`]: values,
            },
          ],
    ),
  );

const addVariablesForColors = ({ addBase, theme }) => {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
};

/** @type {import("tailwindcss").Config} */
module.exports = {
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
        'card-title-lg': ['26px', { lineHeight: '22px' }],
        'card-title-sm': ['16px', { lineHeight: '22px' }],
        'card-subtitle': ['13px', { lineHeight: '22px' }],
        'card-content': [
          '14px',
          {
            lineHeight: '1.1',
          },
        ],
        'card-credits': ['11px', { lineHeight: '12px' }],
      },
      objectPosition: {
        'center-top': 'center top',
      },
      colors: {
        dh: {
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
        domain: {
          arcana: '#664295',
          blade: '#b93035',
          bone: '#c1c7cc',
          codex: '#3370ab',
          grace: '#cb3b90',
          midnight: '#2c2c2c',
          sage: '#0e854d',
          splendor: '#d1b447',
          valor: '#dc7a27',
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
};
