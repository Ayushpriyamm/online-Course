/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'equal': '0 0 20px rgba(0, 0, 0, 0.5)'
      },
      screens:{
        'custom':'882px',
        'max-lg':'1380px',
      },
      animation: {
        slideLeft: "slideLeft 0.5s ease-in-out",
        slideRight: "slideRight 0.5s ease-in-out",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".slide-in-left": {
          animation: "slideLeft",
        },
        ".slide-in-right": {
          animation: "slideRight",
        },
      });
    }),
  ],
}