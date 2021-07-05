import React from 'react';

const Footer = () => {
  return (
    <footer className='p-14'>
      <div className='w-full bg-black opacity-5 h-0.5 mb-14' />
      <div>
        <a
          className='inline-block font-serif mb-5'
          href='mailto:hi@mehmeterenolgun.com'>
          hi@mehmeterenolgun.com
        </a>
        <p className='text-sm mb-2' style={{ maxWidth: 360 }}>
          Web developer. Loves to code and create modern UI. Learns new things
          always.
        </p>
      </div>
      <div className='mt-14 flex justify-between'>
        <div>
          <a href='#' className='text-base mr-8'>
            About Me
          </a>
          <a href='#' className='text-base mr-8'>
            Work
          </a>
          <a href='#' className='text-base mr-8'>
            Resume
          </a>
          <a href='#' className='text-base'>
            Contact Me
          </a>
        </div>
        <div>
          <a href='#' className='text-base mr-8'>
            LinkedIn
          </a>
          <a href='#' className='text-base mr-8'>
            GitHub
          </a>
          <a href='#' className='text-base mr-8'>
            Behance
          </a>
          <a href='#' className='text-base'>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
