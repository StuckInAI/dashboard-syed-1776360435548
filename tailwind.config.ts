import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        mcred: {
          50: '#fff1f0',
          100: '#ffe0de',
          200: '#ffc5c1',
          300: '#ff9d97',
          400: '#ff6960',
          500: '#DA291C',
          600: '#c0241a',
          700: '#a01f16',
          800: '#841b13',
          900: '#6e1910'
        },
        mcyellow: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#FFC72C',
          300: '#FFB700',
          400: '#FFC72C',
          500: '#FF9800',
          600: '#e68900',
          700: '#cc7a00',
          800: '#a36200',
          900: '#7a4900'
        }
      }
    }
  },
  plugins: []
};

export default config;
