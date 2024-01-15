/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#F39250",
        hoverPrimary: "#e05f09",
        secondary: "#FFFFFF",
        success: "#4ADE80",
        yellowFluffy: "#EAB308",
        greenFluffy: "#22C55E",
        roseFluffy: "#F43F5E",
        darkBlueFluffy: "#0077E6",
        lightBlueFluffy: "#0EA5E9",
        amberFluffy: "#F59E0B",
      },
    },
  },
  plugins: [],
};
