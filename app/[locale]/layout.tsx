import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import './globals.css';
import { roboto, notoJP } from './lib/fonts';

export const metadata: Metadata = {
  title: 'Hikari Kobe',
  description: 'A design-minded Front-end Engineer',
};

const locales = ['en', 'ja'];

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  if (!locales.includes(locale as any)) notFound();
  const en = locale === 'en';
  return (
    <html lang={locale}>
      <body
        className={`${en ? roboto.className : notoJP.className} bg-[#FFFDFD]`}
      >
        {/* header */}
        {children}
        {/* social media icons */}
      </body>
    </html>
  );
}
