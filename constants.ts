import { BlogPost, Project, Publication } from './types';

export const SOCIAL_LINKS = {
  orcid: 'https://orcid.org/0000-0002-1108-7071',
  scholar: 'https://scholar.google.com/citations?user=DavidFraileNavarro', // Placeholder query
  twitter: 'https://twitter.com/dafraile',
  github: 'https://github.com/dafraile'
};

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Example Publication: Advancements in Digital Health Interventions',
    authors: 'David Fraile Navarro, et al.',
    journal: 'Journal of Medical Internet Research',
    year: 2023,
    link: SOCIAL_LINKS.orcid,
    tags: ['Digital Health', 'Public Health']
  },
  {
    id: 'p2',
    title: 'Understanding Epidemiology in the Modern Age',
    authors: 'Smith J., Fraile Navarro D.',
    journal: 'International Journal of Epidemiology',
    year: 2022,
    link: SOCIAL_LINKS.orcid,
    tags: ['Epidemiology', 'Data Science']
  },
  {
    id: 'p3',
    title: 'Machine Learning Applications in Clinical Settings',
    authors: 'Fraile Navarro D., Doe A.',
    journal: 'Lancet Digital Health',
    year: 2021,
    link: SOCIAL_LINKS.orcid,
    tags: ['AI', 'Clinical']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'pr1',
    name: 'Academic Portfolio Generator',
    description: 'A React-based static site generator specifically designed for academics to showcase their work using Markdown and JSON data.',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/dafraile'
  },
  {
    id: 'pr2',
    name: 'Health Data Visualizer',
    description: 'Interactive dashboard for visualizing epidemiological trends using D3.js and public health datasets.',
    techStack: ['D3.js', 'Python', 'Pandas'],
    github: 'https://github.com/dafraile'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Welcome to my Digital Garden',
    date: '2023-10-27',
    summary: 'An introduction to my new personal space on the web.',
    content: [
      "Welcome to my personal website. This space serves as a central hub for my academic publications, coding projects, and random thoughts.",
      "I decided to build this using a minimalist black and white aesthetic to focus purely on the content. As an academic who codes, I wanted full control over the presentation layer.",
      "Feel free to explore the 'Research' tab for my formal work, or check out the 'Ask AI' section to chat with a digital assistant trained on my professional background."
    ],
    tags: ['Personal', 'Meta']
  },
  {
    id: 'b2',
    title: 'The Intersection of Code and Public Health',
    date: '2023-11-15',
    summary: 'How software engineering principles apply to epidemiological research.',
    content: [
      "In modern public health, data is abundant but insights are scarce. This is where coding skills become a superpower for researchers.",
      "Reproducible research is not just a buzzword; it's a necessity. By treating analysis pipelines as production software, we reduce errors and increase trust in our findings.",
      "I've been exploring how simple Python scripts can automate hours of manual data cleaning, allowing us to focus on the 'why' rather than the 'how' of data processing."
    ],
    tags: ['Coding', 'Public Health']
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for David Fraile Navarro's personal portfolio website.
David is an academic researcher and coder.
He has an ORCID: 0000-0002-1108-7071 and acts on Twitter as @dafraile.
His work focuses on the intersection of healthcare, public health, and technology.
You should answer questions about his work, his research interests (epidemiology, digital health, coding), and his background.
Be professional, concise, and helpful. 
If asked about specific papers, refer to general topics he covers or suggest checking the 'Research' tab.
Adopt a tone that is knowledgeable but approachable.
`;