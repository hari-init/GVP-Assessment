/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1597e4",
        cBorder: "#e6e6e6",
        pHolder: "#7a7a7a",
        headerNav: "#e6e6e6",
        mask: "#37373782",
        error: "#d86161",
      },
    },
  },
  plugins: [],
};
