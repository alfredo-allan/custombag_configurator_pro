// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["../index.html", "../pages/**/*.html", "../js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Cores do sistema (unificadas de ambos os projetos)
        primary: "#ffffff",
        "on-primary": "#003737",
        "primary-container": "#00fbfb",
        "on-primary-container": "#007070",
        "primary-fixed": "#00fbfb",
        "primary-fixed-dim": "#00dddd",
        "on-primary-fixed": "#002020",
        "on-primary-fixed-variant": "#004f4f",

        secondary: "#ffabf3",
        "on-secondary": "#5b005b",
        "secondary-container": "#fe00fe",
        "on-secondary-container": "#500050",
        "secondary-fixed": "#ffd7f5",
        "secondary-fixed-dim": "#ffabf3",
        "on-secondary-fixed": "#380038",
        "on-secondary-fixed-variant": "#810081",

        tertiary: "#ffffff",
        "on-tertiary": "#323200",
        "tertiary-container": "#eaea00",
        "on-tertiary-container": "#686800",
        "tertiary-fixed": "#eaea00",
        "tertiary-fixed-dim": "#cdcd00",
        "on-tertiary-fixed": "#1d1d00",
        "on-tertiary-fixed-variant": "#494900",

        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",

        background: "#131313",
        "on-background": "#e5e2e1",
        surface: "#131313",
        "on-surface": "#e5e2e1",
        "surface-variant": "#353534",
        "on-surface-variant": "#b9cac9",
        "surface-dim": "#131313",
        "surface-bright": "#393939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",

        "inverse-surface": "#e5e2e1",
        "inverse-on-surface": "#313030",
        "inverse-primary": "#006a6a",

        outline: "#839493",
        "outline-variant": "#3a4a49",
        "surface-tint": "#00dddd",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      screens: {
        mobile: { max: "767px" },
        desktop: { min: "768px" },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
