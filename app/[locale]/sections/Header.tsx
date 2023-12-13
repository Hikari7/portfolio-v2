'use client';

import { IoMdMoon } from 'react-icons/io';
import React from 'react';
import { Button } from '../ui/Common/Button';
import DropdownMenuDemo from '../ui/Header/HeaderMenu';
import HeaderMenu from '../ui/Header/HeaderMenu';

const headerTagStyles =
  'cursor-pointer items-center text-center text-md text-gray-dark outline-none transition-all duration-200 hover:bg-primary-hover/50 hover:text-black hover:shadow py-[4px] px-[8px] rounded-sm';

const Header = () => {
  return (
    <div className='sticky top-0'>
      <div className='my-0 hidden w-full items-center justify-between px-4 pt-4 first-letter:mx-auto  md:flex lg:max-w-7xl'>
        <ul>
          <Button intent='white' className='rounded-full'>
            <IoMdMoon size={18} />
          </Button>
        </ul>
        <ul className='my-auto flex items-center gap-3'>
          <a>
            <span className={headerTagStyles}>Project</span>
          </a>
          <a>
            <span className={headerTagStyles}>About</span>
          </a>
          <a>
            <span className={headerTagStyles}>Experience</span>
          </a>
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
