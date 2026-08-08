/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        viz: {
          black: '#111827',
          primary: '#00CCCC',
          'primary-hover': '#00B3B3',
          white: '#ffffff',
          gray: '#4B5563',
          bg: '#ffffff',
          accent: '#E6FAFA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      spacing: {
        'section': '100px',
      }
    },
  },
  plugins: [],
}
