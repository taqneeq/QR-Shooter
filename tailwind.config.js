/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "QR": "url('https://images.unsplash.com/photo-1685575112968-7dd67bc447b4')",
        "Schedule" :""
      },
      keyframes: {
        'fade-up': {
          '0%': { transform: 'translateY(8px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'fade-down': {
          '0%': { transform: 'translateY(-4px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'fade-right': {
          '0%': { transform: 'translateX(-4px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'fade-left': {
          '0%': { transform: 'translateX(4px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      },
    
      animation: {
        'fade-up': 'fade-up 300ms backwards',
        'fade-down': 'fade-down 400ms backwards',
        'fade-right': 'fade-right 400ms backwards',
        'fade-left': 'fade-left 400ms backwards'
      }
    }
  },

  plugins: [require('tailwindcss-animation-delay')]
});
