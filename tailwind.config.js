/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "300px", max: "428px" },
      md: { min: "429px", max: "799px" },
      lg: { min: "800px", max: "1279px" },
      xl: { min: "1280px", max: "1919px" },
    },
    colors: {
      black: "#292929",
      primary300: "#213c5a",
      primary200: "#32587f",
      primary100: "#537da3",
      white: "#ececec",
      red: "#ff0000",
    },
    extend: {},
  },
  plugins: [],
};
