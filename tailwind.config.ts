import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C92D53',
          accent: '#661931',
        },
        gray: {
          DEFAULT: '#736F7A',
        },
        //textcolor
        black: {
          DEFAULT: '#28232F',
        },
      },
      backgroundColor: {
        primary: {
          DEFAULT: '#FEEDEF',
          hover: '#FDE1E5',
          action: '#FCD4DB',
        },
        primarySolid: {
          DEFAULT: '#E4526F',
          second: '#DC4665',
        },
        gray: {
          DEFAULT: '#F4F1F4',
          hover: '#EDEAEE',
          action: '#E7E4E9',
        },
      },
      borderColor: {
        primary: {
          uninteractive: '#F7C7CF',
          intreractive: '#EEB5C0',
          focus: '#E49DAC',
        },
        gray: {
          uninteractive: '#E0DEE3',
          intreractive: '#D6D4DC',
          focus: '#C4C3CC',
        },
      },
      boxShadow: {
        header: '4px 4px 10px 0px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [],
};
export default config;
