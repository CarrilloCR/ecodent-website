import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ProductShowcase from '../components/home/ProductShowcase';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ProductShowcase />
      <HowItWorks />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default Home;