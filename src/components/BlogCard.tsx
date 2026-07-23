import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import type { Blog } from '../data/blogs';

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

export const BlogCard: React.FC<BlogCardProps> = ({ blog, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="h-full"
    >
      <Link
        to={`/blogs/${blog.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-900/10"
      >
        {/* Hero image */}
        <div className="relative h-52 w-full overflow-hidden">
          <img
            src={blog.heroImage}
            alt={blog.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06102a]/70 via-transparent to-transparent" />
          {/* Category badge */}
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1.5 font-sans text-[10px] font-extrabold uppercase tracking-widest text-[#2193b0] shadow-sm backdrop-blur-sm">
            {blog.category}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-sans text-lg font-black leading-snug tracking-tight text-[#0d131f] transition-colors duration-300 group-hover:text-[#2193b0] sm:text-xl">
            {blog.title}
          </h3>

          <p className="blog-excerpt-clamp mt-3 flex-1 font-sans text-sm leading-relaxed text-slate-500">
            {blog.excerpt}
          </p>

          {/* Meta row */}
          <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 font-sans text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              {/* <LucideIcon name="Calendar" className="h-3.5 w-3.5" />
              {formatDate(blog.date)} */}
            </span>
            <span className="inline-flex items-center gap-1.5">
              {/* <LucideIcon name="Clock" className="h-3.5 w-3.5" /> */}
              {blog.readingTime}
            </span>
          </div>

          {/* Read more */}
          <div className="mt-5 inline-flex w-fit items-center gap-2 font-sans text-xs font-extrabold uppercase tracking-widest text-[#2193b0]">
            Read More
            <LucideIcon
              name="ArrowUpRight"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
