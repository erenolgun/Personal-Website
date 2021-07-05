import React from 'react';
import Layout from '../Layout';

const Home = () => {
  return (
    <Layout>
      <div className='p-12 md:p-10 lg:p-12 xl:container xl:mx-auto'>
        <header className='mb-11'>
          <h1 className='font-serif text-7xl font-bold'>
            Frontend web developer.
          </h1>
        </header>
        <p className='text-2xl mb-11'>
          I'm a third year computer engineering student at Ankara Yildirim
          Beyazit University, Turkey. I’m interested in frontend web development
          with over 2 years. Currently working as an Frontend Web Developer
          Intern at{' '}
          <a className='text-primary' href='#'>
            GEFEASOFT
          </a>
          .
        </p>
        <div>
          <a href='#' className='text-light text-2xl mr-8'>
            LinkedIn
          </a>
          <a href='#' className='text-light text-2xl mr-8'>
            GitHub
          </a>
          <a href='#' className='text-light text-2xl mr-8'>
            Behance
          </a>
          <a href='#' className='text-light text-2xl'>
            Instagram
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
