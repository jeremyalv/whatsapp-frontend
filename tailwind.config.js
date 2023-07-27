/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f0fdf4',
          '100': '#dcfce7',
          '200': '#bbf7d0',
          '300': '#86efad',
          '400': '#4ade81',
          '500': '#25d366',
          '600': '#16a34b',
          '700': '#15803e',
          '800': '#166534',
          '900': '#14532d',
          '950': '#052e16',
        },
      }
    },
  },
  plugins: [],
}
