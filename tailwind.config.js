/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        QR: "url('https://images.unsplash.com/photo-1685575112968-7dd67bc447b4')",
        Schedule: '',
        mesh: "url('/src/assets/mesh-837(1).png')",
      },
    },
  },

  plugins: [require('tailwindcss-animation-delay')],
});
