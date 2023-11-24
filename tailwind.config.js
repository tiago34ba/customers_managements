module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#A9C5BA',
      'neutralLight': '#FFFFFF',
      'neutral': '#707070',
      'neutralDark': '#000000',
      'danger': '#d12c32',
      
    },
    fontFamily: {
      'display': ['Muli'],
      'body': ['"Avenir"'],
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
