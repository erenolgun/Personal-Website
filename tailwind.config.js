module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: 'Source Serif Pro, sans-serif',
      sans: 'Raleway, sans-serif',
    },
    extend: {
      colors: {
        primary: '#0F6D8E',
        light: '#7B7B7B',
        hover: '#131418',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
