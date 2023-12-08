import type { Metadata } from 'next';

import './globals.css';
import { roboto } from './lib/fonts';

export const metadata: Metadata = {
  title: 'Hikari Kobe',
  description: 'A design-minded Front-end Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* TODO:add ternary operator to set JP fonts*/}
      <body className={`${roboto.className} bg-[#FFFDFD]`}>
        {/* header */}
        {children}
        {/* social media icons */}
      </body>
    </html>
  );
}
