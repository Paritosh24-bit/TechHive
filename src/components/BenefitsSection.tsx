import React from 'react';
import { LucideIcon } from './LucideIcon';
import { AnimatedHeading } from './AnimatedHeading';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="relative bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 text-slate-800">
      
      {/* Decorative vector dot configurations */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full"></div>
      <div className="absolute bottom-24 right-12 w-6 h-6 border border-slate-300 rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: The 6-part pie chart magnifying glass infographic as in Image 5 */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Infographic Main Board */}
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              
              {/* Outer decorative orbits */}
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-200 animate-[spin_100s_linear_infinite]"></div>
              
              {/* Central beautiful custom pie chart representation */}
              <div className="relative w-80 h-80 rounded-full bg-white shadow-xl flex items-center justify-center p-4 border border-slate-100 z-10 hover:shadow-2xl transition-all duration-300">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Segment 1: Red */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ef4444" strokeWidth="20" strokeDasharray="41.87 251.2" strokeDashoffset="0" />
                  {/* Segment 2: Orange/Yellow */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="20" strokeDasharray="41.87 251.2" strokeDashoffset="-41.87" />
                  {/* Segment 3: Green */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="41.87 251.2" strokeDashoffset="-83.74" />
                  {/* Segment 4: Teal */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#06b6d4" strokeWidth="20" strokeDasharray="41.87 251.2" strokeDashoffset="-125.61" />
                  {/* Segment 5: Core Blue */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="41.2 251.2" strokeDashoffset="-167.48" />
                  {/* Segment 6: Deep Violet */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="42.5 251.2" strokeDashoffset="-208.68" />
                </svg>

                {/* Inner White Ring Cover */}
                <div className="absolute w-[180px] h-[180px] rounded-full bg-white flex items-center justify-center shadow-inner">
                  {/* Simulated Magnifying Glass Overlapping Layout */}
                  <div className="relative flex flex-col items-center">
                    {/* Glass Magnifier Ring */}
                    <div className="w-20 h-20 rounded-full border-4 border-[#2496BD] bg-sky-50/50 backdrop-blur-[1px] flex items-center justify-center shadow-lg relative">
                      <LucideIcon name="Search" className="w-8 h-8 text-[#2496BD]" />
                      {/* Magnifier diagonal handle */}
                      <div className="absolute top-16 left-16 w-8 h-3 bg-zinc-800 bg-slate-800 rotate-45 rounded shadow"></div>
                    </div>
                    <span className="text-[10px] font-sans font-black tracking-widest text-[#2496BD] mt-4">HIRE MATRIX</span>
                  </div>
                </div>

              </div>

              {/* OUTWARD LABELS WITH CORRESPONDING ARROWS AND LINES */}
              {/* Label 1: Top Left */}
              <div className="absolute top-0 left-0 text-left w-48 hidden sm:block">
                <span className="block font-sans font-black text-xs text-rose-600">LARGE TALENT DATABASE</span>
                <p className="text-[10px] text-slate-500 font-sans leading-snug">Vetted access to 35M+ localized technical and functional experts.</p>
              </div>

              {/* Label 2: Top Right */}
              <div className="absolute top-0 right-0 text-right w-48 hidden sm:block">
                <span className="block font-sans font-black text-xs text-amber-500 font-sans">24/7 CLIENT SUPPORT</span>
                <p className="text-[10px] text-slate-500 font-sans leading-snug">Continuous SLA support, escalation help, and dedicated agents.</p>
              </div>

              {/* Label 3: Bottom Left */}
              <div className="absolute bottom-6 left-0 text-left w-44 hidden sm:block">
                <span className="block font-sans font-black text-xs text-indigo-600">CONFIDENTIALITY SHIELD</span>
                <p className="text-[10px] text-slate-500 font-sans leading-snug">Rigorous NDA management, compliance-isolated recruiting desks.</p>
              </div>

              {/* Label 4: Bottom Right */}
              <div className="absolute bottom-6 right-0 text-right w-44 hidden sm:block">
                <span className="block font-sans font-black text-xs text-cyan-600">QUICK TURNAROUND</span>
                <p className="text-[10px] text-slate-500 font-sans leading-snug">Average submission clock of 48-72 hours matching target skills.</p>
              </div>

              {/* Label 5: Left Center */}
              <div className="absolute top-1/2 left-2 -translate-y-1/2 text-left w-40 sm:hidden">
                <span className="block font-sans font-black text-[11px] text-zinc-900">COST-EFFECTIVE</span>
              </div>

            </div>

            {/* Micro layouts showing other indicators on mobile */}
            <div className="sm:hidden grid grid-cols-2 gap-4 mt-8 w-full font-sans">
              <div className="p-3 bg-white rounded border border-slate-100 text-xs">
                <strong className="block text-rose-600">Large Talent database</strong>
                35M+ specialists list
              </div>
              <div className="p-3 bg-white rounded border border-slate-100 text-xs">
                <strong className="block text-amber-600">24/7 Customer Support</strong>
                Dedicated SLA team
              </div>
              <div className="p-3 bg-white rounded border border-slate-100 text-xs">
                <strong className="block text-indigo-600">Confidentiality</strong>
                Clean room isolated desks
              </div>
              <div className="p-3 bg-white rounded border border-slate-100 text-xs">
                <strong className="block text-cyan-600">Quick Turnaround</strong>
                48-72h profile submission
              </div>
            </div>

          </div>

          {/* Right Column: Descriptions, eyebrow tagline and massive title from Image 5 */}
          <div className="lg:col-span-6 space-y-8 lg:pl-4 text-left overflow-visible">
            
            <AnimatedHeading
              eyebrow="THE 10 BENEFITS OF CHOOSING TECHHIVE"
              title="BENEFITS OF CHOOSING TECHHIVE"
            />

            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              TechHive provides premium recruitment services designed to enhance hiring outcomes, delivering several key benefits to clients:
            </p>

            {/* List with light items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-cyan-100 text-cyan-700 animate-pulse mt-0.5">
                  <LucideIcon name="Check" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-slate-900 uppercase">Cost-Effective Sourcing</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">Optimizing recruitment spend with zero initial overhead.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-cyan-100 text-cyan-700 animate-pulse mt-0.5">
                  <LucideIcon name="Check" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-slate-900 uppercase">24/7 Account Management</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">Direct SLA-guided contact response timelines around the clock.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-cyan-100 text-cyan-700 animate-pulse mt-0.5">
                  <LucideIcon name="Check" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-slate-900 uppercase">Speed of Mobilization</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">Engineering pods ready to go in less than 7 business days.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-cyan-100 text-cyan-700 animate-pulse mt-0.5">
                  <LucideIcon name="Check" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-slate-900 uppercase">Statutory Zero-Risk</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">We handle EOR compliance completely to block corporate liability.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
