/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    fontFamily: {
      right: ["Righteous", "sans-serif"],
      IBM: ["IBM Plex Sans", "sans-serif"],
      Rubik: ["Rubik", "sans-serif"]
    }
  },
  plugins: [],
}

