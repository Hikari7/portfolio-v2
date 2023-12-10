import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Button } from '../Common/Button';
import { IoLanguage } from 'react-icons/io5';
const DropdownMenuDemo = () => {

  function onOpenChange(open: boolean) {
    document.body.style.paddingRight = open ? "0px" : "";
}

  return (
    <DropdownMenu.Root modal={false} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild>
        <Button intent='white'>
          <IoLanguage size={18} />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='animate-slideDownAndFade rounded-md bg-white p-2 shadow-md'
          sideOffset={5}
        >
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

export default DropdownMenuDemo;
