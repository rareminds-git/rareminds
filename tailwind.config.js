/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        Inter: "Inter",
        Syne: "Syne",
        poppins: ["Poppins", "sans-serif"],
        Sentient: "Sentient",
        Urbanist: "Urbanist",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(179.38deg, rgba(194, 251, 255, 0.203) 8.57%, rgba(255, 99, 99, 0.077) 57.93%, rgba(160, 248, 184, 0.182) 113.51%)",
      },
      transitionProperty: {
        width: "width",
      },
      colors: {
        "placeholder-red": "#D9D9D9", // or any shade of red you prefer
        "overlay-color": "#000000e6",
        rareminds: {
          purple: "#9b87f5",
          "deep-purple": "#7E69AB",
          dark: "#1A1F2C",
          light: "#E5DEFF",
          "light-purple": "#D6BCFA",
          accent: "#8B5CF6",
        },
        corporate: {
          primary: "#D9B23B",
          secondary: "#E54C44",
          accent: "#FFFCEF",
          "primary-light": "#F1CF54",
          black: "#000000",
          grey: "#6B7280",
        },
      },
    },
    screens: {
      xs: "360px",
      // => @media (min-width: 640px) { ... }
      sm: "380px",

      md: "700px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1350px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
