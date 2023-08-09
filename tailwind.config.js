const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffec19",
        secondary: "#24f2ff",
        background: "#1c1c1c"
      },
      fontFamily: {
        display: ["var(--font-ibm-plex-mono)", ...fontFamily.sans],
        sans: [
          "var(--font-ibm-plex-mono)",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
