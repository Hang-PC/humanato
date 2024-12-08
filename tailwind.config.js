/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this path to match your project's file structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050416",
        ["primary-text"]: "#FFFFFF",
        secondary: "#4168a3",
      },
    },
  },
  plugins: [],
};
