import React from 'react';
import { roboto } from '../lib/fonts';

const Footer = () => {
  return (
    <div
      className={`${roboto.className} py-10 text-center text-[12px] leading-relaxed text-gray-dark`}
    >
      © 2023 | Designed & Coded By Hikari Kobe
    </div>
  );
};

export default Footer;
