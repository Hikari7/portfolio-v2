import { useTranslations } from 'next-intl';
import React from 'react';
import { Button } from '../ui/Common/Button';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ExternalLink from '../ui/Common/ExternakLink';
import SkillTag from '../components/Projects/skillTag';

const Projects = () => {
  const t = useTranslations('Projects');
  return (
    <div className='min-h-screen-hero  mx-auto flex w-full max-w-lg flex-col  md:max-w-md lg:max-w-5xl'>
      <h2 className='mb-6 text-left text-lg font-bold tracking-wider text-primary-solid'>
        Featured Projects
      </h2>
      <ExternalLink href='https://www.raxapp.ca/'>
        <Image
          src='/products-rax-sp.png'
          width={300}
          height={300}
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
      {/* description */}
      <div className='mx-auto w-full'>
        <ExternalLink href='https://www.raxapp.ca/'>
          <span className='flex w-5/12 cursor-pointer items-center gap-1 hover:opacity-60'>
            <h3 className='text-lg font-semibold'>rax (mobile App)</h3>
            <FaExternalLinkAlt />
          </span>
        </ExternalLink>
        <p>{t('raxSummary')}</p>
        <div className='flex gap-2'>
          <SkillTag skill={'React Native'} />
          <SkillTag skill={'TypeScript'} />
          <SkillTag skill={'Redux'} />
          <SkillTag skill={'CSS Modules'} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
