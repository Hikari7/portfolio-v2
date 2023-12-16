import React from 'react';
import { roboto } from '../../lib/fonts';
import { useTranslations } from 'next-intl';
import { SkillTagGroup } from './SkillTagGroup';
import { FaGithub } from 'react-icons/fa';
import ExternalLink from '../../ui/Common/ExternakLink';

const Portfolio = () => {
  const t = useTranslations('Projects');
  return (
    <div>
      <span className='cursor-pointer hover:opacity-60'>
        <ExternalLink
          href='https://github.com/Hikari7/portfolio-v2'
          className='flex gap-2'
        >
          <h3 className='text-lg font-semibold'>Portfolio</h3>
          <p className='text-lg'>👉</p>
          <div className='my-auto'>
            <FaGithub size={24} />
          </div>
        </ExternalLink>
      </span>
      <p className='text-xs text-gray-dark'>My personal project</p>
      <div className='flex flex-col gap-4'>
        <p
          className={`block ${roboto.className} mt-4 text-sm leading-relaxed `}
        >
          {t('PortfolioSummary')}
        </p>
        <div className='flex flex-wrap gap-2'>
          <SkillTagGroup
            skills={[
              'TypeScript',
              'React.js',
              'Tailwind CSS',
              'Next.js',
              'Figma',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
