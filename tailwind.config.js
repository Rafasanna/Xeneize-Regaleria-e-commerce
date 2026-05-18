/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    ringColor: {
      DEFAULT: "rgb(233 174 184 / 0.45)"
    },
    extend: {
      colors: {
        cream: "#fbf6f2",
        porcelain: "#ffffff",
        sand: "#b58a6b",
        sage: "#9b7a69",
        nude: "#e9aeb8",
        gold: "#f7d6dc",
        steel: "#f1e8e1",
        charcoal: "#2f241f",
        warm: "#7d685c",
        blush: {
          50: "#fff8f8",
          100: "#fdecef",
          200: "#f7d6dc",
          300: "#e9aeb8",
          400: "#d48794",
          500: "#b86b78"
        },
        ink: "#2f241f"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(20, 21, 24, 0.09)",
        editorial: "0 28px 70px rgba(20, 21, 24, 0.14)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
