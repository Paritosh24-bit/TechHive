import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { NavDropdown } from './NavDropdown';
import { MobileNavDropdown } from './MobileNavDropdown';
import SERVICES from '../services';
import INDUSTRIES from '../industries';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isBlogsActive = location.pathname.startsWith('/blogs');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', value: 'home' },
    { label: 'ABOUT', value: 'about' },
    { label: 'CAREERS', value: 'careers' },
    { label: 'CONTACT', value: 'contact' }
  ];

  const handleNavClick = (pageValue: string) => {
    setIsOpen(false);
    onPageChange(pageValue);
    // The state-based pages all live at the root path ("/"). If the user is
    // currently on a dynamic /services/:slug or /industries/:slug route,
    // navigate back to "/" so the matching <Route> (and therefore the
    // currentPage-driven section) actually renders.
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header
      id="main-scrolling-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f1115]/98 backdrop-blur-md shadow-lg border-b border-white/5 py-3'
          : 'bg-[#0f1115]/95 py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* TechHiveLogo */}
          <button
            id="brand-scrolling-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 group text-left cursor-pointer focus:outline-none"
          >
            <img src="/logo.png" alt="TechHive Global Consulting" className="h-10 w-auto object-contain" />
          </button>

          {/* Desktop Nav-Bar containing exactly requested 7 categories (Services/Industries now render as dropdowns) */}
          <nav id="desktop-scrolling-navigation" className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* HOME */}
            {(() => {
              const homeItem = navItems[0];
              const isActive = currentPage === homeItem.value;
              return (
                <button
                  key={homeItem.value}
                  onClick={() => handleNavClick(homeItem.value)}
                  className={`relative font-sans text-xs font-extrabold tracking-widest transition-colors py-2 uppercase cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {homeItem.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHeaderIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })()}

            {/* SERVICES dropdown — data-driven from services.js, scales to 100+ entries with zero new components */}
            <NavDropdown
              label="SERVICES"
              basePath="/services"
              items={SERVICES}
              isActive={currentPage === 'services'}
              onLabelClick={() => handleNavClick('services')}
            />

            {/* INDUSTRIES dropdown — data-driven from industries.js, scales to 100+ entries with zero new components */}
            <NavDropdown
              label="INDUSTRIES"
              basePath="/industries"
              items={INDUSTRIES}
              isActive={currentPage === 'industries'}
              onLabelClick={() => handleNavClick('industries')}
            />

            {/* ABOUT / CAREERS */}
            {navItems.slice(1, 3).map((item) => {
              const isActive = currentPage === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`relative font-sans text-xs font-extrabold tracking-widest transition-colors py-2 uppercase cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHeaderIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}

            {/* BLOGS — real route (/blogs), not a state-driven page */}
            <Link
              to="/blogs"
              onClick={() => setIsOpen(false)}
              className={`relative font-sans text-xs font-extrabold tracking-widest transition-colors py-2 uppercase cursor-pointer focus:outline-none ${
                isBlogsActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              BLOGS
              {isBlogsActive && (
                <motion.div
                  layoutId="activeNavHeaderIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </Link>

            {/* CONTACT */}
            {navItems.slice(3).map((item) => {
              const isActive = currentPage === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`relative font-sans text-xs font-extrabold tracking-widest transition-colors py-2 uppercase cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHeaderIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Panel (No Syncup button as requested) */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="font-mono text-[9px] text-[#2193b0] tracking-[0.1em] font-black uppercase">
              Operational Gateways Active
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-nav-scrolling-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
            >
              <span className="sr-only">Toggle Navigation</span>
              <LucideIcon name={isOpen ? 'X' : 'Menu'} className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-portal"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/10 bg-[#0f1115] text-white shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {/* HOME */}
              {(() => {
                const homeItem = navItems[0];
                const isActive = currentPage === homeItem.value;
                return (
                  <button
                    key={homeItem.value}
                    onClick={() => handleNavClick(homeItem.value)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-xs font-bold tracking-widest transition-colors cursor-pointer focus:outline-none ${
                      isActive
                        ? 'bg-cyan-950/40 text-cyan-400 border-l-4 border-cyan-500'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {homeItem.label}
                  </button>
                );
              })()}

              {/* SERVICES dropdown — data-driven from services.js */}
              <MobileNavDropdown
                label="SERVICES"
                basePath="/services"
                items={SERVICES}
                onNavigate={() => setIsOpen(false)}
                onViewAllClick={() => handleNavClick('services')}
              />

              {/* INDUSTRIES dropdown — data-driven from industries.js */}
              <MobileNavDropdown
                label="INDUSTRIES"
                basePath="/industries"
                items={INDUSTRIES}
                onNavigate={() => setIsOpen(false)}
                onViewAllClick={() => handleNavClick('industries')}
              />

              {/* ABOUT / CAREERS */}
              {navItems.slice(1, 3).map((item) => {
                const isActive = currentPage === item.value;
                return (
                  <button
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-xs font-bold tracking-widest transition-colors cursor-pointer focus:outline-none ${
                      isActive
                        ? 'bg-cyan-950/40 text-cyan-400 border-l-4 border-cyan-500'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              {/* BLOGS — real route */}
              <Link
                to="/blogs"
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-xs font-bold tracking-widest transition-colors cursor-pointer focus:outline-none ${
                  isBlogsActive
                    ? 'bg-cyan-950/40 text-cyan-400 border-l-4 border-cyan-500'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                BLOGS
              </Link>

              {/* CONTACT */}
              {navItems.slice(3).map((item) => {
                const isActive = currentPage === item.value;
                return (
                  <button
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-xs font-bold tracking-widest transition-colors cursor-pointer focus:outline-none ${
                      isActive
                        ? 'bg-cyan-950/40 text-cyan-400 border-l-4 border-cyan-500'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
