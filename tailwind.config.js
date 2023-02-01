/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui", "flowbite/plugin")],
  daisyui: {
    themes: ["coffee", "night", "halloween"],
    darkTheme: "coffee",
  },
}
