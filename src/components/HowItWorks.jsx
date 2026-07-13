import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, FileCheck, Key, Send, Landmark } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 'how-create',
      num: '01',
      icon: <PlusCircle className="w-6 h-6 text-[#111111]" />,
      title: "Hisobot tayyorlash",
      description: "Soliq turini tanlang va tranzaksiyalar yoki kirim-chiqim summalarini kiriting. Tizim hisobotni shakllantiradi."
    },
    {
      id: 'how-review',
      num: '02',
      icon: <FileCheck className="w-6 h-6 text-[#111111]" />,
      title: "Tekshirish",
      description: "Tizim hisobotdagi mumkin bo'lgan xato va kamchiliklarni tekshiradi hamda sizga ko'rib chiqish uchun taqdim etadi."
    },
    {
      id: 'how-sign',
      num: '03',
      icon: <Key className="w-6 h-6 text-blue-600" />,
      title: "ERI Imzo",
      description: "Fleshkadagi yoki kompyuterdagi ERI (Elektron Raqamli Imzo) kalitingiz yordamida parolni kiritib hisobotni tasdiqlang."
    },
    {
      id: 'how-submit',
      num: '04',
      icon: <Send className="w-6 h-6 text-blue-600" />,
      title: "Yuborish",
      description: "Tasdiqlangan hisobot bir soniyada hisobot.gov.uz davlat soliq xizmati portaliga xavfsiz API orqali yuboriladi."
    },
    {
      id: 'how-track',
      num: '05',
      icon: <Landmark className="w-6 h-6 text-emerald-600" />,
      title: "Statusni kuzatish",
      description: "Soliq xizmatining qabul qilish statusini, yuborilgan kvitansiyalarni yagona paneldan yuklab oling va kuzatib boring."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block"
          >
            Ishlash jarayoni
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111]"
          >
            Soliq hisobotini topshirish yo'li
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 mt-4 text-base md:text-lg"
          >
            Besh bosqichda to'liq hisobot tayyorlash va topshirish tizimi.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative grid grid-cols-1 md:grid-cols-5 gap-8"
        >
          {/* Connecting line for desktop */}
          <div className="absolute top-[3.75rem] left-[10%] right-[10%] h-[1px] bg-gray-150/80 hidden md:block -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className="flex flex-col items-center md:items-start text-center md:text-left relative group"
              id={step.id}
            >
              {/* Step Circle & Connector */}
              <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-150 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 group-hover:bg-white group-hover:border-blue-600 transition-all duration-300 relative shrink-0">
                {step.icon}
                <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border border-gray-150 text-[10px] font-mono font-bold flex items-center justify-center shadow-3xs text-gray-500 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
                  {step.num}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-[#111111] mb-2 px-1">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-1">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
