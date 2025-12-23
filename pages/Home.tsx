
import React from 'react';
import Hero from '../components/Hero';
import BookingPanel from '../components/BookingPanel';
import Rooms from '../components/Rooms';
import About from '../components/About';
import Gallery from '../components/Gallery';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <BookingPanel />
      <Rooms />
      <About />
      <Gallery />
      
      {/* Testimonial Feature */}
      <section className="py-24 bg-[#f5eee0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text- stone-400 text-5xl font-serif italic mb-8 block opacity-50">"</span>
          <p className="text-2xl md:text-3xl font-serif italic text-stone-800 leading-relaxed mb-10">
            Trinetra isn't just a place to stay; it's an experience that stays with you. The attention to detail and the breathtaking views are simply unmatched.
          </p>
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
              alt="Guest" 
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gold-text p-1"
            />
            <h5 className="font-bold uppercase tracking-widest text-xs">James Alexander</h5>
            <span className="text-stone-500 text-[10px] tracking-widest uppercase">Loyal Guest Since 2018</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
