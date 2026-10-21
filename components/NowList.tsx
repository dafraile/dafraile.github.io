import React, { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { NOW_ITEMS } from '../data/nowItems';
import { NowItem, NowKind } from '../types';

const KIND_LABEL: Record<NowKind, string> = {
  paper: 'Paper',
  code: 'Code',
  project: 'Project',
};

const KIND_LINK_LABEL: Record<NowKind, string> = {
  paper: 'Read',
  code: 'Repo',
  project: 'Open',
};

export const formatNowDate = (isoDate: string): string => {
  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
};

export const NowItemLinks: React.FC<{ item: NowItem; compact?: boolean }> = ({ item, compact = false }) => {
  const primaryLabel = item.linkLabel ?? KIND_LINK_LABEL[item.kind];
  const sizeClass = compact ? 'text-[10px] px-2 py-1' : 'text-xs px-3 py-1';
  return (
    <div className="flex flex-wrap items-center gap-2">
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 font-bold uppercase tracking-widest border border-current hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors ${sizeClass}`}
        >
          {primaryLabel} <ArrowUpRight size={12} />
        </a>
      )}
      {item.github && item.github !== item.link && (
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 font-bold uppercase tracking-widest border border-current hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors ${sizeClass}`}
        >
          <Github size={12} /> GitHub
        </a>
      )}
    </div>
  );
};

export const NowKindBadge: React.FC<{ kind: NowKind }> = ({ kind }) => (
  <span className="px-2 py-0.5 border border-current text-[10px] font-mono font-bold uppercase tracking-widest">
    {KIND_LABEL[kind]}
  </span>
);

const FILTERS: Array<{ key: NowKind | 'all'; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'paper', label: 'Papers' },
  { key: 'code', label: 'Code' },
  { key: 'project', label: 'Projects' },
];

export const NowList: React.FC = () => {
  const [filter, setFilter] = useState<NowKind | 'all'>('all');
  const items = filter === 'all' ? NOW_ITEMS : NOW_ITEMS.filter((item) => item.kind === filter);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b-2 border-black dark:border-white pb-6">
        <h2 className="text-4xl font-sans font-bold uppercase tracking-tight">Now</h2>
        <p className="font-mono text-sm text-gray-500 mt-2 tracking-wide">
          &gt; What I'm working on: new papers, public repos and side projects, in brief.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3 py-1 text-xs font-mono uppercase tracking-widest border transition-colors ${
              filter === key
                ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                : 'border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {items.map((item) => (
          <article
            key={item.id}
            className="p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-black"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
              <NowKindBadge kind={item.kind} />
              <time>{formatNowDate(item.date)}</time>
            </div>
            <h3 className="text-2xl font-sans font-bold leading-tight mb-3">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-2 underline-offset-4"
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
            <div className="space-y-3 mb-5">
              {item.content.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-[10px] font-mono uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              <NowItemLinks item={item} />
            </div>
          </article>
        ))}
        {items.length === 0 && <p className="font-mono text-sm text-gray-500">Nothing here yet.</p>}
      </div>
    </div>
  );
};
