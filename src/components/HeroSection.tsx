import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { AnimatedHeading } from './AnimatedHeading';

interface HeroSectionProps {
  onSyncClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSyncClick }) => {
  const handleScrollToContact = () => {
    if (onSyncClick) {
      onSyncClick();
      return;
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-[#0a0c10] overflow-hidden flex flex-col justify-between py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background video, replacing the previous static photo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 12, 16, 0.4) 0%, rgba(10, 12, 16, 0.75) 100%)`,
        }}
      />

      {/* Spacer for navigation safety */}
      <div className="h-16"></div>

      {/* Hero Visual Content */}
      <div className="relative max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center py-12">
        <div className="space-y-12">
          
          {/* Eyebrow - TechHive Style */}
          <div className="flex items-center space-x-3 text-white">
            <span className="font-sans font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase text-white">
              TALENT-FIRST RECRUITING PARTNER
            </span>
            <div className="w-16 h-[1.5px] bg-cyan-400"></div>
          </div>

          {/* Staggered Big Heading - TechHive Style */}
          {/* Premium Heading */}
{/* Staggered Big Heading */}
<div className="space-y-2 select-none" style={{ perspective: '1200px' }}>
  {["TECHHIVE", "GLOBAL", "CONSULTING"].map((text, index) => (
    <div key={text} className="overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: "80%", rotateX: 20 }}
        animate={{ opacity: 1, y: "0%", rotateX: 0 }}
        transition={{
          duration: 1.4,
          delay: index * 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`font-black text-white text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none uppercase ${
          index === 1
            ? "pl-8 sm:pl-24 md:pl-32"
            : index === 2
            ? "pl-16 sm:pl-40 md:pl-52"
            : ""
        }`}
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        {text}
      </motion.h2>
    </div>
  ))}
</div>

          {/* Left-Side Summary Paragraph Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
            <motion.div 
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-5"
            >
              <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                TechHive Global Consulting is a "talent-first" partner headquartered in Pune. Driven by a combined leadership legacy of over 50 years, we deliver premier recruiting, tactical contract staffing, and end-to-end Global Capability Center (GCC) scaling.
              </p>
              
              
            </motion.div>

            {/* Quick Metrics display on bottom right */}
            <div className="lg:col-span-7 flex flex-wrap justify-end gap-6 sm:gap-12 mt-8 lg:mt-0">
              <div className="text-right">
                <span className="block text-4xl sm:text-5xl font-black text-cyan-400">50+</span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-300 font-bold font-mono">Combined Yrs</span>
              </div>
              <div className="text-right">
                <span className="block text-4xl sm:text-5xl font-black text-cyan-400">5+</span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-300 font-bold font-mono">Global Regions</span>
              </div>
              <div className="text-right">
                <span className="block text-4xl sm:text-5xl font-black text-teal-400">15+</span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-300 font-bold font-mono">Automotive Giants</span>
              </div>
              <div className="text-right">
                <span className="block text-4xl sm:text-5xl font-black text-teal-400">10-12</span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-300 font-bold font-mono">Elite Advisors</span>
              </div>
            </div>
          </div>

        </div>
      </div>

     

      {/* Floating Scroll Down Arrow Icon */}
      <div className="w-full flex justify-center py-4 animate-bounce shrink-0">
        <button 
          onClick={() => {
            const nextSuite = document.getElementById('about');
            if (nextSuite) nextSuite.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
        >
          <LucideIcon name="ChevronDown" className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
