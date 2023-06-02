/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: "Poiret One, cursive",
    },
    extend: {
      colors: {
        theme: "#983B57",
        lightOverlay: "rgba(255,255,255,0.4)",
      },
    },
  },
  plugins: [],
};
