import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle2, X, ArrowRight, Loader2 } from 'lucide-react';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('+998 ');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    
    // Ensure it always starts with '+998'
    if (!value.startsWith('+998')) {
      value = '+998 ';
    }
    
    const prefix = '+998 ';
    const rest = value.slice(prefix.length).replace(/[^\d]/g, '');
    
    // Format the rest as: XX YYY ZZ ZZ (e.g. 90 123 45 67)
    let formattedRest = '';
    if (rest.length > 0) {
      formattedRest += rest.slice(0, 2);
    }
    if (rest.length > 2) {
      formattedRest += ' ' + rest.slice(2, 5);
    }
    if (rest.length > 5) {
      formattedRest += ' ' + rest.slice(5, 7);
    }
    if (rest.length > 7) {
      formattedRest += ' ' + rest.slice(7, 9);
    }
    
    setPhone(prefix + formattedRest);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate length ( Uzbek phone number without country code has 9 digits + prefix (+998 ) and spaces = 19 chars total)
    // +998 XX YYY ZZ ZZ -> length is 19
    const digitsOnly = phone.replace(/[^\d]/g, '');
    if (digitsOnly.length !== 12) {
      setError('Iltimos, telefon raqamingizni to\'liq kiriting.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    const botToken = '8968628988:AAEiDesxtYcn2PKC9t2rMalJzP3Aozts1gU';
    const chatId = '6620142322';
    const text = `🔔 Yangi waitlist!\n\n📞 Telefon: ${phone}`;

    // Send Telegram Notification
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Telegram API error');
        return res.json();
      })
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setPhone('+998 ');
      })
      .catch((err) => {
        console.error('Failed to notify Telegram:', err);
        // Fallback: Proceed to success state even if Telegram API call fails (network blockers, etc.)
        setIsSubmitting(false);
        setIsSubmitted(true);
        setPhone('+998 ');
      });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setError('');
    setPhone('+998 ');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#111111]/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md bg-white border border-gray-150 rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden z-10 text-left"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Yopish"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Coming Soon Badge */}
                <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Tez orada / Coming Soon</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
                  Rimo kutish ro'yxatiga qo'shiling
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                  Biz hozirda tizimni yakuniy sinovdan o'tkazmoqdamiz. Telefon raqamingizni qoldiring va platformaga birinchilardan bo'lib kirish huquqini qo'lga kiriting!
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative flex items-center">
                    {/* Country flag and indicator */}
                    <div className="absolute left-4 flex items-center gap-1.5 pointer-events-none select-none border-r border-gray-200 pr-3 py-1">
                      <span className="text-xl">🇺🇿</span>
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      disabled={isSubmitting}
                      placeholder="+998 90 123 45 67"
                      className="w-full bg-gray-50 border border-gray-200/80 rounded-2xl pl-16 pr-4 py-4 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all shadow-inner tracking-wider"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-500 font-medium px-1">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-[#111111] hover:bg-black text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 disabled:bg-gray-300 disabled:cursor-not-allowed group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Kutilmoqda...</span>
                      </>
                    ) : (
                      <>
                        <span>Navbatga yozilish</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-6 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                
                <h4 className="font-extrabold text-[#111111] text-xl mb-3">Muvaffaqiyatli qo'shildingiz!</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[280px] mb-8">
                  Rahmat! Siz Rimo kutish ro'yxatiga muvaffaqiyatli qo'shildingiz. Yangiliklar va takliflarni tez orada yuboramiz.
                </p>

                <button
                  onClick={handleClose}
                  className="w-full py-3.5 rounded-2xl bg-gray-50 border border-gray-150 hover:bg-gray-100 text-gray-700 font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  Yopish
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
