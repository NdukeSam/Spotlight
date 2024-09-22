/** @type {import('tailwindcss').Config} */

module.exports = {

  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],

  theme: {

    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        grotesque: ["Darker Grotesque", "sans-serif"]
      },
      colors: {
        "spotlight-black": "#25292C"
      },
      // screens: {
      //   xs: "480px",
      //   sm: "768px",
      //   md: "1060px"
      // }
    },

  },

  plugins: [],

}
