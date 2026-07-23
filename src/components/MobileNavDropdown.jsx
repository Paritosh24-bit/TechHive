import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * MobileNavDropdown
 *
 * Reusable accordion-style dropdown for the mobile drawer menu. Pass in a
 * `label`, a `basePath`, and an `items` array of { title, slug } records
 * and it renders an expandable list of links pointing to
 * `${basePath}/${slug}`.
 *
 * Like NavDropdown, this is data-driven via the `items` prop so the same
 * component serves both Services and Industries on mobile.
 */
export const MobileNavDropdown = ({ label, basePath, items, onNavigate, onViewAllClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        className="flex w-full items-center justify-between px-4 py-3 rounded-lg text-xs font-bold tracking-widest text-slate-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer focus:outline-none"
      >
        <span>{label}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        >
          <path d="M1.5 3L5 6.5L8.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isExpanded && (
        <div className="pl-4 pb-2 space-y-1">
          {onViewAllClick && (
            <button
              type="button"
              onClick={onViewAllClick}
              className="block w-full text-left px-4 py-2 rounded-lg text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 hover:bg-white/5 transition-colors cursor-pointer focus:outline-none"
            >
              View All {label}
            </button>
          )}
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`${basePath}/${item.slug}`}
              onClick={onNavigate}
              className="block px-4 py-2 rounded-lg text-[11px] font-semibold text-slate-400 hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavDropdown;
