import { Suspense } from 'react';
import Home from './sections/Home';
import { useTranslations } from 'next-intl';
import Hero from './sections/Hero';

export default function Main() {
  const t = useTranslations('Hero');

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className='rounded-sm border border-primary-uninteractive bg-primary p-4 text-black hover:border-primary-intreractive active:border-primary-focus'>
        {t('intro')}
      </div>
      <Hero />
    </Suspense>
  );
}
