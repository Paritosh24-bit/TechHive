import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LucideIcon } from './LucideIcon';
import { OFFICE_LOCATIONS } from '../data';

interface FooterProps {
  setCurrentPage?: (page: string) => void;
  onNavigateContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onNavigateContact }) => {
  const navigate = useNavigate();
  const officeData = OFFICE_LOCATIONS[0];

  const handlePageClick = (pageValue: string) => {
    if (setCurrentPage) {
      setCurrentPage(pageValue);
      // State-based pages live at "/". If the user is on a dynamic
      // /services/:slug or /industries/:slug route, return to "/" so the
      // matching <Route> renders the currentPage-driven section again.
      navigate('/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (pageValue === 'contact' && onNavigateContact) {
      onNavigateContact();
    }
  };

  return (
    <footer id="techhive-sleek-footer" className="bg-[#0c0d10] text-[#a0aec0] border-t border-zinc-850 pt-20 pb-8 text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid content matching Image 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-12 border-b border-zinc-800">
          
          {/* Left Column: Brand Logo & Mission paragraph */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* TechHive Logo */}
            <div className="flex items-center text-left">
              <img src="/logo.png" alt="TechHive Global Consulting" className="h-12 w-auto object-contain" />
            </div>

            <p className="font-sans text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal pr-4">
              TechHive Global Consulting Pvt. Ltd. (evolved from MindPower HR Solutions, founded in 2017) is a "talent-first" consulting partner headquartered in Pune. Guided by an expert founding team with more than 50 years of combined recruitment, staffing, and industrial executive history, we supply exceptional talent pipelines for high-growth enterprises and captive Global Capability Centers (GCCs) globally.
            </p>
          </div>

          {/* Center Column: 2x2 Grid of bold dark outline buttons */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-3">
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-6 border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 hover:bg-zinc-900/60 transition-colors text-center font-sans font-extrabold text-[11px] tracking-widest text-white uppercase rounded flex flex-col items-center justify-center space-y-2 hover:text-[#2193b0]"
            >
              <LucideIcon name="Instagram" className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.google.com/maps/place/Gokhale+Business+Bay/@18.4987239,73.8208444,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf01eae15091:0x3eb6c20ccecef9b6!8m2!3d18.4987239!4d73.8208444!16s%2Fg%2F11h7f8frjz?entry=ttu&g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-6 border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 hover:bg-zinc-900/60 transition-colors text-center font-sans font-extrabold text-[11px] tracking-widest text-white uppercase rounded flex flex-col items-center justify-center space-y-2 hover:text-[#2193b0]"
            >
              <LucideIcon name="MapPin" className="w-4 h-4" />
              <span>G-MAPS</span>
            </a>
            <a 
              href="https://www.google.com/maps/place/Gokhale+Business+Bay/@18.4987239,73.8208444,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf01eae15091:0x3eb6c20ccecef9b6!8m2!3d18.4987239!4d73.8208444!16s%2Fg%2F11h7f8frjz?entry=ttu&g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-6 border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 hover:bg-zinc-900/60 transition-colors text-center font-sans font-extrabold text-[11px] tracking-widest text-white uppercase rounded flex flex-col items-center justify-center space-y-2 hover:text-[#2193b0]"
            >
              <LucideIcon name="Briefcase" className="w-4 h-4" />
              <span>BUSINESS</span>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-6 border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 hover:bg-zinc-900/60 transition-colors text-center font-sans font-extrabold text-[11px] tracking-widest text-white uppercase rounded flex flex-col items-center justify-center space-y-2 hover:text-[#2193b0]"
            >
              <LucideIcon name="Facebook" className="w-4 h-4" />
              <span>FACEBOOK</span>
            </a>
          </div>

          {/* Right Column: Email & Phone contact boxes */}
          <div className="lg:col-span-4 flex flex-col gap-4">
  <a
    href={`mailto:${officeData.email}`}
    className="flex items-center space-x-4 p-5 rounded-xl border border-zinc-800 hover:border-[#2193b0]/60 hover:bg-zinc-900/60 transition-colors bg-zinc-950/40 w-full"
  >
    <div className="p-3 rounded-full bg-zinc-900 text-[#6dd5ed] shrink-0">
      <LucideIcon name="Mail" className="w-5 h-5" />
    </div>

    <div className="min-w-0">
      <span className="block text-[10px] font-bold text-white uppercase tracking-wide">
        Email
      </span>
      <span className="block text-sm text-zinc-400 mt-1 break-all">
        {officeData.email}
      </span>
    </div>
  </a>

  <a
    href={`tel:${officeData.phone}`}
    className="flex items-center space-x-4 p-5 rounded-xl border border-zinc-800 hover:border-[#2193b0]/60 hover:bg-zinc-900/60 transition-colors bg-zinc-950/40 w-full"
  >
    <div className="p-3 rounded-full bg-zinc-900 text-[#6dd5ed] shrink-0">
      <LucideIcon name="Phone" className="w-5 h-5" />
    </div>

    <div className="min-w-0">
      <span className="block text-[10px] font-bold text-white uppercase tracking-wide">
        Phone
      </span>
      <span className="block text-sm text-zinc-400 mt-1">
        {officeData.phone}
      </span>
    </div>
  </a>
          </div>

        </div>
        

        {/* Fine bottom-most black compliance line strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[10px] sm:text-xs">
          
          {/* <p className="font-mono text-zinc-500 text-center md:text-left">
            Copyright © TechHive Global Consulting Pvt. Ltd. 2017 – 2026 | All Rights Reserved.
          </p> */}
          
          {/* Nav raw listings mapping exactly to state pages */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono font-bold text-zinc-400">
            <button onClick={() => handlePageClick('home')} className="hover:text-white uppercase tracking-widest cursor-pointer focus:outline-none">
              HOME
            </button>
            <button onClick={() => handlePageClick('services')} className="hover:text-white uppercase tracking-widest cursor-pointer focus:outline-none">
              SERVICES
            </button>
            <button onClick={() => handlePageClick('industries')} className="hover:text-white uppercase tracking-widest cursor-pointer focus:outline-none">
              INDUSTRIES
            </button>
            <button onClick={() => handlePageClick('about')} className="hover:text-white uppercase tracking-widest cursor-pointer focus:outline-none">
              ABOUT
            </button>
            <button onClick={() => handlePageClick('careers')} className="hover:text-white uppercase tracking-widest cursor-pointer focus:outline-none">
              CAREERS
            </button>
            <Link to="/blogs" className="hover:text-white uppercase tracking-widest cursor-pointer focus:outline-none">
              BLOGS
            </Link>
            <button onClick={() => handlePageClick('contact')} className="hover:text-white uppercase tracking-widest cursor-pointer focus:outline-none">
              CONTACT
            </button>
          </div>

        </div>

      </div>
      
    </footer>
  );
};

export default Footer;
