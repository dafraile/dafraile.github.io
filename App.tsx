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

type RouteState = {
  view: ViewState;
  postId?: string;
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

const readRouteFromLocation = (): RouteState => {
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  if (!hash) {
    return { view: ViewState.HOME };
  }

  const [section, ...rest] = hash.split('/');
  const sectionName = section.toLowerCase();

  if (sectionName === 'journal' || sectionName === 'blog') {
    const postId = rest.length > 0 ? decodeURIComponent(rest.join('/')) : undefined;
    return { view: ViewState.BLOG, postId };
  }

  if (sectionName === 'research') {
    return { view: ViewState.RESEARCH };
  }

  if (sectionName === 'code' || sectionName === 'coding') {
    return { view: ViewState.CODING };
  }

  return { view: ViewState.HOME };
};

const routeToHash = (route: RouteState): string => {
  if (route.view === ViewState.HOME) {
    return '';
  }

  if (route.view === ViewState.RESEARCH) {
    return '#research';
  }

  if (route.view === ViewState.CODING) {
    return '#code';
  }

  if (route.view === ViewState.BLOG && route.postId) {
    return `#journal/${encodeURIComponent(route.postId)}`;
  }

  return '#journal';
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [route, setRoute] = useState<RouteState>(() => readRouteFromLocation());

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

  useEffect(() => {
    const syncFromUrl = () => {
      setRoute(readRouteFromLocation());
    };

    window.addEventListener('popstate', syncFromUrl);
    window.addEventListener('hashchange', syncFromUrl);

    return () => {
      window.removeEventListener('popstate', syncFromUrl);
      window.removeEventListener('hashchange', syncFromUrl);
    };
  }, []);

  const navigate = (nextRoute: RouteState) => {
    const hash = routeToHash(nextRoute);
    const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
    window.history.pushState(null, '', nextUrl);
    setRoute(nextRoute);
  };

  const featuredPost = BLOG_POSTS[0] ?? null;
  const recentPosts = BLOG_POSTS.slice(1, 7);

  const renderContent = () => {
    switch (route.view) {
      case ViewState.RESEARCH:
        return <PublicationList />;
      case ViewState.BLOG:
        return (
          <BlogList
            selectedPostId={route.postId ?? null}
            onSelectPost={(postId) => navigate({ view: ViewState.BLOG, postId })}
            onBackToList={() => navigate({ view: ViewState.BLOG })}
          />
        );
      case ViewState.CODING:
        return <ProjectList />;
      default:
        return null;
    }
  };

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
        {route.view === ViewState.HOME ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 mb-16">
              <div className="space-y-8">
                <div className="border-b-2 border-black dark:border-white pb-8">
                  <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 tracking-tighter uppercase leading-none">
                    David
                    <br />
                    Fraile
                    <br />
                    Navarro
                  </h1>
                  <div className="flex items-center gap-2 font-mono text-lg text-gray-600 dark:text-gray-400 mb-3">
                    <span className="text-black dark:text-white font-bold">&gt;</span>
                    <p>Physician. Researcher. Builder.</p>
                  </div>
                  <p className="font-mono text-sm text-gray-500">
                    Postdoctoral Research Fellow in Generative AI at Macquarie University. MBBS, PhD.
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={SOCIAL_LINKS.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    <span>Scholar</span>
                  </a>
                  <a
                    href={SOCIAL_LINKS.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    <div className="w-4 h-4 flex items-center justify-center font-bold text-[8px] border border-current">iD</div>
                    <span>ORCID</span>
                  </a>
                  <a
                    href={SOCIAL_LINKS.huggingface}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    <Terminal size={16} />
                    <span>HuggingFace</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-6 md:p-8 border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900/30 w-full">
                  <p className="mb-4 text-sm">
                    <span className="text-blue-600 dark:text-blue-400">function</span>{' '}
                    <span className="text-yellow-600 dark:text-yellow-400">aboutMe</span>() {'{'}
                  </p>
                  <p className="pl-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    return "I'm a doctor who codes. I research how large language models and generative AI can transform
                    clinical practice, from documentation to decision-making. My work spans NLP for medical text,
                    clinical dialogue summarization, and the ethics of AI in healthcare. I also helped build Australia's
                    COVID-19 living guidelines.";
                  </p>
                  <p className="mt-4 text-sm">{'}'}</p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-black dark:border-white my-12" />

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
              <div className="space-y-10">
                {featuredPost && (
                  <article className="space-y-6">
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                      <span>Latest</span>
                      <span>//</span>
                      <time>{formatDate(featuredPost.date)}</time>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight leading-tight">{featuredPost.title}</h2>
                    {featuredPost.content.slice(0, 2).map((paragraph, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        onClick={() => navigate({ view: ViewState.BLOG, postId: featuredPost.id })}
                        className="text-xs font-bold uppercase tracking-widest border border-current px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        Read Entry
                      </button>
                      <button
                        onClick={() => navigate({ view: ViewState.BLOG })}
                        className="text-xs font-bold uppercase tracking-widest border border-current px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        Journal Index
                      </button>
                      {featuredPost.externalLink && (
                        <a
                          href={featuredPost.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-current px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                        >
                          Original <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </article>
                )}
              </div>

              <aside className="space-y-6">
                <div className="border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4">Browse</h3>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => navigate({ view: ViewState.BLOG })}
                      className="inline-flex items-center justify-between gap-2 px-3 py-2 text-xs uppercase tracking-widest border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">
                        <BookOpen size={14} /> Journal
                      </span>
                      <span>&rarr;</span>
                    </button>
                    <button
                      onClick={() => navigate({ view: ViewState.RESEARCH })}
                      className="inline-flex items-center justify-between gap-2 px-3 py-2 text-xs uppercase tracking-widest border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">
                        <FlaskConical size={14} /> Research
                      </span>
                      <span>&rarr;</span>
                    </button>
                    <button
                      onClick={() => navigate({ view: ViewState.CODING })}
                      className="inline-flex items-center justify-between gap-2 px-3 py-2 text-xs uppercase tracking-widest border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Code2 size={14} /> Code
                      </span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4">Recent Entries</h3>
                  <div className="space-y-4">
                    {BLOG_POSTS.slice(0, 4).map((post) => (
                      <button
                        key={post.id}
                        onClick={() => navigate({ view: ViewState.BLOG, postId: post.id })}
                        className="block w-full text-left hover:opacity-70 transition-opacity"
                      >
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{formatDate(post.date)}</p>
                        <p className="text-sm leading-snug">{post.title}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate({ view: ViewState.HOME })}
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
