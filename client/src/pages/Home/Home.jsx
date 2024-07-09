import React from 'react';
import Features from './Features/Features';
import Hero from './Hero/Hero';
// import Working from './Working/Working';
import Join from './Join/Join';
import About from './HomeAbout/HomeAbout';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <About />
      <Features />
      {/* <Working /> */}
      <Join />
    </div>
  )
}

export default Home