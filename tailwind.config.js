module.exports = {
    purge: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          "leaf": "#008A44",
          "sky": "#2D9CDB",
          "ash": "#828282",
          "sea": "#0065F2",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }