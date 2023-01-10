/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        code: "url('/src/assets/expertise-bg.jpg')",
      },
    },
  },
  plugins: [],
};
