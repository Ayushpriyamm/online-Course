/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'custom':'882px',
        'max-lg':'1380px',
      
      }
    },
  },
  plugins: [],
}