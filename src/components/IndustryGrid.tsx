/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data';
import { LucideIcon } from './LucideIcon';

export const IndustryGrid: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div id="industry-bento-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {INDUSTRIES_DATA.map((industry) => {
        const isHovered = hoveredId === industry.id;
        
        return (
          <div
            key={industry.id}
            id={`industry-card-${industry.id}`}
            onMouseEnter={() => setHoveredId(industry.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative bg-white border border-slate-100 rounded-xl shadow-md p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            {/* Top Teal Ribbon on Hover */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-teal-800 transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />

            {/* Content header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-teal-50 text-teal-800 rounded-lg group-hover:bg-teal-800 group-hover:text-white transition-colors duration-300">
                  <LucideIcon name={industry.iconName} className="w-6 h-6" />
                </div>
                {/* Demand metric capsule */}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-800 font-mono border border-slate-200">
                  {industry.demandMetric}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-teal-800 transition-colors duration-350">
                  {industry.title}
                </h3>
                <p className="mt-2.5 font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {industry.description}
                </p>
              </div>

              {/* Subsectors list */}
              <div className="pt-2">
                <h4 className="font-display font-bold text-[10px] tracking-wider text-slate-400 uppercase mb-2">
                  Specialized Technical Sub-Sectors
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {industry.keySubsectors.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-1 rounded bg-slate-50 text-slate-600 font-sans text-[11px] font-medium border border-slate-150 group-hover:bg-teal-50 group-hover:text-teal-950 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Engagement framework label */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="block text-[9px] uppercase tracking-wider font-bold text-slate-400">
                  Engagement Standard
                </span>
                <span className="block text-[11px] sm:text-xs font-sans font-bold text-slate-700 mt-0.5">
                  {industry.engagementModel}
                </span>
              </div>
              
              {/* Clean decorative chevron */}
              <div className="text-slate-305 group-hover:text-teal-800 group-hover:translate-x-1.5 transition-all text-slate-400">
                <LucideIcon name="ChevronRight" className="w-5 h-5" />
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default IndustryGrid;
