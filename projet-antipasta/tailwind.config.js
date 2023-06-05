/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      Gris2: "#e8e8e8",
      Jaune: "#ffd130",
      Gris1: "#f5f5f5",
      Typoajoutgrisnoir: "#5d5d5d",
      black: "#000000",
     },
    
     fontSize: {
      xl: "1rem",
      IIxl: "1.125rem",
      IIIxl: "1.25rem",
      IVxl: "1.5rem",
      Vxl: "1.875rem",
      VIxl: "2.25rem",
      VIIxl: "3rem",
      VIIIxl: "3.75rem",
      IXxl: "4.5rem",
      Xxl: "6rem",
      XIxl: "8rem"
     },
     fontFamily: {
      nunitosans: ['Nunito Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      "caveat": "Caveat",
      "arial": "Arial"
     },
     borderRadius: {
      none: '0',
      xs: '0.125rem',
      sm: '0.3125rem',
      default: '0.4375rem',
      lg: '2.1875rem',
      xl: '5.0888671875rem',
      full: '9999px'
     },
     extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
     }
    },
  plugins: [ ],
}
