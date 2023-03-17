/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/extension.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
