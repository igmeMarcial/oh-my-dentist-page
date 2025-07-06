/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "#fff",
        bg2: "#b9140b",
        bg3: "#DAE8F24D",
        bg4: "#E9F0F5",
        bg5: "#374857",
        bg6: "#dc838c",
        bg7: "#B2DFFF",
        text1: "#98BCD6",
        text2: "#3C4959",
        text3: "#CFCFCF",
        text4: "#9C9C9C",
        darktext1: "#000000",
        primary: "#2cb4ad", // El color principal para fondos y textos
        accent: "#e56334", // El color de acento para botones y links activos (CTA)
        light: "#f8f9fa", // Un gris muy claro para fondos
        dark: "#343a40", // Un gris oscuro para texto
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite', // <-- Añade esta línea
      },
    },
  },
  plugins: [],
};
