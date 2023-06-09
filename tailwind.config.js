/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.html'],
    theme: {
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
    plugins: [],
};
  