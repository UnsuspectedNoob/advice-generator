/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "light-cyan": "hsl(193, 38%, 86%)",
          "neon-green": "hsl(150, 100%, 66%)"
        },
        neutral: {
          "grayish-blue": "hsl(217, 19%, 38%)",
          "d-grayish-blue": "hsl(217, 19%, 24%)",
          "d-blue": "hsl(218, 23%, 16%)"
        }
      },
      fontFamily: {
        "manrope": "'Manrope'"
      }
    },
  },
  plugins: [],
}
