/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#FF0000',
          black: '#000000',
        },
        neutral: {
          white: '#FFFFFF',
          gray: '#808080',
        }
      },
      backgroundColor: {
        dark: {
          primary: '#121212',
          secondary: '#1E1E1E',
        },
      },
      textColor: {
        dark: {
          primary: '#ffffff',
          secondary: '#A0A0A0',
        },
      },
      fontFamily: {
        'raider': ['Raider Crusader', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}