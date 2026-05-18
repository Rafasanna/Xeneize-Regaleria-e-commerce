/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    ringColor: {
      DEFAULT: "rgb(223 23 111 / 0.28)"
    },
    extend: {
      colors: {
        cream: "#fff5f8",
        porcelain: "#ffffff",
        sand: "#f3d58d",
        sage: "#b9125d",
        nude: "#f7a9bf",
        coral: "#df176f",
        mint: "#fde8ef",
        sky: "#fff0f4",
        sunny: "#f7d979",
        lilac: "#f9d3df",
        gold: "#f2c75c",
        steel: "#fde7ee",
        charcoal: "#3b1728",
        warm: "#7b3f56",
        blush: {
          50: "#fff7fa",
          100: "#fde7ef",
          200: "#fac9d8",
          300: "#f49ab7",
          400: "#ed5c94",
          500: "#df176f"
        },
        ink: "#3a1427"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(223, 23, 111, 0.11)",
        editorial: "0 28px 70px rgba(185, 18, 93, 0.16)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
