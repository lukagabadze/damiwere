module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-100": "#038C4C",
        "main-200": "#02733E",
        main: "#01401C",
        "main-300": "#01401C",
        "main-400": "#012611",
        "main-500": "#0D0D0D",
        "secondary-100": "#F7F4D5",
        "secondary-200": "#CBC5B5",
        "secondary-300": "#32304A",
        "secondary-400": "#1D1D39",
        "secondary-500": "#110F29",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
