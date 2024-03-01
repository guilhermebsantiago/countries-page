/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'full': '1px 1px 10px 1px rgba(0, 0, 0, 0.2)',
      },
      fontFamily:{
        'nunito' : ['Nunito Sans', 'sans-serif']
      },
      colors:{
        "dark-blue": "#2b3945", //(Dark Mode Elements)
        "very-dark-blue": "#202c37", //(Dark Mode Background)
        "very-dark-blue-light-text": "#111517", //(Light Mode Text)
        "dark-gray": "#858585", //(Light Mode Input)
        "very-light-gray": "#fafafa", //(Light Mode Background)
        "white": "#fff" //(Dark Mode Text & Light Mode Elements)
      }
    },
  },
  plugins: [],
}