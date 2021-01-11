const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './index.html',
    './index.js',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      scale: ['active', 'group-hover'],
      borderColor: ['dark']
    },
  },
  plugins: [],
}
