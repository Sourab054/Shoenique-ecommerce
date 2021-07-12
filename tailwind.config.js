const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        ipad: "850px",
      },
      colors: {
        primary: "#ffffff",
        secondary: "#130d14",
        tertiary: "#40E0D0",
        font: "#000000b3",
        fontWhite: "#ffffffb3",
        danger: "#CE1212",
      },
      fontFamily: {
        head: ["Raleway", "sans-serif"],
        logo: ["Montez", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-pseudo-elements"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
      };
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    }),
  ],
};
