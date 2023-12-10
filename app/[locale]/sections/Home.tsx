import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/Common/Button';

const Home = () => {
  const t = useTranslations('Hero');
  return (
    <>
      {/* <div className='rounded-sm border border-primary-uninteractive bg-primary p-4 text-black hover:border-primary-intreractive active:border-primary-focus'>
        <p>{t('sub-intro')}</p>
      </div> */}
      <div>
        {/* NOTE: useing <a/> tag to prevent FOUC  */}
        {/* <a href='/en'>in En</a>
        <br />
        <a href='/ja'>in Ja</a>
        <Button size='lg' intent='accent'>
          Contacts
        </Button>
        <Button size='lg'>Contacts</Button> */}
      </div>
    </>
  );
};

export default Home;
