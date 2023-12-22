import { Noto_Sans_JP, Roboto, Montserrat } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300'],
  subsets: ['latin'],
  display: 'swap',
});

export const robotoBold = Roboto({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
});

export const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const notoJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
