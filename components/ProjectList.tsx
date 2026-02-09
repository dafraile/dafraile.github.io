import React from 'react';
import { Github, Code2, Terminal } from 'lucide-react';
import { PROJECTS } from '../constants';

export const ProjectList: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b-2 border-black dark:border-white pb-6">
        <h2 className="text-4xl font-sans font-bold uppercase tracking-tight">Code Repositories</h2>
        <p className="font-mono text-sm text-gray-500 mt-2 tracking-wide">
          &gt; Executables and tools built for research utility.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="relative group p-1">
            {/* Background decorative elements */}
            <div className="absolute inset-0 border border-gray-200 dark:border-gray-800 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            
            <div className="relative bg-white dark:bg-black border border-black dark:border-white p-6 md:p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6 border-b border-gray-100 dark:border-gray-900 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-black text-white dark:bg-white dark:text-black">
                    <Terminal size={20} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                    ID: {project.id.toUpperCase()}
                  </span>
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                    <Github size={20} />
                  </a>
                )}
              </div>
              
              <h3 className="text-2xl font-sans font-bold mb-3 uppercase">{project.name}</h3>
              <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-black dark:bg-white animate-pulse"></span>
                  <span className="text-[10px] font-mono uppercase text-gray-400">Stack_Trace:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 border border-gray-300 dark:border-gray-700 text-xs font-mono uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};