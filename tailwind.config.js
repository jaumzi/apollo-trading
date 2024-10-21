/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#638d4a',
      'secondary': '#DA6F19',
      'primary-bg': '#393939',
      'secondary-bg': '#131941',
      'page-bg': '#F5F5F5',
      'text': '#000',
      'text-contrast': '#fff',
      'link': '#648FFF',
      'instagram': '#E45DCF',
      'youtube': '#EB2323',
      'discord': '#B33DDC'
    },
    extend: {},
  },
  plugins: [],
}

