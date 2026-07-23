import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

/**
 * NavDropdown
 *
 * Reusable desktop navbar dropdown. Pass in a `label`, a `basePath`
 * (e.g. "/services" or "/industries"), and an `items` array of
 * { title, slug } records — typically the imported services.js or
 * industries.js array — and it renders a hover-activated dropdown
 * of links pointing to `${basePath}/${slug}`.
 *
 * Because it takes its item list as a prop, the SAME component powers
 * both the Services and Industries dropdowns, and will automatically
 * include any future items added to those data files with zero changes
 * to this component.
 */
export const NavDropdown = ({ label, basePath, items, isActive, onLabelClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef(null);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  const openMenu = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsOpen(true);
  };

  const closeMenuWithDelay = () => {
    closeTimeout.current = setTimeout(() => setIsOpen(false), 150);
  };

  const handleLabelClick = () => {
    if (onLabelClick) {
      onLabelClick();
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenuWithDelay}
    >
      <button
        type="button"
        onClick={handleLabelClick}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`relative flex items-center gap-1 font-sans text-xs font-extrabold tracking-widest transition-colors py-2 uppercase cursor-pointer focus:outline-none ${
          isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
        }`}
      >
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M1.5 3L5 6.5L8.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {isActive && (
          <motion.div
            layoutId="activeNavHeaderIndicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded"
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 top-full mt-2 w-64 max-h-[70vh] overflow-y-auto rounded-xl bg-[#13151a] border border-white/10 shadow-2xl py-2 z-50"
          >
            {items.map((item) => (
              <Link
                key={item.slug}
                to={`${basePath}/${item.slug}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-xs font-sans font-semibold text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropdown;
