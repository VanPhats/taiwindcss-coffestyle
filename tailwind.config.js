/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
       'light-coffe':'#C89F94'
      },
      fontFamily:{
        'Karla':['Karantina', 'sans-serif']
      },
      keyframes: {
        slieDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      animation:{
        slieDown: 'slieDown 0.4s ease-in-out',
      },
      backgroundImage:{
        'slider-bg':'url("../image/bgslider.jpg")',
      }
    },
  },
  plugins: [],
}

