/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    ringColor: {
      DEFAULT: "rgb(0 0 0 / 0.1)"
    },
    extend: {
      colors: {
        cream: "#FFF8FC",
        porcelain: "#ffffff",
        sand: "#FDE5F1",
        sage: "#98C3D6",
        nude: "#FDE7F1",
        coral: "#FC2DAF",
        rose: "#FE72A9",
        mauve: "#18121D",
        taupe: "#7B6D82",
        mint: "#98C3D6",
        sky: "#EAF6FB",
        sunny: "#FEE4F0",
        lilac: "#F7D9EA",
        gold: "#28A4DC",
        steel: "#EAF6FB",
        charcoal: "#18121D",
        warm: "#7B6D82",
        blush: {
          50: "#FFF8FC",
          100: "#FDE7F1",
          200: "#FEC4DC",
          300: "#FE72A9",
          400: "#FC2DAF",
          500: "#D91692"
        },
        ink: "#18121D"
      },
      boxShadow: {
        soft: "0 16px 44px rgba(24, 18, 29, 0.08)",
        editorial: "0 24px 70px rgba(252, 45, 175, 0.14)"
      },
      fontFamily: {
        sans: ["Quicksand", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"]
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
