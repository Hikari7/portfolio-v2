import React from 'react';
import { roboto } from '../../lib/fonts';

const Skills = () => {
  return (
    <>
      <h2 className='mb-2 text-left text-lg font-bold tracking-wider text-gray-dark md:mb-0'>
        Skills
      </h2>
      <div className='flex flex-col justify-between gap-4 md:ml-auto md:flex  md:flex-row md:gap-8  lg:w-[80%] lg:justify-normal'>
        <div>
          <span className='font-bold'>LANGUAGES</span>
          <ul className={`${roboto.className} block md:my-2`}>
            <li className='font-bold text-primary-accentDark'>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS/Sass</li>
          </ul>
        </div>
        <div>
          <div className='flex flex-col'>
            <span className='font-bold'>FRAMEWORKS</span>
          </div>
          <ul className={`${roboto.className} block md:my-2`}>
            <li className='font-bold text-primary-accentDark'>React.js</li>
            <li className='font-bold text-primary-accentDark'>Next.js</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>MUI</li>
            <li>ChakuraUI</li>
            <li>Storybook</li>
          </ul>
        </div>
        <div>
          <span className='font-bold'>OTHERS</span>
          <ul className={`${roboto.className} block lg:my-2`}>
            <li>Git</li>
            <li>Figma</li>
            <li>Supabase</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
