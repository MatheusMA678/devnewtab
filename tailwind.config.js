/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Inter', sans-serif",
      },
      boxShadow: {
        glass:
          'inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.2), 0 5px 10px 2px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
