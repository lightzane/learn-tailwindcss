// ! Need to `npm i -D tailwindcss` for this type intellisense to work
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './docs/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
