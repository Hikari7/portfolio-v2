import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/Common/Button';
import { CiMail } from 'react-icons/ci';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div className=' min-h-screen-hero  mx-auto flex w-full max-w-lg flex-col  md:max-w-xl lg:max-w-6xl'>
      <div className='gradiation-container absolute' />
      <div className='relative my-auto items-center text-black'>
        <div className='flex flex-col gap-6'>
          <div>
            <h1 className='text-[24px] lg:text-[32px]'>{t('intro')}</h1>
          </div>
          <div>
            <h1 className='text-[50px] font-bold tracking-wider text-primary-solid lg:text-[80px]'>
              {t('name')}
            </h1>
            <div className='text-[18px] font-light text-gray-dark lg:text-[24px]'>
              <h2>{t('sub-intro')}</h2>
              <h2>{t('sub-intro2')}</h2>
            </div>
          </div>
          <Button
            intent='accent'
            className='w-5/12 items-center lg:w-60'
            size='xl'
          >
            <a
              href='mailto:h.kobe712@gmail.com'
              className='flex flex-row justify-center gap-4'
            >
              <CiMail size={24} className='my-auto' />
              {t('contact')}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
