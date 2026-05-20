/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    ringColor: {
      DEFAULT: "rgb(0 0 0 / 0.1)"
    },
    extend: {
      colors: {
        cream: "#FFF9F6",
        porcelain: "#ffffff",
        sand: "#F8D4C4",
        sage: "#C7D1C0",
        nude: "#F2E4E8",
        coral: "#6B4355",
        rose: "#C97A96",
        mauve: "#6B4355",
        taupe: "#A78D95",
        mint: "#C7D1C0",
        sky: "#FCECF2",
        sunny: "#F8D4C4",
        lilac: "#DCCBE8",
        gold: "#C97A96",
        steel: "#F2E4E8",
        charcoal: "#4D3A42",
        warm: "#A78D95",
        blush: {
          50: "#FFF9F6",
          100: "#FCECF2",
          200: "#F7DCE5",
          300: "#F2E4E8",
          400: "#C97A96",
          500: "#A78D95"
        },
        ink: "#4D3A42"
      },
      boxShadow: {
        soft: "0 16px 44px rgba(107, 67, 85, 0.08)",
        editorial: "0 24px 70px rgba(107, 67, 85, 0.13)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    }
  },
  plugins: []
};
