/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'funngroo-blue': '#2E75D7',
        'funngroo-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}