import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import ExternalLink from '../ui/Common/ExternakLink';

const SocialMediaDiv = () => {
  return (
    <div className='fixed bottom-8 right-7 flex flex-col gap-3'>
      <ExternalLink href='https://github.com/Hikari7'>
        <FaGithub size={28} className='hover:opacity-60' />
      </ExternalLink>
      <ExternalLink href='https://twitter.com/hk_Vancouver'>
        <FaXTwitter size={28} className='hover:opacity-60' />
      </ExternalLink>
      <ExternalLink href='https://www.linkedin.com/in/hikari-kobe/'>
        <FaLinkedin size={28} className='hover:opacity-60' />
      </ExternalLink>
    </div>
  );
};

export default SocialMediaDiv;
