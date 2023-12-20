'use client';

import { IoMdMoon } from 'react-icons/io';
import React from 'react';
import { Button } from '../ui/Common/Button';
import HeaderMenu from '../ui/Header/HeaderMenu';
import useHeaderScroll from '../lib/useHeaderScroll';
import { FaHome } from 'react-icons/fa';
import { Link as Scroll } from 'react-scroll';

const headerTagStyles =
  'cursor-pointer items-center text-center text-md text-gray-dark outline-none transition-all duration-200 hover:bg-primary-hover/50 hover:text-black hover:shadow py-[4px] px-[8px] rounded-sm';

const Header = () => {
  const { isHeaderScrolled } = useHeaderScroll(800);
  return (
    <div className={`sticky top-0 ${isHeaderScrolled && 'backdrop-blur-sm'}`}>
      <div className='mx-auto my-0 hidden w-full items-center justify-between px-4 pt-4 first-letter:mx-auto md:flex lg:max-w-7xl'>
        <ul>
          <Scroll to='hero' smooth={true} offset={-60}>
            <Button intent='white' className='rounded-full'>
              <FaHome size={18} />
            </Button>
          </Scroll>
        </ul>
        <ul className='my-auto flex items-center gap-3'>
          <Scroll to='projects' smooth={true} offset={-60}>
            <span className={headerTagStyles}>Projects</span>
          </Scroll>
          <Scroll to='about' smooth={true} offset={-60}>
            <span className={headerTagStyles}>About</span>
          </Scroll>
          <Scroll to='experience' smooth={true} offset={-60}>
            <span className={headerTagStyles}>Experience</span>
          </Scroll>
          <HeaderMenu isSP={false} />
        </ul>
      </div>
      <div className='mx-auto my-0 flex w-11/12 items-center justify-between px-4 pt-4 md:hidden'>
        <Button intent='white' className='rounded-full'>
          <IoMdMoon size={18} />
        </Button>
        <HeaderMenu isSP={true} />
      </div>
    </div>
  );
};

export default Header;
