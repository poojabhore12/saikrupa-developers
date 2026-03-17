/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          50:  "#fff4e6",
          100: "#ffe4bf",
          200: "#ffcc8a",
          300: "#ffb055",
          400: "#ff9422",
          500: "#FF7900",
          600: "#cc6100",
          700: "#994800",
        },
      },
    },
  },
  plugins: [],
}