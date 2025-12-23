
import React from 'react';
import { motion } from 'framer-motion';
import Rooms from '../components/Rooms';

const RoomsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2070" 
          alt="Rooms Header"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white mt-16">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-4">Suites & Villas</h1>
          <p className="text-sm uppercase tracking-[0.4em] font-medium opacity-80">Discover your sanctuary</p>
        </div>
      </section>
      
      <Rooms />
      
      {/* Additional Rooms for the Listing Page */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              name: 'Royal Penthouse',
              price: 2500,
              image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
              size: '450 sqm'
            },
            {
              name: 'Sky Garden Suite',
              price: 950,
              image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
              size: '120 sqm'
            }
          ].map((room, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer flex flex-col md:flex-row bg-white overflow-hidden shadow-sm"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={room.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <span className="gold-text text-[10px] uppercase tracking-widest font-bold mb-2">{room.size}</span>
                <h3 className="text-2xl font-serif mb-4">{room.name}</h3>
                <p className="text-stone-500 text-sm font-light mb-6">Experience unmatched elegance with panoramic views and bespoke services.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-serif">${room.price} <span className="text-[10px] text-stone-400">/ NIGHT</span></span>
                  <button className="text-[10px] uppercase font-bold tracking-widest border-b border-stone-900 pb-1">Book Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default RoomsPage;
