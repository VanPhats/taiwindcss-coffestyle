/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
       'coffe':{
        100: '#a25f4b;',
        200: '#a43919',
       
       }
      },
      fontFamily:{
        'Karla':['Karantina', 'sans-serif']
      },
      keyframes: {
        slieDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        fadeIn: {
          from: {opacity:0}, to:{opacity:1},
        }
      },
      animation:{
        slieDown: 'slieDown 0.4s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
      },
      backgroundImage:{
        'slider-bg':"url('../image/bgslider.jpg')",
        'fm1': "url('./image/fm1.jpg)",
        'fm2': "url('./image/fm2.jpg')"
      }
    },
  },
  plugins: [],
}

