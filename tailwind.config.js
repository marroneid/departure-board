/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {    
      colors: {
      // ...
      'ruter': {
        orange: '#EC700C',
        red: '#06b6d4',
        yellow: '#0e7490',
      },
      // ...
    },},
    fontFamily: {
      'sans': ['TID', 'ui-sans-serif', 'system-ui'],
    },

  },
  plugins: [],
}

// module.exports = {
//   theme: {

//   },
// }