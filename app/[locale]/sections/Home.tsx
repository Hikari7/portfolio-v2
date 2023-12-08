import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('Hero');
  return (
    <>
      <div className='rounded-sm border border-primary-uninteractive bg-primary p-4 text-black hover:border-primary-intreractive active:border-primary-focus'>
        <p>{t('sub-intro')}</p>
      </div>
      <div>
        <Link href='/en'>in En</Link>
        <br />
        <Link href='/ja'>in Ja</Link>
      </div>
    </>
  );
};

export default Home;
