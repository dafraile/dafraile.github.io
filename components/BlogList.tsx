import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { ArrowLeft, ChevronRight, ExternalLink } from 'lucide-react';

export const BlogList: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="animate-fade-in max-w-3xl">
        <button 
          onClick={() => setSelectedPost(null)}
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-8 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>[ Back to Index ]</span>
        </button>

        <article className="border-l-2 border-black dark:border-white pl-6 md:pl-10 py-2">
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500 mb-4">
              <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1">
                ENTRY_ID: {selectedPost.id.toUpperCase()}
              </span>
              <time>{selectedPost.date}</time>
              <div className="flex gap-2">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="text-gray-400">#{tag.toUpperCase()}</span>
                ))}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-sans font-bold mb-6 leading-none tracking-tight uppercase">
              {selectedPost.title}
            </h1>
          </header>

          <div className="space-y-6 text-base md:text-lg leading-relaxed font-mono text-gray-800 dark:text-gray-300">
            {selectedPost.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
            {selectedPost.externalLink ? (
              <a
                href={selectedPost.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-2 border border-current transition-colors"
              >
                Read on AI Health Alliance <ExternalLink size={12} />
              </a>
            ) : (
              <span></span>
            )}
            <span className="font-mono text-xs animate-pulse">_END_OF_FILE</span>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b-2 border-black dark:border-white pb-6">
        <h2 className="text-4xl font-sans font-bold uppercase tracking-tight">System Journal</h2>
        <p className="font-mono text-sm text-gray-500 mt-2 tracking-wide">
          &gt; Accessing thoughts on research, code, and infrastructure...
        </p>
      </div>

      <div className="grid gap-0 border-t border-gray-200 dark:border-gray-800">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id} 
            className="group cursor-pointer border-b border-gray-200 dark:border-gray-800 py-8 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors" 
            onClick={() => setSelectedPost(post)}
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-3">
              <div className="flex items-center gap-3 text-xs font-mono text-gray-400 uppercase tracking-widest shrink-0 w-32">
                <time>{post.date}</time>
              </div>
              <h3 className="text-2xl font-sans font-bold uppercase group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {post.title}
              </h3>
            </div>
            
            <div className="md:pl-40 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end">
              <p className="font-mono text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                {post.summary}
              </p>
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Read_File <ChevronRight size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};