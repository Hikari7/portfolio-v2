'use client';

import { IoMdMoon } from 'react-icons/io';
import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import DropdownMenuDemo from './Dropdown';

const HeaderNav = () => {
  return (
    <div className=' sticky top-0'>
      <div className='mx-auto my-0 flex w-full max-w-5xl items-center justify-between p-4 md:mb-10'>
        <ul>
          <Button intent='white' className='rounded-full'>
            <IoMdMoon size={18} />
          </Button>
        </ul>
        <ul className='flex gap-3'>
          <button className='text-pimary cursor-pointer rounded-md px-2 py-1 text-center text-sm font-extralight text-black underline-offset-4 hover:bg-white hover:text-black hover:shadow'>
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

export default HeaderNav;

{
  /* {ja ? (
            <li
              className='cursor-pointer rounded-md px-2 py-1 text-center text-sm font-extralight text-black underline-offset-4 hover:bg-white hover:text-black hover:shadow'
              onClick={handleSwitchLang}
            >
              <Link href='/en' locale='en'>
                English
              </Link>
            </li>
          ) : (
            <li
              className='cursor-pointer rounded-md px-2 py-1 text-center text-sm font-extralight text-black underline-offset-4 hover:bg-white hover:text-black hover:shadow'
              onClick={handleSwitchLang}
            >
              <Link href='/ja' locale='ja'>
                日本語
              </Link>
            </li>
          )} */
}
