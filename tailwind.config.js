/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008073",
        secondary: "#64998D",
        accent: "#FFD700",
        grey: "#E5E5E5",
        dark: "#1E1E1E",
      },
      screens: {
        'lg': '1025px',
        'laptop': '1024px',
      },
    },
  },
  plugins: [],
};