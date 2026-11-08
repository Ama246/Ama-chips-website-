/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Rich brown
        cocoa: { DEFAULT: '#2B1A10', soft: '#4A3020', deep: '#1D100A' },
        // Luxury gold
        gold: { DEFAULT: '#C9A14A', light: '#E6CB84', deep: '#7F611A' },
        // Warm cream
        cream: { DEFAULT: '#FAF3E3', deep: '#F0E4C8' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { transform: 'scale(0.6)' },
          '60%': { transform: 'scale(1.25)' },
          '100%': { transform: 'scale(1)' },
        },
        toast: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        menu: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        pop: 'pop 0.35s ease-out',
        toast: 'toast 0.35s ease-out both',
        menu: 'menu 0.2s ease-out both',
      },
    },
  },
  plugins: [],
};
