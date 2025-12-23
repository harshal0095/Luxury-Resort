
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const socials = [
    { icon: Instagram, name: 'Instagram' },
    { icon: Facebook, name: 'Facebook' },
    { icon: Twitter, name: 'Twitter' },
    { icon: Linkedin, name: 'LinkedIn' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#fdfbf7]"
    >
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070" 
          alt="Contact Header"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white mt-16">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-4">Contact Us</h1>
          <p className="text-sm uppercase tracking-[0.4em] font-medium opacity-80">We are here to help</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="gold-text uppercase tracking-widest text-xs font-bold mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-10">We'd Love To Hear <br />From You</h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center text-stone-900 border border-stone-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-[10px] text-stone-400 mb-2">Our Location</h5>
                  <p className="text-stone-800 font-serif italic text-lg leading-tight">123 Azure Drive, <br />Crystal Bay, Paradise Island</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center text-stone-900 border border-stone-100">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-[10px] text-stone-400 mb-2">Email Address</h5>
                  <p className="text-stone-800 font-serif italic text-lg leading-tight">reservations@azurehorizon.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center text-stone-900 border border-stone-100">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-[10px] text-stone-400 mb-2">Contact Number</h5>
                  <p className="text-stone-800 font-serif italic text-lg leading-tight">+1 (888) 123 4567</p>
                </div>
              </div>

              <div className="pt-8 border-t border-stone-200">
                <h5 className="font-bold uppercase tracking-widest text-[10px] text-stone-400 mb-6">Follow Our Journey</h5>
                <div className="flex space-x-6">
                  {socials.map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.2, color: '#c5a059' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      className="text-stone-900"
                    >
                      <social.icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 shadow-xl border border-stone-50"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Full Name</label>
                  <input type="text" className="w-full border-b border-stone-200 py-3 outline-none focus:border-stone-900 bg-transparent text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Email</label>
                  <input type="email" className="w-full border-b border-stone-200 py-3 outline-none focus:border-stone-900 bg-transparent text-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Subject</label>
                <select className="w-full border-b border-stone-200 py-3 outline-none focus:border-stone-900 bg-transparent text-sm">
                  <option>Booking Inquiry</option>
                  <option>Special Event</option>
                  <option>General Question</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Message</label>
                <textarea rows={5} className="w-full border-b border-stone-200 py-3 outline-none focus:border-stone-900 bg-transparent text-sm resize-none" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button className="w-full py-5 gold-bg text-stone-900 font-bold uppercase tracking-widest text-[10px] hover:bg-stone-900 hover:text-white transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Simulation */}
      <section className="h-[500px] w-full bg-stone-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-stone-400 flex flex-col items-center">
            <MapPin size={48} className="mb-4" />
            <span className="text-xs uppercase tracking-widest font-bold">Interactive Map Loading...</span>
          </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.95373531531664!3d-37.816279742021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1a32f9c4f0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
      </section>
    </motion.div>
  );
};

export default ContactPage;
