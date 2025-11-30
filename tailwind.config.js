// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
        "marquee-vertical":
          "marquee-vertical var(--duration, 40s) linear infinite",
      },
      colors: {
        primary: {
          500: "#3674B5",
        },
        secondary: {
          500: "#578FCA",
        },
        tertiary: {
          500: "#A1E3F9",
        },
        accent: {
          500: "#D1F8EF",
        },
      },
    },
  },
  plugins: [],
};
