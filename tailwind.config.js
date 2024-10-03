/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'cor-fundo': '#13293D',
        'intercalar1': '#142048',
        'intercalar2': '#172552',
        'intercalar3': '#172554ec',
        'cor-text': '#fff',
        'portifolio': 'rgb(225, 13, 0)',
        // rgb(225, 217,0)
      },
      fontFamily:{
        'Sora': ['Sora', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

