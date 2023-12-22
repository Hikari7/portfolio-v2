import { Suspense } from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Experience from './sections/Experience';
import Footer from './components/Footer';

export default function Main() {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className='flex flex-col gap-24 px-4' id='hero'>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Footer />
      </div>
    </Suspense>
  );
}
