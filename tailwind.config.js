/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
      colors: {
        "black-me": "#010409",
        "slate-me": "#201F1F",
        "bg-partial": "#111111",
        "slate-gradient-one": "#292828",
        "unggu-is": "#6512B9",
        "pink-is": "#D719AD",
        "text-color": "#8F8F8F",
      },
    },
  },
  plugins: [],
};
