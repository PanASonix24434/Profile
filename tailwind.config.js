module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'color, background-color, border-color',
      }
    },
  },
  plugins: [],
}
