import React from 'react';
import { ArrowLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogPost } from '../types';

type BlogListProps = {
  selectedPostId?: string | null;
  onSelectPost: (postId: string) => void;
  onBackToList: () => void;
};

const formatDate = (isoDate: string): string => {
  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export const BlogList: React.FC<BlogListProps> = ({ selectedPostId, onSelectPost, onBackToList }) => {
  const selectedPost: BlogPost | null = selectedPostId
    ? BLOG_POSTS.find((post) => post.id === selectedPostId) ?? null
    : null;

  if (selectedPost) {
    return (
      <div className="animate-fade-in max-w-4xl">
        <button
          onClick={onBackToList}
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-8 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Journal</span>
        </button>

        <article className="space-y-8">
          <header className="space-y-5 border-b border-gray-200 dark:border-gray-800 pb-8">
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-gray-500">
              <time>{formatDate(selectedPost.date)}</time>
              <span>•</span>
              <div className="flex gap-2">
                {selectedPost.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-sans font-bold leading-tight tracking-tight">{selectedPost.title}</h1>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{selectedPost.summary}</p>
          </header>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            {selectedPost.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {selectedPost.externalLink && (
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <a
                href={selectedPost.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-2 border border-current transition-colors"
              >
                Read original <ExternalLink size={12} />
              </a>
            </div>
          )}
        </article>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b-2 border-black dark:border-white pb-6">
        <h2 className="text-4xl font-sans font-bold tracking-tight">Journal</h2>
        <p className="text-sm text-gray-500 mt-2 tracking-wide">Long-form notes on AI, research practice, and software work.</p>
      </div>

      <div className="grid gap-0 border-t border-gray-200 dark:border-gray-800">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer border-b border-gray-200 dark:border-gray-800 py-8 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors"
            onClick={() => onSelectPost(post.id)}
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-3">
              <div className="flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest shrink-0 w-44">
                <time>{formatDate(post.date)}</time>
              </div>
              <h3 className="text-2xl font-sans font-bold group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {post.title}
              </h3>
            </div>

            <div className="md:pl-48 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">{post.summary}</p>
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Open <ChevronRight size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
