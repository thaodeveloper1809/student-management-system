module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: {
          DEFAULT: "#0B3D91",
          700: "#08306f",
          800: "#062750"
        }
      }
    },
  },
  plugins: [],
};
