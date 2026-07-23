import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand Business & Hiring Requirements',
      desc: "We begin by understanding your business objectives, workforce requirements, company culture, and the specific skills needed for each role. This enables us to identify candidates who align with both technical and organizational expectations."
    },
    {
      num: '02',
      title: 'Define Recruitment Strategy',
      desc: "Based on your hiring goals, we develop a customized recruitment strategy that outlines sourcing channels, timelines, evaluation methods, and hiring priorities. Our approach is designed to deliver quality talent efficiently."
    },
    {
      num: '03',
      title: 'Talent Sourcing',
      desc: "Using our extensive candidate database, professional networks, job portals, referrals, and social platforms, we proactively identify and engage highly qualified professionals who match your hiring requirements."
    },
    {
      num: '04',
      title: 'Candidate Screening & Assessment',
      desc: "Each candidate undergoes a comprehensive screening process that includes resume evaluation, skill assessment, experience verification, and cultural fit analysis. Only the most suitable candidates are shortlisted."
    },
    {
      num: '05',
      title: 'INTERVIEW COORDINATION',
      desc: "We manage the complete interview process by scheduling interviews, coordinating with both clients and candidates, collecting feedback, and ensuring smooth communication at every stage."
    },
    {
      num: '06',
      title: 'Offer Management',
      desc: "Our team facilitates salary discussions, negotiates offers professionally, addresses candidate concerns, and ensures a positive experience that improves offer acceptance rates."
    },
    {
      num: '07',
      title: 'Joining & Onboarding Support',
      desc: "We provide continuous support throughout the notice period and onboarding process, helping candidates complete documentation and ensuring a smooth transition into their new organization."
    },
    {
      num: '08',
      title: 'Post-Placement Follow-up',
      desc: "Our relationship continues beyond placement through regular follow-ups with both clients and candidates to ensure successful integration, job satisfaction, and long-term retention."
    }
  ];

  return (
    <section id="process" className="relative bg-[#FAF5F2] py-24 px-4 sm:px-6 lg:px-8 border-b border-separate border-slate-200 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Step-Header Grid representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <AnimatedHeading
              eyebrow="OUR RECRUITMENT PROCESS"
              title="RECRUITMENT PROCESS AT TechHive"
            />
          </div>
          
          <div className="lg:col-span-6 lg:pt-8 font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              TechHive follows a structured and results-driven recruitment process to deliver efficient, accurate, and customized hiring solutions. From understanding client requirements and sourcing top talent to screening, interview coordination, and onboarding, we ensure a seamless hiring experience tailored to your business goals.
            </p>
          </div>
        </div>

        {/* Floating graphic wireline indicator representing Image 3 precise layout */}
        <div className="relative w-full flex justify-center -mb-8 z-10">
          <div className="relative flex items-center justify-center">
            {/* Blank decorative circle overlapping exactly */}
            <div className="w-12 h-12 rounded-full border border-slate-900/40 bg-[#FAF5F2] flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-slate-950 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* 6 Columns vertical list grid layout with border borders side dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-300 bg-[#FAF5F2] mt-4 shadow-sm overflow-hidden rounded-xl">
          {steps.map((step, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    whileHover={{
      backgroundColor: "rgba(234, 224, 217, 0.5)",
      transition: { duration: 0.2 }
    }}
    className={`
      p-5 sm:p-6 lg:p-8
      flex flex-col justify-between
      transition-colors duration-300
      min-h-[260px] lg:min-h-[320px]

      border-r border-b border-slate-300

      lg:${(idx + 1) % 4 === 0 ? "border-r-0" : ""}
      ${idx >= 4 ? "lg:border-b-0" : ""}
    `}
  >
    <div className="space-y-6">
      <span className="block font-mono text-xs text-[#2193b0] font-bold tracking-wider">
        STEP {step.num}
      </span>

      <h3 className="font-sans font-black text-slate-900 text-lg sm:text-xl tracking-tight uppercase leading-snug">
        {step.title}
      </h3>
    </div>

    <p className="font-sans text-slate-600 text-xs sm:text-[13px] leading-relaxed mt-4">
      {step.desc}
    </p>
  </motion.div>
))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
