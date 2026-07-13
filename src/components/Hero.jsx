import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const Hero = ({ onOpenWaitlist }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-white" id="hero">
      {/* Background soft gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gray-50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200/50 px-3 py-1.5 rounded-full w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-semibold text-[#111111]">Hisobot yuborish endi avvalgidan ossonroq</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-6"
          >
            Kichik bizneslarni <br />
            <span className="text-[#111111] font-extrabold">Aqilli Boshqarish Platformasi</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-lg mb-8"
          >
            O'zbekiston bizneslari uchun soliq hisobotlarini tayyorlash, boshqarish va hisobot.gov.uz orqali yuborish platformasi.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8"
          >
            <button
              onClick={onOpenWaitlist}
              className="px-8 py-4 rounded-2xl bg-[#111111] text-white hover:bg-black font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5 cursor-pointer"
              id="hero-primary-btn"
            >
              <span>Bepul boshlash</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href="#dashboard"
              className="px-8 py-4 rounded-2xl bg-[#F5F5F7] text-[#111111] hover:bg-gray-200/80 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
              id="hero-secondary-btn"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Demo ko'rish</span>
            </a>
          </motion.div>

          {/* Key Value Props */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 max-w-md"
          >
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 shrink-0" />
              <span>Kredit karta talab etilmaydi</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 shrink-0" />
              <span>Integratsiyalashgan API</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: MacBook Mockup */}
        <div className="lg:col-span-6 relative w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[550px] relative select-none perspective-[1000px]"
          >
            {/* Ambient shadow behind the laptop */}
            <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[15%] bg-black/10 rounded-[32px] blur-[40px] pointer-events-none" />

            {/* MacBook Screen */}
            <div className="relative border-4 border-neutral-800 bg-neutral-900 rounded-t-2xl pt-[6%] px-[2%] pb-[2%] shadow-2xl overflow-hidden aspect-[16/10]">
              {/* Screen Bezel glass reflection */}
              <div className="absolute top-0 right-0 left-0 h-[50%] bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-10" />
              
              {/* Web Browser Frame */}
              <div className="w-full h-full bg-white rounded-lg shadow-inner overflow-hidden flex flex-col">
                {/* Browser bar */}
                <div className="h-6 bg-gray-50 border-b border-gray-100 px-3 flex items-center justify-between shrink-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="w-1/2 bg-gray-200/60 rounded text-[9px] text-gray-500 py-0.5 text-center truncate">
                    app.rimo.uz/dashboard
                  </div>
                  <div className="w-4" />
                </div>
                
                {/* Mockup Dashboard Content */}
                <div className="flex-1 bg-gray-50 p-2.5 overflow-hidden text-[9px] text-left">
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-[10px]">Asosiy Panel</h4>
                      <p className="text-gray-400 text-[7px]">Rimo MChJ</p>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-medium border border-emerald-100 flex items-center gap-0.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      hisobot.gov.uz: Bog'langan
                    </span>
                  </div>

                  {/* Cards Row */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-white border border-gray-100 p-2 rounded-lg">
                      <p className="text-gray-400 text-[7px] font-medium uppercase">Aylanma solig'i</p>
                      <h5 className="font-bold text-gray-800 mt-0.5">14,235,000 UZS</h5>
                      <span className="text-emerald-500 text-[6px] font-semibold">Tayyor holatda</span>
                    </div>
                    <div className="bg-white border border-gray-100 p-2 rounded-lg">
                      <p className="text-gray-400 text-[7px] font-medium uppercase">JShODS</p>
                      <h5 className="font-bold text-gray-800 mt-0.5">4,890,000 UZS</h5>
                      <span className="text-emerald-500 text-[6px] font-semibold">Topshirildi</span>
                    </div>
                    <div className="bg-white border border-gray-100 p-2 rounded-lg">
                      <p className="text-gray-400 text-[7px] font-medium uppercase">QQS (NDS)</p>
                      <h5 className="font-bold text-gray-800 mt-0.5">0 UZS</h5>
                      <span className="text-gray-400 text-[6px]">Majburiyat yo'q</span>
                    </div>
                  </div>

                  {/* Submission chart mockup */}
                  <div className="bg-white border border-gray-100 p-2.5 rounded-lg mb-3 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-semibold text-gray-700">Yuborilgan hisobotlar</span>
                      <span className="text-gray-400 text-[7px]">Oxirgi 6 oy</span>
                    </div>
                    <div className="h-10 flex items-end gap-1.5 pt-1.5">
                      <div className="w-full bg-gray-100 rounded-t h-[40%]" />
                      <div className="w-full bg-gray-100 rounded-t h-[60%]" />
                      <div className="w-full bg-gray-100 rounded-t h-[50%]" />
                      <div className="w-full bg-blue-500/80 rounded-t h-[75%]" />
                      <div className="w-full bg-blue-500/80 rounded-t h-[85%]" />
                      <div className="w-full bg-blue-600 rounded-t h-[100%]" />
                    </div>
                  </div>

                  {/* Bottom details */}
                  <div className="flex justify-between items-center text-[7px] text-gray-400">
                    <span>Oxirgi sinxronizatsiya: Bugun, 10:24</span>
                    <span className="text-blue-600 font-semibold cursor-pointer">Barcha hisobotlarni ko'rish &rarr;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MacBook Keyboard/Base Plate */}
            <div className="relative w-[112%] left-[-6%] h-3 bg-gradient-to-b from-neutral-300 to-neutral-400 rounded-b-xl shadow-lg border-t border-white/20">
              {/* Opener notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[16%] h-1 bg-neutral-600 rounded-b-sm" />
            </div>

            {/* Base Shadow */}
            <div className="w-[108%] left-[-4%] h-4 bg-black/20 rounded-full blur-[10px] absolute -bottom-3 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
