import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import type { Blog } from '../data/blogs';

interface BlogLayoutProps {
  blog: Blog;
  children: React.ReactNode;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

export const BlogLayout: React.FC<BlogLayoutProps> = ({ blog, children }) => {
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Sticky scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available — silently ignore */
    }
  };

  const shareLinks = [
    {
      name: 'Twitter',
      icon: 'Twitter',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Linkedin',
      icon: 'Linkedin',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <div id="page-blog-detail" className="min-h-screen bg-white">
      {/* Sticky reading progress bar */}
      <div className="fixed left-0 right-0 top-0 z-[60] h-1 bg-slate-100/60">
        <div
          className="h-full bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Hero banner */}
        <div className="relative h-[46vh] min-h-[320px] w-full overflow-hidden sm:h-[54vh]">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            src={blog.heroImage}
            alt={blog.title}
            className="h-full w-full rounded-b-[2.5rem] object-cover"
          />
          <div className="absolute inset-0 rounded-b-[2.5rem] bg-gradient-to-t from-[#06102a]/95 via-[#06102a]/50 to-[#06102a]/10" />

          <div className="absolute inset-0 flex flex-col justify-end px-4 pb-8 sm:px-8 sm:pb-12">
            <div className="mx-auto w-full max-w-[850px]">
              {/* Back to blogs */}
              <Link
                to="/blogs"
                className="mb-6 inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              >
                <LucideIcon name="ArrowLeft" className="h-3.5 w-3.5" />
                Back to Blogs
              </Link>

              {/* <span className="inline-flex w-fit items-center rounded-full bg-white/95 px-3.5 py-1.5 font-sans text-[10px] font-extrabold uppercase tracking-widest text-[#2193b0] shadow-sm">
                {blog.category}
              </span> */}

              <h1 className="mt-4 font-sans text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {blog.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-xs font-semibold text-white/70">
                {/* <span className="inline-flex items-center gap-1.5">
                  <LucideIcon name="Calendar" className="h-3.5 w-3.5" />
                  {formatDate(blog.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <LucideIcon name="Clock" className="h-3.5 w-3.5" />
                  {blog.readingTime}
                </span> */}
              </div>
            </div>
          </div>
        </div>

        

        {/* Article content (passed in as children — includes TOC + body) */}
        <div className="px-4 py-10 sm:px-6 lg:px-8">{children}</div>
      </motion.div>
    </div>
  );
};

export default BlogLayout;
