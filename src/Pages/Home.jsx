import React from 'react';
import { useAuth } from '../hooks/UseAuth';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ProductShowcase from '../components/home/ProductShowcase';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';

const Home = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className={isAuthenticated ? '' : ''}>
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