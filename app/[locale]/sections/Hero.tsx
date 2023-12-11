import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/Common/Button';
import { CiMail } from 'react-icons/ci';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div className='min-h-screen-100  mx-auto flex max-w-lg flex-col md:max-w-xl lg:max-w-7xl'>
      <div className='mt-20 text-black'>
        <div className='flex flex-col gap-12'>
          <div>
            <h1 className='text-[24px] lg:text-[48px]'>{t('intro')}</h1>
          </div>
          <div>
            <h1 className='text-[50px] font-extrabold tracking-wider lg:text-[80px] '>
              {t('name')}
            </h1>
            <div className='text-[24px] font-light text-gray-dark lg:text-[32px]'>
              <h2>{t('sub-intro')}</h2>
              <h2>{t('sub-intro2')}</h2>
            </div>
          </div>
          <Button intent='outline' className='w-48 items-center'>
            <a
              href='mailto:h.kobe712@gmail.com'
              className='flex flex-row justify-center gap-4'
            >
              <CiMail size={16} className='my-auto' />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
