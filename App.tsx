import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Twitter,
  Github,
  ExternalLink,
  Terminal
} from 'lucide-react';
import { PublicationList } from './components/PublicationList';
import { BlogList } from './components/BlogList';
import { ProjectList } from './components/ProjectList';
import { BLOG_POSTS, SOCIAL_LINKS } from './constants';
import { ViewState } from './types';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.RESEARCH:
        return <PublicationList />;
      case ViewState.BLOG:
        return <BlogList />;
      case ViewState.CODING:
        return <ProjectList />;
      default:
        return null;
    }
  };

  const latestPost = BLOG_POSTS[0];
  const secondPost = BLOG_POSTS[1];

  return (
    <div className="min-h-screen font-mono bg-white dark:bg-black text-black dark:text-white">
      {/* Dark mode toggle - floating top right */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {currentView === ViewState.HOME ? (
          <>
            {/* Hero Section - Profile */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 mb-16">
              {/* Left Column - Name and Links */}
              <div className="space-y-8">
                <div className="border-b-2 border-black dark:border-white pb-8">
                  <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 tracking-tighter uppercase leading-none">
                    David<br/>Fraile<br/>Navarro
                  </h1>
                  <div className="flex items-center gap-2 font-mono text-lg text-gray-600 dark:text-gray-400 mb-3">
                    <span className="text-black dark:text-white font-bold">&gt;</span>
                    <p>Physician. Researcher. Builder.</p>
                  </div>
                  <p className="font-mono text-sm text-gray-500">
                    Postdoctoral Research Fellow in Generative AI at Macquarie University. MBBS, PhD.
                  </p>
                </div>

                {/* Social Links - Horizontal */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity" title="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity" title="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={SOCIAL_LINKS.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity" title="Google Scholar">
                    <ExternalLink size={18} />
                  </a>
                  <a href={SOCIAL_LINKS.orcid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity" title="ORCID">
                    <div className="w-5 h-5 flex items-center justify-center font-bold text-[9px] border border-current">iD</div>
                  </a>
                  <a href={SOCIAL_LINKS.huggingface} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity" title="Hugging Face">
                    <Terminal size={18} />
                  </a>
                </div>
              </div>

              {/* Right Column - About Me Box */}
              <div className="flex items-start">
                <div className="p-6 md:p-8 border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900/30 w-full">
                  <p className="mb-4 text-sm">
                    <span className="text-blue-600 dark:text-blue-400">function</span> <span className="text-yellow-600 dark:text-yellow-400">aboutMe</span>() &#123;
                  </p>
                  <p className="pl-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    return "I'm a doctor who codes. I research how large language models and generative AI can transform clinical practice—from documentation to decision-making. My work spans NLP for medical text, clinical dialogue summarization, and the ethics of AI in healthcare. I also helped build Australia's COVID-19 living guidelines.";
                  </p>
                  <p className="mt-4 text-sm">&#125;</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-black dark:border-white my-12"></div>

            {/* Blog Articles Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
              {/* Main Article */}
              {latestPost && (
                <article className="space-y-6">
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                    <span>Latest</span>
                    <span>//</span>
                    <time>{latestPost.date}</time>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight leading-tight">
                    {latestPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {latestPost.content[0]}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {latestPost.content[1]}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={() => setCurrentView(ViewState.BLOG)}
                      className="text-xs font-bold uppercase tracking-widest border border-current px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                      Read More
                    </button>
                    {latestPost.externalLink && (
                      <a
                        href={latestPost.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold uppercase tracking-widest border border-current px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors inline-flex items-center gap-2"
                      >
                        Original <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </article>
              )}

              {/* Side Article */}
              {secondPost && (
                <article className="border-l-2 border-gray-200 dark:border-gray-800 pl-8 space-y-4">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    <time>{secondPost.date}</time>
                  </div>
                  <h3 className="text-xl font-sans font-bold uppercase tracking-tight">
                    {secondPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {secondPost.summary}
                  </p>
                  <button
                    onClick={() => setCurrentView(ViewState.BLOG)}
                    className="text-xs font-bold uppercase tracking-widest hover:underline"
                  >
                    Read &rarr;
                  </button>
                </article>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Back button for subpages */}
            <button
              onClick={() => setCurrentView(ViewState.HOME)}
              className="mb-8 text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
            >
              &larr; Back to Home
            </button>
            {renderContent()}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
