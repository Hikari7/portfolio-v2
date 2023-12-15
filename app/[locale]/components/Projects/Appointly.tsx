import React from 'react';
import ExternalLink from '../../ui/Common/ExternakLink';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { roboto } from '../../lib/fonts';
import { SkillTagGroup } from './SkillTagGroup';
import { useTranslations } from 'next-intl';

const Appointly = () => {
  const t = useTranslations('Projects');
  return (
    <div className='ml-auto w-full lg:w-1/3'>
      <div className='flex gap-4'>
        <ExternalLink href='https://appointly-mtg.vercel.app/'>
          <span className='flex cursor-pointer items-center gap-1 hover:opacity-60'>
            <h3 className='text-lg font-semibold'>Appointly</h3>
            <FaExternalLinkAlt />
          </span>
        </ExternalLink>
      </div>
      <p className='text-xs text-gray-dark'>My personal project</p>
      <ExternalLink
        href='https://github.com/Hikari7/Appointly'
        className='flex items-center gap-2 hover:opacity-60'
      >
        <p>See the Github repository 👉</p>
        <FaGithub />
      </ExternalLink>
      <div className={`mt-4 flex flex-col gap-4 ${roboto.className}`}>
        <p className={`block  text-sm leading-relaxed`}>
          {t('AppointlySummary')}
        </p>
        <div>
          <p className='block text-xs leading-relaxed'>{t('AppointlyDemo')}</p>
          <ul className='text-xs text-primary-accentDark'>
            <li>
              username:
              <span className='border-b-[1px] border-primary-accentDark'>
                test2023@gmail.com
              </span>
            </li>
            <li>
              passowrd:{' '}
              <span className='border-b-[1px] border-primary-accentDark'>
                {' '}
                Password123!?
              </span>
            </li>
          </ul>
        </div>
        <div className='flex flex-wrap gap-2'>
          <SkillTagGroup
            skills={[
              'React.js',
              'JavaScript',
              'Tailwind CSS',
              'Redux',
              'Figma',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointly;
