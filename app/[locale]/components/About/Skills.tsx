import React from 'react';
import { roboto } from '../../lib/fonts';

const Skills = () => {
  return (
    <>
      <h2 className='mb-2 text-left text-lg font-bold tracking-wider text-gray-dark lg:mb-0'>
        Skills
      </h2>
      <div className='flex lg:ml-auto lg:flex lg:w-[80%] '>
        <div className='flex w-full flex-wrap justify-between lg:justify-normal lg:gap-8'>
          <div>
            <span className='font-bold'>LANGUAGES</span>
            <ul className={`${roboto.className} my-2`}>
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
            <ul className={`${roboto.className} my-2`}>
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
            <ul className={`${roboto.className} my-2`}>
              <li>Git</li>
              <li>Figma</li>
              <li>Supabase</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
