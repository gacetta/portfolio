import { type Config } from 'tailwindcss';

export default {
  content: ['*'],
  theme: {
    // extend: {
    //   colors: {
    // electric: '#db00ff',
    // ribbon: '#faa006',
    //   },
    // },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ccd5ae',
          dark: '#a8b090',
        },
        secondary: '#fcc006',
        black: {
          DEFAULT: '#372b1e',
        },
        gray: '#ede7da',
        white: '#fffef9',
        electric: '#db00ff',
        ribbon: '#faa006',
      },
    },
  },
  plugins: [],
} satisfies Config;
