import Link from 'next/link';

const ResumeLink = () => (
  <p className='mt-4 font-semibold hover:text-primary-accentDark lg:ml-auto lg:w-[80%]'>
    <Link href='/resume.pdf'>View full resume (English) →</Link>
  </p>
);

export default ResumeLink;
