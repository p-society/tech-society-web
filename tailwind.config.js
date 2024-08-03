/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': 'rgba(12, 10, 10, 1)',
        'custom-blue': 'rgba(51, 82, 231, 1)',
        'custom-white': 'rgba(217, 217, 217, 1)',
      },
    },
    fontFamily:{
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto","sans-serif"]
    },
    fontSize: {
      0.5: '0.5rem',
      0.6: '0.6rem',
      0.7: '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',  
    }
  },
  plugins: [],
}

