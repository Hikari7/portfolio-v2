import React from 'react';
import * as PrimitiveTooltip from '@radix-ui/react-tooltip';

interface IconProps {
  children: React.ReactNode;
  label: string;
}

const Tooltip = ({ children, label }: IconProps) => {
  return (
    <PrimitiveTooltip.Provider delayDuration={200} skipDelayDuration={0}>
      <PrimitiveTooltip.Root>
        <PrimitiveTooltip.Trigger asChild>
          <button>{children}</button>
        </PrimitiveTooltip.Trigger>
        <PrimitiveTooltip.Portal>
          <PrimitiveTooltip.Content
            className='rounded-[4px] bg-white px-3 py-2 text-[12px] leading-none shadow-[hsl(206_22%_7%/35%)_0px_10px_38px_-10px,hsl(206_22%_7%/20%)_0px_10px_20px_-15px] will-change-[transform,opacity] select-none data-[side=left]:animate-slideLeftAndFade '
            side='left'
          >
            {label}
            <PrimitiveTooltip.Arrow className='fill-white' />
          </PrimitiveTooltip.Content>
        </PrimitiveTooltip.Portal>
      </PrimitiveTooltip.Root>
    </PrimitiveTooltip.Provider>
  );
};
export default Tooltip;
