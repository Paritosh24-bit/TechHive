import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import { 
  Building2, 
  Users, 
  Clock, 
  Database, 
  Lock, 
  Send, 
  Settings, 
  HelpCircle, 
  Award, 
  Globe2 
} from 'lucide-react';

interface ServicesSectionProps {
  isHome?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ isHome = false }) => {
  const serviceList = [
    {
      num: '1',
      title: 'EXECUTIVE SEARCH',
      desc: "TechHive conducts targeted executive search services to identify and place senior-level professionals in strategic roles, ensuring alignment with clients' leadership requirements and organisational goals."
    },
    {
      num: '2',
      title: 'PERMANENT STAFFING',
      desc: "TechHive provides permanent staffing services by sourcing and vetting qualified candidates for long-term positions, matching individuals to clients' specific requirements for skill and cultural fit."
    },
    {
      num: '3',
      title: 'GCC HIRING & SCALING',
      desc: "We orchestrate end-to-end recruitment, workspace advisory, legal compliance setup, and R&D hub scaling for Global Capability Centers in Indian tech hubs like Bengaluru, Pune, and Hyderabad."
    },
    {
      num: '4',
      title: 'CONTRACT STAFFING & EOR',
      desc: "Rapid deployment of certified programmers, designers, and admins under our zero-liability employer-of-record arrangements, shielding clients from local operational overhead."
    },
    {
      num: '5',
      title: 'Talent Mapping & Market Intelligence',
      desc: "We provide comprehensive market insights, salary benchmarking, talent availability analysis, and competitor hiring intelligence to help clients make informed hiring decisions."
    }
  ];

  const typesOfServices = [
    {
      title: "Permanent Staffing",
      desc: "TechHive finds and places candidates in full-time roles based on the employer’s requirements.",
      bullet: "✧"
    },
    {
      title: "Contract Staffing",
      desc: "Agencies hire candidates for short-term or project-based roles.",
      bullet: "✧"
    },
    {
      title: "Executive Search",
      desc: "Specialized recruitment services for senior-level and leadership roles.",
      bullet: "✧"
    },
    {
      title: "Bulk Hiring",
      desc: "Mass recruitment for entry-level or large workforce needs.",
      bullet: "✧"
    }
  ];

  const benefitsDetailed = [
    {
      title: "Customized Recruitment Strategies",
      desc: "Recruitment plans are created based on the company’s specific needs.",
      icon: <Settings className="w-5 h-5 text-inherit" />
    },
    {
      title: "Cost-Effectiveness",
      desc: "Reduces costs related to advertising, screening, and onboarding.",
      icon: <Building2 className="w-5 h-5 text-inherit" />
    },
    {
      title: "24x7 Availability",
      desc: "Recruitment support is available at all times.",
      icon: <Clock className="w-5 h-5 text-inherit" />
    },
    {
      title: "Dedicated Consultant",
      desc: "A single point of contact manages the recruitment process.",
      icon: <Users className="w-5 h-5 text-inherit" />
    },
    {
      title: "Large Talent Database",
      desc: "Access to pre-screened candidates from multiple industries.",
      icon: <Database className="w-5 h-5 text-inherit" />
    },
    {
      title: "Confidentiality",
      desc: "Candidate and employer information remains secure.",
      icon: <Lock className="w-5 h-5 text-inherit" />
    }
  ];

  const servedIndustries = [
    "Aerospace", "Agriculture", "Automotive", "BFSI", "Education", "Energy", 
    "FMCG", "Healthcare", "Hospitality", "Infrastructure", "ITES/BPO", 
    "Manufacturing", "Media", "Retail", "Technology", "Telecom"
  ];

  return (
    <div id="services-section-container">
      {/* SECTION 1: PRIMARY SUITES (DARK THEME) */}
      <section id="services-main" className="relative bg-[#0C0D0E] py-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-800 text-white overflow-hidden">
        {/* Dynamic decorative dark gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {/* Title Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
              <div className="lg:col-span-12 xl:col-span-7 space-y-4">
                <AnimatedHeading
                  eyebrow="SERVICES WE OFFER - BEST RECRUITMENT COMPANY"
                  title="THE RECRUITMENT SERVICES TechHive OFFERS"
                  light={true}
                />
              </div>

              <div className="lg:col-span-12 xl:col-span-5 lg:pt-12 font-sans text-sm sm:text-base leading-relaxed text-zinc-400">
                <p>
                  TechHive Consultants offers customized recruitment services matching diverse organizational needs, including executive search, permanent staffing, Global Capability Centers (GCC) enablement, and specialist hiring.
                </p>
              </div>
            </div>

            {/* Outer Split Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Side Column: Decorative floating graphic */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="absolute w-[280px] sm:w-[320px] h-[160px] bg-[#249CD1] rounded-lg rotate-12 transform translate-y-24 -translate-x-4 shrink-0 shadow-lg -z-0"></div>
                <div className="relative w-full max-w-[340px] sm:max-w-md aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-zinc-800 -rotate-6 transform hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 bg-[#14151a]">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                    alt="TechHive Global Recruiting HUD Network" 
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-[0.7] opacity-80"
                  />
                </div>
              </div>

              {/* Right Side Column: Vertical list of interactive services */}
              <div className="lg:col-span-7 space-y-1">
                <div className="divide-y divide-zinc-800 border-t border-b border-zinc-800">
                  {serviceList.map((service, index) => (
                    <div 
                      key={index} 
                      className="py-8 grid grid-cols-12 gap-4 group hover:bg-zinc-900/30 transition-colors duration-300 pr-2 pl-2 text-left"
                    >
                      {/* Number designation */}
                      <div className="col-span-1">
                        <span className="font-mono text-zinc-600 text-zinc-500 font-bold text-lg sm:text-xl group-hover:text-cyan-400 transition-colors">
                          {service.num}
                        </span>
                      </div>

                      {/* Narrative details */}
                      <div className="col-span-10 space-y-3">
                        <h3 className="font-sans font-black tracking-tight text-white text-lg sm:text-xl uppercase group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>

                      {/* Arrow direction indicator */}
                      <div className="col-span-1 flex items-center justify-end">
                        <div className="text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                          <Send className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPREHENSIVE RECRUITMENT SERVICES IN INDIA (LIGHT THEME) */}
      {!isHome && (
        <section id="recruitment-services-india" className="relative bg-[#FCFAF6] py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200 text-[#0d131f] overflow-hidden">
          {/* Subtle light background vectors */}
          <div className="absolute top-10 right-10 w-48 h-48 bg-slate-100/40 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-stone-100/50 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto space-y-20">
            {/* Header layout */}
            <div className="text-left space-y-4 max-w-4xl">
              <AnimatedHeading
                eyebrow="IN-DEPTH RECRUITMENT SERVICES IN INDIA"
                title="RECRUITMENT SERVICES IN INDIA"
              />
              <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed">
                Recruitment services in India help businesses find and hire qualified candidates for various job roles. These services cover sourcing, screening, interviewing, and onboarding of candidates to fill temporary, permanent, and contract positions across different industries.
              </p>
            </div>

            {/* Grid of Two Core Informational Pillars: Why Important & How They Work */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <div className="flex items-center space-x-3 text-[#249CD1]">
                  <HelpCircle className="w-6 h-6" />
                  <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tight text-[#0d131f]">
                    Why Are Recruitment Services Important in India?
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  Recruitment services are important in India because they streamline the hiring process, reduce hiring costs, and improve the quality of hires. They enable companies to access a wider talent pool, reduce time-to-hire, and ensure candidates match job requirements accurately.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <div className="flex items-center space-x-3 text-[#249CD1]">
                  <Settings className="w-6 h-6" />
                  <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tight text-[#0d131f]">
                    How Do Recruitment Services Work in India?
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  Recruitment services in India work by identifying job requirements, sourcing candidates, conducting initial screenings, facilitating interviews, and managing the onboarding process. recruitment partners like TechHive use databases, job portals, and professional networks to source candidates.
                </p>
              </div>
            </div>

            {/* Types of Recruitment Services Grid */}
            <div className="space-y-6 text-left">
              <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0d131f]">
                Types of Recruitment Services in India
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {typesOfServices.map((type, tIdx) => (
                  <div 
                    key={tIdx} 
                    className="bg-white border border-stone-200 rounded-2xl p-6 space-y-3 hover:bg-[#249CD1] hover:border-[#249CD1] group transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.015)]"
                  >
                    <div className="text-[#249CD1] group-hover:text-white font-black text-lg select-none transition-colors duration-200">
                      {type.bullet}
                    </div>
                    <h4 className="font-sans font-black text-base uppercase text-[#0d131f] group-hover:text-white tracking-tight transition-colors duration-200">
                      {type.title}
                    </h4>
                    <p className="font-sans text-xs text-stone-600 group-hover:text-stone-100 leading-relaxed transition-colors duration-200">
                      {type.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits of Using Recruitment Services Grid */}
            <div className="space-y-8 text-left pt-6">
              <div className="space-y-2">
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0d131f]">
                  Benefits of Using Recruitment Services in India
                </h3>
                <p className="font-sans text-xs sm:text-sm text-stone-605 text-stone-500">
                  Using recruitment services helps businesses save time, reduce costs, and improve candidate quality. TechHive provides client organizations with instant access to a large pre-screened talent pool, segment expertise, and fast turnaround times.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefitsDetailed.map((ben, bIdx) => (
                  <div 
                    key={bIdx} 
                    className="bg-white border border-stone-200 rounded-2xl p-6 flex items-start space-x-4 hover:bg-[#249CD1] hover:border-[#249CD1] group transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.015)]"
                  >
                    <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-100 group-hover:bg-white/10 group-hover:border-transparent rounded-lg shrink-0 text-[#249CD1] group-hover:text-white transition-all duration-200">
                      {ben.icon}
                    </div>
                    <div className="space-y-1.5 text-left">
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-stone-900 group-hover:text-white uppercase tracking-tight transition-colors duration-200">
                        {ben.title}
                      </h4>
                      <p className="font-sans text-xs text-stone-600 group-hover:text-stone-100 leading-relaxed transition-colors duration-200">
                        {ben.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose TechHive & Industries Served block */}
            <div className="border-t border-stone-200 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
              {/* Choose column */}
              <div className="lg:col-span-6 space-y-6 bg-[#249CD1]/5 border border-[#249CD1]/30 rounded-2xl p-8">
                <div className="flex items-center space-x-3 text-[#249CD1]">
                  <Award className="w-7 h-7" />
                  <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tight text-[#0d131f]">
                    Why Choose TechHive for Recruitment Services in India?
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-stone-700 leading-relaxed">
                  TechHive is a leading recruitment partner in India with over <strong className="text-stone-900 text-sm">21 years of experience</strong>, having placed <strong className="text-stone-900 text-sm">1,00,000 candidates</strong> across <strong className="text-stone-900 text-sm">30 industries</strong>. TechHive employs <strong className="text-stone-900 text-sm">400 recruitment specialists</strong> and offers industry-specific hiring solutions for sectors including BFSI, ITES/BPO, Healthcare, Manufacturing, and Technology.
                </p>
              </div>

              {/* Industries served tag field */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center space-x-3 text-[#249CD1]">
                  <Globe2 className="w-6 h-6" />
                  <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tight text-[#0d131f]">
                    Industries Served by TechHive
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-stone-600">
                  Our localized network spans comprehensive verticals across India. We deliver custom talent operations for over 30 targeted industries:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {servedIndustries.map((indName, iId) => (
                    <span 
                      key={iId} 
                      className="inline-flex items-center px-3 py-1 bg-white border border-stone-200 rounded-md font-sans text-xs font-mono text-[#249CD1] hover:bg-[#249CD1] hover:text-white hover:border-[#249CD1] transition-colors shadow-sm cursor-pointer"
                    >
                      ✦ {indName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicesSection;
