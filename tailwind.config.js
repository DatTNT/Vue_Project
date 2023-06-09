/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // O puedo usar colors.
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',
      },
      // Fuentes 
      fontFamily: {
        sans: ['Avenir', 'Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
    },
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: [
    // Por si quiero usar Forms https://github.com/tailwindlabs/tailwindcss-forms
    // eslint-disable-next-line global-require, no-undef
    require('@tailwindcss/forms'),
  ],
}

