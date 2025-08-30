'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { useEffect } from 'react';
import Hero from './Hero';
import Features from './feature';
import Usage from './Usage';
import Pricing from './Pricing';

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true, 
        anchorPlacement: 'top-bottom',
      });
    }
    initAOS();
  }, [ ]);
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Features />
      <Usage />
      <Pricing />
    </div>
  )
}

export default Home;