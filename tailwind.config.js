module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "0px",
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
