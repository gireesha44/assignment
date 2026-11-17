/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#10152B',
          950: '#090D1C',
          900: '#10152B',
          800: '#19203F',
          700: '#232C55',
          600: '#323E73',
          border: 'rgba(116, 87, 245, 0.18)',
        },
        violet: {
          DEFAULT: '#7457F5',
          electric: '#7457F5',
          hover: '#6143E6',
          light: '#8F76F7',
          soft: '#F0EDFF',
          tint: '#E7E2FE',
        },
        lavender: {
          DEFAULT: '#F0EDFF',
          light: '#F8F7FF',
          dark: '#DDD5FF',
        },
        offwhite: '#FAFAFF',
        skyblue: {
          DEFAULT: '#77C8F5',
          light: '#9AD6F8',
          dark: '#58B7ED',
          glow: 'rgba(119, 200, 245, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 25px -5px rgba(116, 87, 245, 0.35)',
        'glow-sky': '0 0 25px -5px rgba(119, 200, 245, 0.35)',
        'premium': '0 20px 40px -15px rgba(16, 21, 43, 0.08)',
        'card-hover': '0 25px 50px -12px rgba(116, 87, 245, 0.15)',
        'elevated': '0 30px 60px -20px rgba(16, 21, 43, 0.12), 0 0 1px 1px rgba(116, 87, 245, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2.5s infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
