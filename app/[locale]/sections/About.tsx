import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import { roboto, robotoBold } from '../lib/fonts';
import Skills from '../components/About/Skills';

const About = () => {
  const t = useTranslations('About');
  return (
    <div
      id='about'
      className='mx-auto flex w-full max-w-lg flex-col md:max-w-md lg:max-w-7xl'
    >
      <div className='lg:flex'>
        <h2 className='mb-8 text-left text-lg font-bold tracking-wider text-primary-solid'>
          About
        </h2>
        <div className='lg:ml-auto lg:w-[80%] lg:gap-8'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-8 lg:mr-auto lg:flex-row'>
              <div
                className={`${roboto.className} mr-auto text-sm leading-relaxed lg:w-3/4`}
              >
                {t('desc')}
                <span
                  className={`font-extrabold text-primary-accentDark ${robotoBold.className}`}
                >
                  {t('descHighlighted')}
                </span>
                {t('desc2')}
                <span
                  className={`font-extrabold text-primary-accentDark ${robotoBold.className}`}
                >
                  {t('descHighlighted2')}
                </span>

                {t('desc3')}
                {t('desc4')}

                <p className='mt-4'>{t('desc5')}</p>
              </div>
              <Image
                src='/profile.jpg'
                width={180}
                height={180}
                alt='profile image'
                className='mx-auto items-center justify-center rounded-full lg:ml-auto'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 lg:flex'>
        <Skills />
      </div>
    </div>
  );
};

export default About;
