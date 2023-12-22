'use client';

/**
 * TODO: it's a temporary, will get back to this...maybe.
 */

import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';

interface GradientDivProps {
  children: ReactNode;
  className: string;
}

export const GradientDiv: React.FC<GradientDivProps> = ({
  children,
  className,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // console.log(mousePosition);

  // useEffect(() => {
  //   const updateMousePosition = (ev: any) => {
  //     setMousePosition({ x: ev.clientX, y: ev.clientY });
  //   };

  //   window.addEventListener('mousemove', updateMousePosition);

  //   return () => {
  //     window.removeEventListener('mousemove', updateMousePosition);
  //   };
  // }, []);

  return (
    <div
      style={{
        // backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #F4FBDF, #FFE9F0)`,
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #FDF7FD, #FBF7FE)`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
