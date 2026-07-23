import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { AnimatedHeading } from './AnimatedHeading';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  keyResponsibilities?: string[];
  requiredSkills?: string[];
}

const JOBS: JobOpening[] = [
  {
    id: 'tech-recruiter',
    title: 'Technology Recruiter',
    department: 'Talent Acquisition',
    location: 'Pune / Remote',
    type: 'Full-time',
    experience: '3–6 Years',
    description: 'Lead sourcing and engagement pipelines for top tier engineering, software, product, data, and cloud infrastructure talent globally.',
    keyResponsibilities: [
      'Source, screen, and engage top tech talent across various domains (software, data, cloud).',
      'Manage full-cycle recruitment from requisition to offer negotiation.',
      'Partner with hiring managers to define role requirements and strategies.',
      'Leverage data-driven sourcing and ATS for pipeline management.'
    ],
    requiredSkills: [
      '3+ years recruiting in technology roles (IT, engineering, product).',
      'Strong sourcing skills (LinkedIn, job boards, referrals).',
      'Excellent communication and stakeholder management.',
      'Familiarity with ATS tools and recruitment metrics.',
      'Bachelor\u2019s degree or equivalent experience.'
    ]
  },
  {
    id: 'staffing-account-mgr',
    title: 'Staffing Account Manager',
    department: 'Account Management',
    location: 'Pune (Hybrid)',
    type: 'Full-time',
    experience: '8–12 Years',
    description: 'Own end-to-end client partner relationships, develop business with existing accounts, create proposals, manage SLAs, and lead recruitment delivery teams.',
    keyResponsibilities: [
      'Own end-to-end client relationships and drive staffing solutions.',
      'Develop business by identifying new opportunities in existing accounts.',
      'Create proposals, manage SLAs, and negotiate commercial terms.',
      'Lead a team of recruiters to deliver on volume and RPO mandates.'
    ],
    requiredSkills: [
      '8+ years in staffing or recruitment delivery roles.',
      'Proven account management and client servicing track record.',
      'Strong negotiation, presentation, and leadership skills.',
      'Knowledge of workforce planning and RPO frameworks.',
      'MBA or relevant qualification preferred.'
    ]
  }
];

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  role: '',
  experience: '',
  linkedin: '',
  notes: '',
  resumeName: ''
};

export const CareersSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setFormData((prev) => ({ ...prev, role: job.title }));
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setSelectedJob(null);
    setFormData(emptyForm);
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prev) => ({ ...prev, resumeName: file ? file.name : '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out all mandatory fields.');
      return;
    }
    setIsSubmitted(true);
    // Auto-close modal after 4.5 seconds
    setTimeout(() => {
      closeModal();
    }, 4500);
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white min-h-[75vh]">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 text-left">
          <AnimatedHeading
            eyebrow="GLOBAL RECRUITMENT TALENT OUTLET"
            title="Careers at TechHive"
          />
          <p className="mt-3 text-slate-500 font-sans text-sm sm:text-base max-w-3xl leading-relaxed">
            We are looking for seasoned executive recruiters, compliance experts, and domain engineering partners to support TechHive's elite list of automotive and digital clients.
          </p>
        </div>

        {/* Culture highlights panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2193b0]/10 text-[#2193b0] flex items-center justify-center">
              <LucideIcon name="Shield" className="w-5 h-5" />
            </div>
            <h4 className="font-sans font-extrabold text-[#0f172a] text-sm uppercase tracking-wider">
              Absolute Integrity
            </h4>
            <p className="font-sans text-xs text-slate-500 leading-relaxed">
              We govern with uncompromising absolute compliance standards across local legal stacks, providing clean, stress-free systems.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#8256bd] flex items-center justify-center">
              <LucideIcon name="Rocket" className="w-5 h-5" />
            </div>
            <h4 className="font-sans font-extrabold text-[#0f172a] text-sm uppercase tracking-wider">
              Accelerative Growth
            </h4>
            <p className="font-sans text-xs text-slate-500 leading-relaxed">
              We actively empower teams with ongoing talent enhancement, robust client direct models, and continuous domain upskilling.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <LucideIcon name="Globe2" className="w-5 h-5" />
            </div>
            <h4 className="font-sans font-extrabold text-[#0f172a] text-sm uppercase tracking-wider">
              Borderless Synergy
            </h4>
            <p className="font-sans text-xs text-slate-500 leading-relaxed">
              Bridging the gap between premier technical centers of excellence in India and global corporate decision-makers.
            </p>
          </div>
        </div>

        {/* Job Openings list (full width now that submission happens in the apply modal) */}
        <div className="space-y-4 text-left pt-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            <span className="font-sans font-extrabold text-xs text-slate-900 tracking-wider">
              ACTIVE JOB POSTINGS ({JOBS.length})
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {JOBS.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl border border-slate-100 hover:border-slate-350 hover:bg-slate-50 shadow-sm bg-white transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100/10 pb-4 mb-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest font-black text-slate-500">
                      {job.department}
                    </span>
                    <h4 className="font-sans font-black text-base sm:text-lg leading-tight uppercase text-slate-900">
                      {job.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider font-extrabold bg-slate-100 text-slate-600">
                      {job.experience}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider font-extrabold bg-cyan-50 text-cyan-700">
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-[13px] leading-relaxed mb-4 text-slate-600">
                  {job.description}
                </p>

                {(job.keyResponsibilities || job.requiredSkills) && (
                  <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100/10 pt-4 text-xs">
                    {job.keyResponsibilities && (
                      <div>
                        <span className="block font-extrabold text-[10px] uppercase tracking-wider mb-2 text-[#2193b0]">
                          Key Responsibilities
                        </span>
                        <ul className="space-y-1 pl-4 list-disc">
                          {job.keyResponsibilities.map((resp, idx) => (
                            <li key={idx} className="text-slate-500">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {job.requiredSkills && (
                      <div>
                        <span className="block font-extrabold text-[10px] uppercase tracking-wider mb-2 text-[#2193b0]">
                          Required Skills
                        </span>
                        <ul className="space-y-1 pl-4 list-disc">
                          {job.requiredSkills.map((skill, idx) => (
                            <li key={idx} className="text-slate-500">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-[10px] tracking-widest uppercase text-slate-400">
                    Role Framework • {job.type}
                  </span>
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest cursor-pointer transition-all bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAFBFD] border border-slate-150 rounded-2xl p-6 sm:p-8 text-left shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={closeModal}
                aria-label="Close application form"
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <LucideIcon name="X" className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2.5 mb-6 border-b border-slate-150 pb-4 pr-8">
                <div className="w-1.5 h-6 bg-[#2193b0] rounded-full" />
                <div>
                  <h4 className="font-sans font-extrabold text-[#0f172a] text-sm uppercase tracking-wider">
                    Apply for this Role
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">Secure Candidate Sync Pipeline</span>
                </div>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4 py-8 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <LucideIcon name="Check" className="w-6 h-6" />
                  </div>
                  <h5 className="font-sans font-bold text-slate-900 text-sm uppercase tracking-wide">
                    Application Submitted Successfully!
                  </h5>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                    Your profile has been synchronized under complete executive confidence. Our Managing Senate will reach out within 24 business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Selected job alert block */}
                  {selectedJob && (
                    <div className="p-3.5 bg-cyan-50 border border-cyan-150 rounded-xl flex items-start space-x-2 text-cyan-800 text-xs">
                      <LucideIcon name="Sparkles" className="w-4 h-4 flex-shrink-0 mt-0.5 text-cyan-600" />
                      <div>
                        <span className="block font-bold">Applying for opening:</span>
                        <span className="font-black uppercase tracking-tight text-[11px] block text-cyan-900">{selectedJob.title}</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shruti Deshmukh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. shruti@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                        Position Applying For
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Director Operations"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                        Years of Experience
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10 Years"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      placeholder="e.g. https://linkedin.com/in/username"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                      Upload Resume *
                    </label>
                    <label className="flex items-center justify-between gap-2 w-full px-3.5 py-2.5 bg-white border border-dashed border-slate-300 rounded-xl text-xs font-sans text-slate-500 cursor-pointer hover:border-cyan-500 hover:text-cyan-600 transition-colors">
                      <span className="truncate">
                        {formData.resumeName || 'Choose a file (PDF, DOC, DOCX)'}
                      </span>
                      <LucideIcon name="UploadCloud" className="w-4 h-4 flex-shrink-0" />
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                      Cover Note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly detail your core specializations, preferred location model, and notice period..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    Submit Application
                  </button>

                  <span className="block text-[8px] text-slate-400 leading-normal text-center">
                    By submitting your details, you agree to TechHive's global talent tracking protocols under absolute privacy credentials.
                  </span>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareersSection;
