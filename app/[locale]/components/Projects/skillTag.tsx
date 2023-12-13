import React from 'react';
import { roboto } from '../../lib/fonts';

type Skill = {
  skill: 'React.js' | 'Redux' | 'React Native' | 'TypeScript' | 'CSS Modules';
};

const skillTag = ({ skill }: Skill) => {
  return (
    <span
      className={`items-center rounded-lg  border border-primary-intreractive bg-primary-action px-2 py-1 text-center text-xs font-bold ${roboto.className} text-primary-accentDark`}
    >
      {skill}
    </span>
  );
};

export default skillTag;
