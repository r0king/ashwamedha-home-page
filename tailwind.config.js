/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {},
    fontFamily:{
      'sans': ['Josefin Sans'],
    }
  },
  plugins: [require("daisyui")],
}
