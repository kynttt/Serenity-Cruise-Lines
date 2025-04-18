/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        switzer: ['"Switzer"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        hand: ['"Handlee"', 'cursive'],
    },
    colors: {
      'primary': '#0068A5',
      'secondary': '#F0F9FF',
      'txtPrimary-color': '#0A0A0A',
      
      blue: {
        900: '#1e3a8a', 
        
      }
    },
  },
  },
  plugins: [],
}