import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import ExternalLink from '../ui/Common/ExternakLink';
import Rax from '../components/Projects/Rax';
import FotographerAI from '../components/Projects/FotographerAI';
import Appointly from '../components/Projects/Appointly';
import Portfolio from '../components/Projects/Portfolio';
import NoteApp from '../components/Projects/Note';

const Projects = () => {
  const t = useTranslations('Projects');
  return (
    <div
      id='projects'
      className='min-h-screen-hero  mx-auto flex w-full max-w-lg flex-col md:max-w-md lg:max-w-7xl'
    >
      <h2 className='mb-8 text-left text-lg font-bold tracking-wider text-primary-solid'>
        Featured Projects
      </h2>
      <div className='flex flex-col gap-12 lg:gap-24'>
        <div className='lg:flex'>
          <div className='gap-8 lg:ml-auto lg:flex lg:w-[80%]'>
            <div className='my-auto'>
              <ExternalLink href='https://www.raxapp.ca/'>
                <Image
                  src='/products-rax-sp.png'
                  width={600}
                  height={600}
                  className='mx-auto block justify-center md:hidden'
                  alt='Screenshots of the rax product'
                />
                <Image
                  src='/products-rax-desktop.png'
                  width={630}
                  height={630}
                  className='hidden md:block'
                  alt='Screenshots of the rax product'
                />
              </ExternalLink>
            </div>
            <Rax />
          </div>
        </div>
        <div className='flex flex-col gap-8 lg:ml-auto lg:w-[80%] lg:flex-row'>
          <div className='lg:mt-0'>
            <ExternalLink href='https://appointly-mtg.vercel.app/'>
              <Image
                src='/products-appointly.png'
                width={630}
                height={630}
                alt='Screenshots of the appointly project'
              />
            </ExternalLink>
          </div>
          <Appointly />
        </div>
        <div className='flex flex-col gap-8 lg:ml-auto lg:w-[80%] lg:flex-row'>
          <div className='lg:mt-0'>
            <ExternalLink href='https://fotographer.ai/case'>
              <Image
                src='/fotographerAI.png'
                width={630}
                height={630}
                alt='Screenshots of the fotographerAI owned media'
              />
            </ExternalLink>
          </div>
          <FotographerAI />
        </div>
      </div>
      <div className='mt-8'>
        <div className='hidden  lg:flex'>
          <h2 className='mb-6 text-left text-lg font-bold tracking-wider text-gray-dark lg:mb-0'>
            Other Projects
          </h2>
          <div className='lg:ml-auto lg:w-[80%] lg:gap-8'>
            <div className='flex flex-col gap-6'>
              <Portfolio />
              <NoteApp />
            </div>
          </div>
        </div>
        <div className='block gap-4 lg:hidden'>
          <h2 className='mb-2 text-left text-lg font-bold tracking-wider text-gray-dark lg:mb-0'>
            Other Projects
          </h2>
          <div className='flex flex-col gap-6'>
            <Portfolio />
            <NoteApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
