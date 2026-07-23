import React from 'react';
import { motion } from 'motion/react';

export const IsoCertSection: React.FC = () => {
  return (
    <section className="relative bg-[#03122b] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* subtle radial glow behind the badge */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 60%, rgba(30, 90, 200, 0.28) 0%, transparent 75%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ISO badge image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-72 sm:w-80 lg:w-96 shrink-0"
          >
            <img
              src="/iso-27001.jpg"
              alt="ISO 27001 Certified"
              className="w-full h-auto object-contain drop-shadow-[0_0_48px_rgba(56,140,255,0.45)]"
            />
          </motion.div>

          {/* Text block */}
          <div className="text-left space-y-6 max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 font-sans block"
            >
              CERTIFIED EXCELLENCE
            </motion.span>


            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="h-[3px] w-20 rounded-full bg-cyan-400"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed"
            >
              TechHive Global Consulting is proud to be <strong className="text-white">ISO 27001 Certified</strong> — the international gold standard for Information Security Management. This certification validates our rigorous data protection protocols, ensuring every client engagement, candidate record, and business process meets the highest global security standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.15 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {['Data Security', 'Global Standard', 'Trusted Partner', 'Audit Ready'].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-cyan-700/60 text-cyan-300 bg-cyan-950/40"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IsoCertSection;
