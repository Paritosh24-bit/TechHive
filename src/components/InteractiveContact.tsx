/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LucideIcon } from './LucideIcon';
import { OFFICE_LOCATIONS } from '../data';

export const InteractiveContact = () => {
  const officeData = OFFICE_LOCATIONS[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">

      {/* Left Column: Office visual + location details */}
      <div id="contact-locations-sidebar" className="bg-slate-900 text-white flex flex-col">

        {/* Office Image */}
        <div className="relative h-60 sm:h-100 w-full shrink-0">
          <img
            src="https://ik.imagekit.io/paritosh/GBB_Images_Overview-1.jpg"
            alt="TechHive Office - Gokhale Business Bay, Kothrud, Pune"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#6dd5ed] font-sans">
              OFFICIAL LOCATION
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
              {officeData.city}
            </h3>
          </div>
          {officeData.isHQ && (
            <span className="absolute top-4 right-4 px-2 py-1 rounded text-[9px] tracking-widest uppercase bg-[#2193b0]/30 text-[#6dd5ed] border border-[#2193b0]/40 font-bold backdrop-blur-sm">
              HQ
            </span>
          )}
        </div>

        {/* Address + Security */}
        <div className="flex-1 flex flex-col justify-between p-8 sm:p-10 space-y-8">

          <div className="space-y-5">
            <div className="flex items-start space-x-2.5 text-[#6dd5ed]">
              <LucideIcon name="MapPin" className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="font-sans text-sm text-slate-300 leading-relaxed whitespace-pre-line font-medium">
                {officeData.address}
              </p>
            </div>

            {officeData.mapsLink && (
              <a
                href={officeData.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#6dd5ed] hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>View on Map</span>
                <LucideIcon name="ArrowUpRight" className="w-3.5 h-3.5" />
              </a>
            )}

            <div className="text-[10px] text-slate-500 italic uppercase pt-1 border-t border-slate-800/60">
              {officeData.role}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 space-y-3.5">
            <p className="text-[10px] text-slate-500 font-sans uppercase font-bold tracking-wider">
              Enterprise Integrity Standards
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-[11px]">
                <LucideIcon name="Shield" className="w-4 h-4 text-[#2193b0]" />
                <span className="text-slate-400 font-medium font-sans">EOR Zero-Liability Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px]">
                <LucideIcon name="CheckCircle2" className="w-4 h-4 text-[#2193b0]" />
                <span className="text-slate-400 font-medium font-sans">GDPR Data Encryption</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Column: Ways to reach us */}
      <div id="contact-engagement-side" className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-8">

        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-teal-650 font-sans block mb-1">
            LET'S CONNECT
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ways to Reach Us
          </h3>
          <p className="mt-2 text-sm text-slate-500 font-sans leading-relaxed">
            Whether you're scaling a Global Capability Center, building out a contract staffing pod, or exploring
            executive search, our advisory team is ready to help. Reach us directly using any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`mailto:${officeData.email}`}
            className="flex items-start space-x-3 p-5 rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all bg-slate-50/50"
          >
            <div className="p-2 rounded-full bg-teal-50 text-teal-800 shrink-0">
              <LucideIcon name="Mail" className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-900 uppercase tracking-wide">Email</span>
              <span className="block text-sm text-slate-600 mt-0.5 break-all">{officeData.email}</span>
            </div>
          </a>

          <a
            href={`tel:${officeData.phone}`}
            className="flex items-start space-x-3 p-5 rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all bg-slate-50/50"
          >
            <div className="p-2 rounded-full bg-teal-50 text-teal-800 shrink-0">
              <LucideIcon name="Phone" className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-900 uppercase tracking-wide">Phone</span>
              <span className="block text-sm text-slate-600 mt-0.5">{officeData.phone}</span>
            </div>
          </a>

          

          
        </div>

      </div>

    </div>
  );
};

export default InteractiveContact;
