import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, CalendarRange } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      id: 'problem-time',
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Ko'p vaqt talab qiladi",
      description: "Soliq hisobotlarini qo'lda tayyorlash va hisobot.gov.uz tizimiga kiritish soatlab qimmatli vaqtingizni oladi. Biznesingizni rivojlantirish o'rniga qog'ozbozlikka bog'lanib qolasiz.",
    },
    {
      id: 'problem-error',
      icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
      title: "Inson omili va xatolar",
      description: "Excel yoki qog'ozdagi kichik hisob-kitob xatosi hisobot rad etilishiga, qayta tayyorlash vaqtiga yoki hisobchining xatosi sababli yirik jarimalarga sabab bo'lishi mumkin.",
    },
    {
      id: 'problem-deadline',
      icon: <CalendarRange className="w-8 h-8 text-red-500" />,
      title: "Kech topshirish xavfi",
      description: "Muddatlarni o'tkazib yuborish yoki serverlardagi yuklama sabab hisobot yuborolmaslik bank hisob raqamlarining muzlatilishiga va jarimalar yuklanishiga olib keladi.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-[#F5F5F7]" id="problem">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111]"
          >
            Soliq hisobotlaridagi eng katta qiyinchiliklar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 mt-4 text-base md:text-lg"
          >
            An'anaviy hisobot topshirish usullari murakkab, sekin va risklarga boy.
          </motion.p>
        </div>

        {/* Problem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-[24px] border border-gray-150/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              id={problem.id}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#111111] mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
