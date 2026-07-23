/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, IndustryItem, TeamMember, OfficeLocation, ClientTestimonial } from './types';

export const COMPANY_ABOUT = {
  foundedYear: '2017',
  tagline: 'Leading Global Talent & GCC Solutions Partner',
  briefIntro: 'TechHive Global Consulting Pvt. Ltd. is a "talent-first" consulting partner headquartered in Pune, India. Evolving from MindPower HR Solutions founded in 2017, we deliver highly specialized recruitment, staffing, and executive hiring services across both Tech and Non-Tech segments, supporting product companies, captive centers, and Global Capability Centers (GCCs) globally.',
  mission: 'To play a pivotal role in our clients’ growth and transformation journeys leveraging our people, processes and technology.',
  vision: 'To be the trusted partner of choice, enabling business growth and transformation through thoughtful solutions and lasting impact.',
  values: [
    { title: 'People-First Thinking', desc: 'We believe talent is the core of every transformation, and we put people at the heart of everything we do.' },
    { title: 'Precision with Purpose', desc: 'Every solution we deliver is shaped by data, insight, and a deep understanding of business impact.' },
    { title: 'Integrity in Action', desc: 'We build trust through transparency, ethics, and consistency in every client and employee interaction.' },
    { title: 'Lasting Partnerships', desc: 'We strive to create meaningful, long-term value for clients and employees alike through strategic collaboration.' }
  ]
};

export const CORE_STATS = [
  { value: '50+', label: 'Combined Leadership Years' },
  { value: '5+', label: 'Global Regions (India, SG, UK, US, UAE)' },
  { value: '15+', label: 'Automotive & Industrial Giants Scaled' },
  { value: '10-12', label: 'Hand-picked Elite Consultants' },
  { value: '100%', label: 'Talent Quality & Fit Guarantee' },
  { value: '2017', label: 'Evolved from MindPower HR Solutions' }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'gcc-scaling',
    title: 'GCC Hiring & Scaling Services',
    iconName: 'Building2',
    shortDesc: 'Unlock the full potential of your Global Capability Center with end-to-end setups.',
    description: 'We orchestrate end-to-end recruitment, strategic feasibility study, leadership advisory, compliance framework setup, and localized talent pipelines for Global Capability Centers (GCCs).',
    longDescription: 'Establishing or growing a Global Capability Center (GCC) is a high-impact milestone for global businesses. TechHive serves as your regional scaling partner, managing every phase of the talent lifecycle—from feasibility analysis to massive engineering pod scaling. We align your regional people strategy with global business objectives.',
    keyWorkflows: [
      'Business-Case Analysis: Evaluate feasibility, investment needs, and projected ROI for your new GCC.',
      'Talent-Acquisition Strategy: Design a targeted sourcing plan aligned with your GCC’s strategic functions.',
      'Compliance & Payroll Setup: Establish regulatory frameworks and global payroll processes for smooth operations.',
      'Global Talent-Pool Access: Leverage our nationwide network to source specialized, culture-fit candidates for your GCC.'
    ],
    metrics: { value: '100%', label: 'Compliance Audited' },
    deliverables: [
      'Complete GCC Talent Strategy & Blueprint',
      'Local Compliance & Strategic Payroll Implementation',
      'Feasibility Study & ROI Projection Models',
      'Specialized Culture-Fit Organizational Structure'
    ]
  },
  {
    id: 'contract-staffing',
    title: 'Contract Staffing Services',
    iconName: 'Users',
    shortDesc: 'Accelerate your business projects with TechHive’s agile contract staffing expertise.',
    description: 'We deliver highly qualified, agile, pre-vetted professionals quickly, assuming full employer-of-record (EOR) compliance, onboarding, recruitment, and retention management.',
    longDescription: 'In today’s volatile macroeconomic environment, keeping critical projects on track requires both speed and modular flexibility. Our Agile Contract Staffing model provides pre-vetted specialists who integrate seamlessly into your engineering or business divisions, eliminating structural risk.',
    keyWorkflows: [
      'Pre-Vetted Contract Professionals: Supply screened talent across all functional roles.',
      'Agile Scalability: Enable rapid workforce adjustments to meet fluctuating project demands.',
      'Onboarding & Compliance: Manage end-to-end onboarding, legal checks, and payroll for contractors.',
      'Retention Management: Implement strategies to maximize contractor engagement and continuity.'
    ],
    metrics: { value: '24/7', label: 'Sourcing Capability' },
    deliverables: [
      'Fully Vetted Contract Staff Across Functional Roles',
      'Contractor Onboarding, Background Verification, & Compliance Reports',
      'Complete EOR (Employer of Record) Payroll Management',
      'High-Continuity Engagement & Retention Strategies'
    ]
  },
  {
    id: 'product-hiring',
    title: 'Product & Software Hiring Services',
    iconName: 'Code2',
    shortDesc: 'Elevate your product and software talent acquisition with direct tech-sourcing pipelines.',
    description: 'We tap into India’s premier tech hubs to find developers, developers, engineering champions, and leaders, testing technical chops and cultural fit rigorously.',
    longDescription: 'Building modern product systems or robust tech stacks requires talent that understands design patterns and agile delivery. TechHive identifies, vets, and evaluates elite candidates using advanced assessments, ensuring they match both the technological requirements and core values.',
    keyWorkflows: [
      'Tech-Talent Sourcing: Tap India’s premier tech hubs to recruit developers, engineers, and product leads.',
      'Advanced Assessments: Use coding tests and data-driven tools to validate technical skills.',
      'Cultural-Fit Evaluation: Ensure alignment with client values through bespoke interview frameworks.',
      'TeamBuild & Augmentation: Assemble or scale product teams for new initiatives and roadmap delivery.'
    ],
    metrics: { value: '10-12', label: 'Niche Specialization Sectors' },
    deliverables: [
      'Top-tier Product & Software Developer Shortlists',
      'Algorithmic Vetting & Code Test Scorecards',
      'Cultural-Fit Bespoke Evaluations',
      'Complete Product Engineering Teams Augmented'
    ]
  },
  {
    id: 'managed-services',
    title: 'Managed Services',
    iconName: 'Briefcase',
    shortDesc: 'Drive high operational efficiency and complete cost control via our consolidated Managed Services.',
    description: 'Deploy technology for centralized oversight, neutral vendor representation, absolute labor law compliance risk mitigation, and unified billing control.',
    longDescription: 'Deploying a large-scale contingent workforce introduces management challenges. TechHive’s Managed Services consolidate vendor networks, automate credential checks, audit classifications, and optimize billing rates, restoring complete transparency and oversight.',
    keyWorkflows: [
      'Vendor Management Systems: Deploy VMS technology for centralized workforce oversight.',
      'Vendor-Neutral Partnership: Act as an impartial intermediary to streamline multiple supplier relationships.',
      'Compliance & Risk Mitigation: Conduct worker classification, credential checks, and regulatory audits.',
      'Billing & Cost Control: Deliver unified invoicing and negotiated rates to drive down expenses.'
    ],
    metrics: { value: '100%', label: 'Audited Legal Compliance' },
    deliverables: [
      'Centralized Vendor Management Systems (VMS) Access',
      'Impartial Intermediary Supplier Optimization Agreements',
      'Regulatory Audits & Credential Classification Reports',
      'Unified Billing & Highly Negotiated Cost Savings'
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'it-products-services',
    title: 'IT Products & Services',
    iconName: 'Cpu',
    description: 'Fueling development teams across SaaS platforms, captive tech setups, and software services with elite developers, engineers, and division managers.',
    demandMetric: '95% Sourcing Match',
    keySubsectors: ['SaaS Systems', 'Core Software Products', 'Cloud Infrastructure', 'Digital Engineering'],
    engagementModel: 'Exclusive Retainers & Contingent Search'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    iconName: 'Feather',
    description: 'Acquiring premier leaders and technical supervisors for industrial giants, heavy production lines, and raw material processing conglomerates.',
    demandMetric: '92% Sourcing Quality',
    keySubsectors: ['Heavy Equipment', 'Industrial Process Plants', 'Safety & Operations', 'Operations Management'],
    engagementModel: 'Partner-Led Leadership Sourcing'
  },
  {
    id: 'automotive',
    title: 'Automotive',
    iconName: 'Car',
    description: 'Providing embedded hardware engineers, ADAS experts, and executive leaders for top global tier-1 automotive giants like BorgWarner, Uno Minda, Benteler, and Motherson.',
    demandMetric: '20+ Top Brands Served',
    keySubsectors: ['Electric Vehicles', 'Embedded RTOS Systems', 'Autonomous Navigation', 'Tier-1 Auto Ancillaries'],
    engagementModel: 'Strategic Engineering Pod Staffing'
  },
  {
    id: 'banking-financial-services',
    title: 'Banking & Financial Services',
    iconName: 'Coins',
    description: 'Placing critical finance professionals, ledger developers, and risk analysis managers in top financial entities and private bank offices.',
    demandMetric: 'Top Institutional Network',
    keySubsectors: ['Core Ledger Systems', 'Private Banking', 'Risk Analysts', 'Investment Operations'],
    engagementModel: 'Contract-To-Hire & Direct Executive Sourcing'
  },
  {
    id: 'insurance',
    title: 'Insurance',
    iconName: 'Shield',
    description: 'Connecting insurance enterprises with specialized actuarial modelers, claim process coordinators, and digital transformation developers.',
    demandMetric: 'Rapid Talent Identification',
    keySubsectors: ['Actuarial Research', 'Risk Modeling', 'Claim Platform Systems', 'Compliance Agents'],
    engagementModel: 'Bespoke Talent Pipeline Delivery'
  },
  {
    id: 'healthcare-life-sciences',
    title: 'Healthcare & Life Sciences',
    iconName: 'Activity',
    description: 'Bridging pharmaceutical R&D, biotech diagnostics, and digital healthcare platforms with specialized experts, medical device leads, and scientists.',
    demandMetric: 'Strict Profile Audits',
    keySubsectors: ['Clinical Sourcing', 'Biopharmaceutics', 'Medical Device Operations', 'FDA Regulations Compliance'],
    engagementModel: 'Highly Confidential Leadership Sourcing'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    iconName: 'ShoppingBag',
    description: 'Enabling high-volume scalable systems and fast-growth retail structures to capture market momentum with prime tech, product management, and platform UI engineers.',
    demandMetric: 'Agile Scale Support',
    keySubsectors: ['Core Retail Platforms', 'Omnichannel Operations', 'UX/UI Engineering', 'Payment Gateway Integration'],
    engagementModel: 'On-Demand Technical Flex Staffing'
  },
  {
    id: 'logistics',
    title: 'Logistics',
    iconName: 'Truck',
    description: 'Supporting high-efficiency operations across global freight forwarding, port management, supply chain structures, and industrial storage centers.',
    demandMetric: 'Domain-Specialist Recruits',
    keySubsectors: ['Port & Maritime Operations', 'Supply Chain Networks', 'Freight Optimization', 'Warehouse Digital Systems'],
    engagementModel: 'Custom Project & Operations Recruitment'
  }
];

export const LEADERSHIP_TEAM: TeamMember[] = [];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'registered-office',
    city: 'Registered Office',
    country: 'Pune, India',
    role: 'Corporate Headquarters & Registered base',
    address: 'TechHive Global Consulting Pvt. Ltd.\nOffice No. 1509, 15th Floor,\nGokhale Business Bay, Opp. City Pride Kothrud Multiplex,\nPune - 411038\nMaharashtra, India',
    email: 'info@techhiveglobal.com',
    phone: '9684019553',
    coordinates: { x: 48, y: 72 },
    isHQ: true,
    mapsLink: 'https://www.google.com/maps/search/Gokhale+Business+Bay+Kothrud+Pune'
  },

];

export const TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'test-1',
    name: 'Kirubavathi',
    designation: 'Healthcare AR Specialist',
    company: 'Placed at Ventra Healthcare',
    feedback: 'My experience with TechHive Global Consulting was exceptional. The HR department is friendly and you can speak freely without architectural hesitation. Gowsalya and the team provided wonderful support during my active interview and onboarding process.'
  },
  {
    id: 'test-2',
    name: 'Kiran Sunny',
    designation: 'Finance Manager',
    company: 'Bangalore FinTech Leader',
    feedback: 'I must thank TechHive and their recruitment team for helping me secure a manager role in one of the top financial businesses in Bangalore. They guided me throughout the interview rounds and provided transparent, genuine support.'
  },
  {
    id: 'test-3',
    name: 'Gokul Shankar',
    designation: 'Manufacturing Engineer',
    company: 'Placed at Automotive OEM',
    feedback: 'I was placed in a leading manufacturer by TechHive Global Consulting. They showed great expertise, kept me updated during the client interview processes, and aligned me perfectly with the role. Recommended recruiter!'
  }
];

export const TIMELINE_MILESTONES = [
  { year: '2017', title: 'The Genesis', desc: 'Sushma Joshi founds MindPower HR Solutions in Pune, India, addressing talent gaps with a precision-led approach.' },
  { year: '2019', title: 'Automotive Domain Scale', desc: 'Establish deep tech partnerships in Pune to serve automotive electronics, embedded hardware, and R&D giants.' },
  { year: '2021', title: 'Evolution to TechHive', desc: 'Rebrands from MindPower HR into TechHive Global Consulting, establishing specialized GCC incubation capabilities.' },
  { year: '2023', title: 'APAC & Middle East Launch', desc: 'Sets up representation and client networks in Singapore, London, Dubai, and the US to facilitate cross-border talent strategy.' },
  { year: 'Present', title: 'Talent-First Leader', desc: 'Partnering with premium brands like uno Minda, BorgWarner, Mercedes-Benz, and Virtusa to scale captive hubs.' }
];
