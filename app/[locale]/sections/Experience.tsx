import React from 'react';
import Client from '../components/Experience/Client';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Experience = () => {
  const DynamicResumeLink = dynamic(
    () => import('../components/Experience/ResumeLink'),
    { ssr: false }
  );

  return (
    <div
      id='experience'
      className='mx-auto flex w-full max-w-lg flex-col md:max-w-md lg:max-w-7xl'
    >
      <div className='mt-8'>
        <div className='gap-4 lg:flex'>
          <h2 className='mb-8 text-left text-lg font-bold tracking-wider text-primary-solid'>
            Experience
          </h2>

          <div className='flex flex-col gap-4 lg:ml-auto lg:w-[80%]'>
            <div className='flex flex-col lg:w-3/4 lg:flex-row lg:justify-between'>
              <Client
                name={'Money Forward, Inc.'}
                role={'Web Front-end developer'}
                term={'March 2024 - Present'}
              />
            </div>
            <div className='flex flex-col lg:w-3/4 lg:flex-row lg:justify-between'>
              <Client
                name={'rax App Inc.'}
                role={'Mobile Front-end developer'}
                term={'Aug 2023 - Jan 2024'}
              />
            </div>
            <div className='flex flex-col lg:w-3/4 lg:flex-row lg:justify-between'>
              <Client
                name={'株式会社Lbose'}
                role={'Web Front-end developer'}
                term={'Aug 2023 - Feb 2024'}
              />
            </div>
            <div className='flex flex-col lg:w-3/4 lg:flex-row lg:justify-between'>
              <Client
                name={'株式会社アプロリンク'}
                role={'Web Front-end developer, Web designer'}
                term={'May 2023 - Dec 2024'}
              />
            </div>
            <div className='flex flex-col lg:w-3/4 lg:flex-row lg:justify-between'>
              <Client
                name={'Fotographer AI株式会社'}
                role={'Web Front-end developer'}
                term={'Jun 2023 - Jun 2023'}
              />
            </div>
            <div className='flex flex-col lg:w-3/4 lg:flex-row lg:justify-between'>
              <Client
                name={'株式会社 EasyTechnology'}
                role={'Designer assistant'}
                term={'Apr 2023 - Jun 2023'}
              />
            </div>
            <div className='flex flex-col lg:w-3/4 lg:flex-row lg:justify-between'>
              <Client
                name={'日本コンセントリクス株式会社'}
                role={'Technical operater, Trainer, SME'}
                term={'May 2019 - Feb 2022'}
              />
            </div>
          </div>
        </div>
        <span>
          <DynamicResumeLink />
        </span>
      </div>
    </div>
  );
};

export default Experience;
