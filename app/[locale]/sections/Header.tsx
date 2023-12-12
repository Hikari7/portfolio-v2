'use client';

import { IoMdMoon } from 'react-icons/io';
import React from 'react';
import { Button } from '../ui/Common/Button';
import DropdownMenuDemo from '../ui/Header/Dropdown';

const headerTagStyles =
  'cursor-pointer items-center text-center text-md text-gray-dark outline-none transition-all duration-200 hover:bg-primary-hover/50 hover:text-black hover:shadow py-[4px] px-[8px] rounded-sm';

const Header = () => {
  return (
    <div className='sticky top-0'>
      <div className='mx-auto my-0 flex w-full max-w-7xl items-center justify-between px-4 pt-4 '>
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
          <DropdownMenuDemo />
        </ul>
      </div>
    </div>
  );
};

export default Header;
