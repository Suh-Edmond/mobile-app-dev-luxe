/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Make sure this matches your project structure
  darkMode: "class", // or 'media' or 'class'
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        fantasy: "#fdf8f8",
        "cod-gray": "#1c1b1b",
        scorpion: "#5e5e5e",
        "soft-peach": "#f8f3f2",
      },
    },
  },
  plugins: [],
};
