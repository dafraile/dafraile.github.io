import { BlogPost, Project, Publication } from './types';

export const SOCIAL_LINKS = {
  orcid: 'https://orcid.org/0000-0002-1108-7071',
  scholar: 'https://scholar.google.com/citations?user=7MIdOf0AAAAJ&hl=en',
  twitter: 'https://twitter.com/dafraile',
  github: 'https://github.com/dafraile',
  huggingface: 'https://huggingface.co/dafraile'
};

export const PUBLICATIONS: Publication[] = [
  // 2026
  {
    id: 'p1',
    title: 'AI Scribes: Are We Measuring What Matters?',
    authors: 'Coiera E, Fraile-Navarro D',
    journal: 'JMIR Medical Informatics',
    year: 2026,
    link: 'http://dx.doi.org/10.2196/89337',
    tags: ['AI Scribes', 'Evaluation', 'Clinical Documentation']
  },
  {
    id: 'p2',
    title: 'The human element in the age of AI: balancing technology and meaning in medicine',
    authors: 'Lewis M, Delacroix S, Fraile Navarro D, Lehman R',
    journal: 'Book Chapter - Finding meaning in healthcare (Routledge)',
    year: 2026,
    link: 'https://doi.org/10.4324/9781003517665-8',
    tags: ['AI Ethics', 'Philosophy', 'Healthcare']
  },
  // 2025
  {
    id: 'p3',
    title: 'Clinical competencies for using generative AI in patient care',
    authors: 'Lewis M, Fraile Navarro D, Blease C, Shah R, Riggare S, Delacroix S, Lehman R',
    journal: 'BMJ',
    year: 2025,
    link: 'https://doi.org/10.1136/bmj-2025-085324',
    tags: ['Generative AI', 'Clinical Competencies', 'Education']
  },
  {
    id: 'p4',
    title: 'Generative AI and the changing dynamics of clinical consultations',
    authors: 'Fraile Navarro D, Lewis M, Blease C, Shah R, Riggare S, Delacroix S, Lehman R',
    journal: 'BMJ',
    year: 2025,
    link: 'https://doi.org/10.1136/bmj-2025-085325',
    tags: ['Generative AI', 'Triadic Care', 'Clinical Practice']
  },
  {
    id: 'p5',
    title: 'How generative AI affects patient agency',
    authors: 'Blease C, Lewis M, Riggare S, Fraile Navarro D, Lehman R',
    journal: 'BMJ',
    year: 2025,
    link: 'https://doi.org/10.1136/bmj-2025-085323',
    tags: ['Patient Agency', 'Generative AI', 'Ethics']
  },
  {
    id: 'p6',
    title: 'Expert evaluation of large language models for clinical dialogue summarization',
    authors: 'Fraile Navarro D, Coiera E, Hambly TW, Triplett Z, Asif N, Susanto A, Chowdhury A, Azcoaga Lorenzo A, Dras M, Berkovsky S',
    journal: 'Scientific Reports',
    year: 2025,
    link: 'https://www.nature.com/articles/s41598-024-84850-x',
    tags: ['LLMs', 'Clinical NLP', 'Dialogue Summarization']
  },
  {
    id: 'p7',
    title: 'Understanding clinician perceptions of GenAI: a mixed methods analysis of clinical documentation tasks',
    authors: 'Fraile Navarro D, Kocaballi AB, Berkovsky S',
    journal: 'Journal of Medical Systems',
    year: 2025,
    link: 'https://doi.org/10.1007/s10916-025-02234-8',
    tags: ['GenAI', 'EHR', 'User Experience']
  },
  {
    id: 'p8',
    title: 'Ambient AI in Primary Care: An Exploratory Mixed Methods Survey of UK General Practitioners',
    authors: 'Blease C, Kharko A, Sanchez CG, Fraile Navarro D, McMillan B, Gaab J, Locher C, Coiera E',
    journal: 'Research Square (Preprint)',
    year: 2025,
    link: 'https://doi.org/10.21203/rs.3.rs-7856419/v1',
    tags: ['Ambient AI', 'Primary Care', 'GPs']
  },
  {
    id: 'p9',
    title: 'Exploring the use and usefulness of living guidelines for consumers: international online survey',
    authors: 'Synnot A, Chakraborty S, Xue J, Cheng HZ, Berkovic D, Turner T, Fraile Navarro D, et al.',
    journal: 'Journal of Clinical Epidemiology',
    year: 2025,
    link: 'https://doi.org/10.1016/j.jclinepi.2025.111671',
    tags: ['Living Guidelines', 'Consumers', 'Knowledge Translation']
  },
  // 2024
  {
    id: 'p10',
    title: 'AI as an Ecosystem — Ensuring Generative AI Is Safe and Effective',
    authors: 'Coiera E, Fraile-Navarro D',
    journal: 'NEJM AI',
    year: 2024,
    link: 'https://ai.nejm.org/doi/abs/10.1056/AIp2400611',
    tags: ['Generative AI', 'Safety', 'Healthcare Policy']
  },
  {
    id: 'p11',
    title: 'Proactively designing generative artificial intelligence for primary care',
    authors: 'Fraile-Navarro D, Lehman R',
    journal: 'JAMA Internal Medicine',
    year: 2024,
    link: 'https://doi.org/10.1001/jamainternmed.2024.2584',
    tags: ['Primary Care', 'Generative AI', 'Design']
  },
  {
    id: 'p12',
    title: 'Reporting conflicts of interest and funding in health care guidelines: the RIGHT-COI&F checklist',
    authors: 'Xun Y, Estill J, Khabsa J, ... Fraile Navarro D, et al.',
    journal: 'Annals of Internal Medicine',
    year: 2024,
    link: 'https://doi.org/10.7326/M23-3274',
    tags: ['Guidelines', 'Conflicts of Interest', 'Transparency']
  },
  {
    id: 'p13',
    title: 'Living methods for living guidelines: Changes to evidence synthesis methods in the Australian National Clinical Evidence Taskforce COVID-19 living guidelines',
    authors: 'White H, Turner T, Beecher C, Poole A, McDonald S, Hewitt J, Chakraborty S, Fraile-Navarro D, et al.',
    journal: 'Clinical and Public Health Guidelines',
    year: 2024,
    link: 'https://doi.org/10.1002/gin2.12017',
    tags: ['Living Guidelines', 'COVID-19', 'Evidence Synthesis']
  },
  // 2023
  {
    id: 'p14',
    title: 'Clinical named entity recognition and relation extraction using natural language processing of medical free text: a systematic review',
    authors: 'Fraile Navarro D, Ijaz K, Rezazadegan D, Rahimi-Ardabili H, Dras M, Coiera E, Berkovsky S',
    journal: 'International Journal of Medical Informatics',
    year: 2023,
    link: 'https://doi.org/10.1016/j.ijmedinf.2023.105122',
    tags: ['NER', 'Relation Extraction', 'Systematic Review']
  },
  {
    id: 'p15',
    title: 'Using Evidence to Decision frameworks led to guidelines of better quality and more credible and transparent recommendations',
    authors: 'Meneses-Echavez JF, Bidonde J, Montesinos-Guevara C, ... Fraile Navarro D, et al.',
    journal: 'Journal of Clinical Epidemiology',
    year: 2023,
    link: 'https://doi.org/10.1016/j.jclinepi.2023.07.013',
    tags: ['Guidelines', 'Evidence-to-Decision', 'Quality']
  },
  {
    id: 'p16',
    title: 'Collaboration, not Confrontation: Understanding General Practitioners\' Attitudes Towards Natural Language and Text Automation in Clinical Practice',
    authors: 'Fraile Navarro D, Kocaballi AB, Dras M, Berkovsky S',
    journal: 'ACM Transactions on Computer-Human Interaction',
    year: 2023,
    link: 'https://doi.org/10.1145/3569893',
    tags: ['NLP', 'GPs', 'Human-Computer Interaction']
  },
  {
    id: 'p17',
    title: 'Methods for living guidelines: early guidance based on practical experience (Paper 1-5 series)',
    authors: 'Cheyne S, Fraile Navarro D, Hill K, McDonald S, Turner T, et al.',
    journal: 'Journal of Clinical Epidemiology',
    year: 2023,
    link: 'https://doi.org/10.1016/j.jclinepi.2022.12.024',
    tags: ['Living Guidelines', 'Methods', 'GRADE']
  },
  // 2022
  {
    id: 'p18',
    title: 'Few-shot fine-tuning SOTA summarization models for medical dialogues',
    authors: 'Fraile Navarro D, Dras M, Berkovsky S',
    journal: 'NAACL 2022 (Student Research Workshop)',
    year: 2022,
    link: 'https://doi.org/10.18653/v1/2022.naacl-srw.32',
    tags: ['Few-shot Learning', 'Summarization', 'NLP']
  },
  {
    id: 'p19',
    title: 'Clinical care of children and adolescents with COVID-19: recommendations from the National COVID-19 Clinical Evidence Taskforce',
    authors: 'Fraile Navarro D, McMullan B, Bowen AC, et al.',
    journal: 'Medical Journal of Australia',
    year: 2022,
    link: 'https://doi.org/10.5694/mja2.51510',
    tags: ['COVID-19', 'Pediatrics', 'Guidelines']
  },
  {
    id: 'p20',
    title: 'Development of an algorithm to classify primary care electronic health records of alcohol consumption',
    authors: 'Fraile-Navarro D, Azcoaga-Lorenzo A, Agrawal U, Jani B, Fagbamigbe A, Currie D, Baldacchino A, Sullivan F',
    journal: 'BMJ Open',
    year: 2022,
    link: 'https://doi.org/10.1136/bmjopen-2021-054376',
    tags: ['EHR', 'Alcohol', 'Machine Learning']
  },
  // 2021
  {
    id: 'p21',
    title: 'Clinical care of children and adolescents with COVID-19: recommendations from the National COVID-19 Clinical Evidence Taskforce',
    authors: 'Fraile Navarro D, Tendal B, Tingay D, et al.',
    journal: 'Medical Journal of Australia',
    year: 2021,
    link: 'https://doi.org/10.5694/mja2.51305',
    tags: ['COVID-19', 'Pediatrics', 'Living Guidelines']
  },
  {
    id: 'p22',
    title: 'Vitamin D recommendations in clinical guidelines: A systematic review, quality evaluation and analysis of potential predictors',
    authors: 'Fraile Navarro D, López García-Franco A, Niño de Guzmán E, et al.',
    journal: 'International Journal of Clinical Practice',
    year: 2021,
    link: 'https://doi.org/10.1111/ijcp.14805',
    tags: ['Vitamin D', 'Guidelines', 'Quality Assessment']
  },
  {
    id: 'p23',
    title: 'Detecting pertussis in the pediatric population using respiratory sound events and CNN',
    authors: 'Sharan RV, Berkovsky S, Fraile Navarro D, Xiong H, Jaffe A',
    journal: 'Biomedical Signal Processing and Control',
    year: 2021,
    link: 'https://doi.org/10.1016/j.bspc.2021.102722',
    tags: ['Deep Learning', 'Pertussis', 'Audio Analysis']
  },
  {
    id: 'p24',
    title: 'The trade-off between impartiality and freedom in the 21st Century Cures Act',
    authors: 'Fraile Navarro D, Tempini N, Teira D',
    journal: 'Philosophy of Medicine',
    year: 2021,
    link: 'https://doi.org/10.5195/philmed.2021.24',
    tags: ['Philosophy', 'Regulation', 'Ethics']
  },
  {
    id: 'p25',
    title: 'Weekly updates of national living evidence-based guidelines: methods for the Australian living guidelines for care of people with COVID-19',
    authors: 'Tendal B, Vogel JP, McDonald S, ... Fraile Navarro D, et al.',
    journal: 'Journal of Clinical Epidemiology',
    year: 2021,
    link: 'https://doi.org/10.1016/j.jclinepi.2020.11.005',
    tags: ['COVID-19', 'Living Guidelines', 'Methods']
  },
  // 2020
  {
    id: 'p26',
    title: 'Clinical care of pregnant and postpartum women with COVID-19: Living recommendations from the National COVID-19 Clinical Evidence Taskforce',
    authors: 'Vogel JP, Tendal B, Giles M, ... Fraile Navarro D, et al.',
    journal: 'Australian and New Zealand Journal of Obstetrics and Gynaecology',
    year: 2020,
    link: 'https://doi.org/10.1111/ajo.13270',
    tags: ['COVID-19', 'Pregnancy', 'Guidelines']
  },
  {
    id: 'p27',
    title: 'Impact of viral epidemic outbreaks on mental health of healthcare workers: a rapid systematic review and meta-analysis',
    authors: 'Serrano-Ripoll MJ, Meneses-Echavez JF, Ricci-Cabello I, Fraile-Navarro D, et al.',
    journal: 'Journal of Affective Disorders',
    year: 2020,
    link: 'https://doi.org/10.1016/j.jad.2020.08.034',
    tags: ['Mental Health', 'Healthcare Workers', 'Systematic Review']
  },
  {
    id: 'p28',
    title: 'Point-of-care tests for urinary tract infections: protocol for a systematic review and meta-analysis of diagnostic test accuracy',
    authors: 'Fraile Navarro D, Sullivan F, Azcoaga-Lorenzo A, Hernandez Santiago V',
    journal: 'BMJ Open',
    year: 2020,
    link: 'https://doi.org/10.1136/bmjopen-2019-033424',
    tags: ['UTI', 'Point-of-Care', 'Diagnostics']
  },
  // 2018-2016
  {
    id: 'p29',
    title: 'Sobrediagnóstico en la salud de la mujer: el caso de la osteoporosis',
    authors: 'Cardona Corrochano E, Pereira Iglesias A, Fraile Navarro D, López García Franco A',
    journal: 'Atención Primaria',
    year: 2018,
    link: 'https://doi.org/10.1016/j.aprim.2018.07.008',
    tags: ['Overdiagnosis', 'Osteoporosis', 'Women\'s Health']
  },
  {
    id: 'p30',
    title: 'Health checks in general practice: evidence first, not last',
    authors: 'López-García-Franco A, Pardo-Hernández H, Fraile-Navarro D, Alonso-Coello P',
    journal: 'Polskie Archiwum Medycyny Wewnętrznej',
    year: 2016,
    link: 'https://doi.org/10.20452/pamw.3303',
    tags: ['Health Checks', 'Primary Care', 'Prevention']
  },
  {
    id: 'p31',
    title: 'Dispensación de medicamentos sin prescripción médica en oficinas de farmacia',
    authors: 'Simó S, Fraile D, Sánchez A, García-Algar O',
    journal: 'Anales de Pediatría',
    year: 2013,
    link: 'https://doi.org/10.1016/j.anpedi.2012.10.015',
    tags: ['Pharmacy', 'Prescription', 'Pediatrics']
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
- Living guidelines and evidence synthesis
- Primary care and health informatics

Notable publications (30+ peer-reviewed):
- "AI Scribes: Are We Measuring What Matters?" (JMIR Medical Informatics, 2026)
- "AI as an Ecosystem — Ensuring Generative AI Is Safe and Effective" (NEJM AI, 2024)
- "Expert evaluation of large language models for clinical dialogue summarization" (Scientific Reports, 2025)
- "Clinical competencies for using generative AI in patient care" (BMJ, 2025)
- "Generative AI and the changing dynamics of clinical consultations" (BMJ, 2025)
- Systematic review on clinical NER and relation extraction (Int J Med Inform, 2023)
- Multiple papers on COVID-19 living guidelines (MJA, JCE)

Be professional, concise, and helpful. If asked about specific papers, provide accurate information from the list above or suggest checking the Research tab.
`;
