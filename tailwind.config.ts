/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '370px',
      tablet: '768px',
      // => @media (min-width: 640px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      black: '#1E1E1E',
      'black-rgba': 'rgba(0, 0, 0, 0.54)',
      white: '#fff',
    },
    fontFamily: {
      manrope: ['var(--font-manrope)'],
      roboto: ['var(--font-roboto)'],
    },
    fontSize: {
      h1: [
        '200px',
        {
          fontWeight: '600',
        },
      ],
      h2: [
        '150px',
        {
          fontWeight: '600',
        },
      ],
      h3: [
        '75px',
        {
          fontWeight: '600',
        },
      ],
      title80: ['80px'],
      title60: ['60px'],
      body24: [
        '24px',
        {
          fontWeight: '400',
        },
      ],
      body20: [
        '20px',
        {
          fontWeight: '400',
        },
      ],
      body18: [
        '18px',
        {
          fontWeight: '400',
        },
      ],
      body16: ['16px'],
      body13: ['13px'],
      body11: ['11px'],
    },
    variants: {
      extend: {
        display: ['group-hover'],
        cursor: ['disabled'],
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
