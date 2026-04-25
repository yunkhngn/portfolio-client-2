/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0D0D0D',
          light: '#F0EBE3',
          card: '#1A1A1A',
          'card-hover': '#222222',
        },
        accent: {
          DEFAULT: '#C05A30',
          light: '#E07A50',
          dark: '#8B3A1A',
        },
        muted: '#888888',
        border: '#2A2A2A',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'scroll-line': {
          '0%, 100%': { height: '20px', opacity: '0.3' },
          '50%': { height: '40px', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
