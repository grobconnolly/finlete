/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'pjs': ['Plus Jakarta Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#388B3E',
          700: '#2B6A2D'

        },
        secondary: {
          DEFAULT: '#2B445C',

        },
        neutral: {
          DEFAULT: '#2B445C',
          100: '#0C0A09',
          200: '#262626',
          300: '#404040',
          400: '#A3A3A3',
          500: '#737373',
          900: '#F5F5F5',
        },
        error: {
          60: '#EB5757'
        },
        'text-primary-white': '#FAFAFA',
        'text-primary-black': '#0A0A0A',
        'text-secondary-black': '#525252',
        'text-secondary-gray': '#A3A3A3',
        'text-primary-green': '#44A647',
        'text-surface-black': '#1E1E1E',
        'gray-3': '#828282',
        'dark-green': '#317836',
        'light-green': '#93C98F',
        'overlay': '#0C0A09',
        'neu-200': '#E5E5E5',
        'neu-300': '#D4D4D4',
        'neu-400': '#525252',
        'floating-cta': 'rgba(12, 10, 9, 0.72)',
        'modal-overlay': '#1E1E1E',
        'hero-video-overlay': 'rgba(12, 10, 9, 0.80)'
      },
      backgroundImage: {
        'hero-text': ' linear-gradient(91deg, #44A647 0%, #FFF 100%)',
        'calculator': 'linear-gradient(0deg, #262626 0%, #404040 100%)'
      },
      borderColor: {
        'border-color': '#ECECEC',
        'border-gray': '#E5E7EB',
        'border-input': '#D1D1D1',
        'borderInputTwo': '#E9E9E9'
      },
      boxShadow: {
        'shadow-dropdown': ' 0px 4px 16px 0px rgba(12, 10, 9, 0.24)'
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin': 'rotate 2s linear infinite',
      }
    },
  },
  plugins: [],
}

