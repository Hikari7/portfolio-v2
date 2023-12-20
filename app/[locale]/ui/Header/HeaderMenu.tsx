import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { IoMdMenu } from 'react-icons/io';
import { Button } from '../Common/Button';
import { IoLanguage } from 'react-icons/io5';
import { Link as Scroll } from 'react-scroll';

type HeaderMenuType = {
  isSP: boolean;
};

const HeaderMenu = ({ isSP }: HeaderMenuType) => {
  function onOpenChange(open: boolean) {
    document.body.style.paddingRight = open ? '0px' : '';
  }

  return (
    <DropdownMenu.Root modal={false} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild>
        <Button intent='white'>
          {isSP ? <IoMdMenu size={18} /> : <IoLanguage size={18} />}
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='animate-slideDownAndFade rounded-md bg-white p-2 shadow-md'
          sideOffset={5}
        >
          {isSP && (
            <>
              <DropdownMenu.Item className='relative flex h-[25px] w-full items-center rounded-[3px] px-2 text-center text-[13px] leading-none text-black outline-none data-[highlighted]:bg-primary-solid data-[highlighted]:text-white'>
                <Scroll to='projects' smooth={true} offset={-60}>
                  Project
                </Scroll>
              </DropdownMenu.Item>
              <DropdownMenu.Item className='relative flex h-[25px] w-full items-center rounded-[3px] px-2 text-center text-[13px] leading-none text-black outline-none data-[highlighted]:bg-primary-solid data-[highlighted]:text-white'>
                <Scroll to='about' smooth={true} offset={-60}>
                  About
                </Scroll>
              </DropdownMenu.Item>
              <DropdownMenu.Item className='relative flex h-[25px] w-full items-center rounded-[3px] px-2 text-center text-[13px] leading-none text-black outline-none data-[highlighted]:bg-primary-solid data-[highlighted]:text-white'>
                <Scroll to='experience' smooth={true} offset={-60}>
                  Experience
                </Scroll>
              </DropdownMenu.Item>
              <div>
                <DropdownMenu.Separator className='m-[5px] h-[1px] bg-gray' />
              </div>
            </>
          )}
          <DropdownMenu.Item className='relative flex h-[25px] w-full items-center rounded-[3px] px-2 text-center text-[13px] leading-none text-black outline-none data-[highlighted]:bg-primary-solid data-[highlighted]:text-white'>
            <a href='/en'>English</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='relative flex h-[25px] w-full items-center rounded-[3px] px-2 text-center text-[13px] leading-none text-black outline-none data-[highlighted]:bg-primary-solid data-[highlighted]:text-white'>
            <a href='/ja'>日本語</a>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className='fill-white' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default HeaderMenu;
