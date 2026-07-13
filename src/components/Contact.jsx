import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden text-left" id="contact">
      {/* Background soft gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-blue-50/40 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-gray-50 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block"
          >
            Muloqot
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111]"
          >
            Biz bilan bog'laning
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 mt-4 text-base md:text-lg max-w-xl"
          >
            Savollaringiz bormi yoki hamkorlik qilmoqchimisiz? Biz sizga yordam berishdan mamnunmiz.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Phone Card */}
              <motion.a
                href="tel:+998902710027"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-5 bg-gray-50 hover:bg-gray-100/70 p-6 rounded-[24px] border border-gray-150 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/60 flex items-center justify-center text-blue-600 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Telefon raqam</span>
                  <span className="text-base font-bold text-[#111111]">+998 (90) 271-00-27</span>
                </div>
              </motion.a>

              {/* Telegram Card */}
              <motion.a
                href="https://t.me/RImo_Admin"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-5 bg-gray-50 hover:bg-gray-100/70 p-6 rounded-[24px] border border-gray-150 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/60 flex items-center justify-center text-blue-600 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Telegram admin</span>
                  <span className="text-base font-bold text-[#111111]">@RImo_Admin</span>
                </div>
              </motion.a>

              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-5 bg-gray-50 p-6 rounded-[24px] border border-gray-150 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/60 flex items-center justify-center text-blue-600 shadow-2xs shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Manzilimiz</span>
                  <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                    Andijon viloyati, Buloqboshi tumani, Yangi Hokimiyat binosi
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Quick Note Card */}
            <div className="hidden lg:block bg-blue-50/50 border border-blue-100/50 p-6 rounded-[24px]">
              <h4 className="font-bold text-blue-900 text-sm mb-2">Ish vaqti:</h4>
              <p className="text-xs text-blue-700 leading-relaxed">
                Dushanba - Shanba: 09:00 - 18:00<br />
                Yakshanba: Dam olish kuni
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 flex">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-[32px] overflow-hidden border border-gray-150 shadow-lg min-h-[300px] lg:min-h-full flex"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.178792024823!2d72.51460649433587!3d40.627851653807305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcf7a60d495d3f%3A0x99301fe59cc3a2a5!2sInFast%20IT-Education!5e0!3m2!1sen!2s!4v1783940113954!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '350px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Google Maps: Rimo Location"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
