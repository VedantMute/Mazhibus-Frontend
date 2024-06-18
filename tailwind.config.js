/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dbg': '#141314',
        'fbg': '#211f21',
      },
    },
  },
  plugins: [],
}