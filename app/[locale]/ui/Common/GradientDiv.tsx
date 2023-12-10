'use client';

import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';

interface GradientDivProps {
  children: ReactNode;
  className: string;
}

export const GradientPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export const GradientDiv: React.FC<GradientDivProps> = ({
  children,
  className,
}) => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient( circle at ${
          GradientPosition().x
        }px ${GradientPosition().y}px, #F4FBDF ,#FFEDED )`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
