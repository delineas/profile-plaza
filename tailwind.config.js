/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        black: {
          100: "#E8E9EA",
          200: "#C6C8CC",
          300: "#A4A7AD",
          400: "#5F666F",
          500: "#1B2431",
          600: "#18202C",
          700: "#10161D",
          800: "#0C1016",
          900: "#080B0F",
        },
        blue: {
          100: "#E6F0F4",
          200: "#C0D9E5",
          300: "#99C2D5",
          400: "#4D95B5",
          500: "#016795",
          600: "#015D86",
          700: "#013E59",
          800: "#002E43",
          900: "#001F2D",
        },
        cobalt: {
          100: "#E9EDF4",
          200: "#C7D1E3",
          300: "#A5B6D2",
          400: "#627FB1",
          500: "#1E488F",
          600: "#1B4181",
          700: "#122B56",
          800: "#0E2040",
          900: "#09162B",
        },
      },
      linearGradientColors: (theme) => ({
        "black-900-300": [
          theme("colors.black.900"),
          theme("colors.black.300"),
        ]
      })
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [require('tailwindcss-gradients'), ],
};

