module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'deep-blue': '#02001b',
        'light-blue': '#2214c8',
        primary: '#ffffff',
        secondary: '#000000',
        'btn-red': '#D43A25',
        'light-white': '#f7f7f7',
        grey: '#9194A2',
        purple: '#5267DF',
      },
    },
    fontFamily: {
      Poppins: [
        "'Poppins',-apple-system, BlinkMacSystemFont,'Segoe UI', 'Roboto', 'Oxygen',\n" +
          "'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n" +
          'sans-serif',
      ],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
