/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelRed: '#fc5130', // 토마토색
        teaRoseRed: '#efc7c2', // 은은한 베이비 핑크
        argentinianBlue: '#57b8ff', // 쨍한 하늘색
      },
    },
  },
  variants: {},
  plugins: [],
};