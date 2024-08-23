/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ntn-white': '#f2dede',
        'ntn2-white':'#ebcccc',
      },
    },
  },
  plugins: [],
};
