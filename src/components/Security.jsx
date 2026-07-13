import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, KeyRound, Server } from 'lucide-react';

const Security = () => {
  const securityCards = [
    {
      id: 'sec-encrypt',
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: "Shifrlangan ma'lumotlar",
      description: "Biznesingizga oid barcha ma'lumotlar AES-256 sanoat standarti darajasida shifrlanadi. Ma'lumotlarni sizdan boshqa hech kim ko'ra olmaydi."
    },
    {
      id: 'sec-api',
      icon: <Server className="w-6 h-6 text-blue-500" />,
      title: "Davlat API Xavfsizligi",
      description: "hisobot.gov.uz davlat shlyuzi bilan ma'lumot almashinuvi maxsus xavfsiz SSL/TLS kanallari orqali shifrlangan holatda amalga oshiriladi."
    },
    {
      id: 'sec-rbac',
      icon: <KeyRound className="w-6 h-6 text-blue-500" />,
      title: "Rollar nazorati (RBAC)",
      description: "Xodimlar va tashqi hisobchilarga alohida ruxsat darajalarini bering. Kim qaysi tashkilot hisobotlarini topshira olishini o'zingiz hal qiling."
    },
    {
      id: 'sec-logs',
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      title: "Amallar jurnali (Audit)",
      description: "Platformada amalga oshirilgan har bir xatti-harakat va tizimga kirish loglari batafsil saqlanadi. Istalgan vaqtda amallar tarixini tekshiring."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 25 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section className="py-28 bg-[#1d1d1f] text-white relative overflow-hidden" id="security">
      {/* Background radial glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3 block"
          >
            Ma'lumotlar himoyasi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Ma'lumotlaringiz xavfsiz.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-400 mt-4 text-base md:text-lg"
          >
            Sizning moliyaviy va soliq ma'lumotlaringiz xavfsizligi — bizning eng yuqori ustuvor vazifamizdir.
          </motion.p>
        </div>

        {/* Security Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {securityCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.01, borderColor: 'rgba(59, 130, 246, 0.3)', transition: { duration: 0.3 } }}
              className="bg-white/[0.03] border border-white/[0.07] backdrop-blur-md p-8 rounded-[24px] hover:bg-white/[0.05] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start text-left"
              id={card.id}
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Security;
