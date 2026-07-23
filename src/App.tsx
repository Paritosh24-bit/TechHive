import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LEADERSHIP_TEAM } from './data';
import { motion, AnimatePresence } from 'motion/react';

// Component imports
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import { AnimatedHeading } from './components/AnimatedHeading';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import ServiceSuites from './components/ServiceSuites';
import BenefitsSection from './components/BenefitsSection';
import IndustriesServeSection from './components/IndustriesServeSection';
import { ClientsSection } from './components/ClientsSection';
import AwardsSection from './components/AwardsSection';
import IsoCertSection from './components/IsoCertSection';
import FaqSection from './components/FaqSection';
import { CareersSection } from './components/CareersSection';
import InteractiveContact from './components/InteractiveContact';
import LucideIcon from './components/LucideIcon';
import ServicePage from './components/ServicePage';
import IndustryPage from './components/IndustryPage';
import BlogList from './components/BlogList';
import BlogListPage from './components/BlogListPage';
import BlogPage from './components/BlogPage';

type PageID = 'home' | 'services' | 'industries' | 'about' | 'careers' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageID>('home');

  const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (page: string) => {
    setCurrentPage(page as PageID);
  };

  const navigateToContactPage = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Any link (including ones from /services/:slug or /industries/:slug subpages)
  // that points to "/#contact" should land the user on the home page with the
  // Contact section active, instead of just dropping them on the homepage top.
  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#contact') {
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Clean the hash from the URL once handled so the back button behaves normally.
      navigate('/', { replace: true });
    }
  }, [location.pathname, location.hash]);

  return (
    <div id="corporate-routing-root" className="min-h-screen flex flex-col justify-between bg-[#fbfcff] text-slate-800 selection:bg-cyan-800 selection:text-white">
      
      {/* Universal Floating Header */}
      <Header currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Main content with Page Transition animations to act strictly as different pages */}
      <main className="flex-grow pt-20">
        <Routes>
          {/* Existing state-driven pages (Home/Services/Industries/About/Careers/FAQs/Contact)
              are untouched and continue to live behind the root path, switched via currentPage. */}
          <Route
            path="/"
            element={
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* HOME PAGE */}
            {currentPage === 'home' && (
              <div id="page-home" className="space-y-4">
                {/* Hero Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <HeroSection onSyncClick={navigateToContactPage} />
                </motion.div>

                {/* ISO 27001 Certification Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <IsoCertSection />
                </motion.div>

                {/* Section 1: About the recruitment team */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <AboutSection />
                </motion.div>

                {/* Section 2: Recruitment Process */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <ProcessSection />
                </motion.div>

                {/* Section 3: The Recruitment Services TechHive Offers */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <ServicesSection isHome={true} />
                </motion.div>

                {/* Section 4: Benefits of Choosing TechHive */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <BenefitsSection />
                </motion.div>

                {/* Section 5: Industries We Offer Recruitment Services */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <IndustriesServeSection />
                </motion.div>

                {/* Active clients visual display */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <ClientsSection />
                </motion.div>

                {/* Section 6: award-winning recruitment partner */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <AwardsSection />
                </motion.div>

                {/* Insights & Blogs — latest articles and thought leadership */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <BlogList />
                </motion.div> */}

                {/* Section 7: Frequently Asked Questions (QnA) */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <FaqSection />
                </motion.div>
              </div>
            )}

            {/* SERVICES PAGE */}
            {currentPage === 'services' && (
              <div id="page-services" className="space-y-4">
                {/* General Service Categories with dark sleek card outlines */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <ServicesSection isHome={false} />
                </motion.div>
                
                {/* Deeper operational service suites matching requested pictures */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <ServiceSuites />
                </motion.div>

                {/* Benefits / let's sync up callout highlights block */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <BenefitsSection />
                </motion.div>
              </div>
            )}

            {/* INDUSTRIES PAGE */}
            {currentPage === 'industries' && (
              <div id="page-industries">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <IndustriesServeSection />
                </motion.div>
              </div>
            )}

            {/* ABOUT PAGE */}
            {currentPage === 'about' && (
              <div id="page-about">
                {/* Corporate History details layout */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <AboutSection />
                </motion.div>

                {/* Leadership Team list board senate */}
                <motion.section 
                  id="about-leadership" 
                  className="bg-[#FAF5F2] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 block"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className="max-w-7xl mx-auto space-y-12">
                    
                    <div className="border-b border-slate-200 pb-8 text-left">
                      <AnimatedHeading
                        eyebrow="OUR GOVERNANCE SENATE"
                        title="Meet the Leadership Team"
                      />
                      <p className="mt-3 text-slate-500 font-sans text-sm sm:text-base max-w-3xl leading-relaxed">
                        TechHive Global Consulting is directed by recruitment and operations leaders with over 50 years of combined experience scaling teams across Tech Mahindra, KPIT, and Maersk.
                      </p>
                    </div>

                    {/* Sushma Joshi — photo LEFT, text RIGHT */}
                    <div className="flex flex-col sm:flex-row items-center gap-10 py-10 border-b border-slate-200">
                      {/* Circular photo */}
                      <div className="flex-shrink-0">
                        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#2193b0] shadow-xl">
                          <img
                            src="/sushma-joshi.jpg"
                            alt="Sushma Joshi"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="flex-1 text-left space-y-3">
                        <div>
                          <h3 className="font-sans font-black text-[#0d131f] text-2xl uppercase tracking-tight">Sushma Joshi</h3>
                          <span className="block text-sm font-bold text-[#2193b0] mt-1 tracking-wide">Founder & Director</span>
                        </div>
                        <p className="font-sans text-sm text-slate-600 leading-relaxed">
                          Founder & Director of <strong className="font-black">TechHive Global Consulting Pvt. Ltd. </strong> with over two decades of experience in Tech and Non-Tech hiring. Holding a Master's in Computer Applications and a Master's in Human Resources, I have extensive expertise in Talent Acquisition (Entry Level to Leadership Hiring) ,HR Operations and talent strategy, gained through leadership roles with Fortune 500 organizations, including Tech Mahindra, KPIT, Syntel, and IBM.<br></br><br></br>
                          As the Founder of <strong>MindPower HR Solutions</strong> which is now known as <strong>TechHive Global Consulting Pvt.Ltd </strong>, I have successfully built and led recruitment consulting businesses. Our focus is on building long-term client partnerships, aligning exceptional talent with business objectives, and enabling organizational growth through innovative and people-centric recruitment strategies.
                        </p>
                        <a
                          href="https://www.linkedin.com/in/sushma-joshi-44543169/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#2193b0] hover:text-[#1a7a92] transition-colors"
                        >
                          <LucideIcon name="Linkedin" className="w-4 h-4" />
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>

                    {/* Alok Rana — text LEFT, photo RIGHT */}
                    <div className="flex flex-col-reverse sm:flex-row items-center gap-10 py-10">
                      {/* Text */}
                      <div className="flex-1 text-left space-y-3">
                        <div>
                          <h3 className="font-sans font-black text-[#0d131f] text-2xl uppercase tracking-tight">Alok Rana</h3>
                          <span className="block text-sm font-bold text-[#2193b0] mt-1 tracking-wide">Director & Strategic Partner</span>
                        </div>
                        <p className="font-sans text-sm text-slate-600 leading-relaxed">
                          Alok Rana holds a Bachelor of Science in Marine Engineering from Tolani Maritime Institute and a Postgraduate Certification in Port Management and Logistics Operations. He began his career at sea, then transitioned to lead Western India logistics operations at Maersk. A serial entrepreneur, Alok founded Pune-based Aspire Consulting Group and CAREERx. At TechHive, Alok leverages over two decades of professional experience to direct Business Development, complex industrial staffing, and Executive Search across manufacturing and engineering sectors.
                        </p>
                        <a
                          href="https://www.linkedin.com/in/alokrana/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#2193b0] hover:text-[#1a7a92] transition-colors"
                        >
                          <LucideIcon name="Linkedin" className="w-4 h-4" />
                          LinkedIn Profile
                        </a>
                      </div>
                      {/* Circular photo */}
                      <div className="flex-shrink-0">
                        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#2193b0] shadow-xl">
                          <img
                            src="/alok-rana.png"
                            alt="Alok Rana"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.section>
              </div>
            )}

            {/* CAREERS PAGE */}
            {currentPage === 'careers' && (
              <div id="page-careers">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <CareersSection />
                </motion.div>
              </div>
            )}

            {/* FAQS PAGE */}
            
            {/* CONTACT PAGE */}
            {currentPage === 'contact' && (
              <div id="page-contact" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-12">
                  <div className="border-b border-slate-200 pb-8 text-left">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#2193b0] font-sans block mb-2">
                      
                    </span>
                    <AnimatedHeading
                      title="Contact us"
                    />
                    
                  </div>

                  {/* Interactive input and questionnaire matrix */}
                  <InteractiveContact />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
            }
          />

          {/* Dynamic, data-driven Services pages.
              One generic component (ServicePage) renders every slug found
              in services.js — adding a new service never requires a new route. */}
          <Route path="/services/:slug" element={<ServicePage />} />

          {/* Dynamic, data-driven Industries pages.
              One generic component (IndustryPage) renders every slug found
              in industries.js — adding a new industry never requires a new route. */}
          <Route path="/industries/:slug" element={<IndustryPage />} />

          {/* Insights & Blogs — listing page and per-article detail pages,
              driven entirely by src/data/blogs.ts */}
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
        </Routes>
      </main>

      {/* Corporate Footprint matching user designs */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Speed Dial controls */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3 pointer-events-auto animate-fade-in">
        <button 
          onClick={() => setIsSpeedDialOpen(!isSpeedDialOpen)}
          className="bg-white px-3 py-1.5 rounded-xl shadow-lg border border-slate-100 text-[11px] font-bold text-slate-800 flex items-center justify-center space-x-1 cursor-pointer hover:bg-slate-50 transition-colors"
          style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}
        >
          <span>Hi... Need talent?</span>
        </button>
        
        <div className="relative">
          {isSpeedDialOpen && (
            <div 
              className="absolute bottom-16 right-0 bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 flex flex-col space-y-2.5 min-w-[215px] z-50 text-left transition-all"
              style={{ boxShadow: '0 10px 45px rgba(0,0,0,0.15)' }}
            >
              <div className="font-sans font-extrabold text-[10px] text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 mb-1">
                Direct Sync Gateways
              </div>
              
              {/* WhatsApp Option featuring exact requested number: +91 98907 24086 */}
              <a
                href="https://wa.me/919890724086"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <LucideIcon name="MessageCircle" className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block font-sans font-bold text-xs text-slate-800">WhatsApp Live</span>
                  <span className="block text-[8.5px] text-slate-500 font-mono">+91 98907 24086</span>
                </div>
              </a>

              {/* Email Sourcing */}
              <a
                href="mailto:info@techhiveglobal.com"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-sky-50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <LucideIcon name="Mail" className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block font-sans font-bold text-xs text-slate-800">Email Sourcing</span>
                  <span className="block text-[8.5px] text-slate-500 font-mono">info@techhiveglobal.com</span>
                </div>
              </a>
            </div>
          )}

          <button
            onClick={() => setIsSpeedDialOpen(!isSpeedDialOpen)}
            className="w-12 h-12 rounded-full bg-[#8256bd] hover:bg-[#7245aa] text-white flex items-center justify-center shadow-xl relative cursor-pointer focus:outline-none transition-transform active:scale-95"
            style={{ boxShadow: '0 8px 30px rgba(130, 86, 189, 0.4)' }}
            title="Direct Sync"
          >
            {isSpeedDialOpen ? (
              <LucideIcon name="X" className="w-5 h-5" />
            ) : (
              <LucideIcon name="Send" className="w-5 h-5 -rotate-12 translate-x-[1px] -translate-y-[1px]" />
            )}
            {/* Active alert dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white animate-pulse">
              1
            </span>
          </button>
        </div>
      </div>

    </div>
  );
}
