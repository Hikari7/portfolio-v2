import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import './globals.css';
import { roboto, notoJP, poppins, montserrat, shippori } from './lib/fonts';
import Header from './sections/Header';
import { GradientDiv } from './ui/Common/GradientDiv';
import SocialMediaDiv from './components/SocialMediaDiv';

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
        className={`${
          en ? montserrat.className : montserrat.className
        } selection:bg-primary-hover`}
      >
        <GradientDiv className='[#FFFDFD]  min-h-screen px-4'>
          <Header />
          {children}
          {/* Footer */}
          <SocialMediaDiv />
        </GradientDiv>
      </body>
    </html>
  );
}
