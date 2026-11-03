import nextVitals from 'eslint-config-next/core-web-vitals';
import tailwind from 'eslint-plugin-tailwindcss';

const eslintConfig = [
  ...nextVitals,
  tailwind.configs.recommended,
  {
    settings: {
      tailwindcss: {
        cssConfigPath: './app/[locale]/globals.css',
      },
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
];

export default eslintConfig;
