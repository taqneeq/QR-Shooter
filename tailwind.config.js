/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        bgMoving: {
          from: { 'background-position': '0% 0%' },
          to: { 'background-position': '100% 0% ' },
        },
      },
    },
    animation: {
      bgMoving: 'bgMoving 7s ease infinite',
    },
  },
  plugins: [],
};
