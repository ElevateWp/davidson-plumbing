import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: '#FFFFFF', secondary: '#F5F5F5' },
        forest: { DEFAULT: '#F15A24', ink: '#171717', light: '#666666', navy: '#FF9A52' },
        brand: { DEFAULT: '#F15A24', black: '#171717', hover: '#FF7138', soft: '#F5F5F5', navy: '#FF9A52', text: '#171717', secondaryText: '#666666', border: '#D9D9D9' },
        lime: '#FF9A52', greenAccent: '#F15A24', orangeAccent: '#FF7138', gold: '#FF7138', mist: '#D9D9D9', softBlue: '#FF9A52', redAccent: '#FF9A52', royalBlueAccent: '#FF7138', silverAccent: '#D9D9D9', metallicGrey: '#666666', deepSection: '#171717',
        navy: { DEFAULT: '#FF9A52', dark: '#171717' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '13': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        '15': ['0.9375rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '17': ['1.0625rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        '21': ['1.3125rem', { lineHeight: '1.35', letterSpacing: '-0.015em' }],
        '26': ['1.625rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '33': ['2.0625rem', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
        '41': ['2.5625rem', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        '52': ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        '65': ['4.0625rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '81': ['5.0625rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        site: '1360px',
      },
      borderRadius: {
        none: '0px',
        input: '8px',
        pill: '9999px',
      },
      spacing: {
        'section-sm': 'clamp(64px, 8vh, 96px)',
        'section': 'clamp(96px, 12vh, 180px)',
      },
      transitionTimingFunction: {
        'nova-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;


