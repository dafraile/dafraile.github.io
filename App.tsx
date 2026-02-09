import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  BookOpen, 
  Code, 
  FileText, 
  User, 
  Menu,
  X,
  Terminal
} from 'lucide-react';
import { ProfileSection } from './components/ProfileSection';
import { PublicationList } from './components/PublicationList';
import { BlogList } from './components/BlogList';
import { ProjectList } from './components/ProjectList';
import { ViewState } from './types';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  // Default to BLOG (Journal) view as requested
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.BLOG);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize theme based on preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to html element
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
      case ViewState.HOME:
        return <ProfileSection />;
      case ViewState.RESEARCH:
        return <PublicationList />;
      case ViewState.BLOG:
        return <BlogList />;
      case ViewState.CODING:
        return <ProjectList />;
      default:
        return <BlogList />;
    }
  };

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState; icon: any; label: string }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        setIsMobileMenuOpen(false);
      }}
      className={`group flex items-center gap-3 px-4 py-3 w-full text-left transition-all duration-200 border-l-4 font-mono uppercase tracking-widest text-xs ${
        currentView === view
          ? 'border-black dark:border-white bg-gray-100 dark:bg-gray-900 font-bold pl-6'
          : 'border-transparent text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:pl-6 hover:border-gray-300 dark:hover:border-gray-700'
      }`}
    >
      <Icon size={16} className={currentView === view ? "stroke-[2.5]" : "stroke-[1.5]"} />
      <span>{label}</span>
      {currentView === view && (
        <span className="ml-auto opacity-0 group-hover:opacity-100 animate-pulse text-[10px]">&lt;ACTIVE&gt;</span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-mono bg-white dark:bg-black text-black dark:text-white">
      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-black border-r-2 border-black dark:border-white transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="p-8 flex flex-col h-full justify-between relative">
          {/* Decorative corner markers */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black dark:border-white"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black dark:border-white"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black dark:border-white"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black dark:border-white"></div>

          <div>
            <div className="mb-12 pt-4">
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={24} className="animate-pulse" />
                <h1 className="text-2xl font-sans font-bold tracking-tighter uppercase">DFN_SYS.v1</h1>
              </div>
              <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase border-t border-gray-200 dark:border-gray-800 pt-2">
                David Fraile Navarro
                <br/>
                <span className="text-gray-400">Status: Online</span>
              </p>
            </div>

            <nav className="space-y-1">
              <NavItem view={ViewState.BLOG} icon={FileText} label="01_JOURNAL" />
              <NavItem view={ViewState.HOME} icon={User} label="02_PROFILE" />
              <NavItem view={ViewState.RESEARCH} icon={BookOpen} label="03_RESEARCH" />
              <NavItem view={ViewState.CODING} icon={Code} label="04_CODING" />
            </nav>
          </div>

          <div className="pt-8 border-t-2 border-gray-100 dark:border-gray-900">
             <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between px-4 py-3 text-xs uppercase tracking-widest border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              <div className="flex items-center gap-2">
                {darkMode ? <Sun size={14} /> : <Moon size={14} />}
                <span>{darkMode ? 'Light' : 'Dark'}</span>
              </div>
              <span>[TOGGLE]</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-40 bg-white dark:bg-black border-b-2 border-black dark:border-white px-6 py-4 flex justify-between items-center">
        <span className="font-sans font-bold tracking-tighter uppercase">DFN_SYS.v1</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen pt-20 md:pt-0 p-6 md:p-12 lg:p-20 max-w-6xl mx-auto w-full">
        {renderContent()}
      </main>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;