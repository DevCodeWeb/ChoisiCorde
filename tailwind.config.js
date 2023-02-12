/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { max: "428px" },
      sm: { min: "429px", max: "799px" },
      md: { min: "800px", max: "1279px" },
      lg: { min: "1280px", max: "1919px" },
      xl: { min: "1920px", max: "2560px" },
      xxl: "2561px",
    },
    colors: {
      black: "#292929",
      primary300: "#213c5a",
      primary200: "#32587f",
      primary100: "#537da3",
      orange: "#f4a260",
      white: "#ececec",
      red: "#ff0000",
    },
    extend: {
      backgroundImage: {
        headView: "url('/assets/headViewBg.svg')",
      },
    },
  },
  plugins: [],
};
