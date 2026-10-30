/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        ink: '#080d18',
        panel: '#101a2b',
        line: '#26344a',
        accent: '#91a2ff',
      },
      boxShadow: {
        glow: '0 0 70px rgba(112, 132, 245, .16)',
      },
    },
  },
  plugins: [],
}
