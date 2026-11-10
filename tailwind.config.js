/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trusu: {
          green: "#32b881",
          greenHover: "#289b6c",
          darkGreen: "#1b5e40",
          headerDark: "#334155", // slate header
          navyDark: "#27333e",
          bgDark: "#3b4854",
          cardBorder: "#e2e8f0",
          yellowTag: "#ffff00"
        }
      }
    },
  },
  plugins: [],
}
