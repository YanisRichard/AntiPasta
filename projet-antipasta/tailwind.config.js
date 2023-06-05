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
      GrisNoir: "#7e7e7e",
     },
    
     "fontSize": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem"
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
