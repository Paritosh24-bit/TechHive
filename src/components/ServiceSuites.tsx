import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { AnimatedHeading } from './AnimatedHeading';

interface FeatureItem {
  title: string;
  desc: string;
  iconName: string;
}

interface ServiceSuite {
  id: string;
  title: string;
  tabLabel: string;
  subtitle: string;
  image: string;
  accentColor: string;
  textColor: string;
  tagline: string;
  features: FeatureItem[];
}

const SUITES: ServiceSuite[] = [
  {
    id: 'gcc',
    tabLabel: 'GCC Sourcing',
    title: 'GCC Hiring & Scaling',
    subtitle: 'Our Comprehensive Suite of GCC Hiring and Scaling Services',
    tagline: 'Establish, scale, and manage Global Capability Centers (GCC) in India\'s premier tech hubs with high compliance and vetted talent.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=850&q=80',
    accentColor: '#0f172a',
    textColor: 'text-slate-900',
    features: [
      {
        title: 'Business-Case Analysis',
        desc: 'Evaluate feasibility, investment needs, and projected ROI for your new GCC.',
        iconName: 'Building2'
      },
      {
        title: 'Talent-Acquisition Strategy',
        desc: 'Design a targeted sourcing plan aligned with your GCC’s strategic functions.',
        iconName: 'Users'
      },
      {
        title: 'Compliance & Payroll Setup',
        desc: 'Establish regulatory frameworks and global payroll processes for smooth operations.',
        iconName: 'Shield'
      },
      {
        title: 'Global Talent-Pool Access',
        desc: 'Leverage our nationwide network to source specialized, culture-fit candidates for your GCC.',
        iconName: 'Globe2'
      }
    ]
  },
  {
    id: 'contract',
    tabLabel: 'Contract Staffing',
    title: 'Contract Staffing',
    subtitle: 'Our Comprehensive Suite of Contract Staffing Services',
    tagline: 'Shield your TechHive from overhead and deploy certified contract experts under secure, zero-liability EOR compliance arrangements.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=850&q=80',
    accentColor: '#1e3a8a',
    textColor: 'text-blue-950',
    features: [
      {
        title: 'Pre-Vetted Contract Professionals',
        desc: 'Supply screened talent across all functional and specialized technical roles.',
        iconName: 'CheckCircle2'
      },
      {
        title: 'Agile Scalability',
        desc: 'Enable rapid workforce adjustments to meet fluctuating project demands.',
        iconName: 'Activity'
      },
      {
        title: 'Onboarding & Compliance',
        desc: 'Manage end-to-end onboarding, legal background checks, and automated payroll for contractors.',
        iconName: 'FileText'
      },
      {
        title: 'Retention Management',
        desc: 'Implement tailored strategic models to maximize contract professional engagement and continuity.',
        iconName: 'Target'
      }
    ]
  },
  {
    id: 'product',
    tabLabel: 'Product & Tech',
    title: 'Product & Software',
    subtitle: 'Our Comprehensive Suite of Product & Software Hiring Services',
    tagline: 'Source elite talent for high-performance software engineering, product innovation, and roadmap delivery.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=850&q=80',
    accentColor: '#8256bd',
    textColor: 'text-[#8256bd]',
    features: [
      {
        title: 'Tech-Talent Sourcing',
        desc: 'Tap India’s premier tech capital hubs to recruit elite developers, cloud experts, and product leads.',
        iconName: 'Code2'
      },
      {
        title: 'Advanced Assessments',
        desc: 'Use rigorous programming screenings and data-driven objective metrics to validate technical skills.',
        iconName: 'Award'
      },
      {
        title: 'Cultural-Fit Evaluation',
        desc: 'Ensure flawless, smooth alignment with buyer organizational values structure through bespoke frameworks.',
        iconName: 'Users'
      },
      {
        title: 'Team Build & Augmentation',
        desc: 'Assemble or scale high-performing software engineering teams for custom new software milestones.',
        iconName: 'Building2'
      }
    ]
  },
  {
    id: 'managed',
    tabLabel: 'Managed Services',
    title: 'Managed Services (MSP)',
    subtitle: 'Our Comprehensive Suite of Managed Services',
    tagline: 'Deliver absolute supplier governance, complete cost visibility, and unified workforce invoicing controls.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=850&q=80',
    accentColor: '#0ea5e9',
    textColor: 'text-sky-950',
    features: [
      {
        title: 'Vendor Management Systems',
        desc: 'Deploy state-of-the-art VMS tools for unified enterprise client workforce monitoring.',
        iconName: 'Database'
      },
      {
        title: 'Vendor-Neutral Partnership',
        desc: 'Act as a highly strategic, objective middleman layer to consolidate complex supplier ecosystems.',
        iconName: 'Briefcase'
      },
      {
        title: 'Compliance & Risk Mitigation',
        desc: 'Conduct detailed legal checks, meticulous IC classifications, and automated background audits.',
        iconName: 'Shield'
      },
      {
        title: 'Billing & Cost Control',
        desc: 'Apply bundled invoicing structures and volume tier negotiation rates to slash system expenses.',
        iconName: 'Coins'
      }
    ]
  }
];

export const ServiceSuites: React.FC = () => {
  const [activeSuiteId, setActiveSuiteId] = useState<string>('gcc');

  const activeSuite = SUITES.find((s) => s.id === activeSuiteId) || SUITES[0];

  return (
    <section id="service-suites" className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header exactly matching corporate design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 mb-12">
          <div className="space-y-3">
            <AnimatedHeading
              eyebrow="Strategic Capability Frameworks"
              title="OUR DEEPER SERVICE SUITES"
            />
            <p className="font-sans text-slate-500 text-xs sm:text-sm max-w-2xl">
              Explore our structured operational processes designed to solve complex international workforce hiring, compliance, and legal setup hurdles.
            </p>
          </div>

          {/* Micro-interactive switcher labels */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
            {SUITES.map((suite) => {
              const isActive = suite.id === activeSuiteId;
              return (
                <button
                  key={suite.id}
                  onClick={() => setActiveSuiteId(suite.id)}
                  className={`px-3 py-2 rounded-lg font-sans font-bold text-xs transition-all relative ${
                    isActive ? 'text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSuiteTab"
                      className="absolute inset-0 bg-slate-900 rounded-lg -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{suite.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Board block wrapping active suite content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSuiteId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl border border-slate-150 shadow-xl overflow-hidden"
          >
            {/* Left Side: Modern Atmospheric Landscape Picture mimicking visual images */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[500px]">
              {/* Colored Corner overlay accents matching design */}
              <div 
                className="absolute top-0 left-0 w-24 h-24 pointer-events-none z-10 opacity-20 transform -translate-x-6 -translate-y-6 rounded-full blur-xl"
                style={{ backgroundColor: activeSuite.accentColor }}
              />
              
              <img
                src={activeSuite.image}
                alt={activeSuite.title}
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88] hover:scale-105 transition-transform duration-700"
              />

              {/* Float Card representing premium status inside image panel */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-lg z-10 text-left">
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: activeSuite.accentColor }} />
                  <span className="font-mono text-[9px] font-black uppercase tracking-widest text-slate-500">
                    Tactical Blueprint
                  </span>
                </div>
                <h4 className="font-sans font-extrabold text-sm text-slate-900 uppercase tracking-tight">
                  {activeSuite.title}
                </h4>
                <p className="font-sans text-[11px] text-slate-500 leading-normal mt-1">
                  {activeSuite.tagline}
                </p>
              </div>
            </div>

            {/* Right Side: Features matching the structured images uploaded */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between text-left">
              <div className="space-y-6">
                
                {/* Header structure mirroring photos */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span 
                      className="inline-block px-2.5 py-0.5 rounded text-[8.5px] font-black uppercase tracking-widest text-white"
                      style={{ backgroundColor: activeSuite.accentColor }}
                    >
                      Active Suite
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      TechHive Global Systems
                    </span>
                  </div>
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug">
                    {activeSuite.subtitle}
                  </h3>
                </div>

                {/* Vertical lists exactly formatted like photos with Bold Key + Colon + Description */}
                <div className="space-y-5 pt-4">
                  {activeSuite.features.map((feat, index) => (
                    <div 
                      key={index}
                      className="relative flex items-start space-x-4 p-4 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all group"
                    >
                      {/* Stylized custom circular graphic placeholder icon */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                        <LucideIcon name={feat.iconName} className="w-4 h-4" />
                      </div>

                      {/* Content block: bold title + colon and standard description */}
                      <div className="space-y-1">
                        <h5 className="font-sans font-extrabold text-[#0f172a] text-sm tracking-tight">
                          {feat.title}:
                        </h5>
                        <p className="font-sans text-xs text-slate-500 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action trigger panel */}
              <div className="border-t border-slate-100 pt-7 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left font-sans">
                  <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest">Sourcing Gateway</span>
                  <span className="block text-xs font-semibold text-slate-700 font-mono">Secure Direct Sync Active</span>
                </div>
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-black uppercase text-white tracking-widest bg-slate-900 hover:bg-slate-800 transition-all shadow-md hover:translate-y-[-1px]"
                >
                  <span>Sourcing Request</span>
                  <LucideIcon name="ArrowUpRight" className="w-3.5 h-3.5 ml-2" />
                </a>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ServiceSuites;
