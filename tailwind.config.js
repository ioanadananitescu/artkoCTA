/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
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
        'primary-orange': '#2F5061',
       'misty-blue':'#2F5061',
       'ivory':'#F4EAE6',
       'coral':'#E57F84',
        'mypink': '#D19385',
        'luxury-gray': 'b6b3aa',
        'marron-oscuro': '#F4EAE6',
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
