import { MetricItem, ProgramItem, AICardItem, SkillCategory, ExperienceItem, LeadershipItem } from './types';

export const PERSONAL_DETAILS = {
  name: "P N S Nikhilendra",
  titles: ["Lead QA Engineer", "SDET", "AI-Powered Quality Engineering"],
  tagline: "Engineering Quality at Enterprise Scale",
  bio: "Lead QA Engineer and SDET with over 8 years of hands-on experience across FinTech, High-Security SaaS, and AEM On-Cloud environments. Specialist in architecting resilient automation frameworks spanning Web, API, Mobile, and Databases. Proven in scaling verification platforms using Playwright, Selenium, and Karate, while leveraging artificial intelligence to accelerate engineering lifecycles and shift testing left.",
  location: "Hyderabad, India",
  email: "nikhilendrapns19@gmail.com",
  phone: "+91 709 712 1353",
  linkedin: "https://linkedin.com/in/nikhilendrapns/",
  github: "https://github.com/nikhilendrapns",
  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Geethanjali College of Engineering & Technology, JNTUH",
      period: "2014 – 2018",
      details: "Publication: \"An Overview on Blockchain Technology and its Applications\" — Springer, 2018"
    }
  ],
  certifications: [
    "ISTQB Certified Tester Foundation Level (CTFL)",
    "Microsoft Azure AI Fundamentals (AI-900)",
    "Microsoft Azure Fundamentals (AZ-900)",
    "Scrum Fundamentals Certified (SFC)",
    "Postman API Fundamentals Student Expert",
    "Google IT Support Professional Certificate"
  ]
};

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'impact', label: 'Impact' },
  { id: 'programs', label: 'Featured Programs' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership & Innovation' }
];

export const IMPACT_METRICS: MetricItem[] = [
  {
    id: 'years-exp',
    value: "8+",
    label: "Years Experience",
    description: "Hands-on engineering across FinTech, Real Estate Tech, and Enterprise SaaS platforms."
  },
  {
    id: 'web-mig',
    value: "140+",
    label: "Websites Migrated",
    description: "Led end-to-end quality program for massive legacy AEM to AEM On-Cloud migration."
  },
  {
    id: 'aem-cov',
    value: "90%",
    label: "AEM Test Coverage",
    description: "Achieved robust test coverage via content, component, and performance regression suites."
  },
  {
    id: 'mob-cov',
    value: "85%",
    label: "Mobile Test Coverage",
    description: "Comprehensive automated and manual verification across iOS & Android ecosystems."
  },
  {
    id: 'test-cases',
    value: "400+",
    label: "Automated Test Cases",
    description: "Maintained in high-security backend pipelines and POS processing suites."
  },
  {
    id: 'ai-reduc',
    value: "35%",
    label: "Boilerplate Reduction",
    description: "Decreased boilerplate code structure leveraging GitHub Copilot in daily QE workflows."
  }
];

export const FEATURED_PROGRAMS: ProgramItem[] = [
  {
    id: 'prog1',
    title: "AEM Modernization Program",
    icon: "Globe",
    description: "Full-lifecycle QA program migating over 140 production web environments from a legacy infrastructure to cloud-native Adobe Experience Manager, implementing dynamic component checks and shift-left workflows.",
    highlights: [
      "140+ Websites Migrated",
      "Playwright Automation First",
      "Accessibility Validation (WCAG 2.1)",
      "Performance Testing (Lighthouse / Core Web Vitals)",
      "AI-Assisted Regression Execution"
    ]
  },
  {
    id: 'prog2',
    title: "Mobile Quality Engineering",
    icon: "Smartphone",
    description: "Designed the end-to-end QA strategy for premium iOS and Android mobile applications. Orchestrated real-device and browser-simulated matrix validation.",
    highlights: [
      "iOS Testing & Native Execution",
      "Android Testing & APK Validation",
      "BrowserStack Device Matrix Integration",
      "Real Device Validation & Touch Profiling",
      "85% Comprehensive Test Coverage"
    ]
  },
  {
    id: 'prog3',
    title: "AI Chatbot Testing Framework",
    icon: "Cpu",
    description: "Initiated key testing proofs-of-concept for internal AI chatbots, checking conversational flows, data extraction, mock-up response formatting, and downstream integration verification.",
    highlights: [
      "Conversational AI Path Mapping",
      "Intent Recognition Validation",
      "Response Accuracy & Pattern Matching",
      "Karate Automation Scripting",
      "API Contract Integrity Verification"
    ]
  },
  {
    id: 'prog4',
    title: "Automation Acceleration Initiative",
    icon: "Zap",
    description: "Pioneered productivity uplift within modern QA operations, embedding advanced generative AI techniques and robust utility scripting directly into validation pipelines.",
    highlights: [
      "GitHub Copilot Integration",
      "Playwright Core Scripting Acceleration",
      "Python Database Automation",
      "35% Regression Boilerplate Reduction"
    ]
  }
];

export const AI_QE_CARDS: AICardItem[] = [
  {
    id: 'ai-agents',
    title: "Playwright UI Automation",
    achievement: "Accelerated execution and framework development",
    description: "Implemented robust end-to-end regression suites using Playwright to validate component libraries, high-traffic portals, and transactional flows.",
    icon: "Bot"
  },
  {
    id: 'ai-chatbot',
    title: "Conversational AI Testing",
    achievement: "Validated chatbot workflows, intents & integrations",
    description: "Built automated script flows to assert back-channel NLP metrics, ensuring integration contracts are fully intact across real-time APIs.",
    icon: "MessageSquare"
  },
  {
    id: 'ai-prompting',
    title: "Prompt Engineering",
    achievement: "Top 30 Finalist in Hyderabad Prompt Wars Challenge",
    description: "Honed advanced prompt techniques and model steering parameters at an elite applied-AI competition containing over 150 top-tier engineers.",
    icon: "Terminal"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Databases",
    icon: "Code2",
    skills: ["Python", "JavaScript", "TypeScript", "SQL (Azure SQL, PostgreSQL)", "JSON / XML"]
  },
  {
    category: "Test Automation",
    icon: "PlayCircle",
    skills: ["Playwright (Python & TS)", "Selenium WebDriver", "Karate Framework", "Cucumber BDD", "Page Object Model (POM)", "Data-Driven Test Design"]
  },
  {
    category: "API & Contract Testing",
    icon: "Network",
    skills: ["Postman", "Swagger", "REST Services", "JSON Schema Validation", "Karate API", "Contract Verification"]
  },
  {
    category: "Mobile Testing",
    icon: "Smartphone",
    skills: ["iOS Real Device Testing", "Android Real Device Testing", "BrowserStack Device Cloud", "Functional Execution", "Mobile App Profiling"]
  },
  {
    category: "Performance & Accessibility",
    icon: "Gauge",
    skills: ["Google Lighthouse", "WCAG 2.1 Web Accessibility", "Cross-Browser Testing", "Core Web Vitals Verification"]
  },
  {
    category: "DevOps & Infrastructure",
    icon: "Layers",
    skills: ["Jenkins CI/CD", "Azure DevOps Pipelines", "Git / GitHub Versioning", "AWS CloudWatch", "Splunk Logistics", "Dynatrace Performance"]
  },
  {
    category: "AI & GenAI",
    icon: "Bot",
    skills: ["GitHub Copilot Co-Authoring", "Playwright E2E Automation", "Prompt Engineering", "Conversational Flow Testing", "GenAI-Assisted Efficiency"]
  },
  {
    category: "QA Methodologies",
    icon: "ClipboardCheck",
    skills: ["Agile/Scrum", "Risk-Based Test Strategy", "Shift-Left Quality Operations", "Defect Life Cycle Triage", "Requirements Traceability (RTM)"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'tcs-pm',
    role: "Lead QA Engineer",
    company: "Tata Consultancy Services (TCS)",
    location: "Hyderabad",
    period: "May 2022 – Present",
    current: true,
    project: "Air Communities Portfolio",
    achievements: [
      "Architected quality assurance strategies across 4 iOS and Android mobile applications, driving browser validation and real-device testing matrix.",
      "Delivered comprehensive REST API regression validations using Postman for central command centers, securing complete schema coverage across essential routes.",
      "Engineered automated database validation engines using custom Python scripts integrated with Azure SQL backend structures, minimizing test processing duration from 4+ hours down to 20 minutes.",
      "Co-led AI-powered platform proofs-of-concept, coding specialized Karate-based automated test cases to validate conversational routing algorithms, dynamic integrations, and REST endpoints.",
      "Spearheaded end-to-end visual, content, structural, dynamic media, and accessibility (WCAG 2.1 / Google Lighthouse) validations for 140+ high-traffic consumer websites migrating onto cloud-native AEM ecosystems.",
      "Coordinated cross-agency operations involving 4 dedicated QA specialists and multiple tech stakeholders to maintain top-tier schedule compliance, ensuring seamless production releases without rollbacks."
    ],
    tags: ["Playwright", "Python", "Azure SQL", "AEM Cloud", "Karate", "Postman", "BrowserStack"]
  },
  {
    id: 'tcs-wu',
    role: "Lead QA Engineer",
    company: "Tata Consultancy Services (TCS)",
    location: "Hyderabad",
    period: "May 2022 – Mar 2025",
    project: "Western Union Portfolio",
    achievements: [
      "Scaled a robust Selenium WebDriver POM hybrid verification system supporting 400+ test scenarios, establishing overnight execution workflows via Jenkins core pipelines to resolve manual verification blockages.",
      "Chaperoned end-to-end verification and performance auditing processes across Agent core management frameworks, finance clearance networks, and corporate POS devices processing financial flows.",
      "Administered structured Karate-based microservices checks, asserting high-performance data schemas, secure encryption protocols, and core customer information data pipelines.",
      "Applied AWS CloudWatch alerts and enterprise infrastructure trackers across critical system upgrade sprints, identifying system performance and query anomalies to prevent backend disruption."
    ],
    tags: ["Selenium", "Jenkins", "AWS CloudWatch", "Karate API", "SQL Server"]
  },
  {
    id: 'highradius',
    role: "QA Engineer 2 — Product Operations",
    company: "HighRadius Technologies",
    location: "Hyderabad",
    period: "Jun 2021 – Apr 2022",
    project: "Cash Application Platform",
    achievements: [
      "Conducted structural, regression, and merchant-acceptance system validations for localized financial allocations, asserting invoice-match sequences, high-accuracy ledgers, and complex client structures.",
      "Analyzed system documentation packages to maintain absolute Requirements Traceability Matrices, aligning user scenarios with critical business rules to remove validation leaks.",
      "Maintained active performance monitoring checks across staging instances, intercepting load bottlenecks and memory anomalies before client-facing production releases.",
      "Collaborated directly with engineering squads to streamline tracking classifications in tracking systems, accelerating feedback efficiency and resolution speed by 25%."
    ],
    tags: ["Manual Testing", "API Validation", "SQL Server", "RTM Analysis", "Jira"]
  },
  {
    id: 'dxc',
    role: "Application Support & QA Engineer",
    company: "DXC Technology",
    location: "Hyderabad",
    period: "Jul 2019 – May 2021",
    project: "DXC Red Rock — Managed Services",
    achievements: [
      "Managed rigorous pre-implementation system smoke tests, automated regression runs, and security updates for over 250 enterprise platforms in the ANZ region across Oracle, ServiceNow, and Windows instances.",
      "Redesigned emergency system incident management SOPs as Shift Lead, securing an 18% improvement in average query response velocity under critical SLA targets.",
      "Automated high-frequency clerical activities and routine database tasks on validation portals, restoring valuable engineering focus hours weekly.",
      "Tracked application node logs employing Nagios and CloudWatch instrumentation to isolate application irregularities prior to live multi-region rollouts."
    ],
    tags: ["ServiceNow", "Nagios", "CloudWatch", "Oracle DB", "Incident Management"]
  },
  {
    id: 'amazon',
    role: "Technical Support Associate",
    company: "Amazon Development Centre India",
    location: "Hyderabad",
    period: "Jul 2018 – Apr 2019",
    achievements: [
      "Duplicated user issues and system exceptions across Alexa devices and Firestick portable endpoints, delivering clean, actionable diagnostic dossiers to backend development engineering blocks.",
      "Maintained topmost SLA delivery and rapid turnaround metrics across concurrent voice and ticketing queues through the entire engagement."
    ],
    tags: ["Hardware Logistics", "Bug Profiling", "Diagnostic Reports", "SLA Audits"]
  }
];

export const LEADERSHIP_AND_INNOVATION: LeadershipItem[] = [
  {
    id: 'air-talks',
    title: "Air Talks",
    subtitle: "SME Technical Knowledge For Portfolios",
    description: "Founded and expanded an account-specific engineering forum for technology alignment. Curated structured knowledge sessions focusing on automated testing, API validation grids, and leveraging AI in modern QE workflows.",
    type: "initiative"
  },
  {
    id: 'air-vibes',
    title: "Air Vibes",
    subtitle: "Associate Engagement & Morale Initiative",
    description: "Established a structured account engagement initiative focused on cross-team bonding, mental wellness, and community support — recognized by leadership as an outstanding model for associate retention.",
    type: "initiative"
  },
  {
    id: 'springer',
    title: "Springer Publication",
    subtitle: "Blockchain Technology Research",
    description: "Authored and published a strategic academic research paper titled \"An Overview on Blockchain Technology and its Applications\" in Springer, outlining decentralized infrastructure security and validation techniques.",
    type: "publication"
  },
  {
    id: 'mentorship',
    title: "Technical Mentorship",
    description: "Regularly guide junior automation specialists and quality engineers, providing deep architectural training on Playwright pipelines, Karate API structures, BDD best practices, and career development paths.",
    type: "mentorship"
  },
  {
    id: 'speaking',
    title: "SME Speaking Sessions",
    description: "Frequently present across internal TCS Engineering and Delivery Forums, demonstrating shift-left strategic planning, risk-based prioritization methods, and Playwright automation frameworks.",
    type: "speaking"
  }
];

export const MOCK_RECRUITER_CHAT: { question: string; answer: string; keywords: string[] }[] = [
  {
    question: "Does Nikhilendra have experience with Playwright?",
    answer: "Yes. Nikhilendra has heavily utilized Playwright in high-scale projects. Most notably, in the AEM Modernization Program, he engineered a comprehensive E2E regression suite under Playwright, cutting execution timelines from 3 days down to under 1 day and reducing manual verification effort by 40%.",
    keywords: ["playwright", "automation", "regression"]
  },
  {
    question: "What is his experience in Mobile Quality Engineering?",
    answer: "Nikhilendra led the end-to-end test strategy for 4 key iOS and Android mobile apps using BrowserStack and real-device testing matrixes, achieving sign-offs with top stability metrics.",
    keywords: ["mobile", "ios", "android", "browserstack", "phone", "tablet"]
  },
  {
    question: "Has he worked with AI in testing?",
    answer: "Absolutely. निखिलेंद्र/Nikhilendra is a pioneer in AI-driven QE. He used GitHub Copilot to secure a 35% reduction in automation boilerplate code, automated Karate verification of AI chatbot POCs, and was a Top 30 Finalist in the Hyderabad Prompt Wars Challenge.",
    keywords: ["ai", "copilot", "chat", "chatbot", "prompt", "artificial intelligence", "genai"]
  },
  {
    question: "What databases and backend testing tools does he use?",
    answer: "He specializes in SQL validations, query authoring, and backend regression using Azure SQL and PostgreSQL. In the TCS Air Communities project, he authored custom Python automation scripts that reduced database validation time from over 4 hours to just 20 minutes.",
    keywords: ["database", "sql", "backend", "azure", "postgres", "python", "script"]
  },
  {
    question: "How does he manage team leadership?",
    answer: "As a Lead QA Engineer, he has managed cross-functional QA teams, led go/no-go release decisions, founded the 'Air Talks' technical sharing forum, and founded 'Air Vibes' for associate engagement. He also provides technical mentorship to junior engineers across topics like Playwright and BDD.",
    keywords: ["lead", "leadership", "manage", "team", "mentor", "air talks", "air vibes"]
  }
];
