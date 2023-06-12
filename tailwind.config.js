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
                'custom': '450px',
                'custom2': '1365px',
            },
            height: {
                'custom': '450px',
                'custom2': '630px',
            },
        },
    },
    plugins: [],
};