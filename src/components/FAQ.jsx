import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      id: 'faq-types',
      question: "Rimo orqali qaysi turdagi soliq hisobotlarini topshirish mumkin?",
      answer: "Platforma orqali Aylanmadan olinadigan soliq, JShODS (Jismoniy shaxslardan olinadigan daromad solig'i), QQS (NDS), Yer solig'i, Mol-mulk solig'i kabi deyarli barcha turdagi soliq hisobotlarini avtomatik tayyorlash va hisobot.gov.uz portaliga to'g'ridan-to'g'ri yuborish imkoni mavjud."
    },
    {
      id: 'faq-api',
      question: "Rimo hisobotlarni qanday qilib hisobot.gov.uz tizimiga yuboradi?",
      answer: "Rimo davlat soliq xizmati portalining rasmiy integratsiyalashgan API shlyuzlari orqali ishlaydi. Siz platformada tayyorlangan hisobotni tekshirib, shaxsiy ERI (Elektron Raqamli Imzo) kalitingiz orqali tasdiqlagan zahotingiz, u davlat soliq organlari bazasiga xavfsiz tarzda uzatiladi."
    },
    {
      id: 'faq-eri',
      question: "ERI (Elektron raqamli imzo) kalitlarim Rimo serverlarida saqlanadimi?",
      answer: "Yo'q. Xavfsizlik qoidalariga ko'ra, sizning ERI parolingiz va kalitlaringiz hech qachon Rimo serverlarida saqlanmaydi. Imzolash jarayoni sizning qurilmangizning o'zida shifrlangan sessiya doirasida amalga oshiriladi, bu esa to'liq maxfiylikni kafolatlaydi."
    },
    {
      id: 'faq-multi',
      question: "Bir nechta tashkilot hisobotlarini bitta profildan boshqara olamanmi?",
      answer: "Ha. Rimo platformasi ko'p tarmoqli biznes boshqaruviga moslashtirilgan. Siz o'z profilingizga bir nechta MChJ, XK yoki YaTTlarni ulab, ularning soliq majburiyatlarini va topshirilgan hisobotlarini bitta dashboarddan turib boshqarishingiz mumkin."
    },
    {
      id: 'faq-pricing',
      question: "Tizimdan foydalanish bepulmi va qanday tariflar mavjud?",
      answer: "Ha, yangi foydalanuvchilar platformaning imkoniyatlarini sinab ko'rishlari uchun bepul sinov davri taqdim etiladi. Keyinchalik biznes hajmi, tashkilotlar soni va yuboriladigan hisobotlar chastotasiga qarab juda qulay oylik yoki yillik premium tariflarni tanlashingiz mumkin."
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F5F5F7]" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block"
          >
            Ko'p beriladigan savollar
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111]"
          >
            Savollaringiz bormi?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 mt-4 text-base md:text-lg"
          >
            Rimo platformasi qanday ishlashi haqida tezkor javoblar.
          </motion.p>
        </div>

        {/* Accordion Component */}
        <div className="bg-white rounded-[32px] border border-gray-200/50 p-6 md:p-10 shadow-sm divide-y divide-gray-100">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={faq.id} className="py-5 first:pt-0 last:pb-0" id={faq.id}>
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full flex items-center justify-between text-left py-2 font-semibold text-[#111111] hover:text-blue-600 transition-colors focus:outline-none group"
                  aria-expanded={isExpanded}
                  id={`btn-faq-toggle-${idx + 1}`}
                >
                  <span className="text-base md:text-lg pr-4">{faq.question}</span>
                  <div className={`p-1.5 rounded-full bg-gray-50 group-hover:bg-blue-50 text-gray-400 group-hover:text-blue-600 transition-all shrink-0 duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed pt-3 pb-2 max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
