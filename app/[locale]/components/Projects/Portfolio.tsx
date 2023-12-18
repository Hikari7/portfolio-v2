import React from 'react';
import { roboto } from '../../lib/fonts';
import { useTranslations } from 'next-intl';
import { SkillTagGroup } from './SkillTagGroup';
import { FaGithub } from 'react-icons/fa';
import ExternalLink from '../../ui/Common/ExternakLink';

const Portfolio = () => {
  const t = useTranslations('Projects');
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <span className='block cursor-pointer hover:opacity-60'>
          <ExternalLink
            href='https://github.com/Hikari7/portfolio-v2'
            className='flex gap-2'
          >
            <h3 className='text-lg font-semibold'>Portfolio</h3>
            <div className='my-auto'>
              <FaGithub size={18} />
            </div>
          </ExternalLink>
        </span>
        <p className={`block ${roboto.className} text-sm leading-relaxed `}>
          {t('PortfolioSummary')}
        </p>
      </div>
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
  );
};

export default Portfolio;
