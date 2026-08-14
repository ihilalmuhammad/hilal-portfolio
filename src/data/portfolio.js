// Central Portfolio Configuration & Personal Information
// Easily update your profile, projects, skills, education, and links here.

export const personalInfo = {
  name: "Hilal Muhammad",
  shortName: "Hilal",
  title: "Flutter Developer | Software Engineering Graduate",
  location: "Charsadda, KPK, Pakistan",
  phone: "+92 325 9397651",
  email: "ihilalmuhammad44@gmail.com",
  github: "https://github.com/ihilalmuhammad",
  whatsappNumber: "923259397651",
  whatsappMessage: "Hello Hilal, I found your portfolio and would like to discuss an opportunity.",
  cvPath: "/assets/Hilal-Muhammad-CV.pdf",
  bio: "I recently completed my BS Software Engineering from Riphah International University, Islamabad. I have practical experience working on Flutter mobile applications, including Sportify and Edovra. I use AI-assisted development tools to help with coding, debugging, understanding unfamiliar concepts, and improving application features. My current goal is to strengthen my independent development skills through real-world experience, mentorship, teamwork, and professional software development.",
  heroText: "Software Engineering graduate with practical experience in Flutter mobile application development and AI-assisted development. Currently seeking a Flutter Developer Internship or Junior Mobile Developer opportunity where I can learn, contribute, and grow with an experienced development team.",
  availability: "Open to Flutter Internship / Junior Developer Opportunities"
};

export const formConfig = {
  // Free form submission endpoint using FormSubmit (no secret API keys needed)
  // To receive form messages directly to your email, update the address below.
  endpoint: "https://formsubmit.co/ihilalmuhammad44@gmail.com",
  useService: true // Set to false if you want a local feedback toast without sending HTTP request
};

export const quickStats = [
  { label: "Degree", value: "BS Software Eng." },
  { label: "University", value: "Riphah Int. Univ." },
  { label: "CGPA", value: "3.90 / 4.00" },
  { label: "Scholarship", value: "Fully Funded" },
];

export const skillsData = {
  mobile: {
    title: "Mobile Development",
    description: "Building responsive, cross-platform mobile apps",
    skills: ["Flutter", "Dart", "Android Development"]
  },
  backend: {
    title: "Backend & Database",
    description: "Familiar with cloud services and database integrations",
    skills: ["Firebase Authentication", "Cloud Firestore", "Firebase Storage", "Supabase", "REST APIs"]
  },
  tools: {
    title: "Tools & IDEs",
    description: "Essential development environment and version control",
    skills: ["Git", "GitHub", "VS Code", "Android Studio"]
  },
  development: {
    title: "Development Practices",
    description: "Core software engineering workflows and AI assistance",
    skills: ["UI Development", "Responsive UI", "Debugging", "Testing", "API Integration", "Database Integration", "AI-Assisted Development"]
  }
};

export const projectsData = [
  {
    id: "sportify",
    title: "Sportify",
    subtitle: "Sports & Event Management Mobile Application",
    role: "Flutter Developer / Project Contributor",
    description: "Sportify is a sports and event management application developed with Flutter. I contributed to mobile UI development, authentication, role-based functionality, Firebase/Firestore integration, booking functionality, testing, and debugging.",
    detailedDescription: "Designed and implemented responsive mobile UI screens for sports event organization and stadium bookings. Built role-based navigation for Participants, Event Organizers, and Stadium Owners with real-time Firebase Cloud Firestore data syncing.",
    features: [
      "User authentication",
      "Role-based functionality (Participant, Organizer, Owner)",
      "Stadium booking",
      "Event management",
      "Firebase & Firestore integration",
      "Responsive mobile UI",
      "Testing and debugging"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Supabase", "Git/GitHub"],
    image: null, // Replace with '/assets/projects/sportify.png' when screenshots are available
    liveUrl: null, // "Project details available on request"
    githubUrl: null,
    statusText: "Project details available on request"
  },
  {
    id: "edovra",
    title: "Edovra",
    subtitle: "Educational Mobile Application",
    role: "Developer / Project Contributor",
    description: "Edovra is an educational mobile application where I contributed to application features, UI components, testing, debugging, and application maintenance.",
    detailedDescription: "Published on the Google Play Store. Developed dynamic UI components for interactive learning sessions, conducted extensive bug fixing across target device screen sizes, and assisted with continuous app updates and maintenance.",
    features: [
      "Educational features & dynamic UI",
      "Interactive component design",
      "Mobile app debugging & testing",
      "App store maintenance & performance updates"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
    image: null, // Replace with '/assets/projects/edovra.png' when screenshots are available
    playStoreUrl: "", // Add your real Play Store link here e.g. "https://play.google.com/store/apps/details?id=..."
    isPublishedOnPlayStore: true
  }
];

export const educationData = [
  {
    degree: "BS Software Engineering",
    institution: "Riphah International University, Islamabad",
    period: "2022 – 2026",
    grade: "CGPA: 3.90/4.00",
    badge: "Fully Funded Scholarship",
    highlights: [
      "Strong foundation in Mobile Application Development, Software Architecture, and Agile practices.",
      "Achieved high academic standing (CGPA 3.90) under a merit-based Fully Funded Scholarship."
    ]
  },
  {
    degree: "FSc (Pre-Engineering)",
    institution: "Spring Field College, Umarzai",
    period: "2020 – 2022",
    grade: "Marks: 931 / 1100",
    highlights: [
      "Focused on Advanced Mathematics, Physics, and Chemistry.",
      "Graduated with top academic standing."
    ]
  },
  {
    degree: "Matriculation (Science)",
    institution: "Government Higher Secondary School, Umarzai",
    period: "2018 – 2020",
    grade: "Marks: 853 / 1100",
    highlights: [
      "Core Science and Computer Fundamentals curriculum."
    ]
  }
];

export const opportunitiesData = {
  heading: "Currently Looking For",
  description: "I am currently looking for opportunities where I can start and grow my professional software development career.",
  items: [
    {
      title: "Flutter Developer Internship",
      description: "Hands-on internship role focusing on Flutter UI, state management, API integration, and mobile app features.",
      icon: "Smartphone"
    },
    {
      title: "Junior Flutter Developer",
      description: "Full-time or contract entry-level position contributing to live production mobile codebases.",
      icon: "Code"
    },
    {
      title: "Mobile App Development Internship",
      description: "Opportunity to collaborate with senior developers on Android & cross-platform mobile solutions.",
      icon: "Layers"
    },
    {
      title: "AI-Assisted Software Development",
      description: "Leveraging modern AI developer tools for faster prototyping, code refactoring, and debugging workflows.",
      icon: "Sparkles"
    }
  ]
};
