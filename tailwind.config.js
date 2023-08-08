/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
              '3xl': '1700px',
            },
          
      
      colors: {
        'primary-orange': '#BAAD8A',
        'luxury': '#b7ad8d',
        'luxury-gray': 'b6b3aa',
        'marron-oscuro': '#504c49',
        'marron-unpococlaro': '#67625e',
        'marron-masclaro': '#7b7670',
        'marron-muyclaro': '#938a83',
        'marron-clarisimo': '#c4bfbb',
        'vernil':'#74a4a4'
        
      }
    },
  },
  plugins: [],
}
