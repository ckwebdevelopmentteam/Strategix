/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#DBCA93',
          dark: '#c9b87e',
          light: '#efe9d1',
        },
        dark: {
          DEFAULT: '#191919',
          card: '#1F1F1F',
          deep: '#000000',
          soft: '#2F2F2F',
        },
        brand: {
          red: '#DD4242',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 50px rgba(0,0,0,0.5)',
        gold: '0 0 30px rgba(219,202,147,0.12)',
        'gold-hover': '0 10px 25px rgba(219,202,147,0.4)',
      },
      animation: {
        'fade-up': 'fadeInUp 0.7s ease forwards',
        'fade-left': 'fadeInLeft 0.7s ease forwards',
        'fade-right': 'fadeInRight 0.7s ease forwards',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
