import React from 'react';
import { LucideIcon } from './LucideIcon';
import { AnimatedHeading } from './AnimatedHeading';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Glass Skyscraper with 3 overlay cards mapping to Image 2 */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Background geometric design indicators */}
            <div className="absolute top-4 left-10 w-16 h-16 rounded-full border border-slate-200 pointer-events-none"></div>
            <div className="absolute bottom-16 right-4 w-4 h-4 bg-slate-900 rounded-full pointer-events-none"></div>

            {/* Skyscraper corporate photo frame with nice curved borders */}
            <div className="w-full max-w-md h-[480px] sm:h-[580px] bg-slate-100 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src="https://ik.imagekit.io/paritosh/GBB_Images_Overview-1.jpg" 
                alt="TechHive Corporate Headquarters Skyscraper" 
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.9] hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Layer 1 Overlapping Custom Corporate Metric Card */}
            <div className="absolute top-10 right-0 sm:-right-8 w-72 sm:w-80 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-100/80 hover:shadow-2xl transition-all duration-300 transform -translate-y-2 hover:-translate-y-3">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 flex items-center justify-center text-[#2193b0]">
                  <LucideIcon name="Shield" className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-black text-xs text-slate-900 tracking-wider uppercase">
                  99.8% COMPLIANCE
                </h4>
              </div>
              <p className="font-sans text-[11px] text-slate-500 leading-normal">
                Rigorous regulatory framework compliance to manage automated local payroll structures and legal EOR safeguards flawlessly.
              </p>
            </div>

            {/* Layer 2 Overlapping Custom Corporate Metric Card */}
<div className="absolute top-1/2 -left-16 sm:-left-12 w-72 sm:w-80 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-100/80 hover:shadow-2xl transition-all duration-300 transform -translate-y-1/2 hover:-translate-y-[52%] z-20">
  <div className="flex items-center space-x-3 mb-2">
    <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
      <LucideIcon name="Users" className="w-4 h-4" />
    </div>
    <h4 className="font-sans font-black text-xs text-slate-900 tracking-wider uppercase">
      50+ YRS EXPERIENCE
    </h4>
  </div>
  <p className="font-sans text-[11px] text-slate-500 leading-normal">
    Steered by a highly professional elite recruitment committee with decades of combined direct scale expertise in tech hubs.
  </p>
</div>
            {/* Layer 3 Bottom Overlapping Custom Corporate Metric Card */}
            <div className="absolute bottom-10 right -0 sm:-right-7 w-72 sm:w-80 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-100/80 hover:shadow-2xl transition-all duration-300 transform translate-y-2 hover:translate-y-1">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <LucideIcon name="Zap" className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-black text-xs text-slate-900 tracking-wider uppercase">
                  SLA RAPID DELIVERY
                </h4>
              </div>
              <p className="font-sans text-[11px] text-slate-500 leading-normal">
                Vetted deployment pipelines with average high-quality professional submission times clocking under 48-72 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Narrative descriptions, upper-case header and tags mapping to Image 2 */}
          <div className="lg:col-span-6 space-y-8 lg:pl-4">
            
            <AnimatedHeading
              eyebrow="TALENT-FIRST RECRUITING PARTNER"
              title="ABOUT TECHHIVE GLOBAL CONSULTING"
            />

            <div className="space-y-6 text-[#4a5568] font-sans text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-slate-905 font-bold text-slate-800">At TechHive Global Consulting Pvt. Ltd.</strong> we believe that people are the driving force behind every successful organization. <strong className="text-slate-905 font-bold text-slate-800">over 50 years of combined industry experience</strong> , our consultants possess deep expertise across multiple industries and functional domains. Our extensive talent network enables us to identify, attract, assess, and deliver highly skilled professionals for both permanent and contract positions.

              </p>
              <p>
                <strong className="text-slate-905 font-bold text-slate-800">Since 2011</strong> , TechHive has been delivering specialized recruitment and workforce solutions that help businesses build high-performing teams while enabling professionals to achieve meaningful career growth. Headquartered in <strong className="text-slate-905 font-bold text-slate-800">Pune</strong> with recruitment capabilities across <strong className="text-slate-905 font-bold text-slate-800">Pan India</strong> , we combine local market expertise with a broad professional network to connect exceptional talent with leading organizations    
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
