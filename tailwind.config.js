/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"]
      },
      textStroke: {
        '1': '1px',
        '2': '2px',
      },
    },
  },
  plugins: [
    function ( { addUtilities } )
    {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '1.4px',
          '-webkit-text-stroke-color': 'var(--Primary-Black, #000)',
          'color': 'transparent',
        },
      }
      addUtilities( newUtilities, [ 'responsive', 'hover' ] )
    },
  ],
}

