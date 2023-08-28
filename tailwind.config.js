/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        adlamdisplay: ["ADLaM Display", "cursive"],
        merriweather: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
