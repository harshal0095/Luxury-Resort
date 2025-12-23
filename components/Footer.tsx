
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest block">Tri <span className="gold-text">Netra</span></Link>
          <p className="text-stone-500 text-sm leading-relaxed">
            Elegance is not about being noticed, it is about being remembered. Welcome to the pinnacle of hospitality.
          </p>
          <div className="flex space-x-4">
            <Instagram size={18} className="text-stone-400 hover:text-white cursor-pointer transition-colors" />
            <Facebook size={18} className="text-stone-400 hover:text-white cursor-pointer transition-colors" />
            <Twitter size={18} className="text-stone-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 mb-6">Explore</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/rooms" className="hover:gold-text transition-colors">Rooms & Villas</Link></li>
            <li><Link to="/gallery" className="hover:gold-text transition-colors">Our Gallery</Link></li>
            <li><Link to="/about" className="hover:gold-text transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:gold-text transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 mb-6">Amenities</h4>
          <ul className="space-y-4 text-sm font-medium text-stone-400">
            <li>Infinity Pool</li>
            <li>Ocean Spa & Wellness</li>
            <li>Signature Dining</li>
            <li>Private Beach</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 mb-6">Newsletter</h4>
          <p className="text-stone-500 text-xs leading-relaxed">Subscribe to receive exclusive offers and news.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent border-b border-white/20 py-2 text-sm outline-none w-full focus:border-gold-text"
            />
            <button className="gold-text uppercase tracking-widest text-[10px] font-bold ml-4">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-600 font-bold space-y-4 md:space-y-0">
        <p>&copy; 2025 Trinetra Resort. All Rights Reserved.</p>
        <div className="flex space-x-8">
          <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-stone-400 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
