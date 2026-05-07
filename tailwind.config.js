/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kamias: {
          50:  '#fafff2',
          100: '#eeffcc',
          200: '#d4f5a0',
          300: '#b5e550',
          400: '#9fd440',
          500: '#7db800',
          600: '#3a6b00',
          700: '#1a3a00',
          800: '#1a2a0a',
          900: '#111a06',
        },
        gold: {
          300: '#ffe066',
          400: '#ffd700',
          500: '#e6a800',
        },
      },
      fontFamily: {
        sans:    ['Nunito', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease both',
        'fade-down': 'fadeDown 0.6s ease both',
        'float':     'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
