import React from 'react';
import ExternalLink from '../../ui/Common/ExternakLink';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { roboto } from '../../lib/fonts';
import { SkillTagGroup } from './SkillTagGroup';
import { useTranslations } from 'next-intl';

const FotographerAI = () => {
  const t = useTranslations('Projects');
  return (
    <div className='ml-auto w-full lg:w-1/3'>
      <ExternalLink href='https://fotographer.ai/'>
        <span className='flex cursor-pointer items-center gap-1 hover:opacity-60'>
          <h3 className='text-lg font-semibold'>Fotograoher AI</h3>
          <FaExternalLinkAlt />
        </span>
        <p className='text-xs text-gray-dark'>Owned media Web site</p>
      </ExternalLink>
      <div className='mt-4 flex flex-col gap-4'>
        <p className={`block ${roboto.className} text-sm leading-relaxed`}>
          {t('fotographerAiSummary')}
        </p>
        <div className='flex flex-wrap gap-2'>
          <SkillTagGroup
            skills={[
              'TypeScript',
              'React.js',
              'CSS Modules',
              'Firebase',
              'Figma',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FotographerAI;
