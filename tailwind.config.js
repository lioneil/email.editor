/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './config/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  variants: {
    extend: {
      opacity: ['hover', 'group-hover'],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
