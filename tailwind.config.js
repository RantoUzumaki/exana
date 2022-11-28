/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#4c76e2",
        black: "#333333",
        gray: "#acacac",
        white: "#ffffff",
        "blue-extra-light": "#f9fbfe",
        "blue-light": "#0575E6",
        "blue-dark": "#02298A",
        "blue-extra": "#021B79",
      },
    },
  },
  plugins: [],
};
