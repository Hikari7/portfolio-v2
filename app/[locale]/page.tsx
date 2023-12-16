import { Suspense } from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

export default function Main() {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className='flex flex-col gap-6 px-4'>
        <Hero />
        <Projects />
      </div>
    </Suspense>
  );
}
