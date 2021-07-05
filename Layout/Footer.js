import React from 'react';

const Footer = () => {
  return (
    <footer className='p-12 md:p-10 lg:p-12 xl:container xl:mx-auto'>
      <div className='w-full bg-black opacity-5 h-0.5 mb-14' />
      <div>
        <a
          className='inline-block font-serif mb-5 text-xl'
          href='mailto:hi@mehmeterenolgun.com'>
          hi@mehmeterenolgun.com
        </a>
        <p className='text-sm mb-2' style={{ maxWidth: 360 }}>
          Web developer. Loves to code and create modern UI. Learns new things
          always.
        </p>
      </div>
      <div className='mt-6 md:mt-14 inline-block sm:flex justify-between'>
        <div className='flex flex-col sm:flex-row'>
          <a href='/' className='text-lg mr-8'>
            About Me
          </a>
          <a href='/work' className='text-lg mt-1 sm:mt-0 mr-8'>
            Work
          </a>
          <a href='#' className='text-lg mt-1 sm:mt-0 mr-8'>
            Resume
          </a>
          <a href='/contact-me' className='text-lg mt-1 sm:mt-0'>
            Contact Me
          </a>
        </div>
        <div className='hidden lg:flex'>
          <a
            href='https://www.linkedin.com/in/mehmeterenolgun/'
            className='text-lg mr-8'
            target='_blank'>
            LinkedIn
          </a>
          <a
            href='https://github.com/erenolgun'
            className='text-lg mr-8'
            target='_blank'>
            GitHub
          </a>
          <a
            href='https://www.behance.net/mehmeterenolgun'
            className='text-lg mr-8'
            target='_blank'>
            Behance
          </a>
          <a
            href='https://www.instagram.com/erenolguun/'
            className='text-lg'
            target='_blank'>
            Instagram
          </a>
        </div>
        <div className='flex lg:hidden mt-6 sm:mt-0 '>
          <a
            href='https://www.linkedin.com/in/mehmeterenolgun/'
            className='h-7 w-7'
            target='_blank'>
            <img src='/assets/linkedin.svg' alt='linkedin' />
          </a>
          <a
            href='https://github.com/erenolgun'
            className='h-7 w-7 ml-6'
            target='_blank'>
            <img src='/assets/github.svg' alt='github' />
          </a>
          <a
            href='https://www.behance.net/mehmeterenolgun'
            className='h-7 w-7 ml-6'
            target='_blank'>
            <img src='/assets/behance.svg' alt='behance' />
          </a>
          <a
            href='https://www.instagram.com/erenolguun/'
            className='h-7 w-7 ml-6'
            target='_blank'>
            <img src='/assets/instagram.svg' alt='instagram' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
