/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lostfish: ['lostfish', 'cursive'],
      },
      width: {
        cap: '1280px',
      },
    },
  },
  plugins: [],
}