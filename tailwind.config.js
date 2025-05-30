/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        esoft: {
          blue: '#003087',
          teal: '#00BFB3',
          'teal-dark': '#00a89d'
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 