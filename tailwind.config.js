
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/*.html", "./template/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#042f1a",
        secondary: "#ff73b5",
      },
      fontFamily: {
        'Rubik': ["Rubik", "sans-serif"],
        'monoOne': ["Rubik Mono One", "monospace"],
      },
    },
  },
  plugins: [],
};
