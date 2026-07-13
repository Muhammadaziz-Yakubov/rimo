import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Security from './components/Security';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import LegalModal from './components/LegalModal';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });

  const openWaitlist = () => setIsWaitlistOpen(true);
  const openLegalModal = (type) => setLegalModal({ isOpen: true, type });
  const closeLegalModal = () => setLegalModal((prev) => ({ ...prev, isOpen: false }));

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-white overflow-hidden text-[#111111] antialiased">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar onOpenWaitlist={openWaitlist} />

      {/* Landing Page Sections */}
      <main>
        {/* Hero Area */}
        <Hero onOpenWaitlist={openWaitlist} />
        
        {/* Problem cards */}
        <Problem />
        
        {/* Process solution flow */}
        <Solution />
        
        {/* Interactive Dashboard mock */}
        <Dashboard />
        
        {/* 6 Feature cards grid */}
        <Features />
        
        {/* Timeline of how it works */}
        <HowItWorks />
        
        {/* Secure login & servers information */}
        <Security />
        
        {/* FAQ list */}
        <FAQ />

        {/* Contact information and maps */}
        <Contact />
        
        {/* Final CTA banner */}
        <CTA onOpenWaitlist={openWaitlist} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={openLegalModal} />

      {/* Waitlist modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />

      {/* Legal modal */}
      <LegalModal isOpen={legalModal.isOpen} type={legalModal.type} onClose={closeLegalModal} />
    </div>
  );
}

export default App;
