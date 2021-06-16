const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sea-green': '#23f0c7',
        'cameo-pink': '#e2b4bd',
        'off-white': '#f0f0f0',
      }
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      violet: colors.violet,
      teal: colors.teal,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
