/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#091018",
      },
      backgroundImage: {
        pattern:
          "url('https://www.transparenttextures.com/patterns/dark-matter.png')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        oldStandardTT: ["Old Standard TT", "serif"],
        rouge: ["Rouge Script", "cursive"],
        mathilga: ["Mathilga"],
        felidae: ["Felidae"],
      },
    },
  },
  plugins: [],
};
