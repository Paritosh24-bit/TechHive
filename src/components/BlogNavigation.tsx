import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from './LucideIcon';
import type { Blog } from '../data/blogs';

interface BlogNavigationProps {
  previous: Blog | null;
  next: Blog | null;
}

export const BlogNavigation: React.FC<BlogNavigationProps> = ({ previous, next }) => {
  if (!previous && !next) return null;

  return (
    <div className="mx-auto grid max-w-[850px] grid-cols-1 gap-4 border-t border-slate-100 pt-8 sm:grid-cols-2">
      {previous ? (
        <Link
          to={`/blogs/${previous.slug}`}
          className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors group-hover:bg-[#2193b0]/10 group-hover:text-[#2193b0]">
            <LucideIcon name="ChevronLeft" className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <span className="block font-sans text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
              Previous
            </span>
            <span className="mt-0.5 block truncate font-sans text-sm font-bold text-[#0d131f]">
              {previous.title}
            </span>
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {next ? (
        <Link
          to={`/blogs/${next.slug}`}
          className="group flex items-center justify-end gap-3 rounded-2xl border border-slate-100 bg-white p-5 text-right shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="min-w-0">
            <span className="block font-sans text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
              Next
            </span>
            <span className="mt-0.5 block truncate font-sans text-sm font-bold text-[#0d131f]">
              {next.title}
            </span>
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors group-hover:bg-[#2193b0]/10 group-hover:text-[#2193b0]">
            <LucideIcon name="ChevronRight" className="h-4 w-4" />
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
    </div>
  );
};

export default BlogNavigation;
