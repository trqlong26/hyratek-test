/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "100px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      integral: ['"Integral CF"', "sans-serif"],
      satoshi: ['"Satoshi"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f0f0f0",
        },
      },
    },
  },
  plugins: [],
};
