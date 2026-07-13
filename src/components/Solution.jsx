import React from 'react';
import { motion } from 'framer-motion';
import { FileEdit, Layers, Send, ChevronDown } from 'lucide-react';

const Solution = () => {
  const steps = [
    {
      number: '01',
      title: 'Hisobot tayyorlang',
      description: "Tizim tranzaksiyalar va hisob-kitoblar asosida soliq hisobotlarini avtomatik shakllantiradi. Barcha hisob-kitoblar amaldagi soliq qonunchiligiga to'liq mos keladi.",
      icon: <FileEdit className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-50 border-blue-100',
    },
    {
      number: '02',
      title: 'Boshqaring',
      description: 'Barcha tashkilotlar va hisobotlarni yagona oynada nazorat qiling. To\'lov muddatlari va topshirish statuslari haqida eslatmalarni oling.',
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-50 border-purple-100',
    },
    {
      number: '03',
      title: 'hisobot.gov.uz orqali yuboring',
      description: 'Tayyor hisobotni bir klik orqali elektron raqamli imzo (ERI) bilan tasdiqlang va hisobot.gov.uz davlat soliq portaliga to\'g\'ridan-to\'g\'ri yuboring.',
      icon: <Send className="w-6 h-6 text-emerald-600" />,
      color: 'bg-emerald-50 border-emerald-100',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="solution">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block"
            >
              Bizning Yechim
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight"
            >
              Barcha jarayon. <br />
              <span className="text-gray-400">Bitta platformada.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-500 mt-6 text-base md:text-lg leading-relaxed"
            >
              Rimo soliq hisobotlarini tayyorlashdan tortib topshirishgacha bo'lgan barcha jarayonlarni sodda, qulay va xavfsiz formatga keltiradi.
            </motion.p>
            <div className="mt-8 hidden lg:block">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-400">
                Bosqichlarni ko'rish uchun pastga aylantiring
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </span>
            </div>
          </div>

          {/* Right Column: Animated Steps */}
          <div className="lg:col-span-7 space-y-12 relative">
            {/* Visual connecting line for desktop */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-100 hidden sm:block -z-10" />

            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-6 items-start bg-gray-50/50 p-6 sm:p-8 rounded-[24px] border border-gray-100 shadow-sm relative group hover:bg-gray-50 transition-all duration-300"
                id={`solution-step-${idx + 1}`}
              >
                {/* Number Badge and Icon Container */}
                <div className="flex items-center sm:items-start gap-4">
                  <div className="w-16 h-16 rounded-[20px] bg-white border border-gray-150 flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="sm:hidden">
                    <span className="text-xs font-mono font-bold text-gray-300 tracking-wider">BOSQICH {step.number}</span>
                    <h3 className="text-xl font-bold text-[#111111]">{step.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="hidden sm:flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#111111] group-hover:text-blue-600 transition-colors duration-200">
                      {step.title}
                    </h3>
                    <span className="text-sm font-mono font-bold text-gray-400/80 bg-white border border-gray-100 px-2.5 py-0.5 rounded-full shadow-2xs">
                      {step.number}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed sm:mt-0 mt-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
