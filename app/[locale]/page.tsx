import { ReactNode, Suspense } from 'react';
import Home from './sections/Home';
import { useTranslations } from 'next-intl';
import { GradientDiv } from './ui/GradientDiv';

export default function Main() {
  const t = useTranslations('Hero');

  return (
    <GradientDiv className='[#FFFDFD] min-h-screen'>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className='rounded-sm border border-primary-uninteractive bg-primary p-4 text-black hover:border-primary-intreractive active:border-primary-focus'>
          {t('intro')}
        </div>
        <Home />
      </Suspense>
    </GradientDiv>
  );
}
