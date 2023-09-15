/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        firasans: ["Fira Sans", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        italiano: ["Italianno", "cursive"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
      height: {
        big: "38rem",
      },
      backgroundImage: {
        gradientgray: "linear-gradient(180deg,black, rgba(211, 211, 211, 0.4))",
      },
    },
  },
  plugins: [],
};
