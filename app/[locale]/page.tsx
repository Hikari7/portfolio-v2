import { Suspense } from 'react';
import Hero from './sections/Hero';

export default function Main() {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className='flex flex-col gap-6 '>
        <Hero />
      </div>
    </Suspense>
  );
}
