import React from 'react';
import { LucideIcon } from './LucideIcon';

interface AwardRowProps {
  index: number;
  donorCategory: string;
  awardTitle: string;
  awardSub: string;
  year: string;
  iconName: string;
  accent: AccentColor;
  isLast: boolean;
}

interface AccentColor {
  ring: string;
  text: string;
  bar: string;
  iconBg: string;
  iconText: string;
}

const ACCENTS: AccentColor[] = [
  { ring: 'border-[#3B82F6]', text: 'text-[#3B82F6]', bar: 'bg-[#3B82F6]', iconBg: 'bg-blue-50', iconText: 'text-[#3B82F6]' },
  { ring: 'border-[#22C55E]', text: 'text-[#22C55E]', bar: 'bg-[#22C55E]', iconBg: 'bg-green-50', iconText: 'text-[#22C55E]' },
  { ring: 'border-[#8B5CF6]', text: 'text-[#8B5CF6]', bar: 'bg-[#8B5CF6]', iconBg: 'bg-purple-50', iconText: 'text-[#8B5CF6]' },
  { ring: 'border-[#F97316]', text: 'text-[#F97316]', bar: 'bg-[#F97316]', iconBg: 'bg-orange-50', iconText: 'text-[#F97316]' },
  { ring: 'border-[#14B8A6]', text: 'text-[#14B8A6]', bar: 'bg-[#14B8A6]', iconBg: 'bg-teal-50', iconText: 'text-[#14B8A6]' },
];

const AwardRow: React.FC<AwardRowProps> = ({ index, donorCategory, awardTitle, awardSub, year, iconName, accent, isLast }) => {
  return (
    <div className="relative flex items-start gap-4 sm:gap-6">
      {/* Numbered badge + connecting line */}
      <div className="relative flex flex-col items-center shrink-0 mt-4">
        <div
          className={`relative z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white border-2 ${accent.ring} flex items-center justify-center font-mono font-black text-xs sm:text-sm ${accent.text}`}
        >
          0{index + 1}
        </div>
        {!isLast && <div className="w-px flex-1 bg-slate-200 my-1" style={{ minHeight: '1rem' }} />}
      </div>

      {/* Row card */}
      <div className={`relative flex-1 ${isLast ? '' : 'mb-4 sm:mb-5'} rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.04)] overflow-hidden group hover:shadow-md transition-shadow`}>
        {/* Colored accent bar on right edge */}
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-16 sm:h-20 rounded-l-full ${accent.bar}`} />

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3 sm:gap-6 items-center px-5 sm:px-7 py-5 sm:py-6 pr-7 sm:pr-10">
          {/* Milestone */}
          <h4 className="font-sans font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wide leading-snug text-left">
            {donorCategory}
          </h4>

          {/* Recognition */}
          <div className="flex items-center gap-3 sm:gap-4 text-left">
            <div className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center ${accent.iconBg} ${accent.iconText}`}>
              <LucideIcon name={iconName} className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <span className="block font-sans text-xs sm:text-[13px] font-extrabold text-slate-800 uppercase leading-tight">
                {awardTitle}
              </span>
              <span className="block font-mono text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-wide">
                {awardSub}
              </span>
            </div>
          </div>

          {/* Year */}
          <span className={`font-mono text-base sm:text-lg font-black ${accent.text} justify-self-start sm:justify-self-end`}>
            {year}
          </span>
        </div>
      </div>
    </div>
  );
};

export const AwardsSection: React.FC = () => {
  const milestones = [
    { donorCategory: "FOUNDED IN PUNE", awardTitle: "Business Genesis", awardSub: "MindPower HR Solutions", year: "2017", iconName: "Trophy" },
    { donorCategory: "AUTOMOTIVE DOMAIN EXPANSION", awardTitle: "Engineering Scale", awardSub: "Tier-1 Auto Ancillaries", year: "2019", iconName: "TrendingUp" },
    { donorCategory: "REBRANDED TO TECHHIVE GLOBAL", awardTitle: "Evolution to TechHive", awardSub: "GCC Scoped Services", year: "2021", iconName: "Award" },
    { donorCategory: "APAC & GLOBAL OFFICE SETUP", awardTitle: "Global Network Launch", awardSub: "Singapore & London Partner", year: "2023", iconName: "Star" },
    { donorCategory: "TRUSTED TALENT GATEWAY", awardTitle: "Strategic Enterprise Tier", awardSub: "20+ Fortune-Tier Entities", year: "2026", iconName: "Shield" }
  ];

  return (
    <section id="awards" className="relative bg-[#FAFAFA] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-150 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="font-sans font-black uppercase tracking-tighter leading-none text-4xl sm:text-5xl lg:text-6xl text-[#0d131f]">
            Our Journey
          </h2>
          <p className="mt-4 font-sans text-slate-500 text-sm sm:text-base font-medium">
            Key milestones that define our growth and success
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          {/* Column labels (desktop only) */}
          <div className="hidden sm:grid grid-cols-[1fr_1fr_auto] gap-6 px-5 sm:px-7 pb-3 ml-[64px] sm:ml-[80px] pr-10">
            <span className="font-sans text-[10px] font-extrabold text-slate-400 uppercase tracking-widest text-left">Milestone</span>
            <span className="font-sans text-[10px] font-extrabold text-slate-400 uppercase tracking-widest text-left">Recognition</span>
            <span className="font-sans text-[10px] font-extrabold text-slate-400 uppercase tracking-widest text-right">Year</span>
          </div>

          <div>
            {milestones.map((award, index) => (
              <AwardRow
                key={index}
                index={index}
                donorCategory={award.donorCategory}
                awardTitle={award.awardTitle}
                awardSub={award.awardSub}
                year={award.year}
                iconName={award.iconName}
                accent={ACCENTS[index % ACCENTS.length]}
                isLast={index === milestones.length - 1}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;
