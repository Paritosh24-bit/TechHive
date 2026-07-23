/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { LucideIcon } from './LucideIcon';

interface ServiceTabsProps {
  onSelectContact: () => void;
}

export const ServiceTabs: React.FC<ServiceTabsProps> = ({ onSelectContact }) => {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);

  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <div id="service-verticals-tabs" className="bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden">
      
      {/* Navigation Tabs Header */}
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-slate-50 border-b border-slate-100">
        {SERVICES_DATA.map((service) => {
          const isActive = service.id === activeTab;
          return (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`flex flex-col sm:flex-row items-center justify-center p-5 text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-3 border-b-2 transition-all cursor-pointer focus:outline-none ${
                isActive
                  ? 'bg-white border-b-teal-800 text-teal-900 shadow-sm'
                  : 'border-b-transparent text-slate-500 hover:bg-slate-100/50 hover:text-slate-900'
              }`}
            >
              <div className={`p-2 rounded-lg shrink-0 ${
                isActive ? 'bg-teal-50 text-teal-800' : 'bg-slate-200/50 text-slate-500'
              }`}>
                <LucideIcon name={service.iconName} className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xs sm:text-sm tracking-wide leading-tight">
                {service.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Panes Panel with Motion Transitions */}
      <div className="p-6 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {/* Left side summary and deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-teal-500 font-sans block mb-1">
                  TACTICAL CAPABILITY
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  {currentService.title}
                </h3>
              </div>
              
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentService.longDescription}
              </p>

              {/* Major Milestone Workflows */}
              <div className="space-y-3 pt-2">
                <h4 className="font-display font-bold text-sm tracking-wide text-slate-800 uppercase">
                  Procedural Operational Workflows:
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {currentService.keyWorkflows.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-slate-50/70 hover:bg-slate-50 p-3 rounded border border-slate-100 transition-colors">
                      <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full bg-teal-800 text-white font-mono font-bold text-[10px] shrink-0">
                        {idx + 1}
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side technical specifications and deliverables */}
            <div className="lg:col-span-5 space-y-6 bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-100 flex flex-col justify-between">
              
              {/* Massive Metric block */}
              <div className="border-b border-slate-200 pb-5">
                <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  Service Delivery Output
                </span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-4xl font-display font-extrabold text-teal-800">
                    {currentService.metrics.value}
                  </span>
                  <span className="text-sm font-sans font-bold text-slate-600 uppercase tracking-wider">
                    {currentService.metrics.label}
                  </span>
                </div>
              </div>

              {/* Concrete deliverables */}
              <div className="flex-grow py-4 space-y-3.5">
                <h4 className="font-display font-bold text-xs tracking-wider text-slate-800 uppercase">
                  Contractual Deliverables Included:
                </h4>
                <ul className="space-y-2.5">
                  {currentService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm font-sans text-slate-600">
                      <LucideIcon name="CheckCircle2" className="w-4 h-4 text-teal-650 mt-0.5 shrink-0 text-teal-700" />
                      <span className="font-medium text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger inside container */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  id={`initiate-service-${currentService.id}`}
                  onClick={onSelectContact}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-teal-850 hover:bg-teal-800 text-white font-sans text-xs font-bold uppercase tracking-wider rounded transition-colors active:scale-95 shadow-sm cursor-pointer"
                >
                  Initiate Sourcing Brief
                  <LucideIcon name="ArrowUpRight" className="w-4 h-4 ml-2" />
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default ServiceTabs;
