/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Make sure this matches your project structure
  darkMode: "class", // or 'media' or 'class'
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        alabaster: "#fafafa",
        "governor-bay": "#3830a3",
      },
    },
  },
  plugins: [],
};
