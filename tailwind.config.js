/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "5/3": "5 / 3",
      },
      boxShadow: {
        r: "8px 0 15px -3px rgba(0, 0, 0, 0.1), 4px 0 6px -2px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        image: "url('./assets/images/background.webp')",
      },
      backgroundColor: {
        overlay: "#156064",
      },
      backgroundBlendMode: {
        multiply: "multiply",
      },
      colors: {
        primary: {
          900: "#09282A",
          800: "#0C3537",
          700: "#0F4447",
          600: "#13575B",
          500: "#156064",
          400: "#448083",
          300: "#629497",
          200: "#93B6B8",
          100: "#B6CECF",
          50: "#E8EFF0",
        },
        secondary: {
          900: "#642400",
          800: "#832F00",
          700: "#AA3C00",
          600: "#D94D00",
          500: "#EF5500",
          400: "#F27733",
          300: "#F48D54",
          200: "#F8B18A",
          100: "#FACAB0",
          50: "#FDEEE6",
        },
        transparent: "transparent",
        blue: "rgb(191,220,255,1)",
        pink: "rgba(255,164,246,0.2)",
        white: "#FFFFFF",
        black: {
          600: "#929292",
          500: "#011627",
          400: "#344552",
        },
        dark: "#190B36",
        text: {
          400: "#344552",
          300: "#55636E",
        },
      },
    },
    fontFamily: {
      book: ["Gotham", "sans-serif"],
      medium: ["Gotham-Medium", "sans-serif"],
      bold: ["Gotham-Bold", "sans-serif"],
      black: ["Gotham-Black", "sans-serif"],
    },
  },
  variants: {
    extend: {
      backgroundBlendMode: ["responsive"],
    },
  },
  plugins: [],
};
