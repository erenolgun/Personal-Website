import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedIn } from '@fortawesome/free-solid-svg-icons';
import { github } from '@fortawesome/free-solid-svg-icons';

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
          <a href='#' className='text-lg mr-8'>
            About Me
          </a>
          <a href='#' className='text-lg mt-1 sm:mt-0 mr-8'>
            Work
          </a>
          <a href='#' className='text-lg mt-1 sm:mt-0 mr-8'>
            Resume
          </a>
          <a href='#' className='text-lg mt-1 sm:mt-0'>
            Contact Me
          </a>
        </div>
        <div className='hidden lg:flex'>
          <a href='#' className='text-lg mr-8'>
            LinkedIn
          </a>
          <a href='#' className='text-lg mr-8'>
            GitHub
          </a>
          <a href='#' className='text-lg mr-8'>
            Behance
          </a>
          <a href='#' className='text-lg'>
            Instagram
          </a>
        </div>
        <div className='flex lg:hidden mt-6 sm:mt-0 '>
          <a href='#' className='h-7 w-7'>
            <img src='/assets/linkedin.svg' alt='s' />
          </a>
          <a href='#' className='h-7 w-7 ml-6'>
            <img src='/assets/github.svg' alt='s' />
          </a>
          <a href='#' className='h-7 w-7 ml-6'>
            <img src='/assets/behance.svg' alt='s' />
          </a>
          <a href='#' className='h-7 w-7 ml-6'>
            <img src='/assets/instagram.svg' alt='s' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
