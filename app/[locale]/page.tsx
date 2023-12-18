import { Suspense } from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';

export default function Main() {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className='flex flex-col gap-24 px-4'>
        <Hero />
        <Projects />
        <About />
      </div>
    </Suspense>
  );
}
