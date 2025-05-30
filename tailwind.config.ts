import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        favorit: ["var(--font-favorit)", "Arial", "sans serif"],
        inter: ["var(--font-inter)", "Arial", "sans serif"],
        fira: ["var(--font-fira)", "monospace"],
      },
      colors: {
        gray: {
          25: "#FBFBFF",
          200: "#E1E1E5",
          350: "#BBBBBF",
          450: "#949498",
          600: "#616165",
          700: "#4E4E52",
          800: "#2C2C33",
          850: "#1A1A1F",
          900: "#101014",
          1000: "#0B0B0C",
        },
        blue: {
          link: "#79AFFA",
        },
        green: {
          spring: "#13EF93",
        },
        userBubble: "#F4F7F4",
        assistantBubble: "#FAC304",
        assistantBubble20: "#FAC30433",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
} satisfies Config;
