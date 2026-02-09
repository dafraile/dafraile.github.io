import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

export const PublicationList: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b-2 border-black dark:border-white pb-6">
        <h2 className="text-4xl font-sans font-bold uppercase tracking-tight">Research Modules</h2>
        <p className="font-mono text-sm text-gray-500 mt-2 tracking-wide">
          &gt; Index of published academic works.
        </p>
      </div>

      <div className="space-y-4">
        {PUBLICATIONS.map((pub, idx) => (
          <div key={pub.id} className="group relative block p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all bg-white dark:bg-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <div className="absolute top-4 right-4 text-xs font-mono text-gray-300 group-hover:text-black dark:group-hover:text-white">
              [REF_0{idx + 1}]
            </div>
            
            <div className="flex flex-col gap-2 mb-4">
              <h3 className="text-xl font-sans font-bold leading-tight group-hover:underline decoration-2 underline-offset-4">
                {pub.title}
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <span>{pub.year}</span>
                <span>//</span>
                <span className="text-black dark:text-white uppercase">{pub.journal}</span>
              </div>
            </div>
            
            <p className="font-mono text-xs text-gray-500 mb-4 border-l-2 border-gray-200 dark:border-gray-800 pl-3">
              {pub.authors}
            </p>
            
            <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {pub.tags?.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-[10px] font-mono uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>

              {pub.link && (
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 transition-colors"
                >
                  Access_DOI <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-8 text-center border-t border-gray-200 dark:border-gray-800 mt-8">
        <a 
          href="https://scholar.google.com/citations?user=DavidFraileNavarro" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase font-mono text-xs font-bold tracking-widest"
        >
          Initialize Google Scholar Protocol
        </a>
      </div>
    </div>
  );
};