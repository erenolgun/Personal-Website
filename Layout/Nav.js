import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='p-12 md:p-10 lg:p-12 xl:container xl:mx-auto'>
      <div className='flex justify-between items-center mb-5'>
        <Link href='/'>
          <a className='text-xl md:text-2xl font-bold font-serif'>
            mehmeterenolgun
          </a>
        </Link>
        <button className='flex items-center'>
          <span className='hidden sm:flex text-lg mr-5'>menu</span>
          {/* <div className='w-7 h-7 bg-yellow-200' /> */}
          <div className='flex flex-col'>
            <div className='w-7 h-0.5 bg-black' />
            <div className='w-7 h-0.5 bg-black mt-1' />
          </div>
        </button>
      </div>
      <div className='flex justify-between items-start'>
        <div>
          <p className='text-light text-sm mb-2' style={{ maxWidth: 300 }}>
            Web developer. Loves to code and create modern UI. Learns new things
            always.
          </p>
          <a
            className='inline-block font-serif'
            href='mailto:hi@mehmeterenolgun.com'>
            hi@mehmeterenolgun.com
          </a>
        </div>

        <div className='hidden sm:flex flex-col items-end mr-12'>
          <a href='/' className='text-base text-primary'>
            about me
          </a>
          <a href='/work' className='text-base mt-1'>
            work
          </a>
          <a href='/contact-me' className='text-base mt-1'>
            contact me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
