/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {
      colors: {
        'primary' : '#1B66CA'
      },
      fontFamily : {
        'sans' : "Product Sans",
        'robot' : "Roboto"
      }
    },
  },
  plugins: [],
}
