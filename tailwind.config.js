/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.html'],
    theme: {
        extend: {
            colors: {
                primary: '#445964',
                secondary: '#263138',
                terceary: '#DFDFDF',
                backgb: '#FBFBFB',
            },
            maxHeight: {
                contProjct: '35rem',
            },
            fontSize: {
                'custom-2xl': '24px',
                'custom-3xl': '30px',
                'custom-4xl': '36px',
                'custom-5xl': '48px',
                'custom-6xl': '60px',
                'custom-7xl': '72px',
                'custom-8xl': '96px',
                'custom-9xl': '128px',
            },
        },
    },
    plugins: [],
};  
  