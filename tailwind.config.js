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
        'ft-grey': '#c5cfda',
        'ft-dark-grey': '#272B3A',
        'ft-black': '#1C1F2A',
        'ft-red': '#ba0c2f'
      },
    },
  },
  plugins: [],
}