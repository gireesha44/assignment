/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#153D35',
          dark: '#0e2b25',
          light: '#1f5349'
        },
        brand: {
          green: '#23866B',
          'green-hover': '#1d6f58',
          'green-light': '#319e80',
          mint: '#E7F4EC',
          'mint-light': '#F2FAF5',
          ivory: '#FAF9F5',
          charcoal: '#202A27',
          coral: '#F28C75',
          'coral-hover': '#e37860',
          'coral-soft': '#FDF2F0',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
        serif: [
          'Fraunces',
          'Georgia',
          'serif'
        ]
      },
      boxShadow: {
        'soft-sm': '0 1px 2px 0 rgba(21, 61, 53, 0.05)',
        'soft-md': '0 4px 12px 0 rgba(21, 61, 53, 0.07), 0 2px 4px 0 rgba(21, 61, 53, 0.04)',
        'soft-lg': '0 12px 28px -4px rgba(21, 61, 53, 0.1), 0 4px 12px -2px rgba(21, 61, 53, 0.05)',
        'soft-xl': '0 20px 40px -8px rgba(21, 61, 53, 0.12), 0 8px 16px -4px rgba(21, 61, 53, 0.06)',
        'coral-glow': '0 4px 20px -2px rgba(242, 140, 117, 0.35)',
        'green-glow': '0 4px 20px -2px rgba(35, 134, 107, 0.35)',
      }
    },
  },
  plugins: [],
}
