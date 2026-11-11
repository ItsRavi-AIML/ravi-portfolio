import { ProjectItem, ToolkitGroup, NavLinkItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Raja Ravi Varma',
  shortName: 'RAVI',
  wordmark: 'RAVI.',
  roleEyebrow: 'INDEPENDENT DEVELOPER / AI + FULL-STACK',
  heroHeading: 'Building ideas\ninto something real.',
  heroDescription:
    "I'm Ravi — an Integrated M.Tech student exploring artificial intelligence and full-stack development. I enjoy building useful products where engineering meets thoughtful design.",
  heroButtons: {
    primary: 'EXPLORE MY WORK',
    secondary: "LET'S CONNECT",
  },
  sideStats: {
    left: [
      { value: 'AI', label: 'Area of interest' },
      { value: '2024', label: 'University batch' },
    ],
    right: [
      { value: '05', label: 'Featured projects' },
      { value: 'FULL STACK', label: 'Development focus' },
    ],
  },
  currentFocus: {
    label: 'CURRENT FOCUS',
    items: ['AI systems', 'Web applications', 'Product thinking'],
    footer: 'BASED IN INDIA · WORKING WORLDWIDE',
  },
  heroFooterNote: 'SUBTLE MOTION / CLEAR CONTENT / NO DISTRACTIONS',
  email: 'nimmagaddaravivarma@gmail.com',
  primaryEmail: 'nimmagaddaravivarma@gmail.com',
  secondaryEmail: 'ravivarma0029@zohomail.in',
  githubUrl: 'https://github.com/ItsRavi-AIML',
  linkedinUrl: 'https://www.linkedin.com/in/raja-ravi-varma-n/',
  resumeUrl: '/assets/aistudio/Raja_Ravi_Varma_-_Resume_23f12cda.pdf',
  resumePreviewUrl: '/assets/aistudio/resume_preview.png',
  portraitUrl: '/assets/aistudio/file_0000000097e88207a31d575cbd87c1b0_66af70f6.png',
  phone: '+91 6305959518',
  availabilityStatus: 'OPEN TO INTERNSHIPS',
  location: 'West Godavari, A.P, India',
  education: 'Integrated M.Tech in Artificial Intelligence',
  institution: 'VIT Bhopal University',
};

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'work', label: 'WORK', href: '#work' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'toolkit', label: 'TOOLKIT', href: '#toolkit' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'maya',
    number: '01',
    title: 'MAYA',
    category: 'AI CALL GATEKEEPER',
    description:
      'An intelligent call screening assistant that screens incoming calls, identifies caller intent, detects scam patterns, and transcribes voice conversations in real time.',
    technologies: ['Python', 'FastAPI', 'Whisper STT', 'Intent Classifier', 'Twilio'],
    githubUrl: 'https://github.com/ItsRavi-AIML/ai-call-gatekeeper',
    problemStatement:
      'Unsolicited spam calls and aggressive telemarketing disrupt daily focus and introduce social engineering vulnerabilities. MAYA intercepts incoming calls automatically, queries the caller for their identity and reason, and flags suspicious attempts before connecting the call.',
    architectureDetails: [
      'FastAPI asynchronous webhook server streaming telephony audio events.',
      'Whisper STT integration for sub-second vocal transcription.',
      'LLM intent classifier calculating scam probability and call legitimacy.',
      'Automated briefing cards and instant notification dispatch to user.',
    ],
    engineeringTakeaways: [
      'Low-latency audio streaming is critical to keep conversational delay undetectable.',
      'Heuristic safety rules prevent false positives on emergency or verified family contacts.',
    ],
  },
  {
    id: 'ai-resume-analyser',
    number: '02',
    title: 'AI RESUME ANALYSER',
    category: 'RESUME INTELLIGENCE TOOL',
    description:
      'A resume analysis tool that compares candidate profiles with role requirements and surfaces useful match insights.',
    technologies: ['Next.js', 'FastAPI', 'NLP', 'Similarity Scoring'],
    githubUrl: 'https://github.com/ItsRavi-AIML/AI-Resume-Analyser',
    problemStatement:
      'Traditional ATS screeners rely on rigid keyword matches, penalizing well-qualified candidates who use alternate phrasing. This system performs semantic role alignment to identify skill overlaps and gaps.',
    architectureDetails: [
      'FastAPI backend for parsing structured text from candidate resumes and job descriptions.',
      'Tokenization, lemmatization, and domain entity extraction pipeline.',
      'Vector similarity scoring to evaluate concept-level matches rather than exact strings.',
      'Next.js interface presenting actionable match highlights and missing domain skills.',
    ],
    engineeringTakeaways: [
      'Normalizing extracted entities improves precision across technical role descriptions.',
      'Clear explanation of missing requirements provides tangible utility over a single opaque percentage.',
    ],
  },
  {
    id: 'chainguard',
    number: '03',
    title: 'CHAINGUARD',
    category: 'BLOCKCHAIN HACKATHON PROJECT',
    description:
      'A security-focused project developed for a hackathon, exploring practical ways to make digital systems more trustworthy.',
    technologies: ['AI / ML', 'Python', 'Blockchain Security'],
    githubUrl: 'https://github.com/ItsRavi-AIML/ChainGuard',
    problemStatement:
      'Engineered during an intense 36-hour hackathon to address vulnerability exposure in distributed digital workflows through automated behavioral verification.',
    architectureDetails: [
      'Python-based anomaly detection models tracking atypical event sequences.',
      'Lightweight rules engine combining machine-learned heuristics with hard safety policies.',
      'Rapidly prototyped responsive dashboard displaying risk alerts and inspection logs.',
    ],
    engineeringTakeaways: [
      'Rapid prototyping under hackathon time constraints highlighted the need for clean separation of concerns.',
      'Balancing false-positive friction against real system security is critical in automated defenses.',
    ],
  },
  {
    id: 'klytra',
    number: '04',
    title: 'KLYTRA',
    category: 'REAL-TIME MESSAGING',
    description:
      'A responsive messaging experience focused on clear conversations and a considered interface.',
    technologies: ['React', 'Vite', 'Tailwind', 'MongoDB'],
    githubUrl: 'https://github.com/ItsRavi-AIML/KLYTRA',
    problemStatement:
      'Many chat applications suffer from visual clutter and inconsistent mobile behavior. Klytra was built as a clean, responsive messaging application prioritizing readable typography and reliable conversation threads.',
    architectureDetails: [
      'React and Vite single-page application built for instantaneous interface rendering.',
      'Tailwind CSS design system providing robust viewport reflow and typography hierarchy.',
      'MongoDB document schema optimized for conversational message indexing and room timelines.',
      'Optimistic message dispatch pattern ensuring typing and send states feel immediate.',
    ],
    engineeringTakeaways: [
      'Optimistic updates prevent apparent UI latency during message transmission.',
      'Thorough layout testing across mobile viewports is essential for touch conversation interfaces.',
    ],
  },
  {
    id: 'edumind-ai',
    number: '05',
    title: 'EduMind AI',
    category: 'AI-POWERED STUDY PLATFORM',
    description:
      'An AI-powered educational platform designed to support student learning, concept breakdown, and intelligent revision workflows.',
    technologies: ['Python', 'Flask', 'NLP', 'Generative AI'],
    githubUrl: 'https://github.com/ItsRavi-AIML/Edumind-AI',
    problemStatement:
      'Students often struggle to navigate lengthy study material and dense lecture notes. EduMind AI structures complex topics into intuitive concept trees, provides contextual Q&A, and generates customized revision quizzes.',
    architectureDetails: [
      'Flask backend handling study material ingestion and user learning state.',
      'NLP text processing pipeline for automated concept chunking and entity mapping.',
      'Generative AI assistant providing Socratic explanations for challenging topics.',
      'Responsive student workspace with interactive progress and retention tracking.',
    ],
    engineeringTakeaways: [
      'Chunked concept explanations significantly improve student retention compared to raw text summaries.',
      'Lightweight local data storage ensures fast response times during interactive study sessions.',
    ],
  },
];

export const PROJECTS_HEADER = {
  sectionLabel: '01 / SELECTED WORK',
  heading: "Things I've been building.",
  supportingText:
    'A selection of projects shaped by curiosity, experimentation and practical problem-solving.',
};

export const ABOUT_CONTENT = {
  sectionLabel: '02 / ABOUT',
  heading: 'A little about the person behind the projects.',
  description:
    "I'm pursuing an Integrated M.Tech in Artificial Intelligence at VIT Bhopal. I enjoy working across frontend development, backend systems and applied AI. I'm interested in creating technology that solves practical problems while maintaining a thoughtful user experience.",
  card: {
    label: 'CURRENTLY LEARNING BY BUILDING',
    content: 'AI · WEB APPS · PRODUCT ENGINEERING',
    footer: 'VIT BHOPAL / INTEGRATED M.TECH AI',
  },
};

export const TOOLKIT_HEADER = {
  sectionLabel: '03 / TOOLKIT',
  heading: 'Technology I work with.',
  supportingText: 'A focused toolkit — technologies I have actually used and built with.',
};

export const TOOLKIT_GROUPS: ToolkitGroup[] = [
  {
    id: 'languages',
    category: 'LANGUAGES',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    id: 'frontend',
    category: 'FRONTEND',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    category: 'BACKEND & DATA',
    items: ['FastAPI', 'Flask', 'SQLite', 'MongoDB'],
  },
  {
    id: 'ai-ml',
    category: 'AI / ML',
    items: ['NLP', 'ChromaDB', 'Sentence Transformers', 'TF-IDF'],
  },
];

export const CONTACT_CONTENT = {
  sectionLabel: '04 / CONTACT',
  heading: "Have an idea?\nLet's make it real.",
  supportingText: 'Open to internships, collaborations and interesting projects.',
  ctaText: 'GET IN TOUCH',
};
