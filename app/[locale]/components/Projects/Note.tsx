import React from 'react';
import { roboto } from '../../lib/fonts';
import { useTranslations } from 'next-intl';
import { SkillTagGroup } from './SkillTagGroup';
import { FaGithub } from 'react-icons/fa';
import ExternalLink from '../../ui/Common/ExternakLink';

const NoteApp = () => {
  const t = useTranslations('Projects');
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <span className='block cursor-pointer hover:opacity-60'>
          <ExternalLink
            href='https://github.com/Hikari7/MERN_NoteApp'
            className='flex gap-2'
          >
            <h3 className='text-lg font-semibold'>Note App</h3>
            <div className='my-auto'>
              <FaGithub size={18} />
            </div>
          </ExternalLink>
        </span>
        <p className={`block ${roboto.className} text-sm leading-relaxed `}>
          {t('NoteAppSummary')}
        </p>
      </div>
      <div className='flex flex-wrap gap-2'>
        <SkillTagGroup
          skills={[
            'JavaScript',
            'React.js',
            'MUI',
            'Redux',
            'Figma',
            'MERN Stack',
          ]}
        />
      </div>
    </div>
  );
};

export default NoteApp;
