import plugin from 'tailwindcss/plugin'

const themer = require('tailwindcss-themer')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    themer({
      defaultTheme: {
        extend: {
          backgroundColor: ({ theme }) => ({
            base: theme('colors.blue.900')
          })
        }
      }
    }),

    plugin(function ({ addBase, theme }) {
      addBase({
        '#plugin': { backgroundColor: theme('backgroundColor.base') }
      })
    })
  ],
}
