'use client';

import { IoMdMoon } from 'react-icons/io';
import React from 'react';
import { Button } from '../ui/Common/Button';
import DropdownMenuDemo from '../ui/Header/Dropdown';

const Header = () => {
  return (
    <div className=' sticky top-0'>
      <div className='mx-auto my-0 flex w-full max-w-5xl items-center justify-between p-4 md:mb-10'>
        <ul>
          <Button intent='white' className='rounded-full'>
            <IoMdMoon size={18} />
          </Button>
        </ul>
        <ul className='flex gap-3'>
          <button className='cursor-pointer rounded-md px-2 py-1 text-center text-sm font-extralight text-black underline-offset-4 hover:bg-white hover:text-black hover:shadow'>
            <a>Project</a>
          </button>
          <button className='cursor-pointer rounded-md px-2 py-1 text-center text-sm font-extralight text-black underline-offset-4 hover:bg-white hover:text-black hover:shadow'>
            <a>About</a>
          </button>
          <button className='cursor-pointer rounded-md px-2 py-1 text-center text-sm font-extralight text-black underline-offset-4 hover:bg-white hover:text-black hover:shadow'>
            <a>Experience</a>
          </button>
          <DropdownMenuDemo />
        </ul>
      </div>
    </div>
  );
};

export default Header;
