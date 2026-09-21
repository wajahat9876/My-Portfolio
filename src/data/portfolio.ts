export type Project = {
  id: string;
  name: string;
  category: string;
  stack: string[];
  highlights: string[];
  screenshot?: string;
  github?: string;
  demo?: string;
  /** Frame used to present the screenshot: browser chrome vs. phone body. */
  frame?: "browser" | "phone";
  /** Address shown in the mock browser bar. */
  domain?: string;
  /** Tailwind gradient stops for the banner backdrop behind the frame. */
  accent?: string;
  /** Longer write-up shown on the project detail page. */
  overview?: string;
  /** What was actually built, as bullets on the detail page. */
  contributions?: string[];
  /** Extra screenshots for the detail page gallery. Empty = placeholders. */
  gallery?: string[];
  /** Demo video, detail page only. Needs a poster frame beside it. */
  video?: { src: string; poster: string };
};

export const personalInfo = {
  name: "Wajahat Hassan",
  title: "Full-Stack Developer — Web, Mobile & Backend",
  email: "wajahathassan9876@gmail.com",
  phone: "+923043630295",
  github: "https://github.com/wajahat9876",
  linkedin: "https://linkedin.com/in/wajahat-hassan-321aa2264",
  summary:
    "Results-driven Full-Stack Developer with 4+ years of experience shipping web applications, cross-platform mobile apps, and the backends behind them. Proven expertise in React, Next.js, React Native, TypeScript, Node.js, Redux Toolkit, Expo, Supabase, and Firebase. Comfortable owning a feature end to end — API and database design, responsive UI, automated and manual QA, and release to production on Vercel, the App Store, and Google Play. Works fluently with AI-assisted tooling such as Claude Code and Cursor to move faster without giving up code quality.",
};

export const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Redux Toolkit",
      "Expo Router",
      "Node.js",
      "SQL",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
      "Component Architecture",
      "RESTful APIs",
      "SEO-Friendly UI",
    ],
  },
  {
    title: "Mobile & UI Development",
    skills: [
      "React Navigation",
      "Modular Architecture",
      "Reanimated",
      "Gesture Handler",
      "FlashList",
      "Skia",
      "Vision Camera",
      "Cross-Platform UI",
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express",
      "REST API Design",
      "Supabase",
      "PostgreSQL",
      "Firebase",
      "Edge Functions",
      "JWT Authentication",
      "Row Level Security",
      "Secure Storage (MMKV)",
    ],
  },
  {
    title: "Testing & QA (SQA)",
    skills: [
      "Manual QA",
      "Test Case Design",
      "Regression Testing",
      "Jest",
      "React Testing Library",
      "API Testing (Postman)",
      "Cross-Device Testing",
      "Bug Reporting & Triage",
    ],
  },
  {
    title: "AI-Assisted Development",
    skills: [
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Prompt Engineering",
      "AI Code Review",
      "LLM API Integration",
    ],
  },
  {
    title: "DevOps & Deployment",
    skills: [
      "Git/GitHub",
      "CI/CD",
      "Vercel",
      "EAS Build & Submit",
      "OTA Updates (Expo)",
      "App Store & Play Store Releases",
      "Environment Management",
      "RevenueCat",
      "In-App Purchases",
      "Push Notifications",
    ],
  },
  {
    title: "Remote & Soft Skills",
    skills: [
      "Slack",
      "Zoom",
      "Trello",
      "Jira",
      "Agile Workflow",
      "Cross-Timezone Coordination",
      "Time Management",
    ],
  },
];

export const experience = [
  {
    role: "Mobile App Engineer",
    company: "Anemoia Pvt Ltd",
    location: "Wah Cantt, Pakistan",
    period: "Feb 2023 – Present",
    highlights: [
      "Led development of 5+ scalable React Native apps, achieving 30% faster load times with Hermes and Flipper optimizations.",
      "Built responsive React websites and dashboards for fintech products with modern UI, routing, and API integrations.",
      "Implemented JWT & biometric authentication, enhancing security and reducing login failures by 25%.",
      "Built reusable UI components with TypeScript and Styled Components, reducing duplicate code by 40%.",
      "Integrated Supabase, Firebase, and REST APIs for seamless real-time data synchronization.",
      "Conducted code reviews, debugging, and mentoring, resulting in a 20% reduction in production bugs.",
      "Collaborated with remote teams across multiple time zones for consistent feature delivery.",
    ],
  },
  {
    role: "Associate App Engineer",
    company: "Spire Host SMC-Private",
    location: "Islamabad, Pakistan",
    period: "Dec 2021 – Feb 2023",
    highlights: [
      "Assisted in development and deployment of mobile apps and React web interfaces, contributing to UI enhancements and API integrations.",
      "Gained expertise in state management, debugging, and CI/CD workflows.",
      "Collaborated on troubleshooting and performance optimizations, improving responsiveness by 15%.",
    ],
  },
];

/** Mobile apps — anything presented in a phone frame. */
export const appProjects = () => projects.filter((p) => p.frame === "phone");

/** Web projects — anything presented in browser chrome. */
export const webProjects = () => projects.filter((p) => p.frame !== "phone");

export const projects: Project[] = [
  {
    id: "ecc",
    name: "Easy Cash Card (ECC)",
    category: "Fintech Website",
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
    ],
    highlights: [
      "Corporate fintech website with business account onboarding, login/signup flows, and product showcase.",
      "Responsive React UI with secure authentication and multi-currency business account features.",
    ],
    screenshot: "/projects/screenshots/ecc.png",
    frame: "browser",
    domain: "easycashcard.com",
    accent: "from-red-500/25 via-rose-600/10 to-transparent",
  },
  {
    id: "easy-e-money",
    name: "Easy E Money",
    category: "Fintech App",
    stack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Expo Router",
      "React Navigation",
    ],
    highlights: [
      "Digital transactions with multi-currency management and real-time push notifications.",
      "OTP & biometric login, reducing user login issues by 30%.",
    ],
    screenshot: "/projects/screenshots/easy-e-money.jpg",
    frame: "phone",
    accent: "from-blue-500/25 via-indigo-600/10 to-transparent",
    github: "https://github.com/anemoia-dev/easyemoney-app-v2/tree/sdk_54",
  },
  {
    id: "lava-e-remit",
    name: "Lava e Remit",
    category: "Fintech Website",
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "RESTful APIs",
      "Responsive UI",
    ],
    highlights: [
      "International money transfer platform with live currency conversion and transfer calculator.",
      "Built with React for fast, responsive UX across send money, tracking, and contact flows.",
    ],
    screenshot: "/projects/screenshots/lava-e-remit.png",
    frame: "browser",
    domain: "lavaeremit.com",
    accent: "from-orange-500/25 via-amber-600/10 to-transparent",
  },
  {
    id: "muslim-hearts",
    name: "Muslim Hearts",
    category: "Dating App",
    stack: [
      "React Native",
      "Supabase",
      "Redux Toolkit",
      "Expo Router",
      "Reanimated",
      "FlashList",
      "Vision Camera",
    ],
    highlights: [
      "Cross-platform matchmaking with secure onboarding, messaging, subscriptions, and trust flows.",
      "Supabase backend and RevenueCat monetization, boosting in-app revenue by 10%.",
    ],
    screenshot: "/projects/screenshots/muslim-hearts.jpg",
    frame: "phone",
    accent: "from-rose-500/25 via-pink-600/10 to-transparent",
    gallery: [
      "/projects/gallery/muslim-hearts/discover.jpg",
      "/projects/gallery/muslim-hearts/compatibility.jpg",
      "/projects/gallery/muslim-hearts/signature.jpg",
      "/projects/gallery/muslim-hearts/nudge.jpg",
      "/projects/gallery/muslim-hearts/filters.jpg",
      "/projects/gallery/muslim-hearts/verification.jpg",
    ],
  },
  {
    id: "onetrionix",
    name: "OneTronix",
    category: "Solar Energy App",
    stack: [
      "React Native",
      "Node.js",
      "TypeScript",
      "Redux Toolkit",
      "React Navigation",
    ],
    highlights: [
      "Solar monitoring with real-time energy analytics and interactive animated UI.",
      "Secure login and settings management across iOS and Android.",
    ],
    screenshot: "/projects/screenshots/onetrionix.jpg",
    frame: "phone",
    accent: "from-emerald-500/25 via-teal-600/10 to-transparent",
    github: "https://github.com/wajahat9876/OneTronix/tree/demo",
  },
  {
    id: "flappy-bird",
    name: "Flappy Bird",
    category: "Game App",
    stack: ["React Native", "Expo", "TypeScript", "Reanimated", "Gesture Handler"],
    highlights: [
      "Classic Flappy Bird gameplay rebuilt with smooth animations and responsive touch controls.",
      "Cross-platform mobile game with score tracking and polished UI.",
    ],
    screenshot: "/projects/screenshots/flappy-bird.jpg",
    frame: "phone",
    accent: "from-sky-500/25 via-cyan-600/10 to-transparent",
    github: "https://github.com/wajahat9876/flappy-bird",
    overview:
      "A faithful rebuild of Flappy Bird in React Native, written to explore game-loop timing and gesture-driven physics on mobile. The bird, pipes, parallax ground and collision detection all run on the UI thread through Reanimated, so the frame rate holds steady while JavaScript handles scoring and game state.",
    contributions: [
      "Built the game loop and gravity/flap physics with Reanimated worklets, keeping animation off the JS thread.",
      "Implemented pixel-accurate collision detection between the bird and procedurally spawned pipe pairs.",
      "Added score tracking, a Get Ready state, and game-over/restart flow.",
      "Recreated the original sprite art and parallax scrolling background for an authentic feel.",
    ],
    video: {
      src: "/projects/videos/flappy-bird.mp4",
      poster: "/projects/videos/flappy-bird-poster.jpg",
    },
  },
];

export const education = [
  {
    degree: "BS Computer Science",
    institution: "University of Wah, Pakistan",
    period: "May 2021",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  /** Thumbnail of the certificate's first page. */
  image: string;
  /** The original PDF, opened when the card is clicked. */
  pdf: string;
  /** Issuer's public verification page, when one exists. */
  verifyUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Cybersecurity",
    issuer: "Asian Development Bank Institute (ADBI)",
    date: "September 2026",
    credentialId: "195098-178-987-1642",
    image: "/certificates/adbi-cybersecurity.jpg",
    pdf: "/certificates/adbi-cybersecurity.pdf",
    verifyUrl:
      "https://elearning-adbi.org/certificate-verifier/?&code=195098-178-987-1642",
  },
  {
    title: "Critical Thinking in the AI Era",
    issuer: "HP LIFE — HP Foundation",
    date: "June 2026",
    credentialId: "72d80ace-45cf-4b40-abea-3324e809e2e2",
    image: "/certificates/hp-life-critical-thinking-ai.jpg",
    pdf: "/certificates/hp-life-critical-thinking-ai.pdf",
  },
];

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Apps & Websites", value: "5+" },
  { label: "Faster Load Times", value: "30%" },
  { label: "Fewer Production Bugs", value: "20%" },
];
