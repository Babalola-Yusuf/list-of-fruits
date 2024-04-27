/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        base: '#9BC49A',
        main: '#336B32',
        softPurple: '#47326B',
        darkPink: '#6B3249',
      }
    },
  },
  plugins: [],
}

