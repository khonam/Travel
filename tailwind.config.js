/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: "true",
      padding: "16px",
    },
    extend: {
      colors: {
        hijau: "#16a34a",
        bg: "#f1f5f9",
        putih: "#ffffff",
        dark: "#020617",
        silver: "#e7e5e4",
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
