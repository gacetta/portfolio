import { type Config } from 'tailwindcss';

export default {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#faa006',
      },
    },
  },
  plugins: [],
} satisfies Config;
