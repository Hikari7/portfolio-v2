import React from 'react';
import { roboto } from '../../lib/fonts';

export enum Skill {
  ReactJS = 'React.js',
  Redux = 'Redux',
  ReactNative = 'React Native',
  TypeScript = 'TypeScript',
  CSSModules = 'CSS Modules',
  Supabase = 'Supabase',
  JavaScript = 'JavaScript',
  TailwindCSS = 'Tailwind CSS',
}

type SkillProps = {
  skill: Skill;
};

const SkillTag = ({ skill }: SkillProps) => {
  return (
    <span
      className={`items-center rounded-lg  border border-primary-intreractive bg-primary-action px-2 py-1 text-center text-xs font-bold ${roboto.className} text-primary-accentDark`}
    >
      {skill}
    </span>
  );
};

type SkillTagGroupProps = {
  skills: Skill[];
};

export const SkillTagGroup = ({ skills }: SkillTagGroupProps) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} />
      ))}
    </div>
  );
};
