'use client';

import { useEffect, useState } from 'react';

type UseHeaderScrollReturnType = {
  isHeaderScrolled: boolean;
};

const useHeaderScroll = (activePoint: number): UseHeaderScrollReturnType => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState<boolean>(false);

  useEffect(() => {
    const scrollWindow = () => {
      const ap = activePoint;
      let scroll = window.scrollY;
      if (ap <= scroll) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };

    window.addEventListener('scroll', scrollWindow);

    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, [activePoint]);

  return { isHeaderScrolled };
};

export default useHeaderScroll;
