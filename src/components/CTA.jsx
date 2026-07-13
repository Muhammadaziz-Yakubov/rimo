import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTA = ({ onOpenWaitlist }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="cta">
      {/* Background gradients */}
      <div className="absolute top-[10%] right-[10%] w-[35%] h-[35%] rounded-full bg-blue-50/70 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[35%] h-[35%] rounded-full bg-gray-50 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gray-50 border border-gray-150 rounded-[32px] p-8 md:p-16 text-center shadow-xl relative overflow-hidden flex flex-col items-center justify-center"
          id="cta-banner"
        >
          {/* Decorative design rings */}
          <div className="absolute w-[600px] h-[600px] rounded-full border border-gray-200/50 pointer-events-none -z-10" />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-200/30 pointer-events-none -z-10" />

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111111] max-w-2xl leading-[1.15] mb-6" id="cta-heading">
            Soliq hisobotlarini <br />
            <span className="text-blue-600 font-black">zamonaviy usulda</span> boshqaring.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
            Rimo bilan soliq hisobotlarini topshirishdagi qiyinchiliklar, kechikishlar va jarimalar riskini butunlay unuting.
          </p>

          {/* Primary Action Button */}
          <button
            onClick={onOpenWaitlist}
            className="px-8 py-4 rounded-2xl bg-[#111111] text-white hover:bg-black font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5 cursor-pointer"
            id="cta-action-btn"
          >
            <span>Bepul boshlash</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Quick Stats/Props list */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 text-xs text-gray-500 font-medium border-t border-gray-200/60 pt-8 w-full max-w-md">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>3 daqiqada faollashadi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Kredit karta shart emas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>API integratsiyalangan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
