/**
 * IndustryPage — Visually rich, animated industry detail page
 * Uses Intersection Observer for scroll-triggered animations + motion/react for hero
 */
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import INDUSTRIES from '../industries';
import { LucideIcon } from './LucideIcon';
// NOTE: industry.content in ../industries.js is now PRE-CLEANED at build time
// (see scripts/precompute-industry-html.cjs). We used to call
// cleanImportedHtml() here on every render, which ran DOMParser + several
// full-tree querySelectorAll passes on ~35KB of HTML synchronously before
// React could paint anything — that's what caused the white-screen pause
// when opening an industry page. Now it's just used directly, instantly.

// Industry-specific hero images from Unsplash
// NOTE: curated so the set of hero photos across industries shows a balanced
// mix of men and women in professional/industry settings (see also QUOTE
// fallback below, used in place of an image on a few sub-pages).
const INDUSTRY_IMAGES = {
  'technology-sector': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
  'software-saas': 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop&q=80',
  'ites-bpo': 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=1200&auto=format&fit=crop&q=80',
  'gcc-sector': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80',
  'manufacturing-industries': 'https://plus.unsplash.com/premium_photo-1664297997167-88170c57bc35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW5naW5lZXJpbmclMjBhbmQlMjBtYW51ZmFjdHVyaW5nfGVufDB8fDB8fHww',
  'automotive-industry': 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'industrial-automation': 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&auto=format&fit=crop&q=80',
  'electronics-semiconductor': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
  'telecom-services': 'https://images.unsplash.com/photo-1533664488202-6af66d26c44a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'bfsi-sector': 'https://plus.unsplash.com/premium_photo-1681469490618-c24cc20bef1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXl8ZW58MHx8MHx8fDA%3D',
  'healthcare-pharmaceuticals': 'https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D',
  'fmcg-sector': 'https://images.unsplash.com/photo-1607977027972-e2aae2b5b1e0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'retail-business': 'https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'logistics-supply-chain': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
  'infrastructure-sector': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=80',
  'education-training': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80',
  'chemicals-fertilizers': 'https://images.unsplash.com/photo-1593999094742-4f5280054b23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVzdGljaWRlc3xlbnwwfHwwfHx8MA%3D%3D',
  'startups-high-growth-enterprises': 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=1200&auto=format&fit=crop&q=80',
  'mining-steel': 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80',
  'aerospace-defence': 'https://images.unsplash.com/photo-1530545124313-ce5e8eae55af?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'energy-sector': 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&auto=format&fit=crop&q=80',
  'agriculture-agribusiness': 'https://plus.unsplash.com/premium_photo-1661907005604-cec7ffb6a042?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdyaWN1bHR1cmUlMjBhbmQlMjBwZXN0aWNpZGVzfGVufDB8fDB8fHww',
  'hospitality-tourism': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80',
  'wine-spirits': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&auto=format&fit=crop&q=80',
  'media-entertainment': 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80',
  'environmental-services': 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=1200&auto=format&fit=crop&q=80',
  'legal-professional': 'https://plus.unsplash.com/premium_photo-1661329930662-19a43503782f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVnYWwlMjBhbmQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
  'emerging-technologies-innovation': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop&q=80',
};
const DEFAULT_IMAGE = '';

// For a handful of sub-pages, swap the hero photo for a short, relevant quote
// instead — keeps the page visually engaging while reducing repetitive imagery.
const INDUSTRY_QUOTES = {
  'bfsi-sector': {
    text: 'Diversity of thought and people is what drives better decisions in banking and finance.',
    author: 'Industry Perspective, BFSI Sector',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
  },
  'manufacturing-industries': {
    text: 'The modern factory floor runs on skill, not gender — and the best teams reflect that.',
    author: 'Industry Perspective, Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80',
  },
  'aerospace-defence': {
    text: 'From engineering to mission control, aerospace careers are being shaped by talent from every background.',
    author: 'Industry Perspective, Aerospace & Defence',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&auto=format&fit=crop&q=80',
  },
  'gcc-sector': {
    text: 'Global Capability Centres thrive when leadership tables bring together every kind of perspective.',
    author: 'Industry Perspective, GCC Sector',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&auto=format&fit=crop&q=80',
  },
  'ites-bpo': {
    text: 'Great service delivery starts with people who are empowered, trained, and trusted to solve problems.',
    author: 'Industry Perspective, ITES/BPO',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80',
  },
  'logistics-supply-chain': {
    text: 'Resilient supply chains are built by resilient teams who can adapt as fast as the market does.',
    author: 'Industry Perspective, Logistics & Supply Chain',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&auto=format&fit=crop&q=80',
  },
  'technology-sector': {
    text: 'The companies that win in tech are the ones that hire for curiosity as much as for skill.',
    author: 'Industry Perspective, Technology Sector',
    image: 'https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D',
  },
  'automotive-industry': {
    text: 'As vehicles get smarter, automotive talent strategy has to move just as fast as the technology.',
    author: 'Industry Perspective, Automotive Industry',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop&q=80',
  },
  'telecom-services': {
    text: 'Connectivity is the product, but people are still what keeps networks running and customers happy.',
    author: 'Industry Perspective, Telecom Services',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80',
  },
  'healthcare-pharmaceuticals': {
    text: 'Healthcare outcomes start long before a patient arrives — with the people an organisation chooses to hire.',
    author: 'Industry Perspective, Healthcare & Pharmaceuticals',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&auto=format&fit=crop&q=80',
  },
  'fmcg-sector': {
    text: 'FMCG brands are built on shelves, but they are won by the teams behind them.',
    author: 'Industry Perspective, FMCG Sector',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1200&auto=format&fit=crop&q=80',
  },
  'retail-business': {
    text: 'Retail is a people business first — every great customer experience starts with the right hire.',
    author: 'Industry Perspective, Retail Business',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80',
  },
  'infrastructure-sector': {
    text: 'Infrastructure projects are measured in decades, which means hiring decisions matter even more.',
    author: 'Industry Perspective, Infrastructure Sector',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&auto=format&fit=crop&q=80',
  },
  'energy-sector': {
    text: 'The energy transition is as much a talent challenge as it is an engineering one.',
    author: 'Industry Perspective, Energy Sector',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80',
  },
  'agriculture-agribusiness': {
    text: 'Modern agribusiness needs people who understand both the field and the spreadsheet.',
    author: 'Industry Perspective, Agriculture & Agribusiness',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1200&auto=format&fit=crop&q=80',
  },
  'media-entertainment': {
    text: 'Great content is made by great teams — talent is the real engine behind every media business.',
    author: 'Industry Perspective, Media & Entertainment',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&auto=format&fit=crop&q=80',
  },
  'education-training': {
    text: 'The quality of an institution is set by the quality of the educators it manages to attract.',
    author: 'Industry Perspective, Education & Training',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop&q=80',
  },
  'hospitality-tourism': {
    text: 'In hospitality, every guest experience is really a reflection of how well a team was hired and trained.',
    author: 'Industry Perspective, Hospitality & Tourism',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&auto=format&fit=crop&q=80',
  },
  'environmental-services': {
    text: 'Sustainability goals are only as strong as the teams responsible for delivering them.',
    author: 'Industry Perspective, Environmental Services',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&auto=format&fit=crop&q=80',
  },
  'legal-professional': {
    text: 'In professional services, reputation is built one hire at a time.',
    author: 'Industry Perspective, Legal & Professional',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&auto=format&fit=crop&q=80',
  },
};

// Stats displayed in hero

// Scroll-reveal hook
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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export const IndustryPage = () => {
  const { slug } = useParams();
  const industry = INDUSTRIES.find((item) => item.slug === slug);
  const cleanedContent = industry ? industry.content : '';
  const heroImage = INDUSTRY_IMAGES[slug] || DEFAULT_IMAGE;
  const heroQuote = INDUSTRY_QUOTES[slug];

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [slug]);

  if (!industry) {
    return (
      <div className="bg-white py-24 px-4 sm:px-6 lg:px-8 min-h-[50vh]">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-2xl font-black text-[#0d131f] uppercase">Industry Not Found</h1>
          <p className="text-slate-500 text-sm">We couldn't find "{slug}". Choose an industry below.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {INDUSTRIES.map((item) => (
              <Link key={item.slug} to={`/industries/${item.slug}`}
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
    <div id="page-industry-detail" className="bg-gradient-to-b from-slate-50 via-white to-cyan-50 min-h-screen">

      {/* ── HERO ── */}
      <div className="relative h-[62vh] min-h-[400px] overflow-hidden">
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.08 }} animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img src={heroImage} alt={industry.title}
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06102a]/90 via-[#06102a]/70 to-[#06102a]/30" />
        </motion.div>

        {/* Animated particles / grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6dd5ed_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 sm:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
          {/* Breadcrumb */}
          <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <LucideIcon name="ChevronRight" className="w-3 h-3" />
            <span className="text-white/50">Industries</span>
            <LucideIcon name="ChevronRight" className="w-3 h-3" />
            <span className="text-[#6dd5ed]">{industry.title}</span>
          </motion.nav>

          <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#6dd5ed] mb-3">
            Industries We Serve
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-black text-white text-7xl sm:text-7xl lg:text-7xl uppercase tracking-tight leading-tight max-w-3xl">
            {industry.title}
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }} style={{ originX: 0 }}
            className="w-20 h-1 bg-[#2193b0] rounded-full mt-5 mb-4" />

          {industry.description && (
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed">
              {industry.description}
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

        {/* Article card */}
        <RevealBlock delay={0}>
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden relative">
            {/* Accent strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed]" />
            <div
              className="techhive-article techhive-article-polished industry-magazine-layout"
              dangerouslySetInnerHTML={{ __html: cleanedContent }}
            />
          </div>
        </RevealBlock>

        {/* Industry quote — rendered as a quote graphic (photo + overlaid text), shown inline in the page */}
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
        <RevealBlock delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: 'Target', title: 'Precision Matching', desc: 'AI-powered screening connects you with candidates who truly fit your domain requirements.' },
              { icon: 'Clock', title: 'Fast Turnaround', desc: 'Our structured pipeline ensures you receive shortlisted candidates within 48–72 hours.' },
              { icon: 'Shield', title: 'Confidential & Compliant', desc: 'Every engagement is handled with complete discretion and regulatory compliance.' },
            ].map((card, i) => (
              <RevealBlock key={i} delay={i * 120}>
                <div className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#2193b0]/10 flex items-center justify-center mb-4 group-hover:bg-[#2193b0]/20 transition-colors">
                    <LucideIcon name={card.icon} className="w-5 h-5 text-[#2193b0]" />
                  </div>
                  <h3 className="font-sans font-black text-[#0d131f] text-sm uppercase tracking-tight mb-2">{card.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </RevealBlock>

        {/* Related industries */}
        <RevealBlock delay={0}>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2193b0] mb-2">Explore More</p>
            <h2 className="font-sans font-black text-[#0d131f] text-lg uppercase tracking-tight mb-5">Other Industries</h2>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.filter(i => i.slug !== slug).slice(0, 12).map((item) => (
                <Link key={item.slug} to={`/industries/${item.slug}`}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:text-white hover:bg-[#2193b0] hover:border-[#2193b0] transition-all duration-200">
                  {item.title}
                  <LucideIcon name="ArrowUpRight" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </RevealBlock>

        {/* CTA */}
        <RevealBlock delay={0}>
          <div className="relative overflow-hidden bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative text-white space-y-1 text-center sm:text-left">
              <p className="font-sans font-black text-xl uppercase tracking-tight">
                Ready to Hire in {industry.title}?
              </p>
              <p className="font-sans text-sm text-white/80 max-w-md">
                Connect with our sector specialists for a tailored talent acquisition strategy.
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

export default IndustryPage;
