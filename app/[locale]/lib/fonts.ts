import { Noto_Sans_JP, Roboto, Poppins } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const poppins = Poppins({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const notoJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
