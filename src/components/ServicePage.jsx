/**
 * ServicePage — Visually rich, animated service detail page
 */
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import SERVICES from '../services';
import { LucideIcon } from './LucideIcon';
// NOTE: service.content in ../services.js is now PRE-CLEANED at build time
// (see scripts/precompute-service-html.cjs) — same fix as IndustryPage.jsx.

// Service-specific hero images
const SERVICE_IMAGES = {
  'executive-search': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&auto=format&fit=crop&q=80',
  'permanent-staffing': 'https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'contract-staffing': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80',
  'rpo': 'https://ik.imagekit.io/paritosh/New%20Folder/HR2.jpg?updatedAt=1782972711228', // woman leading recruitment ops
  'hr-consulting': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80', // HR team meeting/consulting
  'gcc-scaling': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&auto=format&fit=crop&q=80',
  'payroll-management': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=80',
  'hr-training-services': 'https://ik.imagekit.io/paritosh/CAREERX%20Content%20Program.jpg?updatedAt=1782972198554',
};
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&auto=format&fit=crop&q=80';

// A couple of service pages show a short quote instead of a photo, for variety.
const SERVICE_QUOTES = {
  'executive-search': {
    text: 'The best leadership search firms find talent everyone else overlooks.',
    author: 'Industry Perspective, Executive Search',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&auto=format&fit=crop&q=80',
  },
  'gcc-scaling': {
    text: 'Scaling a GCC well means building teams that mirror the diversity of the markets they serve.',
    author: 'Industry Perspective, GCC Scaling',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80',
  },
  'rpo': {
    text: 'Outsourcing recruitment isn’t about doing less — it’s about doing hiring better, at scale.',
    author: 'Industry Perspective, RPO Services',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
  },
  'permanent-staffing': {
    text: 'A great permanent hire is a long-term investment, not a short-term fix.',
    author: 'Industry Perspective, Permanent Staffing',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80',
  },
  'hr-consulting': {
    text: 'Strong HR strategy turns workforce decisions into a genuine competitive advantage.',
    author: 'Industry Perspective, HR Consulting',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&auto=format&fit=crop&q=80',
  },
};


function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealBlock({ children, delay = 0, className = '' }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}>
      {children}
    </div>
  );
}

export const ServicePage = () => {
  const { slug } = useParams();
  const service = SERVICES.find((item) => item.slug === slug);
  const cleanedContent = service ? service.content : '';
  const heroImage = SERVICE_IMAGES[slug] || DEFAULT_IMAGE;
  const heroQuote = SERVICE_QUOTES[slug];

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [slug]);

  if (!service) {
    return (
      <div className="bg-white py-24 px-4 sm:px-6 lg:px-8 min-h-[50vh]">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-2xl font-black text-[#0d131f] uppercase">Service Not Found</h1>
          <p className="text-slate-500 text-sm">We couldn't find "{slug}". Choose a service below.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {SERVICES.map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`}
                className="px-4 py-2 rounded-full border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-white hover:bg-[#2193b0] hover:border-[#2193b0] transition-colors">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="page-service-detail" className="bg-gradient-to-b from-slate-50 via-white to-cyan-50 min-h-screen">

      {/* ── HERO ── */}
      <div className="relative h-[62vh] min-h-[400px] overflow-hidden">
        <motion.div initial={{ scale: 1.08 }} animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }} className="absolute inset-0">
          <img src={heroImage} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06102a]/90 via-[#06102a]/70 to-[#06102a]/30" />
        </motion.div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6dd5ed_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 sm:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
          <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <LucideIcon name="ChevronRight" className="w-3 h-3" />
            <span className="text-white/50">Services</span>
            <LucideIcon name="ChevronRight" className="w-3 h-3" />
            <span className="text-[#6dd5ed]">{service.title}</span>
          </motion.nav>

          <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#6dd5ed] mb-3">
            Our Services
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-black text-white text-7xl sm:text-7xl lg:text-7xl uppercase tracking-tight leading-tight max-w-3xl">
            {service.title}
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }} style={{ originX: 0 }}
            className="w-20 h-1 bg-[#2193b0] rounded-full mt-5 mb-4" />

          {service.description && (
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed">
              {service.description}
            </motion.p>
          )}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="bg-[#0f172a] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          </div>
      </motion.div>

      {/* ── CONTENT ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">

        {/* Article */}
        <RevealBlock delay={0}>
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed]" />
            <div className={`techhive-article techhive-article-polished industry-magazine-layout ${slug === 'hr-training-services' ? 'hr-training-article' : ''}`}
              dangerouslySetInnerHTML={{ __html: cleanedContent }} />
          </div>
        </RevealBlock>

        {/* Download Brochure CTA */}
        {service.brochure && (
          <RevealBlock delay={0}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#13233f] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#6dd5ed_1px,transparent_1px)] [background-size:22px_22px]" />
              <div className="relative flex items-center gap-4 text-center sm:text-left">
                <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center shrink-0">
                  <LucideIcon name="FileText" className="w-7 h-7 text-[#6dd5ed]" />
                </div>
                <div>
                  <p className="font-sans font-black text-white text-xl uppercase tracking-tight">Get the Full Program Brochure</p>
                  <p className="font-sans text-sm text-white/60 max-w-md mt-1">
                    Course structure, eligibility, batch timings, and placement partners — all in one PDF.
                  </p>
                </div>
              </div>
              <motion.a
                href={service.brochure}
                download
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="hr-brochure-btn relative shrink-0"
              >
                <LucideIcon name="Download" className="w-4 h-4" />
                Download Brochure
              </motion.a>
            </div>
          </RevealBlock>
        )}

        {/* Service quote — rendered as a quote graphic (photo + overlaid text), shown inline in the page */}
        {heroQuote && (
          <RevealBlock delay={50}>
            <div className="relative overflow-hidden rounded-3xl shadow-lg min-h-[280px] flex items-center">
              <img src={heroQuote.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#06102a]/95 via-[#0f172a]/85 to-[#1d2c4d]/70" />
              <blockquote className="relative px-8 py-10 sm:px-14 sm:py-14 max-w-2xl border-l-2 border-[#6dd5ed]/60">
                <LucideIcon name="Quote" className="w-8 h-8 text-[#6dd5ed] mb-5 opacity-80" />
                <p className="text-white text-lg sm:text-xl font-sans font-medium leading-relaxed tracking-[-0.01em]">
                  {heroQuote.text}
                </p>
                <footer className="mt-6 text-[#6dd5ed] text-[11px] font-bold uppercase tracking-[0.18em]">
                  — {heroQuote.author}
                </footer>
              </blockquote>
            </div>
          </RevealBlock>
        )}

        {/* Why choose us cards */}
        <RevealBlock delay={0}>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2193b0] mb-2">Why TechHive</p>
          <h2 className="font-sans font-black text-[#0d131f] text-lg uppercase tracking-tight mb-6">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: 'Users', title: 'Sector Specialists', desc: 'Dedicated recruiters with deep expertise in your specific domain.' },
              { icon: 'Zap', title: '48-Hour Shortlist', desc: 'Speed without compromise — vetted candidates within two business days.' },
              { icon: 'BarChart2', title: 'Data-Driven Decisions', desc: 'AI-assisted screening and market intelligence to refine every hire.' },
              { icon: 'Lock', title: 'Full Confidentiality', desc: 'Sensitive mandates handled with complete discretion and integrity.' },
            ].map((card, i) => (
              <RevealBlock key={i} delay={i * 100}>
                <div className="group flex gap-4 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#2193b0]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2193b0]/20 transition-colors">
                    <LucideIcon name={card.icon} className="w-5 h-5 text-[#2193b0]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-[#0d131f] text-sm uppercase tracking-tight mb-1">{card.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </RevealBlock>

        {/* Other services */}
        <RevealBlock delay={0}>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2193b0] mb-2">Explore More</p>
          <h2 className="font-sans font-black text-[#0d131f] text-lg uppercase tracking-tight mb-5">Other Services</h2>
          <div className="flex flex-wrap gap-2">
            {SERVICES.filter(s => s.slug === 'hr-training-services' && s.slug !== slug).map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`}
                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:text-white hover:bg-[#2193b0] hover:border-[#2193b0] transition-all duration-200">
                {item.title}
                <LucideIcon name="ArrowUpRight" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </RevealBlock>

        {/* CTA */}
        <RevealBlock delay={0}>
          <div className="relative overflow-hidden bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative text-white space-y-1 text-center sm:text-left">
              <p className="font-sans font-black text-xl uppercase tracking-tight">Ready to Get Started?</p>
              <p className="font-sans text-sm text-white/80 max-w-md">
                Connect with our specialists for a tailored {service.title} strategy.
              </p>
            </div>
            <Link to="/#contact"
              className="relative shrink-0 inline-flex items-center gap-2 bg-white text-[#2193b0] font-sans font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:bg-slate-50 transition-colors shadow-lg">
              Contact Us
              <LucideIcon name="ArrowUpRight" className="w-4 h-4" />
            </Link>
          </div>
        </RevealBlock>
      </div>
    </div>
  )

};

export default ServicePage;
