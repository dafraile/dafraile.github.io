import { BlogPost, Project, Publication } from './types';

export const SOCIAL_LINKS = {
  orcid: 'https://orcid.org/0000-0002-1108-7071',
  scholar: 'https://scholar.google.com/citations?user=7MIdOf0AAAAJ&hl=en',
  twitter: 'https://twitter.com/dafraile',
  github: 'https://github.com/dafraile',
  huggingface: 'https://huggingface.co/dafraile'
};

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Clinical competencies for using generative AI in patient care',
    authors: 'Lewis M, Fraile Navarro D, Blease C, Shah R, Riggare S, Delacroix S, Lehman R',
    journal: 'BMJ',
    year: 2025,
    link: 'https://www.bmj.com/',
    tags: ['Generative AI', 'Clinical Competencies', 'Patient Care']
  },
  {
    id: 'p2',
    title: 'Expert evaluation of large language models for clinical dialogue summarization',
    authors: 'Fraile Navarro D, Coiera E, Hambly TW, Triplett Z, Asif N, Susanto A, Chowdhury A, Azcoaga Lorenzo A, Dras M, Berkovsky S',
    journal: 'Scientific Reports',
    year: 2025,
    link: 'https://www.nature.com/articles/s41598-024-84850-x',
    tags: ['LLMs', 'Clinical NLP', 'Dialogue Summarization']
  },
  {
    id: 'p3',
    title: 'AI as an Ecosystem — Ensuring Generative AI Is Safe and Effective',
    authors: 'Coiera E, Fraile Navarro D',
    journal: 'NEJM AI',
    year: 2024,
    link: 'https://ai.nejm.org/doi/abs/10.1056/AIp2400611',
    tags: ['Generative AI', 'Safety', 'Healthcare Policy']
  },
  {
    id: 'p4',
    title: 'Clinical named entity recognition and relation extraction using natural language processing of medical free text: A systematic review',
    authors: 'Fraile Navarro D, et al.',
    journal: 'International Journal of Medical Informatics',
    year: 2023,
    link: 'https://pubmed.ncbi.nlm.nih.gov/37295138/',
    tags: ['NER', 'Relation Extraction', 'Systematic Review']
  },
  {
    id: 'p5',
    title: 'A Large Language Model to Detect Negated Expressions in Radiology Reports',
    authors: 'Fraile Navarro D, et al.',
    journal: 'Journal of Imaging Informatics in Medicine',
    year: 2024,
    link: 'https://link.springer.com/article/10.1007/s10278-024-01274-9',
    tags: ['Radiology', 'Negation Detection', 'LLM']
  },
  {
    id: 'p6',
    title: 'Ambient AI in primary care: an exploratory mixed methods survey of UK general practitioners',
    authors: 'Blease C, Kharko A, Sanchez CG, Fraile Navarro D, McMillan B, Gaab J, Locher C, Coiera E',
    journal: 'Research Square (Preprint)',
    year: 2025,
    link: 'https://www.researchsquare.com/',
    tags: ['Ambient AI', 'Primary Care', 'GPs']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'pr1',
    name: 'octOpus-bot',
    description: 'A customized fork of Claude Code CLI with persistent agent memory, Discord integration, and multi-session coordination. Built for autonomous AI research workflows.',
    techStack: ['TypeScript', 'Node.js', 'Claude API', 'Discord.js'],
    github: 'https://github.com/dafraile/octOpus-bot'
  },
  {
    id: 'pr2',
    name: 'Clinical-Dialogue-Summarization',
    description: 'Scripts and pipelines for fine-tuning transformer models (BART, T5) on medical dialogue summarization tasks. Includes data preprocessing and evaluation tools.',
    techStack: ['Python', 'PyTorch', 'Transformers', 'Shell'],
    github: 'https://github.com/dafraile/Clinical-Dialogue-Summarization'
  },
  {
    id: 'pr3',
    name: 'Clini-dialog-sum-BART',
    description: 'Fine-tuned BART model for clinical dialogue summarization. Trained to generate concise summaries of doctor-patient conversations for medical documentation.',
    techStack: ['PyTorch', 'Transformers', 'BART', 'NLP'],
    github: 'https://huggingface.co/dafraile/Clini-dialog-sum-BART'
  },
  {
    id: 'pr4',
    name: 'Clini-dialog-sum-T5',
    description: 'T5-based model optimized for summarizing clinical dialogues. Designed for healthcare settings where efficient documentation is critical.',
    techStack: ['PyTorch', 'Transformers', 'T5', 'NLP'],
    github: 'https://huggingface.co/dafraile/Clini-dialog-sum-T5'
  },
  {
    id: 'pr5',
    name: 'dafraile.github.io',
    description: 'Personal portfolio website built with React and Vite. Features a minimalist design with dark mode support and an AI chat assistant.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    github: 'https://github.com/dafraile/dafraile.github.io'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'From Clinician to Coder: My Journey into Health Informatics',
    date: '2025-02-09',
    summary: 'Reflections on bridging medicine and technology, and why clinical experience matters in AI development.',
    content: [
      "When I started medical school, I never imagined I'd spend my days training language models and reviewing pull requests. But here I am - a physician turned health informatician, convinced that the future of medicine lies at the intersection of clinical expertise and computational thinking.",
      "The path wasn't linear. It started with frustration - watching brilliant colleagues waste hours on documentation instead of patient care. That friction led me to Python, then to NLP, and eventually to a PhD exploring how machines might help shoulder the administrative burden.",
      "What I've learned is that the best health AI isn't built in isolation. It requires clinicians who code and developers who understand clinical workflows. We need more people crossing this bridge."
    ],
    tags: ['Career', 'Health Informatics']
  },
  {
    id: 'b2',
    title: 'Why LLMs for Clinical Summarization Are Harder Than They Look',
    date: '2025-01-15',
    summary: 'Lessons learned from evaluating language models on real clinical dialogues.',
    content: [
      "Everyone's excited about ChatGPT writing medical notes. But having spent months evaluating LLMs on clinical dialogue summarization, I can tell you the reality is more nuanced.",
      "The challenge isn't generating fluent text - modern LLMs do that remarkably well. The challenge is clinical accuracy. A model might produce a beautifully written summary that sounds authoritative but contains subtle errors that could affect patient care.",
      "In our recent study, we found that expert clinicians often disagreed with LLM-generated summaries on key clinical details. The models were confident, coherent, and sometimes wrong. This is exactly the failure mode we need to guard against.",
      "The path forward isn't abandoning LLMs - it's building better evaluation frameworks and keeping humans in the loop. The technology is promising, but we're not ready for fully autonomous clinical documentation yet."
    ],
    tags: ['LLMs', 'Clinical NLP', 'Research']
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for David Fraile Navarro's personal portfolio website.
David is a Postdoctoral Research Fellow in Generative AI at the Australian Institute of Health Innovation, Macquarie University.
He holds an MBBS and PhD, with expertise in clinical medicine, natural language processing, and health informatics.

Key facts about David:
- ORCID: 0000-0002-1108-7071
- Twitter: @dafraile
- GitHub: dafraile
- Hugging Face: dafraile (clinical dialogue summarization models)

Research focus areas:
- Large language models for healthcare applications
- Clinical dialogue summarization
- Named entity recognition in medical text
- Generative AI safety and effectiveness in medicine
- Primary care and health informatics

Notable publications:
- "AI as an Ecosystem — Ensuring Generative AI Is Safe and Effective" (NEJM AI, 2024)
- "Expert evaluation of large language models for clinical dialogue summarization" (Scientific Reports, 2025)
- "Clinical competencies for using generative AI in patient care" (BMJ, 2025)
- Systematic review on clinical NER and relation extraction

Be professional, concise, and helpful. If asked about specific papers, provide accurate information from the list above or suggest checking the Research tab.
`;
