export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  duration: string;
  mode: string;
  highlights: string[];
  syllabus: { topic: string; description: string }[];
  thumbnail: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "CBSE VI-X Foundation",
    slug: "cbse-foundation",
    category: "CBSE",
    duration: "1 Year",
    mode: "Classroom & Online",
    highlights: [
      "NCERT-focused curriculum",
      "Regular assessments & doubt sessions",
      "Board exam preparation",
      "Strong conceptual foundation"
    ],
    syllabus: [
      { topic: "Mathematics", description: "Comprehensive coverage of all CBSE topics" },
      { topic: "Science", description: "Physics, Chemistry, Biology fundamentals" },
      { topic: "English & Hindi", description: "Language proficiency and literature" },
      { topic: "Social Studies", description: "History, Geography, Civics" }
    ],
    thumbnail: "/courses/cbse-course.jpg",
    description: "Build a strong academic foundation for CBSE students from Class VI to X with expert faculty and personalized attention."
  },
  {
    id: "2",
    title: "CBSE XI-XII PCM/PCB",
    slug: "cbse-11-12",
    category: "CBSE",
    duration: "2 Years",
    mode: "Classroom",
    highlights: [
      "Board + competitive exam preparation",
      "Experienced faculty from top institutions",
      "Regular tests & performance tracking",
      "Career counselling sessions"
    ],
    syllabus: [
      { topic: "Physics", description: "Mechanics, Thermodynamics, Modern Physics" },
      { topic: "Chemistry", description: "Physical, Organic, Inorganic Chemistry" },
      { topic: "Mathematics/Biology", description: "Advanced concepts for board excellence" }
    ],
    thumbnail: "/courses/cbse-course.jpg",
    description: "Excel in Class XI & XII boards while preparing for competitive exams. Dual advantage for future success."
  },
  {
    id: "3",
    title: "JEE Main & Advanced",
    slug: "jee-preparation",
    category: "JEE",
    duration: "2 Years / 1 Year",
    mode: "Classroom & Test Series",
    highlights: [
      "IIT graduate faculty",
      "Daily practice problems & DPPs",
      "Full-length mock tests",
      "Rank improvement guarantee"
    ],
    syllabus: [
      { topic: "Physics", description: "Complete JEE syllabus with problem-solving" },
      { topic: "Chemistry", description: "Conceptual clarity + numerical practice" },
      { topic: "Mathematics", description: "Advanced problem solving techniques" }
    ],
    thumbnail: "/courses/jee-course.jpg",
    description: "Crack JEE Main & Advanced with expert guidance, rigorous practice, and proven strategies. Join our success story."
  },
  {
    id: "4",
    title: "NEET Preparation",
    slug: "neet-preparation",
    category: "NEET",
    duration: "2 Years / 1 Year",
    mode: "Classroom",
    highlights: [
      "MBBS/BDS entrance experts",
      "NCERT mastery program",
      "Weekly tests & revision classes",
      "Past year paper analysis"
    ],
    syllabus: [
      { topic: "Physics", description: "Medical entrance focused topics" },
      { topic: "Chemistry", description: "Organic, Inorganic, Physical Chemistry" },
      { topic: "Biology", description: "Botany & Zoology in-depth coverage" }
    ],
    thumbnail: "/courses/neet-course.jpg",
    description: "Comprehensive NEET coaching to secure your seat in top medical colleges. Expert faculty, proven results."
  },
  {
    id: "5",
    title: "NDA (Army/Navy/Air Force)",
    slug: "nda-preparation",
    category: "Defence",
    duration: "1 Year",
    mode: "Classroom",
    highlights: [
      "Written exam + SSB interview prep",
      "Physical fitness training",
      "Personality development sessions",
      "Ex-servicemen as mentors"
    ],
    syllabus: [
      { topic: "Mathematics", description: "Algebra, Trigonometry, Calculus" },
      { topic: "GAT", description: "English, GK, Physics, Chemistry, History, Geography" },
      { topic: "SSB Interview", description: "Psychology, GTO, Interview techniques" }
    ],
    thumbnail: "/courses/nda-course.jpg",
    description: "Serve the nation with pride. Complete NDA preparation including written exam and SSB interview training."
  },
  {
    id: "6",
    title: "IAS/IPS (UPSC Civil Services)",
    slug: "ias-ips-preparation",
    category: "UPSC",
    duration: "1-2 Years",
    mode: "Classroom & Online",
    highlights: [
      "Prelims + Mains + Interview prep",
      "Current affairs daily classes",
      "Answer writing practice",
      "Mock interviews by retired officers"
    ],
    syllabus: [
      { topic: "General Studies", description: "Indian Polity, Economy, Geography, History" },
      { topic: "CSAT", description: "Aptitude, Reasoning, Comprehension" },
      { topic: "Optional Subjects", description: "Guidance for subject selection" },
      { topic: "Essay & Ethics", description: "Answer writing & personality development" }
    ],
    thumbnail: "/courses/jee-course.jpg",
    description: "Lead India's governance. Comprehensive UPSC coaching with experienced faculty and structured curriculum."
  },
  {
    id: "7",
    title: "CLAT (Law Entrance)",
    slug: "clat-preparation",
    category: "Law",
    duration: "1 Year",
    mode: "Classroom",
    highlights: [
      "NLU entrance specialists",
      "Legal reasoning & aptitude",
      "Current affairs focus",
      "Mock tests & performance analysis"
    ],
    syllabus: [
      { topic: "Legal Reasoning", description: "Principles, facts, and legal knowledge" },
      { topic: "Logical Reasoning", description: "Critical thinking & analysis" },
      { topic: "English", description: "Comprehension, grammar, vocabulary" },
      { topic: "GK & Current Affairs", description: "Legal, national, international affairs" }
    ],
    thumbnail: "/courses/cbse-course.jpg",
    description: "Pursue law from top National Law Universities. Expert CLAT coaching with comprehensive study material."
  },
  {
    id: "8",
    title: "SAT (Study Abroad)",
    slug: "sat-preparation",
    category: "International",
    duration: "3-6 Months",
    mode: "Classroom & Online",
    highlights: [
      "US college admission experts",
      "Comprehensive test strategies",
      "Essay writing workshops",
      "University application guidance"
    ],
    syllabus: [
      { topic: "Evidence-Based Reading", description: "Reading comprehension & analysis" },
      { topic: "Writing & Language", description: "Grammar, rhetoric, editing skills" },
      { topic: "Mathematics", description: "Problem solving, data analysis, algebra" },
      { topic: "Essay (Optional)", description: "Analytical writing practice" }
    ],
    thumbnail: "/courses/jee-course.jpg",
    description: "Study at top US universities. Complete SAT preparation with proven strategies and personalized guidance."
  },
  {
    id: "9",
    title: "IELTS (Study/Work Abroad)",
    slug: "ielts-preparation",
    category: "International",
    duration: "2-3 Months",
    mode: "Classroom",
    highlights: [
      "British Council certified trainers",
      "Band 8+ achievers as faculty",
      "Speaking practice sessions",
      "Writing task corrections"
    ],
    syllabus: [
      { topic: "Listening", description: "Academic & general training modules" },
      { topic: "Reading", description: "Skimming, scanning, comprehension" },
      { topic: "Writing", description: "Task 1 & 2 with expert feedback" },
      { topic: "Speaking", description: "Interview preparation & fluency practice" }
    ],
    thumbnail: "/courses/cbse-course.jpg",
    description: "Achieve your dream IELTS score for study or immigration. Expert coaching with personalized attention."
  }
];
