import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { AnimatedHeading } from './AnimatedHeading';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
  question: "What is our vision and mission?",
  answer: `Vision:
To become India's most trusted strategic talent acquisition partner by delivering exceptional recruitment experiences that empower businesses and transform careers.

Mission:
To provide innovative, ethical, and client-centric recruitment solutions that help organizations build high-performing teams while enabling professionals to achieve meaningful career success.`
},
    {
      question: "What is a recruitment company?",
      answer:
        "A recruitment company matches employers with qualified job seekers to fill specific openings. They manage sourcing, credentials evaluation, interviewing coordination, compliance, and onboarding to save corporate time, optimize tier rates, and reduce hire times."
    },
    {
      question: "What services does TechHive Global Consulting offer?",
      answer:
        "We offer tailored end-to-end talent solutions, including premium Executive Search, agile Contract Staffing with full EOR compliance, direct Product & Software engineering hiring, and custom Global Capability Center (GCC) scaling and incubation."
    },
    {
      question: "How is TechHive different from other recruitment companies in India?",
      answer:
        "TechHive is defined by over 50 years of combined founding leadership experience, specializing deeply in automotive hardware/software engineering, embedded RTOS, and complex GCC hub creation. We guarantee complete statutory compliance risk isolation, high-cadence communication, and hand-picked elite consultants."
    },
    {
      question: "What is the recruitment and vetting process at TechHive?",
      answer:
        "Our proven methodology includes meticulous Client Alignment, specialized Sourcing across pre-vetted talent pools, rigorous Technical Assessment (including custom coding exams), comprehensive Cultural-Fit evaluation, and guided Onboarding support."
    },
    {
      question: "What industries does TechHive serve?",
      answer:
        "We operate with extreme domain precision across 8 core sectors: IT Products & Services, Manufacturing, Automotive, Banking & Financial Services, Insurance, Healthcare & Life Sciences, E-Commerce, and Ports/Logistics."
    },
    {
      question: "What are the core benefits of partnering with TechHive?",
      answer:
        "Clients gain access to a highly curated global talent pool, lower contract staffing administrative complexity, transparent vendor-neutral Managed Services, and significant savings through streamlined vendor systems."
    },
    {
      question: "Why Leading Companies Choose TechHive?",
      answer: `Organizations across India trust TechHive because we deliver more than candidates—we deliver business outcomes.

Our clients benefit from:

• Industry-specialized recruitment consultants
• Extensive Pan-India talent network
• Faster turnaround and reduced time-to-hire
• Rigorous candidate assessment and quality screening
• Customized hiring strategies for every organization
• Strong expertise in niche and leadership hiring
• Transparent communication throughout the recruitment lifecycle
• Flexible hiring models including Permanent, Contract, RPO, and Project-Based Recruitment
• Dedicated client partnership with long-term hiring support`
    }
  ];

  return (
    <section
      id="faq"
      className="relative bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden text-slate-800"
    >
      {/* Background vector graphics */}
      <div className="absolute top-10 right-10 w-24 h-24 border border-dashed border-slate-200 rounded-full pointer-events-none animate-[spin_50s_linear_infinite]" />

      <div className="max-w-7xl mx-auto">
        <div className="space-y-3 text-left mb-12">
          <AnimatedHeading
            eyebrow="FAQ ON RECRUITMENT IN INDIA"
            title="FREQUENTLY ASKED QUESTIONS"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="border-b border-slate-200 py-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-sans font-bold text-slate-900 hover:text-[#2193b0] transition-colors py-2 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug pr-4">
                    {faq.question}
                  </span>

                  <div className="text-slate-400 shrink-0">
                    <LucideIcon
                      name={isOpen ? "Minus" : "Plus"}
                      className="w-5 h-5 transition-transform"
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 pb-2 whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;