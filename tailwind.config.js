const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './index.html',
      './index.js',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
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
