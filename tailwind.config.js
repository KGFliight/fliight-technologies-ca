/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ft-white': '#f2f2f3',
        'ft-grey': '#C5CFDA',
        'ft-dark-grey': '#4D4A4F',
        'ft-black': '#1C1F2A',
        'ft-purple': '#8C54FB'
      },
    },
  },
  plugins: [],
}