/** @type {import('tailwindcss').Config}; */
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        250: "250ms",
      },
      transitionProperty: {
        color: "color",
      },
      backgroundImage: {
        "theme-gradient": "linear-gradient(to right, #0b0813, #250e20)",
      },
      colors: {
        "theme-bg-dark": "#0b0813",
        "theme-bg-light": "#fbfbfb",
      },
      fontFamily: {
        "theme-font": ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
})
