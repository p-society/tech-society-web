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
  },
  plugins: [],
}

