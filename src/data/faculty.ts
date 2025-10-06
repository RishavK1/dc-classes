export interface Faculty {
  id: string;
  name: string;
  photo: string;
  subjects: string[];
  experience: number;
  badges: string[];
  bio: string;
  achievements: string[];
}

export const faculty: Faculty[] = [
  {
    id: "1",
    name: "Dr. Rajesh Kumar",
    photo: "/faculty/teacher-1.jpg",
    subjects: ["Physics", "JEE", "NEET"],
    experience: 18,
    badges: ["IIT Delhi", "Ph.D.", "15000+ Students"],
    bio: "Dr. Rajesh Kumar is a renowned Physics educator with expertise in JEE & NEET preparation. His innovative teaching methods have helped thousands of students crack top engineering and medical entrance exams.",
    achievements: [
      "500+ students in IITs",
      "200+ students in AIIMS/Top Medical Colleges",
      "Author of 3 physics textbooks",
      "Former IIT Delhi faculty"
    ]
  },
  {
    id: "2",
    name: "Prof. Meera Sharma",
    photo: "/faculty/teacher-2.jpg",
    subjects: ["Chemistry", "JEE", "NEET"],
    experience: 15,
    badges: ["IIT Roorkee", "M.Sc.", "Gold Medalist"],
    bio: "Prof. Meera Sharma specializes in Organic and Inorganic Chemistry with a unique approach to simplifying complex concepts for competitive exam aspirants.",
    achievements: [
      "400+ students in top NITs and IITs",
      "250+ NEET qualifiers with top ranks",
      "National Award for Excellence in Teaching",
      "Published research in international journals"
    ]
  },
  {
    id: "3",
    name: "Mr. Amit Verma",
    photo: "/faculty/teacher-1.jpg",
    subjects: ["Mathematics", "JEE", "CBSE"],
    experience: 20,
    badges: ["IIT Kanpur", "22 Years Experience"],
    bio: "Mr. Amit Verma is a Mathematics wizard known for his problem-solving techniques and ability to make complex mathematical concepts easy to understand.",
    achievements: [
      "600+ IIT JEE selections",
      "100% board result success rate",
      "Developed unique shortcut methods",
      "Featured in education magazines"
    ]
  },
  {
    id: "4",
    name: "Dr. Priya Singh",
    photo: "/faculty/teacher-2.jpg",
    subjects: ["Biology", "NEET"],
    experience: 12,
    badges: ["AIIMS Delhi", "MBBS", "MD"],
    bio: "Dr. Priya Singh, a medical doctor turned educator, brings real-world medical knowledge to NEET preparation, making biology learning more practical and memorable.",
    achievements: [
      "300+ AIIMS & top medical college selections",
      "Clinical experience in teaching",
      "Specialized in Zoology & Botany",
      "Student satisfaction rating 4.9/5"
    ]
  },
  {
    id: "5",
    name: "Col. (Retd.) Vikram Singh",
    photo: "/faculty/teacher-1.jpg",
    subjects: ["NDA", "SSB", "GK"],
    experience: 25,
    badges: ["NDA Graduate", "Ex-Army Officer"],
    bio: "Col. Vikram Singh brings 25 years of defense experience to prepare aspirants for NDA written exam and SSB interview with real insights from his army career.",
    achievements: [
      "500+ NDA selections",
      "SSB interview success rate 80%",
      "Served in multiple operations",
      "Personality development expert"
    ]
  },
  {
    id: "6",
    name: "Mr. Suresh Gupta",
    photo: "/faculty/teacher-2.jpg",
    subjects: ["Political Science", "History", "IAS/IPS"],
    experience: 16,
    badges: ["JNU", "UPSC Qualified", "Author"],
    bio: "Mr. Suresh Gupta, a UPSC qualified educator, provides comprehensive guidance for civil services preparation with focus on current affairs and answer writing.",
    achievements: [
      "200+ UPSC selections",
      "Written 5 books on civil services",
      "Appears on news channels as expert",
      "Runs popular YouTube channel"
    ]
  }
];
