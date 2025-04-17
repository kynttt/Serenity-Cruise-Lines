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
    },
    colors: {
      'primary': '#0068A5',
      blue: {
        900: '#1e3a8a', // Adjust this to match your brand color
      }
    },
  },
  },
  plugins: [],
}