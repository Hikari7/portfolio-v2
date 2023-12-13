import { useTranslations } from 'next-intl';
import React from 'react';
import { Button } from '../ui/Common/Button';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ExternalLink from '../ui/Common/ExternakLink';
import SkillTag from '../components/Projects/skillTag';
import { roboto } from '../lib/fonts';

const Projects = () => {
  const t = useTranslations('Projects');
  return (
    <div className='min-h-screen-hero  mx-auto flex w-full max-w-lg flex-col md:max-w-md lg:max-w-5xl'>
      <h2 className='mb-8 text-left text-lg font-bold tracking-wider text-primary-solid'>
        Featured Projects
      </h2>
      <div className='lg:flex'>
        <div>
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
              width={600}
              height={600}
              className='hidden md:block'
              alt='Screenshots of the rax product'
            />
          </ExternalLink>
        </div>
        <div className='mx-auto w-full lg:w-1/3'>
          <ExternalLink href='https://www.raxapp.ca/'>
            <span className='flex cursor-pointer items-center gap-1 hover:opacity-60'>
              <h3 className='text-lg font-semibold'>rax (mobile App)</h3>
              <FaExternalLinkAlt />
            </span>
          </ExternalLink>
          <div className='mt-4 flex flex-col gap-4'>
            <p className={`block ${roboto.className}`}>{t('raxSummary')}</p>
            <div className='flex flex-wrap gap-2'>
              <SkillTag skill={'React Native'} />
              <SkillTag skill={'TypeScript'} />
              <SkillTag skill={'Redux'} />
              <SkillTag skill={'CSS Modules'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
