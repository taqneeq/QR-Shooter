/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tq: {
          base: '#F7F7F7',
          surface: '#767676',
          text: '#1A1A1A',
          red: '#DE2F04',
          blue: '#183FE2',
        },
      },
    },
  },

  plugins: [require('tailwindcss-animation-delay')],
});
