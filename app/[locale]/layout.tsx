import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import './globals.css';
import { montserrat } from './lib/fonts';
import Header from './components/Header';
import { GradientDiv } from './ui/Common/GradientDiv';
import SocialMediaDiv from './components/SocialMediaDiv';
import Favicon from '../../favicon.png';

export const metadata: Metadata = {
  title: 'Hikari | Portfolio',
  description: 'A design-minded Front-end Engineer',
  icons: [{ rel: 'icon', url: Favicon.src }],
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
        }  selection:bg-[#FFF7C2]`}
      >
        <GradientDiv className='[#FFFDFD] min-h-screen  text-black'>
          <Header />
          {children}
          <SocialMediaDiv />
        </GradientDiv>
      </body>
    </html>
  );
}
