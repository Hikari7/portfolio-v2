import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import ExternalLink from '../ui/Common/ExternakLink';
import ProjectCard from '../components/Projects/Rax';
import Rax from '../components/Projects/Rax';

const Projects = () => {
  const t = useTranslations('Projects');
  return (
    <div className='min-h-screen-hero  mx-auto flex w-full max-w-lg flex-col md:max-w-md lg:max-w-5xl'>
      <h2 className='mb-8 text-left text-lg font-bold tracking-wider text-primary-solid'>
        Featured Projects
      </h2>
      <div className='lg:flex'>
        <div className='lg:ml-auto lg:flex lg:w-[80%] lg:gap-6'>
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
                width={500}
                height={600}
                className='hidden md:block'
                alt='Screenshots of the rax product'
              />
            </ExternalLink>
          </div>
          <Rax />
        </div>
      </div>
    </div>
  );
};

export default Projects;
