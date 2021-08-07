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
        primary: "#FAFAFF",
        secondary: "#000100",
        accent: "#11B6E4",
        accentDark: "#10A7D1",
        accentLight: "#88DEF6",
        font: "#000000b3",
        fontWhite: "#EBEBFF",
        danger: "#CE1212",
      },
      fontFamily: {
        head: ["Raleway", "sans-serif"],
        logo: ["Montez", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
      // backgroundColor: ["active"],
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
