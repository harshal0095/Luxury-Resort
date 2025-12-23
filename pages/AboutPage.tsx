
import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070" 
          alt="About Header"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white mt-16">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-4">Our Story</h1>
          <p className="text-sm uppercase tracking-[0.4em] font-medium opacity-80">A legacy of excellence</p>
        </div>
      </section>
      
      <About />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <span className="gold-text text-4xl font-serif italic mb-4 block">01</span>
            <h4 className="text-xl font-bold uppercase tracking-widest mb-6">True Serenity</h4>
            <p className="text-stone-500 font-light leading-relaxed">We believe silence is a luxury. Our resort is designed to provide a quiet escape from the noise of modern life.</p>
          </div>
          <div>
            <span className="gold-text text-4xl font-serif italic mb-4 block">02</span>
            <h4 className="text-xl font-bold uppercase tracking-widest mb-6">Culinary Art</h4>
            <p className="text-stone-500 font-light leading-relaxed">Our world-class chefs use only the freshest locally sourced ingredients to create unforgettable dining experiences.</p>
          </div>
          <div>
            <span className="gold-text text-4xl font-serif italic mb-4 block">03</span>
            <h4 className="text-xl font-bold uppercase tracking-widest mb-6">Bespoke Service</h4>
            <p className="text-stone-500 font-light leading-relaxed">From the moment you arrive, our dedicated team is at your service to cater to your every desire.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
