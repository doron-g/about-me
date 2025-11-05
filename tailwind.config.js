/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Creepster"', 'cursive'],
      },
      colors: {
        'rick-green': '#97ce4c',
        'morty-yellow': '#f0e14a',
        'portal-blue': '#00b0c8',
        'dark-space': '#24282f',
      },
    },
  },
  plugins: [],
}
