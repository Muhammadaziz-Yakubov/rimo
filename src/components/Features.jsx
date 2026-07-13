import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Cpu, 
  Layers, 
  History, 
  Lock, 
  Activity 
} from 'lucide-react';

const Features = () => {
  const featureList = [
    {
      id: 'feat-report',
      icon: <Briefcase className="w-6 h-6 text-[#111111]" />,
      title: "Soliq hisobotlari boshqaruvi",
      description: "Biznesingizning barcha soliq hisobotlarini tizimlashtirilgan tarzda oson boshqaring. Choraklik va oylik hisobotlarni avtomatik hisob-kitob qiling."
    },
    {
      id: 'feat-api',
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "hisobot.gov.uz Integratsiyasi",
      description: "Tashqi sahifalarga o'tmasdan, hisobot.gov.uz rasmiy API integratsiyasi yordamida to'g'ridan-to'g'ri soliq xizmati bazasiga yuboring."
    },
    {
      id: 'feat-multi',
      icon: <Layers className="w-6 h-6 text-[#111111]" />,
      title: "Ko'p tarmoqli tashkilotlar",
      description: "Yagona Rimo profiliga bir nechta MChJ, XK yoki YaTTlarni bog'lang va ularni alohida panellarda oson boshqaring."
    },
    {
      id: 'feat-history',
      icon: <History className="w-6 h-6 text-[#111111]" />,
      title: "Yuborish tarixi va arxiv",
      description: "Avval yuborilgan barcha hisobotlar, davlat tomonidan tasdiqlangan kvitansiyalar va soliq to'lov topshiriqnomalari doimo qo'l ostingizda bo'ladi."
    },
    {
      id: 'feat-secure',
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      title: "Xavfsiz kirish va ERI",
      description: "Ma'lumotlaringiz to'liq shifrlanadi. Tizimga kirish va hisobotlarni imzolash faqat sizning rasmiy ERI kalitingiz orqali amalga oshiriladi."
    },
    {
      id: 'feat-status',
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      title: "Real-vaqt status monitoringi",
      description: "Hisobot topshirilgandan keyin uning ko'rib chiqilish holati, qabul qilinganligi yoki rad etilganligi haqida tezkor bildirishnomalar oling."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-24 bg-[#F5F5F7]" id="features">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block"
          >
            Imkoniyatlar
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111]"
          >
            Biznesingiz uchun professional vositalar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 mt-4 text-base md:text-lg"
          >
            Soliq hisobotlari bilan bog'liq murakkab vazifalarni osonlashtiruvchi premium platforma imkoniyatlari.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureList.map((feat) => (
            <motion.div
              key={feat.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-[24px] border border-gray-200/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              id={feat.id}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 shadow-2xs">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-3">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
