/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    ringColor: {
      DEFAULT: "rgb(121 85 72 / 0.28)"
    },
    extend: {
      colors: {
        cream: "#FCF8F8",
        porcelain: "#ffffff",
        sand: "#D7CCC8",
        sage: "#5D4037",
        nude: "#F8BBD0",
        coral: "#795548",
        mint: "#FCE4EC",
        sky: "#F5EFE6",
        sunny: "#E1C699",
        lilac: "#EAD5D5",
        gold: "#A1887F",
        steel: "#EFEBE9",
        charcoal: "#3E2723",
        warm: "#5D4037",
        blush: {
          50: "#FFF3F6",
          100: "#FCE4EC",
          200: "#F8BBD0",
          300: "#F48FB1",
          400: "#F06292",
          500: "#795548"
        },
        ink: "#3E2723"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(121, 85, 72, 0.11)",
        editorial: "0 28px 70px rgba(121, 85, 72, 0.16)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
