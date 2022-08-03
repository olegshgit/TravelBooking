module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
    },
    extend: {
      colors: {
        'unamed-grey': '#BDBBBF',
        'storm-grey': '#6A6F85',
        'green-vogue': '#002150',
        blue: '#15A1F8',
        'dark-blue': '#7882DE',
        'dark-blue-10': 'rgba(120, 130, 222, 0.1)',
        pink: '#C82CFF',
        'light-pink': '#F4D5FF',
        'pink-20': 'rgba(200, 44, 255, 0.2)',
        'psychedelic-purple': '#C72DFE',
        purple: '#A200FF',
      },
    },
  },
  plugins: [],
};
