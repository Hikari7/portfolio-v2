import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import './globals.css';
import { roboto, notoJP } from './lib/fonts';
import HeaderNav from './ui/HeaderNav';
import { GradientDiv } from './ui/GradientDiv';

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
      <body className={`${en ? roboto.className : notoJP.className} `}>
        <GradientDiv className='[#FFFDFD] min-h-screen'>
          <HeaderNav />
          {children}
          {/* social media icons */}
        </GradientDiv>
      </body>
    </html>
  );
}
