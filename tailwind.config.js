/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage:{
        'intro-section-img': "url('/image/introSection.jpg')"
      },
      fontFamily:{
        'satoshi': ['Satoshi']
      },
      colors:{
        'aksen': '#0d9488'
      }
    },
  },
  plugins: [],
}

