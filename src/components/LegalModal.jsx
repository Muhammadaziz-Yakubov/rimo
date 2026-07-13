import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

const LegalModal = ({ isOpen, type, onClose }) => {
  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#111111]/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-white border border-gray-150 rounded-[32px] p-6 md:p-8 shadow-2xl overflow-hidden z-10 text-left flex flex-col max-h-[85vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Yopish"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3.5 pb-5 border-b border-gray-100 shrink-0">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isPrivacy ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
                {isPrivacy ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#111111] tracking-tight">
                  {isPrivacy ? 'Maxfiylik Siyosati' : 'Foydalanish Shartlari'}
                </h3>
                <p className="text-xs text-gray-400">Oxirgi yangilanish: 13-Iyul, 2026</p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto py-6 pr-2 space-y-6 text-sm text-gray-600 leading-relaxed max-w-none">
              {isPrivacy ? (
                <>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">1. Umumiy qoidalar</h4>
                    <p>
                      Ushbu Maxfiylik kelishuvi Rimo platformasi (keyingi o'rinlarda "Tizim" yoki "Platforma") foydalanuvchilarining shaxsiy va tijorat ma'lumotlari xavfsizligini ta'minlash maqsadida ishlab chiqilgan. Platformadan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">2. Ma'lumotlar xavfsizligi va ERI kalitlari</h4>
                    <p>
                      Rimo xavfsizlikning eng yuqori standartlariga amal qiladi. Foydalanuvchilarning Elektron Raqamli Imzo (ERI) kalitlari va parollari hech qachon Rimo serverlarida saqlanmaydi va uzatilmaydi. Barcha imzolash amallari to'g'ridan-to'g'ri foydalanuvchining o'z qurilmasi (brauzer) ichida shifrlangan sessiya doirasida amalga oshiriladi.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">3. Ma'lumotlarni yig'ish va ulardan foydalanish</h4>
                    <p>
                      Platforma faqat soliq hisobotlarini shakllantirish va yuborish uchun zarur bo'lgan ma'lumotlarni (tashkilot STIR raqami, aylanma va xodimlar haqidagi ma'lumotlar) qayta ishlaydi. Ushbu ma'lumotlar uchinchi shaxslarga sotilmaydi yoki ijaraga berilmaydi.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">4. Davlat organlari bilan integratsiya</h4>
                    <p>
                      Rimo davlat soliq organlari portali (hisobot.gov.uz) bilan integratsiyalashgan API shlyuzlari orqali ishlaydi. Siz tasdiqlagan hisobotlar xavfsiz HTTPS protokoli orqali to'g'ridan-to'g'ri davlat bazasiga uzatiladi.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">5. Maxfiylik shartlariga o'zgartirishlar kiritish</h4>
                    <p>
                      Platforma ma'muriyati zarur hollarda ushbu Maxfiylik siyosatiga o'zgartirishlar kiritish huquqini saqlab qoladi. O'zgartirishlar kiritilganda sahifadagi "yangilanish sanasi" yangilanadi.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">1. Xizmat shartlari</h4>
                    <p>
                      Rimo platformasi kichik va o'rta biznes sub'ektlari uchun soliq hisobotlarini avtomatik rejimda tayyorlash, nazorat qilish va yuborish imkonini beruvchi premium landing va demo boshqaruv portalidir.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">2. Foydalanuvchining majburiyatlari</h4>
                    <p>
                      Foydalanuvchi tizimga kiritiladigan soliq majburiyatlari, tranzaksiyalar va korxona ma'lumotlarining haqqoniyligiga shaxsan javobgardir. Shuningdek, foydalanuvchi shaxsiy hisob yozuvi va ERI kalitlaridan foydalanish xavfsizligini ta'minlashi shart.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">3. Mas'uliyatni cheklash (Disclaimer)</h4>
                    <p>
                      Rimo platformasi foydalanuvchilarning hisobotlarini tayyorlashda yordamchi dastur hisoblanadi. Davlat API xizmatlarining (hisobot.gov.uz) vaqtincha ishlamasligi, foydalanuvchining xatosi tufayli noto'g'ri topshirilgan ma'lumotlar yoki yuzaga kelishi mumkin bo'lgan har qanday soliq jarimalari, kechikishlar uchun Platforma javobgar bo'lmaydi.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">4. Intellektual mulk huquqi</h4>
                    <p>
                      Rimo brendi, logotipi, interfeys dizayni va barcha matnli ma'lumotlar Platforma mulki hisoblanadi. Ularni nusxalash, qayta nashr qilish yoki ruxsatsiz foydalanish qat'iyan taqiqlanadi.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">5. Qo'shimcha shartlar</h4>
                    <p>
                      Platforma ma'muriyati xizmat ko'rsatish narxlarini (tariflarini) o'zgartirish, tizim funktsionaliga tuzatishlar kiritish va profilaktika ishlarini olib borish huquqiga ega.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="pt-5 border-t border-gray-100 flex justify-end shrink-0">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#111111] hover:bg-black text-white font-semibold text-xs transition-all duration-200 cursor-pointer"
              >
                Tushunarli
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
