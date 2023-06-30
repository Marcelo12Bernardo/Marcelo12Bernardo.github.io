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
                '1xl': '14px',
                '1.2xl': '18px',
                '2xl': '24px',
                '3xl': '30px',
                '4xl': '36px',
                '5xl': '48px',
                '6xl': '60px',
                '7xl': '72px',
                '8xl': '96px',
                '9xl': '128px',
            },
            width: {
                'custom': '500px', //img
                'custom2': '1360px',
            },
            height: {
                'custom': '500px', //img
                'custom2': '640px',
            },
            margin: {
                'custom': '25%',
            },
        },
    },
    plugins: [],
};