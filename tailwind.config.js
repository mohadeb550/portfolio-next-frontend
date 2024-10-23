/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'orbitron-regular': ['orbitron-regular', 'sans-serif'],
    },
    extend: {
      darkMode: 'class',
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp')],
}

