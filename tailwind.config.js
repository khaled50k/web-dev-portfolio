/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "shade-5": "#0a0a0a",
        "shade-2": "#b3b3b3",
        "shade-4": "#121212",
        "shade-3": "#3b3b3b",
        "accent-3": "#5ee2ff",
        "accent-1": "#9b5cff",
        shade1: "#fff",
        black: "#000",
        gray: "#141414",
      },
      spacing: {},
      fontFamily: {
        "paragraph-sm": "Inter",
        outfit: "Outfit",
        subtitle: "'DM Sans'",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "1xl": "20px",
      "29xl": "48px",
      "13xl": "32px",
      "20xl": "40px",
      "71xl": "90px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },

  plugins: [],
};
