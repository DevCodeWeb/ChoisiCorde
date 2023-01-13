/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1440px",
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
