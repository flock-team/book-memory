module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    opacity: ['group-hover'],
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
