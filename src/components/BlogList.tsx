import React from 'react';
import { AnimatedHeading } from './AnimatedHeading';
import { BlogCard } from './BlogCard';
import BLOGS from '../data/blogs';

interface BlogListProps {
  /** Show the section chrome (eyebrow, heading, intro copy). Defaults to true. */
  showHeading?: boolean;
  /** Optional wrapper className override */
  className?: string;
}

export const BlogList: React.FC<BlogListProps> = ({
  showHeading = true,
  className = '',
}) => {
  return (
    <section
      id="insights-blogs"
      className={`bg-white py-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {showHeading && (
          <div className="border-b border-slate-200 pb-8 text-left">
            <AnimatedHeading eyebrow="From the TechHive Desk" title="Insights & Blogs" />
            <p className="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-slate-500 sm:text-base">
              Perspectives on Global Capability Centers, executive search, and the
              recruitment strategies shaping how the world's fastest-growing
              businesses build their teams.
            </p>
          </div>
        )}

        {/* Desktop: 2 cols x 2 rows · Tablet: 2 cols · Mobile: 1 col */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
          {BLOGS.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
