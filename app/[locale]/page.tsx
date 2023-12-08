import { Suspense } from 'react';
import Home from './sections/Home';
import { useTranslations } from 'next-intl';

export default function Main() {
  const t = useTranslations('Hero');

  return (
    <main className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className='rounded-sm border border-primary-uninteractive bg-primary p-4 text-black hover:border-primary-intreractive active:border-primary-focus'>
          {t('intro')}
        </div>
        <Home />
      </Suspense>
    </main>
  );
}
