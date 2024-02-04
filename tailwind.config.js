/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg, #f5f5f5, #d4d4d4)"
      }
    },
  },
  plugins: [ require('@tailwindcss/forms')],
};
