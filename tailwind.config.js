/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fbf7f0",
        porcelain: "#fffdf9",
        sand: "#d8c3a5",
        sage: "#9aaa8f",
        nude: "#e8a3ad",
        warm: "#8b8177",
        blush: {
          50: "#fff8f6",
          100: "#f9ece7",
          200: "#f1d7d0",
          300: "#e8b9b1",
          400: "#d98d94",
          500: "#c96f7b"
        },
        ink: "#242321"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(36, 35, 33, 0.08)",
        editorial: "0 28px 70px rgba(36, 35, 33, 0.12)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};
