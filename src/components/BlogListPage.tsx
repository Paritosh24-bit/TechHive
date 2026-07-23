import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { BlogList } from './BlogList';

export const BlogListPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    document.title = 'Insights & Blogs | TechHive Global Consulting';
  }, []);

  return (
    <div id="page-blogs" className="min-h-screen bg-white">
      {/* Breadcrumb strip */}
      <div className="bg-[#0f1115] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-white/50"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <LucideIcon name="ChevronRight" className="h-3 w-3" />
            <span className="text-[#6dd5ed]">Insights & Blogs</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-4xl font-black uppercase tracking-tight text-white sm:text-5xl"
          >
            Insights &amp; Blogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-2xl font-sans text-sm text-white/60 sm:text-base"
          >
            Perspectives on Global Capability Centers, executive search, and the
            recruitment strategies shaping how the world's fastest-growing
            businesses build their teams.
          </motion.p>
        </div>
      </div>

      <BlogList showHeading={false} />
    </div>
  );
};

export default BlogListPage;
