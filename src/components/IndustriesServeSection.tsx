import React from 'react';
import { motion } from 'framer-motion';

// Beautiful SVG Icons matching the image exactly
const Icons = {
  IT: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  SaaS: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  Automotive: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16v-4a2 2 0 00-2-2h-3l-2-4H9L7 10H4" />
    </svg>
  ),
  Manufacturing: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Automation: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  Semiconductor: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
    </svg>
  ),
  BFSI: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Healthcare: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  FMCG: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Retail: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  Logistics: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16v-4a2 2 0 00-2-2h-3l-2-4H9L7 10H4" />
    </svg>
  ),
  Infrastructure: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Education: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  ),
  Chemicals: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  GCC: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Startups: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Mining: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Aerospace: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  Energy: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Travel: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Wine: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H7M19 9H5" />
    </svg>
  ),
  Media: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h18M3 16h18M9 4l2 4M9 12l2 4M14 4l2 4M14 12l2 4" />
    </svg>
  ),
  Innovation: () => (
    <svg className="w-6 h-6 text-[#0A438F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
};

interface IndustryItem {
  title: string;
  icon: keyof typeof Icons;
}

interface IndustryCardProps {
  title: string;
  icon: keyof typeof Icons;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, icon }) => {
  const IconComponent = Icons[icon] || Icons.IT;

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)' }}
      className="w-full sm:w-[280px] h-[76px] rounded-xl border border-[#E2E8F0] bg-white flex items-center gap-4 px-4 transition-all duration-300 cursor-pointer shadow-sm"
    >
      {/* Left side: Light Blue Circular Badge with Dark Blue Icon */}
      <div className="w-12 h-12 rounded-full bg-[#EBF5FF] flex items-center justify-center shrink-0">
        <IconComponent />
      </div>

      {/* Right side: Left-aligned bold title */}
      <div className="flex-1 text-left">
        <h3 className="font-sans font-extrabold text-[#0B1B3D] text-[13px] tracking-tight leading-snug uppercase">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export const IndustriesServeSection: React.FC = () => {
  const industries: IndustryItem[] = [
    { title: "Information Technology (IT)", icon: "IT" },
    { title: "Software & SaaS", icon: "SaaS" },
    { title: "Emerging Technologies & Innovation", icon: "Innovation" },
    { title: "Global Capability Centres (GCC)", icon: "GCC" },
    { title: "Engineering & Manufacturing", icon: "Manufacturing" },
    { title: "Industrial Automation", icon: "Automation" },
    { title: "Electronics & Semiconductor", icon: "Semiconductor" },
    { title: "Chemicals & Fertilizers", icon: "Chemicals" },
    { title: "Mining & Steel", icon: "Mining" },
    { title: "Automotive", icon: "Automotive" },
    { title: "Aerospace & Defence", icon: "Aerospace" },
    { title: "BFSI", icon: "BFSI" },
    { title: "Healthcare & Pharmaceuticals", icon: "Healthcare" },
    { title: "FMCG & Consumer Goods", icon: "FMCG" },
    { title: "Retail & E-Commerce", icon: "Retail" },
    { title: "Logistics & Supply Chain", icon: "Logistics" },
    { title: "Infrastructure & Construction", icon: "Infrastructure" },
    { title: "Oil, Gas & Energy", icon: "Energy" },
    { title: "Travel, Hospitality & Leisure", icon: "Travel" },
    { title: "Wine & Spirits", icon: "Wine" },
    { title: "Media & Entertainment", icon: "Media" },
    { title: "Education & EdTech", icon: "Education" },
    { title: "Startups & High-Growth Enterprises", icon: "Startups" }
  ];

  return (
    <div id="industries-page-wrapper" className="bg-[#FAF8F5] text-[#0d131f] relative overflow-hidden min-h-screen font-sans">
      {/* 1. INDUSTRIES SERVED SECTION */}
      <section id="industries" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header Grid exactly matching image style */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 mb-16 text-left border-b border-slate-100 pb-8">
            <div className="flex-1 space-y-2">
              <span className="text-[11px] font-bold text-[#0A438F] uppercase tracking-wider block">
                OUR TARGETED MARKETS – TECHHIVE GLOBAL CONSULTING
              </span>
              <h1
                className="
                  text-5xl
                  md:text-7xl
                  lg:text-7xl
                  font-black
                  text-[#0B1B3D]
                  uppercase
                  leading-[0.9]
                  tracking-[-0.04em]
                "
              >
                INDUSTRIES
                <br />
                WE SERVE
              </h1>
              <div className="w-16 h-1 bg-[#0A438F] mt-4"></div>
            </div>
            
            {/* Vertical Divider Line inside the grid */}
            <div className="hidden lg:block w-[1px] bg-slate-300 my-2 self-stretch mx-4"></div>
            
            <div className="flex-1 lg:max-w-xl flex items-center">
              <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
                TechHive is a premier recruitment and executive search agency. We place specialized professionals across multiple micro-industries, matching unique sector regulations, technical systems, and leadership culture. Use our industry expertise to power your team's expansion.
              </p>
            </div>
          </div>

          {/* Grid of 23 Industries matched to the reference layout */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-7xl mx-auto">
            {industries.map((ind, idx) => (
              <IndustryCard key={idx} title={ind.title} icon={ind.icon} />
            ))}
          </div>

        </div>

        
      </section>
    </div>
  );
};

export default IndustriesServeSection;
