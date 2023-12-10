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
          DEFAULT: '#FEEDEF',
          hover: '#FDE1E5',
          action: '#FCD4DB',
          accent: '#C92D53',
          accentDark: '#661931',
          solid: '#E4526F',
          solidHover: '#DC4665',
          solidAction: '#DC4665',
        },
        gray: {
          light: 'E8E8EC',
          DEFAULT: '#D9D9E0',
          dark: '#65636E',
          hover: '#CDCED7',
          action: '#B8BBC7',
        },
        //textcolor
        black: '#28232F',
      },

      borderColor: {
        primary: {
          uninteractive: '#F7C7CF',
          intreractive: '#EEB5C0',
          focus: '#E49DAC',
        },
        // gray: {
        //   uninteractive: '#E0DEE3',
        //   intreractive: '#D6D4DC',
        //   focus: '#C4C3CC',
        // },
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
    animation: {
      slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
    plugins: [],
  },
};

export default config;
