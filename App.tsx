import React, { useEffect, useState } from 'react';
import {
  Sun,
  Moon,
  Twitter,
  Github,
  ExternalLink,
  Terminal,
  Linkedin,
  BookOpen,
  FlaskConical,
  Code2,
} from 'lucide-react';
import { PublicationList } from './components/PublicationList';
import { BlogList } from './components/BlogList';
import { ProjectList } from './components/ProjectList';
import { BLOG_POSTS } from './data/blogPosts';
import { SOCIAL_LINKS } from './constants';
import { ViewState } from './types';

const formatDate = (isoDate: string): string => {
  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

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

  const featuredPost = BLOG_POSTS[0] ?? null;
  const recentPosts = BLOG_POSTS.slice(1, 7);

  return (
    <div className="min-h-screen font-mono bg-white dark:bg-black text-black dark:text-white">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {currentView === ViewState.HOME ? (
          <>
            <header className="mb-14 border-b-2 border-black dark:border-white pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-end">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Journal-first portfolio</p>
                  <h1 className="text-5xl md:text-6xl font-sans font-bold tracking-tight leading-none">
                    David Fraile Navarro
                  </h1>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                    Physician and generative AI researcher. Notes from current projects, clinical AI work, and technical
                    experiments.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <button
                    onClick={() => setCurrentView(ViewState.BLOG)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    <BookOpen size={14} /> Journal
                  </button>
                  <button
                    onClick={() => setCurrentView(ViewState.RESEARCH)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    <FlaskConical size={14} /> Research
                  </button>
                  <button
                    onClick={() => setCurrentView(ViewState.CODING)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    <Code2 size={14} /> Code
                  </button>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_0.9fr] gap-12">
              <main className="space-y-12">
                {featuredPost && (
                  <article className="space-y-5 pb-10 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-500">
                      <span className="font-semibold text-black dark:text-white">Latest Entry</span>
                      <span>•</span>
                      <time>{formatDate(featuredPost.date)}</time>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold leading-tight tracking-tight">
                      {featuredPost.title}
                    </h2>
                    {featuredPost.content.slice(0, 2).map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                        {paragraph}
                      </p>
                    ))}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={() => setCurrentView(ViewState.BLOG)}
                        className="px-4 py-2 text-xs uppercase tracking-widest border border-current hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        Open Journal
                      </button>
                      {featuredPost.externalLink && (
                        <a
                          href={featuredPost.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest border border-current hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                        >
                          Original Post <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </article>
                )}

                <section className="space-y-2">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-2xl font-sans font-bold tracking-tight">Recent Entries</h3>
                    <button
                      onClick={() => setCurrentView(ViewState.BLOG)}
                      className="text-xs uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                      View all
                    </button>
                  </div>

                  <div className="divide-y divide-gray-200 dark:divide-gray-800 border-y border-gray-200 dark:border-gray-800">
                    {recentPosts.map((post) => (
                      <article key={post.id} className="py-5 group">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">
                          <div className="space-y-2">
                            <h4 className="text-xl font-sans font-semibold leading-tight group-hover:opacity-80 transition-opacity">
                              {post.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">{post.summary}</p>
                          </div>
                          <time className="text-xs uppercase tracking-widest text-gray-500 shrink-0 pt-1">
                            {formatDate(post.date)}
                          </time>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </main>

              <aside className="space-y-8">
                <section className="border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="text-xl font-sans font-bold mb-4">About</h3>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Postdoctoral Research Fellow in Generative AI at Macquarie University (MBBS, PhD). I work on
                    practical and safe uses of LLMs in clinical settings.
                  </p>
                </section>

                <section className="border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="text-xl font-sans font-bold mb-4">Connect</h3>
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <a
                      href={SOCIAL_LINKS.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      <Twitter size={16} /> Twitter
                    </a>
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      <Linkedin size={16} /> LinkedIn
                    </a>
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a
                      href={SOCIAL_LINKS.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      <ExternalLink size={16} /> Scholar
                    </a>
                    <a
                      href={SOCIAL_LINKS.huggingface}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      <Terminal size={16} /> HuggingFace
                    </a>
                  </div>
                </section>

                <section className="border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900/20">
                  <h3 className="text-xl font-sans font-bold mb-4">At a Glance</h3>
                  <ul className="space-y-2 text-sm">
                    <li>{BLOG_POSTS.length} journal posts</li>
                    <li>30+ peer-reviewed publications</li>
                    <li>Open-source and clinical NLP projects</li>
                  </ul>
                </section>
              </aside>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setCurrentView(ViewState.HOME)}
              className="mb-8 text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors"
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
