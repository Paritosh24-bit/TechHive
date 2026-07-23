import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import BLOGS from '../data/blogs';
import { BlogLayout } from './BlogLayout';
import { BlogNavigation } from './BlogNavigation';
import { LucideIcon } from './LucideIcon';
import { extractHeadings, prepareArticleHtml } from '../utils/blogContent';

export const BlogPage: React.FC = () => {
  const { slug } = useParams();
  const index = BLOGS.findIndex((b) => b.slug === slug);
  const blog = index !== -1 ? BLOGS[index] : undefined;

  const previous = index > 0 ? BLOGS[index - 1] : null;
  const next = index !== -1 && index < BLOGS.length - 1 ? BLOGS[index + 1] : null;

  const preparedHtml = useMemo(
    () => (blog ? prepareArticleHtml(blog.fullContent) : ''),
    [blog]
  );
  const toc = useMemo(() => (blog ? extractHeadings(blog.fullContent) : []), [blog]);

  // Scroll to top whenever a new blog is opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  // Dynamic SEO: page title, meta description, Open Graph tags
  useEffect(() => {
    if (!blog) return;

    const previousTitle = document.title;
    document.title = `${blog.title} | TechHive Global Consulting`;

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('name', 'description', blog.excerpt);
    setMeta('property', 'og:title', blog.title);
    setMeta('property', 'og:description', blog.excerpt);
    setMeta('property', 'og:type', 'article');
    setMeta('property', 'og:image', blog.heroImage);

    return () => {
      document.title = previousTitle;
    };
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-[50vh] bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="font-sans text-2xl font-black uppercase text-[#0d131f]">
            Article Not Found
          </h1>
          <p className="text-sm text-slate-500">
            We couldn't find "{slug}". Browse our latest insights below.
          </p>
          <Link
            to="/blogs"
            className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#2193b0] px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#1a7a92]"
          >
            <LucideIcon name="ArrowLeft" className="h-4 w-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <BlogLayout blog={blog}>
      <div className="mx-auto flex max-w-[1100px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
        {/* Table of contents — sticky on desktop */}
        {toc.length > 0 && (
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 shrink-0 lg:sticky lg:top-28 lg:order-1 lg:w-56"
          >
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
              <p className="mb-3 inline-flex items-center gap-2 font-sans text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                <LucideIcon name="List" className="h-3.5 w-3.5" />
                On this page
              </p>
              <nav className="space-y-2.5">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block font-sans text-[13px] font-medium leading-snug text-slate-500 transition-colors hover:text-[#2193b0]"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </motion.aside>
        )}

        {/* Article body */}
        <div className="order-1 min-w-0 flex-1 lg:order-2">
          <div
            className="blog-article-content"
            dangerouslySetInnerHTML={{ __html: preparedHtml }}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-14 max-w-[850px]">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] p-8 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />
          <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div className="space-y-1 text-white">
              <p className="font-sans text-xl font-black uppercase tracking-tight">
                Ready to Build Your Team?
              </p>
              <p className="max-w-md font-sans text-sm text-white/80">
                Talk to our specialists about your hiring priorities for the year ahead.
              </p>
            </div>
            <Link
              to="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-widest text-[#2193b0] shadow-lg transition-colors hover:bg-slate-50"
            >
              Contact Us
              <LucideIcon name="ArrowUpRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next + Back to Blogs */}
      <div className="mx-auto mt-14 max-w-[850px] space-y-8">
        <BlogNavigation previous={previous} next={next} />
        <div className="text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 font-sans text-xs font-extrabold uppercase tracking-widest text-[#2193b0] transition-colors hover:text-[#1a7a92]"
          >
            <LucideIcon name="ArrowLeft" className="h-3.5 w-3.5" />
            Back to Blogs
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPage;
