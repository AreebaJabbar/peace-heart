/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0b3d78',
          dark: '#071f3d',
          deep: '#071f3d',
          alt: '#122a52',
        },
        red: {
          DEFAULT: '#e2242c',
          dark: '#c81e25',
          reddark: '#c81e25',
        },
        blue: '#1c5bb0',
        bglight: '#eef4fb',
        bgsoft: '#f5f8fc',
        bgredsoft: '#fdf1f2',
        muted: '#5b6579',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
