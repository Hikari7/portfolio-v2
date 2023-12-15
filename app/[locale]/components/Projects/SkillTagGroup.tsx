import React from 'react';
import { roboto } from '../../lib/fonts';

export type Skill =
  | 'React.js'
  | 'Redux'
  | 'React Native'
  | 'TypeScript'
  | 'CSS Modules'
  | 'Supabase'
  | 'JavaScript'
  | 'Tailwind CSS';

const skillTagClassName = `items-center rounded-lg border border-primary-interactive bg-primary-action px-2 py-1 text-center text-xs font-bold ${roboto.className} text-primary-accentDark`;

interface SkillTagProps {
  skill: Skill;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
  <span className={skillTagClassName}>{skill}</span>
);

type SkillTagGroupProps = {
  skills: Skill[];
};

export const SkillTagGroup: React.FC<SkillTagGroupProps> = ({ skills }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} />
      ))}
    </div>
  );
};
