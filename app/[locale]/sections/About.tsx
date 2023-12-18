import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import ExternalLink from '../ui/Common/ExternakLink';
import { roboto } from '../lib/fonts';

const About = () => {
  const t = useTranslations('About');
  return (
    <div className='min-h-screen-hero mx-auto flex w-full max-w-lg flex-col md:max-w-md lg:max-w-7xl'>
      <div className=' lg:flex'>
        <h2 className='mb-8 text-left text-lg font-bold tracking-wider text-primary-solid'>
          About
        </h2>
        <div className='lg:ml-auto lg:w-[80%] lg:gap-8'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col lg:mr-auto lg:flex-row gap-8'>
              <p
                className={`block ${roboto.className} mr-auto text-sm leading-relaxed lg:w-2/3`}
              >
                {t('desc')}
              </p>
              <Image
                src='/profile.jpg'
                width={240}
                height={240}
                alt='profile image'
                className='mx-auto items-center justify-center rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
