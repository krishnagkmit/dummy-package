/** @type {import('tailwindcss').Config} */

const COLORS = require("./src/constants/theme/colors.json");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: COLORS,
      fontSize: {
        lg: ["1.125rem", "1.375rem"],
        xl: ["1.25rem", "1.5rem"],
        "2xl": ["1.5rem", "1.75rem"],
        "2.5xl": ["1.75rem", "1.875rem"],
        "3.5xl": ["2rem", "2.75rem"],
        "4xl": ["2.25rem", "3.125rem"],
        "4.5xl": ["2.5rem", "3.5rem"],
        "4.75xl": ["2.75rem", "3.5rem"],
      },
    },
  },
  plugins: [],
};
