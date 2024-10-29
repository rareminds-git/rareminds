/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
        Syne: "Syne",
        Poppins: "Poppins",
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
