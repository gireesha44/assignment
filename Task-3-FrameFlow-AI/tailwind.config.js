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
        ink: {
          DEFAULT: '#171923',
          dark: '#11131b',
          light: '#1f2230',
        },
        charcoal: {
          DEFAULT: '#222633',
          dark: '#1b1e29',
          light: '#2a2f3f',
          surface: '#1e2230',
        },
        violet: {
          DEFAULT: '#8B72FF',
          hover: '#7A5EFF',
          soft: 'rgba(139, 114, 255, 0.15)',
          glow: 'rgba(139, 114, 255, 0.35)',
        },
        blue: {
          electric: '#5AA9FF',
          'electric-soft': 'rgba(90, 169, 255, 0.15)',
          'electric-glow': 'rgba(90, 169, 255, 0.35)',
        },
        softWhite: '#F7F7FB',
        mutedGrey: {
          DEFAULT: '#A3A8B8',
          light: '#C7CCD9',
          dark: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 35px -5px rgba(139, 114, 255, 0.3)',
        'glow-blue': '0 0 35px -5px rgba(90, 169, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
