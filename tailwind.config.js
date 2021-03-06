module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xxs: '.6rem',
      xs: '.75rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      display: ['Poppins', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
    },
    maxWidth: {
      '7/8': '87.5%',
      '12/13': '92.3%',
    },
    maxHeight: {
      '7/8': '87.5%',
      '12/13': '92.3%',
    },
    extend: {
      height: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7/8': '87.5%',
        '12/13': '92.3%',
      },
      width: {
        '7/8': '87.5%',
        '12/13': '92.3%',
      },
    },
    cursor: {
      "grab": "grab",
    }
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
  },
  plugins: [],
};
