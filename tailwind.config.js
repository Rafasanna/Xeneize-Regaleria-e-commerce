/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    ringColor: {
      DEFAULT: "rgb(0 0 0 / 0.1)"
    },
    extend: {
      colors: {
        cream: "#FCFBF8",
        porcelain: "#ffffff",
        sand: "#E5D3B3",
        sage: "#9CA3AF",
        nude: "#E8E0D5",
        coral: "#1A1A1A",
        mint: "#F3F4F6",
        sky: "#F8FAFC",
        sunny: "#FCD34D",
        lilac: "#F3F4F6",
        gold: "#D4AF37",
        steel: "#F3F4F6",
        charcoal: "#1F2937",
        warm: "#4B5563",
        blush: {
          50: "#FAF8F5",
          100: "#F5F1EB",
          200: "#EAE1D3",
          300: "#DED0BC",
          400: "#D1C0A5",
          500: "#C1AD8D"
        },
        ink: "#0A0A0A"
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0, 0, 0, 0.04)",
        editorial: "0 20px 60px rgba(0, 0, 0, 0.06)"
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
