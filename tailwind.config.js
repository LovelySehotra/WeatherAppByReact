/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero-pattern': "url('./assest/bgImage.jpg')",
        'footer-texture': "url('./assest/bgImage.jpg')",
    },
     backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    }
  },
  plugins: [],
}
}
