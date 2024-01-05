'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import ExternalLink from '../ui/Common/ExternakLink';
import { IoMdMail } from 'react-icons/io';
import Tooltip from '../ui/Common/Tooltip';

const SocialMediaDiv = () => {
  return (
    <div className='fixed bottom-8 right-7 flex flex-col gap-3'>
      <Tooltip label={'GitHub'}>
        <ExternalLink href='https://github.com/Hikari7'>
          <FaGithub
            size={28}
            className='hover:opacity-60'
            style={{ color: '#28232F' }}
          />
        </ExternalLink>
      </Tooltip>
      <Tooltip label={'X'}>
        <ExternalLink href='https://twitter.com/hk_Vancouver'>
          <FaXTwitter
            size={28}
            className='hover:opacity-60'
            style={{ color: '#28232F' }}
          />
        </ExternalLink>
      </Tooltip>
      <Tooltip label={'LinkedIn'}>
        <ExternalLink href='https://www.linkedin.com/in/hikari-kobe/'>
          <FaLinkedin
            size={28}
            className='hover:opacity-60'
            style={{ color: '#28232F' }}
          />
        </ExternalLink>
      </Tooltip>
      <Tooltip label={'Mail'}>
        <a href='mailto:h.kobe712@gmail.com'>
          <IoMdMail
            size={28}
            className='hover:opacity-60'
            style={{ color: '#28232F' }}
          />
        </a>
      </Tooltip>
    </div>
  );
};

export default SocialMediaDiv;
