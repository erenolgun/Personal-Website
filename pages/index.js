import React from 'react';
import Layout from '../Layout';

const Home = () => {
  return (
    <Layout>
      <div className='p-12 md:p-10 lg:p-12 xl:container xl:mx-auto'>
        <header className='mb-11'>
          <h1 className='text-6xl sm:text-7xl font-semibold font-serif'>
            Frontend web developer.
          </h1>
        </header>
        <p className='text-xl mb-8 sm:text-2xl sm:mb-11'>
          I'm a third year computer engineering student at Ankara Yildirim
          Beyazit University, Turkey. I’m interested in frontend web development
          with over 2 years. Currently working as an Frontend Web Developer
          Intern at{' '}
          <a
            className='text-primary transition-all transform hover:underline duration-200'
            href='https://gefeasoft.com/'
            target='_blank'>
            GEFEASOFT
          </a>
          .
        </p>
        <div>
          <a
            href='https://www.linkedin.com/in/mehmeterenolgun/'
            className='text-light text-lg mr-3 sm:text-2xl sm:mr-8 hover:text-hover transform transition-colors duration-200'
            target='_blank'>
            LinkedIn
          </a>
          <a
            href='https://github.com/erenolgun'
            className='text-light text-lg mr-3 sm:text-2xl sm:mr-8 hover:text-hover transform transition-colors duration-200'
            target='_blank'>
            GitHub
          </a>
          <a
            href='https://www.behance.net/mehmeterenolgun'
            className='text-light text-lg mr-3 sm:text-2xl sm:mr-8 hover:text-hover transform transition-colors duration-200'
            target='_blank'>
            Behance
          </a>
          <a
            href='https://www.instagram.com/erenolguun/'
            className='text-light text-lg sm:text-2xl hover:text-hover transform transition-colors duration-200'
            target='_blank'>
            Instagram
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
