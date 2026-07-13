import React from 'react';
import { Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-150 py-16 text-left" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          
          {/* Logo & About */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <a href="#" className="flex items-center group w-fit" id="footer-logo">
              <img 
                src="/rimo.png" 
                alt="Rimo Logo" 
                className="w-36 h-36 rounded-lg object-contain group-hover:scale-105 transition-transform duration-200" 
              />
            </a>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs">
              O'zbekiston bizneslari uchun soliq hisobotlarini tayyorlash, boshqarish va hisobot.gov.uz portaliga topshirish jarayonini soddalashtiruvchi premium platforma.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider mb-4">Navigatsiya</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#problem" className="text-xs md:text-sm text-gray-500 hover:text-[#111111] transition-colors">
                  Muammo
                </a>
              </li>
              <li>
                <a href="#solution" className="text-xs md:text-sm text-gray-500 hover:text-[#111111] transition-colors">
                  Yechim
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-xs md:text-sm text-gray-500 hover:text-[#111111] transition-colors">
                  Dashboard interfeysi
                </a>
              </li>
              <li>
                <a href="#features" className="text-xs md:text-sm text-gray-500 hover:text-[#111111] transition-colors">
                  Imkoniyatlar
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs md:text-sm text-gray-500 hover:text-[#111111] transition-colors">
                  Bog'lanish
                </a>
              </li>
            </ul>
          </div>

          {/* External Links / Partners */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider mb-4">Davlat Resurslari</h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="https://hisobot.gov.uz" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs md:text-sm text-gray-500 hover:text-[#111111] transition-colors inline-flex items-center gap-0.5 group"
                >
                  <span>hisobot.gov.uz</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a 
                  href="https://soliq.uz" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs md:text-sm text-gray-500 hover:text-[#111111] transition-colors inline-flex items-center gap-0.5 group"
                >
                  <span>Soliq qo'mitasi</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a 
                  href="https://my.soliq.uz" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs md:text-sm text-gray-500 hover:text-[#111111] transition-colors inline-flex items-center gap-0.5 group"
                >
                  <span>my.soliq.uz</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider mb-4">Ijtimoiy Tarmoqlar</h4>
            <div className="flex items-center space-x-3.5">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full border border-gray-150 text-gray-500 hover:text-[#111111] hover:border-gray-300 transition-colors shadow-2xs"
                aria-label="LinkedIn"
                id="footer-social-linkedin"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full border border-gray-150 text-gray-500 hover:text-[#111111] hover:border-gray-300 transition-colors shadow-2xs"
                aria-label="GitHub"
                id="footer-social-github"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full border border-gray-150 text-gray-500 hover:text-[#111111] hover:border-gray-300 transition-colors shadow-2xs"
                aria-label="Twitter"
                id="footer-social-twitter"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-400">
          <div>
            <span>&copy; {currentYear} Rimo. Barcha huquqlar himoyalangan.</span>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => onOpenLegal('privacy')} className="hover:underline cursor-pointer bg-transparent border-none p-0 text-xs text-gray-400 font-normal">Maxfiylik kelishuvi</button>
            <button onClick={() => onOpenLegal('terms')} className="hover:underline cursor-pointer bg-transparent border-none p-0 text-xs text-gray-400 font-normal">Foydalanish shartlari</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
