/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./guides/**/*.{html,js}", "./services/**/*.{html,js}", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-tint": "#795553",
        "on-error": "#ffffff",
        "on-secondary-fixed": "#012202",
        "tertiary-fixed-dim": "#ccc6b9",
        "surface-container": "#f5ece7",
        "surface-bright": "#fff8f5",
        "secondary-container": "#c4eeb8",
        "on-primary": "#ffffff",
        "secondary": "#43673d",
        "background": "#fff8f5",
        "on-surface": "#1e1b18",
        "tertiary": "#221f17",
        "surface-dim": "#e1d8d4",
        "on-background": "#1e1b18",
        "inverse-surface": "#34302c",
        "tertiary-container": "#37342b",
        "surface": "#fff8f5",
        "secondary-fixed-dim": "#a9d19e",
        "primary-fixed": "#ffdad7",
        "primary-fixed-dim": "#eabcb8",
        "surface-container-highest": "#e9e1dc",
        "inverse-on-surface": "#f8efea",
        "inverse-primary": "#eabcb8",
        "on-secondary-fixed-variant": "#2c4f27",
        "tertiary-fixed": "#e9e2d5",
        "on-tertiary-fixed-variant": "#4a463d",
        "outline-variant": "#d4c3c1",
        "surface-variant": "#e9e1dc",
        "on-surface-variant": "#504443",
        "on-secondary-container": "#496d42",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#2e1413",
        "secondary-fixed": "#c4eeb8",
        "error": "#ba1a1a",
        "on-secondary": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#a29c90",
        "on-tertiary-fixed": "#1e1b13",
        "surface-container-high": "#efe6e2",
        "on-primary-fixed-variant": "#5f3e3c",
        "outline": "#827472",
        "primary-container": "#4a2c2a",
        "on-primary-container": "#bd928f",
        "primary": "#321716",
        "surface-container-low": "#fbf2ed"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "margin-desktop": "64px",
        md: "16px",
        xs: "4px",
        "margin-mobile": "16px",
        sm: "8px",
        lg: "24px",
        unit: "4px",
        gutter: "24px",
        section: "80px",
        xl: "48px"
      },
      fontFamily: {
        "body-lg": ["Manrope", "sans-serif"],
        "headline-sm": ["Libre Caslon Text", "serif"],
        "display-lg": ["Libre Caslon Text", "serif"],
        "body-md": ["Manrope", "sans-serif"],
        "display-lg-mobile": ["Libre Caslon Text", "serif"],
        "headline-md": ["Libre Caslon Text", "serif"],
        "label-sm": ["Manrope", "sans-serif"],
        "label-lg": ["Manrope", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-lg-mobile": ["36px", { lineHeight: "44px", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
