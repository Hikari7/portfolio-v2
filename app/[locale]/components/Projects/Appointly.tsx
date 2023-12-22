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
      <div className='flex gap-2'>
        <ExternalLink href='https://appointly-mtg.vercel.app/'>
          <span className='flex cursor-pointer items-center gap-1 hover:opacity-60'>
            <h3 className='text-lg font-semibold'>Appointly</h3>
            <FaExternalLinkAlt size={18} />
          </span>
        </ExternalLink>
        <ExternalLink
          href='https://github.com/Hikari7/Appointly'
          className='my-auto hover:opacity-60'
        >
          <FaGithub size={22} />
        </ExternalLink>
      </div>
      <p className='text-xs text-gray-dark'>My personal project</p>
      <ExternalLink
        href='https://github.com/Hikari7/Appointly'
        className='flex items-center gap-2 hover:opacity-60'
      ></ExternalLink>

      <div className={`mt-4 flex flex-col gap-4 ${roboto.className}`}>
        <p className={`block  text-sm leading-relaxed`}>
          {t('AppointlySummary')}
        </p>
        <div>
          <p className='items-center text-xs  text-primary-accentDark'>
            <ExternalLink
              href='https://x.com/hk_Vancouver/status/1653588900278063104?s=20'
              className='flex items-center hover:opacity-60'
            >
              {t('AppointlyReview')}
              <FaExternalLinkAlt size={12} />
            </ExternalLink>
          </p>
          <p className='block text-xs leading-relaxed  text-primary-accentDark'>{t('AppointlyDemo')}</p>
          <ul className='text-xs'>
            <li>
              username:{' '}
              <span className='border-b-[1px]'>test2023@gmail.com</span>
            </li>
            <li>
              passowrd: <span className='border-b-[1px]'>Password123!?</span>
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
