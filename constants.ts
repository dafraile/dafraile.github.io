import { Project, Publication } from './types';

export const SOCIAL_LINKS = {
  orcid: 'https://orcid.org/0000-0002-1108-7071',
  scholar: 'https://scholar.google.com/citations?user=7MIdOf0AAAAJ&hl=en',
  twitter: 'https://twitter.com/dafraile',
  github: 'https://github.com/dafraile',
  huggingface: 'https://huggingface.co/dafraile',
  linkedin: 'https://www.linkedin.com/in/david-fraile-navarro-660344b7/'
};

export const PUBLICATIONS: Publication[] = [
  // 2026
  {
    id: 'p0a',
    title: 'The Persona Is Still There, but Who Is Speaking? Latent Identity Reversion in Persistent AI Agents',
    authors: 'Fraile Navarro D',
    journal: 'arXiv preprint',
    year: 2026,
    link: 'https://arxiv.org/abs/2610.01490',
    tags: ['AI Agents', 'Identity', 'Persona']
  },
  {
    id: 'p0b',
    title: 'Where Do Apparent LLM Clinical Triage Failures Arise? Localizing the Multiple-Choice Format Effect',
    authors: 'Fraile Navarro D, Como B, Sheng J, Ananthan S, Berkovsky S',
    journal: 'Findings of EMNLP 2026',
    year: 2026,
    link: 'https://arxiv.org/abs/2605.29889',
    tags: ['Interpretability', 'SAE', 'Triage']
  },
  {
    id: 'p0c',
    title: 'Evaluation format, not only model capability, shapes measured triage failure in consumer health AI',
    authors: 'Fraile Navarro D, Sheng J, Magrabi F, Coiera E',
    journal: 'NeurIPS 2026 Workshop on GenAI for Health (research track)',
    year: 2026,
    link: 'https://arxiv.org/abs/2603.11413',
    tags: ['Evaluation', 'Triage', 'Consumer Health AI']
  },
  {
    id: 'p0d',
    title: 'Exploring GLP-1 Drug Safety from Multiple Angles: A Toolkit for Evidence Review and Pharmacovigilance',
    authors: 'Fraile Navarro D',
    journal: 'NeurIPS 2026 Workshop on GenAI for Health (demonstration track)',
    year: 2026,
    link: 'https://openreview.net/forum?id=KSRPJtQfmM',
    tags: ['Pharmacovigilance', 'Evidence Synthesis', 'GLP-1']
  },
  {
    id: 'p0e',
    title: 'Conversational AI for Automated Patient Questionnaire Completion: Development Insights and Design Principles',
    authors: 'Fraile Navarro D, Peleg M',
    journal: 'arXiv preprint (AMIA 2026 poster)',
    year: 2026,
    link: 'https://arxiv.org/abs/2602.19507',
    tags: ['Conversational AI', 'Questionnaires']
  },
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
  // Research code (newest first)
  {
    id: 'rc1',
    name: 'swarm_friction',
    description: 'Procedural friction as a containment mechanism for agent swarms (preliminary work, hackathon submission).',
    techStack: ['Python', 'Multi-agent'],
    group: 'Research code',
    github: 'https://github.com/dafraile/swarm_friction'
  },
  {
    id: 'rc2',
    name: 'clinical_doom_loop',
    description: 'Shared preregistration and cross-replication protocol for clinical doom-loop experiments.',
    techStack: ['Python', 'Preregistration'],
    group: 'Research code',
    github: 'https://github.com/dafraile/clinical_doom_loop'
  },
  {
    id: 'rc3',
    name: 'nature_triage_expanded_replication',
    description: 'Expanded replication analyses for AI triage benchmarking; code for the NeurIPS 2026 GenAI4Health paper on evaluation format.',
    techStack: ['Python', 'Shell', 'Evaluation'],
    group: 'Research code',
    github: 'https://github.com/dafraile/nature_triage_expanded_replication'
  },
  {
    id: 'rc4',
    name: 'identity-as-a-launch-flag',
    description: 'Assistant persona survival is determined by system-prompt injection lifecycle, not conversational history; code for the latent identity reversion preprint.',
    techStack: ['Python', 'AI Agents'],
    group: 'Research code',
    github: 'https://github.com/dafraile/identity-as-a-launch-flag'
  },
  {
    id: 'rc5',
    name: 'glp1-neuropsych-safety',
    description: 'Triangulating the GLP-1 receptor agonist neuropsychiatric safety signal across designed studies, FAERS reports and mechanistic evidence.',
    techStack: ['Python', 'Evidence Synthesis', 'FAERS'],
    group: 'Research code',
    github: 'https://github.com/dafraile/glp1-neuropsych-safety'
  },
  {
    id: 'rc6',
    name: 'SAE_mad',
    description: 'SAE-guided capability routing: exploring whether sparse autoencoder features can serve as routing signals for selective computation in LLMs; code for the EMNLP 2026 Findings paper.',
    techStack: ['Python', 'SAE', 'Interpretability'],
    group: 'Research code',
    github: 'https://github.com/dafraile/SAE_mad'
  },
  {
    id: 'rc7',
    name: 'MIRAGE',
    description: 'MIRAGE: the illusion of visual understanding in vision-language models. See the journal entry on rechecking the birds slice.',
    techStack: ['Python', 'VLMs', 'Evaluation'],
    group: 'Research code',
    github: 'https://github.com/dafraile/MIRAGE',
    link: '#journal/2026-03-30-a-quick-recheck-of-mirage-on-birds'
  },
  {
    id: 'rc8',
    name: 'Clini-dialog-sum BART/T5 on Hugging Face',
    description: 'Fine-tuned BART and T5 models for clinical dialogue summarization, from the Scientific Reports evaluation study.',
    techStack: ['PyTorch', 'Transformers', 'NLP'],
    group: 'Research code',
    github: 'https://huggingface.co/dafraile'
  },

  // Tools
  {
    id: 't1',
    name: 'quorum',
    description: 'Quorum clinical AI hackathon demo: a multi-agent clinical deliberation prototype (Cosmos Institute grant, 2026).',
    techStack: ['TypeScript', 'HTML', 'Multi-agent'],
    group: 'Tools',
    github: 'https://github.com/dafraile/quorum',
    link: 'https://dafraile.com/quorum-demo/'
  },
  {
    id: 't2',
    name: 'turboquant-mlx',
    description: 'TurboQuant KV cache compression for MLX with fused Metal kernels: 4.6x compression at 98% FP16 speed.',
    techStack: ['Python', 'MLX', 'Metal'],
    group: 'Tools',
    github: 'https://github.com/dafraile/turboquant-mlx'
  },
  {
    id: 't3',
    name: 'claude-gpu-skill',
    description: 'Claude Code slash command for managing vast.ai GPU instances: /gpu launch, /gpu ssh, /gpu destroy.',
    techStack: ['Python', 'Shell', 'Claude Code'],
    group: 'Tools',
    github: 'https://github.com/dafraile/claude-gpu-skill'
  },
  {
    id: 't4',
    name: 'omnichatty',
    description: 'Broadcast one prompt to multiple LLM web UIs (ChatGPT, Claude, Gemini, Grok, OpenWebUI) via a local Node server and CDP.',
    techStack: ['JavaScript', 'Node.js', 'CDP'],
    group: 'Tools',
    github: 'https://github.com/dafraile/omnichatty'
  },
  {
    id: 't5',
    name: 'overleaf-comment-exporter-chrome',
    description: 'Chrome Manifest V3 port of Overleaf Comment Exporter.',
    techStack: ['TypeScript', 'JavaScript', 'Chrome Extension'],
    group: 'Tools',
    github: 'https://github.com/dafraile/overleaf-comment-exporter-chrome'
  },
  {
    id: 't6',
    name: 'claude-chat-exporter',
    description: 'A simple JavaScript tool to export Claude.ai conversations to Markdown.',
    techStack: ['JavaScript'],
    group: 'Tools',
    github: 'https://github.com/dafraile/claude-chat-exporter'
  },
  {
    id: 't7',
    name: 'FIPer',
    description: 'Sync Radio France/FIP favourites to Spotify and portable catalogues.',
    techStack: ['Python', 'Shell', 'Spotify API'],
    group: 'Tools',
    github: 'https://github.com/dafraile/FIPer'
  },
  {
    id: 't8',
    name: 'octOpus-bot',
    description: 'Fork of OpenClaw with Claude Code CLI as the default agent, plus changes under the hood. Work in progress.',
    techStack: ['TypeScript', 'Node.js', 'Claude Code'],
    group: 'Tools',
    github: 'https://github.com/dafraile/octOpus-bot'
  },

  // Experiments & play
  {
    id: 'x1',
    name: 'bloom-canvas',
    description: 'Infinite 2D grid of AI-generated haiku. Local LLMs, spatial temperature, dada prompt injection.',
    techStack: ['Python', 'Local LLMs'],
    group: 'Experiments & play',
    github: 'https://github.com/dafraile/bloom-canvas'
  },
  {
    id: 'x2',
    name: 'Aigentization',
    description: 'Civ V-inspired AI agent orchestration platform: hex grid, turn-based execution, city planning.',
    techStack: ['TypeScript', 'JavaScript', 'HTML'],
    group: 'Experiments & play',
    github: 'https://github.com/dafraile/Aigentization'
  },
  {
    id: 'x3',
    name: 'autoresearch',
    description: 'AI agents running research on single-GPU nanochat training automatically.',
    techStack: ['Python', 'Jupyter', 'nanochat'],
    group: 'Experiments & play',
    github: 'https://github.com/dafraile/autoresearch'
  },
  {
    id: 'x4',
    name: 'genai-friend-or-foe',
    description: 'GenAI: friend or foe? Slide deck for the AIHI ECR Lunch Club.',
    techStack: ['HTML', 'JavaScript', 'Slides'],
    group: 'Experiments & play',
    github: 'https://github.com/dafraile/genai-friend-or-foe'
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for David Fraile Navarro's personal website (dafraile.com).
David is a Research Fellow in Generative AI at the Centre for Health Informatics, Australian Institute of Health Innovation (AIHI), Macquarie University.
He is a General Practitioner by training (MBBS) with a PhD, and his research examines how large language models and AI agents can be evaluated and safely deployed in healthcare: clinical benchmarking, human-AI interaction, mechanistic interpretability and multi-agent systems for clinical decision-making.
His recent work appears in the BMJ, NEJM AI, EMNLP and NeurIPS workshops.

Key facts about David:
- ORCID: 0000-0002-1108-7071
- Twitter/X: @dafraile
- GitHub: dafraile
- Hugging Face: dafraile (clinical dialogue summarization models)
- 2026 Cosmos Institute grant (AI & Human Autonomy) for Quorum, a multi-agent clinical deliberation prototype
- Co-supervisor of a Macquarie-St Andrews cotutelle PhD
- Member of a Standards Australia technical committee on AI
- Previously worked on COVID-19 living guidelines and living evidence methods with Cochrane Australia and Monash University

Research focus areas:
- Evaluation and benchmarking of LLMs and AI agents in healthcare
- Clinical triage evaluation and how evaluation format shapes measured failure
- Mechanistic interpretability (sparse autoencoders, attention and activation analysis)
- Persistent AI agents, identity and persona stability
- Multi-agent systems for clinical deliberation and evidence synthesis
- Conversational AI for patients and clinical documentation (AI scribes, dialogue summarization)
- Generative AI safety, ethics and governance in medicine

Notable recent publications (30+ peer-reviewed; full list in the Research tab):
- "The Persona Is Still There, but Who Is Speaking? Latent Identity Reversion in Persistent AI Agents" (arXiv, 2026)
- "Where Do Apparent LLM Clinical Triage Failures Arise? Localizing the Multiple-Choice Format Effect" (Findings of EMNLP 2026)
- "Evaluation format, not only model capability, shapes measured triage failure in consumer health AI" (NeurIPS 2026 Workshop on GenAI for Health)
- "Exploring GLP-1 Drug Safety from Multiple Angles: A Toolkit for Evidence Review and Pharmacovigilance" (NeurIPS 2026 Workshop on GenAI for Health, demonstration track)
- "Conversational AI for Automated Patient Questionnaire Completion" (arXiv 2026, AMIA 2026 poster)
- "AI Scribes: Are We Measuring What Matters?" (JMIR Medical Informatics, 2026)
- BMJ 2025 series on generative AI in clinical consultations (clinical competencies, changing dynamics of consultations, patient agency)
- "Expert evaluation of large language models for clinical dialogue summarization" (Scientific Reports, 2025)
- "AI as an Ecosystem: Ensuring Generative AI Is Safe and Effective" (NEJM AI, 2024)
- Systematic review on clinical NER and relation extraction (Int J Med Inform, 2023)
- Multiple papers on COVID-19 living guidelines (MJA, JCE)

He also writes the "Me and My GPT" column for the AI Health Alliance and keeps a journal of short research notes on this site.

Be professional, concise, and helpful. If asked about specific papers, provide accurate information from the list above or suggest checking the Research tab. Do not invent papers, grants or affiliations.
`;
