/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#445964',
        secondary: '#263138',
        terceary: '#DFDFDF',
        backgb: '#FBFBFB',
      },
      maxHeight:{
        contProjct: '35rem',
      },
    },
  },
  plugins: [],
}


