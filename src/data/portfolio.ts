export type Project = {
  id: string;
  name: string;
  category: string;
  stack: string[];
  highlights: string[];
  screenshot?: string;
  video?: string;
  github?: string;
  demo?: string;
};

export const personalInfo = {
  name: "Wajahat Hassan",
  title: "React Native Developer",
  email: "wajahathassan9876@gmail.com",
  phone: "+923043630295",
  github: "https://github.com/wajahat9876",
  linkedin: "https://linkedin.com/in/wajahat-hassan-321aa2264",
  summary:
    "Results-driven React Native Developer with 4+ years of experience designing, developing, and deploying scalable, high-performance mobile applications. Proven expertise in React Native, TypeScript, Redux Toolkit, Expo, Supabase, Firebase, and RevenueCat. Skilled at optimizing app performance, implementing secure authentication, and collaborating with remote, cross-functional teams. Passionate about delivering user-centric, maintainable, and high-performing mobile solutions that drive engagement and business outcomes.",
};

export const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      "React Native",
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Redux Toolkit",
      "Expo Router",
      "Node.js",
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
    title: "Backend & Services",
    skills: [
      "Node.js",
      "Supabase",
      "Firebase",
      "RESTful APIs",
      "JWT Authentication",
      "Secure Storage (MMKV)",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git/GitHub",
      "CI/CD",
      "OTA Updates (Expo)",
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
      "Assisted in development and deployment of mobile apps, contributing to UI enhancements and API integrations.",
      "Gained expertise in state management, debugging, and CI/CD workflows.",
      "Collaborated on troubleshooting and performance optimizations, improving responsiveness by 15%.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ecc",
    name: "Easy Cash Card (ECC)",
    category: "Fintech App",
    stack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Expo Router",
      "Styled Components",
    ],
    highlights: [
      "Multi-currency transactions with JWT, OTP, and biometric authentication.",
      "Real-time updates with optimized navigation, reducing transaction time by 20%.",
    ],
    screenshot: "/projects/screenshots/ecc.png",
    demo: "https://play.google.com/store/apps/details?id=com.ecc.easycashcard",
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
    video: "/projects/videos/easy-e-money.mp4",
    github: "https://github.com/anemoia-dev/easyemoney-app-v2/tree/sdk_54",
  },
  {
    id: "lava-e-remit",
    name: "Lava e Remit",
    category: "Fintech App",
    stack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Expo Router",
      "React Navigation",
    ],
    highlights: [
      "Real-time money transfer and currency exchange, increasing user retention by 15%.",
      "Push notifications and transaction history tracking for better engagement.",
    ],
    screenshot: "/projects/screenshots/lava-e-remit.png",
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
    video: "/projects/videos/muslim-hearts.mp4",
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
    video: "/projects/videos/onetrionix.mp4",
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
    video: "/projects/videos/flappy-bird.mp4",
    github: "https://github.com/wajahat9876/flappy-bird",
  },
];

export const education = [
  {
    degree: "BS Computer Science",
    institution: "University of Wah, Pakistan",
    period: "May 2021",
  },
];

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Apps Delivered", value: "6+" },
  { label: "Performance Gain", value: "60%" },
  { label: "Bug Reduction", value: "40%" },
];
