/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this path to match your project's file structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c21024",
      },
    },
  },
  plugins: [],
};
