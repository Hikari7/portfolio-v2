import React from 'react';
import { roboto } from '../../lib/fonts';
import { useTranslations } from 'next-intl';
import { SkillTagGroup } from './SkillTagGroup';
import { FaGithub } from 'react-icons/fa';
import ExternalLink from '../../ui/Common/ExternakLink';

const NoteApp = () => {
  const t = useTranslations('Projects');
  return (
    <div>
      <span className='cursor-pointer hover:opacity-60'>
        <ExternalLink
          href='https://github.com/Hikari7/MERN_NoteApp'
          className='flex gap-2'
        >
          <h3 className='text-lg font-semibold'>Note App</h3>
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
          {t('NoteAppSummary')}
        </p>
        <div className='flex flex-wrap gap-2'>
          <SkillTagGroup
            skills={[
              'TypeScript',
              'React.js',
              'MUI',
              'Redux',
              'Figma',
              'MERN Stack',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteApp;
