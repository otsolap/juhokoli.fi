module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1366px',
      '3xl': '1440px',
    },
    extend: {
      colors: {
        primary: '#0525e2',
        black: '#211f1b',
        aquamarine: '#69dee3',
        white: '#ffffff',
        grey: '#f2f2f2',
      },
      spacing: {
        half: '.5rem',
        single: '1rem',
        double: '2rem',
        triple: '3rem',
        14: '3.5rem',
      },
      container: {
        center: true
      },
      content: {
        'heart': 'url("/images/sydan.png")'
      },
    },
  },
  plugins: [],
}
