/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './components/**/*.{js,ts,jsx,tsx}',
    './context/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './App.tsx',
    './index.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary, #0E3B43)',
        background: 'var(--color-background, #F5F0E1)',
        surface: 'var(--color-surface, #FFFFFF)',
        accent: 'var(--color-accent, #C8A97E)',
        'text-heading': 'var(--color-text-heading, #0E3B43)',
        'text-body': 'var(--color-text-body, #333333)',
        'button-bg': 'var(--color-button-bg, #0E3B43)',
        'button-bg-hover': 'var(--color-button-bg-hover, #C8A97E)',
        'button-text': 'var(--color-button-text, #FFFFFF)',
        neutral: {
          900: '#1a1a1a',
          800: '#333333',
          700: '#4d4d4d',
          600: '#666666',
          500: '#808080',
          400: '#999999',
          300: '#b3b3b3',
          200: '#cccccc',
          100: '#e6e6e6',
          50: '#f2f2f2',
        },
      },
      fontSize: {
        h1: ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
      },
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      spacing: {
        4: '1rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
        48: '12rem',
        64: '16rem',
      },
    },
  },
  plugins: [],
};
