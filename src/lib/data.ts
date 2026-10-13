export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  role: string;
  subRole: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  resumeSummary: string;
  shortBio: string;
  github: string;
  linkedin: string;
  resumePath: string;
  idNumber: string;
  dept: string;
  validTill: string;
  quote: string;
}

export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export interface SkillElement {
  number: number;
  symbol: string;
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Databases & Cloud" | "Tools" | "Core Concepts";
  description: string;
  brandColor?: string;
  iconType: "brand" | "concept";
  usedInProjects: string[];
}

export interface Project {
  id: string;
  index: string;
  title: string;
  kicker: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
  uiType: "careermitra" | "fpa-insights" | "coderzap";
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  workType: string;
  description: string[];
  projectFocus?: string;
  tech: string[];
  type: "experience" | "education";
}

export interface Achievement {
  id: string;
  index: string;
  platform: string;
  label: string;
  metricNumber: number;
  metricSuffix: string;
  caption: string;
  detail: string;
  brandColor: string;
}

export const PROFILE: Profile = {
  name: "Merugu Srikanth",
  firstName: "Srikanth",
  lastName: "Merugu",
  initials: "MS",
  role: "Full-Stack Developer",
  subRole: "MERN Stack • Python • FastAPI • REST APIs • Next.js • AI Integration",
  email: "merugusrikanth28@gmail.com",
  phone: "+91 9704971428",
  phoneHref: "tel:+919704971428",
  location: "Hyderabad, Telangana, India",
  resumeSummary:
    "Full-Stack Developer with 4+ years of experience building scalable, production-ready web applications across frontend, backend and database layers. Skilled in the MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, TypeScript, Python and FastAPI, with hands-on experience designing RESTful APIs, role-based access control, admin dashboards and SEO-optimized platforms. Delivered an AI-powered enterprise financial analytics platform and a full-stack career and job discovery platform. Focused on clean architecture, reusable components and high performance.",
  shortBio:
    "Specialized in high-performance web applications, enterprise dashboards, secure RESTful microservices, and AI-powered interfaces.",
  github: "https://github.com",
  linkedin: "https://linkedin.com/in/srikanth-m-7b1221393",
  resumePath: "/Merugu_Srikanth_Full_Stack_Developer_Resume.pdf",
  idNumber: "MS-HYD-2026",
  dept: "Full Stack Eng.",
  validTill: "2026+",
  quote:
    "Focused on clean architecture, reusable components, and enterprise-grade performance across modern frontend and backend architectures.",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about", index: "01" },
  { label: "Skills", href: "#skills", index: "02" },
  { label: "Work", href: "#work", index: "03" },
  { label: "Experience", href: "#experience", index: "04" },
  { label: "Achievements", href: "#achievements", index: "05" },
  { label: "Contact", href: "#contact", index: "06" },
];

export const SKILL_CATEGORIES = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Databases & Cloud",
  "Tools",
  "Core Concepts",
] as const;

export const SKILLS_DATA: SkillElement[] = [
  // Languages
  {
    number: 1,
    symbol: "Ts",
    name: "TypeScript",
    category: "Languages",
    description: "Strictly-typed JavaScript superset for scalable, enterprise-grade applications.",
    brandColor: "#3178c6",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "CoderZap", "FP&A Insights"],
  },
  {
    number: 2,
    symbol: "Js",
    name: "JavaScript (ES6+)",
    category: "Languages",
    description: "Modern asynchronous JavaScript, closures, event-driven reactive programming.",
    brandColor: "#f7df1e",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "FP&A Insights", "CoderZap"],
  },
  {
    number: 3,
    symbol: "Py",
    name: "Python",
    category: "Languages",
    description: "Backend microservices, FastAPI endpoints, and AI integration pipelines.",
    brandColor: "#3776ab",
    iconType: "brand",
    usedInProjects: ["FP&A Insights", "FastAPI APIs"],
  },
  {
    number: 4,
    symbol: "H5",
    name: "HTML5",
    category: "Languages",
    description: "Semantic document structures, accessibility standards, and modern web APIs.",
    brandColor: "#e34f26",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "CoderZap", "FP&A Insights"],
  },
  {
    number: 5,
    symbol: "C3",
    name: "CSS3",
    category: "Languages",
    description: "Modern layouts, responsive design, CSS variables, and fluid typography.",
    brandColor: "#1572b6",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "FP&A Insights", "CoderZap"],
  },

  // Frontend
  {
    number: 6,
    symbol: "Nx",
    name: "Next.js",
    category: "Frontend",
    description: "Server-side rendering (SSR), App Router, server actions, and dynamic SEO sitemaps.",
    brandColor: "#000000",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "CoderZap", "FP&A Insights"],
  },
  {
    number: 7,
    symbol: "Re",
    name: "React.js",
    category: "Frontend",
    description: "Component lifecycle, custom hooks, virtual DOM optimization, and state management.",
    brandColor: "#61dafb",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "FP&A Insights", "CoderZap"],
  },
  {
    number: 8,
    symbol: "Tw",
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first design system architecture for highly responsive interfaces.",
    brandColor: "#06b6d4",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "FP&A Insights"],
  },
  {
    number: 9,
    symbol: "Rx",
    name: "Redux.js",
    category: "Frontend",
    description: "Predictable centralized state container with Redux Toolkit.",
    brandColor: "#764abc",
    iconType: "brand",
    usedInProjects: ["FP&A Insights", "CareerMitra"],
  },
  {
    number: 10,
    symbol: "Gs",
    name: "GSAP",
    category: "Frontend",
    description: "High-performance timeline and scroll-driven JavaScript animations.",
    brandColor: "#88ce02",
    iconType: "brand",
    usedInProjects: ["FP&A Insights"],
  },
  {
    number: 11,
    symbol: "Fm",
    name: "Framer Motion",
    category: "Frontend",
    description: "Declarative spring physics and gesture animations for React.",
    brandColor: "#0055ff",
    iconType: "brand",
    usedInProjects: ["FP&A Insights"],
  },
  {
    number: 12,
    symbol: "Bs",
    name: "Bootstrap",
    category: "Frontend",
    description: "Responsive grid systems and accessible design utilities.",
    brandColor: "#7952b3",
    iconType: "brand",
    usedInProjects: ["Frontend Apps"],
  },

  // Backend
  {
    number: 13,
    symbol: "No",
    name: "Node.js",
    category: "Backend",
    description: "Event-driven asynchronous I/O runtime powering scalable server APIs.",
    brandColor: "#339933",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "CoderZap"],
  },
  {
    number: 14,
    symbol: "Ex",
    name: "Express.js",
    category: "Backend",
    description: "Minimalist web framework for modular RESTful routing and middleware.",
    brandColor: "#000000",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "CoderZap"],
  },
  {
    number: 15,
    symbol: "Fa",
    name: "FastAPI",
    category: "Backend",
    description: "High-speed asynchronous Python API framework with automatic OpenAPI docs.",
    brandColor: "#009688",
    iconType: "brand",
    usedInProjects: ["FP&A Insights"],
  },
  {
    number: 16,
    symbol: "Jw",
    name: "JWT Auth",
    category: "Backend",
    description: "Stateless JSON Web Token authentication with refresh token strategies.",
    brandColor: "#d63aff",
    iconType: "concept",
    usedInProjects: ["CareerMitra", "FP&A Insights"],
  },
  {
    number: 17,
    symbol: "Rb",
    name: "RBAC",
    category: "Backend",
    description: "Fine-grained Role-Based Access Control protecting enterprise endpoints.",
    brandColor: "#4f46e5",
    iconType: "concept",
    usedInProjects: ["CareerMitra", "FP&A Insights"],
  },
  {
    number: 18,
    symbol: "Sw",
    name: "Swagger/OpenAPI",
    category: "Backend",
    description: "Interactive API specification, schema documentation, and live testing.",
    brandColor: "#85ea2d",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "FastAPI APIs"],
  },

  // Databases & Cloud
  {
    number: 19,
    symbol: "Db",
    name: "MongoDB",
    category: "Databases & Cloud",
    description: "Document database with aggregation pipelines and indexing for high query volume.",
    brandColor: "#47a248",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "CoderZap"],
  },
  {
    number: 20,
    symbol: "Fb",
    name: "Firebase (FCM)",
    category: "Databases & Cloud",
    description: "Cloud messaging, push notifications, and automated user alerting workflows.",
    brandColor: "#ffca28",
    iconType: "brand",
    usedInProjects: ["CareerMitra"],
  },
  {
    number: 21,
    symbol: "Dk",
    name: "Docker",
    category: "Databases & Cloud",
    description: "Containerization of frontend, backend services, and isolated runtimes.",
    brandColor: "#2496ed",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "Production Deployments"],
  },
  {
    number: 22,
    symbol: "Ng",
    name: "Nginx",
    category: "Databases & Cloud",
    description: "Reverse proxy, load balancing, SSL termination, and static asset caching.",
    brandColor: "#009639",
    iconType: "brand",
    usedInProjects: ["CoderZap", "Linux VPS"],
  },
  {
    number: 23,
    symbol: "Lx",
    name: "Linux VPS",
    category: "Databases & Cloud",
    description: "Server administration, process monitoring (PM2), and production releases.",
    brandColor: "#fcc624",
    iconType: "brand",
    usedInProjects: ["CoderZap"],
  },

  // Tools & Concepts
  {
    number: 24,
    symbol: "Gt",
    name: "Git & GitHub",
    category: "Tools",
    description: "Version control, trunk branching strategies, code reviews, and CI/CD.",
    brandColor: "#f05032",
    iconType: "brand",
    usedInProjects: ["All Projects"],
  },
  {
    number: 25,
    symbol: "Pm",
    name: "Postman",
    category: "Tools",
    description: "API automated testing collections, mock servers, and environment profiles.",
    brandColor: "#ff6c37",
    iconType: "brand",
    usedInProjects: ["CareerMitra", "FastAPI APIs"],
  },
  {
    number: 26,
    symbol: "Fg",
    name: "Figma",
    category: "Tools",
    description: "Design handoff inspection, design systems, and responsive layout prototyping.",
    brandColor: "#f24e1e",
    iconType: "brand",
    usedInProjects: ["FP&A Insights", "CareerMitra"],
  },
  {
    number: 27,
    symbol: "Ai",
    name: "AI Integration",
    category: "Core Concepts",
    description: "Integrating intelligent enterprise analytics, predictive workflows, and LLM APIs.",
    brandColor: "#10a37f",
    iconType: "concept",
    usedInProjects: ["FP&A Insights"],
  },
  {
    number: 28,
    symbol: "Se",
    name: "SSR & SEO",
    category: "Core Concepts",
    description: "Dynamic XML sitemaps, structured schema data, and optimal Lighthouse scores.",
    brandColor: "#2563eb",
    iconType: "concept",
    usedInProjects: ["CareerMitra", "CoderZap"],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "careermitra",
    index: "01",
    title: "CareerMitra",
    kicker: "Scalable Career & Job Discovery Platform",
    subtitle: "Full-Stack Enterprise Portal",
    description:
      "A high-throughput full-stack career platform delivering government job notifications, internships, skill development resources, and personalized opportunities. Features a dedicated Admin CMS with virtualization, JWT/RBAC security, and automated push notifications.",
    features: [
      "Dynamic job listings, internships & learning resources API with MongoDB aggregation",
      "Robust Admin CMS with virtualization, pagination and efficient heavy-data rendering",
      "Automated job alerts & push notifications with Firebase Cloud Messaging (FCM)",
      "Server-side rendering (SSR), dynamic XML sitemaps, and search optimization",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "Docker", "Swagger/OpenAPI"],
    liveUrl: "https://careermitra.in/",
    stats: [
      { label: "Architecture", value: "SSR + REST" },
      { label: "Security", value: "JWT + RBAC" },
      { label: "Deployment", value: "Dockerized" },
    ],
    uiType: "careermitra",
  },
  {
    id: "fpa-insights",
    index: "02",
    title: "FP&A Insights",
    kicker: "AI-Powered Enterprise Financial Analytics",
    subtitle: "Enterprise Business Intelligence",
    description:
      "A scalable business intelligence and financial platform delivering automated insights for P&L, Cash Flow, Balance Sheets, and AR/AP forecasting. Built with API-first FastAPI microservices, GSAP animation orchestration, and strict RBAC.",
    features: [
      "Interactive financial dashboards: P&L, Cash Flow, Balance Sheet & AR/AP forecasting",
      "API-first architecture integrated seamlessly with Python FastAPI microservices",
      "Reusable component library ensuring design consistency across multi-tenant modules",
      "Fluid animated charts and telemetry data using GSAP and Framer Motion",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "FastAPI", "Python", "Redux.js", "GSAP", "Framer Motion"],
    liveUrl: "https://www.fpnainsights.com/",
    stats: [
      { label: "Engine", value: "FastAPI + AI" },
      { label: "Domain", value: "FinTech BI" },
      { label: "Animation", value: "GSAP 60fps" },
    ],
    uiType: "fpa-insights",
  },
  {
    id: "coderzap",
    index: "03",
    title: "CoderZap",
    kicker: "Developer Education Platform (coderzap.com)",
    subtitle: "Independent Tech Platform",
    description:
      "An India-focused developer education platform publishing comprehensive tutorials and learning content for software engineers. Self-hosted and orchestrated from scratch on a Linux VPS with Nginx reverse proxy and production PM2 management.",
    features: [
      "Founded and built end-to-end for Indian developer community and learners",
      "Server-rendered technical articles, interactive code snippets, and fast indexing",
      "Deployed and maintained on a Linux VPS with Nginx load balancing and SSL",
      "High performance, sub-second load times, and custom content management pipeline",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Nginx", "Linux VPS"],
    liveUrl: "https://coderzap.com",
    stats: [
      { label: "Hosting", value: "Linux VPS" },
      { label: "Web Server", value: "Nginx Proxy" },
      { label: "Focus", value: "Dev Education" },
    ],
    uiType: "coderzap",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "sootradhara",
    period: "Sep 2025 – Present",
    role: "Full-Stack Developer",
    company: "Sootradhara Ventures Private Limited",
    location: "Hyderabad, India (On-site)",
    workType: "Full-Time",
    projectFocus: "Project: CareerMitra – Scalable Career & Job Discovery Platform",
    description: [
      "Developed a full-stack career platform delivering government job notifications, internships, skill development resources, announcements and personalized career opportunities.",
      "Built responsive UIs and dashboards with Next.js, TypeScript and Tailwind CSS, focusing on reusable components, performance and SEO.",
      "Designed and developed RESTful APIs with Node.js, Express.js, TypeScript and MongoDB to manage job listings, internships, learning resources and user profiles.",
      "Implemented JWT authentication, role-based access control (RBAC), request validation and API documentation with Swagger/OpenAPI.",
      "Integrated Firebase Cloud Messaging and automated email workflows for job alerts, push notifications and scheduled user communications.",
      "Built an Admin CMS to manage job listings, internships, educational resources, announcements and platform content.",
      "Optimized data-heavy admin interfaces using pagination, virtualization and efficient rendering techniques.",
      "Improved search visibility through server-side rendering (SSR), dynamic XML sitemaps and SEO-friendly page structures.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "Docker", "Swagger/OpenAPI"],
    type: "experience",
  },
  {
    id: "spl-tech",
    period: "Jul 2022 – Aug 2025",
    role: "Frontend Developer",
    company: "Spl Technologies",
    location: "Hyderabad, India (Remote)",
    workType: "Remote",
    projectFocus: "Project: FP&A Insights – AI-powered enterprise financial analytics platform",
    description: [
      "Developed scalable front-end systems using React.js, Next.js and Tailwind CSS for business and financial applications.",
      "Delivered FP&A Insights, an AI-powered enterprise financial analytics platform, working closely with backend teams on API-first features.",
      "Built dashboards for P&L, Cash Flow, Balance Sheet, AR/AP, budgeting and forecasting.",
      "Implemented role-based access control (RBAC) and integrated FastAPI services for business and financial modules.",
      "Designed reusable component libraries, improving development speed and UI consistency across modules.",
      "Built engaging animations with GSAP and Framer Motion and optimized performance through responsive layouts and code optimization.",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "FastAPI", "Python", "Redux.js", "GSAP", "Framer Motion"],
    type: "experience",
  },
  {
    id: "kakatiya-edu",
    period: "2021",
    role: "Bachelor of Science (B.Sc.) in Computer Science",
    company: "Kakatiya University",
    location: "Warangal - Telangana",
    workType: "Graduation",
    description: [
      "Completed degree with strong core foundations in computer science, software engineering principles, algorithms, data structures, and database systems.",
    ],
    tech: ["Computer Science", "Algorithms", "Data Structures", "DBMS", "Software Engineering"],
    type: "education",
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "exp-years",
    index: "01 / 04",
    platform: "Professional Track",
    label: "Production Experience",
    metricNumber: 4,
    metricSuffix: "+",
    caption: "Years of Full-Stack Web Development",
    detail: "Building scalable production systems across frontend, backend and database layers.",
    brandColor: "#0d0d0d",
  },
  {
    id: "platforms-delivered",
    index: "02 / 04",
    platform: "Enterprise Systems",
    label: "Flagship Platforms",
    metricNumber: 3,
    metricSuffix: "+",
    caption: "Production Platforms Engineered",
    detail: "CareerMitra, FP&A Insights (AI Financial BI), and CoderZap platform.",
    brandColor: "#3178c6",
  },
  {
    id: "tech-mastery",
    index: "03 / 04",
    platform: "Full-Stack Stack",
    label: "Core Technologies",
    metricNumber: 28,
    metricSuffix: "+",
    caption: "Languages, Frameworks & Cloud Tools",
    detail: "MERN Stack, Next.js, TypeScript, Python, FastAPI, MongoDB, Docker, and Nginx.",
    brandColor: "#339933",
  },
  {
    id: "education-degree",
    index: "04 / 04",
    platform: "Academic Foundation",
    label: "B.Sc. Computer Science",
    metricNumber: 100,
    metricSuffix: "%",
    caption: "Kakatiya University (2021)",
    detail: "Graduated with core computer science and software engineering fundamentals.",
    brandColor: "#7952b3",
  },
];
