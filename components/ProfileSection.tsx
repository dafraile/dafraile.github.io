import React from 'react';
import { Twitter, ExternalLink, Mail, Github, Terminal } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 animate-fade-in">
      <div className="border-b-2 border-black dark:border-white pb-8 relative">
        <div className="absolute top-0 right-0 font-mono text-xs text-gray-400">
          ID: DFN-001
        </div>
        <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 tracking-tighter uppercase">
          David<br/>Fraile<br/>Navarro
        </h1>
        <div className="flex items-center gap-2 font-mono text-lg text-gray-600 dark:text-gray-400">
          <span className="text-black dark:text-white font-bold">&gt;</span>
          <p className="typing-effect">
            Academic. Creator. Coder.
          </p>
        </div>
        <p className="mt-4 font-mono text-sm text-gray-500 max-w-2xl">
          Exploring the boundaries between public health science and digital technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] border-b border-gray-200 dark:border-gray-800 pb-2 mb-4 text-gray-400">
            // Network_Uplinks
          </h2>
          <div className="flex flex-col gap-0 border-l border-gray-200 dark:border-gray-800">
             <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <Twitter size={18} />
              <span className="font-mono text-sm group-hover:translate-x-2 transition-transform">@dafraile</span>
            </a>
            <a href={SOCIAL_LINKS.orcid} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <div className="w-5 h-5 flex items-center justify-center font-bold text-[10px] border border-current rounded-none">iD</div>
              <span className="font-mono text-sm group-hover:translate-x-2 transition-transform">ORCID: 0000-0002-1108-7071</span>
            </a>
             <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <Github size={18} />
              <span className="font-mono text-sm group-hover:translate-x-2 transition-transform">GitHub</span>
            </a>
             <a href={SOCIAL_LINKS.scholar} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <ExternalLink size={18} />
              <span className="font-mono text-sm group-hover:translate-x-2 transition-transform">Google Scholar</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] border-b border-gray-200 dark:border-gray-800 pb-2 mb-4 text-gray-400">
            // System_Description
          </h2>
          <div className="p-4 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/20 font-mono text-sm leading-relaxed">
            <p className="mb-4">
              <span className="text-blue-600 dark:text-blue-400">function</span> <span className="text-yellow-600 dark:text-yellow-400">aboutMe</span>() &#123;
            </p>
            <p className="pl-4 text-gray-600 dark:text-gray-300">
              return "I specialize in epidemiology and the application of modern coding practices to academic research. My work involves building reproducible data pipelines, visualizing complex health data, and publishing research that bridges the gap between traditional medicine and computer science.";
            </p>
            <p>&#125;</p>
          </div>
        </div>
      </div>
    </div>
  );
};