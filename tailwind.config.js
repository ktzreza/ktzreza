/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      almostWhite: 'hsl(0, 0%, 98%)',
      mediumGray: 'hsl(0, 0%, 10%)',
      almostBlack: 'hsl(0, 0%, 8%)'
    },
    extend: {},
  },
  plugins: [],
}
