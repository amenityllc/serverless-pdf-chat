/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customNavy: 'rgb(0, 0, 40)',
      },
    },
    container: {
      padding: "7rem",
      center: true,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
