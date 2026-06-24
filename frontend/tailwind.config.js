/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          deep: 'var(--bg-deep)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
          glass: 'var(--bg-glass)',
          goldLight: 'var(--gold-light)',
          goldMid: 'var(--gold-mid)',
          goldDeep: 'var(--gold-deep)',
          textPrimary: 'var(--text-primary)',
          textSecondary: 'var(--text-secondary)',
          textGold: 'var(--text-gold)',
        },
        navy: {
          DEFAULT: '#0D1B2A',
          light: '#1B2D45',
          lighter: '#243B53',
          dark: '#091522',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4BC6A',
          dark: '#B8953A',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      minHeight: {
        'touch': '80px',
      },
      minWidth: {
        'touch': '80px',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
