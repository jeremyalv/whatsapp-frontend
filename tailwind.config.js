/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
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
        "teal-green": {
          "dark": "#075E54",
          "light": "#128C7E",
        },
        "light-green": "25D366",
        "outgoing-chat-bubble": "#DCF8C6",
        "chat-background": "#ECE5DD",
        "dark-chat-background": "#C3AD94",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
