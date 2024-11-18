/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'deepBlue':'#111F62',
      'lightBlue':'#5754F7',
      "textColor":'gray',
      "sectionBg":'#EEEDFE'
    },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
