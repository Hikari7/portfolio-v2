import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import './globals.css';
import { roboto } from './lib/fonts';
import { NextIntlClientProvider } from 'next-intl';

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

  return (
    <html lang={locale}>
      {/* TODO:add ternary operator to set JP fonts*/}
      {/* <NextIntlClientProvider messages={messages}> */}
      <body className={`${roboto.className} bg-[#FFFDFD]`}>
        {/* header */}
        {children}
        {/* social media icons */}
      </body>
      {/* </NextIntlClientProvider> */}
    </html>
  );
}
