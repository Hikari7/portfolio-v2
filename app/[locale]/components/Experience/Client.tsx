import React from 'react';
import { roboto } from '../../lib/fonts';

type clientProps = {
  name: string;
  role: string;
  term: string;
};

const Client = ({ name, role, term }: clientProps) => {
  return (
    <>
      <div>
        <h3 className='font-semibold'>{name}</h3>
        <p className={`${roboto.className}`}>{role}</p>
      </div>

      <p
        className={`${roboto.className} block text-sm text-gray-dark lg:ml-auto`}
      >
        {term}
      </p>
    </>
  );
};

export default Client;
