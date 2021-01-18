const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  purge: {
    enabled: true,
    content: [
      './assets/scripts/index.js',
      'index.html'
    ],
  },
  theme: {
    extend: {
      keyframes: {
        wiggle: {
           '0%': { transform: 'rotate(0deg) scale(1)' },
           '50%': { transform: 'rotate(6deg) scale(1.05)' },
           '100%': { transform: 'rotate(-6deg) scale(1.1)' },
        },
        download: {
           '0%': { transform: 'rotate(0deg) scale(1)' },
           '20%': { transform: 'translateY(-0.375rem)' },
           '29%': { transform: 'translateY(-0.375rem)' },
           '100%': { transform: 'translateY(2rem)' },
        },
        perspective: {
          '0%': { transform: 'rotateX(-0deg) rotateY(0deg) scale(.8)' },
          '100%': { transform: 'rotateX(-12deg) rotateY(12deg) scale(.8)' }
        }
      },
      animation: {
        wiggle: 'wiggle .25s ease-in-out forwards',
        perspective: 'perspective .5s ease-in-out forwards',
        download: 'download 1s ease-in-out forwards',
      }
    },
    colors
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      scale: ['active', 'group-hover'],
      borderColor: ['dark'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-animatecss')({
        classes: ['animate__jello','animate__rubberBand', 'animate__animated', 'animate__fadeIn', 'animate__bounceIn', 'animate__lightSpeedOut'],
        variants: ['responsive', 'hover', 'reduced-motion'],
      }),
  ]
}
