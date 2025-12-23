
import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Waves, Coffee, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const rooms = [
  {
    id: '1',
    name: 'Presidential Ocean Suite',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    amenities: ['Pool', 'Sea View', 'Breakfast'],
  },
  {
    id: '2',
    name: 'Infinity Pool Villa',
    price: 850,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    amenities: ['Private Pool', 'WiFi', 'Garden'],
  },
  {
    id: '3',
    name: 'Horizon Beach Chalet',
    price: 600,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
    amenities: ['Beach Access', 'Sunset View', 'Mini Bar'],
  }
];

const Rooms: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <span className="gold-text uppercase tracking-widest text-xs font-bold mb-4 block">Luxury Stays</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Our Finest Suites & Villas</h2>
            <p className="text-stone-500 font-light leading-relaxed">
              Every detail is meticulously curated to provide the ultimate sanctuary. From panoramic ocean views to private infinity pools, Trinetra redefines hospitality.
            </p>
          </div>
          <Link to="/rooms" className="text-stone-900 font-bold uppercase tracking-widest text-xs border-b border-stone-900 pb-2 hover:gold-text hover:border-gold-text transition-colors">
            View All Rooms
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover brightness-95 group-hover:brightness-100 transition-all"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 text-stone-900 font-bold text-[10px] tracking-widest uppercase">
                  From ${room.price} / Night
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-3 group-hover:gold-text transition-colors">{room.name}</h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-stone-400">
                  <Wifi size={14} className="mr-1" />
                  <span className="text-[10px] uppercase tracking-tighter">Fast Wifi</span>
                </div>
                <div className="flex items-center text-stone-400">
                  <Waves size={14} className="mr-1" />
                  <span className="text-[10px] uppercase tracking-tighter">Ocean View</span>
                </div>
                <div className="flex items-center text-stone-400">
                  <Coffee size={14} className="mr-1" />
                  <span className="text-[10px] uppercase tracking-tighter">Breakfast</span>
                </div>
              </div>
              <button className="w-full py-4 border border-stone-200 uppercase tracking-widest text-[10px] font-bold group-hover:bg-stone-900 group-hover:text-white transition-all">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
