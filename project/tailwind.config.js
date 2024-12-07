/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#6DA3FF',
        'warm-orange': '#FFB347',
        'forest-green': '#4CAF50',
        'bright-yellow': '#FFD700',
        'muted-teal': '#2E8B88',
        'off-white': '#F9F9F9',
        'warm-grey': '#707070',
        'charcoal': '#333333',
      },
    },
  },
  plugins: [],
};