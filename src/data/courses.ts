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
    title: "IX, X (All Subjects)",
    slug: "ix-x-all-subjects",
    category: "School",
    duration: "1-2 Years",
    mode: "Classroom & Online",
    highlights: [
      "All subjects coaching for classes VIII to X",
      "All major boards (CBSE, ICSE, State Boards)",
      "Mathematics, Science, English, Social Studies",
      "Study materials and practice tests",
      "Doubt-clearing sessions"
    ],
    syllabus: [
      { topic: "Mathematics", description: "Complete syllabus coverage for all boards" },
      { topic: "Science", description: "Physics, Chemistry, Biology fundamentals" },
      { topic: "English", description: "Language proficiency and literature" },
      { topic: "Social Studies", description: "History, Geography, Civics" },
      { topic: "Additional Subjects", description: "As per board requirements" }
    ],
    thumbnail: "/courses/cbse-course.jpg",
    description: "Coaching for classes VIII to X for all subjects all boards. We offer coaching programs for classes VIII to X, covering all subjects, including Mathematics, Science, English, Social Studies, and more. Our curriculum is designed to align with the syllabus of all major boards, including CBSE, ICSE, State Boards, and others. In addition to regular classes, we also provide study materials, practice tests, and doubt-clearing sessions to help students reinforce their learning and perform their best in exams."
  },
  {
    id: "2",
    title: "XI, XII (CBSE)",
    slug: "xi-xii-cbse",
    category: "CBSE",
    duration: "2 Years",
    mode: "Classroom",
    highlights: [
      "Specialized coaching for CBSE board",
      "All major subjects covered",
      "Physics, Chemistry, Mathematics, Biology, English",
      "Strong conceptual foundations",
      "Exam preparation strategies"
    ],
    syllabus: [
      { topic: "Physics", description: "Advanced concepts and problem-solving" },
      { topic: "Chemistry", description: "Physical, Organic, Inorganic Chemistry" },
      { topic: "Mathematics", description: "Calculus, Algebra, Trigonometry" },
      { topic: "Biology", description: "Botany and Zoology comprehensive coverage" },
      { topic: "English", description: "Literature and language skills" }
    ],
    thumbnail: "/courses/cbse-course.jpg",
    description: "Coaching for classes XI, XII for all subjects CBSE board. We offer specialized coaching programs for classes XI, XII (CBSE board) covering all major subjects, including Physics, Chemistry, Mathematics, Biology, English, and more. Our curriculum is designed to align with the CBSE syllabus and focuses on building strong conceptual foundations, problem-solving skills, and exam preparation strategies. In addition to regular classes, we provide study materials, practice tests, and doubt-clearing sessions to help students reinforce their learning and perform their best in board exams."
  },
  {
    id: "3",
    title: "IIT-JEE",
    slug: "iit-jee",
    category: "JEE",
    duration: "2 Years / 1 Year",
    mode: "Classroom & Test Series",
    highlights: [
      "Joint Entrance Examination coaching",
      "Prelims and Mains preparation",
      "Empower aspiring engineers",
      "Knowledge, skills, and confidence building",
      "Intellectual curiosity and critical thinking"
    ],
    syllabus: [
      { topic: "Physics", description: "Mechanics, Thermodynamics, Modern Physics" },
      { topic: "Chemistry", description: "Physical, Organic, Inorganic Chemistry" },
      { topic: "Mathematics", description: "Advanced problem solving techniques" }
    ],
    thumbnail: "/courses/jee-course.jpg",
    description: "Joint Entrance Examination (JEE) coaching for Prelims and Mains. Our mission at DC Classes is simple yet profound: to empower aspiring engineers with the knowledge, skills, and confidence required to crack the JEE exam and secure admission to India's premier engineering institutions. We strive to cultivate a nurturing learning environment that fosters intellectual curiosity, critical thinking, and academic excellence."
  },
  {
    id: "4",
    title: "SAT",
    slug: "sat-preparation",
    category: "International",
    duration: "3-6 Months",
    mode: "Classroom & Online",
    highlights: [
      "SAT practice and preparation",
      "Conducted by College Board",
      "Undergraduate school admission requirement",
      "Standardized examination preparation",
      "Comprehensive test strategies"
    ],
    syllabus: [
      { topic: "Evidence-Based Reading", description: "Reading comprehension and analysis" },
      { topic: "Writing & Language", description: "Grammar, rhetoric, editing skills" },
      { topic: "Mathematics", description: "Problem solving, data analysis, algebra" },
      { topic: "Essay (Optional)", description: "Analytical writing practice" }
    ],
    thumbnail: "/courses/jee-course.jpg",
    description: "SAT practice and preparation conducted by all the College Boards. The SAT is a standardized examination conducted by the College Board, and students applying for admission to undergraduate schools must take it."
  },
  {
    id: "5",
    title: "CLAT",
    slug: "clat-preparation",
    category: "Law",
    duration: "1 Year",
    mode: "Classroom",
    highlights: [
      "Common Law Admission Test preparation",
      "All sections covered",
      "National-level law entrance exam",
      "5-year integrated LLB (UG)",
      "One-year LLM (PG) courses"
    ],
    syllabus: [
      { topic: "Legal Reasoning", description: "Principles, facts, and legal knowledge" },
      { topic: "Logical Reasoning", description: "Critical thinking and analysis" },
      { topic: "English", description: "Comprehension, grammar, vocabulary" },
      { topic: "GK & Current Affairs", description: "Legal, national, international affairs" },
      { topic: "Quantitative Techniques", description: "Mathematics and numerical ability" }
    ],
    thumbnail: "/courses/cbse-course.jpg",
    description: "Common Law Admission Test preparation for all sections. The Common Law Admission Test, also known as CLAT is a national-level law entrance exam that is conducted by the Consortium of NLUs for admission to 5-year integrated LLB (UG) and one-year LLM (PG) courses."
  },
  {
    id: "6",
    title: "IPM",
    slug: "ipm-preparation",
    category: "Management",
    duration: "1 Year",
    mode: "Classroom",
    highlights: [
      "IPM preparation for all sections",
      "All subjects covered",
      "IPMAT entrance exam focus",
      "MBA preparation",
      "Analytical and management knowledge"
    ],
    syllabus: [
      { topic: "Quantitative Ability", description: "Mathematics and numerical reasoning" },
      { topic: "Verbal Ability", description: "English comprehension and grammar" },
      { topic: "Logical Reasoning", description: "Analytical and critical thinking" },
      { topic: "General Awareness", description: "Current affairs and general knowledge" }
    ],
    thumbnail: "/courses/cbse-course.jpg",
    description: "IPM preparation focuses for all sections and subjects. IPMAT is an entrance exam for MBA, hence, it focuses on the analytical and management-focused knowledge."
  },
  {
    id: "7",
    title: "IAS/IPS/HCS",
    slug: "ias-ips-hcs",
    category: "UPSC",
    duration: "1-2 Years",
    mode: "Classroom & Online",
    highlights: [
      "UPSC and state level exam preparation",
      "All subjects covered",
      "Prelims + Mains + Interview prep",
      "Current affairs daily classes",
      "Future leaders development"
    ],
    syllabus: [
      { topic: "General Studies", description: "Indian Polity, Economy, Geography, History" },
      { topic: "CSAT", description: "Aptitude, Reasoning, Comprehension" },
      { topic: "Optional Subjects", description: "Guidance for subject selection" },
      { topic: "Essay & Ethics", description: "Answer writing and personality development" },
      { topic: "Current Affairs", description: "National and international events" }
    ],
    thumbnail: "/courses/jee-course.jpg",
    description: "UPSC and state level exam preparation for all subjects. The UPSC conducts various examinations in accordance with the Rules of examination as notified by the Government of India in a just, fair and impartial manner for making a merit based selection and recommendation of candidates for various Group A and Group B Services of the Govt. of India. At DC Classes, our mission is to empower and inspire individuals to excel in the UPSC examinations and become future leaders of our country. We are committed to providing high-quality coaching, personalized mentorship, and holistic support to our students, ensuring their success in every stage of the UPSC journey."
  },
  {
    id: "8",
    title: "CUET",
    slug: "cuet-preparation",
    category: "University",
    duration: "6-12 Months",
    mode: "Classroom & Online",
    highlights: [
      "Central University Entrance Test preparation",
      "Admission to Central Universities",
      "UG and PG courses",
      "Multiple specializations",
      "National Testing Agency conducted"
    ],
    syllabus: [
      { topic: "Domain Subjects", description: "Subject-specific preparation" },
      { topic: "General Test", description: "General knowledge and aptitude" },
      { topic: "Language Test", description: "English and other languages" },
      { topic: "Current Affairs", description: "National and international events" }
    ],
    thumbnail: "/courses/cbse-course.jpg",
    description: "Central University Entrance Test (CUET), for admission to different programmes of the participating Central Universities. What is the CUET exam? The Common University Entrance Test (CUET) is an entrance exam conducted by National Testing Agency to offer admission to UG and PG courses with several specializations. The number of CUET-participating universities is likely to increase in the years to come."
  },
  {
    id: "9",
    title: "IELTS",
    slug: "ielts-preparation",
    category: "International",
    duration: "2-3 Months",
    mode: "Classroom",
    highlights: [
      "International English Language Testing System",
      "Study, work, or immigrate abroad",
      "High-quality coaching",
      "Overall English proficiency enhancement",
      "Communication skills development"
    ],
    syllabus: [
      { topic: "Listening", description: "Academic and general training modules" },
      { topic: "Reading", description: "Skimming, scanning, comprehension" },
      { topic: "Writing", description: "Task 1 & 2 with expert feedback" },
      { topic: "Speaking", description: "Interview preparation and fluency practice" }
    ],
    thumbnail: "/courses/cbse-course.jpg",
    description: "International English Language Testing System exam preparation. We always tries to empower individuals to achieve their goals of studying, working, or immigrating abroad by helping them excel in the IELTS exam. We strive to provide high-quality coaching that not only prepares students for the test but also enhances their overall English language proficiency and communication skills."
  },
  {
    id: "10",
    title: "Study Visas",
    slug: "study-visas",
    category: "International",
    duration: "As Required",
    mode: "Consultation",
    highlights: [
      "Deal in all study visas",
      "Almost all countries covered",
      "Trusted partner for international education",
      "Comprehensive guidance and expert advice",
      "Personalized support for overseas studies"
    ],
    syllabus: [
      { topic: "Visa Documentation", description: "Complete document preparation and verification" },
      { topic: "University Applications", description: "Application process and requirements" },
      { topic: "Interview Preparation", description: "Visa interview training and practice" },
      { topic: "Financial Planning", description: "Education loan and financial guidance" },
      { topic: "Pre-departure Briefing", description: "Essential information for studying abroad" }
    ],
    thumbnail: "/courses/jee-course.jpg",
    description: "Deal in all study visas for almost all countries. Your trusted partner in navigating the complexities of obtaining study visas for international education. At DC Classes, we understand the significance of pursuing education abroad and the challenges associated with securing the necessary visas. That's why we are committed to providing comprehensive guidance, expert advice, and personalized support to help students achieve their dreams of studying overseas."
  }
];